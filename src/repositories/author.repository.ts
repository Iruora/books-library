import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Author, AuthorRelations, Book} from '../models';
import {OracleDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {BookRepository} from './book.repository';

export class AuthorRepository extends DefaultCrudRepository<
  Author,
  typeof Author.prototype.id,
  AuthorRelations
> {

  public readonly books: HasManyRepositoryFactory<Book, typeof Author.prototype.id>;

  constructor(
    @inject('datasources.Oracle') dataSource: OracleDataSource, @repository.getter('BookRepository') protected bookRepositoryGetter: Getter<BookRepository>,
  ) {
    super(Author, dataSource);
    this.books = this.createHasManyRepositoryFactoryFor('books', bookRepositoryGetter,);
  }
}
