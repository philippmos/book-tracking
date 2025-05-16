import { Author } from "./Author";
import { BookStatus } from "./BookStatus.enum";

export interface Book {
    id: string;
    title: string;
    author: Author;
    status: BookStatus;
}