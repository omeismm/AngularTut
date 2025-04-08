//app.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';//this is a "class" not an module to import so we put this here and not in the app.module.ts

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
  profileForm = new FormGroup({ name: new FormControl(''), email: new FormControl(''), });
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

}
