import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Moments } from '../components/Moments';

import { Respostas } from '../components/Respostas';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`;


  constructor(private http: HttpClient) {}

  getMoments(): Observable<Respostas<Moments[]>> {
    return  this.http.get<Respostas<Moments[]>>(this.apiUrl)
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }

}
