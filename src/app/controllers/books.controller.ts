import { HttpRequest, HttpResponde } from "../../infra/http/httpAdapter";
import { BookDto } from "../dto/bookDto";
import { BookUseCase } from "../useCases/books.useCase";

class BooksController{
    constructor(private readonly booksUseCase: BookUseCase){
        
    }

    async create(HttpRequest: HttpRequest): Promise<HttpResponde>{
        const body: BookDto = HttpRequest.body;
        try{
            const response = await this.booksUseCase.createBook(body);
            if(!body){
                return{
                    status: 400,
                    message: 'Missing body',
                };
            };
            return{
                status: 201,
                message: 'Book created',
                data: response,
            };
        } catch (error: any) {
            return{
                status: 400,
                message: error.message,
            }
        }
    }

    async find(HttpRequest: HttpRequest): Promise<HttpResponde>{
        const dto: BookDto = HttpRequest.query;
        try{
            const response = await this.booksUseCase.findBook(dto);
            return{
                status: 200,
                message: 'Book found',
                data: response,
            };
        } catch (error: any) {
            return{
                status: 400,
                message: error.message,
            }
        }
    }

    async update(HttpRequest: HttpRequest): Promise<HttpResponde>{
        const dto: BookDto = HttpRequest.body;
        const id: string = HttpRequest.params.id

        try{
            const response = await this.booksUseCase.updateBook(dto, id);
            return{
                status: 200,
                message: 'Book found',
                data: response,
            };
        } catch (error: any) {
            return{
                status: 400,
                message: error.message,
            }
        }
    }
}

export { BooksController } 