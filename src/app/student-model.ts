export class StudentModel {
  id?: number
  firstName!: string
  lastName!: string
  phoneNumber!: string
  studentId!: number
  dateOfBirth!: string

}

export function mapToStudentModel(model: any) {
  let m: StudentModel = new StudentModel()
  m.id = model?.id
  m.firstName = model.firstName
  m.lastName = model.lastName
  m.phoneNumber = model.phoneNumber
  m.studentId = model.studentId
  m.dateOfBirth = model.dateOfBirth
  return m
}

//
