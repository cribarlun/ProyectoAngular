import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [DatePipe]
})
export class PipesComponent implements OnInit {

  birthDate: Date = new Date(1995, 3, 20); //20 de abril de 1995

  dummyText: string = "Lorem ipsum dolor sit amet. Consectetur Adipscing elit.";

  htmlText: string = "Texto <strong> con etiquedas</strong> <u>HTML</u>";

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    console.log(this.datePipe.transform(this.birthDate, 'dd-MM-yyyy'));
  }

}
