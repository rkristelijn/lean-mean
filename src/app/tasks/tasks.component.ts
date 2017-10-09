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
    this.ts.list().subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

}
