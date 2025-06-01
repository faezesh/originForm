import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentModel} from './student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  st: StudentModel[] = []
  private sUrl = 'https://apitester.ir/api/';
  // private sUrl = 'http://192.168.10.189:8080/api/student/all'

  // body = {
  //   data: this.st,
  // }

  // param: HttpParams = {
  //   id: number
  // }

  constructor(private http: HttpClient) {
  }

  getStudent(): Observable<any> {

    // const header = new HttpHeaders().set('','')

    return this.http.get(this.sUrl, {})
  }

  addStudent(st: StudentModel[]): Observable<any> {
    return this.http.post(this.sUrl, st)

  }

  updateStudent(id: string, st: StudentModel[]): Observable<any> {
    return this.http.put(this.sUrl + 'update',{}, {
      params: {
        sId: id.toString()
      }
    })
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.sUrl}/student/${id}`)
  }

}
