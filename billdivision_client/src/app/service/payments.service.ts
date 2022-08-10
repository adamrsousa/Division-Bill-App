import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pageable } from '../models/pageable.model';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  public baseUrl: string = `${environment.BASE_API_URL}/payments`;
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

  findAll(search: any): Observable<Pageable<Payment>> {
    this.removeEmptyFields(search);
    const params = new HttpParams({ fromObject: search });
    return this.http.get<Pageable<Payment>>(`${this.baseUrl}`, {
      params,
    });
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  update(payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.baseUrl}/${payment.id}`, payment);
  }

  findById(id: string): Observable<Payment> {
    return this.http.get<Payment>(`${this.baseUrl}/${id}`);
  }

  save(id: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/?id=${id}`, {});
  }
  }
