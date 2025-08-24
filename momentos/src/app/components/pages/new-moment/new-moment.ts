import { Component } from '@angular/core';

import { Route, Router } from '@angular/router';

import { Moments } from '../../Moments';

import { MomentService } from '../../../services/moments';

import { Mensags } from '../../../services/mensags';

@Component({
  selector: 'app-new-moment',
  standalone: false,
  templateUrl: './new-moment.html',
  styleUrl: './new-moment.css'
})

export class NewMoment {
  btnText = "Compartilhar";

  constructor(
    private momentService: MomentService,
    private message: Mensags,
    private ruoter: Router ) {

  }

  async createHandler(moment: Moments){
    const formData = new FormData()

    formData.append("title", moment.title);
    formData.append("description", moment.descripton);

    if (moment.image) {
      formData.append("image", moment.image);
    }


    await this.momentService.createMoment(formData).subscribe();

    this.message.add('Momento adcionadado com sucesso!');

    this.ruoter.navigate(['/']);

  }
}

