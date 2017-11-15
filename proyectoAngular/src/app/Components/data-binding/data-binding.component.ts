import {Component, OnInit, OnDestroy} from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],

})
export class DataBindingComponent implements OnInit, OnDestroy {

  params: any;

  title1: string = "Interpolación";//añadido
  description1: string = "Ejemplo de data-binding por interpolación";//añadido

  title2: string = "Property Binding";//añadido
  description2: string = "Ejemplo de property binding";//añadido
  user1: any = { //añadido
    name: "Ricardo Fernández", //añadido
    email: "elrichard@gmail.com" //añadido
  }; //añadido


  title3: string = "Event Binding";//añadido
  description3: string = "Ejemplo de event binding";//añadido
  counter: number = 0; //añadido
  sumAction(): void { //añadido
    this.counter++; //añadido
  }

  title4: string = "Two-way Binding";
  description4: string = "Ejemplo de two-way binding";
  content: string = "Escribe aquí..."

  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  goToPipes() { //si llamamos a este metodo nos redireccionará a la url indicada aquí
    this.router.navigate(["/pipes"]);
  }

  ngOnInit() {
    this.params = this.activedRoute.params.subscribe(
      arg1 => {
        console.log(arg1);
      }
    );
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

}
