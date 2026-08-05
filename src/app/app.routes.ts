import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Contacto } from './contacto/contacto';
import { Servicio } from './servicio/servicio';
import { Productos } from './productos/productos';

export const routes: Routes = [
    {path:'',component: Inicio},
    {path:'Servicio',component: Servicio},
    {path:'Productos',component: Productos},
    {path:'Contacto',component: Contacto},
    {path:'**',component: Inicio}
    

];
