<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Cache::remember('tasks', 10, function() {
            return Task::all();
        });

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        return Inertia::render('Tasks/TaskEditor', [
            'type' => 'create', 
            'csrf_token' => csrf_token()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request) {
        $task = Task::create(
            $request->validate([
                'subject' => ['required', 'string', 'max:255'],
                'description' => ['required', 'string', 'max:255'],
                'additional_info' => ['nullable', 'string', 'max:4096'], 
                'due_date' => ['nullable', 'date']
            ])
        );

        return to_route('tasks.show', $task);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task) {
        return Inertia::render('Tasks/Show', [
            'task' => $task,
            'csrf_token' => csrf_token()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task){
        return Inertia::render('Tasks/TaskEditor', [
            'task' => $task,
            'csrf_token' => csrf_token(),
            'type' => 'edit'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update(
            $request->validate([
                'subject' => ['required', 'string', 'max:255'],
                'description' => ['required', 'string', 'max:255'],
                'additional_info' => ['nullable', 'string', 'max:4096'], 
                'due_date' => ['nullable', 'date']
            ])
        );

        return to_route('tasks.show', $task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return to_route('tasks.index');
    }
}
