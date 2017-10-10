import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:any[];
  constructor(private ts: TaskService) { }
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.ts.list().subscribe(data => {
      this.tasks = data;
    });
  }
  update(task: any) {
    if(task.name !== task.newName) {
      this.ts.update(task).subscribe(data => {
        this.getTasks();
      });
    }
  }
  delete(task: any) {
    this.ts.delete(task).subscribe(data => {
      this.getTasks();
    });
  }
  create(name: string) {
    this.ts.create(name).subscribe(data => {
      this.getTasks();
    });
  }
}
