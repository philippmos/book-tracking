import { Component, input } from '@angular/core';
import { Book } from '../../../models/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [RouterLink],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  item = input.required<Book>();
}
