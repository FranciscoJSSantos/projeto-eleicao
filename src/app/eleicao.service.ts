import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dadosEleicoes, Eleicao } from './eleicao/eleicao';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Dados } from './eleicao/dados';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {

  dadosEleicao: Eleicao[] = dadosEleicoes;

  //instanciando a interface
  dados: Dados = {} as Dados;

  url = "https://resultados.tse.jus.br/oficial/ele2020/divulgacao/oficial/426/config/mun-e000426-cm.json";
  urlZip = "https://cdn.tse.jus.br/estatistica/sead/odsele/consulta_cand/consulta_cand_2020.zip";




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

}
