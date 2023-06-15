import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a16-app';
}
