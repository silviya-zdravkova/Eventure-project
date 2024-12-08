import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "../environments/environment.development";
import { EventInterface } from "./types/event";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEvents() {
    const {apiUrl} = environment;
    return this.http.get<EventInterface[]>(`${apiUrl}/data/events`)
  }

  getSingleEvent(id: string) {
    const {apiUrl} = environment;
    return this.http.get<EventInterface>(`${apiUrl}/data/events/${id}`);

  }
}
