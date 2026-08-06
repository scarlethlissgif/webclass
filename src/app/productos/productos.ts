import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})

export class Productos {

  productos = [
    { id: 1, nombre: 'laptop', precio: 588, stock: 5, url: "https://neutronpcgamer.com/wp-content/uploads/2026/07/Laptop-Gamer-HP-Victus-15.png"},
    { id: 2, nombre: 'mouse', precio: 85, stock: 0, url:"https://neutronpcgamer.com/wp-content/uploads/2023/11/Mouse-Logitech-G203-negro.png.webp"},
    { id: 3, nombre: 'telado', precio: 120, stock: 4, url:"https://neutronpcgamer.com/wp-content/uploads/2023/11/Teclado-Mecanico-Redragon-Fizz-Pro-K616-Rgb-Blanco_Gris.png.webp"},
    { id: 4, nombre: 'silla gamer', precio: 98, stock: 1, url:"https://neutronpcgamer.com/wp-content/uploads/2026/06/Silla-Gamer-Cougar-Armor-Elite.png"},
    { id: 5, nombre: 'parlante', precio: 50, stock: 20, url:"https://neutronpcgamer.com/wp-content/uploads/2023/11/Parlante-Logitech-Z313-2.1-Negro.png.webp" },
    { id: 6, nombre: 'Mousepad', precio: 30, stock: 0, url: "https://neutronpcgamer.com/wp-content/uploads/2023/11/MOUSE-PAD-cougar-ARENA-XL-800-x-300.png.webp"},
    { id:7, nombre: 'Monitor Gamer Curvo ', precio:250, stock:10, url:'https://neutronpcgamer.com/wp-content/uploads/2026/06/Monitor-Gamer-Curvo-MSI-MAG-242C.png'},
    { id:8, nombre: 'Controlador Corebox V3', precio:20, stock:0, url:'https://neutronpcgamer.com/wp-content/uploads/2023/12/Controlador-Corebox-V3.png.webp'},
    { id:9, nombre: 'Computadora Gamer Intel Core ', precio:600, stock:30, url:'https://neutronpcgamer.com/wp-content/uploads/2023/12/case-gamer-rgb-cougar-archon-2.png'},
    { id:10, nombre: 'Dron dji mini 3 rc con camara 4k hdr', precio:850, stock:0, url:'https://neutronpcgamer.com/wp-content/uploads/2024/07/Dron-dji-mini-3-rc-con-camara-ligera-4k-hdr-2.png.webp'}
  ];

}
