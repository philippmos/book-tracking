import { Controller, Get, Route, Tags } from 'tsoa';
import { IBookService } from '../../services/interfaces/IBookService';
import { inject, injectable } from 'tsyringe';
import { BookResponse, toBookResponse } from './Response/BookResponse';

@Route('books')
@Tags('Books')
@injectable()
export class BookController extends Controller {

    constructor(
        @inject('IBookService') private bookService: IBookService
    ) {
        super();
    }

    /**
     * @swagger
     * /books:
     *   get:
     *     summary: Retrieve a list of all books
     *     tags:
     *       - Books
     *     responses:
     *       200:
     *         description: A list of books
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/BookResponse'
     */
    @Get("/")
    public getAll(): Array<BookResponse> {
        return this.bookService.getAll().map(toBookResponse);
    };
}