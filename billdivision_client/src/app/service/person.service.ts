import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pageable } from '../models/pageable.model';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  public baseUrl: string = `${environment.BASE_API_URL}/people`;
  constructor(private http: HttpClient) {}

  removeEmptyFields(data: any): void {
    if (!data) {
      return;
    }

    Object.keys(data).forEach(
      (key) =>
        (data[key] === null ||
          data[key] === '' ||
          data[key] === undefined ||
          data[key].length === 0) &&
        delete data[key]
    );
  }

  findAll(search: any): Observable<Pageable<Person>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<Pageable<Person>>(`${this.baseUrl}`, {
      params,
    });
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  update(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/${person.id}`, person);
  }

  findById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  save(person: Person): Observable<Person> {
    return this.http.post(`${this.baseUrl}`, person);
  }
}
