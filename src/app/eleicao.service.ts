import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dadosEleicoes, Eleicao } from './eleicao/eleicao';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as JSZip from 'jszip';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {

  dadosEleicao: Eleicao[] = dadosEleicoes;

  url = "https://cdn.tse.jus.br/eleicoes2020/correspesp/CESP_2t_AC_281120201335.zip";

  constructor(
    public http: HttpClient
  ) { }

  getAll(){
    return this.dadosEleicao;
  }
}
