import {Component} from 'angular2/core';
import {Food} from './Food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
<<<<<<< HEAD
  template: `
  <div class="food-form">
	  <h5>Edit Food Details:</h5>
	  <input [(ngModel)]="food.name" class="col-sm-8 input-sm food-form"/>
	  <input [(ngModel)]="food.notes" class="col-sm-8 input-sm food-form"/>
	  <input [(ngModel)]="food.calories" class="col-sm-8 input-sm food-form"/>
	</div>
=======

  template: `
  <div id="edit-food" >
	  <input [(ngModel)]="food.name" class="col-sm-8 input-sm"/>
	  <input [(ngModel)]="food.notes" class="col-sm-8 input-sm"/>
	  <input [(ngModel)]="food.calories" class="col-sm-8 input-sm"/>
  </div>
>>>>>>> 5c6ab9f05736eb5bce7f0d40be9bc1f86ad59f9c
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
<<<<<<< HEAD
}
=======
}


//I want this!!! Inside FoodDisplay...
>>>>>>> 5c6ab9f05736eb5bce7f0d40be9bc1f86ad59f9c
