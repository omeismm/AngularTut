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
    `,
})
export class UserComponent {
  @Input() name = '';
  logoUrl = 'logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
