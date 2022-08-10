import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, Translation } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  base_path: string = environment.FRONT_URL;
  title = 'Divisão de Contas';
  date: number | undefined;

  constructor(private config: PrimeNGConfig) {}

  ngOnInit(): void {
    this.date = Date.now();
    const translations: Translation = {
      dayNames: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
      ],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      today: 'Hoje',
      contains: 'Contém',
      notContains: 'Não contém',
      startsWith: 'Começa com',
      endsWith: 'Termina com',
      equals: 'É igual a',
      notEquals: 'Não é igual',
      addRule: 'Adicionar regra',
      matchAll: 'Corresponder a todos',
      matchAny: 'Corresponder a qualquer',
      apply: 'Aplicar',
      clear: 'Limpar',
      cancel: 'Cancelar',
      removeRule: 'Remover Regra',
    };
    this.config.setTranslation(translations);
  }
}
