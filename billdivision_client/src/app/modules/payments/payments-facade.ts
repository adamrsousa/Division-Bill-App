import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from 'src/app/models/pageable.model';
import { Payment } from 'src/app/models/payment';
import { PaymentsService } from 'src/app/service/payments.service';

@Injectable({
    providedIn: 'root',
})
export class PaymentsFacade {constructor(private service: PaymentsService) {}

    findAll(search: any): Observable<Pageable<Payment>> {
        return this.service.findAll(search);
    }

    findById(id: string): Observable<Payment> {
        return this.service.findById(id);
    }

    delete(id: number): Observable<Object> {
        return this.service.delete(id);
    }

    save(id: number): Observable<Object> {
        return this.service.save(id);
    }

    update(payment: Payment): Observable<Object> {
        return this.service.update(payment);
    }
}