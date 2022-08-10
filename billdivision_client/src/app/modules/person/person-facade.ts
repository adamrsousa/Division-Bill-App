import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from 'src/app/models/pageable.model';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/service/person.service';

@Injectable({
    providedIn: 'root',
})
export class PersonFacade {constructor(private service: PersonService) {}

    findAll(search: any): Observable<Pageable<Person>> {
        return this.service.findAll(search);
    }

    findById(id: string): Observable<Person> {
        return this.service.findById(id);
    }

    delete(id: number): Observable<Object> {
        return this.service.delete(id);
    }

    save(person: Person): Observable<Person> {
        return this.service.save(person);
    }

    update(person: Person): Observable<Object> {
        return this.service.update(person);
    }
}