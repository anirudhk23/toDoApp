import { Component, OnInit, OnDestroy } from "@angular/core";
import { ToDoListService } from "../to-do-list.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  newCategory = "";
  newTask = "";
  sub;
  tasks = [];
  categories = [];

  constructor(
    private toDoListService: ToDoListService,
    private activatedRoute: ActivatedRoute
  ) {}

  addCategory() {
    this.toDoListService.addCategory(this.newCategory);
    this.newCategory = "";
  }

  addTask() {
    const catIndex = this.activatedRoute.snapshot.paramMap.get("id");
    this.toDoListService.addTask(catIndex, this.newTask);
    this.newTask = "";
  }

  deleteTask(taskIndex) {
    const catIndex = this.activatedRoute.snapshot.paramMap.get("id");
    this.toDoListService.deleteTask(catIndex, taskIndex);
  }

  ngOnInit() {
    this.categories = this.toDoListService.categoryTasks;

    this.sub = this.activatedRoute.url.subscribe(url => {
      const catIndex = this.activatedRoute.snapshot.paramMap.get("id");
      this.tasks = this.toDoListService.getTasks(catIndex);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
