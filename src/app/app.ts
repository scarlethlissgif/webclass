import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Productos } from './productos/productos';
import { Footer } from './footer/footer';
import { Inicio } from './inicio/inicio';
import { Servicio } from './servicio/servicio';
import { Contacto } from './contacto/contacto';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,Productos,Footer,RouterOutlet,Inicio,Servicio,Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-angular');
}
