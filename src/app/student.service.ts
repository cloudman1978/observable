// student.service.ts

import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

i:number = 0;
students: Student[] = [{
    id: 1,
    name: 'Habiba',
},
{
    id: 2,
    name: 'Ammaria',
},
{
    id: 3,
    name: 'Fabio',
}];

  constructor() { }

  public getStudents(): any {
     const studentsObservable = new Observable(observer => {
            setInterval(() => {
                observer.next(this.students[this.i++]);
            }, 10000);
     });

     return studentsObservable;
 }
}
