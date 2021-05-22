import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BookRepositoryDataSource} from '../datasources';
import {Book, BookRelations} from '../models';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.ID,
  BookRelations
> {
  constructor(
    @inject('datasources.BookRepository') dataSource: BookRepositoryDataSource,
  ) {
    super(Book, dataSource);
  }
}
