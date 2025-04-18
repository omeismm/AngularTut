import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  // Removed custom styles in favor of Tailwind classes
  template: `
    <button 
      class="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50" 
      (click)="addItem()">
      Add 🐢
    </button>
  `,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
