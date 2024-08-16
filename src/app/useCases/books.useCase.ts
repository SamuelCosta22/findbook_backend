import { BookDto } from "../dto/bookDto";
import { BooksRespository } from "../repository/books.repository";

class BookUseCase{
    private booksRepository: BooksRespository;
    constructor(booksRepository: BooksRespository){
        this.booksRepository = booksRepository;
    }

    async createBook(dto: BookDto){
        this.booksRepository.create(dto);
    }
    async findBook(dto: BookDto){
        this.booksRepository.find(dto);
    }
    async updateBook(dto: BookDto, id: string){
        this.booksRepository.update(dto, id);
    }
}

export { BookUseCase }