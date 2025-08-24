import { Component, OnInit } from '@angular/core';

import { MomentService } from '../../../services/moments';

import { Moments } from '../../Moments';

import { environment } from '../../../../environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  allMoments: Moments[] = []
  moments: Moments[] = []
  baseApiUrl = environment.baseApiUrl

  // todo search


  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {

      const data =  items.data

      data.map((items) => {
        items.created_at = new Date(items.created_at!).toLocaleDateString('pt-BR')
      });
       
      this.allMoments = data
      this.moments = data

    });
  }
}
