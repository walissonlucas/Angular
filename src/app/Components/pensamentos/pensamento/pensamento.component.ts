import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo1'
}

ngOnInit(): void {

}
}
