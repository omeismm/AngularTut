import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  template: `
    <div class="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <p class="text-lg font-medium text-gray-800 mb-2">The user's name is {{name}}</p>
      <p class="text-sm text-gray-600 mb-3">Username: <span class="font-semibold">{{ username }}</span></p>
      
      <p class="text-md font-medium text-gray-700 mt-4">Preferred Framework:</p>
      
      <ul class="mt-2 space-y-3 mb-4">
        <li class="flex items-center space-x-2 p-2 bg-gray-50 rounded">
          <span class="text-sm text-gray-600">Static Image:</span>
          <img ngSrc="logo.svg" alt="Angular logo" width="32" height="32" class="ml-2" />
        </li>
        <li class="flex items-center space-x-2 p-2 bg-gray-50 rounded">
          <span class="text-sm text-gray-600">Dynamic Image:</span>
          <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" class="ml-2" />
        </li>
      </ul>
      
      <p class="text-md text-indigo-600 font-medium mb-4">
        {{ username }}'s favorite framework: <span class="font-bold">{{ favoriteFramework }}</span>
      </p>
      
      <div class="mb-4">
        <label for="framework" class="block text-sm font-medium text-gray-700 mb-1">
          Favorite Framework:
        </label>
        <input 
          id="framework" 
          type="text" 
          [(ngModel)]="favoriteFramework" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <button 
        (click)="showFramework()" 
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Show Framework
      </button>
    </div>
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
