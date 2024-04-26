import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  public campoAltura:string = "";
  public campoPeso:string = "";
  public imc:number = 0;

  public classificacao:string = "";
  public grauObesidade:string = "";

  functioncalcular() {
    let campoPesoN = parseFloat(this.campoPeso);
    let campoAlturaN = parseFloat(this.campoAltura);
    this.imc = parseFloat((campoPesoN/(campoAlturaN*campoAlturaN)).toFixed(1));
    if (this.imc < 18.4) {
      this.classificacao = "Magreza";
      this.grauObesidade = "0";
    } else if (this.imc >= 18.5 && this.imc < 24.9) {
      this.classificacao = "Normal";
      this.grauObesidade = "0"
    } else if (this.imc > 25.0 && this.imc < 29.9) {
      this.classificacao = "Sobrepeso";
      this.grauObesidade = "1"
    } else if (this.imc > 30.0 && this.imc < 39.9) {
      this.classificacao = "Obesidade";
      this.grauObesidade = "2";
    } else {
      this.classificacao = "Obesidade grave";
      this.grauObesidade = "3";
    }
  }

  functionlimpar() {
    this.campoAltura = "";
    this.campoPeso = "";
    this.imc = 0;
    this.classificacao = "";
    this.grauObesidade = "";
  }
}
