import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any[];
  public alerts: any = [];
  constructor(private ts: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.ts.list().subscribe(data => {
      this.tasks = data;
      this.addAlertInfo('Tasks loaded.'); 
    });
  }
  update(task: any) {
    if (task.name !== task.newName) {
      this.ts.update(task).subscribe(
        data => {
          this.getTasks();
          this.addAlertSuccess('Update completed.');
        },
        e => {
          console.error(e);
          this.addAlertDanger(e._body);
        },
      );
    }
  }
  delete(task: any) {
    this.ts.delete(task).subscribe(data => {
      this.getTasks();
      this.addAlertSuccess('Delete completed.');
    });
  }
  create(name: string) {
    this.ts.create(name).subscribe(data => {
      this.getTasks();
      this.addAlertSuccess('Create completed.');
    });
  }

  public addAlert(alert: any): void {
    this.alerts.push(alert);
  }
  public addAlertInfo(msg: string) {
    this.addAlert({ type: 'info', msg: msg, timeout: 2000 });
  }
  public addAlertSuccess(msg: string) {
    this.addAlert({ type: 'success', msg: msg, timeout: 2000 });
  }
  public addAlertDanger(msg: string) {
    this.addAlert({ type: 'danger', msg: msg, dismissible: true });
  }
}
