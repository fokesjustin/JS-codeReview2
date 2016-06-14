import { Component } from 'angular2/core';
import { Food } from './Food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
<<<<<<< HEAD
  template: `
  
  <div class="food-form"> 
    <h5 (click) = "toggleShow()">{{ food.name }}</h5>
    <p *ngIf="show === true">Notes: {{ food.notes }} --- Calories: {{ food.calories }}</p>
  </div>  

=======
  template: `  
  <div class="food-form"> 
    <h5 (click) = "toggleShow()">{{ food.name }}</h5>
    <p *ngIf="show === true">Notes: {{ food.notes }} --- Calories: {{ food.calories }}</p> 
  </div>  
>>>>>>> 5c6ab9f05736eb5bce7f0d40be9bc1f86ad59f9c
  `
})
export class FoodDisplayComponent {
  public food: Food;
  public show: boolean = false;
  toggleShow(){
  	this.show = !this.show;
  }
}
