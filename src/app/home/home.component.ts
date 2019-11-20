import { Component, OnInit, OnDestroy } from "@angular/core";
import { ToDoListService } from "../to-do-list.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

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
  selectedCatIndex;

  constructor(
    private toDoListService: ToDoListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  addCategory() {
    this.toDoListService.addCategory(this.newCategory);
    this.newCategory = "";
  }

  addTask() {
    this.toDoListService.addTask(this.selectedCatIndex, this.newTask);
    this.newTask = "";
  }

  deleteTask(taskIndex) {
    this.toDoListService.deleteTask(this.selectedCatIndex, taskIndex);
  }

  ngOnInit() {
    this.categories = this.toDoListService.categoryTasks;

    this.sub = this.activatedRoute.url.subscribe(url => {
      const catIndex = this.activatedRoute.snapshot.paramMap.get("id");

      try {
        this.tasks = this.toDoListService.getTasks(catIndex);
        this.selectedCatIndex = catIndex;
      } catch {
        alert("Invalid Route Parameter");
        this.router.navigate(["/home/0"]);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
