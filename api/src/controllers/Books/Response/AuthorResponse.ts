import { Author } from "../../../models/Author";

export interface AuthorResponse {
    id: string;
    name: string;
}

export function toAuthorResponse(author: Author): AuthorResponse {
    return {
        id: author.id,
        name: author.name
    };
}