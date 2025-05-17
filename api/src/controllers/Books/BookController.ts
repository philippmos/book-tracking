import { Router, Request, Response } from 'express';
import { IBookService } from '../../services/interfaces/IBookService';
import { inject, injectable } from 'tsyringe';
import { toBookResponse } from './Response/BookResponse';

@injectable()
export class BookController {
    public readonly router: Router;
    private readonly bookService: IBookService;

    constructor(
        @inject('IBookService')bookServiceInjection: IBookService
    ) {
        this.bookService = bookServiceInjection;
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router.get('/', this.getAll);
    }

    private getAll = (_request: Request, response: Response): void => {
        response
            .status(200)
            .json(this.bookService.getAll().map(toBookResponse));
    };
}