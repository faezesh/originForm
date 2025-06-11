import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TableModule} from 'primeng/table';
import {StudentModel} from '../../student-model';
import {StudentService} from '../../student.service';
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

  @Input() NewStudent: StudentModel[] = []
  id: string = '0'

  @Output() listStudent = new EventEmitter<any>

  constructor(public sService: StudentService) {
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log(this.NewStudent)
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
    let data = {
      mode: 'view',
      student: viewStudent
    }
    this.listStudent.emit(data)
    // console.log(viewStudent)
  }

  edit(rowData: any) {
    let editStudent: StudentModel = rowData
    let data = {
      mode: 'edit',
      student: editStudent
    }
    this.listStudent.emit(data)
    // console.log(editStudent)
  }

  delete(rowData: any) {

    let delStudent: StudentModel = rowData
    if (confirm(`از حذف ${delStudent.firstName} ${delStudent.lastName} مطمئن هستید؟`)) {
      let index: number = this.NewStudent.indexOf(delStudent)
      this.NewStudent.splice(index, 1)
      console.log(this.NewStudent)
      console.log(index)
    }
    // this.listStudent.emit(delStudent)
    console.log(delStudent)

  }

}


