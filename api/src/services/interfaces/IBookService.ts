import { Book } from "../../models/Book";

export interface IBookService {
    getAll(): Array<Book>;
}