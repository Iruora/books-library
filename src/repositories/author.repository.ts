import {DefaultCrudRepository} from '@loopback/repository';
import {Author, AuthorRelations} from '../models';
import {OracleDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AuthorRepository extends DefaultCrudRepository<
  Author,
  typeof Author.prototype.id,
  AuthorRelations
> {
  constructor(
    @inject('datasources.Oracle') dataSource: OracleDataSource,
  ) {
    super(Author, dataSource);
  }
}
