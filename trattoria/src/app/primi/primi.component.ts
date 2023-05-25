import { Component } from '@angular/core';
import { Primo } from '../models/ piatti.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primi',
  templateUrl: './primi.component.html',
  styleUrls: ['./primi.component.css']
})
export class PrimiComponent {
  primi: Primo[]

  constructor(private router:Router) {
    this.primi = this.router.getCurrentNavigation().extras.state as Primo[];
  }
}
