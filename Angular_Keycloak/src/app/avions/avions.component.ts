import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html'
  
})
export class AvionsComponent implements OnInit {
  avions!: Avion[];

  constructor(private avionService: AvionService) {}

  ngOnInit(): void {
    this.chargerAvions();
  }

  chargerAvions() {
    this.avionService.listeAvion().subscribe((prods) => {
      console.log(prods);
      this.avions = prods;
    });
  }
}
