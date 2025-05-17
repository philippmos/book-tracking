import { BookStatus } from "../../../models/BookStatus.enum";

export enum BookStatusResponse {
    Wishlist,
    Reading,
    Read
}

export function toBookStatusResponse(status: BookStatus): BookStatusResponse {
    switch (status) {
        case BookStatus.Wishlist:
            return BookStatusResponse.Wishlist;
        case BookStatus.Reading:
            return BookStatusResponse.Reading;
        case BookStatus.Read:
            return BookStatusResponse.Read;
        default:
            throw new Error('Invalid book status');
    }
}