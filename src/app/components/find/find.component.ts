import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Digimon } from 'src/app/interfaces/Digimon';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  readonly url = 'https://digimon-api.vercel.app/api/digimon';
  
  search: string = '';
  filter: string = 'name';

  @Output()
  dataToHome = new EventEmitter<Digimon[]>();

  constructor(private dataService: DataService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initial();
  }

  private emitData(data?: Digimon[]) {
    this.dataToHome.emit(data);
  }

  public getMonster(): void {
    this.dataService.getData(`${this.url}/${this.filter}/${this.search.toLowerCase()}`).subscribe({
      next: (item) => {
        this.search = '';
        this.emitData(item);
      },
      error: (err) => {
        this.snackBar.open(`Deu alguma merda: ${err.error.ErrorMsg}`, 'X', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

  public initial(): void {
    this.dataService.getData(this.url).subscribe({
      next: items => {
        this.emitData(items);
      }
    });
  }
}
