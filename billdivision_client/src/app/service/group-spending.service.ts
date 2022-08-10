import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupSpending } from '../models/group-spending';
import { Pageable } from '../models/pageable.model';

@Injectable({
  providedIn: 'root',
})
export class GroupSpendingService {
  public baseUrl: string = `${environment.BASE_API_URL}/billdivision`;
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

  findAll(search: any): Observable<Pageable<GroupSpending>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<Pageable<GroupSpending>>(`${this.baseUrl}`, {
      params,
    });
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  update(group: GroupSpending): Observable<GroupSpending> {
    return this.http.put<GroupSpending>(`${this.baseUrl}/${group.id}`, group);
  }

  findById(id: string): Observable<GroupSpending> {
    return this.http.get<GroupSpending>(`${this.baseUrl}/${id}`);
  }

  save(group: GroupSpending): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, group);
  }
}
