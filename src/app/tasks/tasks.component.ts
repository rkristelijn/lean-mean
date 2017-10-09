import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private ts: TaskService) { }

  ngOnInit() {
    this.ts.list().subscribe(data => {
      console.log(data);
    });
    // this.ts.create('hooi').subscribe(data => {
    //   console.log(data);
    // });
  }

}
