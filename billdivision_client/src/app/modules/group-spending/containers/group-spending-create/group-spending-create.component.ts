import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { BaseSearch } from 'src/app/models/base-search';
import { Person } from 'src/app/models/person';
import { PersonFacade } from 'src/app/modules/person/person-facade';
import { GroupSpendingFacade } from '../../group-spending-facade';

@Component({
  selector: 'app-group-spending-create',
  templateUrl: './group-spending-create.component.html',
  styleUrls: ['./group-spending-create.component.css'],
})
export class GroupSpendingCreateComponent implements OnInit {
  public people!: Person[];
  public groupForm!: FormGroup;
  public title = 'Criar Grupo';
  public breadcrumbsItems!: MenuItem[];
  public pplList!: Person[];

  constructor(
    private fb: FormBuilder,
    @Inject(GroupSpendingFacade)
    private facade: GroupSpendingFacade,
    @Inject(PersonFacade)
    private personFacade: PersonFacade,
    private router: Router,
    private messageService: MessageService
  ) {
    this.breadcrumbsItems = [
      {
        label: 'Lista de Grupos',
        routerLink: ['/group-spending/read'],
      },
      {
        label: 'Criar Grupo',
      },
    ];
  }

  ngOnInit(): void {
    this.buildForms();
    this.getContent();
  }

  public getContent(): void {
    const page = { page: 0 };
    const size = { size: 10 };
    let searchObject: BaseSearch = {};
    searchObject = Object.assign(searchObject, page, size);

    this.personFacade.findAll(searchObject).subscribe((response: any) => {
      this.people = response.content;
      this.patchPeople(this.people);
      this.save();
    });
  }

  public buildForms(): void {
    this.groupForm = this.fb.group({
      additionals: this.fb.control('', Validators.required),
      discounts: this.fb.control('', Validators.required),
      globalBill: this.fb.control('', Validators.required),
      hasWaiterAdd: this.fb.control(false, Validators.required),
      peopleList: this.fb.array([]),
    });
  }

  get peopleList(): FormArray {
    return this.groupForm.get('peopleList') as FormArray;
  }

  public patchPeople(p: Person[]): void {
    const peopleFormArray = this.peopleList;
    p.map((person: Person, i: number) => {
      peopleFormArray.push(this.createPersonFormGroup());
      peopleFormArray.controls[i].patchValue({
        id: person?.id,
        firstName: person?.firstName,
        lastName: person?.lastName,
        document: person?.document,
        phone: person?.phone,
        email: person?.email,
        personalBill: person?.personalBill,
      });
    });
  }

  public createPersonFormGroup(): FormGroup {
    return this.fb.group({
      id: this.fb.control('', Validators.required),
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      document: this.fb.control('', Validators.required),
      phone: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      personalBill: this.fb.control('', Validators.required),
    });
  }

  public save(): void {
    if (this.groupForm.valid) {
      this.facade.save(this.groupForm.value).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Grupo criado com sucesso!',
          life: 3000,
        });
        this.router.navigate(['/payments/create']);
      });
    }
  }

  public verifyFieldValue(fieldValue: string): number {
    if (fieldValue == null || fieldValue == undefined || fieldValue == '') {
      return 0;
    } else {
      return fieldValue.length;
    }
  }
}
