import {Component, OnInit} from '@angular/core';
import {IbgeServiceService} from "../service/ibge-service.service";

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {
  estados: any[] = [];
  cidades: any[] = [];

  estadoSelecionado: any = null;
  cidadeSelecionada: any = null;

  constructor(private ibgeService: IbgeServiceService) {
  }

  ngOnInit(): void {
    this.ibgeService.getEstados().subscribe((dados) => {
      this.estados = dados;
    });
  }
  carregarCidades(estadoId: number): void {
    this.ibgeService.getCidadesPorEstado(estadoId).subscribe((dados) => {
      this.cidades = dados;
    });
  }
}
