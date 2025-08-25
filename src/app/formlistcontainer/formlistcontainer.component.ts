import { Component } from '@angular/core';
import {StudentFormComponent} from "./student-form/student-form.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentModel} from '../student-model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-formListContainer',
  imports: [
    StudentFormComponent,
    StudentListComponent,
    RouterLink
  ],
  templateUrl: './formListContainer.component.html',
  styleUrl: './formListContainer.component.scss'
})
export class FormListContainerComponent {
  title = 'studentInfo';

  studentList: StudentModel[] = []
  passToForm = new StudentModel()

  formMode: 'view' | 'edit' | 'create' = 'create'

  receiveNewStudent(newStudent: StudentModel) {

    this.studentList = [...this.studentList, newStudent]

  }

  studentFromList(data:{student:StudentModel , mode: 'view' | 'edit'}){

    this.passToForm = data.student
    this.formMode = data.mode
    // debugger
  }


}
