import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IUser, IExperience, IProject,
  ISkill, IEducation, ISocialNetwork,
  ILocation, IContact
} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users/`);
  }

  getExperiences(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(`${this.baseUrl}/experiences/`);
  }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.baseUrl}/projects/`);
  }

  getSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(`${this.baseUrl}/skills/`);
  }

  getEducation(): Observable<IEducation[]> {
    return this.http.get<IEducation[]>(`${this.baseUrl}/education/`);
  }

  getSocialNetworks(): Observable<ISocialNetwork[]> {
    return this.http.get<ISocialNetwork[]>(`${this.baseUrl}/social-networks/`);
  }

  getLocation(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`${this.baseUrl}/locations/`);
  }

  sendContact(data: IContact): Observable<any> {
    return this.http.post(`${this.baseUrl}/contact/`, data);
  }
}
