import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StudentFormComponent} from './student-form/student-form.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentModel} from './student-model';

@Component({
  selector: 'app-root',
  imports: [StudentFormComponent , StudentListComponent , RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'studentInfo';

  studentList : StudentModel[] = []
  passToForm = new StudentModel()

  // formMode: 'view' | 'edit' = 'edit'

  receiveNewStudent(newStudent:StudentModel){

    this.studentList = [...this.studentList,newStudent]

  }

  studentView(studentToForm: StudentModel){
    // this.formMode = 'view'
    this.passToForm = studentToForm
    return this.passToForm
  }

  studentEdit(studentToForm: StudentModel){
    // this.formMode = 'edit'
    this.passToForm = studentToForm

    return this.passToForm

  }

  studentDelete(studentToForm: StudentModel) {

   // studentToForm.findIndex(studentToForm)
      this.studentList = [...this.studentList];
      return this.studentList
    }


  // studentDelete(deleteStu:StudentModel){
  //
  //   deleteStu.indexOf()
  // deleteStu.splice()
  //
  // }

}
