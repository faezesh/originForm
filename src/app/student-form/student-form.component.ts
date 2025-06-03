import {
  Component,
  model,
  EventEmitter,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {mapToStudentModel, StudentModel} from '../student-model';
import {StudentService} from '../student.service';



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

  @Input() getStudentFromList :StudentModel | null = null

  stUpd: StudentModel[] = []

  // @Input() operate: boolean | null = null
  @Input() formMode:'view' | 'edit' | 'create' = 'create'
  // disable: boolean = false


  id: string = ''

  constructor(private fb: FormBuilder, private stService: StudentService) {

    this.studentForm = this.fb.group({
      // id: new FormControl('',[Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      studentId: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('')
    })

  }

  isDuplicate(stu: StudentModel, list: StudentModel[]): boolean {



    return this.modelNew.some(s => s.studentId === stu.studentId)
    // return this.modelNew.some(s => s.firstName === stu.firstName && s.lastName === stu.lastName &&
    //   s.phoneNumber === stu.phoneNumber && s.studentId === stu.studentId && s.dateOfBirth === stu.dateOfBirth)

  }


  showInfo() {

    if (this.studentForm.valid) {
      console.log(this.studentForm.value)

      let model: StudentModel = mapToStudentModel(this.studentForm.value);
      // console.log(model)
      if (this.isDuplicate(model, this.modelNew)) {
        alert('دانش‌آموزی با همین اطلاعات قبلاً ثبت شده است.');
        return;
      }
      // if (this.operate) {
      //
      //   // model = this.getStudentFromList
      //   this.studentAdd.emit(this.getStudentFromList)
      // }
      this.modelNew.push(model)
      this.studentAdd.emit(model)
      alert('اطلاعات با موفقیت ثبت شد.')
      this.studentForm.reset()
    } else {
      this.studentForm.markAllAsTouched(); // باعث می‌شه خطاها نشون داده بشن
    }

  }


  // protected readonly require = require;

  ngOnChanges(changes: SimpleChanges) {


    if (changes['getStudentFromList'] && this.getStudentFromList) {
      this.studentForm.patchValue({
        firstName: this.getStudentFromList.firstName,
        lastName: this.getStudentFromList.lastName,
        phoneNumber: this.getStudentFromList.phoneNumber,
        studentId: this.getStudentFromList.studentId,
        dateOfBirth: this.getStudentFromList.dateOfBirth
      })
      // this.studentForm.patchValue(this.getStudentFromList);
    }
    if (this.formMode === 'view') {
      this.studentForm.disable();
    } else if (this.formMode === 'edit') {
      this.studentForm.enable();}

    // let updateStu:StudentModel = mapToStudentModel(this.studentForm.value)
    // this.studentForm.patchValue({
    //   firstName: this.getStudentFromList.firstName,
    //   lastName: this.getStudentFromList.lastName,
    //   phoneNumber: this.getStudentFromList.phoneNumber,
    //   studentId: this.getStudentFromList.studentId,
    //   dateOfBirth: this.getStudentFromList.dateOfBirth
    // })
    // if (this.operate) {
    //
    //   updateStu = this.getStudentFromList
    //   this.studentAdd.emit(updateStu)
    // }

      // else if (!this.operate) {

      // this.studentForm.disable()
    }


    // this.disable = true

    //   if(changes['formMode']){
    //   if(this.formMode === 'view'){
    //     this.studentForm.disable()
    //   }else if(this.formMode === 'edit') {
    //     this.studentForm.enabled
    //   }
    // }


    // this.setFormMode()

    // console.log('hi', this.getFromList)
    // console.log(this.studentForm)



  // setFormMode(): void {
  //   if (this.formMode === 'view') {
  //     this.studentForm.disable();
  //   } else if (this.formMode === 'edit') {
  //     this.studentForm.enable();
  //   }
  // }

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
