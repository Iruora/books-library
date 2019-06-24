import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './oracle.datasource.json';

export class OracleDataSource extends juggler.DataSource {
  static dataSourceName = 'Oracle';

  constructor(
    @inject('datasources.config.Oracle', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
