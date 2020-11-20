<?php

namespace App\Console\Commands;

use App\Models\WorkerAvailability;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SetWorkersWorking extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'workers:setworking';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Impostiamo i lavoratori come impegnati, quando scade il loro periodo di disponibilità';

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
        $now = Carbon::now()->format('Y-m-d');
        $workerAvailabilities = WorkerAvailability::where('to', $now)->get();
        if($workerAvailabilities->count()>0){
            //impostiamo i lavoratori su working
            foreach($workerAvailabilities as $workerAvailability){
                $worker = $workerAvailability->worker;
                $worker->status = 'working';
                $worker->save();
            }
        }
    }
}
