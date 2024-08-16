import { BookEntity } from "../../domain/entity/book.entity";
import { BookDto } from "../dto/bookDto";

abstract class BooksRespository{
    abstract create(dto: BookDto): void;
    abstract find(dto: BookDto): Promise<BookEntity | null>;
    abstract update(dto: BookDto, id: string): Promise<BookEntity | null>;
}

export { BooksRespository }