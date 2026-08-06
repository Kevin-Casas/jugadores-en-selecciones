import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

//Formatea respuesta a data: {respuesta}, meta: {timestamp}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  Response<T>
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((response: any) => {
        // Paginated response
        if (response?.items && response?.pagination) {
          return {
            data: response.items,
            meta: {
              timestamp: new Date().toISOString(),
              ...response.pagination,
            },
          };
        }

        // Normal response
        return {
          data: response,
          meta: {
            timestamp: new Date().toISOString(),
          },
        };
      }),
    );
  }
}
