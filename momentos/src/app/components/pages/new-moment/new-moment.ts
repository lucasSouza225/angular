import { Component } from '@angular/core';

import { Moments } from '../../Moments';

import { MomentService } from '../../../services/moments';


@Component({
  selector: 'app-new-moment',
  standalone: false,
  templateUrl: './new-moment.html',
  styleUrl: './new-moment.css'
})

export class NewMoment {
  btnText = "Compartilhar";

  constructor(private momentService: MomentService) {

  }

  async createHandler(moment: Moments){
    const formData = new FormData()

    formData.append("title", moment.title);
    formData.append("description", moment.descripton);

    if (moment.image) {
      formData.append("image", moment.image);
    }


    await this.momentService.createMoment(formData).subscribe();





  }
}

