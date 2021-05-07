import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }


  getSkills(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.SERVER_URL + 'skills').pipe(
      catchError(this.handleError)
    );
  }

  public getSkill(skill) {
    return this.httpClient.get(`${this.SERVER_URL + 'skills'}/${skill}`);
  }
  public createSkill(skill: { id: number, name: string, description: string, pic: string }) {
    return this.httpClient.post(`${this.SERVER_URL + 'skills'}`, skill)
  }

  public deleteSkill(skill) {
    return this.httpClient.delete(`${this.SERVER_URL + 'skills'}/${skill}`)
  }

  updateSkill(skill): Observable<any> {
    console.log(...skill)
    return this.httpClient.put<any>(this.SERVER_URL + 'skills', skill, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
  // public updateSkill(skill: {id: number, name: string, description: string, pic: string}){
  //     return this.httpClient.put(`${this.SERVER_URL + 'skills'}/${skill.id}`, skill,  { headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  // }

}