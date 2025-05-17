import { Book } from "../../../models/Book";
import { AuthorResponse, toAuthorResponse } from "./AuthorResponse";
import { BookStatusResponse, toBookStatusResponse } from "./BookStatusResponse.enum";

/**
 * @swagger
 * components:
 *   schemas:
 *     BookResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier (UUUID) for the book.
 *         title:
 *           type: string
 *           description: The title of the book.
 *         author:
 *           $ref: '#/components/schemas/AuthorResponse'
 *         status:
 *           type: number
 *           description: The status of the book (0 - Wishlist 1 - Reading 2 - Read)
 */
export interface BookResponse {
    id: string;
    title: string;
    author: AuthorResponse;
    status: BookStatusResponse;
}

export function toBookResponse(book: Book) : BookResponse {
    return {
        id: book.id,
        title: book.title,
        author: toAuthorResponse(book.author),
        status: toBookStatusResponse(book.status)
    };
}