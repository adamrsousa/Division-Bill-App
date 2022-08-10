import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupSpending } from 'src/app/models/group-spending';
import { Pageable } from 'src/app/models/pageable.model';
import { GroupSpendingService } from 'src/app/service/group-spending.service';

@Injectable({
    providedIn: 'root',
})
export class GroupSpendingFacade {constructor(private service: GroupSpendingService) {}

    findAll(search: any): Observable<Pageable<GroupSpending>> {
        return this.service.findAll(search);
    }

    findById(id: string): Observable<GroupSpending> {
        return this.service.findById(id);
    }

    delete(id: number): Observable<Object> {
        return this.service.delete(id);
    }

    save(groupSpending: GroupSpending): Observable<GroupSpending> {
        return this.service.save(groupSpending);
    }

    update(groupSpending: GroupSpending): Observable<Object> {
        return this.service.update(groupSpending);
    }
}