import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is {{name}}</p>
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="logo.svg" alt="Angular logo"  width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt"  width="32" height="32" />
      </li>
    </ul>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
  Favorite Framework:
  <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
  </label>
  <button (click)="showFramework()">Show Framework</button>
    `,
})
export class UserComponent {
  @Input() name = '';
  logoUrl = 'logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
  favoriteFramework = '';
  showFramework() { alert(this.favoriteFramework); }
}
