import { Component, Input, OnInit } from '@angular/core';
import { EleicaoService } from '../eleicao.service';
import { Eleicao } from './eleicao';
import { OrderPipe } from 'ngx-order-pipe';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.component.html',
  styleUrls: ['./eleicao.component.css']
})
export class EleicaoComponent implements OnInit {

  partido = "";

  order: string = 'qtdTotalVotos';

  dadosEleicoes: Eleicao[] | undefined;

  constructor(
    private eleicao_service: EleicaoService
  ) { }

  ngOnInit(): void {
    const dadosEleicoes = this.eleicao_service.getAll();

    this.dadosEleicoes = dadosEleicoes;
  }
}
