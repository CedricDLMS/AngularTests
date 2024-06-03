import { CommonModule, DatePipe, NgStyle } from '@angular/common';
import { Component, NgModule, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import voiture from './components/maclass';
import {MatSliderModule} from '@angular/material/slider';
import { NgForm, NgModel } from '@angular/forms';



@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,DatePipe,NgStyle,MatSliderModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
  tasks : Array<Task> = [
    {id: 1,name:"yes"},
    {id: 2,name:"no"}
    ]
  date = Date.UTC(2023,6,20);
  date2 = Date.now();
  voiture = new voiture("https://img.freepik.com/vecteurs-premium/voiture-coloree-style-pixel-art-entierement-editee-isolee-fond-blanc-pour-jeux-mobiles_1038602-16.jpg",50,50);
}

type Task = {
  id : number;
  name : string;
}