import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl,FormGroup, FormBuilder } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  formularioContacto;

  constructor(private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      name: [''],
      email: [''],
      telefono: [''],
      descripcion: ['']
    });
  }

  enviar() {
    console.log(this.formularioContacto.value);
    alert('Informacion enviada')
  }
}
