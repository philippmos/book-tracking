import { inject, Injectable } from '@angular/core';
import { Book, toBook } from '../models/book';
import { Observable, map } from 'rxjs';
import { BooksService } from '../../apiclients/booksapi';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksApiClient = inject(BooksService);

  getAll(): Observable<Array<Book>> {
    const books$ = this.booksApiClient.booksGet();

    return books$.pipe(
      map(bookResponses => bookResponses.map(toBook))
    );
  }
}
