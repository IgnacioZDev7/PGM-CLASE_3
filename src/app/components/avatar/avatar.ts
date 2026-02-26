import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
 colorFondo = signal<string>('#3498db');
 tamano = signal<number>(150);
 tieneLentes = signal<boolean>(false);
 tipoExpresion = signal<number>(1);


//se agregan nuevas señales para manejar nombre y giro
//almacena el texto temporal escrito en el input
 nombreInput = signal<string>('');
//almacena el nombre confirmado que se muestra junto al avatar
 nombreGuardado = signal<string>('');
//booleano que controla si la animación de giro está activa
 girando = signal<boolean>(false);

  cambiarColor(event: Event){
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }
 cambiarTamano(event: Event){
   const input = event.target as HTMLInputElement;
   this.tamano.set(parseInt(input.value));
 }
 toggleLentes(){
    this.tieneLentes.update(flag => !flag);
 }
 setExpresion(tipo: number){
    this.tipoExpresion.set(tipo);
 }

 //se agregan nuevos metodos 
 // actualiza el nombre 
 cambiarNombre(event: Event){
   const input = event.target as HTMLInputElement;
   this.nombreInput.set(input.value);
 }

 // replica el valor actual para mostrarlo junto al avatar
 guardarNombre(){
   this.nombreGuardado.set(this.nombreInput());
 }

 
}
