import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Mensags } from '../../services/mensags';

@Component({
  selector: 'app-messagens',
  templateUrl: './messagens.html',
  styleUrls: ['./messagens.css'],
   standalone: false
})
export class Messagens {
  faXmark = faXmark;

  constructor(public message: Mensags){}
}
