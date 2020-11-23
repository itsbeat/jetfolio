<?php
return [
    'userLevels' => [
        1 => 'Responsabile',
        2 => 'Vice Responsabile',
        //10 => 'Amministratore'
    ],
    'fileTypes' => [
        'holidays' => 'Ferie',
    ],
    'holidayStoragePath' => 'holidays',
    'interviewPicturesStoragePath' => 'interviewpictures',
    'damageAttachmentsStoragePath' => 'damageattachments',
    'clockingInOut' => [
        'E' => 'Entrata',
        'U' => 'Uscita',
    ],
    'workersFileTypes' => [
        'free' => 'Personale disponibile',
        'working' => 'Risorse',
    ],
    'interviewType' => [
        1 => 'Logistica',
        2 => 'Mecc/Elettrica',
        3 => 'Multiservizi',
        4 => 'Elettricista',
        5 => 'Meccanico'
    ],
    'interviewFeedbackType' => [
        1 => 'Non si è presentato',
        2 => 'Visto ma scartato',
        3 => 'Visto ma inviato al cantiere',
        4 => 'Visto da assumere da',
    ],
    'damageTypes' => [
        'goods' => 'Merce',
        'machine' => 'Mezzi',
    ],
    'damageStatuses' => [
        '1' => [
            'key' => '1',
            'name' => 'Accettato',
            'class' => 'badge-success'
        ],
        '0' => [
            'key' => '0',
            'name' => 'Contestato',
            'class' => 'badge-danger'
        ]
    ],
    'workerStatuses' => [
        'free' => [
            'name' => 'Disponibile',
            'class' => 'badge-success'
        ],
        'working' => [
            'name' => 'Impegnato',
            'class' => 'badge-danger'
        ]
    ],
    'months' => [
        1 => 'Gennaio',
        2 => 'Febbraio',
        3 => 'Marzo',
        4 => 'Aprile',
        5 => 'Maggio',
        6 => 'Giugno',
        7 => 'Luglio',
        8 => 'Agosto',
        9 => 'Settembre',
        10 => 'Ottobre',
        11 => 'Novembre',
        12 => 'Dicembre',
    ],
    'semesters' => [
        1 => '1° Semestre',
        2 => '2° Semestre',
    ],
    'damagePaymentType' => [
        'warranty' => 'In garanzia',
        'payment' => 'A pagamento'
    ],
    'damageInvoiceDetails' => [
        'incoming' => 'Fattura in arrivo',
        'arrived' => 'Fattura arrivata',
    ],
    'damageCreditNoteDetails' => [
        'incoming' => 'NC in arrivo',
        'arrived' => 'NC arrivata',
    ],
    'damageInvoiceToReceive' => [
        'inserted' => 'Inserito',
        'refunded' => 'Stornato',
    ],
    'equipmentRequestCostType' => [
        'topservice_cost' => 'Costo TopService',
        'client_debit' => 'Riaddebitare al cliente'
    ],
    'equipmentRequestCostType' => [
        'topservice_cost' => 'Costo TopService',
        'client_debit' => 'Riaddebitare al cliente'
    ],
    'breakTime' => [
        0 => 'nessuna pausa',
        30 => '30 minuti',
        60 => '60 minuti'
    ]
];