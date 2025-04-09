//app.component.ts
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';//this is a "class" not an module to import so we put this here and not in the app.module.ts
import { Validators } from '@angular/forms';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularLearn';
  isServerRunning = true;
  isEditable = false;
  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]

  message = '';
  edit() {
    this.isEditable = !this.isEditable;
  }
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }


  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
  


  display = '';
  //inject based dependency
  //carService = inject(CarService);
  //constructor() {
  //  this.display = this.carService.getCars().join(' ⭐️ ');
  //}

  //constructor based dependency
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
  //note that for lesson 20 and 21, there are things that outside the scope if the lesson, so i need to read the documentation on dependency injection
}
