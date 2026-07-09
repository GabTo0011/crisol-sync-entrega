/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Business
 *
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model Expense
 *
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>;
/**
 * Model InvoiceSii
 *
 */
export type InvoiceSii = $Result.DefaultSelection<Prisma.$InvoiceSiiPayload>;
/**
 * Model Notification
 *
 */
export type Notification =
  $Result.DefaultSelection<Prisma.$NotificationPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const ExpenseStatus: {
    REGISTERED: 'REGISTERED';
    PENDING_REVIEW: 'PENDING_REVIEW';
    CANCELLED: 'CANCELLED';
  };

  export type ExpenseStatus =
    (typeof ExpenseStatus)[keyof typeof ExpenseStatus];

  export const ExpenseSource: {
    MANUAL: 'MANUAL';
    OCR: 'OCR';
    OFFLINE_SYNC: 'OFFLINE_SYNC';
  };

  export type ExpenseSource =
    (typeof ExpenseSource)[keyof typeof ExpenseSource];

  export const InvoiceStatus: {
    PENDING_ACCEPTANCE: 'PENDING_ACCEPTANCE';
    ACCEPTED: 'ACCEPTED';
    REJECTED: 'REJECTED';
    AUTO_ACCEPTED: 'AUTO_ACCEPTED';
  };

  export type InvoiceStatus =
    (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
}

export type ExpenseStatus = $Enums.ExpenseStatus;

export const ExpenseStatus: typeof $Enums.ExpenseStatus;

export type ExpenseSource = $Enums.ExpenseSource;

export const ExpenseSource: typeof $Enums.ExpenseSource;

export type InvoiceStatus = $Enums.InvoiceStatus;

export const InvoiceStatus: typeof $Enums.InvoiceStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Businesses
 * const businesses = await prisma.business.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Expenses
   * const expenses = await prisma.expense.findMany()
   * ```
   */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceSii`: Exposes CRUD operations for the **InvoiceSii** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more InvoiceSiis
   * const invoiceSiis = await prisma.invoiceSii.findMany()
   * ```
   */
  get invoiceSii(): Prisma.InvoiceSiiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
   * ```
   */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Business: 'Business';
    User: 'User';
    Category: 'Category';
    Expense: 'Expense';
    InvoiceSii: 'InvoiceSii';
    Notification: 'Notification';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'business'
        | 'user'
        | 'category'
        | 'expense'
        | 'invoiceSii'
        | 'notification';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>;
        fields: Prisma.BusinessFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>;
          };
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>;
          };
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[];
          };
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>;
          };
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[];
          };
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>;
          };
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>;
          };
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[];
          };
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>;
          };
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness>;
          };
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BusinessGroupByOutputType>[];
          };
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>;
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>;
        fields: Prisma.ExpenseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
          };
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
          };
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[];
          };
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
          };
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[];
          };
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
          };
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
          };
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[];
          };
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>;
          };
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExpense>;
          };
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseGroupByOutputType>[];
          };
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>;
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number;
          };
        };
      };
      InvoiceSii: {
        payload: Prisma.$InvoiceSiiPayload<ExtArgs>;
        fields: Prisma.InvoiceSiiFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InvoiceSiiFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InvoiceSiiFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>;
          };
          findFirst: {
            args: Prisma.InvoiceSiiFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InvoiceSiiFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>;
          };
          findMany: {
            args: Prisma.InvoiceSiiFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>[];
          };
          create: {
            args: Prisma.InvoiceSiiCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>;
          };
          createMany: {
            args: Prisma.InvoiceSiiCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InvoiceSiiCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>[];
          };
          delete: {
            args: Prisma.InvoiceSiiDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>;
          };
          update: {
            args: Prisma.InvoiceSiiUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>;
          };
          deleteMany: {
            args: Prisma.InvoiceSiiDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InvoiceSiiUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InvoiceSiiUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>[];
          };
          upsert: {
            args: Prisma.InvoiceSiiUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoiceSiiPayload>;
          };
          aggregate: {
            args: Prisma.InvoiceSiiAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInvoiceSii>;
          };
          groupBy: {
            args: Prisma.InvoiceSiiGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InvoiceSiiGroupByOutputType>[];
          };
          count: {
            args: Prisma.InvoiceSiiCountArgs<ExtArgs>;
            result:
              $Utils.Optional<InvoiceSiiCountAggregateOutputType> | number;
          };
        };
      };
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>;
        fields: Prisma.NotificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[];
          };
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>;
          };
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotification>;
          };
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NotificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>;
            result:
              $Utils.Optional<NotificationCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    business?: BusinessOmit;
    user?: UserOmit;
    category?: CategoryOmit;
    expense?: ExpenseOmit;
    invoiceSii?: InvoiceSiiOmit;
    notification?: NotificationOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    users: number;
    categories: number;
    expenses: number;
    invoices: number;
    notifications: number;
  };

  export type BusinessCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | BusinessCountOutputTypeCountUsersArgs;
    categories?: boolean | BusinessCountOutputTypeCountCategoriesArgs;
    expenses?: boolean | BusinessCountOutputTypeCountExpensesArgs;
    invoices?: boolean | BusinessCountOutputTypeCountInvoicesArgs;
    notifications?: boolean | BusinessCountOutputTypeCountNotificationsArgs;
  };

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountExpensesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExpenseWhereInput;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountInvoicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvoiceSiiWhereInput;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountNotificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    expenses: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    expenses?: boolean | CategoryCountOutputTypeCountExpensesArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountExpensesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExpenseWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  export type BusinessMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    rut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BusinessMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    rut: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BusinessCountAggregateOutputType = {
    id: number;
    name: number;
    rut: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type BusinessMinAggregateInputType = {
    id?: true;
    name?: true;
    rut?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BusinessMaxAggregateInputType = {
    id?: true;
    name?: true;
    rut?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BusinessCountAggregateInputType = {
    id?: true;
    name?: true;
    rut?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type BusinessAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Businesses to fetch.
     */
    orderBy?:
      BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Businesses
     **/
    _count?: true | BusinessCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BusinessMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BusinessMaxAggregateInputType;
  };

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>;
  };

  export type BusinessGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BusinessWhereInput;
    orderBy?:
      | BusinessOrderByWithAggregationInput
      | BusinessOrderByWithAggregationInput[];
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum;
    having?: BusinessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessCountAggregateInputType | true;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
  };

  export type BusinessGroupByOutputType = {
    id: string;
    name: string;
    rut: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BusinessGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BusinessGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>;
        }
      >
    >;

  export type BusinessSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      rut?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      users?: boolean | Business$usersArgs<ExtArgs>;
      categories?: boolean | Business$categoriesArgs<ExtArgs>;
      expenses?: boolean | Business$expensesArgs<ExtArgs>;
      invoices?: boolean | Business$invoicesArgs<ExtArgs>;
      notifications?: boolean | Business$notificationsArgs<ExtArgs>;
      _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['business']
  >;

  export type BusinessSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      rut?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['business']
  >;

  export type BusinessSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      rut?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['business']
  >;

  export type BusinessSelectScalar = {
    id?: boolean;
    name?: boolean;
    rut?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type BusinessOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'rut' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['business']
  >;
  export type BusinessInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Business$usersArgs<ExtArgs>;
    categories?: boolean | Business$categoriesArgs<ExtArgs>;
    expenses?: boolean | Business$expensesArgs<ExtArgs>;
    invoices?: boolean | Business$invoicesArgs<ExtArgs>;
    notifications?: boolean | Business$notificationsArgs<ExtArgs>;
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type BusinessIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type BusinessIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $BusinessPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Business';
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[];
      categories: Prisma.$CategoryPayload<ExtArgs>[];
      expenses: Prisma.$ExpensePayload<ExtArgs>[];
      invoices: Prisma.$InvoiceSiiPayload<ExtArgs>[];
      notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        rut: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['business']
    >;
    composites: {};
  };

  type BusinessGetPayload<
    S extends boolean | null | undefined | BusinessDefaultArgs,
  > = $Result.GetResult<Prisma.$BusinessPayload, S>;

  type BusinessCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BusinessCountAggregateInputType | true;
  };

  export interface BusinessDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Business'];
      meta: { name: 'Business' };
    };
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(
      args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(
      args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     *
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BusinessFindManyArgs>(
      args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     *
     */
    create<T extends BusinessCreateArgs>(
      args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BusinessCreateManyArgs>(
      args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     *
     */
    delete<T extends BusinessDeleteArgs>(
      args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BusinessUpdateArgs>(
      args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BusinessDeleteManyArgs>(
      args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BusinessUpdateManyArgs>(
      args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(
      args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      $Result.GetResult<
        Prisma.$BusinessPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
     **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BusinessAggregateArgs>(
      args: Subset<T, BusinessAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusinessAggregateType<T>>;

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetBusinessGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Business model
     */
    readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    users<T extends Business$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Business$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    categories<T extends Business$categoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Business$categoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    expenses<T extends Business$expensesArgs<ExtArgs> = {}>(
      args?: Subset<T, Business$expensesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ExpensePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    invoices<T extends Business$invoicesArgs<ExtArgs> = {}>(
      args?: Subset<T, Business$invoicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InvoiceSiiPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    notifications<T extends Business$notificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Business$notificationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<'Business', 'String'>;
    readonly name: FieldRef<'Business', 'String'>;
    readonly rut: FieldRef<'Business', 'String'>;
    readonly createdAt: FieldRef<'Business', 'DateTime'>;
    readonly updatedAt: FieldRef<'Business', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput;
  };

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput;
  };

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Businesses to fetch.
     */
    orderBy?:
      BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Businesses to fetch.
     */
    orderBy?:
      BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Businesses to fetch.
     */
    orderBy?:
      BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * Business create
   */
  export type BusinessCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>;
  };

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Business update
   */
  export type BusinessUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>;
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput;
  };

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<
      BusinessUpdateManyMutationInput,
      BusinessUncheckedUpdateManyInput
    >;
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput;
    /**
     * Limit how many Businesses to update.
     */
    limit?: number;
  };

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * The data used to update Businesses.
     */
    data: XOR<
      BusinessUpdateManyMutationInput,
      BusinessUncheckedUpdateManyInput
    >;
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput;
    /**
     * Limit how many Businesses to update.
     */
    limit?: number;
  };

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput;
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>;
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>;
  };

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput;
  };

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput;
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number;
  };

  /**
   * Business.users
   */
  export type Business$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Business.categories
   */
  export type Business$categoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    where?: CategoryWhereInput;
    orderBy?:
      CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    cursor?: CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Business.expenses
   */
  export type Business$expensesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    where?: ExpenseWhereInput;
    orderBy?:
      ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[];
    cursor?: ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * Business.invoices
   */
  export type Business$invoicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    where?: InvoiceSiiWhereInput;
    orderBy?:
      InvoiceSiiOrderByWithRelationInput | InvoiceSiiOrderByWithRelationInput[];
    cursor?: InvoiceSiiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvoiceSiiScalarFieldEnum | InvoiceSiiScalarFieldEnum[];
  };

  /**
   * Business.notifications
   */
  export type Business$notificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    cursor?: NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    email: string | null;
    role: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    email: string | null;
    role: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    businessId: number;
    name: number;
    email: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    email?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    email?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    email?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    businessId: string;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      name?: boolean;
      email?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      name?: boolean;
      email?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      name?: boolean;
      email?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    email?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'businessId' | 'name' | 'email' | 'role' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        businessId: string;
        name: string;
        email: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BusinessDefaultArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      | $Result.GetResult<
          Prisma.$BusinessPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly businessId: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    businessId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    businessId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: string;
    businessId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
      expenses?: boolean | Category$expensesArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    businessId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'businessId' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['category']
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
    expenses?: boolean | Category$expensesArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Category';
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>;
      expenses: Prisma.$ExpensePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        businessId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BusinessDefaultArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      | $Result.GetResult<
          Prisma.$BusinessPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    expenses<T extends Category$expensesArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$expensesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ExpensePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'String'>;
    readonly businessId: FieldRef<'Category', 'String'>;
    readonly name: FieldRef<'Category', 'String'>;
    readonly createdAt: FieldRef<'Category', 'DateTime'>;
    readonly updatedAt: FieldRef<'Category', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.expenses
   */
  export type Category$expensesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    where?: ExpenseWhereInput;
    orderBy?:
      ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[];
    cursor?: ExpenseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  export type ExpenseAvgAggregateOutputType = {
    amountTotal: number | null;
    amountNet: number | null;
    amountVat: number | null;
  };

  export type ExpenseSumAggregateOutputType = {
    amountTotal: number | null;
    amountNet: number | null;
    amountVat: number | null;
  };

  export type ExpenseMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    categoryId: string | null;
    amountTotal: number | null;
    amountNet: number | null;
    amountVat: number | null;
    issueDate: Date | null;
    supplierRut: string | null;
    supplierName: string | null;
    description: string | null;
    documentUrl: string | null;
    isManual: boolean | null;
    source: $Enums.ExpenseSource | null;
    status: $Enums.ExpenseStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ExpenseMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    categoryId: string | null;
    amountTotal: number | null;
    amountNet: number | null;
    amountVat: number | null;
    issueDate: Date | null;
    supplierRut: string | null;
    supplierName: string | null;
    description: string | null;
    documentUrl: string | null;
    isManual: boolean | null;
    source: $Enums.ExpenseSource | null;
    status: $Enums.ExpenseStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ExpenseCountAggregateOutputType = {
    id: number;
    businessId: number;
    categoryId: number;
    amountTotal: number;
    amountNet: number;
    amountVat: number;
    issueDate: number;
    supplierRut: number;
    supplierName: number;
    description: number;
    documentUrl: number;
    isManual: number;
    source: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ExpenseAvgAggregateInputType = {
    amountTotal?: true;
    amountNet?: true;
    amountVat?: true;
  };

  export type ExpenseSumAggregateInputType = {
    amountTotal?: true;
    amountNet?: true;
    amountVat?: true;
  };

  export type ExpenseMinAggregateInputType = {
    id?: true;
    businessId?: true;
    categoryId?: true;
    amountTotal?: true;
    amountNet?: true;
    amountVat?: true;
    issueDate?: true;
    supplierRut?: true;
    supplierName?: true;
    description?: true;
    documentUrl?: true;
    isManual?: true;
    source?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ExpenseMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    categoryId?: true;
    amountTotal?: true;
    amountNet?: true;
    amountVat?: true;
    issueDate?: true;
    supplierRut?: true;
    supplierName?: true;
    description?: true;
    documentUrl?: true;
    isManual?: true;
    source?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ExpenseCountAggregateInputType = {
    id?: true;
    businessId?: true;
    categoryId?: true;
    amountTotal?: true;
    amountNet?: true;
    amountVat?: true;
    issueDate?: true;
    supplierRut?: true;
    supplierName?: true;
    description?: true;
    documentUrl?: true;
    isManual?: true;
    source?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ExpenseAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?:
      ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Expenses
     **/
    _count?: true | ExpenseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ExpenseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ExpenseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExpenseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExpenseMaxAggregateInputType;
  };

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
    [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>;
  };

  export type ExpenseGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExpenseWhereInput;
    orderBy?:
      ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[];
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum;
    having?: ExpenseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExpenseCountAggregateInputType | true;
    _avg?: ExpenseAvgAggregateInputType;
    _sum?: ExpenseSumAggregateInputType;
    _min?: ExpenseMinAggregateInputType;
    _max?: ExpenseMaxAggregateInputType;
  };

  export type ExpenseGroupByOutputType = {
    id: string;
    businessId: string;
    categoryId: string | null;
    amountTotal: number;
    amountNet: number | null;
    amountVat: number | null;
    issueDate: Date;
    supplierRut: string | null;
    supplierName: string | null;
    description: string | null;
    documentUrl: string | null;
    isManual: boolean;
    source: $Enums.ExpenseSource;
    status: $Enums.ExpenseStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ExpenseCountAggregateOutputType | null;
    _avg: ExpenseAvgAggregateOutputType | null;
    _sum: ExpenseSumAggregateOutputType | null;
    _min: ExpenseMinAggregateOutputType | null;
    _max: ExpenseMaxAggregateOutputType | null;
  };

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ExpenseGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ExpenseGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>;
        }
      >
    >;

  export type ExpenseSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      categoryId?: boolean;
      amountTotal?: boolean;
      amountNet?: boolean;
      amountVat?: boolean;
      issueDate?: boolean;
      supplierRut?: boolean;
      supplierName?: boolean;
      description?: boolean;
      documentUrl?: boolean;
      isManual?: boolean;
      source?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
      category?: boolean | Expense$categoryArgs<ExtArgs>;
    },
    ExtArgs['result']['expense']
  >;

  export type ExpenseSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      categoryId?: boolean;
      amountTotal?: boolean;
      amountNet?: boolean;
      amountVat?: boolean;
      issueDate?: boolean;
      supplierRut?: boolean;
      supplierName?: boolean;
      description?: boolean;
      documentUrl?: boolean;
      isManual?: boolean;
      source?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
      category?: boolean | Expense$categoryArgs<ExtArgs>;
    },
    ExtArgs['result']['expense']
  >;

  export type ExpenseSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      categoryId?: boolean;
      amountTotal?: boolean;
      amountNet?: boolean;
      amountVat?: boolean;
      issueDate?: boolean;
      supplierRut?: boolean;
      supplierName?: boolean;
      description?: boolean;
      documentUrl?: boolean;
      isManual?: boolean;
      source?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
      category?: boolean | Expense$categoryArgs<ExtArgs>;
    },
    ExtArgs['result']['expense']
  >;

  export type ExpenseSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    categoryId?: boolean;
    amountTotal?: boolean;
    amountNet?: boolean;
    amountVat?: boolean;
    issueDate?: boolean;
    supplierRut?: boolean;
    supplierName?: boolean;
    description?: boolean;
    documentUrl?: boolean;
    isManual?: boolean;
    source?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ExpenseOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'businessId'
    | 'categoryId'
    | 'amountTotal'
    | 'amountNet'
    | 'amountVat'
    | 'issueDate'
    | 'supplierRut'
    | 'supplierName'
    | 'description'
    | 'documentUrl'
    | 'isManual'
    | 'source'
    | 'status'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['expense']
  >;
  export type ExpenseInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
    category?: boolean | Expense$categoryArgs<ExtArgs>;
  };
  export type ExpenseIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
    category?: boolean | Expense$categoryArgs<ExtArgs>;
  };
  export type ExpenseIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
    category?: boolean | Expense$categoryArgs<ExtArgs>;
  };

  export type $ExpensePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Expense';
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>;
      category: Prisma.$CategoryPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        businessId: string;
        categoryId: string | null;
        amountTotal: number;
        amountNet: number | null;
        amountVat: number | null;
        issueDate: Date;
        supplierRut: string | null;
        supplierName: string | null;
        description: string | null;
        documentUrl: string | null;
        isManual: boolean;
        source: $Enums.ExpenseSource;
        status: $Enums.ExpenseStatus;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['expense']
    >;
    composites: {};
  };

  type ExpenseGetPayload<
    S extends boolean | null | undefined | ExpenseDefaultArgs,
  > = $Result.GetResult<Prisma.$ExpensePayload, S>;

  type ExpenseCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExpenseCountAggregateInputType | true;
  };

  export interface ExpenseDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Expense'];
      meta: { name: 'Expense' };
    };
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(
      args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(
      args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     *
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ExpenseFindManyArgs>(
      args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     *
     */
    create<T extends ExpenseCreateArgs>(
      args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ExpenseCreateManyArgs>(
      args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     *
     */
    delete<T extends ExpenseDeleteArgs>(
      args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ExpenseUpdateArgs>(
      args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(
      args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ExpenseUpdateManyArgs>(
      args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(
      args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>,
    ): Prisma__ExpenseClient<
      $Result.GetResult<
        Prisma.$ExpensePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
     **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ExpenseAggregateArgs>(
      args: Subset<T, ExpenseAggregateArgs>,
    ): Prisma.PrismaPromise<GetExpenseAggregateType<T>>;

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetExpenseGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Expense model
     */
    readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BusinessDefaultArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      | $Result.GetResult<
          Prisma.$BusinessPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    category<T extends Expense$categoryArgs<ExtArgs> = {}>(
      args?: Subset<T, Expense$categoryArgs<ExtArgs>>,
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<'Expense', 'String'>;
    readonly businessId: FieldRef<'Expense', 'String'>;
    readonly categoryId: FieldRef<'Expense', 'String'>;
    readonly amountTotal: FieldRef<'Expense', 'Int'>;
    readonly amountNet: FieldRef<'Expense', 'Int'>;
    readonly amountVat: FieldRef<'Expense', 'Int'>;
    readonly issueDate: FieldRef<'Expense', 'DateTime'>;
    readonly supplierRut: FieldRef<'Expense', 'String'>;
    readonly supplierName: FieldRef<'Expense', 'String'>;
    readonly description: FieldRef<'Expense', 'String'>;
    readonly documentUrl: FieldRef<'Expense', 'String'>;
    readonly isManual: FieldRef<'Expense', 'Boolean'>;
    readonly source: FieldRef<'Expense', 'ExpenseSource'>;
    readonly status: FieldRef<'Expense', 'ExpenseStatus'>;
    readonly createdAt: FieldRef<'Expense', 'DateTime'>;
    readonly updatedAt: FieldRef<'Expense', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput;
  };

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput;
  };

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?:
      ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?:
      ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Expenses to fetch.
     */
    orderBy?:
      ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Expenses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[];
  };

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>;
  };

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>;
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput;
  };

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>;
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput;
    /**
     * Limit how many Expenses to update.
     */
    limit?: number;
  };

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>;
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput;
    /**
     * Limit how many Expenses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput;
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>;
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>;
  };

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput;
  };

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput;
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number;
  };

  /**
   * Expense.category
   */
  export type Expense$categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    where?: CategoryWhereInput;
  };

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null;
  };

  /**
   * Model InvoiceSii
   */

  export type AggregateInvoiceSii = {
    _count: InvoiceSiiCountAggregateOutputType | null;
    _avg: InvoiceSiiAvgAggregateOutputType | null;
    _sum: InvoiceSiiSumAggregateOutputType | null;
    _min: InvoiceSiiMinAggregateOutputType | null;
    _max: InvoiceSiiMaxAggregateOutputType | null;
  };

  export type InvoiceSiiAvgAggregateOutputType = {
    amountNet: number | null;
    amountVat: number | null;
    amountTotal: number | null;
  };

  export type InvoiceSiiSumAggregateOutputType = {
    amountNet: number | null;
    amountVat: number | null;
    amountTotal: number | null;
  };

  export type InvoiceSiiMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    folio: string | null;
    supplierRut: string | null;
    supplierName: string | null;
    amountNet: number | null;
    amountVat: number | null;
    amountTotal: number | null;
    receivedAt: Date | null;
    status: $Enums.InvoiceStatus | null;
    actionReason: string | null;
    actionAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InvoiceSiiMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    folio: string | null;
    supplierRut: string | null;
    supplierName: string | null;
    amountNet: number | null;
    amountVat: number | null;
    amountTotal: number | null;
    receivedAt: Date | null;
    status: $Enums.InvoiceStatus | null;
    actionReason: string | null;
    actionAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InvoiceSiiCountAggregateOutputType = {
    id: number;
    businessId: number;
    folio: number;
    supplierRut: number;
    supplierName: number;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: number;
    status: number;
    actionReason: number;
    actionAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type InvoiceSiiAvgAggregateInputType = {
    amountNet?: true;
    amountVat?: true;
    amountTotal?: true;
  };

  export type InvoiceSiiSumAggregateInputType = {
    amountNet?: true;
    amountVat?: true;
    amountTotal?: true;
  };

  export type InvoiceSiiMinAggregateInputType = {
    id?: true;
    businessId?: true;
    folio?: true;
    supplierRut?: true;
    supplierName?: true;
    amountNet?: true;
    amountVat?: true;
    amountTotal?: true;
    receivedAt?: true;
    status?: true;
    actionReason?: true;
    actionAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InvoiceSiiMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    folio?: true;
    supplierRut?: true;
    supplierName?: true;
    amountNet?: true;
    amountVat?: true;
    amountTotal?: true;
    receivedAt?: true;
    status?: true;
    actionReason?: true;
    actionAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InvoiceSiiCountAggregateInputType = {
    id?: true;
    businessId?: true;
    folio?: true;
    supplierRut?: true;
    supplierName?: true;
    amountNet?: true;
    amountVat?: true;
    amountTotal?: true;
    receivedAt?: true;
    status?: true;
    actionReason?: true;
    actionAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type InvoiceSiiAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which InvoiceSii to aggregate.
     */
    where?: InvoiceSiiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceSiis to fetch.
     */
    orderBy?:
      InvoiceSiiOrderByWithRelationInput | InvoiceSiiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InvoiceSiiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceSiis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceSiis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned InvoiceSiis
     **/
    _count?: true | InvoiceSiiCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InvoiceSiiAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InvoiceSiiSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InvoiceSiiMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InvoiceSiiMaxAggregateInputType;
  };

  export type GetInvoiceSiiAggregateType<T extends InvoiceSiiAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoiceSii]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceSii[P]>
      : GetScalarType<T[P], AggregateInvoiceSii[P]>;
  };

  export type InvoiceSiiGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvoiceSiiWhereInput;
    orderBy?:
      | InvoiceSiiOrderByWithAggregationInput
      | InvoiceSiiOrderByWithAggregationInput[];
    by: InvoiceSiiScalarFieldEnum[] | InvoiceSiiScalarFieldEnum;
    having?: InvoiceSiiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceSiiCountAggregateInputType | true;
    _avg?: InvoiceSiiAvgAggregateInputType;
    _sum?: InvoiceSiiSumAggregateInputType;
    _min?: InvoiceSiiMinAggregateInputType;
    _max?: InvoiceSiiMaxAggregateInputType;
  };

  export type InvoiceSiiGroupByOutputType = {
    id: string;
    businessId: string;
    folio: string;
    supplierRut: string;
    supplierName: string;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: Date;
    status: $Enums.InvoiceStatus;
    actionReason: string | null;
    actionAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: InvoiceSiiCountAggregateOutputType | null;
    _avg: InvoiceSiiAvgAggregateOutputType | null;
    _sum: InvoiceSiiSumAggregateOutputType | null;
    _min: InvoiceSiiMinAggregateOutputType | null;
    _max: InvoiceSiiMaxAggregateOutputType | null;
  };

  type GetInvoiceSiiGroupByPayload<T extends InvoiceSiiGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InvoiceSiiGroupByOutputType, T['by']> & {
          [P in keyof T & keyof InvoiceSiiGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceSiiGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceSiiGroupByOutputType[P]>;
        }
      >
    >;

  export type InvoiceSiiSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      folio?: boolean;
      supplierRut?: boolean;
      supplierName?: boolean;
      amountNet?: boolean;
      amountVat?: boolean;
      amountTotal?: boolean;
      receivedAt?: boolean;
      status?: boolean;
      actionReason?: boolean;
      actionAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invoiceSii']
  >;

  export type InvoiceSiiSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      folio?: boolean;
      supplierRut?: boolean;
      supplierName?: boolean;
      amountNet?: boolean;
      amountVat?: boolean;
      amountTotal?: boolean;
      receivedAt?: boolean;
      status?: boolean;
      actionReason?: boolean;
      actionAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invoiceSii']
  >;

  export type InvoiceSiiSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      folio?: boolean;
      supplierRut?: boolean;
      supplierName?: boolean;
      amountNet?: boolean;
      amountVat?: boolean;
      amountTotal?: boolean;
      receivedAt?: boolean;
      status?: boolean;
      actionReason?: boolean;
      actionAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invoiceSii']
  >;

  export type InvoiceSiiSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    folio?: boolean;
    supplierRut?: boolean;
    supplierName?: boolean;
    amountNet?: boolean;
    amountVat?: boolean;
    amountTotal?: boolean;
    receivedAt?: boolean;
    status?: boolean;
    actionReason?: boolean;
    actionAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type InvoiceSiiOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'businessId'
    | 'folio'
    | 'supplierRut'
    | 'supplierName'
    | 'amountNet'
    | 'amountVat'
    | 'amountTotal'
    | 'receivedAt'
    | 'status'
    | 'actionReason'
    | 'actionAt'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['invoiceSii']
  >;
  export type InvoiceSiiInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };
  export type InvoiceSiiIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };
  export type InvoiceSiiIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };

  export type $InvoiceSiiPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'InvoiceSii';
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        businessId: string;
        folio: string;
        supplierRut: string;
        supplierName: string;
        amountNet: number;
        amountVat: number;
        amountTotal: number;
        receivedAt: Date;
        status: $Enums.InvoiceStatus;
        actionReason: string | null;
        actionAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['invoiceSii']
    >;
    composites: {};
  };

  type InvoiceSiiGetPayload<
    S extends boolean | null | undefined | InvoiceSiiDefaultArgs,
  > = $Result.GetResult<Prisma.$InvoiceSiiPayload, S>;

  type InvoiceSiiCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InvoiceSiiFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: InvoiceSiiCountAggregateInputType | true;
  };

  export interface InvoiceSiiDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['InvoiceSii'];
      meta: { name: 'InvoiceSii' };
    };
    /**
     * Find zero or one InvoiceSii that matches the filter.
     * @param {InvoiceSiiFindUniqueArgs} args - Arguments to find a InvoiceSii
     * @example
     * // Get one InvoiceSii
     * const invoiceSii = await prisma.invoiceSii.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceSiiFindUniqueArgs>(
      args: SelectSubset<T, InvoiceSiiFindUniqueArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one InvoiceSii that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceSiiFindUniqueOrThrowArgs} args - Arguments to find a InvoiceSii
     * @example
     * // Get one InvoiceSii
     * const invoiceSii = await prisma.invoiceSii.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceSiiFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InvoiceSiiFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first InvoiceSii that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceSiiFindFirstArgs} args - Arguments to find a InvoiceSii
     * @example
     * // Get one InvoiceSii
     * const invoiceSii = await prisma.invoiceSii.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceSiiFindFirstArgs>(
      args?: SelectSubset<T, InvoiceSiiFindFirstArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first InvoiceSii that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceSiiFindFirstOrThrowArgs} args - Arguments to find a InvoiceSii
     * @example
     * // Get one InvoiceSii
     * const invoiceSii = await prisma.invoiceSii.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceSiiFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvoiceSiiFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more InvoiceSiis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceSiiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceSiis
     * const invoiceSiis = await prisma.invoiceSii.findMany()
     *
     * // Get first 10 InvoiceSiis
     * const invoiceSiis = await prisma.invoiceSii.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceSiiWithIdOnly = await prisma.invoiceSii.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvoiceSiiFindManyArgs>(
      args?: SelectSubset<T, InvoiceSiiFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a InvoiceSii.
     * @param {InvoiceSiiCreateArgs} args - Arguments to create a InvoiceSii.
     * @example
     * // Create one InvoiceSii
     * const InvoiceSii = await prisma.invoiceSii.create({
     *   data: {
     *     // ... data to create a InvoiceSii
     *   }
     * })
     *
     */
    create<T extends InvoiceSiiCreateArgs>(
      args: SelectSubset<T, InvoiceSiiCreateArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many InvoiceSiis.
     * @param {InvoiceSiiCreateManyArgs} args - Arguments to create many InvoiceSiis.
     * @example
     * // Create many InvoiceSiis
     * const invoiceSii = await prisma.invoiceSii.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvoiceSiiCreateManyArgs>(
      args?: SelectSubset<T, InvoiceSiiCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many InvoiceSiis and returns the data saved in the database.
     * @param {InvoiceSiiCreateManyAndReturnArgs} args - Arguments to create many InvoiceSiis.
     * @example
     * // Create many InvoiceSiis
     * const invoiceSii = await prisma.invoiceSii.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many InvoiceSiis and only return the `id`
     * const invoiceSiiWithIdOnly = await prisma.invoiceSii.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InvoiceSiiCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InvoiceSiiCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a InvoiceSii.
     * @param {InvoiceSiiDeleteArgs} args - Arguments to delete one InvoiceSii.
     * @example
     * // Delete one InvoiceSii
     * const InvoiceSii = await prisma.invoiceSii.delete({
     *   where: {
     *     // ... filter to delete one InvoiceSii
     *   }
     * })
     *
     */
    delete<T extends InvoiceSiiDeleteArgs>(
      args: SelectSubset<T, InvoiceSiiDeleteArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one InvoiceSii.
     * @param {InvoiceSiiUpdateArgs} args - Arguments to update one InvoiceSii.
     * @example
     * // Update one InvoiceSii
     * const invoiceSii = await prisma.invoiceSii.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvoiceSiiUpdateArgs>(
      args: SelectSubset<T, InvoiceSiiUpdateArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more InvoiceSiis.
     * @param {InvoiceSiiDeleteManyArgs} args - Arguments to filter InvoiceSiis to delete.
     * @example
     * // Delete a few InvoiceSiis
     * const { count } = await prisma.invoiceSii.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvoiceSiiDeleteManyArgs>(
      args?: SelectSubset<T, InvoiceSiiDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more InvoiceSiis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceSiiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceSiis
     * const invoiceSii = await prisma.invoiceSii.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvoiceSiiUpdateManyArgs>(
      args: SelectSubset<T, InvoiceSiiUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more InvoiceSiis and returns the data updated in the database.
     * @param {InvoiceSiiUpdateManyAndReturnArgs} args - Arguments to update many InvoiceSiis.
     * @example
     * // Update many InvoiceSiis
     * const invoiceSii = await prisma.invoiceSii.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more InvoiceSiis and only return the `id`
     * const invoiceSiiWithIdOnly = await prisma.invoiceSii.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InvoiceSiiUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InvoiceSiiUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one InvoiceSii.
     * @param {InvoiceSiiUpsertArgs} args - Arguments to update or create a InvoiceSii.
     * @example
     * // Update or create a InvoiceSii
     * const invoiceSii = await prisma.invoiceSii.upsert({
     *   create: {
     *     // ... data to create a InvoiceSii
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceSii we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceSiiUpsertArgs>(
      args: SelectSubset<T, InvoiceSiiUpsertArgs<ExtArgs>>,
    ): Prisma__InvoiceSiiClient<
      $Result.GetResult<
        Prisma.$InvoiceSiiPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of InvoiceSiis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceSiiCountArgs} args - Arguments to filter InvoiceSiis to count.
     * @example
     * // Count the number of InvoiceSiis
     * const count = await prisma.invoiceSii.count({
     *   where: {
     *     // ... the filter for the InvoiceSiis we want to count
     *   }
     * })
     **/
    count<T extends InvoiceSiiCountArgs>(
      args?: Subset<T, InvoiceSiiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceSiiCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a InvoiceSii.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceSiiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InvoiceSiiAggregateArgs>(
      args: Subset<T, InvoiceSiiAggregateArgs>,
    ): Prisma.PrismaPromise<GetInvoiceSiiAggregateType<T>>;

    /**
     * Group by InvoiceSii.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceSiiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends InvoiceSiiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: InvoiceSiiGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceSiiGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, InvoiceSiiGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetInvoiceSiiGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the InvoiceSii model
     */
    readonly fields: InvoiceSiiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceSii.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceSiiClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BusinessDefaultArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      | $Result.GetResult<
          Prisma.$BusinessPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the InvoiceSii model
   */
  interface InvoiceSiiFieldRefs {
    readonly id: FieldRef<'InvoiceSii', 'String'>;
    readonly businessId: FieldRef<'InvoiceSii', 'String'>;
    readonly folio: FieldRef<'InvoiceSii', 'String'>;
    readonly supplierRut: FieldRef<'InvoiceSii', 'String'>;
    readonly supplierName: FieldRef<'InvoiceSii', 'String'>;
    readonly amountNet: FieldRef<'InvoiceSii', 'Int'>;
    readonly amountVat: FieldRef<'InvoiceSii', 'Int'>;
    readonly amountTotal: FieldRef<'InvoiceSii', 'Int'>;
    readonly receivedAt: FieldRef<'InvoiceSii', 'DateTime'>;
    readonly status: FieldRef<'InvoiceSii', 'InvoiceStatus'>;
    readonly actionReason: FieldRef<'InvoiceSii', 'String'>;
    readonly actionAt: FieldRef<'InvoiceSii', 'DateTime'>;
    readonly createdAt: FieldRef<'InvoiceSii', 'DateTime'>;
    readonly updatedAt: FieldRef<'InvoiceSii', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * InvoiceSii findUnique
   */
  export type InvoiceSiiFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * Filter, which InvoiceSii to fetch.
     */
    where: InvoiceSiiWhereUniqueInput;
  };

  /**
   * InvoiceSii findUniqueOrThrow
   */
  export type InvoiceSiiFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * Filter, which InvoiceSii to fetch.
     */
    where: InvoiceSiiWhereUniqueInput;
  };

  /**
   * InvoiceSii findFirst
   */
  export type InvoiceSiiFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * Filter, which InvoiceSii to fetch.
     */
    where?: InvoiceSiiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceSiis to fetch.
     */
    orderBy?:
      InvoiceSiiOrderByWithRelationInput | InvoiceSiiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InvoiceSiis.
     */
    cursor?: InvoiceSiiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceSiis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceSiis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InvoiceSiis.
     */
    distinct?: InvoiceSiiScalarFieldEnum | InvoiceSiiScalarFieldEnum[];
  };

  /**
   * InvoiceSii findFirstOrThrow
   */
  export type InvoiceSiiFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * Filter, which InvoiceSii to fetch.
     */
    where?: InvoiceSiiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceSiis to fetch.
     */
    orderBy?:
      InvoiceSiiOrderByWithRelationInput | InvoiceSiiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for InvoiceSiis.
     */
    cursor?: InvoiceSiiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceSiis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceSiis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InvoiceSiis.
     */
    distinct?: InvoiceSiiScalarFieldEnum | InvoiceSiiScalarFieldEnum[];
  };

  /**
   * InvoiceSii findMany
   */
  export type InvoiceSiiFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * Filter, which InvoiceSiis to fetch.
     */
    where?: InvoiceSiiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of InvoiceSiis to fetch.
     */
    orderBy?:
      InvoiceSiiOrderByWithRelationInput | InvoiceSiiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing InvoiceSiis.
     */
    cursor?: InvoiceSiiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` InvoiceSiis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` InvoiceSiis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of InvoiceSiis.
     */
    distinct?: InvoiceSiiScalarFieldEnum | InvoiceSiiScalarFieldEnum[];
  };

  /**
   * InvoiceSii create
   */
  export type InvoiceSiiCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * The data needed to create a InvoiceSii.
     */
    data: XOR<InvoiceSiiCreateInput, InvoiceSiiUncheckedCreateInput>;
  };

  /**
   * InvoiceSii createMany
   */
  export type InvoiceSiiCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many InvoiceSiis.
     */
    data: InvoiceSiiCreateManyInput | InvoiceSiiCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * InvoiceSii createManyAndReturn
   */
  export type InvoiceSiiCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * The data used to create many InvoiceSiis.
     */
    data: InvoiceSiiCreateManyInput | InvoiceSiiCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * InvoiceSii update
   */
  export type InvoiceSiiUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * The data needed to update a InvoiceSii.
     */
    data: XOR<InvoiceSiiUpdateInput, InvoiceSiiUncheckedUpdateInput>;
    /**
     * Choose, which InvoiceSii to update.
     */
    where: InvoiceSiiWhereUniqueInput;
  };

  /**
   * InvoiceSii updateMany
   */
  export type InvoiceSiiUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update InvoiceSiis.
     */
    data: XOR<
      InvoiceSiiUpdateManyMutationInput,
      InvoiceSiiUncheckedUpdateManyInput
    >;
    /**
     * Filter which InvoiceSiis to update
     */
    where?: InvoiceSiiWhereInput;
    /**
     * Limit how many InvoiceSiis to update.
     */
    limit?: number;
  };

  /**
   * InvoiceSii updateManyAndReturn
   */
  export type InvoiceSiiUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * The data used to update InvoiceSiis.
     */
    data: XOR<
      InvoiceSiiUpdateManyMutationInput,
      InvoiceSiiUncheckedUpdateManyInput
    >;
    /**
     * Filter which InvoiceSiis to update
     */
    where?: InvoiceSiiWhereInput;
    /**
     * Limit how many InvoiceSiis to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * InvoiceSii upsert
   */
  export type InvoiceSiiUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * The filter to search for the InvoiceSii to update in case it exists.
     */
    where: InvoiceSiiWhereUniqueInput;
    /**
     * In case the InvoiceSii found by the `where` argument doesn't exist, create a new InvoiceSii with this data.
     */
    create: XOR<InvoiceSiiCreateInput, InvoiceSiiUncheckedCreateInput>;
    /**
     * In case the InvoiceSii was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceSiiUpdateInput, InvoiceSiiUncheckedUpdateInput>;
  };

  /**
   * InvoiceSii delete
   */
  export type InvoiceSiiDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
    /**
     * Filter which InvoiceSii to delete.
     */
    where: InvoiceSiiWhereUniqueInput;
  };

  /**
   * InvoiceSii deleteMany
   */
  export type InvoiceSiiDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which InvoiceSiis to delete
     */
    where?: InvoiceSiiWhereInput;
    /**
     * Limit how many InvoiceSiis to delete.
     */
    limit?: number;
  };

  /**
   * InvoiceSii without action
   */
  export type InvoiceSiiDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceSii
     */
    select?: InvoiceSiiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the InvoiceSii
     */
    omit?: InvoiceSiiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceSiiInclude<ExtArgs> | null;
  };

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  export type NotificationMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    title: string | null;
    message: string | null;
    type: string | null;
    read: boolean | null;
    createdAt: Date | null;
  };

  export type NotificationMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    title: string | null;
    message: string | null;
    type: string | null;
    read: boolean | null;
    createdAt: Date | null;
  };

  export type NotificationCountAggregateOutputType = {
    id: number;
    businessId: number;
    title: number;
    message: number;
    type: number;
    read: number;
    createdAt: number;
    _all: number;
  };

  export type NotificationMinAggregateInputType = {
    id?: true;
    businessId?: true;
    title?: true;
    message?: true;
    type?: true;
    read?: true;
    createdAt?: true;
  };

  export type NotificationMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    title?: true;
    message?: true;
    type?: true;
    read?: true;
    createdAt?: true;
  };

  export type NotificationCountAggregateInputType = {
    id?: true;
    businessId?: true;
    title?: true;
    message?: true;
    type?: true;
    read?: true;
    createdAt?: true;
    _all?: true;
  };

  export type NotificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifications
     **/
    _count?: true | NotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NotificationMaxAggregateInputType;
  };

  export type GetNotificationAggregateType<
    T extends NotificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>;
  };

  export type NotificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NotificationWhereInput;
    orderBy?:
      | NotificationOrderByWithAggregationInput
      | NotificationOrderByWithAggregationInput[];
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum;
    having?: NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
  };

  export type NotificationGroupByOutputType = {
    id: string;
    businessId: string;
    title: string;
    message: string;
    type: string;
    read: boolean;
    createdAt: Date;
    _count: NotificationCountAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
  };

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NotificationGroupByOutputType, T['by']> & {
          [
            P in keyof T & keyof NotificationGroupByOutputType
          ]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>;
        }
      >
    >;

  export type NotificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      title?: boolean;
      message?: boolean;
      type?: boolean;
      read?: boolean;
      createdAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['notification']
  >;

  export type NotificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      title?: boolean;
      message?: boolean;
      type?: boolean;
      read?: boolean;
      createdAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['notification']
  >;

  export type NotificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      businessId?: boolean;
      title?: boolean;
      message?: boolean;
      type?: boolean;
      read?: boolean;
      createdAt?: boolean;
      business?: boolean | BusinessDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['notification']
  >;

  export type NotificationSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    title?: boolean;
    message?: boolean;
    type?: boolean;
    read?: boolean;
    createdAt?: boolean;
  };

  export type NotificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'businessId' | 'title' | 'message' | 'type' | 'read' | 'createdAt',
    ExtArgs['result']['notification']
  >;
  export type NotificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };
  export type NotificationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };
  export type NotificationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>;
  };

  export type $NotificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Notification';
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        businessId: string;
        title: string;
        message: string;
        type: string;
        read: boolean;
        createdAt: Date;
      },
      ExtArgs['result']['notification']
    >;
    composites: {};
  };

  type NotificationGetPayload<
    S extends boolean | null | undefined | NotificationDefaultArgs,
  > = $Result.GetResult<Prisma.$NotificationPayload, S>;

  type NotificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    NotificationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: NotificationCountAggregateInputType | true;
  };

  export interface NotificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Notification'];
      meta: { name: 'Notification' };
    };
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     *
     */
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     *
     */
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>,
    ): Prisma__NotificationClient<
      $Result.GetResult<
        Prisma.$NotificationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
     **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NotificationAggregateArgs>(
      args: Subset<T, NotificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetNotificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notification model
     */
    readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BusinessDefaultArgs<ExtArgs>>,
    ): Prisma__BusinessClient<
      | $Result.GetResult<
          Prisma.$BusinessPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<'Notification', 'String'>;
    readonly businessId: FieldRef<'Notification', 'String'>;
    readonly title: FieldRef<'Notification', 'String'>;
    readonly message: FieldRef<'Notification', 'String'>;
    readonly type: FieldRef<'Notification', 'String'>;
    readonly read: FieldRef<'Notification', 'Boolean'>;
    readonly createdAt: FieldRef<'Notification', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?:
      | NotificationOrderByWithRelationInput
      | NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[];
  };

  /**
   * Notification create
   */
  export type NotificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
  };

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
  };

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * The data used to update Notifications.
     */
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput;
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>;
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>;
  };

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput;
  };

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput;
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number;
  };

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BusinessScalarFieldEnum: {
    id: 'id';
    name: 'name';
    rut: 'rut';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type BusinessScalarFieldEnum =
    (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    businessId: 'businessId';
    name: 'name';
    email: 'email';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    businessId: 'businessId';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const ExpenseScalarFieldEnum: {
    id: 'id';
    businessId: 'businessId';
    categoryId: 'categoryId';
    amountTotal: 'amountTotal';
    amountNet: 'amountNet';
    amountVat: 'amountVat';
    issueDate: 'issueDate';
    supplierRut: 'supplierRut';
    supplierName: 'supplierName';
    description: 'description';
    documentUrl: 'documentUrl';
    isManual: 'isManual';
    source: 'source';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ExpenseScalarFieldEnum =
    (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum];

  export const InvoiceSiiScalarFieldEnum: {
    id: 'id';
    businessId: 'businessId';
    folio: 'folio';
    supplierRut: 'supplierRut';
    supplierName: 'supplierName';
    amountNet: 'amountNet';
    amountVat: 'amountVat';
    amountTotal: 'amountTotal';
    receivedAt: 'receivedAt';
    status: 'status';
    actionReason: 'actionReason';
    actionAt: 'actionAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type InvoiceSiiScalarFieldEnum =
    (typeof InvoiceSiiScalarFieldEnum)[keyof typeof InvoiceSiiScalarFieldEnum];

  export const NotificationScalarFieldEnum: {
    id: 'id';
    businessId: 'businessId';
    title: 'title';
    message: 'message';
    type: 'type';
    read: 'read';
    createdAt: 'createdAt';
  };

  export type NotificationScalarFieldEnum =
    (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'ExpenseSource'
   */
  export type EnumExpenseSourceFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ExpenseSource'
  >;

  /**
   * Reference to a field of type 'ExpenseSource[]'
   */
  export type ListEnumExpenseSourceFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ExpenseSource[]'>;

  /**
   * Reference to a field of type 'ExpenseStatus'
   */
  export type EnumExpenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ExpenseStatus'
  >;

  /**
   * Reference to a field of type 'ExpenseStatus[]'
   */
  export type ListEnumExpenseStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ExpenseStatus[]'>;

  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'InvoiceStatus'
  >;

  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[];
    OR?: BusinessWhereInput[];
    NOT?: BusinessWhereInput | BusinessWhereInput[];
    id?: StringFilter<'Business'> | string;
    name?: StringFilter<'Business'> | string;
    rut?: StringFilter<'Business'> | string;
    createdAt?: DateTimeFilter<'Business'> | Date | string;
    updatedAt?: DateTimeFilter<'Business'> | Date | string;
    users?: UserListRelationFilter;
    categories?: CategoryListRelationFilter;
    expenses?: ExpenseListRelationFilter;
    invoices?: InvoiceSiiListRelationFilter;
    notifications?: NotificationListRelationFilter;
  };

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    rut?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    users?: UserOrderByRelationAggregateInput;
    categories?: CategoryOrderByRelationAggregateInput;
    expenses?: ExpenseOrderByRelationAggregateInput;
    invoices?: InvoiceSiiOrderByRelationAggregateInput;
    notifications?: NotificationOrderByRelationAggregateInput;
  };

  export type BusinessWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      rut?: string;
      AND?: BusinessWhereInput | BusinessWhereInput[];
      OR?: BusinessWhereInput[];
      NOT?: BusinessWhereInput | BusinessWhereInput[];
      name?: StringFilter<'Business'> | string;
      createdAt?: DateTimeFilter<'Business'> | Date | string;
      updatedAt?: DateTimeFilter<'Business'> | Date | string;
      users?: UserListRelationFilter;
      categories?: CategoryListRelationFilter;
      expenses?: ExpenseListRelationFilter;
      invoices?: InvoiceSiiListRelationFilter;
      notifications?: NotificationListRelationFilter;
    },
    'id' | 'rut'
  >;

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    rut?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: BusinessCountOrderByAggregateInput;
    _max?: BusinessMaxOrderByAggregateInput;
    _min?: BusinessMinOrderByAggregateInput;
  };

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?:
      | BusinessScalarWhereWithAggregatesInput
      | BusinessScalarWhereWithAggregatesInput[];
    OR?: BusinessScalarWhereWithAggregatesInput[];
    NOT?:
      | BusinessScalarWhereWithAggregatesInput
      | BusinessScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Business'> | string;
    name?: StringWithAggregatesFilter<'Business'> | string;
    rut?: StringWithAggregatesFilter<'Business'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Business'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Business'> | Date | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    businessId?: StringFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    role?: StringFilter<'User'> | string;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    business?: BusinessOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      businessId?: StringFilter<'User'> | string;
      name?: StringFilter<'User'> | string;
      role?: StringFilter<'User'> | string;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    businessId?: StringWithAggregatesFilter<'User'> | string;
    name?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    role?: StringWithAggregatesFilter<'User'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: StringFilter<'Category'> | string;
    businessId?: StringFilter<'Category'> | string;
    name?: StringFilter<'Category'> | string;
    createdAt?: DateTimeFilter<'Category'> | Date | string;
    updatedAt?: DateTimeFilter<'Category'> | Date | string;
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
    expenses?: ExpenseListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    business?: BusinessOrderByWithRelationInput;
    expenses?: ExpenseOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      businessId_name?: CategoryBusinessIdNameCompoundUniqueInput;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      businessId?: StringFilter<'Category'> | string;
      name?: StringFilter<'Category'> | string;
      createdAt?: DateTimeFilter<'Category'> | Date | string;
      updatedAt?: DateTimeFilter<'Category'> | Date | string;
      business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
      expenses?: ExpenseListRelationFilter;
    },
    'id' | 'businessId_name'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Category'> | string;
    businessId?: StringWithAggregatesFilter<'Category'> | string;
    name?: StringWithAggregatesFilter<'Category'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
  };

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[];
    OR?: ExpenseWhereInput[];
    NOT?: ExpenseWhereInput | ExpenseWhereInput[];
    id?: StringFilter<'Expense'> | string;
    businessId?: StringFilter<'Expense'> | string;
    categoryId?: StringNullableFilter<'Expense'> | string | null;
    amountTotal?: IntFilter<'Expense'> | number;
    amountNet?: IntNullableFilter<'Expense'> | number | null;
    amountVat?: IntNullableFilter<'Expense'> | number | null;
    issueDate?: DateTimeFilter<'Expense'> | Date | string;
    supplierRut?: StringNullableFilter<'Expense'> | string | null;
    supplierName?: StringNullableFilter<'Expense'> | string | null;
    description?: StringNullableFilter<'Expense'> | string | null;
    documentUrl?: StringNullableFilter<'Expense'> | string | null;
    isManual?: BoolFilter<'Expense'> | boolean;
    source?: EnumExpenseSourceFilter<'Expense'> | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFilter<'Expense'> | $Enums.ExpenseStatus;
    createdAt?: DateTimeFilter<'Expense'> | Date | string;
    updatedAt?: DateTimeFilter<'Expense'> | Date | string;
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
    category?: XOR<
      CategoryNullableScalarRelationFilter,
      CategoryWhereInput
    > | null;
  };

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    categoryId?: SortOrderInput | SortOrder;
    amountTotal?: SortOrder;
    amountNet?: SortOrderInput | SortOrder;
    amountVat?: SortOrderInput | SortOrder;
    issueDate?: SortOrder;
    supplierRut?: SortOrderInput | SortOrder;
    supplierName?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    documentUrl?: SortOrderInput | SortOrder;
    isManual?: SortOrder;
    source?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    business?: BusinessOrderByWithRelationInput;
    category?: CategoryOrderByWithRelationInput;
  };

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ExpenseWhereInput | ExpenseWhereInput[];
      OR?: ExpenseWhereInput[];
      NOT?: ExpenseWhereInput | ExpenseWhereInput[];
      businessId?: StringFilter<'Expense'> | string;
      categoryId?: StringNullableFilter<'Expense'> | string | null;
      amountTotal?: IntFilter<'Expense'> | number;
      amountNet?: IntNullableFilter<'Expense'> | number | null;
      amountVat?: IntNullableFilter<'Expense'> | number | null;
      issueDate?: DateTimeFilter<'Expense'> | Date | string;
      supplierRut?: StringNullableFilter<'Expense'> | string | null;
      supplierName?: StringNullableFilter<'Expense'> | string | null;
      description?: StringNullableFilter<'Expense'> | string | null;
      documentUrl?: StringNullableFilter<'Expense'> | string | null;
      isManual?: BoolFilter<'Expense'> | boolean;
      source?: EnumExpenseSourceFilter<'Expense'> | $Enums.ExpenseSource;
      status?: EnumExpenseStatusFilter<'Expense'> | $Enums.ExpenseStatus;
      createdAt?: DateTimeFilter<'Expense'> | Date | string;
      updatedAt?: DateTimeFilter<'Expense'> | Date | string;
      business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
      category?: XOR<
        CategoryNullableScalarRelationFilter,
        CategoryWhereInput
      > | null;
    },
    'id'
  >;

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    categoryId?: SortOrderInput | SortOrder;
    amountTotal?: SortOrder;
    amountNet?: SortOrderInput | SortOrder;
    amountVat?: SortOrderInput | SortOrder;
    issueDate?: SortOrder;
    supplierRut?: SortOrderInput | SortOrder;
    supplierName?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    documentUrl?: SortOrderInput | SortOrder;
    isManual?: SortOrder;
    source?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ExpenseCountOrderByAggregateInput;
    _avg?: ExpenseAvgOrderByAggregateInput;
    _max?: ExpenseMaxOrderByAggregateInput;
    _min?: ExpenseMinOrderByAggregateInput;
    _sum?: ExpenseSumOrderByAggregateInput;
  };

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?:
      | ExpenseScalarWhereWithAggregatesInput
      | ExpenseScalarWhereWithAggregatesInput[];
    OR?: ExpenseScalarWhereWithAggregatesInput[];
    NOT?:
      | ExpenseScalarWhereWithAggregatesInput
      | ExpenseScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Expense'> | string;
    businessId?: StringWithAggregatesFilter<'Expense'> | string;
    categoryId?: StringNullableWithAggregatesFilter<'Expense'> | string | null;
    amountTotal?: IntWithAggregatesFilter<'Expense'> | number;
    amountNet?: IntNullableWithAggregatesFilter<'Expense'> | number | null;
    amountVat?: IntNullableWithAggregatesFilter<'Expense'> | number | null;
    issueDate?: DateTimeWithAggregatesFilter<'Expense'> | Date | string;
    supplierRut?: StringNullableWithAggregatesFilter<'Expense'> | string | null;
    supplierName?:
      StringNullableWithAggregatesFilter<'Expense'> | string | null;
    description?: StringNullableWithAggregatesFilter<'Expense'> | string | null;
    documentUrl?: StringNullableWithAggregatesFilter<'Expense'> | string | null;
    isManual?: BoolWithAggregatesFilter<'Expense'> | boolean;
    source?:
      EnumExpenseSourceWithAggregatesFilter<'Expense'> | $Enums.ExpenseSource;
    status?:
      EnumExpenseStatusWithAggregatesFilter<'Expense'> | $Enums.ExpenseStatus;
    createdAt?: DateTimeWithAggregatesFilter<'Expense'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Expense'> | Date | string;
  };

  export type InvoiceSiiWhereInput = {
    AND?: InvoiceSiiWhereInput | InvoiceSiiWhereInput[];
    OR?: InvoiceSiiWhereInput[];
    NOT?: InvoiceSiiWhereInput | InvoiceSiiWhereInput[];
    id?: StringFilter<'InvoiceSii'> | string;
    businessId?: StringFilter<'InvoiceSii'> | string;
    folio?: StringFilter<'InvoiceSii'> | string;
    supplierRut?: StringFilter<'InvoiceSii'> | string;
    supplierName?: StringFilter<'InvoiceSii'> | string;
    amountNet?: IntFilter<'InvoiceSii'> | number;
    amountVat?: IntFilter<'InvoiceSii'> | number;
    amountTotal?: IntFilter<'InvoiceSii'> | number;
    receivedAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
    status?: EnumInvoiceStatusFilter<'InvoiceSii'> | $Enums.InvoiceStatus;
    actionReason?: StringNullableFilter<'InvoiceSii'> | string | null;
    actionAt?: DateTimeNullableFilter<'InvoiceSii'> | Date | string | null;
    createdAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
    updatedAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
  };

  export type InvoiceSiiOrderByWithRelationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    folio?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    amountTotal?: SortOrder;
    receivedAt?: SortOrder;
    status?: SortOrder;
    actionReason?: SortOrderInput | SortOrder;
    actionAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    business?: BusinessOrderByWithRelationInput;
  };

  export type InvoiceSiiWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: InvoiceSiiWhereInput | InvoiceSiiWhereInput[];
      OR?: InvoiceSiiWhereInput[];
      NOT?: InvoiceSiiWhereInput | InvoiceSiiWhereInput[];
      businessId?: StringFilter<'InvoiceSii'> | string;
      folio?: StringFilter<'InvoiceSii'> | string;
      supplierRut?: StringFilter<'InvoiceSii'> | string;
      supplierName?: StringFilter<'InvoiceSii'> | string;
      amountNet?: IntFilter<'InvoiceSii'> | number;
      amountVat?: IntFilter<'InvoiceSii'> | number;
      amountTotal?: IntFilter<'InvoiceSii'> | number;
      receivedAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
      status?: EnumInvoiceStatusFilter<'InvoiceSii'> | $Enums.InvoiceStatus;
      actionReason?: StringNullableFilter<'InvoiceSii'> | string | null;
      actionAt?: DateTimeNullableFilter<'InvoiceSii'> | Date | string | null;
      createdAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
      updatedAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
      business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
    },
    'id'
  >;

  export type InvoiceSiiOrderByWithAggregationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    folio?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    amountTotal?: SortOrder;
    receivedAt?: SortOrder;
    status?: SortOrder;
    actionReason?: SortOrderInput | SortOrder;
    actionAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: InvoiceSiiCountOrderByAggregateInput;
    _avg?: InvoiceSiiAvgOrderByAggregateInput;
    _max?: InvoiceSiiMaxOrderByAggregateInput;
    _min?: InvoiceSiiMinOrderByAggregateInput;
    _sum?: InvoiceSiiSumOrderByAggregateInput;
  };

  export type InvoiceSiiScalarWhereWithAggregatesInput = {
    AND?:
      | InvoiceSiiScalarWhereWithAggregatesInput
      | InvoiceSiiScalarWhereWithAggregatesInput[];
    OR?: InvoiceSiiScalarWhereWithAggregatesInput[];
    NOT?:
      | InvoiceSiiScalarWhereWithAggregatesInput
      | InvoiceSiiScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'InvoiceSii'> | string;
    businessId?: StringWithAggregatesFilter<'InvoiceSii'> | string;
    folio?: StringWithAggregatesFilter<'InvoiceSii'> | string;
    supplierRut?: StringWithAggregatesFilter<'InvoiceSii'> | string;
    supplierName?: StringWithAggregatesFilter<'InvoiceSii'> | string;
    amountNet?: IntWithAggregatesFilter<'InvoiceSii'> | number;
    amountVat?: IntWithAggregatesFilter<'InvoiceSii'> | number;
    amountTotal?: IntWithAggregatesFilter<'InvoiceSii'> | number;
    receivedAt?: DateTimeWithAggregatesFilter<'InvoiceSii'> | Date | string;
    status?:
      | EnumInvoiceStatusWithAggregatesFilter<'InvoiceSii'>
      | $Enums.InvoiceStatus;
    actionReason?:
      StringNullableWithAggregatesFilter<'InvoiceSii'> | string | null;
    actionAt?:
      DateTimeNullableWithAggregatesFilter<'InvoiceSii'> | Date | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'InvoiceSii'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'InvoiceSii'> | Date | string;
  };

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[];
    OR?: NotificationWhereInput[];
    NOT?: NotificationWhereInput | NotificationWhereInput[];
    id?: StringFilter<'Notification'> | string;
    businessId?: StringFilter<'Notification'> | string;
    title?: StringFilter<'Notification'> | string;
    message?: StringFilter<'Notification'> | string;
    type?: StringFilter<'Notification'> | string;
    read?: BoolFilter<'Notification'> | boolean;
    createdAt?: DateTimeFilter<'Notification'> | Date | string;
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
  };

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
    business?: BusinessOrderByWithRelationInput;
  };

  export type NotificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: NotificationWhereInput | NotificationWhereInput[];
      OR?: NotificationWhereInput[];
      NOT?: NotificationWhereInput | NotificationWhereInput[];
      businessId?: StringFilter<'Notification'> | string;
      title?: StringFilter<'Notification'> | string;
      message?: StringFilter<'Notification'> | string;
      type?: StringFilter<'Notification'> | string;
      read?: BoolFilter<'Notification'> | boolean;
      createdAt?: DateTimeFilter<'Notification'> | Date | string;
      business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>;
    },
    'id'
  >;

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
    _count?: NotificationCountOrderByAggregateInput;
    _max?: NotificationMaxOrderByAggregateInput;
    _min?: NotificationMinOrderByAggregateInput;
  };

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    OR?: NotificationScalarWhereWithAggregatesInput[];
    NOT?:
      | NotificationScalarWhereWithAggregatesInput
      | NotificationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Notification'> | string;
    businessId?: StringWithAggregatesFilter<'Notification'> | string;
    title?: StringWithAggregatesFilter<'Notification'> | string;
    message?: StringWithAggregatesFilter<'Notification'> | string;
    type?: StringWithAggregatesFilter<'Notification'> | string;
    read?: BoolWithAggregatesFilter<'Notification'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Notification'> | Date | string;
  };

  export type BusinessCreateInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutBusinessInput;
    categories?: CategoryCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessUncheckedCreateInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput;
    categories?: CategoryUncheckedCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiUncheckedCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUncheckedUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUncheckedUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessCreateManyInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: BusinessCreateNestedOneWithoutUsersInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    businessId: string;
    name: string;
    email: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateManyInput = {
    id?: string;
    businessId: string;
    name: string;
    email: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: BusinessCreateNestedOneWithoutCategoriesInput;
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: string;
    businessId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: BusinessUpdateOneRequiredWithoutCategoriesNestedInput;
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: string;
    businessId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExpenseCreateInput = {
    id?: string;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: BusinessCreateNestedOneWithoutExpensesInput;
    category?: CategoryCreateNestedOneWithoutExpensesInput;
  };

  export type ExpenseUncheckedCreateInput = {
    id?: string;
    businessId: string;
    categoryId?: string | null;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: BusinessUpdateOneRequiredWithoutExpensesNestedInput;
    category?: CategoryUpdateOneWithoutExpensesNestedInput;
  };

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExpenseCreateManyInput = {
    id?: string;
    businessId: string;
    categoryId?: string | null;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceSiiCreateInput = {
    id?: string;
    folio: string;
    supplierRut: string;
    supplierName: string;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: Date | string;
    status?: $Enums.InvoiceStatus;
    actionReason?: string | null;
    actionAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: BusinessCreateNestedOneWithoutInvoicesInput;
  };

  export type InvoiceSiiUncheckedCreateInput = {
    id?: string;
    businessId: string;
    folio: string;
    supplierRut: string;
    supplierName: string;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: Date | string;
    status?: $Enums.InvoiceStatus;
    actionReason?: string | null;
    actionAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceSiiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    folio?: StringFieldUpdateOperationsInput | string;
    supplierRut?: StringFieldUpdateOperationsInput | string;
    supplierName?: StringFieldUpdateOperationsInput | string;
    amountNet?: IntFieldUpdateOperationsInput | number;
    amountVat?: IntFieldUpdateOperationsInput | number;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    actionReason?: NullableStringFieldUpdateOperationsInput | string | null;
    actionAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: BusinessUpdateOneRequiredWithoutInvoicesNestedInput;
  };

  export type InvoiceSiiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    folio?: StringFieldUpdateOperationsInput | string;
    supplierRut?: StringFieldUpdateOperationsInput | string;
    supplierName?: StringFieldUpdateOperationsInput | string;
    amountNet?: IntFieldUpdateOperationsInput | number;
    amountVat?: IntFieldUpdateOperationsInput | number;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    actionReason?: NullableStringFieldUpdateOperationsInput | string | null;
    actionAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceSiiCreateManyInput = {
    id?: string;
    businessId: string;
    folio: string;
    supplierRut: string;
    supplierName: string;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: Date | string;
    status?: $Enums.InvoiceStatus;
    actionReason?: string | null;
    actionAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceSiiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    folio?: StringFieldUpdateOperationsInput | string;
    supplierRut?: StringFieldUpdateOperationsInput | string;
    supplierName?: StringFieldUpdateOperationsInput | string;
    amountNet?: IntFieldUpdateOperationsInput | number;
    amountVat?: IntFieldUpdateOperationsInput | number;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    actionReason?: NullableStringFieldUpdateOperationsInput | string | null;
    actionAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceSiiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    folio?: StringFieldUpdateOperationsInput | string;
    supplierRut?: StringFieldUpdateOperationsInput | string;
    supplierName?: StringFieldUpdateOperationsInput | string;
    amountNet?: IntFieldUpdateOperationsInput | number;
    amountVat?: IntFieldUpdateOperationsInput | number;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    actionReason?: NullableStringFieldUpdateOperationsInput | string | null;
    actionAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationCreateInput = {
    id?: string;
    title: string;
    message: string;
    type: string;
    read?: boolean;
    createdAt?: Date | string;
    business: BusinessCreateNestedOneWithoutNotificationsInput;
  };

  export type NotificationUncheckedCreateInput = {
    id?: string;
    businessId: string;
    title: string;
    message: string;
    type: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: BusinessUpdateOneRequiredWithoutNotificationsNestedInput;
  };

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationCreateManyInput = {
    id?: string;
    businessId: string;
    title: string;
    message: string;
    type: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserListRelationFilter = {
    every?: UserWhereInput;
    some?: UserWhereInput;
    none?: UserWhereInput;
  };

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput;
    some?: CategoryWhereInput;
    none?: CategoryWhereInput;
  };

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput;
    some?: ExpenseWhereInput;
    none?: ExpenseWhereInput;
  };

  export type InvoiceSiiListRelationFilter = {
    every?: InvoiceSiiWhereInput;
    some?: InvoiceSiiWhereInput;
    none?: InvoiceSiiWhereInput;
  };

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput;
    some?: NotificationWhereInput;
    none?: NotificationWhereInput;
  };

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type InvoiceSiiOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    rut?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    rut?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    rut?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput;
    isNot?: BusinessWhereInput;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CategoryBusinessIdNameCompoundUniqueInput = {
    businessId: string;
    name: string;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EnumExpenseSourceFilter<$PrismaModel = never> = {
    equals?:
      $Enums.ExpenseSource | EnumExpenseSourceFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    not?: NestedEnumExpenseSourceFilter<$PrismaModel> | $Enums.ExpenseSource;
  };

  export type EnumExpenseStatusFilter<$PrismaModel = never> = {
    equals?:
      $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumExpenseStatusFilter<$PrismaModel> | $Enums.ExpenseStatus;
  };

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null;
    isNot?: CategoryWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    categoryId?: SortOrder;
    amountTotal?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    issueDate?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    description?: SortOrder;
    documentUrl?: SortOrder;
    isManual?: SortOrder;
    source?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ExpenseAvgOrderByAggregateInput = {
    amountTotal?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
  };

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    categoryId?: SortOrder;
    amountTotal?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    issueDate?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    description?: SortOrder;
    documentUrl?: SortOrder;
    isManual?: SortOrder;
    source?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    categoryId?: SortOrder;
    amountTotal?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    issueDate?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    description?: SortOrder;
    documentUrl?: SortOrder;
    isManual?: SortOrder;
    source?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ExpenseSumOrderByAggregateInput = {
    amountTotal?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumExpenseSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      $Enums.ExpenseSource | EnumExpenseSourceFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumExpenseSourceWithAggregatesFilter<$PrismaModel>
      | $Enums.ExpenseSource;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumExpenseSourceFilter<$PrismaModel>;
    _max?: NestedEnumExpenseSourceFilter<$PrismaModel>;
  };

  export type EnumExpenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ExpenseStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumExpenseStatusFilter<$PrismaModel>;
    _max?: NestedEnumExpenseStatusFilter<$PrismaModel>;
  };

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?:
      $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type InvoiceSiiCountOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    folio?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    amountTotal?: SortOrder;
    receivedAt?: SortOrder;
    status?: SortOrder;
    actionReason?: SortOrder;
    actionAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvoiceSiiAvgOrderByAggregateInput = {
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    amountTotal?: SortOrder;
  };

  export type InvoiceSiiMaxOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    folio?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    amountTotal?: SortOrder;
    receivedAt?: SortOrder;
    status?: SortOrder;
    actionReason?: SortOrder;
    actionAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvoiceSiiMinOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    folio?: SortOrder;
    supplierRut?: SortOrder;
    supplierName?: SortOrder;
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    amountTotal?: SortOrder;
    receivedAt?: SortOrder;
    status?: SortOrder;
    actionReason?: SortOrder;
    actionAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvoiceSiiSumOrderByAggregateInput = {
    amountNet?: SortOrder;
    amountVat?: SortOrder;
    amountTotal?: SortOrder;
  };

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.InvoiceStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
  };

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
  };

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder;
    businessId?: SortOrder;
    title?: SortOrder;
    message?: SortOrder;
    type?: SortOrder;
    read?: SortOrder;
    createdAt?: SortOrder;
  };

  export type UserCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          UserCreateWithoutBusinessInput,
          UserUncheckedCreateWithoutBusinessInput
        >
      | UserCreateWithoutBusinessInput[]
      | UserUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutBusinessInput
      | UserCreateOrConnectWithoutBusinessInput[];
    createMany?: UserCreateManyBusinessInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type CategoryCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          CategoryCreateWithoutBusinessInput,
          CategoryUncheckedCreateWithoutBusinessInput
        >
      | CategoryCreateWithoutBusinessInput[]
      | CategoryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutBusinessInput
      | CategoryCreateOrConnectWithoutBusinessInput[];
    createMany?: CategoryCreateManyBusinessInputEnvelope;
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
  };

  export type ExpenseCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutBusinessInput,
          ExpenseUncheckedCreateWithoutBusinessInput
        >
      | ExpenseCreateWithoutBusinessInput[]
      | ExpenseUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutBusinessInput
      | ExpenseCreateOrConnectWithoutBusinessInput[];
    createMany?: ExpenseCreateManyBusinessInputEnvelope;
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
  };

  export type InvoiceSiiCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          InvoiceSiiCreateWithoutBusinessInput,
          InvoiceSiiUncheckedCreateWithoutBusinessInput
        >
      | InvoiceSiiCreateWithoutBusinessInput[]
      | InvoiceSiiUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | InvoiceSiiCreateOrConnectWithoutBusinessInput
      | InvoiceSiiCreateOrConnectWithoutBusinessInput[];
    createMany?: InvoiceSiiCreateManyBusinessInputEnvelope;
    connect?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
  };

  export type NotificationCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          NotificationCreateWithoutBusinessInput,
          NotificationUncheckedCreateWithoutBusinessInput
        >
      | NotificationCreateWithoutBusinessInput[]
      | NotificationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutBusinessInput
      | NotificationCreateOrConnectWithoutBusinessInput[];
    createMany?: NotificationCreateManyBusinessInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          UserCreateWithoutBusinessInput,
          UserUncheckedCreateWithoutBusinessInput
        >
      | UserCreateWithoutBusinessInput[]
      | UserUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutBusinessInput
      | UserCreateOrConnectWithoutBusinessInput[];
    createMany?: UserCreateManyBusinessInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type CategoryUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          CategoryCreateWithoutBusinessInput,
          CategoryUncheckedCreateWithoutBusinessInput
        >
      | CategoryCreateWithoutBusinessInput[]
      | CategoryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutBusinessInput
      | CategoryCreateOrConnectWithoutBusinessInput[];
    createMany?: CategoryCreateManyBusinessInputEnvelope;
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
  };

  export type ExpenseUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutBusinessInput,
          ExpenseUncheckedCreateWithoutBusinessInput
        >
      | ExpenseCreateWithoutBusinessInput[]
      | ExpenseUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutBusinessInput
      | ExpenseCreateOrConnectWithoutBusinessInput[];
    createMany?: ExpenseCreateManyBusinessInputEnvelope;
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
  };

  export type InvoiceSiiUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          InvoiceSiiCreateWithoutBusinessInput,
          InvoiceSiiUncheckedCreateWithoutBusinessInput
        >
      | InvoiceSiiCreateWithoutBusinessInput[]
      | InvoiceSiiUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | InvoiceSiiCreateOrConnectWithoutBusinessInput
      | InvoiceSiiCreateOrConnectWithoutBusinessInput[];
    createMany?: InvoiceSiiCreateManyBusinessInputEnvelope;
    connect?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
  };

  export type NotificationUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<
          NotificationCreateWithoutBusinessInput,
          NotificationUncheckedCreateWithoutBusinessInput
        >
      | NotificationCreateWithoutBusinessInput[]
      | NotificationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutBusinessInput
      | NotificationCreateOrConnectWithoutBusinessInput[];
    createMany?: NotificationCreateManyBusinessInputEnvelope;
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutBusinessInput,
          UserUncheckedCreateWithoutBusinessInput
        >
      | UserCreateWithoutBusinessInput[]
      | UserUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutBusinessInput
      | UserCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutBusinessInput
      | UserUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: UserCreateManyBusinessInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutBusinessInput
      | UserUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutBusinessInput
      | UserUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type CategoryUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          CategoryCreateWithoutBusinessInput,
          CategoryUncheckedCreateWithoutBusinessInput
        >
      | CategoryCreateWithoutBusinessInput[]
      | CategoryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutBusinessInput
      | CategoryCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | CategoryUpsertWithWhereUniqueWithoutBusinessInput
      | CategoryUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: CategoryCreateManyBusinessInputEnvelope;
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    update?:
      | CategoryUpdateWithWhereUniqueWithoutBusinessInput
      | CategoryUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | CategoryUpdateManyWithWhereWithoutBusinessInput
      | CategoryUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
  };

  export type ExpenseUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutBusinessInput,
          ExpenseUncheckedCreateWithoutBusinessInput
        >
      | ExpenseCreateWithoutBusinessInput[]
      | ExpenseUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutBusinessInput
      | ExpenseCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | ExpenseUpsertWithWhereUniqueWithoutBusinessInput
      | ExpenseUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: ExpenseCreateManyBusinessInputEnvelope;
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    update?:
      | ExpenseUpdateWithWhereUniqueWithoutBusinessInput
      | ExpenseUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | ExpenseUpdateManyWithWhereWithoutBusinessInput
      | ExpenseUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[];
  };

  export type InvoiceSiiUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          InvoiceSiiCreateWithoutBusinessInput,
          InvoiceSiiUncheckedCreateWithoutBusinessInput
        >
      | InvoiceSiiCreateWithoutBusinessInput[]
      | InvoiceSiiUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | InvoiceSiiCreateOrConnectWithoutBusinessInput
      | InvoiceSiiCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | InvoiceSiiUpsertWithWhereUniqueWithoutBusinessInput
      | InvoiceSiiUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: InvoiceSiiCreateManyBusinessInputEnvelope;
    set?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    disconnect?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    delete?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    connect?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    update?:
      | InvoiceSiiUpdateWithWhereUniqueWithoutBusinessInput
      | InvoiceSiiUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | InvoiceSiiUpdateManyWithWhereWithoutBusinessInput
      | InvoiceSiiUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: InvoiceSiiScalarWhereInput | InvoiceSiiScalarWhereInput[];
  };

  export type NotificationUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutBusinessInput,
          NotificationUncheckedCreateWithoutBusinessInput
        >
      | NotificationCreateWithoutBusinessInput[]
      | NotificationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutBusinessInput
      | NotificationCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutBusinessInput
      | NotificationUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: NotificationCreateManyBusinessInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutBusinessInput
      | NotificationUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutBusinessInput
      | NotificationUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          UserCreateWithoutBusinessInput,
          UserUncheckedCreateWithoutBusinessInput
        >
      | UserCreateWithoutBusinessInput[]
      | UserUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutBusinessInput
      | UserCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutBusinessInput
      | UserUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: UserCreateManyBusinessInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutBusinessInput
      | UserUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutBusinessInput
      | UserUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type CategoryUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          CategoryCreateWithoutBusinessInput,
          CategoryUncheckedCreateWithoutBusinessInput
        >
      | CategoryCreateWithoutBusinessInput[]
      | CategoryUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | CategoryCreateOrConnectWithoutBusinessInput
      | CategoryCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | CategoryUpsertWithWhereUniqueWithoutBusinessInput
      | CategoryUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: CategoryCreateManyBusinessInputEnvelope;
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[];
    update?:
      | CategoryUpdateWithWhereUniqueWithoutBusinessInput
      | CategoryUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | CategoryUpdateManyWithWhereWithoutBusinessInput
      | CategoryUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
  };

  export type ExpenseUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutBusinessInput,
          ExpenseUncheckedCreateWithoutBusinessInput
        >
      | ExpenseCreateWithoutBusinessInput[]
      | ExpenseUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutBusinessInput
      | ExpenseCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | ExpenseUpsertWithWhereUniqueWithoutBusinessInput
      | ExpenseUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: ExpenseCreateManyBusinessInputEnvelope;
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    update?:
      | ExpenseUpdateWithWhereUniqueWithoutBusinessInput
      | ExpenseUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | ExpenseUpdateManyWithWhereWithoutBusinessInput
      | ExpenseUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[];
  };

  export type InvoiceSiiUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          InvoiceSiiCreateWithoutBusinessInput,
          InvoiceSiiUncheckedCreateWithoutBusinessInput
        >
      | InvoiceSiiCreateWithoutBusinessInput[]
      | InvoiceSiiUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | InvoiceSiiCreateOrConnectWithoutBusinessInput
      | InvoiceSiiCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | InvoiceSiiUpsertWithWhereUniqueWithoutBusinessInput
      | InvoiceSiiUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: InvoiceSiiCreateManyBusinessInputEnvelope;
    set?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    disconnect?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    delete?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    connect?: InvoiceSiiWhereUniqueInput | InvoiceSiiWhereUniqueInput[];
    update?:
      | InvoiceSiiUpdateWithWhereUniqueWithoutBusinessInput
      | InvoiceSiiUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | InvoiceSiiUpdateManyWithWhereWithoutBusinessInput
      | InvoiceSiiUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: InvoiceSiiScalarWhereInput | InvoiceSiiScalarWhereInput[];
  };

  export type NotificationUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<
          NotificationCreateWithoutBusinessInput,
          NotificationUncheckedCreateWithoutBusinessInput
        >
      | NotificationCreateWithoutBusinessInput[]
      | NotificationUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?:
      | NotificationCreateOrConnectWithoutBusinessInput
      | NotificationCreateOrConnectWithoutBusinessInput[];
    upsert?:
      | NotificationUpsertWithWhereUniqueWithoutBusinessInput
      | NotificationUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: NotificationCreateManyBusinessInputEnvelope;
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[];
    update?:
      | NotificationUpdateWithWhereUniqueWithoutBusinessInput
      | NotificationUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?:
      | NotificationUpdateManyWithWhereWithoutBusinessInput
      | NotificationUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
  };

  export type BusinessCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      BusinessCreateWithoutUsersInput,
      BusinessUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput;
    connect?: BusinessWhereUniqueInput;
  };

  export type BusinessUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      BusinessCreateWithoutUsersInput,
      BusinessUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput;
    upsert?: BusinessUpsertWithoutUsersInput;
    connect?: BusinessWhereUniqueInput;
    update?: XOR<
      XOR<
        BusinessUpdateToOneWithWhereWithoutUsersInput,
        BusinessUpdateWithoutUsersInput
      >,
      BusinessUncheckedUpdateWithoutUsersInput
    >;
  };

  export type BusinessCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<
      BusinessCreateWithoutCategoriesInput,
      BusinessUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoriesInput;
    connect?: BusinessWhereUniqueInput;
  };

  export type ExpenseCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutCategoryInput,
          ExpenseUncheckedCreateWithoutCategoryInput
        >
      | ExpenseCreateWithoutCategoryInput[]
      | ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutCategoryInput
      | ExpenseCreateOrConnectWithoutCategoryInput[];
    createMany?: ExpenseCreateManyCategoryInputEnvelope;
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
  };

  export type ExpenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutCategoryInput,
          ExpenseUncheckedCreateWithoutCategoryInput
        >
      | ExpenseCreateWithoutCategoryInput[]
      | ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutCategoryInput
      | ExpenseCreateOrConnectWithoutCategoryInput[];
    createMany?: ExpenseCreateManyCategoryInputEnvelope;
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
  };

  export type BusinessUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<
      BusinessCreateWithoutCategoriesInput,
      BusinessUncheckedCreateWithoutCategoriesInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoriesInput;
    upsert?: BusinessUpsertWithoutCategoriesInput;
    connect?: BusinessWhereUniqueInput;
    update?: XOR<
      XOR<
        BusinessUpdateToOneWithWhereWithoutCategoriesInput,
        BusinessUpdateWithoutCategoriesInput
      >,
      BusinessUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type ExpenseUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutCategoryInput,
          ExpenseUncheckedCreateWithoutCategoryInput
        >
      | ExpenseCreateWithoutCategoryInput[]
      | ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutCategoryInput
      | ExpenseCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ExpenseUpsertWithWhereUniqueWithoutCategoryInput
      | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ExpenseCreateManyCategoryInputEnvelope;
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    update?:
      | ExpenseUpdateWithWhereUniqueWithoutCategoryInput
      | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ExpenseUpdateManyWithWhereWithoutCategoryInput
      | ExpenseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[];
  };

  export type ExpenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ExpenseCreateWithoutCategoryInput,
          ExpenseUncheckedCreateWithoutCategoryInput
        >
      | ExpenseCreateWithoutCategoryInput[]
      | ExpenseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ExpenseCreateOrConnectWithoutCategoryInput
      | ExpenseCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ExpenseUpsertWithWhereUniqueWithoutCategoryInput
      | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ExpenseCreateManyCategoryInputEnvelope;
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[];
    update?:
      | ExpenseUpdateWithWhereUniqueWithoutCategoryInput
      | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ExpenseUpdateManyWithWhereWithoutCategoryInput
      | ExpenseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[];
  };

  export type BusinessCreateNestedOneWithoutExpensesInput = {
    create?: XOR<
      BusinessCreateWithoutExpensesInput,
      BusinessUncheckedCreateWithoutExpensesInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutExpensesInput;
    connect?: BusinessWhereUniqueInput;
  };

  export type CategoryCreateNestedOneWithoutExpensesInput = {
    create?: XOR<
      CategoryCreateWithoutExpensesInput,
      CategoryUncheckedCreateWithoutExpensesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EnumExpenseSourceFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseSource;
  };

  export type EnumExpenseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseStatus;
  };

  export type BusinessUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<
      BusinessCreateWithoutExpensesInput,
      BusinessUncheckedCreateWithoutExpensesInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutExpensesInput;
    upsert?: BusinessUpsertWithoutExpensesInput;
    connect?: BusinessWhereUniqueInput;
    update?: XOR<
      XOR<
        BusinessUpdateToOneWithWhereWithoutExpensesInput,
        BusinessUpdateWithoutExpensesInput
      >,
      BusinessUncheckedUpdateWithoutExpensesInput
    >;
  };

  export type CategoryUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<
      CategoryCreateWithoutExpensesInput,
      CategoryUncheckedCreateWithoutExpensesInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput;
    upsert?: CategoryUpsertWithoutExpensesInput;
    disconnect?: CategoryWhereInput | boolean;
    delete?: CategoryWhereInput | boolean;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutExpensesInput,
        CategoryUpdateWithoutExpensesInput
      >,
      CategoryUncheckedUpdateWithoutExpensesInput
    >;
  };

  export type BusinessCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<
      BusinessCreateWithoutInvoicesInput,
      BusinessUncheckedCreateWithoutInvoicesInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutInvoicesInput;
    connect?: BusinessWhereUniqueInput;
  };

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type BusinessUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<
      BusinessCreateWithoutInvoicesInput,
      BusinessUncheckedCreateWithoutInvoicesInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutInvoicesInput;
    upsert?: BusinessUpsertWithoutInvoicesInput;
    connect?: BusinessWhereUniqueInput;
    update?: XOR<
      XOR<
        BusinessUpdateToOneWithWhereWithoutInvoicesInput,
        BusinessUpdateWithoutInvoicesInput
      >,
      BusinessUncheckedUpdateWithoutInvoicesInput
    >;
  };

  export type BusinessCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<
      BusinessCreateWithoutNotificationsInput,
      BusinessUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutNotificationsInput;
    connect?: BusinessWhereUniqueInput;
  };

  export type BusinessUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<
      BusinessCreateWithoutNotificationsInput,
      BusinessUncheckedCreateWithoutNotificationsInput
    >;
    connectOrCreate?: BusinessCreateOrConnectWithoutNotificationsInput;
    upsert?: BusinessUpsertWithoutNotificationsInput;
    connect?: BusinessWhereUniqueInput;
    update?: XOR<
      XOR<
        BusinessUpdateToOneWithWhereWithoutNotificationsInput,
        BusinessUpdateWithoutNotificationsInput
      >,
      BusinessUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumExpenseSourceFilter<$PrismaModel = never> = {
    equals?:
      $Enums.ExpenseSource | EnumExpenseSourceFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    not?: NestedEnumExpenseSourceFilter<$PrismaModel> | $Enums.ExpenseSource;
  };

  export type NestedEnumExpenseStatusFilter<$PrismaModel = never> = {
    equals?:
      $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumExpenseStatusFilter<$PrismaModel> | $Enums.ExpenseStatus;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumExpenseSourceWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      $Enums.ExpenseSource | EnumExpenseSourceFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseSource[] | ListEnumExpenseSourceFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumExpenseSourceWithAggregatesFilter<$PrismaModel>
      | $Enums.ExpenseSource;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumExpenseSourceFilter<$PrismaModel>;
    _max?: NestedEnumExpenseSourceFilter<$PrismaModel>;
  };

  export type NestedEnumExpenseStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ExpenseStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumExpenseStatusFilter<$PrismaModel>;
    _max?: NestedEnumExpenseStatusFilter<$PrismaModel>;
  };

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?:
      $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedEnumInvoiceStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.InvoiceStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type UserCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    email: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUncheckedCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    email: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutBusinessInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutBusinessInput,
      UserUncheckedCreateWithoutBusinessInput
    >;
  };

  export type UserCreateManyBusinessInputEnvelope = {
    data: UserCreateManyBusinessInput | UserCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type CategoryCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryCreateOrConnectWithoutBusinessInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutBusinessInput,
      CategoryUncheckedCreateWithoutBusinessInput
    >;
  };

  export type CategoryCreateManyBusinessInputEnvelope = {
    data: CategoryCreateManyBusinessInput | CategoryCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type ExpenseCreateWithoutBusinessInput = {
    id?: string;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: CategoryCreateNestedOneWithoutExpensesInput;
  };

  export type ExpenseUncheckedCreateWithoutBusinessInput = {
    id?: string;
    categoryId?: string | null;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExpenseCreateOrConnectWithoutBusinessInput = {
    where: ExpenseWhereUniqueInput;
    create: XOR<
      ExpenseCreateWithoutBusinessInput,
      ExpenseUncheckedCreateWithoutBusinessInput
    >;
  };

  export type ExpenseCreateManyBusinessInputEnvelope = {
    data: ExpenseCreateManyBusinessInput | ExpenseCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type InvoiceSiiCreateWithoutBusinessInput = {
    id?: string;
    folio: string;
    supplierRut: string;
    supplierName: string;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: Date | string;
    status?: $Enums.InvoiceStatus;
    actionReason?: string | null;
    actionAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceSiiUncheckedCreateWithoutBusinessInput = {
    id?: string;
    folio: string;
    supplierRut: string;
    supplierName: string;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: Date | string;
    status?: $Enums.InvoiceStatus;
    actionReason?: string | null;
    actionAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceSiiCreateOrConnectWithoutBusinessInput = {
    where: InvoiceSiiWhereUniqueInput;
    create: XOR<
      InvoiceSiiCreateWithoutBusinessInput,
      InvoiceSiiUncheckedCreateWithoutBusinessInput
    >;
  };

  export type InvoiceSiiCreateManyBusinessInputEnvelope = {
    data:
      InvoiceSiiCreateManyBusinessInput | InvoiceSiiCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type NotificationCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    message: string;
    type: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationUncheckedCreateWithoutBusinessInput = {
    id?: string;
    title: string;
    message: string;
    type: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type NotificationCreateOrConnectWithoutBusinessInput = {
    where: NotificationWhereUniqueInput;
    create: XOR<
      NotificationCreateWithoutBusinessInput,
      NotificationUncheckedCreateWithoutBusinessInput
    >;
  };

  export type NotificationCreateManyBusinessInputEnvelope = {
    data:
      | NotificationCreateManyBusinessInput
      | NotificationCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutBusinessInput,
      UserUncheckedUpdateWithoutBusinessInput
    >;
    create: XOR<
      UserCreateWithoutBusinessInput,
      UserUncheckedCreateWithoutBusinessInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutBusinessInput,
      UserUncheckedUpdateWithoutBusinessInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutBusinessInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutBusinessInput
    >;
  };

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput | UserScalarWhereInput[];
    id?: StringFilter<'User'> | string;
    businessId?: StringFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    role?: StringFilter<'User'> | string;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
  };

  export type CategoryUpsertWithWhereUniqueWithoutBusinessInput = {
    where: CategoryWhereUniqueInput;
    update: XOR<
      CategoryUpdateWithoutBusinessInput,
      CategoryUncheckedUpdateWithoutBusinessInput
    >;
    create: XOR<
      CategoryCreateWithoutBusinessInput,
      CategoryUncheckedCreateWithoutBusinessInput
    >;
  };

  export type CategoryUpdateWithWhereUniqueWithoutBusinessInput = {
    where: CategoryWhereUniqueInput;
    data: XOR<
      CategoryUpdateWithoutBusinessInput,
      CategoryUncheckedUpdateWithoutBusinessInput
    >;
  };

  export type CategoryUpdateManyWithWhereWithoutBusinessInput = {
    where: CategoryScalarWhereInput;
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyWithoutBusinessInput
    >;
  };

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
    OR?: CategoryScalarWhereInput[];
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[];
    id?: StringFilter<'Category'> | string;
    businessId?: StringFilter<'Category'> | string;
    name?: StringFilter<'Category'> | string;
    createdAt?: DateTimeFilter<'Category'> | Date | string;
    updatedAt?: DateTimeFilter<'Category'> | Date | string;
  };

  export type ExpenseUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ExpenseWhereUniqueInput;
    update: XOR<
      ExpenseUpdateWithoutBusinessInput,
      ExpenseUncheckedUpdateWithoutBusinessInput
    >;
    create: XOR<
      ExpenseCreateWithoutBusinessInput,
      ExpenseUncheckedCreateWithoutBusinessInput
    >;
  };

  export type ExpenseUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ExpenseWhereUniqueInput;
    data: XOR<
      ExpenseUpdateWithoutBusinessInput,
      ExpenseUncheckedUpdateWithoutBusinessInput
    >;
  };

  export type ExpenseUpdateManyWithWhereWithoutBusinessInput = {
    where: ExpenseScalarWhereInput;
    data: XOR<
      ExpenseUpdateManyMutationInput,
      ExpenseUncheckedUpdateManyWithoutBusinessInput
    >;
  };

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[];
    OR?: ExpenseScalarWhereInput[];
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[];
    id?: StringFilter<'Expense'> | string;
    businessId?: StringFilter<'Expense'> | string;
    categoryId?: StringNullableFilter<'Expense'> | string | null;
    amountTotal?: IntFilter<'Expense'> | number;
    amountNet?: IntNullableFilter<'Expense'> | number | null;
    amountVat?: IntNullableFilter<'Expense'> | number | null;
    issueDate?: DateTimeFilter<'Expense'> | Date | string;
    supplierRut?: StringNullableFilter<'Expense'> | string | null;
    supplierName?: StringNullableFilter<'Expense'> | string | null;
    description?: StringNullableFilter<'Expense'> | string | null;
    documentUrl?: StringNullableFilter<'Expense'> | string | null;
    isManual?: BoolFilter<'Expense'> | boolean;
    source?: EnumExpenseSourceFilter<'Expense'> | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFilter<'Expense'> | $Enums.ExpenseStatus;
    createdAt?: DateTimeFilter<'Expense'> | Date | string;
    updatedAt?: DateTimeFilter<'Expense'> | Date | string;
  };

  export type InvoiceSiiUpsertWithWhereUniqueWithoutBusinessInput = {
    where: InvoiceSiiWhereUniqueInput;
    update: XOR<
      InvoiceSiiUpdateWithoutBusinessInput,
      InvoiceSiiUncheckedUpdateWithoutBusinessInput
    >;
    create: XOR<
      InvoiceSiiCreateWithoutBusinessInput,
      InvoiceSiiUncheckedCreateWithoutBusinessInput
    >;
  };

  export type InvoiceSiiUpdateWithWhereUniqueWithoutBusinessInput = {
    where: InvoiceSiiWhereUniqueInput;
    data: XOR<
      InvoiceSiiUpdateWithoutBusinessInput,
      InvoiceSiiUncheckedUpdateWithoutBusinessInput
    >;
  };

  export type InvoiceSiiUpdateManyWithWhereWithoutBusinessInput = {
    where: InvoiceSiiScalarWhereInput;
    data: XOR<
      InvoiceSiiUpdateManyMutationInput,
      InvoiceSiiUncheckedUpdateManyWithoutBusinessInput
    >;
  };

  export type InvoiceSiiScalarWhereInput = {
    AND?: InvoiceSiiScalarWhereInput | InvoiceSiiScalarWhereInput[];
    OR?: InvoiceSiiScalarWhereInput[];
    NOT?: InvoiceSiiScalarWhereInput | InvoiceSiiScalarWhereInput[];
    id?: StringFilter<'InvoiceSii'> | string;
    businessId?: StringFilter<'InvoiceSii'> | string;
    folio?: StringFilter<'InvoiceSii'> | string;
    supplierRut?: StringFilter<'InvoiceSii'> | string;
    supplierName?: StringFilter<'InvoiceSii'> | string;
    amountNet?: IntFilter<'InvoiceSii'> | number;
    amountVat?: IntFilter<'InvoiceSii'> | number;
    amountTotal?: IntFilter<'InvoiceSii'> | number;
    receivedAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
    status?: EnumInvoiceStatusFilter<'InvoiceSii'> | $Enums.InvoiceStatus;
    actionReason?: StringNullableFilter<'InvoiceSii'> | string | null;
    actionAt?: DateTimeNullableFilter<'InvoiceSii'> | Date | string | null;
    createdAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
    updatedAt?: DateTimeFilter<'InvoiceSii'> | Date | string;
  };

  export type NotificationUpsertWithWhereUniqueWithoutBusinessInput = {
    where: NotificationWhereUniqueInput;
    update: XOR<
      NotificationUpdateWithoutBusinessInput,
      NotificationUncheckedUpdateWithoutBusinessInput
    >;
    create: XOR<
      NotificationCreateWithoutBusinessInput,
      NotificationUncheckedCreateWithoutBusinessInput
    >;
  };

  export type NotificationUpdateWithWhereUniqueWithoutBusinessInput = {
    where: NotificationWhereUniqueInput;
    data: XOR<
      NotificationUpdateWithoutBusinessInput,
      NotificationUncheckedUpdateWithoutBusinessInput
    >;
  };

  export type NotificationUpdateManyWithWhereWithoutBusinessInput = {
    where: NotificationScalarWhereInput;
    data: XOR<
      NotificationUpdateManyMutationInput,
      NotificationUncheckedUpdateManyWithoutBusinessInput
    >;
  };

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    OR?: NotificationScalarWhereInput[];
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[];
    id?: StringFilter<'Notification'> | string;
    businessId?: StringFilter<'Notification'> | string;
    title?: StringFilter<'Notification'> | string;
    message?: StringFilter<'Notification'> | string;
    type?: StringFilter<'Notification'> | string;
    read?: BoolFilter<'Notification'> | boolean;
    createdAt?: DateTimeFilter<'Notification'> | Date | string;
  };

  export type BusinessCreateWithoutUsersInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categories?: CategoryCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categories?: CategoryUncheckedCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiUncheckedCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessCreateOrConnectWithoutUsersInput = {
    where: BusinessWhereUniqueInput;
    create: XOR<
      BusinessCreateWithoutUsersInput,
      BusinessUncheckedCreateWithoutUsersInput
    >;
  };

  export type BusinessUpsertWithoutUsersInput = {
    update: XOR<
      BusinessUpdateWithoutUsersInput,
      BusinessUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      BusinessCreateWithoutUsersInput,
      BusinessUncheckedCreateWithoutUsersInput
    >;
    where?: BusinessWhereInput;
  };

  export type BusinessUpdateToOneWithWhereWithoutUsersInput = {
    where?: BusinessWhereInput;
    data: XOR<
      BusinessUpdateWithoutUsersInput,
      BusinessUncheckedUpdateWithoutUsersInput
    >;
  };

  export type BusinessUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: CategoryUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: CategoryUncheckedUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUncheckedUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiUncheckedCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessCreateOrConnectWithoutCategoriesInput = {
    where: BusinessWhereUniqueInput;
    create: XOR<
      BusinessCreateWithoutCategoriesInput,
      BusinessUncheckedCreateWithoutCategoriesInput
    >;
  };

  export type ExpenseCreateWithoutCategoryInput = {
    id?: string;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: BusinessCreateNestedOneWithoutExpensesInput;
  };

  export type ExpenseUncheckedCreateWithoutCategoryInput = {
    id?: string;
    businessId: string;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExpenseCreateOrConnectWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput;
    create: XOR<
      ExpenseCreateWithoutCategoryInput,
      ExpenseUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ExpenseCreateManyCategoryInputEnvelope = {
    data: ExpenseCreateManyCategoryInput | ExpenseCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type BusinessUpsertWithoutCategoriesInput = {
    update: XOR<
      BusinessUpdateWithoutCategoriesInput,
      BusinessUncheckedUpdateWithoutCategoriesInput
    >;
    create: XOR<
      BusinessCreateWithoutCategoriesInput,
      BusinessUncheckedCreateWithoutCategoriesInput
    >;
    where?: BusinessWhereInput;
  };

  export type BusinessUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BusinessWhereInput;
    data: XOR<
      BusinessUpdateWithoutCategoriesInput,
      BusinessUncheckedUpdateWithoutCategoriesInput
    >;
  };

  export type BusinessUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUncheckedUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type ExpenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput;
    update: XOR<
      ExpenseUpdateWithoutCategoryInput,
      ExpenseUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      ExpenseCreateWithoutCategoryInput,
      ExpenseUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ExpenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput;
    data: XOR<
      ExpenseUpdateWithoutCategoryInput,
      ExpenseUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type ExpenseUpdateManyWithWhereWithoutCategoryInput = {
    where: ExpenseScalarWhereInput;
    data: XOR<
      ExpenseUpdateManyMutationInput,
      ExpenseUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type BusinessCreateWithoutExpensesInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutBusinessInput;
    categories?: CategoryCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessUncheckedCreateWithoutExpensesInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput;
    categories?: CategoryUncheckedCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiUncheckedCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessCreateOrConnectWithoutExpensesInput = {
    where: BusinessWhereUniqueInput;
    create: XOR<
      BusinessCreateWithoutExpensesInput,
      BusinessUncheckedCreateWithoutExpensesInput
    >;
  };

  export type CategoryCreateWithoutExpensesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    business: BusinessCreateNestedOneWithoutCategoriesInput;
  };

  export type CategoryUncheckedCreateWithoutExpensesInput = {
    id?: string;
    businessId: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CategoryCreateOrConnectWithoutExpensesInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutExpensesInput,
      CategoryUncheckedCreateWithoutExpensesInput
    >;
  };

  export type BusinessUpsertWithoutExpensesInput = {
    update: XOR<
      BusinessUpdateWithoutExpensesInput,
      BusinessUncheckedUpdateWithoutExpensesInput
    >;
    create: XOR<
      BusinessCreateWithoutExpensesInput,
      BusinessUncheckedCreateWithoutExpensesInput
    >;
    where?: BusinessWhereInput;
  };

  export type BusinessUpdateToOneWithWhereWithoutExpensesInput = {
    where?: BusinessWhereInput;
    data: XOR<
      BusinessUpdateWithoutExpensesInput,
      BusinessUncheckedUpdateWithoutExpensesInput
    >;
  };

  export type BusinessUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUncheckedUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUncheckedUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type CategoryUpsertWithoutExpensesInput = {
    update: XOR<
      CategoryUpdateWithoutExpensesInput,
      CategoryUncheckedUpdateWithoutExpensesInput
    >;
    create: XOR<
      CategoryCreateWithoutExpensesInput,
      CategoryUncheckedCreateWithoutExpensesInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutExpensesInput,
      CategoryUncheckedUpdateWithoutExpensesInput
    >;
  };

  export type CategoryUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: BusinessUpdateOneRequiredWithoutCategoriesNestedInput;
  };

  export type CategoryUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BusinessCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutBusinessInput;
    categories?: CategoryCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput;
    categories?: CategoryUncheckedCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput;
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessCreateOrConnectWithoutInvoicesInput = {
    where: BusinessWhereUniqueInput;
    create: XOR<
      BusinessCreateWithoutInvoicesInput,
      BusinessUncheckedCreateWithoutInvoicesInput
    >;
  };

  export type BusinessUpsertWithoutInvoicesInput = {
    update: XOR<
      BusinessUpdateWithoutInvoicesInput,
      BusinessUncheckedUpdateWithoutInvoicesInput
    >;
    create: XOR<
      BusinessCreateWithoutInvoicesInput,
      BusinessUncheckedCreateWithoutInvoicesInput
    >;
    where?: BusinessWhereInput;
  };

  export type BusinessUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: BusinessWhereInput;
    data: XOR<
      BusinessUpdateWithoutInvoicesInput,
      BusinessUncheckedUpdateWithoutInvoicesInput
    >;
  };

  export type BusinessUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUncheckedUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput;
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutBusinessInput;
    categories?: CategoryCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    rut: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput;
    categories?: CategoryUncheckedCreateNestedManyWithoutBusinessInput;
    expenses?: ExpenseUncheckedCreateNestedManyWithoutBusinessInput;
    invoices?: InvoiceSiiUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type BusinessCreateOrConnectWithoutNotificationsInput = {
    where: BusinessWhereUniqueInput;
    create: XOR<
      BusinessCreateWithoutNotificationsInput,
      BusinessUncheckedCreateWithoutNotificationsInput
    >;
  };

  export type BusinessUpsertWithoutNotificationsInput = {
    update: XOR<
      BusinessUpdateWithoutNotificationsInput,
      BusinessUncheckedUpdateWithoutNotificationsInput
    >;
    create: XOR<
      BusinessCreateWithoutNotificationsInput,
      BusinessUncheckedCreateWithoutNotificationsInput
    >;
    where?: BusinessWhereInput;
  };

  export type BusinessUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: BusinessWhereInput;
    data: XOR<
      BusinessUpdateWithoutNotificationsInput,
      BusinessUncheckedUpdateWithoutNotificationsInput
    >;
  };

  export type BusinessUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUpdateManyWithoutBusinessNestedInput;
  };

  export type BusinessUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    rut?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput;
    categories?: CategoryUncheckedUpdateManyWithoutBusinessNestedInput;
    expenses?: ExpenseUncheckedUpdateManyWithoutBusinessNestedInput;
    invoices?: InvoiceSiiUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type UserCreateManyBusinessInput = {
    id?: string;
    name: string;
    email: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CategoryCreateManyBusinessInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExpenseCreateManyBusinessInput = {
    id?: string;
    categoryId?: string | null;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceSiiCreateManyBusinessInput = {
    id?: string;
    folio: string;
    supplierRut: string;
    supplierName: string;
    amountNet: number;
    amountVat: number;
    amountTotal: number;
    receivedAt: Date | string;
    status?: $Enums.InvoiceStatus;
    actionReason?: string | null;
    actionAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NotificationCreateManyBusinessInput = {
    id?: string;
    title: string;
    message: string;
    type: string;
    read?: boolean;
    createdAt?: Date | string;
  };

  export type UserUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExpenseUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneWithoutExpensesNestedInput;
  };

  export type ExpenseUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExpenseUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceSiiUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    folio?: StringFieldUpdateOperationsInput | string;
    supplierRut?: StringFieldUpdateOperationsInput | string;
    supplierName?: StringFieldUpdateOperationsInput | string;
    amountNet?: IntFieldUpdateOperationsInput | number;
    amountVat?: IntFieldUpdateOperationsInput | number;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    actionReason?: NullableStringFieldUpdateOperationsInput | string | null;
    actionAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceSiiUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    folio?: StringFieldUpdateOperationsInput | string;
    supplierRut?: StringFieldUpdateOperationsInput | string;
    supplierName?: StringFieldUpdateOperationsInput | string;
    amountNet?: IntFieldUpdateOperationsInput | number;
    amountVat?: IntFieldUpdateOperationsInput | number;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    actionReason?: NullableStringFieldUpdateOperationsInput | string | null;
    actionAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceSiiUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    folio?: StringFieldUpdateOperationsInput | string;
    supplierRut?: StringFieldUpdateOperationsInput | string;
    supplierName?: StringFieldUpdateOperationsInput | string;
    amountNet?: IntFieldUpdateOperationsInput | number;
    amountVat?: IntFieldUpdateOperationsInput | number;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    actionReason?: NullableStringFieldUpdateOperationsInput | string | null;
    actionAt?:
      NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NotificationUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    read?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExpenseCreateManyCategoryInput = {
    id?: string;
    businessId: string;
    amountTotal: number;
    amountNet?: number | null;
    amountVat?: number | null;
    issueDate: Date | string;
    supplierRut?: string | null;
    supplierName?: string | null;
    description?: string | null;
    documentUrl?: string | null;
    isManual?: boolean;
    source?: $Enums.ExpenseSource;
    status?: $Enums.ExpenseStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExpenseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: BusinessUpdateOneRequiredWithoutExpensesNestedInput;
  };

  export type ExpenseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExpenseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    businessId?: StringFieldUpdateOperationsInput | string;
    amountTotal?: IntFieldUpdateOperationsInput | number;
    amountNet?: NullableIntFieldUpdateOperationsInput | number | null;
    amountVat?: NullableIntFieldUpdateOperationsInput | number | null;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    supplierRut?: NullableStringFieldUpdateOperationsInput | string | null;
    supplierName?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    isManual?: BoolFieldUpdateOperationsInput | boolean;
    source?: EnumExpenseSourceFieldUpdateOperationsInput | $Enums.ExpenseSource;
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
