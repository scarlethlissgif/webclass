import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  private fb= inject(FormBuilder);
  
  formularioContacto = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      descripcion: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });
  

enviar() {
  if (this.formularioContacto.valid) {
    alert('El formulario se envio de manera correcta al servidor')
  } else {
    alert('El formulario tiene ingresados de manera incorrecta')
  }
}
}
