import { Component, ViewChild } from '@angular/core';
import { Veiculo } from './veiculo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho1';

  @ViewChild('myForm', {static : true})
  meuForm : NgForm;

  veiculo : Veiculo;
  veiculos : Veiculo[];

  ngOnInit(){
    this.veiculo = new Veiculo();
    this.veiculos = [];
  }

  salvarVeiculo(){
    if(!this.veiculo.id){
      this.veiculo.id = (new Date()).getTime();
      this.veiculos.push(this.veiculo);
    }else{
      console.log("editando...")
      let oldVeiculo = this.veiculos.find(v => v.id == this.veiculo.id);
      oldVeiculo.id = this.veiculo.id;
      oldVeiculo.marca = this.veiculo.marca;
      oldVeiculo.modelo = this.veiculo.modelo;
      oldVeiculo.tipo = this.veiculo.tipo;
      oldVeiculo.cor = this.veiculo.cor;
      oldVeiculo.ano = this.veiculo.ano;
    }

    this.veiculo = new Veiculo();
    this.meuForm.reset();
  }

  editarVeiculo(veiculo : Veiculo){
    this.veiculo = new Veiculo(veiculo.id , veiculo.tipo, 
      veiculo.marca, veiculo.modelo, veiculo.cor, veiculo.ano);
  }

  removerVeiculo(veiculo : Veiculo){
    let index = this.veiculos.findIndex(v => v.id == veiculo.id);
    this.veiculos.splice(index, 1);
  }
}
