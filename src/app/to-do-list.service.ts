import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ToDoListService {
  constructor() {}

  categoryTasks = [
    {
      name: "cat1",
      tasks: [
        { name: "task1", isCompleted: true },
        { name: "task2", isCompleted: false }
      ]
    },
    {
      name: "cat2",
      tasks: [
        { name: "task3", isCompleted: false },
        { name: "task4", isCompleted: true },
        { name: "task5", isCompleted: false }
      ]
    },
    {
      name: "cat3",
      tasks: [
        { name: "task6", isCompleted: false },
        { name: "task7", isCompleted: true },
        { name: "task8", isCompleted: true },
        { name: "task9", isCompleted: true },
        { name: "task10", isCompleted: false }
      ]
    }
  ];

  addCategory(catName) {
    this.categoryTasks.push({
      name: catName,
      tasks: []
    });
  }

  addTask(catIndex, taskName) {
    const task = { name: taskName, isCompleted: false };
    this.categoryTasks[catIndex].tasks.push(task);
  }

  getTasks(catId) {
    return this.categoryTasks[catId].tasks;
  }

  deleteTask(catIndex, taskIndex) {
    this.categoryTasks[catIndex].tasks.splice(taskIndex, 1);
  }
}
