import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dadosEleicoes, Eleicao } from './eleicao/eleicao';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as JSZip from 'jszip';
import { Dados } from './eleicao/dados';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {

  dadosEleicao: Eleicao[] = dadosEleicoes;

  dados: Dados[] = [];

  url = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/config/mun-e000426-cm.json";
  urlSergipe = "https://resultados.tse.jus.br/oficial/#/eleicao;e=e426;uf=se;mu=31054/resultados";

  constructor(
    public http: HttpClient
  ) { }

  getAll(){
    return this.dadosEleicao;
  }

  getDados():Observable<Dados[]>{
    return this.http.get(this.url).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }

  getDadosSergipe():Observable<[]>{
    return this.http.get(this.urlSergipe).pipe(
      map((res: any) => {
        console.log(JSON.parse(res));
        return res;
      })
    );
  }




}
