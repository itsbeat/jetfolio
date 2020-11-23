<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\View;

use App\Mail\NotificationMail;
use App\Mail\MailWrapper;

use Validator;
use Carbon\Carbon;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer;
use PhpOffice\PhpSpreadsheet\Reader;

use App\Models\User;
use App\Models\Role;
use App\Models\Session;
use App\Models\Status;
use App\Models\CoachingPlan;
use App\Models\Action;
use App\Models\Question;
use App\Models\Answer;
use App\Models\Availability;

class ResourceController extends Controller {
  private $debug = [
  ];

  private $resourceClassNames = [
    "users" => User::class,
    "roles" => Role::class,
  ];

  private function getResourceConfig($resourceName) {
    $resourceFileName = __DIR__ . "/../../resources/$resourceName.json";

    if (!file_exists($resourceFileName)) {
      Log::info("$resourceName is null");
      return null;
    }

    $resource = json_decode(
      file_get_contents($resourceFileName),
      true // dumped out as assoc array and NOT object
    );

    return $resource;
  }

  // GET LIST of RESOURCES
  public function index($resourceName, Request $request) {
    $this->resource = $this->getResourceConfig($resourceName);

    if ($this->resource == null) {
      return response("not-found", 404);
    }

    $page = $request->page ?: 0;
    $search = $request->search ?: null;
    $fieldFilter = $request->filter ?: null;

    $authUser = Auth::user();

    //$authUserRole = $authUser->roles()->first()->code;
    $authUserRole = $authUser->getRole();

    $config = $this->resource['config'];

    if (isset($this->resource['config'][$authUserRole])) {
      $config = $this->resource['config'][$authUserRole];
    } else {
      $config = [];
    }

    if (
      $config == []
      || !$config["canView"]
    ) {
      return response("unauthorized", 401);
    }

    $config['resourceFieldId'] = isset(
      $this->resource['massiveImportIdField']
    )
    ? $this->resource['massiveImportIdField']
    : "id";

    $resourceDebug = isset($this->debug[$resourceName]) ? $this->debug[$resourceName] : false;

    $data = [
      "config" => $config,
      "actions" => $this->getResourceActionsByRole(
        $resourceName,
        $authUserRole
      ),
      "name" => $this->resource['name'],
      "headers" => $this->resource['headers'],
      "resources" => $this->filterAndPaginate(
        $resourceName,
        $page,
        $search,
        $authUser,
        $fieldFilter
      ),
      "debug" => $resourceDebug
    ];

    return response($data, 200);
  }

  // DELETE RESOURCE
  public function destroy($resourceName, $id) {
    $this->resource = $this->getResourceConfig($resourceName);

    if ($this->resource == null) {
      return response("not-found", 404);
    }

    if ($this->doDestroy($resourceName, $id)) {
      return response("OK", 200);
    } else {
      return response(["error" => "resource_{$resourceName}_cannot_be_deleted"], 401);
    }
  }

  // GET RESOURCE
  public function show(Request $request, $resourceName, $id) {
    $this->resource = $this->getResourceConfig($resourceName);

    if ($this->resource == null) {
      return response("not-found", 404);
    }

    $isEdit = $request->isEdit;

    $headers = $this->resource['headers'];

    $config = $this->resource['config'];
    //$authUserRole = Auth::user()->roles()->first()->code;
    $authUserRole = Auth::user()->getRole();

    if (isset($this->resource['config'][$authUserRole])) {
      $config = $this->resource['config'][$authUserRole];
    } else {
      $config = [];
    }

    if (
      $config == []
      || $isEdit && !$config["canEdit"]
      || !$config["canView"]
    ) {
      return response("unauthorized", 401);
    }

    if ($isEdit) {
      foreach ($headers as $index => $header) {
        if (!isset($header['visible']['edit'])) {
          continue;
        }

        $editType = $header['edit']['type'];

        switch ($editType) {
        case 'select':
        case 'multi_select':
          $optionsGenerator = $header['option']['options'];

          $options = [];

          if (isset($optionsGenerator['resource'])) {
            $options = $this->preFilter($optionsGenerator['resource']);

            $options = $this->roleBasedFilter(
              $options,
              $optionsGenerator['resource'],
              Auth::user()
            );

            $options = $this->populateSubField(
              $options,
              $optionsGenerator['resource'],
              Auth::user()
            );

            if (isset($optionsGenerator['filter'])) {
              if (
                gettype($optionsGenerator['filter']) == "string" &&
                $optionsGenerator['filter'] != ""
              ) {
                $filter = explode(":", $optionsGenerator['filter']);

                $comparisonSign = "=";

                if (count($filter) == 3) {
                  // We indicated also the comparison!
                  $comparisonSign = $filter[2];
                }

                $options = $options->where(
                  $filter[0],
                  $comparisonSign,
                  $filter[1]
                );
              }

              if (gettype($optionsGenerator['filter']) == "array") {
                foreach ($optionsGenerator['filter'] as $filterObj) {
                  $filter = explode(":", $filterObj);

                  $comparisonSign = "=";

                  if (count($filter) == 3) {
                    // We indicated also the comparison!
                    $comparisonSign = $filter[2];
                  }

                  $options = $options->where(
                    $filter[0],
                    $comparisonSign,
                    $filter[1]
                  );
                }
              }
            }

            $options = $options->get();
          }

          if (isset($optionsGenerator['field'])) {
            $options = $optionsGenerator['field'];
          }

          if (isset($optionsGenerator['list'])) {
            $options = $optionsGenerator['list'];
          }


          $header['option']['options'] = $options;
          break;
        }

        $headers[$index] = $header;
      }
    }

    $resource = $this->marshallResourceTemplate($resourceName);

    if ($id != 'add') {
      $query = $this->resource['className']::query();

      $resource = $this->populateSubField($query, $resourceName, Auth::user())
                       ->where("id", $id)
                       ->first();
    }

    if ($resource == null) {
      return response("not-found", 404);
    }

    $resourceDebug = isset($this->debug[$resourceName]) ? $this->debug[$resourceName] : false;

    $data = [
      "name" => $this->resource['name'],
      "headers" => $headers,
      "config" => $config,
      "resource" => $resource,
      "debug" => $resourceDebug
    ];

    return response($data, 200);
  }

  // POST RESOURCE
  public function store(Request $request, $resourceName) {
    $this->resource = $this->getResourceConfig($resourceName);

    if ($this->resource == null) {
      return response("not-found", 404);
    }

    $resourceToSave = $request->resource;

    if (!isset($request->resource['id'])) {
      // Adding the resource
      $resourceTemplate = $this->marshallResourceTemplate($resourceName, false);

      $resourceToSave = [];

      foreach ($resourceTemplate as $field => $value) {
        if (isset($request->resource[$field])) {
          // Add to resourceToSave only if the field in the template
          // is present in the resource used
          $resourceToSave[$field] = $request->resource[$field];
        }
      }
    }

    $result = $this->storeFromArrayAndName($resourceToSave, $resourceName);

    return response($result, $result['statusCode']);
  }

  // POST Massive Resource
  public function massiveStore(Request $request, $resourceName) {
    $this->resource = $this->getResourceConfig($resourceName);

    if ($this->resource == null) {
      return response("not-found", 404);
    }

    // Check if user can import this resource
    $authUserRole = Auth::user()->getRole();

    if (
      !isset($this->resource['config'][$authUserRole])
      || !isset($this->resource['config'][$authUserRole]['canImport'])
      || $this->resource['config'][$authUserRole]['canImport'] == false
    ) {
      return response("not-authorized", 401);
    }

    // Increasing the execution time to 3 minutes
    ini_set('max_execution_time', 180); //3 minutes

    try {
      $originalFileName = $request->file('resources')->getClientOriginalName();

      $fileNameWithoutExtension = explode(".", $originalFileName)[0];

      if (count(explode("_", $fileNameWithoutExtension)) < 2) {
        return response(
          [
            "type" => "generic",
            "message" =>
            "Stai importando un file non generato dalla piattaforma. Prova ad esportare il file e importarlo nuovamente."
          ],
          500
        );
      }

      // Example: <resource_name>_<import_method>.xlsx
      $resourceNameToEdit = explode("_", $fileNameWithoutExtension)[0];
      $importMethodFromFile = explode("_", $fileNameWithoutExtension)[1];

      if ($resourceNameToEdit != $resourceName) {
        return response(
          [
            "type" => "generic",
            "message" =>
            "Stai cercando di importare un file relativo ad un'altra risorsa!"
          ],
          500
        );
      }

      $fileCreatedByTheSystem = true;

      if (!in_array($importMethodFromFile, ["template", "data"])) {
        $fileCreatedByTheSystem = false;
      }

      if (!$fileCreatedByTheSystem) {
        return response(
          [
            "type" => "generic",
            "message" =>
            "Il nome del file non risulta creato dal nostro sistema, pertanto non è possibile importarlo"
          ],
          500
        );
      }

      $importMethod = $importMethodFromFile;

      $filePath = "uploads/";
      $fileName = $resourceName . "_" . $importMethod . ".xlsx";

      // Save new file
      $resourceFile = $request
        ->file('resources')
        ->storeAs($filePath, $fileName);

      // Load new file
      try {
        $reader = new Reader\Xlsx();
        $resourceList = $reader
          ->load(storage_path() . "/app/" . $filePath . $fileName)
          ->getActiveSheet()
          ->toArray();
      } catch (Exception $e) {
        return response(
          [
            "type" => "generic",
            "message" =>
            "Errore nell'import della risorsa: file non presente, provare ad esportare di nuovo e a ripetere la procedura di import"
          ],
          500
        );
      }

      unlink(storage_path() . "/app/" . $filePath . $fileName);

      $newResourceListIDS = [];

      // Remove header from $resourceList
      array_shift($resourceList);

      $data = [];

      $validatorArray = [
        "create" => [],
        "edit" => []
      ];

      $errors = [];

      $headers = $this->getMassiveHeaders($resourceName, $importMethod);
      $headersAssoc = [];

      // Extend the validator with custom fields
      $this->extendValidator();

      // Create Validator array
      foreach ($headers as $header) {
        foreach (['create', 'edit'] as $validatorMode) {
          $validatorArray[$validatorMode][$header['key']] = isset(
            $header['validators_' . $validatorMode]
          )
          ? $header['validators_' . $validatorMode]
          : $header['validators'];
        }

        $headersAssoc[$header['key']] = $header;
      }

      // Add the delete header if we are in the data importMethod
      if ($importMethod == 'data') {
        $headers[] = [
          "key" => "delete"
        ];
      }

      // To give to new resource a new unique ID
      // we need to keep track of the number
      // of newly added resources
      $addedResources = 0;

      // Transform from 0-indexed field to associative ones
      // resourceList
      foreach ($resourceList as $rowIndex => $row) {
        // Don't use the header
        $dataRow = [];

        $rowIsEmpty = true;

        // Check if row is empty of not
        foreach ($row as $field) {
          if ($field != null) {
            $rowIsEmpty = false;
            break;
          }
        }

        if (!$rowIsEmpty) {
          foreach ($headers as $headerIndex => $header) {
            $dataRow[$header['key']] = $row[$headerIndex];
          }

          $resourceIdField = isset(
            $this->resource['massiveImportIdField']
          )
          ? $this->resource['massiveImportIdField']
          : 'id';

          // Check which action to perform
          $actionsToPerform = [];

          // Delete resource that no longer exists
          // If there's the DELETE header with ELIMINA inside delete it
          // otherwise, don't do nothing
          if ($importMethod == "data") {
            if (
              $dataRow['delete'] == 'CANCELLA' ||
              $dataRow['delete'] == 'ELIMINA'
            ) {
              $actionsToPerform[] = "delete";
            }
          }

          // Check if the value corresponding to the resource IdField
          // is already in the DB. In this case the action is a edit,
          // otherwise a create
          $isResourceInDB = $this->resource['className']
            ::where($resourceIdField, "=", $dataRow[$resourceIdField])
              ->first();

          if (!$isResourceInDB) {
            $actionsToPerform[] = "add";

            // Overwrite the id since this dataRow does not have it
            $dataRow['id'] = $addedResources++;
          } else {
            $actionsToPerform[] = "edit";
          }

          if ($actionsToPerform == ['delete', 'add']) {
            return response(
              [
                "type" => "generic",
                "message" =>
                "Si sta cercando di eliminare una risorsa non ancora creata. Riga: " .
                ($rowIndex + 1 + 1)
              ],
              500
            );
          } else {
            $dataRow['id'] =
              $actionsToPerform[0] . "_" . $dataRow[$resourceIdField];

            $dataRow['line'] = $rowIndex;
            $data[$dataRow['id']] = $dataRow;
          }
        }
      }

      $changesToConfirm = [
        "add" => 0,
        "edit" => 0,
        "delete" => 0
      ];

      // Evaluate errors before creating anything
      foreach ($data as $index => $row) {
        // New criterion for checking if resource has to be added
        // we need to go to the db and find if the row['idField'] of
        // this resource is already there
        $operationOnResource = explode("_", $row['id'])[0];
        $row['id'] = explode("_", $row['id'])[1];

        switch ($operationOnResource) {
        case 'add':
          // Validate before inserting
          // Make row['id'] again null for validation
          $row['id'] = null;

          $this->resourceBeingValidated = $row;
          $validator = Validator::make($row, $validatorArray['create']);

          if (count($validator->errors())) {
            $errors[] = [
              "row" => $row['line'],
              "errors" => $validator->errors()
            ];
          }

          $changesToConfirm['add'] += 1;
          break;

        case 'edit':
          // Always edit resources that are present
          $this->resourceBeingValidated = $row;
          $validator = Validator::make($row, $validatorArray['edit']);

          if (count($validator->errors())) {
            $errors[] = [
              "row" => $row['line'],
              "errors" => $validator->errors()
            ];
          }
          $changesToConfirm['edit'] += 1;
          break;

        case 'delete':
          $changesToConfirm['delete'] += 1;
        }
      }

      if (count($errors) > 0) {
        return response(
          [
            "type" => "format",
            "errors" => $errors
          ],
          500
        );
      }

      $requestConfirmMode = $request->input("request_confirm");

      // If no errors has been thrown
      // and we're in request_confirm mode
      if ($requestConfirmMode == "confirm") {
        return response($changesToConfirm, 200);
      }

      $results = [
        "created" => 0,
        "modified" => 0,
        "deleted" => 0,
        "debug" => [],
        "headers" => $headers
      ];

      // Insert/Edit fields if no errors found
      foreach ($data as $index => $row) {
        // New criterion for checking if resource has to be added
        // we need to go to the db and find if the row['idField'] of
        // this resource is already there

        $operationOnResource = explode("_", $row['id'])[0];
        $row['id'] = explode("_", $row['id'])[1];

        switch ($operationOnResource) {
        case 'add':
          /*******************
           * CREATE RESOURCE *
           *******************/

          // Validate before inserting
          // Make row['id'] again null for validation
          $row['id'] = null;

          $this->resourceBeingValidated = $row;
          $validator = Validator::make($row, $validatorArray['create']);

          // Create new resource
          $newResource = $this->marshallResourceTemplate(
            $resourceName,
            false
          );

          foreach ($newResource as $resourceField => $resourceValue) {
            if (isset($row[$resourceField])) {
              $header = $headersAssoc[$resourceField];

              // Continue if this field is createOnly
              if (isset($header['editOnly']) && $header['editOnly']) {
                continue;
              }

              $fieldType = isset($header['type']) ? $header["type"] : "field";

              switch ($fieldType) {
              case 'field':
                $newResource[$resourceField] = $row[$resourceField];
                break;

              case 'boolean':
                $newResource[$resourceField] = $row[$resourceField] != "0";
                break;

              case 'select':
                $relationshipResource = $this->resourceClassNames[
                  $header['resource']
                ]
                ::where($header['field'], $row[$resourceField])
                  ->first();

                $newResource[$resourceField] = $relationshipResource;
                break;

              case 'multi_select':
                // Array containing the actual resources
                // identified by the 'field' field on the 'resource'
                // resource
                $multiRelRes = [];

                // Array of 'field' fields
                $multiRelResFields = explode(",", $row[$resourceField]);

                $multiRelRes = $this->resourceClassNames[
                  $header['resource']
                ]
                ::whereIn($header['field'], $multiRelResFields)
                  ->get();

                $newResource[$resourceField] = $multiRelRes;
                break;

              default:
                break;
              }
            }
          }

          $results['debug'][] = $newResource;

          $resourceCreationResult = $this->storeFromArrayAndName(
            $newResource,
            $resourceName,
            "id",
            false
          );

          if ($resourceCreationResult['status'] == 'success') {
            $results['created'] += 1;
          } else {
            $errors[] = [
              "row" => $row['line'],
              "errors" => $resourceCreationResult['errors']
            ];
          }
          break;

        case 'edit':
          /*****************
           * EDIT RESOURCE *
           *****************/
          foreach ($row as $resourceField => $resourceValue) {
            // Continue if there is no header
            if (!isset($headersAssoc[$resourceField])) {
              continue;
            }

            $header = $headersAssoc[$resourceField];

            // Continue if this field is createOnly
            if (isset($header['createOnly']) && $header['createOnly']) {
              continue;
            }

            $fieldType = isset($header['type']) ? $header["type"] : "field";

            switch ($fieldType) {
            case 'field':
              // Do nothing, its ok
              break;

            case 'boolean':
              $row[$resourceField] = $row[$resourceField] != "0";
              break;

            case 'select':
              $relationshipResource = $this->resourceClassNames[
                $header['resource']
              ]
              ::where($header['field'], $row[$resourceField])
                ->first();

              $row[$resourceField] = $relationshipResource;
              break;

            case 'multi_select':
              // Array containing the actual resources
              // identified by the 'field' field on the 'resource'
              // resource
              $multiRelRes = [];

              // Array of 'field' fields
              $multiRelResFields = explode(",", $row[$resourceField]);

              $multiRelRes = $this->resourceClassNames[$header['resource']]
                ::whereIn($header['field'], $multiRelResFields)
                  ->get();

              $row[$resourceField] = $multiRelRes;
              break;
            }
          }

          $resourceCreationResult = $this->storeFromArrayAndName(
            $row,
            $resourceName,
            $resourceIdField,
            false
          );

          if ($resourceCreationResult['status'] == 'success') {
            $results['modified'] += 1;
          } else {
            $errors[] = [
              "row" => $row['line'],
              "errors" => $resourceCreationResult['errors']
            ];
          }
          break;

        case 'delete':
          if ($this->doDestroy($resourceName, $row['id'])) {
            $results["deleted"] += 1;
          }

          break;
        }
      }

      return $results;
    } catch (\Exception $e) {
      // TODO: save errors in a table for future
      return response(
        [
          "err_line" => $e->getLine(),
          "err_file" => $e->getFile(),
          "err_message" => $e->getMessage(),
          "type" => "generic",
          "message" => "Errore generico nella procedura di import.
          Assicurarsi di aver seguito le istruzioni per una corretta procedura di upload"
        ],
        500
      );
    }
  }

  // GET Massive Resource LIST
  public function massiveIndex(Request $request, $resourceName) {
    $this->resource = $this->getResourceConfig($resourceName);

    if ($this->resource == null) {
      return response("not-found", 404);
    }

    // Check if user can export this resource
    $authUserRole = Auth::user()->getRole();

    if (
      !isset($this->resource['config'][$authUserRole])
      || !isset($this->resource['config'][$authUserRole]['canExport'])
      || $this->resource['config'][$authUserRole]['canExport'] == false
    ) {
      return response("not-authorized", 401);
    }

    $resourceConfig = $this->resource['config'][$authUserRole];

    $exportMethod = $request->exportMethod;

    if (!$exportMethod) {
      return response("missing_export_method", 500);
    }

    $spreadsheet = new Spreadsheet();

    // Get headers from $this->resourceHeaders
    $fileHeaders = $this->getMassiveHeaders($resourceName, $exportMethod);

    $dataArray = [];

    // Write Headers to first row of file
    $dataArray[] = [];

    foreach ($fileHeaders as $index => $header) {
      $dataArray[0][] = $header['text'];
    }

    if ($exportMethod == 'data') {
      if (
        isset($resourceConfig['canImport'])
        && $resourceConfig['canImport'] == true
      ) {
        // Add the delete header to the Headers
        $dataArray[0][] = "Cancella";
      }

      // Write each row to file
      $resourceList = $this->preFilter($resourceName)->get();

      foreach ($resourceList as $resource) {
        $dataRow = [];

        foreach ($fileHeaders as $header) {
          $fieldType = isset($header['type']) ? $header["type"] : "field";

          switch ($fieldType) {
            case 'field':
              $resourceValue = $resource[$header['key']];
              break;

            case 'boolean':
            case 'action':
              $resourceValue = $resource[$header['key']] ? "1" : "0";
              break;

            case 'select':
              $resourceValue = getNestedField($resource[$header['key']], $header['field']);
              break;

            case 'multi_select':
              $multiRelResFields = [];

              foreach ($resource[$header['key']] as $multiRelResItem) {
                $multiRelResFields[] = getNestedField($multiRelResItem, $header['field']);
              }

              $resourceValue = implode(",", $multiRelResFields);

              break;

            case 'date':
              $dateUnformatted = $resource[$header['key']];

              $dateFormat = "d/m/y";

              if (isset($header['dateFormat'])) {
                $dateFormat = $header['dateFormat'];
              }

              $resourceValue = Carbon::parse($dateUnformatted)->format($dateFormat);
              break;

            case 'tag':
              $resourceValue = $resource[$header['key']];

              if (isset($header['list'])) {
                $tagId = $resourceValue;

                foreach($header['list'] as $option) {
                  if ($option['id'] == $tagId) {
                    $resourceValue = isset($option["text"]) ? $option["text"] : "";
                    break;
                  }
                }
              }

              break;

            default:
              $resourceValue = "";
              break;
          }

          // Show only if exportHidden is not present of false
          if (
            isset($header['exportHidden']) &&
            $header['exportHidden'] == true
          ) {
            $dataRow[] = "";
          } else {
            $dataRow[] = $resourceValue;
          }
        }

        $dataArray[] = $dataRow;
      }
    }

    // Write array to file
    $spreadsheet->getActiveSheet()->fromArray($dataArray);

    $fileName = $resourceName . "_" . $exportMethod;

    $filePath = storage_path() . "/app/" . $fileName . ".xlsx";

    // Write document to file
    $writer = new Writer\Xlsx($spreadsheet);
    $writer->save($filePath);

    // Get file content to send as string
    $fileContent = file_get_contents($filePath);

    // Remove the file once the content has been read
    unlink($filePath);

    return response($fileContent, 200)
      ->header("filename", $fileName)
      ->header("content-type", "application/xlsx");
  }

  private function extendValidator() {
    $class = $this;

    // Extend Validators Array
    Validator::extend("isaresource", function (
      $attribute,
      $value,
      $parameters,
      $validator
    ) use ($class) {
      $resourceName = $parameters[0];
      $resourceField = $parameters[1];
      $isList = $parameters[2] == "list";

      $resourceTokens = [];

      $resourceType = gettype($value);

      if ($isList) {
        // Case 1: array of array with id
        // Case 2: string separated by commas
        switch ($resourceType) {
          case 'string':
            // Case in which we have multiple resource and we
            // need to figure out if everyone is a resource of
            // the correct type
            $resourceTokens = explode(",", $value);
            break;

          case 'array':
            foreach ($value as $resource) {
              // This is not present, since its the empty string
              $resourceTokenValue = "";

              if (isset($resource[$resourceField])) {
                $resourceTokenValue = $resource[$resourceField];
              }

              $resourceTokens[] = $resourceTokenValue;
            }
            break;
        }
      } else {
        // Case is single
        switch ($resourceType) {
          case 'array':
            // This is the case when we have a full resource
            if (isset($value[$resourceField])) {
              $resourceTokens[] = $value[$resourceField];
            } else {
              $resourceTokens[] = "";
            }

            break;

          default:
            // Case in which $value is the actual name
            // it can be string, int, double
            $resourceTokens[] = $value;
            break;
        }
      }

      $isResourceOfCorrectType = true;
      $wrongResources = [];

      $resourceConfig = $class->getResourceConfig($resourceName);
      $resourceClassName = $resourceConfig['className'];

      foreach ($resourceTokens as $token) {
        $resourceOfCorrectType = $resourceClassName
          ::where($resourceField, "=", $token)
          ->first();

        if ($resourceOfCorrectType == null) {
          $wrongResources[] = $token;
        }

        $isResourceOfCorrectType &= $resourceOfCorrectType != null;
      }

      $validator->addReplacer('isaresource', function (
        $message,
        $attribute,
        $rule,
        $validators
      ) use ($wrongResources, $class, $resourceConfig) {
        $resourceName = str_replace("_", " ", $resourceConfig['name']['singular']);

        $wrongResourcesStr = implode(",", $wrongResources);

        $message = str_replace(':errors', $wrongResourcesStr, $message);
        $message = str_replace(':resource', $resourceName, $message);

        return $message;
      });

      // Evaluate if $isResourceOfCorrectType is a valid resource
      // of type $resource_name
      return $isResourceOfCorrectType;
    });

    Validator::extend("admincanedit", function (
      $attribute,
      $value,
      $parameters,
      $validator
    ) use ($class) {
      $validator->addReplacer('admincanedit', function (
        $message,
        $attribute,
        $rule,
        $validators
      ) use ($class, $value) {
        $message = str_replace(':matricola', $value, $message);

        return $message;
      });

      $adminProjects = Auth::user()
        ->managedProjects()
        ->get()
        ->pluck("id")
        ->toArray();

      $user = User::where($attribute, "=", $value)->first();

      $adminCanEdit = false;

      if (!$user) {
        //Creating user, so we don't need to check if can edit
        $adminCanEdit = true;
      } else {
        if ($user->project_id) {
          $adminCanEdit = in_array($user->project_id, $adminProjects);
        }
      }

      if (Auth::user()->getRole() == 'superadmin') {
        // Superadmin can edit every project
        $adminCanEdit = true;
      }

      return $adminCanEdit;
    });

    Validator::extend("projectcanchange", function (
      $attribute,
      $value,
      $parameters,
      $validator
    ) use ($class) {
      $validator->addReplacer('projectcanchange', function (
        $message,
        $attribute,
        $rule,
        $validators
      ) use ($class, $value) {
        return $message;
      });

      $projectCanChange = true;

      $targetUser = $validator->getData();
      $authUser = Auth::user();
      $newProject = $value;

      if (
        isset($newProject['id'])
        && isset($targetUser['project']['id'])
      ) {
        $newProjectId = $newProject['name'];
        $targetUserProjectId = $targetUser['project']['id'];

        if ($newProjectId != $targetUserProjectId) {
          // Check if user has active projects
          $activePDACount = PDA
            ::where("user_id", $targetUser['id'])
            ->whereIn("status_id", Status
                ::whereNotIn("code", ["expired", "closed"])
                ->where("type", "pda")
                ->get()
                ->toArray()
            )
            ->count();

          if ($activePDACount > 0) {
            // If the user has more
            $projectCanChange = false;
          }
        }
      }

      return $projectCanChange;
    });

    Validator::extend("hassameadmin", function (
      $attribute,
      $value,
      $parameters,
      $validator
    ) use ($class) {
      $hasSameAdmin = false;

      $targetUser = (object) $validator->getData();

      $newProjectId =
        gettype($targetUser->project) == 'array'
        // Case: edit from web UI
        ? $targetUser->project['name']
        // Case: edit from massive file
        : $targetUser->project;

      $newHRId =
        gettype($targetUser->hr) == 'array'
        // Case: edit from web UI
        ? $targetUser->hr['matricola']
        // Case: edit from massive file
        : $targetUser->hr;

      $targetUserHR = User::where("matricola", $newHRId)->first();
      $targetUserProject = Project::where("name", $newProjectId)->first();

      $validator->addReplacer('hassameadmin', function (
        $message,
        $attribute,
        $rule,
        $validators
      ) use ($class, $targetUserHR, $targetUserProject) {
        $message = str_replace(':manager', $targetUserHR->full_name, $message);
        $message = str_replace(':project', $targetUserProject->name, $message);

        return $message;
      });

      try {
        $hrAdmin = $targetUserHR->superhr->admin->id;
        $projectAdmin = $targetUserProject->admin->id;
      } catch (\Exception $e) {
        return false;
      }

      $hasSameAdmin = $hrAdmin == $projectAdmin;

      return $hasSameAdmin;
    });
  }

  private function filterResources($query, $resourceName, $search) {
    if ($search == null) {
      return $query;
    }

    // Escape search string, to avoid SQL injection
    $search = DB::connection()->getPdo()->quote('%' . $search . '%');

    $whereClauses = [];

    $resourceTableName = with(
      new $this->resource['className']()
    )->getTable();

    // Use this to differentiate the name
    // of the join in case in which we need to
    // join with the same table of the resource
    $joinTableIntegerSeed = 0;

    foreach ($this->resource['headers'] as $field) {
      $fielEditType = $field['edit']['type'];

      switch ($fielEditType) {
        case 'text':
        case 'number':
        case 'textarea':
          $whereClauses[] =
            "$resourceTableName." . $field['value'] . " LIKE $search";
          break;

        case 'select':
          // Here we need to get these information:
          // 1. Name of the table corresponding to this resource -> resourceTableName
          // 2. Name of the table corresponding to the resource we need to join with -> joinTableName
          // 3. Name of the field of the table to join which is present on the view
          // We get those information from the header, they are in different sub fields, which are relative
          // to their particular type (select, multi-select). They are very wide spread, maybe collecting and tagging them
          // better would be a good idea. For the future.
          //
          // If options has a text_for_search, we need to split them
          // on the | in order to accomodate for fields, link full_name, that
          // are not in the DB -> correct this!
          $textForJoins = [];

          if (!isset($field['option'])) {
            break;
          }

          if (isset($field['option']['text'])) {
            $textForJoins = [$field['option']['text']];
          }

          if (isset($field['option']['text_for_search'])) {
            $textForJoins = explode("|", $field['option']['text_for_search']);
          }

          $joinTableClassName = $this->getResourceConfig($field['option']['options']['resource'])['className'];

          $joinTableName = with(
            new $joinTableClassName()
          )->getTable();

          $joinTableAsName =
            "table_" . $joinTableName . "_" . (string) $joinTableIntegerSeed++;

          $joinFieldName = $field['edit']['value'] . "_id";

          $query = $query->join(
            "$joinTableName as $joinTableAsName",
            "$joinTableAsName.id",
            "=",
            "$resourceTableName.$joinFieldName"
          );

          foreach ($textForJoins as $text) {
            $whereClauses[] = "$joinTableAsName." . $text . " LIKE $search";
          }

          break;

        case 'multi-select':
          break;
      }
    }

    // Put everything inside () in order to separate clause
    // of filtering from deleted_at and other clauses
    $query = $query->whereRaw("(" . implode(" OR ", $whereClauses) . ")");

    $query = $query->select("$resourceTableName.*");

    return $query;
  }

  private function fieldFilterResources($query, $resourceName, $filter) {
    if ($filter == null) {
      return $query;
    }

    $filterObject = json_decode($filter, true);

    $resource = $this->getResourceConfig($resourceName);

    foreach ($filterObject as $filterField => $filterValue) {
      // TODO: we must assert the type of the field related
      // to the resource, so it if is foreign_key, many to many or simple field.
      // For now, just have a lookup table with resourceName, field => type
      if (isset($resource['fieldFilter'][$filterField])) {
        switch ($resource['fieldFilter'][$filterField]['type']) {
          case 'foreign':
            break;

          case 'field':
            $query = $query->where($filterField, "=", $filterValue);
            break;

          case 'many':
            $resourceToFilter = $resource['fieldFilter'][$filterField]['resource'];

            $query = $query->whereHas($resourceToFilter, function($query)
              use ($filterField, $filterValue)
            {
              $query->where($filterField, "=", $filterValue);
            });

            break;
        }
      } else {
        switch ($filterField) {
          case '_limit':
            $query = $query->limit($filterValue);
            break;

          default:
            $resourceTableName = with(
              new $resource['className']()
            )->getTable();

            $resourceTableColumns = Schema::getColumnListing($resourceTableName);

            if (in_array($filterField, $resourceTableColumns)) {
              // Add only if $filterField is one of the column  of this table
              $query = $query->where($filterField, $filterValue);
            }

            break;
        }
      }
    }

    return $query;
  }

  private function preFilter($resourceName) {
    $resource = $this->getResourceConfig($resourceName);

    $className = $resource['className'];

    $query = $className::query();

    $resourcePreFilters = isset($resource['preFilters']) ? $resource['preFilters'] : [];

    if ($resourcePreFilters != []) {
      $scopeFunction = $resourcePreFilters[0];
      $query = $query->{$scopeFunction}();
    }

    // Group By Query Stage
    // check if groupBy is not null nor empty
    if (
      isset($resource['groupBy']) &&
      !!$resource['groupBy']
    ) {
      $query = $query->groupBy($resource['groupBy']);
    }

    return $query;
  }

  private function roleBasedFilter($query, $resourceName, $user) {
    $userRole = $user->getRole();

    $resource = $this->getResourceConfig($resourceName);

    if (isset($resource['roleBasedFilters'][$userRole])) {
      foreach (
        $resource['roleBasedFilters'][$userRole]
        as $whereQuery
      ) {
        $whereClause = "";

        if ($whereQuery[2][0] == "_") {
          // In case of underscore, we need to apply a method
          // on the user requesting the resource
          $whereClause = $user->{explode("_", $whereQuery[2])[1]}();
        } else {
          $whereClause = $user->{$whereQuery[2]};
        }

        switch ($whereQuery[1]) {
          case "=":
            $query = $query->where($whereQuery[0], "=", $whereClause);
            break;
          case "IN":
            $query = $query->whereIn($whereQuery[0], $whereClause);
        }
      }
    }

    return $query;
  }

  private function orderResources($query, $resourceName) {
    if (isset($this->resource['orderBy'])) {
      foreach ($this->resource['orderBy'] as $orderByFilter) {
        // $orderByFilter is an array with at max 2 fields:
        // <resource_table>.<resource_field>
        // <resource_field_on_this_resource>
        // And a mode:
        // <resource_field>:<asc|desc>
        $mode = "asc";

        if (strpos($orderByFilter[0], ":") > -1) {
          $mode = explode(":", $orderByFilter[0])[1];
          $orderByFilter[0] = explode(":", $orderByFilter[0])[0];
        }

        if (strpos($orderByFilter[0], ".") > -1) {
          // Case we need to have the inner join since the filter is of type
          // <resource_table>.<resource_field>
          $joinTableName = explode(".", $orderByFilter[0])[0];
          $resourceTableName = with(
            new $this->resource['className']()
          )->getTable();
          $resourceTableField = $orderByFilter[1];

          // get current joins in order not to duplicate
          // join on this query
          $actualJoins = $query->getQuery()->joins ?: [];

          $joinIsAlreadyPresent = false;

          foreach ($actualJoins as $join) {
            if ($join->table == $joinTableName) {
              // Join is already present, skip!
              $joinIsAlreadyPresent = true;
              break;
            }
          }

          if (!$joinIsAlreadyPresent) {
            $query->join(
              $joinTableName,
              "$joinTableName.id",
              "=",
              "$resourceTableName.{$resourceTableField}_id"
            );
          }
        }

        $query->orderBy($orderByFilter[0], $mode);
      }

      return $query;
    }

    return $query;
  }

  private function getSqlQueryWithBindings($query) {
    return Str::replaceArray("?", $query->getBindings(), $query->toSql());
  }

  private function whereFilter($query, $resourceName) {
    if (isset($this->resource['whereFilters'])) {
      $resourceWhereFilters = $this->resource['whereFilters'];

      $resourceTableName = with(
        new $this->resource['className']()
      )->getTable();

      foreach ($resourceWhereFilters as $filter) {
        $joinTablePrefix = "";

        if (isset($filter['join'])) {
          // Make the join
          $filterJoinParams = $filter['join'];

          $joinTableName = $filterJoinParams[0];

          $queryJoins = $query->getQuery()->joins ?: [];

          $joinIsAlreadyPresent = false;

          foreach ($queryJoins as $join) {
            if ($join->table == $joinTableName) {
              // Join is already present, skip!
              $joinIsAlreadyPresent = true;
              break;
            }
          }

          if (!$joinIsAlreadyPresent) {
            $query->join(
              $joinTableName,
              "$joinTableName." . $filterJoinParams[1],
              "=",
              "$resourceTableName.{$filterJoinParams[2]}"
            );
          }

          $joinTablePrefix = $joinTableName . ".";
        }

        $filterCondition = $filter['condition'];

        $filterFieldName = $joinTablePrefix . $filterCondition[0];

        switch ($filterCondition[1]) {
          case 'NOT-NULL':
            $query = $query->whereNull($filterFieldName);
            break;
        }
      }
    }

    return $query;
  }

  private function filterAndPaginate(
    $resourceName,
    $page,
    $search,
    $user,
    $fieldFilter = null
  ) {
    // PreFilter
    $query = $this->preFilter($resourceName);

    // RoleBaseFiltering
    $query = $this->roleBasedFilter($query, $resourceName, $user);

    // Filter from UI
    $query = $this->filterResources($query, $resourceName, $search);

    // Filter resource by field
    $query = $this->fieldFilterResources($query, $resourceName, $fieldFilter);

    // Paginate
    $paginationResult = $this->paginateResources($query, $page, $fieldFilter);

    // Populate subfields
    $query = $this->populateSubField(
      $paginationResult['query'],
      $resourceName,
      $user,
      $fieldFilter
    );

    // Order resources
    $query = $this->orderResources($query, $resourceName);

    // Where Filters
    $query = $this->whereFilter($query, $resourceName);

    // Select only fields of this resource
    $resourceTableName = with(
      new $this->resource['className']()
    )->getTable();

    $query = $query->select("$resourceTableName.*");

    $resources = $query->get();

    return [
      "query" => $this->getSqlQueryWithBindings($query),
      "pagination" => $paginationResult['pagination'],
      "resources" => $resources
    ];
  }

  private function populateSubField($query, $resourceName, $user, $filter = null) {
    $resource = $this->getResourceConfig($resourceName);

    $subFields = isset($resource['subFields']) ? $resource['subFields'] : [];

    $subFieldsForWith = [];

    $resCtrl = $this;

    foreach ($subFields as $subField) {
      if (gettype($subField) == "array") {
        // Case [<populate_field>, <resource_name>]
        // In this case I want to run the roleBasedFilter
        $query = $query->with([
          $subField[0] => function ($subQuery) use (
            $resCtrl,
            $user,
            $resourceName,
            $subField,
            $filter
          ) {
            $subQuery = $resCtrl->roleBasedFilter($subQuery, $subField[1], $user);
            $subQuery = $resCtrl->fieldFilterResources($subQuery, $subField[1], $filter);

            // Populate subfields (if any)
            if (isset($subField[2])) {
              $subQuery->with($subField[2]);
            }


            return $subQuery;
          }
        ]);
      } else {
        $query = $query->with($subField);

      }
    }

    //Log::info($this->getSqlQueryWithBindings($query));
    return $query;
  }

  private function paginateResources($query, $page = 0, $filter = []) {
    $resourcesCount = $query->count();

    $filter = json_decode($filter);

    if (isset($filter->_limit)) {
      $isPagination = false;
    } else {
      $isPagination = $resourcesCount > 50;
    }

    if ($isPagination) {
      $query->skip(50 * $page)->limit(50);
    }

    return [
      "query" => $query,
      "pagination" => [
        "maxPages" => (int) ($resourcesCount / 50) + 1,
        "currentPage" => (int) $page
      ]
    ];
  }

  private function marshallResourceTemplate(
    $resourceName,
    $sendingToClient = true
  ) {
    if (
      !isset($this->resource['template'])
      || $this->resource['template'] == null
    ) {
      return null;
    }

    $resourceTemplate = [];

    foreach ($this->resource['template'] as $key => $field) {
      if (gettype($field) == 'array') {
        switch ($field['action']) {
          case 'marshall':
            $resourcesGenerator = $field['resources'];

            $marshallResourceConfig = $this->getResourceConfig($resourcesGenerator['name']);

            $resources = $marshallResourceConfig['className']::query();

            if ($resourcesGenerator['filter'] != "") {
              $filter = explode(":", $resourcesGenerator['filter']);
              $resources = $resources->where($filter[0], $filter[1]);
            }

            if ($resourcesGenerator['many']) {
              $resources = $resources->get();
            } else {
              $resources = $resources->get();
            }

            $resourceTemplate[$key] = $resources;
            break;

          case 'array':
            $resourceTemplate[$key] = $field['array'];
            break;

          case 'hash':
            // Do this only if we are
            if (!$sendingToClient) {
              // Create a hash password only if we
              //$newRandomHash = $this->generateRandomString(16);
              //TODO: da modificare quando in produzione!!
              $newRandomHash = "password";
              $resourceTemplate[$key] = Hash::make($newRandomHash);
              $resourceTemplate['clear_password'] = $newRandomHash;
            }

            break;
        }
      } else {
        $resourceTemplate[$key] = $field;
      }
    }

    return $resourceTemplate;
  }

  private function getResourceActionsByRole($resourceName, $authUserRole) {
    $actions = $this->resource['actions'];

    $filteredResourceActions = [];

    foreach ($this->resource['actions']['custom'] as $action) {
      if (
        isset($action['roles']) &&
        in_array($authUserRole, $action['roles'])
      ) {
        $filteredResourceActions[] = $action;
      }
    }

    $actions['custom'] = $filteredResourceActions;

    return $actions;
  }


  private function doDestroy($resourceName, $id) {
    $config = $this->resource['config'];
    $authUser = Auth::user();
    $authUserRole = $authUser->getRole();

    $canBeDeleted = true;
    $hasBeenDeleteed = false;
    $config = [];

    if (isset($this->resource['config'][$authUserRole])) {
      $config = $this->resource['config'][$authUserRole];
    }

    // User can delete this class of resources
    if (
      !isset($config['canDelete'])
      || $config['canDelete'] == false
    ) {
      $canBeDeleted = false;
    }

    if ($canBeDeleted) {
      $resourceFieldId =
        isset($this->resource['massiveImportIdField'])
        ? $this->resource['massiveImportIdField']
        : "id";

      $query = $this->resource['className']::query();

      $query = $this->roleBasedFilter($query, $resourceName, $authUser);

      $query->where($resourceFieldId, "=", $id);

      $resourceToDestroy = $query->first();

      if ($resourceToDestroy) {
        // User can delete this resource
        $hasBeenDeleteed = $resourceToDestroy->delete();
      }

      return $hasBeenDeleteed;
    }

  }

  private function generateRandomString($length = 10) {
    $characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
  }

  private function doAction(
    $action,
    $resource,
    $resourceName,
    $resourceDataArray,
    $mode,
    $context,
    $oldResource = null
  ) {
    if (!isset($action['code'])) {
      $context['result'] = 'error';
      $context['error'] = "missing_action_code";

      return $context;
    }

    if (isset($action['modes'])) {
      if (!in_array($mode, $action['modes'])) {
        $context['error'] = "wrong_action_event_mode";
        return $context;
      }
    }

    Log::info("Running action " . $action['code'] . " on resource ");

    switch ($action['code']) {
      case 'init_status':
        // Init method for coaching plan
        $resource->status_id = Status::where("code", "idle")->first()->id;
        $resource->save();

        switch ($resourceName) {
          case 'coachingplans':
            // Send mail to coach with PlanStarted
            $coachEmail = $resource->coach->email;

            $context = [
              "plan_id" => $resource->id
            ];

            $mail = new NotificationMail($context, "plan_created");
            MailWrapper::send($coachEmail, $mail);

            break;

          case 'sessions':
            // Send mail to coach with SessionCreated
            if ($resource->coaching_plan) {
              $coachEmail = $resource->coaching_plan->coach->email;

              $context = [
                "proposed_date_1" => Carbon::parse($resource->proposed_date_1)->format("d/m/Y H:i"),
                "proposed_date_2" => Carbon::parse($resource->proposed_date_2)->format("d/m/Y H:i"),
                "proposed_date_3" => Carbon::parse($resource->proposed_date_3)->format("d/m/Y H:i"),
                "plan_id" => $resource->coaching_plan->id,
              ];

              $mail = new NotificationMail($context, "session_dates_chosen");
              MailWrapper::send($coachEmail, $mail);
            }

            break;
        }

        break;

      case 'choose_session_date':
        if ($resource->date) {
          // Date already choosen
          $context['error'] = "date_already_choosen";
          break;
        }

        if (!$resource->coaching_plan->approved) {
          $context['error'] = "plan_not_yet_approved";
          break;
        }

        if (isset($resourceDataArray['choosen_date'])) {
          $choosenDate = $resourceDataArray['choosen_date'];

          $choosenDate = $choosenDate > 3 ? 3 : $choosenDate;
          $choosenDate = $choosenDate < 1 ? 1 : $choosenDate;

          $resource->date = $resource->{'proposed_date_' . $choosenDate};
          $resource->status_id = Status::where("code", "active")->first()->id;

          $hourToIndex = [
            "08" => 1,
            "10" => 2,
            "14" => 3,
            "16" => 4
          ];

          $date = Carbon::parse($resource->date)->format('Y-m-d');
          $hour = $hourToIndex[Carbon::parse($resource->date)->format('H')];
          $coachId = $resource->coaching_plan->coach->id;

          if (Carbon::parse($date)->lt(Carbon::now())) {
            $context["error"] = "date_expired";
            break;
          }

          // Check that this is the only active session in this plan
          $activeStatusId = Status::where("code", "active")->first()->id;
          $coachingPlanId = $resource->coaching_plan->id;

          $planActiveSessionNumber = count(Session
            ::where("coaching_plan_id", $coachingPlanId)
              ->where("status_id", $activeStatusId)
              ->get()
              ->toArray());

          if ($planActiveSessionNumber > 0) {
            $context["error"] = "more_than_1_active_session";
            break;
          }

          // Check that this availability has not already been taken
          $aval = Availability::whereDate("date", $date)->where("coach_id", "=", $coachId)->first();

          if ($aval->{"hour_" . $hour . "_session_id"} != null) {
            $context["error"] = "session_slot_already_taken";
            break;
          }

          $aval->{'hour_' . $hour . '_session_id'} = $resource->id;

          $aval->save();
          $resource->save();

          // Send mail session_approved to user
          $coacheeEmail = $resource->coaching_plan->user->email;

          $context = [
            "session_date" => Carbon::parse($resource->date)->format("d/m/Y H:i")
          ];

          $mail = new NotificationMail($context, "session_approved");
          MailWrapper::send($coacheeEmail, $mail);
        } else {
         $context['error'] = "date_error";
        }

        break;

      case 'set_session_completed':
        if (count($resource->actions) > 0) {
          $sessionIsComplete = true;

          foreach($resource->actions as $action) {
            $sessionIsComplete = $sessionIsComplete && $action['result'] !== null;
          }

          if ($sessionIsComplete) {
            $resource->status_id = Status::where("code", "done")->first()->id;
            $resource->save();

            // Send mail report_saved to coach
            $coacheeEmail = $resource->coaching_plan->coach->email;

            foreach($resource->actions as $index => $action) {
              $context['action_' . $index] = $action->note;
              $context['result_action_' . $index] = $action->result ? 'Positivo' : 'Negativo';
            }

            $context['report_note'] = $resource->report_note;
            $context['report_date'] = Carbon::parse($resource->report_date)->format("d/m/Y H:i");

            $mail = new NotificationMail($context, "report_saved");
            MailWrapper::send($coacheeEmail, $mail);
          }
        }

        break;

      case 'update_coaching_plan_status':
        if ($resource->approved == 1) {
          $resource->status_id = Status::where("code", "active")->first()->id;
          $resource->save();
        }

        if ($resource->approval_required == 1) {
          // Send approval_required mail
          $coachEmail = $resource->coach->email;

          $context = [
            "goal_1" => $resource->goal_1,
            "goal_2" => $resource->goal_2,
            "goal_3" => $resource->goal_3,
            "kpi" => $resource->kpi_measure,
            "sessions_number" => $resource->sessions_number,
          ];

          $mail = new NotificationMail($context, "coaching_agreement_sent");
          MailWrapper::send($coachEmail, $mail);
        }

        break;

      case 'close_coaching_plan':
        $planSessionsNumber = $resource->sessions_number;

        $completedSessions = 0;

        foreach($resource->sessions as $session) {
          if ($session->status->code == 'done') {
            $completedSessions += 1;
          }
        }

        if ($completedSessions == $planSessionsNumber) {
          $resource->status_id = Status::where("code", "done")->first()->id;
          $resource->save();
        } else {
          $context['error'] = "coaching_plan_not_finished";
        }

        break;

      case 'calculate_survey_results':
        $areaSums = [];
        $areaCount = [];

        foreach($resource->answers as $answer) {
          $area = $answer->question->area;
          $value = $answer->value;

          if (!isset($areaSums[$area])) {
            $areaSums[$area] = 0;
            $areaCount[$area] = 0;
            $areaAvg[$area] = 0;
          }

          $areaSums[$area] += $value;
          $areaCount[$area]++;
          $areaAvg[$area] = $areaSums[$area] / $areaCount[$area];
        }

        for ($i=0; $i < 4; $i++) {
          $areaResult = 0;

          if (isset($areaAvg[$i])) {
            $areaResult = $areaAvg[$i];
          }

          $resource->{"area_" . ($i + 1)} = $areaResult;
        }

        $resource->result = array_sum($areaAvg) / count($areaAvg);

        $resource->save();

        break;

      case 'init_coachee':
        if (isset($resourceDataArray['password'])) {
          $resource->password = Hash::make($resourceDataArray['password']);
          $resource->save();
        }
        break;

      case 'reset_password':
        $userPassword = $this->generateRandomString(16);

        if (isset($resourceDataArray['new_password'])) {
          $userPassword = $resourceDataArray['new_password'];
        }

        $resource->password = Hash::make($userPassword);
        $resource->save();

        $context['new_password'] = $userPassword;
        break;

      case 'approve_teaching_agreement':
        if (isset($resourceDataArray['approved'])) {
          if ($resourceDataArray['approved']) {
            $resource->approved = true;
            $resource->approval_required = false;
            $resource->change_requested = false;

            $resource->status_id = Status::where("code", "active")->first()->id;

            $resource->save();

            // Send coaching_agreement_approved mail
            $coacheeEmail = $resource->user->email;

            $context = [
            ];

            $mail = new NotificationMail($context, "coaching_agreement_approved");
            MailWrapper::send($coacheeEmail, $mail);
          } else {
            $resource->approved = false;
            $resource->approval_required = false;
            $resource->change_requested = true;

            $resource->save();

            // Send coaching_agreement_changes_requested mail
            $coacheeEmail = $resource->user->email;

            $context = [
            ];

            $mail = new NotificationMail($context, "coaching_agreement_changes_requested");
            MailWrapper::send($coacheeEmail, $mail);
          }
        }

        break;

      case 'cancel_session':
        if ($resource->status->code != "done") {
          // Delete the appointment
          try {
            $hourId = getSessionIdFromDate($resource->date);

            $dateFormatted = Carbon::parse($resource->date)->format("Y-m-d");

            $availability = Availability::whereDate("date", $dateFormatted)->first();

            $availability->{"hour_" . $hourId . "_session_id"} = null;

            $availability->save();

            $resource->status_id = Status::where("code", "cancelled")->first()->id;
            $resource->save();

            // Send mail session_deleted to user
            $coacheeEmail = $resource->coaching_plan->user->email;

            $context = [
              "session_date" => Carbon::parse($resource->date)->format("d/m/Y H:i")
            ];

            $mail = new NotificationMail($context, "session_deleted");

            MailWrapper::send($coacheeEmail, $mail);
          } catch (\Exception $e) {
            $context['error'] = 'error_in_parsing_date';
          }
        } else {
          $context['error'] = 'cannot_cancel_completed_sessions';
        }
        break;

      case 'postpone_session':
        if ($resource->status->code == "active") {
          $hourId = getSessionIdFromDate($resource->date);
          $dateFormatted = Carbon::parse($resource->date)->format("Y-m-d");

          $availability = Availability::whereDate("date", $dateFormatted)->first();

          $availability->{"hour_" . $hourId . "_session_id"} = null;

          $availability->save();

          $resource->status_id = Status::where("code", "idle")->first()->id;

          $resource->proposed_date_1 = null;
          $resource->proposed_date_2 = null;
          $resource->proposed_date_3 = null;

          $resource->date = null;

          $resource->save();


          // Send mail session_postponed to user
          $coacheeEmail = $resource->coaching_plan->user->email;

          $context = [
          ];

          $mail = new NotificationMail($context, "session_postponed");
          MailWrapper::send($coacheeEmail, $mail);
        } else {
          $context['error'] = 'cannot_postpone_not_active_sessions';
        }

        break;

      default:
        break;
    }

    $context['result'] = isset($context['error']) ? 'error' : "success";

    return $context;
  }

  private function storeFromArrayAndName(
    $resourceDataArray,
    $resourceName,
    $resourceIdField = 'id',
    $single = true
  ) {
    $resource = new $this->resource['className']();

    $storeMode = "create";

    if (isset($resourceDataArray[$resourceIdField])) {
      $storeMode = "edit";

      $resource = $this->resource['className']
        ::where($resourceIdField, "=", $resourceDataArray[$resourceIdField])
        ->first();

      if (!$resource) {
        return false;
      }
    }

    $resourceFieldArray = [];

    $resourceHeaders = $this->resource['headers'];

    // First foreach is for saving the model
    foreach ($resourceHeaders as $header) {
      if ($header["edit"]["type"] != null) {
        $fieldName = $header['edit']['value'];

        // Check if this header can be set in this storeMode
        if (isset($header['storeEvents'])) {
          if (!$header['storeEvents'][$storeMode]) {
            continue;
          }
        }

        switch ($header["edit"]["type"]) {
          case 'multi_select':
            break;

          case 'select':
            if (isset($resourceDataArray[$fieldName])) {
              switch (gettype($resourceDataArray[$fieldName])) {
                case 'object':
                case 'array':
                  if (isset($header["option"]["options"]["list"])) {
                    $resourceFieldArray[$fieldName] = $resourceDataArray[$fieldName]['id'];
                  } else {
                    $resourceFieldArray[$fieldName . "_id"] = $resourceDataArray[$fieldName]['id'];
                  }

                  break;

                case 'string':
                  $resourceFieldArray[$fieldName] = $resourceDataArray[$fieldName];
                  break;
              }
            }
            break;

          default:
            // Update only if dataArray contains the field
            if (
              array_key_exists($fieldName, $resourceDataArray)
            ) {
              $resourceFieldArray[$fieldName] = $resourceDataArray[$fieldName];
            }
            break;
        }
      }
    }

    $result = [
      "statusCode" => 201,
      "resource" => [],
      "status" => "success"
    ];

    $validateErrors = [];

    if ($single) {
      $rawErrors = $this->validateResource(
        $resourceDataArray,
        $resourceName,
        $storeMode
      );

      $rawErrors = $rawErrors->messages();

      foreach ($rawErrors as $errorField => $errorMsg) {
        $validateErrors[] = [
          "field" => $errorField,
          "msg" => $errorMsg[0]
        ];
      }
    }

    // Keep resource before it has been saved
    // to use it in actions to get differences (before/after)
    $oldResource = $resource->replicate();

    if (count($validateErrors) == 0) {
      // Before filling validate
      $resource->fill($resourceFieldArray);

      if ($resource->save()) {
        // Second is for saving many to many relationships
        foreach ($resourceHeaders as $header) {
          if ($header["edit"]["type"] != null) {
            switch ($header["edit"]["type"]) {
              case 'multi_select':
                $fieldName = $header['edit']['value'];

                $multiSelectIDs = [];

                // Update only if dataArray contains the field
                if (
                  isset($resourceDataArray[$fieldName])
                  && gettype($resourceDataArray[$fieldName]) == 'array'
                ) {
                  // Update the foreign key in every resource that has in the $multiSelectIDs array
                  $foreignResourceField =
                    $header['edit']['foreignResourceField'];
                  $foreignResourceName =
                    $header['edit']['foreignResourceName'];

                  foreach ($resourceDataArray[$fieldName] as $multiItem) {
                    $multiItemId = -1;

                    if (!isset($multiItem["id"])) {
                      $multiItemResource = new $this->resourceClassNames[
                        $foreignResourceName
                      ]();

                      // Save to get the id
                      $multiItemResource->save();

                      $multiItemId = $multiItemResource->id;
                    } else {
                      $multiItemResource = $this->resourceClassNames[$foreignResourceName]
                        ::where("id", $multiItem['id'])->first();

                      $multiItemId = $multiItem["id"];
                    }

                    $multiItemResource->fill($multiItem);
                    $multiItemResource->save();

                    $multiSelectIDs[] = $multiItemId;
                  }

                  $isHasManyRelationship = true;

                  if (isset($header['edit']['isHasManyRelationship'])) {
                    $isHasManyRelationship =
                      $header['edit']['isHasManyRelationship'];
                  }

                  if ($isHasManyRelationship) {
                    $resource->{$fieldName}()->sync($multiSelectIDs);
                  } else {
                    foreach ($multiSelectIDs as $multiId) {
                      $foreignResource = $this->resourceClassNames[
                        $foreignResourceName
                      ]::find($multiId);

                      if ($foreignResource) {
                        $foreignResource->{$foreignResourceField} = $resource->id;
                        $foreignResource->save();
                      }

                    }
                  }
                }

                break;
            }
          }
        }

        // Context used to share data between actions' stages
        $actionsContext = [];

        // Do all the actions on this resource
        $resourceActions = isset($this->resource['actions']['custom']) ? $this->resource['actions']['custom'] : [];

        foreach ($resourceActions as $action) {
          $actionsContext = $this->doAction(
            $action,
            $resource,
            $resourceName,
            $resourceDataArray,
            $storeMode,
            $actionsContext,
            $oldResource
          );
        }

        $result["resource"] = $resource;
      }
    } else {
      $result["statusCode"] = 500;
      $result["errors"] = $validateErrors;
      $result["status"] = "error";
    }

    return $result;
  }

  private function validateResource(
    $resourceArray,
    $resourceName,
    $validationMode
  ) {
    // Get Massive headers
    $massiveHeaders = $this->getMassiveHeaders($resourceName, "template");

    // Build the validation array
    $validatorArray = [];

    foreach ($massiveHeaders as $header) {
      $header['validators'] = isset($header['validators']) ? $header['validators'] : "";

      // This string might contain {$var_name} tokens
      $validatorStringUnInterpolated = isset(
        $header['validators_' . $validationMode]
      )
      ? $header['validators_' . $validationMode]
      : $header['validators'];

      if ($validationMode == 'edit') {
        // Here we replace the brackets value with
        // actual values from the resource
        $validatorArray[$header['key']] = strtr(
          $validatorStringUnInterpolated,
          array(
            '{$id}' => $resourceArray['id'],
          )
        );
      } else {
        $validatorArray[$header['key']] = $validatorStringUnInterpolated;
      }
    }

    $this->extendValidator();

    $this->resourceBeingValidated = $resourceArray;
    $validator = Validator::make($resourceArray, $validatorArray);

    // Validate the resourceArray
    // return errors if present
    return $validator->errors();
  }


  public function act(
    Request $request,
    $resourceName,
    $resourceId,
    $actionCode
  ) {
    $this->resource = $this->getResourceConfig($resourceName);

    $resourceActions = $this->resource['actions'];

    if(isset($this->resource['actions']['custom'])) {
      $resourceActions = $this->resource['actions']['custom'];
    }

    $actionToPerform = [];

    foreach ($resourceActions as $action) {
      if ($action['code'] == $actionCode) {
        $actionToPerform = $action;
      }
    }

    $resource = $this->resource['className']
      ::where("id", $resourceId)
      ->first();

    $context = [
      "action_code" => $actionCode
    ];

    $context = $this->doAction(
      $actionToPerform, // action
      $resource, // resource
      $resourceName, // resourceName
      $request->data, // resourceData
      "event", // Mode
      $context // Context
    );

    if ($context['result'] == 'error') {
      return response($context, 500);
    }

    return response($context, 200);
  }

  private function getMassiveHeaders($resourceName, $exportMethod = null) {
    $headers = [];

    foreach ($this->resource['headers'] as $header) {
      if (isset($header['massive'])) {
        $addMassiveHeader = false;

        if ($header['massive']['key'] == 'id') {
          // Check if resourceMassiveImportField is different from ID
          if (isset($this->resource['massiveImportIdField'])) {
            if ($this->resource['massiveImportIdField'] != 'id') {
              $addMassiveHeader = false;
            }
          } else {
            $addMassiveHeader = true;
          }
        } else {
          $addMassiveHeader = true;
        }

        if (
          $exportMethod != null &&
          isset($header['massive']['exportModes']) &&
          !in_array($exportMethod, $header['massive']['exportModes'])
        ) {
          $addMassiveHeader = false;
        }

        if ($addMassiveHeader) {
          $headers[] = $header['massive'];
        }
      }
    }

    return $headers;
  }

  public function testMail(Request $request) {
    $type = "welcome";

    if ($request->type) {
      $type = $request->type;
    }

    if (isset($request->type)) {
      $context = [
      ];

      $mail = new NotificationMail($context, $type);

      if ($request->mail) {
        MailWrapper::send("giacomoalbe@gmail.com", $mail);
      }

      return $mail->render();
    } else {
      $links = [
      ];

      return View::make("home")
          ->with("links", $links);
    }
  }
}
