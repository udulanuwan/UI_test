import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ITodo } from '../models/todo';

@Injectable()
export class DataService {

  constructor(
    private http: HttpService
  ) { }

  public getAllTodo() {
    return this.http.get<ITodo[]>('todos');
  }
}
