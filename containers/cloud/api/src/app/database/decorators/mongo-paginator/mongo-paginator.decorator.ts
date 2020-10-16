import { BadRequestException, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

const FIRST_PAGE: number = 1;
const DEFAULT_NUMBER_OF_RESULTS: number = 10;

/**
 * Mongo query
 */
export interface MongoPagination {
  filter: {};
  limit: number;
  skip: number;
  sort: [];
}


export const MongoPaginationParamDecorator: () => ParameterDecorator = createParamDecorator(
  (
    { pageName = 'page', perPageName = 'per_page' }: { pageName?: string; perPageName?: string } = {},
    req: Request,
  ): MongoPagination => {
    const page: number = Number(req.query[pageName]) || FIRST_PAGE;
    const limit: number = Number(req.query[perPageName]) || DEFAULT_NUMBER_OF_RESULTS;
    let filter: {};
    let sort: [];

    try {
      filter = req.query.filter !== undefined ? JSON.parse(req.query.filter) : {};
      sort = req.query.sort !== undefined ? JSON.parse(req.query.sort) : [];
    } catch (exception) {
      throw new BadRequestException('The sort or filter parameter cannot be parsed');
    }

    return {
      filter,
      limit,
      skip: (page - 1) * limit,
      sort,
    };
  },
);
// export const MongoPaginator = (...args: string[]) => SetMetadata('mongo-paginator', args);
