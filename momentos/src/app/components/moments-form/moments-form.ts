import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moments-form',
  standalone: false,
  templateUrl: './moments-form.html',
  styleUrl: './moments-form.css'
})
export class MomentsForm {
  @Input() btnText!: string

  momentForm!: FormGroup

  submit() {
    console.log('Enviou o furmulario')
  }

}
