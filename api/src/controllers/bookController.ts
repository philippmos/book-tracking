import { Router, Request, Response } from 'express';
import { Book } from '../models/Book';
import { Author } from '../models/Author';
import { BookStatus } from '../models/BookStatus.enum';

import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/books', (_request: Request, response: Response) => {
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


    response
        .status(200)
        .json(books);
});

export default router;