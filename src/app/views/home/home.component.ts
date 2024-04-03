import { Component, OnInit } from '@angular/core';
import { Digimon } from 'src/app/interfaces/Digimon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data?: Digimon[];

  constructor() { }

  ngOnInit(): void {
  }

}
