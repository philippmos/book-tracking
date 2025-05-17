import { Author } from "../../../models/Author";

/**
 * @swagger
 * components:
 *   schemas:
 *     AuthorResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier (UUID) of the author.
 *         name:
 *           type: string
 *           description: The name of the author.
 */
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