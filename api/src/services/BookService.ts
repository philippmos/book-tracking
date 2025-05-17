import { Author } from "../models/Author";
import { Book } from "../models/Book";
import { BookStatus } from "../models/BookStatus.enum";
import { IBookService } from "./interfaces/IBookService";

import { v4 as uuidv4 } from 'uuid';

export class BookService implements IBookService {
    private books: Array<Book> = [];

    constructor() {
        this.seedInitialData();
    }


    private seedInitialData(): void {
        const author: Author = {
            id: uuidv4(),
            name: 'Dummy Author'
        };

        this.books.push(
            {
                id: uuidv4(),
                title: 'Dummy Book 1',
                author: author,
                status: BookStatus.Wishlist
            },
            {
                id: uuidv4(),
                title: 'Dummy Book 2',
                author: author,
                status: BookStatus.Reading
            }
        );
    }

    getAll(): Array<Book> {
        return this.books;
    }
}