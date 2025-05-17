import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);

  getAll(): Observable<Array<Book>> {
    const headers = {
      accept: 'application/json'
    };

    const url = `${environment.apiBaseUrl}/books`;

    return this.http.get<Array<Book>>(url, { headers });
  }
}
