import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TableModule} from 'primeng/table';
import {StudentModel} from '../student-model';
import {StudentService} from '../student.service';
import {response} from 'express';
import {subscribe} from 'node:diagnostics_channel';


@Component({
  selector: 'app-student-list',
  imports: [
    TableModule
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit, OnChanges {


  studentToForm: StudentModel[] = []
  @Input() NewStudent: StudentModel[] = []
  id: string = '0'

  isReload: boolean = false

  @Output() listStudent = new EventEmitter<StudentModel>

  constructor(public sService: StudentService) {
  }

//   aaaa(rowData: any) {
// //     console.log(rowData)
// //     debugger
// //   }

  // infoToForm(){
  //   this.listToForm.emit(this.NewStudent)
  //
  // }



  ngOnChanges(changes: SimpleChanges) {

    // this.students.push(this.inputNewStudent)

    if(this.NewStudent){
      this.id=this.id+1
    }
    console.log(this.NewStudent)

    // if(this.isReload){
    //
    // }
  }

  ngOnInit() {

    function getList() {

    }

    this.sService.getStudent().subscribe((response: any) => {
        this.NewStudent = response
        console.log('response', this.NewStudent)
      }
    )

  }

  view(rowData: any) {
    let viewStudent: StudentModel = rowData
    this.listStudent.emit(viewStudent)
    // console.log(viewStudent)
  }

  edit(rowData: any) {
    let editStudent: StudentModel = rowData
    this.listStudent.emit(editStudent)
    // console.log(editStudent)
  }

  delete(rowData: any) {

    let deleteStudent: StudentModel = rowData
    if (confirm(`از حذف ${deleteStudent.firstName} ${deleteStudent.lastName} مطمئن هستید؟`)) {
      this.listStudent.emit(deleteStudent)
    }
    console.log(deleteStudent)
  }
}

