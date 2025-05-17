import { BookResponse } from "../../apiclients/booksapi";

export interface Book {
    id: string;
    title: string;
    description: string;
}

export function toBook(book: BookResponse): Book {
    return {
        id: book.id ?? "",
        title: book.title ?? "",
        description: ""
    };
}