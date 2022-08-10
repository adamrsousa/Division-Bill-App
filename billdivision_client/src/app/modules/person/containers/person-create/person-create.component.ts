import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { forkJoin, Subject, takeUntil } from 'rxjs';
import { Person } from 'src/app/models/person';
import { Location } from '@angular/common';
import { PersonFacade } from '../../person-facade';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  public people!: Person[];
  public peopleForm!: FormGroup;
  public data: any;
  public title = 'Criar Pessoas';
  public breadcrumbsItems: MenuItem[];
  public collapsed: boolean = true;
  public actualYear: number = new Date().getFullYear();
  private readonly destroy$: Subject<void> = new Subject();

  constructor(
      private fb: FormBuilder,
      private location: Location,
      @Inject(PersonFacade) private facade: PersonFacade,
      private router: Router,
      private messageService: MessageService,
  ) {
      this.breadcrumbsItems = [
          {
              label: 'Lista de Pessoas',
              routerLink: ['/people'],
          },
          {
              label: 'Criar Pessoas',
          },
      ];
      this.data = this.location.getState();
  }

  public ngOnInit(): void {
    this.buildForm();
    this.addpeople();
  }

  public buildForm(): void {
      this.peopleForm = this.fb.group({
          peopleArray: this.fb.array([]),
      });
  }

  get peopleArray(): FormArray {
      return this.peopleForm.get('peopleArray') as FormArray;
  }

  public createpersonFormGroup(): FormGroup {
      return this.fb.group({
          firstName: this.fb.control('', Validators.required),
          lastName: this.fb.control('', Validators.required),
          document: this.fb.control('', Validators.required),
          phone: this.fb.control('', Validators.required),
          email: this.fb.control('', Validators.required),
          personalBill: this.fb.control('', Validators.required),
      });
  }

  public addpeople() {
      this.peopleArray.push(this.createpersonFormGroup());
  }

  public removeperson(i: number) {
      if (this.peopleArray.length > 1) {
          this.peopleArray.removeAt(i);
      } else {
          this.messageService.add({
              severity: 'warn',
              summary: 'Ação não permitida',
              detail: 'Existência mínima de uma pessoa',
              life: 3000,
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

  public request(): Promise<any> {
      return new Promise((resolve) => {
          const save$ = this.peopleForm.value.peopleArray.map(
              (person: Person) => {
                  return this.facade.save(person);
              }
          );
          const execSave$ = forkJoin(save$);
          execSave$.pipe(takeUntil(this.destroy$)).subscribe((response:any) => {
              resolve(response.length);
          });
      });
  }

  async onSubmit(): Promise<any> {
      if (this.peopleForm.valid) {
          const countRequestSuccess = await this.request();
          this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: `${countRequestSuccess} pessoa(s) criada(s)!`,
              life: 3000,
          });
          this.router.navigate(['/group-spending/create']);
      }
  }

  public ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
}
