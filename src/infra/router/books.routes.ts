import { Router } from "express";
import { BooksController } from "../../app/controllers/books.controller";
import { routerAdapter } from "./routerAdapter";
import { BookUseCase } from "../../app/useCases/books.useCase";
import { BooksRespositoryMongoose } from "../repository/books.repository";

export const BookRoutes = (router: Router) => {
    const booksUseCase = new BookUseCase(new BooksRespositoryMongoose());
    const booksController = new BooksController(booksUseCase);
    router.post('/books', routerAdapter(booksController, 'create'));
    router.get('/books', routerAdapter(booksController, 'find'));
    router.put('/books/:id', routerAdapter(booksController, 'update'));
}