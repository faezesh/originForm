import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {mapToStudentModel, StudentModel} from '../../student-model';
import {StudentService} from '../../student.service';


@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit, OnChanges {

  public studentForm: FormGroup
  modelNew: StudentModel[] = []
  @Output() studentAdd = new EventEmitter<StudentModel>()

  @Input() getStudentFromList: StudentModel | null = null

  @Input() formMode: 'view' | 'edit' | 'create' = 'create'

  id: string = ''

  constructor(private fb: FormBuilder, private stService: StudentService) {

    this.studentForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      studentId: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('')
    })

  }

  isDuplicate(stu: StudentModel): boolean {

    return this.modelNew.some(s => s.studentId === stu.studentId)
  }

  showInfo() {

    if (this.studentForm.valid) {
      console.log(this.studentForm.value)

      let model: StudentModel = mapToStudentModel(this.studentForm.value);
      // console.log(model)
      if (this.isDuplicate(model)) {
        alert('دانش‌آموزی با همین اطلاعات قبلاً ثبت شده است.');
        return;
      }
      this.modelNew.push(model)
      this.studentAdd.emit(model)
      alert('اطلاعات با موفقیت ثبت شد.')
      this.studentForm.reset()
    } else {
      this.studentForm.markAllAsTouched(); // باعث می‌شه خطاها نشون داده بشن
    }

  }


  ngOnChanges(changes: SimpleChanges) {

    if (changes['getStudentFromList'] && this.getStudentFromList) {
      // this.studentForm.patchValue({
      //   firstName: this.getStudentFromList.firstName,
      //   lastName: this.getStudentFromList.lastName,
      //   phoneNumber: this.getStudentFromList.phoneNumber,
      //   studentId: this.getStudentFromList.studentId,
      //   dateOfBirth: this.getStudentFromList.dateOfBirth
      // })
      this.studentForm.patchValue(this.getStudentFromList);
    }
    if (this.formMode === 'view') {
      this.studentForm.disable();
    } else if (this.formMode === 'edit') {
      this.studentForm.enable();
    }

  }


  ngOnInit() {

    // this.stService.getStudent().subscribe((response: any) => {
    //     debugger
    //     console.log('response:', response)
    //   }
    // )

    if (this.id !== '') {

      this.stService.updateStudent(this.id, this.modelNew).subscribe(
        response => {
          console.log('response:', response)
        }
      )
    } else {
      this.stService.addStudent(this.modelNew).subscribe(
        response => {
          console.log('response:', response)
        }
      )
    }


    // this.stService.deleteStudent(this.id).subscribe(
    //   response=>{
    //     console.log('response', response)
    //   }
    // )

  }

}
