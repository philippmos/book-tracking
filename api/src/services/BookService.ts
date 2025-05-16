import { Author } from "../models/Author";
import { Book } from "../models/Book";
import { BookStatus } from "../models/BookStatus.enum";
import { IBookService } from "./interfaces/IBookService";

import { v4 as uuidv4 } from 'uuid';

export class BookService implements IBookService {
    getAll(): Array<Book> {
        const author: Author = {
            id: uuidv4(),
            name: 'Dummy Author'
        };

        const books: Array<Book> = [
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
                status: BookStatus.Wishlist
            }
        ];
        
        return books;
    }
}