import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moments-form',
  standalone: false,
  templateUrl: './moments-form.html',
  styleUrl: './moments-form.css'
})
export class MomentsForm {
  @Input() btnText!: string

  momentForm!: FormGroup

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }
  submit() {
    if(this.momentForm.invalid) {
      return;
    }

    console.log('Enviou o furmulario')
  }

}
