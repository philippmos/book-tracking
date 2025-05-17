import { Component, inject, OnInit, signal } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from "../book-card/book-card.component";

@Component({
  selector: 'app-books-overview',
  imports: [FormsModule, BookCardComponent],
  templateUrl: './books-overview.component.html',
  styleUrl: './books-overview.component.scss'
})
export class BooksOverviewComponent implements OnInit {
  private bookService = inject(BookService);

  books = signal(<Array<Book>>([]));

  ngOnInit(): void {
    this.loadAllBooks();
  }

  loadAllBooks(): void {
    this.bookService.getAll()
      .pipe(first())
      .subscribe((books) => {
        this.books.set(books);
      });
  }
}
