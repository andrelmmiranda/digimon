import { Component, Input, OnInit } from '@angular/core';
import { Digimon } from 'src/app/interfaces/Digimon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  data?: Digimon[];

  constructor() { }

  ngOnInit(): void { }
}
