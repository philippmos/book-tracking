import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { BooksOverviewComponent } from './components/books/books-overview/books-overview.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-tracking-client';
}
