import { Book } from "../../../models/Book";
import { AuthorResponse, toAuthorResponse } from "./AuthorResponse";
import { BookStatusResponse, toBookStatusResponse } from "./BookStatusResponse.enum";

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