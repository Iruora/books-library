import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Book, BookRelations, Author} from '../models';
import {OracleDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AuthorRepository} from './author.repository';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.id,
  BookRelations
> {

  public readonly author: BelongsToAccessor<Author, typeof Book.prototype.id>;

  constructor(
    @inject('datasources.Oracle') dataSource: OracleDataSource, @repository.getter('AuthorRepository') protected authorRepositoryGetter: Getter<AuthorRepository>,
  ) {
    super(Book, dataSource);
    this.author = this.createBelongsToAccessorFor('author', authorRepositoryGetter,);
  }
}
