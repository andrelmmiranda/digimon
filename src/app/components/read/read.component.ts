import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  teste: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.read().subscribe(item => {
      this.teste = item
      console.log(item)
      console.log(this.teste)
      console.log()
    })
  }

}
