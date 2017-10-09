import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  url: string = '/task';
  tasks: any[];

  constructor(private http: Http) { }
  create(name: string): Observable<any> {
    console.log('task.service.ts', 'create()', name);

    if (this.tasks) {
      return Observable.of(this.tasks);
    }
    return this.http.post(this.url, {name:name})
      .map(res => res.json())
      .do((data) => {
        this.tasks = data;
      })
  }
  //read
  list(): Observable<any> {
    console.log('task.service.ts', 'list()');

    if (this.tasks) {
      return Observable.of(this.tasks);
    }
    return this.http.get(this.url)
      .map(res => res.json())
      .do((data) => {
        this.tasks = data;
      })
  }
  //update
  //delete
}
