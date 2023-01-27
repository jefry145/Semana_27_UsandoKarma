import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad27';
  valor1!:number
  valor2!:number
  SelectValue!:any

  result!:any
  Operacion!:any

  TestApp!:any
  
  calcular(SelectValue:string ,valor1:number ,valor2:number){
     
    
    switch ( SelectValue //this.SelectValue
    ) {
      case  "Division" :
         this.TestApp= (valor1 / valor2)
             this.result = `La Division es igual a : ${this.TestApp}`
            this.Operacion= `Operacion realizada : ${valor1} / ${valor2} = ${this.TestApp}`
        break;
      case "multip":
        this.TestApp = (valor1 * valor2)
              this.result = `La Multiplicaciòn es igual a : ${this.TestApp}`
              this.Operacion=` Operacion realizada : ${valor1} * ${valor2} = ${this.TestApp}`
        break;
      case "resta":
        this.TestApp = (valor1 - valor2)
              this.result = `La Resta es igual a : ${this.TestApp}` 
              this.Operacion= ` Operacion realizada : ${valor1} - ${valor2} = ${this.TestApp}`
        break;
      case "suma":
        this.TestApp = (valor1 + valor2)
              this.result = `La Suma es igual a : ${this.TestApp}  `
              this.Operacion=` Operacion realizada : ${valor1} + ${valor2} = ${this.TestApp}`
        
      break;

    }return this.TestApp
    
  }
}
