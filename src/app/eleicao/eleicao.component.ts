import { Component, Input, OnInit } from '@angular/core';
import { EleicaoService } from '../eleicao.service';
import { Eleicao } from './eleicao';
import { OrderPipe } from 'ngx-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { Dados } from './dados';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.component.html',
  styleUrls: ['./eleicao.component.css']
})
export class EleicaoComponent implements OnInit {

  partido = "";

  imageWidth = 30;

  vetor: [] = [];

  order: string = 'qtdTotalVotos';

  dadosEleicoes: Eleicao[] = [];

  getData = "";

  dados: Dados = {} as Dados;

  constructor(
    private eleicao_service: EleicaoService
  ) { }

  ngOnInit(): void {
    const dadosEleicoes = this.eleicao_service.getAll();

    this.dadosEleicoes = dadosEleicoes;

    this.selecao()

  }


  selecao() {
   return this.eleicao_service.getDados().subscribe(
      (res: any) => {
        this.dados = res;
      }
    )
  }

}
