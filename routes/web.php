<?php

use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){ 
        return redirect('/tasks'); 
    }
)->name('index');

Route::resource('tasks', TaskController::class);