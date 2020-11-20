<?php

namespace App\Console\Commands;

use App\Models\WorkerAvailability;
use App\Models\WorkerLocation;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SetWorkersFree extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'workers:setfree';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Questo cli serve ad impostare lo stato dei lavoratori su Free quando scade la presa in carico. Da eseguire il cli ogni giorno alle 23.55';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
            $now = Carbon::now()->format('Y-m-d');
            $workerLocations = WorkerLocation::where('to', $now)->get();
            if($workerLocations->count()>0){
                //impostiamo i lavoratori su free
                foreach($workerLocations as $workerLocation){
                    $worker = $workerLocation->worker;
                    $worker->status = 'free';
                     $worker->save();
                }
            }
            //cerchiamo anche le disponibilità segnate
            $now = Carbon::now();
            $tomorrow = $now->addDays(1);
            $workerAvailabilities = WorkerAvailability::where('from', '=', $tomorrow->format('Y-m-d'))->get();
            if($workerAvailabilities->count()>0){
                foreach($workerAvailabilities as $workerAvailability){
                    $worker = $workerAvailability->worker;
                    $worker->status = 'free';
                    $worker->save();
                }
            }
        }catch(\Exception $e){
            Log::error($e);
        }
    }
}
