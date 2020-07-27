import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  lastId: number = 0;
  tasks: Task[] = [];

  constructor() {
  }

  addTask(todo: Task): TaskService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.tasks.push(todo);
    return this;
  }

  // Simulate DELETE /task/:id
  deleteTask(id: number): TaskService {
    this.tasks = this.tasks
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /task/:id
  updateTask(id: number, values: Object = {}): Task {
    let todo = this.getTask(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /task
  getAll(): Task[] {
    return this.tasks;
  }

  // Simulate GET /task/:id
  getTask(id: number): Task {
    return this.tasks
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle task complete
  toggleComplete(todo: Task){
    let updatedTodo = this.updateTask(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
