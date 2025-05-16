import 'reflect-metadata';
import { container } from 'tsyringe';
import { IBookService } from './services/interfaces/IBookService';
import { BookService } from './services/BookService';

container.register<IBookService>('IBookService', { useClass: BookService });
