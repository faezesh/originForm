import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StudentFormComponent} from './formlistcontainer/student-form/student-form.component';
import {StudentListComponent} from './formlistcontainer/student-list/student-list.component';

import {FormListContainerComponent} from './formlistcontainer/formlistcontainer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'studentInfo';


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

}
