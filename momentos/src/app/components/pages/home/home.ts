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

  faSearch = faSearch;
  searchTerm: string = '';

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

  search(enven: any): void {

    const target = enven.target as HTMLInputElement
    const value = target.value

 this.moments = this.allMoments.filter(moment =>
  moment.title.toLowerCase().includes(value.toLowerCase())
);

  }
}
