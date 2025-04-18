import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  template: `
    <ul class="space-y-2 py-3 px-4 bg-gray-50 rounded-lg shadow-sm">
      <li class="p-2 bg-white border-l-4 border-indigo-500 rounded shadow-sm hover:bg-indigo-50 transition-colors duration-200">
        Building for the web is fantastic!
      </li>
      <li class="p-2 bg-white border-l-4 border-indigo-500 rounded shadow-sm hover:bg-indigo-50 transition-colors duration-200">
        The new template syntax is great
      </li>
      <li class="p-2 bg-white border-l-4 border-indigo-500 rounded shadow-sm hover:bg-indigo-50 transition-colors duration-200">
        I agree with the other comments!
      </li>
    </ul>
  `,
})
export class CommentsComponent {
 
}
