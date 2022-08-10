import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { timer } from 'rxjs';
import { BaseSearch } from 'src/app/models/base-search';
import { Payment } from 'src/app/models/payment';
import { Person } from 'src/app/models/person';
import { PersonFacade } from 'src/app/modules/person/person-facade';
import { PaymentsFacade } from '../../payments-facade';

@Component({
  selector: 'app-payments-create',
  templateUrl: './payments-create.component.html',
  styleUrls: ['./payments-create.component.css'],
})
export class PaymentsCreateComponent implements OnInit {
  public payments!: Payment[];
  public people!: Person[];
  public paymentsForm!: FormGroup;
  public idPerson!: number;

  constructor(
      private fb: FormBuilder,
      @Inject(PaymentsFacade)
      private facade: PaymentsFacade,
      @Inject(PersonFacade)
      private personFacade: PersonFacade,
  ) {
  }

  public ngOnInit(): void {
      this.buildForm();
      this.getContent();
  }

  public getContent():void {
    const page = { page: 0 };
    const size = { size: 10 };
    let searchObject: BaseSearch = {};
    searchObject = Object.assign(
            searchObject,
            page,
            size)

   this.personFacade.findAll(searchObject)
    .subscribe((response: any)=>{
        this.people = response.content;
        this.patchPeople(this.people);
    })
}

public buildForm(): void {
    this.paymentsForm = this.fb.group({
        paymentArray: this.fb.array([]),
    });
}

get paymentArray(): FormArray {
    return this.paymentsForm.get('paymentArray') as FormArray;
}

public createPersonFormGroup(): FormGroup {
    return this.fb.group({
        value: this.fb.control('', Validators.required),
        buyer: this.fb.group({
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
        document: this.fb.control('', Validators.required),
        phone: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
        personalBill: this.fb.control('', Validators.required),
        })
    });
}

public patchPeople(p: Person[]): void {
  const peopleFormArray = this.paymentArray;
  p.map((person: Person, i: number) => {
      const buyerData = this.formatterBuyer(p[i]);
      peopleFormArray.push(this.createPersonFormGroup());
      peopleFormArray.controls[i].patchValue({
      value: person?.finalBill,
      buyer: buyerData
      });
  });
}

public formatterBuyer(data: any): object {
  const buyerData = {
    id: data?.id,
    firstName: data?.firstName,
    lastName: data?.lastName,
    document: data?.document,
    phone: data?.phone,
    email: data?.email,
    personalBill: data?.personalBill,
    finalBill: data?.finalBill
  };
  return buyerData;
}

public request(): void {
  const result: number[] = this.people.filter(p => p.id !== this.idPerson).map((p) => {
    return Number(p.id)
  })
  result.map((id: number) => {
    timer(1000).subscribe(() => {
      this.facade.save(id).subscribe((response:any) => {
        window.open(response.paymentUrl)
    })
    })
  })
}


public onSelect(event: any): void{
    this.idPerson = event.value[0].id;
}

}
