import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  url: string = '/task';
  tasks: any[];

  constructor(private http: Http) { }

  list(): Observable<any> {
    console.log('task.service.ts', 'list()');
    // if (this.tasks) {
    //   return Observable.of(this.tasks);
    // }
    return this.http.get(this.url)
      .map(res => res.json())
      .do((data) => {
        console.log("REST:",data);
        this.tasks = data;
      });
  }
  create(name: string): Observable<any> {
    console.log('task.service', 'create()', name);
    return this.http.post(this.url, { name: name })
      .map(res => res.json())
      .do((data) => {
        console.log("REST:",data);
        this.tasks = data;
      });
  }
  update(task:any): Observable<any> {
    console.log('task.service', 'update()');
    let id = task._id;
    delete task._id;
    return this.http.put([this.url, '/', id].join(''), task)
      .map(res => res.json())
      .do((data) => {
        console.log("REST:",data);
      });
  }
  delete(task:any): Observable<any> {
    console.log('task.service', 'delete()', task);
    let id = task._id;
    return this.http.delete([this.url, '/', id].join(''))
      .map(res => res.json())
      .do((data) => {
        console.log("REST:",data);
      });
  }
}
