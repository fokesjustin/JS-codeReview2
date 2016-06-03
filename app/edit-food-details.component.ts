import {Component} from 'angular2/core';
import {Food} from './Food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div id="edit-food">
	  <h5>Edit Food Details:</h5>
	  <input [(ngModel)]="food.name" class="col-sm-8 input-sm"/>
	  <input [(ngModel)]="food.notes" class="col-sm-8 input-sm"/>
	  <input [(ngModel)]="food.calories" class="col-sm-8 input-sm"/>
  </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}