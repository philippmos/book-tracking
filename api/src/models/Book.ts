import { BookStatus } from "./BookStatus.enum";

export interface Book {
    id: string;
    title: string;
    author: string;
    status: BookStatus;
}