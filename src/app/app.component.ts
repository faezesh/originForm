import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StudentFormComponent} from './student-form/student-form.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentModel} from './student-model';
import {operate} from 'rxjs/internal/util/lift';

@Component({
  selector: 'app-root',
  imports: [StudentFormComponent, StudentListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'studentInfo';

  studentList: StudentModel[] = []
  passToForm = new StudentModel()

  // delStu: StudentModel[] = []

  operate: boolean | null = null

  formMode: 'view' | 'edit' | 'create' = 'create'

  receiveNewStudent(newStudent: StudentModel) {

    this.studentList = [...this.studentList, newStudent]

  }

  studentFromList(data:{student:StudentModel , mode: 'view' | 'edit'}){

    this.passToForm = data.student
    this.formMode = data.mode
    debugger
  }

  // studentView(studentToForm: StudentModel) {
  //   // this.formMode = 'view'
  //   this.passToForm = studentToForm
  //   // this.operate = false
  //   return this.passToForm
  // }
  //
  // studentEdit(studentToForm: StudentModel) {
  //   // this.formMode = 'edit'
  //   this.passToForm = studentToForm
  //   // if(this.passToForm.firstName === studentToForm.firstName&& this.passToForm.lastName === studentToForm.lastName && this.passToForm.phoneNumber === studentToForm.phoneNumber
  //   // && this.passToForm.studentId=== studentToForm.studentId && this.passToForm.dateOfBirth === studentToForm.dateOfBirth){
  //   //   this.passToForm = studentToForm
  //   // }
  //   this.operate = true
  //   return this.passToForm
  //
  // }

  // studentDelete(deleteStudent: StudentModel) {
  //
  //
  //   const index = this.delStu.findIndex(s => s.firstName === deleteStudent.firstName && s.lastName === deleteStudent.lastName &&
  //   s.phoneNumber === deleteStudent.phoneNumber && s.studentId === deleteStudent.studentId && s.dateOfBirth === deleteStudent.dateOfBirth)
  //
  //   if(index >=0){
  //     this.delStu.splice(index,1)
  //   }
  //   this.passToForm = this.d
  //   this.studentList = [...this.studentList]
  //   return this.studentList
  // }


  // studentDelete(deleteStu:StudentModel){
  //
  //   deleteStu.indexOf()
  // deleteStu.splice()
  //
  // }

}
