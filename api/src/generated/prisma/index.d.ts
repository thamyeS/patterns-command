
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Luz
 * 
 */
export type Luz = $Result.DefaultSelection<Prisma.$LuzPayload>
/**
 * Model Comando
 * 
 */
export type Comando = $Result.DefaultSelection<Prisma.$ComandoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.luz`: Exposes CRUD operations for the **Luz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luzs
    * const luzs = await prisma.luz.findMany()
    * ```
    */
  get luz(): Prisma.LuzDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comando`: Exposes CRUD operations for the **Comando** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comandos
    * const comandos = await prisma.comando.findMany()
    * ```
    */
  get comando(): Prisma.ComandoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Luz: 'Luz',
    Comando: 'Comando'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "luz" | "comando"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Luz: {
        payload: Prisma.$LuzPayload<ExtArgs>
        fields: Prisma.LuzFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LuzFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LuzFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload>
          }
          findFirst: {
            args: Prisma.LuzFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LuzFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload>
          }
          findMany: {
            args: Prisma.LuzFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload>[]
          }
          create: {
            args: Prisma.LuzCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload>
          }
          createMany: {
            args: Prisma.LuzCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LuzDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload>
          }
          update: {
            args: Prisma.LuzUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload>
          }
          deleteMany: {
            args: Prisma.LuzDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LuzUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LuzUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuzPayload>
          }
          aggregate: {
            args: Prisma.LuzAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLuz>
          }
          groupBy: {
            args: Prisma.LuzGroupByArgs<ExtArgs>
            result: $Utils.Optional<LuzGroupByOutputType>[]
          }
          count: {
            args: Prisma.LuzCountArgs<ExtArgs>
            result: $Utils.Optional<LuzCountAggregateOutputType> | number
          }
        }
      }
      Comando: {
        payload: Prisma.$ComandoPayload<ExtArgs>
        fields: Prisma.ComandoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComandoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComandoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload>
          }
          findFirst: {
            args: Prisma.ComandoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComandoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload>
          }
          findMany: {
            args: Prisma.ComandoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload>[]
          }
          create: {
            args: Prisma.ComandoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload>
          }
          createMany: {
            args: Prisma.ComandoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComandoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload>
          }
          update: {
            args: Prisma.ComandoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload>
          }
          deleteMany: {
            args: Prisma.ComandoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComandoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComandoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComandoPayload>
          }
          aggregate: {
            args: Prisma.ComandoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComando>
          }
          groupBy: {
            args: Prisma.ComandoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComandoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComandoCountArgs<ExtArgs>
            result: $Utils.Optional<ComandoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    luz?: LuzOmit
    comando?: ComandoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    comandos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comandos?: boolean | UsuarioCountOutputTypeCountComandosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComandosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandoWhereInput
  }


  /**
   * Count Type LuzCountOutputType
   */

  export type LuzCountOutputType = {
    comandos: number
  }

  export type LuzCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comandos?: boolean | LuzCountOutputTypeCountComandosArgs
  }

  // Custom InputTypes
  /**
   * LuzCountOutputType without action
   */
  export type LuzCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuzCountOutputType
     */
    select?: LuzCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LuzCountOutputType without action
   */
  export type LuzCountOutputTypeCountComandosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    comandos?: boolean | Usuario$comandosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comandos?: boolean | Usuario$comandosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      comandos: Prisma.$ComandoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comandos<T extends Usuario$comandosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comandosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.comandos
   */
  export type Usuario$comandosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    where?: ComandoWhereInput
    orderBy?: ComandoOrderByWithRelationInput | ComandoOrderByWithRelationInput[]
    cursor?: ComandoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComandoScalarFieldEnum | ComandoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Luz
   */

  export type AggregateLuz = {
    _count: LuzCountAggregateOutputType | null
    _avg: LuzAvgAggregateOutputType | null
    _sum: LuzSumAggregateOutputType | null
    _min: LuzMinAggregateOutputType | null
    _max: LuzMaxAggregateOutputType | null
  }

  export type LuzAvgAggregateOutputType = {
    id: number | null
  }

  export type LuzSumAggregateOutputType = {
    id: number | null
  }

  export type LuzMinAggregateOutputType = {
    id: number | null
    nome: string | null
    estado: boolean | null
  }

  export type LuzMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    estado: boolean | null
  }

  export type LuzCountAggregateOutputType = {
    id: number
    nome: number
    estado: number
    _all: number
  }


  export type LuzAvgAggregateInputType = {
    id?: true
  }

  export type LuzSumAggregateInputType = {
    id?: true
  }

  export type LuzMinAggregateInputType = {
    id?: true
    nome?: true
    estado?: true
  }

  export type LuzMaxAggregateInputType = {
    id?: true
    nome?: true
    estado?: true
  }

  export type LuzCountAggregateInputType = {
    id?: true
    nome?: true
    estado?: true
    _all?: true
  }

  export type LuzAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Luz to aggregate.
     */
    where?: LuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Luzs to fetch.
     */
    orderBy?: LuzOrderByWithRelationInput | LuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Luzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Luzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Luzs
    **/
    _count?: true | LuzCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LuzAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LuzSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LuzMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LuzMaxAggregateInputType
  }

  export type GetLuzAggregateType<T extends LuzAggregateArgs> = {
        [P in keyof T & keyof AggregateLuz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuz[P]>
      : GetScalarType<T[P], AggregateLuz[P]>
  }




  export type LuzGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LuzWhereInput
    orderBy?: LuzOrderByWithAggregationInput | LuzOrderByWithAggregationInput[]
    by: LuzScalarFieldEnum[] | LuzScalarFieldEnum
    having?: LuzScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LuzCountAggregateInputType | true
    _avg?: LuzAvgAggregateInputType
    _sum?: LuzSumAggregateInputType
    _min?: LuzMinAggregateInputType
    _max?: LuzMaxAggregateInputType
  }

  export type LuzGroupByOutputType = {
    id: number
    nome: string
    estado: boolean
    _count: LuzCountAggregateOutputType | null
    _avg: LuzAvgAggregateOutputType | null
    _sum: LuzSumAggregateOutputType | null
    _min: LuzMinAggregateOutputType | null
    _max: LuzMaxAggregateOutputType | null
  }

  type GetLuzGroupByPayload<T extends LuzGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LuzGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LuzGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LuzGroupByOutputType[P]>
            : GetScalarType<T[P], LuzGroupByOutputType[P]>
        }
      >
    >


  export type LuzSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    estado?: boolean
    comandos?: boolean | Luz$comandosArgs<ExtArgs>
    _count?: boolean | LuzCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["luz"]>



  export type LuzSelectScalar = {
    id?: boolean
    nome?: boolean
    estado?: boolean
  }

  export type LuzOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "estado", ExtArgs["result"]["luz"]>
  export type LuzInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comandos?: boolean | Luz$comandosArgs<ExtArgs>
    _count?: boolean | LuzCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LuzPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Luz"
    objects: {
      comandos: Prisma.$ComandoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      estado: boolean
    }, ExtArgs["result"]["luz"]>
    composites: {}
  }

  type LuzGetPayload<S extends boolean | null | undefined | LuzDefaultArgs> = $Result.GetResult<Prisma.$LuzPayload, S>

  type LuzCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LuzFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LuzCountAggregateInputType | true
    }

  export interface LuzDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Luz'], meta: { name: 'Luz' } }
    /**
     * Find zero or one Luz that matches the filter.
     * @param {LuzFindUniqueArgs} args - Arguments to find a Luz
     * @example
     * // Get one Luz
     * const luz = await prisma.luz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LuzFindUniqueArgs>(args: SelectSubset<T, LuzFindUniqueArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Luz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LuzFindUniqueOrThrowArgs} args - Arguments to find a Luz
     * @example
     * // Get one Luz
     * const luz = await prisma.luz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LuzFindUniqueOrThrowArgs>(args: SelectSubset<T, LuzFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Luz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuzFindFirstArgs} args - Arguments to find a Luz
     * @example
     * // Get one Luz
     * const luz = await prisma.luz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LuzFindFirstArgs>(args?: SelectSubset<T, LuzFindFirstArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Luz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuzFindFirstOrThrowArgs} args - Arguments to find a Luz
     * @example
     * // Get one Luz
     * const luz = await prisma.luz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LuzFindFirstOrThrowArgs>(args?: SelectSubset<T, LuzFindFirstOrThrowArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Luzs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuzFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luzs
     * const luzs = await prisma.luz.findMany()
     * 
     * // Get first 10 Luzs
     * const luzs = await prisma.luz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const luzWithIdOnly = await prisma.luz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LuzFindManyArgs>(args?: SelectSubset<T, LuzFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Luz.
     * @param {LuzCreateArgs} args - Arguments to create a Luz.
     * @example
     * // Create one Luz
     * const Luz = await prisma.luz.create({
     *   data: {
     *     // ... data to create a Luz
     *   }
     * })
     * 
     */
    create<T extends LuzCreateArgs>(args: SelectSubset<T, LuzCreateArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Luzs.
     * @param {LuzCreateManyArgs} args - Arguments to create many Luzs.
     * @example
     * // Create many Luzs
     * const luz = await prisma.luz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LuzCreateManyArgs>(args?: SelectSubset<T, LuzCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luz.
     * @param {LuzDeleteArgs} args - Arguments to delete one Luz.
     * @example
     * // Delete one Luz
     * const Luz = await prisma.luz.delete({
     *   where: {
     *     // ... filter to delete one Luz
     *   }
     * })
     * 
     */
    delete<T extends LuzDeleteArgs>(args: SelectSubset<T, LuzDeleteArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Luz.
     * @param {LuzUpdateArgs} args - Arguments to update one Luz.
     * @example
     * // Update one Luz
     * const luz = await prisma.luz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LuzUpdateArgs>(args: SelectSubset<T, LuzUpdateArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Luzs.
     * @param {LuzDeleteManyArgs} args - Arguments to filter Luzs to delete.
     * @example
     * // Delete a few Luzs
     * const { count } = await prisma.luz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LuzDeleteManyArgs>(args?: SelectSubset<T, LuzDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuzUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luzs
     * const luz = await prisma.luz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LuzUpdateManyArgs>(args: SelectSubset<T, LuzUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luz.
     * @param {LuzUpsertArgs} args - Arguments to update or create a Luz.
     * @example
     * // Update or create a Luz
     * const luz = await prisma.luz.upsert({
     *   create: {
     *     // ... data to create a Luz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luz we want to update
     *   }
     * })
     */
    upsert<T extends LuzUpsertArgs>(args: SelectSubset<T, LuzUpsertArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Luzs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuzCountArgs} args - Arguments to filter Luzs to count.
     * @example
     * // Count the number of Luzs
     * const count = await prisma.luz.count({
     *   where: {
     *     // ... the filter for the Luzs we want to count
     *   }
     * })
    **/
    count<T extends LuzCountArgs>(
      args?: Subset<T, LuzCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LuzCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuzAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LuzAggregateArgs>(args: Subset<T, LuzAggregateArgs>): Prisma.PrismaPromise<GetLuzAggregateType<T>>

    /**
     * Group by Luz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuzGroupByArgs} args - Group by arguments.
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
      T extends LuzGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LuzGroupByArgs['orderBy'] }
        : { orderBy?: LuzGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LuzGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuzGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Luz model
   */
  readonly fields: LuzFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Luz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LuzClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comandos<T extends Luz$comandosArgs<ExtArgs> = {}>(args?: Subset<T, Luz$comandosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Luz model
   */
  interface LuzFieldRefs {
    readonly id: FieldRef<"Luz", 'Int'>
    readonly nome: FieldRef<"Luz", 'String'>
    readonly estado: FieldRef<"Luz", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Luz findUnique
   */
  export type LuzFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * Filter, which Luz to fetch.
     */
    where: LuzWhereUniqueInput
  }

  /**
   * Luz findUniqueOrThrow
   */
  export type LuzFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * Filter, which Luz to fetch.
     */
    where: LuzWhereUniqueInput
  }

  /**
   * Luz findFirst
   */
  export type LuzFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * Filter, which Luz to fetch.
     */
    where?: LuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Luzs to fetch.
     */
    orderBy?: LuzOrderByWithRelationInput | LuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Luzs.
     */
    cursor?: LuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Luzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Luzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Luzs.
     */
    distinct?: LuzScalarFieldEnum | LuzScalarFieldEnum[]
  }

  /**
   * Luz findFirstOrThrow
   */
  export type LuzFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * Filter, which Luz to fetch.
     */
    where?: LuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Luzs to fetch.
     */
    orderBy?: LuzOrderByWithRelationInput | LuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Luzs.
     */
    cursor?: LuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Luzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Luzs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Luzs.
     */
    distinct?: LuzScalarFieldEnum | LuzScalarFieldEnum[]
  }

  /**
   * Luz findMany
   */
  export type LuzFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * Filter, which Luzs to fetch.
     */
    where?: LuzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Luzs to fetch.
     */
    orderBy?: LuzOrderByWithRelationInput | LuzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Luzs.
     */
    cursor?: LuzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Luzs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Luzs.
     */
    skip?: number
    distinct?: LuzScalarFieldEnum | LuzScalarFieldEnum[]
  }

  /**
   * Luz create
   */
  export type LuzCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * The data needed to create a Luz.
     */
    data: XOR<LuzCreateInput, LuzUncheckedCreateInput>
  }

  /**
   * Luz createMany
   */
  export type LuzCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Luzs.
     */
    data: LuzCreateManyInput | LuzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Luz update
   */
  export type LuzUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * The data needed to update a Luz.
     */
    data: XOR<LuzUpdateInput, LuzUncheckedUpdateInput>
    /**
     * Choose, which Luz to update.
     */
    where: LuzWhereUniqueInput
  }

  /**
   * Luz updateMany
   */
  export type LuzUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Luzs.
     */
    data: XOR<LuzUpdateManyMutationInput, LuzUncheckedUpdateManyInput>
    /**
     * Filter which Luzs to update
     */
    where?: LuzWhereInput
    /**
     * Limit how many Luzs to update.
     */
    limit?: number
  }

  /**
   * Luz upsert
   */
  export type LuzUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * The filter to search for the Luz to update in case it exists.
     */
    where: LuzWhereUniqueInput
    /**
     * In case the Luz found by the `where` argument doesn't exist, create a new Luz with this data.
     */
    create: XOR<LuzCreateInput, LuzUncheckedCreateInput>
    /**
     * In case the Luz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LuzUpdateInput, LuzUncheckedUpdateInput>
  }

  /**
   * Luz delete
   */
  export type LuzDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
    /**
     * Filter which Luz to delete.
     */
    where: LuzWhereUniqueInput
  }

  /**
   * Luz deleteMany
   */
  export type LuzDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Luzs to delete
     */
    where?: LuzWhereInput
    /**
     * Limit how many Luzs to delete.
     */
    limit?: number
  }

  /**
   * Luz.comandos
   */
  export type Luz$comandosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    where?: ComandoWhereInput
    orderBy?: ComandoOrderByWithRelationInput | ComandoOrderByWithRelationInput[]
    cursor?: ComandoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComandoScalarFieldEnum | ComandoScalarFieldEnum[]
  }

  /**
   * Luz without action
   */
  export type LuzDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Luz
     */
    select?: LuzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Luz
     */
    omit?: LuzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuzInclude<ExtArgs> | null
  }


  /**
   * Model Comando
   */

  export type AggregateComando = {
    _count: ComandoCountAggregateOutputType | null
    _avg: ComandoAvgAggregateOutputType | null
    _sum: ComandoSumAggregateOutputType | null
    _min: ComandoMinAggregateOutputType | null
    _max: ComandoMaxAggregateOutputType | null
  }

  export type ComandoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    luzId: number | null
  }

  export type ComandoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    luzId: number | null
  }

  export type ComandoMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    criadoEm: Date | null
    usuarioId: number | null
    luzId: number | null
    desfazido: boolean | null
  }

  export type ComandoMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    criadoEm: Date | null
    usuarioId: number | null
    luzId: number | null
    desfazido: boolean | null
  }

  export type ComandoCountAggregateOutputType = {
    id: number
    tipo: number
    criadoEm: number
    usuarioId: number
    luzId: number
    desfazido: number
    _all: number
  }


  export type ComandoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    luzId?: true
  }

  export type ComandoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    luzId?: true
  }

  export type ComandoMinAggregateInputType = {
    id?: true
    tipo?: true
    criadoEm?: true
    usuarioId?: true
    luzId?: true
    desfazido?: true
  }

  export type ComandoMaxAggregateInputType = {
    id?: true
    tipo?: true
    criadoEm?: true
    usuarioId?: true
    luzId?: true
    desfazido?: true
  }

  export type ComandoCountAggregateInputType = {
    id?: true
    tipo?: true
    criadoEm?: true
    usuarioId?: true
    luzId?: true
    desfazido?: true
    _all?: true
  }

  export type ComandoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comando to aggregate.
     */
    where?: ComandoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandos to fetch.
     */
    orderBy?: ComandoOrderByWithRelationInput | ComandoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComandoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comandos
    **/
    _count?: true | ComandoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComandoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComandoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComandoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComandoMaxAggregateInputType
  }

  export type GetComandoAggregateType<T extends ComandoAggregateArgs> = {
        [P in keyof T & keyof AggregateComando]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComando[P]>
      : GetScalarType<T[P], AggregateComando[P]>
  }




  export type ComandoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComandoWhereInput
    orderBy?: ComandoOrderByWithAggregationInput | ComandoOrderByWithAggregationInput[]
    by: ComandoScalarFieldEnum[] | ComandoScalarFieldEnum
    having?: ComandoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComandoCountAggregateInputType | true
    _avg?: ComandoAvgAggregateInputType
    _sum?: ComandoSumAggregateInputType
    _min?: ComandoMinAggregateInputType
    _max?: ComandoMaxAggregateInputType
  }

  export type ComandoGroupByOutputType = {
    id: number
    tipo: string
    criadoEm: Date
    usuarioId: number
    luzId: number
    desfazido: boolean
    _count: ComandoCountAggregateOutputType | null
    _avg: ComandoAvgAggregateOutputType | null
    _sum: ComandoSumAggregateOutputType | null
    _min: ComandoMinAggregateOutputType | null
    _max: ComandoMaxAggregateOutputType | null
  }

  type GetComandoGroupByPayload<T extends ComandoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComandoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComandoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComandoGroupByOutputType[P]>
            : GetScalarType<T[P], ComandoGroupByOutputType[P]>
        }
      >
    >


  export type ComandoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    luzId?: boolean
    desfazido?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    luz?: boolean | LuzDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comando"]>



  export type ComandoSelectScalar = {
    id?: boolean
    tipo?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    luzId?: boolean
    desfazido?: boolean
  }

  export type ComandoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "criadoEm" | "usuarioId" | "luzId" | "desfazido", ExtArgs["result"]["comando"]>
  export type ComandoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    luz?: boolean | LuzDefaultArgs<ExtArgs>
  }

  export type $ComandoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comando"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      luz: Prisma.$LuzPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      criadoEm: Date
      usuarioId: number
      luzId: number
      desfazido: boolean
    }, ExtArgs["result"]["comando"]>
    composites: {}
  }

  type ComandoGetPayload<S extends boolean | null | undefined | ComandoDefaultArgs> = $Result.GetResult<Prisma.$ComandoPayload, S>

  type ComandoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComandoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComandoCountAggregateInputType | true
    }

  export interface ComandoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comando'], meta: { name: 'Comando' } }
    /**
     * Find zero or one Comando that matches the filter.
     * @param {ComandoFindUniqueArgs} args - Arguments to find a Comando
     * @example
     * // Get one Comando
     * const comando = await prisma.comando.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComandoFindUniqueArgs>(args: SelectSubset<T, ComandoFindUniqueArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comando that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComandoFindUniqueOrThrowArgs} args - Arguments to find a Comando
     * @example
     * // Get one Comando
     * const comando = await prisma.comando.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComandoFindUniqueOrThrowArgs>(args: SelectSubset<T, ComandoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comando that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandoFindFirstArgs} args - Arguments to find a Comando
     * @example
     * // Get one Comando
     * const comando = await prisma.comando.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComandoFindFirstArgs>(args?: SelectSubset<T, ComandoFindFirstArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comando that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandoFindFirstOrThrowArgs} args - Arguments to find a Comando
     * @example
     * // Get one Comando
     * const comando = await prisma.comando.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComandoFindFirstOrThrowArgs>(args?: SelectSubset<T, ComandoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comandos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comandos
     * const comandos = await prisma.comando.findMany()
     * 
     * // Get first 10 Comandos
     * const comandos = await prisma.comando.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comandoWithIdOnly = await prisma.comando.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComandoFindManyArgs>(args?: SelectSubset<T, ComandoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comando.
     * @param {ComandoCreateArgs} args - Arguments to create a Comando.
     * @example
     * // Create one Comando
     * const Comando = await prisma.comando.create({
     *   data: {
     *     // ... data to create a Comando
     *   }
     * })
     * 
     */
    create<T extends ComandoCreateArgs>(args: SelectSubset<T, ComandoCreateArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comandos.
     * @param {ComandoCreateManyArgs} args - Arguments to create many Comandos.
     * @example
     * // Create many Comandos
     * const comando = await prisma.comando.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComandoCreateManyArgs>(args?: SelectSubset<T, ComandoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comando.
     * @param {ComandoDeleteArgs} args - Arguments to delete one Comando.
     * @example
     * // Delete one Comando
     * const Comando = await prisma.comando.delete({
     *   where: {
     *     // ... filter to delete one Comando
     *   }
     * })
     * 
     */
    delete<T extends ComandoDeleteArgs>(args: SelectSubset<T, ComandoDeleteArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comando.
     * @param {ComandoUpdateArgs} args - Arguments to update one Comando.
     * @example
     * // Update one Comando
     * const comando = await prisma.comando.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComandoUpdateArgs>(args: SelectSubset<T, ComandoUpdateArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comandos.
     * @param {ComandoDeleteManyArgs} args - Arguments to filter Comandos to delete.
     * @example
     * // Delete a few Comandos
     * const { count } = await prisma.comando.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComandoDeleteManyArgs>(args?: SelectSubset<T, ComandoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comandos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comandos
     * const comando = await prisma.comando.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComandoUpdateManyArgs>(args: SelectSubset<T, ComandoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comando.
     * @param {ComandoUpsertArgs} args - Arguments to update or create a Comando.
     * @example
     * // Update or create a Comando
     * const comando = await prisma.comando.upsert({
     *   create: {
     *     // ... data to create a Comando
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comando we want to update
     *   }
     * })
     */
    upsert<T extends ComandoUpsertArgs>(args: SelectSubset<T, ComandoUpsertArgs<ExtArgs>>): Prisma__ComandoClient<$Result.GetResult<Prisma.$ComandoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comandos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandoCountArgs} args - Arguments to filter Comandos to count.
     * @example
     * // Count the number of Comandos
     * const count = await prisma.comando.count({
     *   where: {
     *     // ... the filter for the Comandos we want to count
     *   }
     * })
    **/
    count<T extends ComandoCountArgs>(
      args?: Subset<T, ComandoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComandoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comando.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComandoAggregateArgs>(args: Subset<T, ComandoAggregateArgs>): Prisma.PrismaPromise<GetComandoAggregateType<T>>

    /**
     * Group by Comando.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComandoGroupByArgs} args - Group by arguments.
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
      T extends ComandoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComandoGroupByArgs['orderBy'] }
        : { orderBy?: ComandoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComandoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComandoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comando model
   */
  readonly fields: ComandoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comando.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComandoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    luz<T extends LuzDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LuzDefaultArgs<ExtArgs>>): Prisma__LuzClient<$Result.GetResult<Prisma.$LuzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comando model
   */
  interface ComandoFieldRefs {
    readonly id: FieldRef<"Comando", 'Int'>
    readonly tipo: FieldRef<"Comando", 'String'>
    readonly criadoEm: FieldRef<"Comando", 'DateTime'>
    readonly usuarioId: FieldRef<"Comando", 'Int'>
    readonly luzId: FieldRef<"Comando", 'Int'>
    readonly desfazido: FieldRef<"Comando", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Comando findUnique
   */
  export type ComandoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * Filter, which Comando to fetch.
     */
    where: ComandoWhereUniqueInput
  }

  /**
   * Comando findUniqueOrThrow
   */
  export type ComandoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * Filter, which Comando to fetch.
     */
    where: ComandoWhereUniqueInput
  }

  /**
   * Comando findFirst
   */
  export type ComandoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * Filter, which Comando to fetch.
     */
    where?: ComandoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandos to fetch.
     */
    orderBy?: ComandoOrderByWithRelationInput | ComandoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comandos.
     */
    cursor?: ComandoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comandos.
     */
    distinct?: ComandoScalarFieldEnum | ComandoScalarFieldEnum[]
  }

  /**
   * Comando findFirstOrThrow
   */
  export type ComandoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * Filter, which Comando to fetch.
     */
    where?: ComandoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandos to fetch.
     */
    orderBy?: ComandoOrderByWithRelationInput | ComandoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comandos.
     */
    cursor?: ComandoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comandos.
     */
    distinct?: ComandoScalarFieldEnum | ComandoScalarFieldEnum[]
  }

  /**
   * Comando findMany
   */
  export type ComandoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * Filter, which Comandos to fetch.
     */
    where?: ComandoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comandos to fetch.
     */
    orderBy?: ComandoOrderByWithRelationInput | ComandoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comandos.
     */
    cursor?: ComandoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comandos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comandos.
     */
    skip?: number
    distinct?: ComandoScalarFieldEnum | ComandoScalarFieldEnum[]
  }

  /**
   * Comando create
   */
  export type ComandoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * The data needed to create a Comando.
     */
    data: XOR<ComandoCreateInput, ComandoUncheckedCreateInput>
  }

  /**
   * Comando createMany
   */
  export type ComandoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comandos.
     */
    data: ComandoCreateManyInput | ComandoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comando update
   */
  export type ComandoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * The data needed to update a Comando.
     */
    data: XOR<ComandoUpdateInput, ComandoUncheckedUpdateInput>
    /**
     * Choose, which Comando to update.
     */
    where: ComandoWhereUniqueInput
  }

  /**
   * Comando updateMany
   */
  export type ComandoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comandos.
     */
    data: XOR<ComandoUpdateManyMutationInput, ComandoUncheckedUpdateManyInput>
    /**
     * Filter which Comandos to update
     */
    where?: ComandoWhereInput
    /**
     * Limit how many Comandos to update.
     */
    limit?: number
  }

  /**
   * Comando upsert
   */
  export type ComandoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * The filter to search for the Comando to update in case it exists.
     */
    where: ComandoWhereUniqueInput
    /**
     * In case the Comando found by the `where` argument doesn't exist, create a new Comando with this data.
     */
    create: XOR<ComandoCreateInput, ComandoUncheckedCreateInput>
    /**
     * In case the Comando was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComandoUpdateInput, ComandoUncheckedUpdateInput>
  }

  /**
   * Comando delete
   */
  export type ComandoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
    /**
     * Filter which Comando to delete.
     */
    where: ComandoWhereUniqueInput
  }

  /**
   * Comando deleteMany
   */
  export type ComandoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comandos to delete
     */
    where?: ComandoWhereInput
    /**
     * Limit how many Comandos to delete.
     */
    limit?: number
  }

  /**
   * Comando without action
   */
  export type ComandoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comando
     */
    select?: ComandoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comando
     */
    omit?: ComandoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComandoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const LuzScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    estado: 'estado'
  };

  export type LuzScalarFieldEnum = (typeof LuzScalarFieldEnum)[keyof typeof LuzScalarFieldEnum]


  export const ComandoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    criadoEm: 'criadoEm',
    usuarioId: 'usuarioId',
    luzId: 'luzId',
    desfazido: 'desfazido'
  };

  export type ComandoScalarFieldEnum = (typeof ComandoScalarFieldEnum)[keyof typeof ComandoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const LuzOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type LuzOrderByRelevanceFieldEnum = (typeof LuzOrderByRelevanceFieldEnum)[keyof typeof LuzOrderByRelevanceFieldEnum]


  export const ComandoOrderByRelevanceFieldEnum: {
    tipo: 'tipo'
  };

  export type ComandoOrderByRelevanceFieldEnum = (typeof ComandoOrderByRelevanceFieldEnum)[keyof typeof ComandoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    comandos?: ComandoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    comandos?: ComandoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    comandos?: ComandoListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type LuzWhereInput = {
    AND?: LuzWhereInput | LuzWhereInput[]
    OR?: LuzWhereInput[]
    NOT?: LuzWhereInput | LuzWhereInput[]
    id?: IntFilter<"Luz"> | number
    nome?: StringFilter<"Luz"> | string
    estado?: BoolFilter<"Luz"> | boolean
    comandos?: ComandoListRelationFilter
  }

  export type LuzOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    estado?: SortOrder
    comandos?: ComandoOrderByRelationAggregateInput
    _relevance?: LuzOrderByRelevanceInput
  }

  export type LuzWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LuzWhereInput | LuzWhereInput[]
    OR?: LuzWhereInput[]
    NOT?: LuzWhereInput | LuzWhereInput[]
    nome?: StringFilter<"Luz"> | string
    estado?: BoolFilter<"Luz"> | boolean
    comandos?: ComandoListRelationFilter
  }, "id">

  export type LuzOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    estado?: SortOrder
    _count?: LuzCountOrderByAggregateInput
    _avg?: LuzAvgOrderByAggregateInput
    _max?: LuzMaxOrderByAggregateInput
    _min?: LuzMinOrderByAggregateInput
    _sum?: LuzSumOrderByAggregateInput
  }

  export type LuzScalarWhereWithAggregatesInput = {
    AND?: LuzScalarWhereWithAggregatesInput | LuzScalarWhereWithAggregatesInput[]
    OR?: LuzScalarWhereWithAggregatesInput[]
    NOT?: LuzScalarWhereWithAggregatesInput | LuzScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Luz"> | number
    nome?: StringWithAggregatesFilter<"Luz"> | string
    estado?: BoolWithAggregatesFilter<"Luz"> | boolean
  }

  export type ComandoWhereInput = {
    AND?: ComandoWhereInput | ComandoWhereInput[]
    OR?: ComandoWhereInput[]
    NOT?: ComandoWhereInput | ComandoWhereInput[]
    id?: IntFilter<"Comando"> | number
    tipo?: StringFilter<"Comando"> | string
    criadoEm?: DateTimeFilter<"Comando"> | Date | string
    usuarioId?: IntFilter<"Comando"> | number
    luzId?: IntFilter<"Comando"> | number
    desfazido?: BoolFilter<"Comando"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    luz?: XOR<LuzScalarRelationFilter, LuzWhereInput>
  }

  export type ComandoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    luzId?: SortOrder
    desfazido?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    luz?: LuzOrderByWithRelationInput
    _relevance?: ComandoOrderByRelevanceInput
  }

  export type ComandoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComandoWhereInput | ComandoWhereInput[]
    OR?: ComandoWhereInput[]
    NOT?: ComandoWhereInput | ComandoWhereInput[]
    tipo?: StringFilter<"Comando"> | string
    criadoEm?: DateTimeFilter<"Comando"> | Date | string
    usuarioId?: IntFilter<"Comando"> | number
    luzId?: IntFilter<"Comando"> | number
    desfazido?: BoolFilter<"Comando"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    luz?: XOR<LuzScalarRelationFilter, LuzWhereInput>
  }, "id">

  export type ComandoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    luzId?: SortOrder
    desfazido?: SortOrder
    _count?: ComandoCountOrderByAggregateInput
    _avg?: ComandoAvgOrderByAggregateInput
    _max?: ComandoMaxOrderByAggregateInput
    _min?: ComandoMinOrderByAggregateInput
    _sum?: ComandoSumOrderByAggregateInput
  }

  export type ComandoScalarWhereWithAggregatesInput = {
    AND?: ComandoScalarWhereWithAggregatesInput | ComandoScalarWhereWithAggregatesInput[]
    OR?: ComandoScalarWhereWithAggregatesInput[]
    NOT?: ComandoScalarWhereWithAggregatesInput | ComandoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comando"> | number
    tipo?: StringWithAggregatesFilter<"Comando"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Comando"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Comando"> | number
    luzId?: IntWithAggregatesFilter<"Comando"> | number
    desfazido?: BoolWithAggregatesFilter<"Comando"> | boolean
  }

  export type UsuarioCreateInput = {
    nome: string
    comandos?: ComandoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    comandos?: ComandoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    comandos?: ComandoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    comandos?: ComandoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LuzCreateInput = {
    nome: string
    estado?: boolean
    comandos?: ComandoCreateNestedManyWithoutLuzInput
  }

  export type LuzUncheckedCreateInput = {
    id?: number
    nome: string
    estado?: boolean
    comandos?: ComandoUncheckedCreateNestedManyWithoutLuzInput
  }

  export type LuzUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    comandos?: ComandoUpdateManyWithoutLuzNestedInput
  }

  export type LuzUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    comandos?: ComandoUncheckedUpdateManyWithoutLuzNestedInput
  }

  export type LuzCreateManyInput = {
    id?: number
    nome: string
    estado?: boolean
  }

  export type LuzUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LuzUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComandoCreateInput = {
    tipo: string
    criadoEm?: Date | string
    desfazido?: boolean
    usuario: UsuarioCreateNestedOneWithoutComandosInput
    luz: LuzCreateNestedOneWithoutComandosInput
  }

  export type ComandoUncheckedCreateInput = {
    id?: number
    tipo: string
    criadoEm?: Date | string
    usuarioId: number
    luzId: number
    desfazido?: boolean
  }

  export type ComandoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    desfazido?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutComandosNestedInput
    luz?: LuzUpdateOneRequiredWithoutComandosNestedInput
  }

  export type ComandoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    luzId?: IntFieldUpdateOperationsInput | number
    desfazido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComandoCreateManyInput = {
    id?: number
    tipo: string
    criadoEm?: Date | string
    usuarioId: number
    luzId: number
    desfazido?: boolean
  }

  export type ComandoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    desfazido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComandoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    luzId?: IntFieldUpdateOperationsInput | number
    desfazido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ComandoListRelationFilter = {
    every?: ComandoWhereInput
    some?: ComandoWhereInput
    none?: ComandoWhereInput
  }

  export type ComandoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LuzOrderByRelevanceInput = {
    fields: LuzOrderByRelevanceFieldEnum | LuzOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LuzCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    estado?: SortOrder
  }

  export type LuzAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LuzMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    estado?: SortOrder
  }

  export type LuzMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    estado?: SortOrder
  }

  export type LuzSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type LuzScalarRelationFilter = {
    is?: LuzWhereInput
    isNot?: LuzWhereInput
  }

  export type ComandoOrderByRelevanceInput = {
    fields: ComandoOrderByRelevanceFieldEnum | ComandoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComandoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    luzId?: SortOrder
    desfazido?: SortOrder
  }

  export type ComandoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    luzId?: SortOrder
  }

  export type ComandoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    luzId?: SortOrder
    desfazido?: SortOrder
  }

  export type ComandoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    luzId?: SortOrder
    desfazido?: SortOrder
  }

  export type ComandoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    luzId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ComandoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComandoCreateWithoutUsuarioInput, ComandoUncheckedCreateWithoutUsuarioInput> | ComandoCreateWithoutUsuarioInput[] | ComandoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutUsuarioInput | ComandoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComandoCreateManyUsuarioInputEnvelope
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
  }

  export type ComandoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ComandoCreateWithoutUsuarioInput, ComandoUncheckedCreateWithoutUsuarioInput> | ComandoCreateWithoutUsuarioInput[] | ComandoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutUsuarioInput | ComandoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ComandoCreateManyUsuarioInputEnvelope
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ComandoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComandoCreateWithoutUsuarioInput, ComandoUncheckedCreateWithoutUsuarioInput> | ComandoCreateWithoutUsuarioInput[] | ComandoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutUsuarioInput | ComandoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComandoUpsertWithWhereUniqueWithoutUsuarioInput | ComandoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComandoCreateManyUsuarioInputEnvelope
    set?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    disconnect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    delete?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    update?: ComandoUpdateWithWhereUniqueWithoutUsuarioInput | ComandoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComandoUpdateManyWithWhereWithoutUsuarioInput | ComandoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComandoScalarWhereInput | ComandoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComandoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ComandoCreateWithoutUsuarioInput, ComandoUncheckedCreateWithoutUsuarioInput> | ComandoCreateWithoutUsuarioInput[] | ComandoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutUsuarioInput | ComandoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ComandoUpsertWithWhereUniqueWithoutUsuarioInput | ComandoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ComandoCreateManyUsuarioInputEnvelope
    set?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    disconnect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    delete?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    update?: ComandoUpdateWithWhereUniqueWithoutUsuarioInput | ComandoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ComandoUpdateManyWithWhereWithoutUsuarioInput | ComandoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ComandoScalarWhereInput | ComandoScalarWhereInput[]
  }

  export type ComandoCreateNestedManyWithoutLuzInput = {
    create?: XOR<ComandoCreateWithoutLuzInput, ComandoUncheckedCreateWithoutLuzInput> | ComandoCreateWithoutLuzInput[] | ComandoUncheckedCreateWithoutLuzInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutLuzInput | ComandoCreateOrConnectWithoutLuzInput[]
    createMany?: ComandoCreateManyLuzInputEnvelope
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
  }

  export type ComandoUncheckedCreateNestedManyWithoutLuzInput = {
    create?: XOR<ComandoCreateWithoutLuzInput, ComandoUncheckedCreateWithoutLuzInput> | ComandoCreateWithoutLuzInput[] | ComandoUncheckedCreateWithoutLuzInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutLuzInput | ComandoCreateOrConnectWithoutLuzInput[]
    createMany?: ComandoCreateManyLuzInputEnvelope
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ComandoUpdateManyWithoutLuzNestedInput = {
    create?: XOR<ComandoCreateWithoutLuzInput, ComandoUncheckedCreateWithoutLuzInput> | ComandoCreateWithoutLuzInput[] | ComandoUncheckedCreateWithoutLuzInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutLuzInput | ComandoCreateOrConnectWithoutLuzInput[]
    upsert?: ComandoUpsertWithWhereUniqueWithoutLuzInput | ComandoUpsertWithWhereUniqueWithoutLuzInput[]
    createMany?: ComandoCreateManyLuzInputEnvelope
    set?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    disconnect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    delete?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    update?: ComandoUpdateWithWhereUniqueWithoutLuzInput | ComandoUpdateWithWhereUniqueWithoutLuzInput[]
    updateMany?: ComandoUpdateManyWithWhereWithoutLuzInput | ComandoUpdateManyWithWhereWithoutLuzInput[]
    deleteMany?: ComandoScalarWhereInput | ComandoScalarWhereInput[]
  }

  export type ComandoUncheckedUpdateManyWithoutLuzNestedInput = {
    create?: XOR<ComandoCreateWithoutLuzInput, ComandoUncheckedCreateWithoutLuzInput> | ComandoCreateWithoutLuzInput[] | ComandoUncheckedCreateWithoutLuzInput[]
    connectOrCreate?: ComandoCreateOrConnectWithoutLuzInput | ComandoCreateOrConnectWithoutLuzInput[]
    upsert?: ComandoUpsertWithWhereUniqueWithoutLuzInput | ComandoUpsertWithWhereUniqueWithoutLuzInput[]
    createMany?: ComandoCreateManyLuzInputEnvelope
    set?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    disconnect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    delete?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    connect?: ComandoWhereUniqueInput | ComandoWhereUniqueInput[]
    update?: ComandoUpdateWithWhereUniqueWithoutLuzInput | ComandoUpdateWithWhereUniqueWithoutLuzInput[]
    updateMany?: ComandoUpdateManyWithWhereWithoutLuzInput | ComandoUpdateManyWithWhereWithoutLuzInput[]
    deleteMany?: ComandoScalarWhereInput | ComandoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutComandosInput = {
    create?: XOR<UsuarioCreateWithoutComandosInput, UsuarioUncheckedCreateWithoutComandosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComandosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LuzCreateNestedOneWithoutComandosInput = {
    create?: XOR<LuzCreateWithoutComandosInput, LuzUncheckedCreateWithoutComandosInput>
    connectOrCreate?: LuzCreateOrConnectWithoutComandosInput
    connect?: LuzWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutComandosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComandosInput, UsuarioUncheckedCreateWithoutComandosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComandosInput
    upsert?: UsuarioUpsertWithoutComandosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComandosInput, UsuarioUpdateWithoutComandosInput>, UsuarioUncheckedUpdateWithoutComandosInput>
  }

  export type LuzUpdateOneRequiredWithoutComandosNestedInput = {
    create?: XOR<LuzCreateWithoutComandosInput, LuzUncheckedCreateWithoutComandosInput>
    connectOrCreate?: LuzCreateOrConnectWithoutComandosInput
    upsert?: LuzUpsertWithoutComandosInput
    connect?: LuzWhereUniqueInput
    update?: XOR<XOR<LuzUpdateToOneWithWhereWithoutComandosInput, LuzUpdateWithoutComandosInput>, LuzUncheckedUpdateWithoutComandosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ComandoCreateWithoutUsuarioInput = {
    tipo: string
    criadoEm?: Date | string
    desfazido?: boolean
    luz: LuzCreateNestedOneWithoutComandosInput
  }

  export type ComandoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    tipo: string
    criadoEm?: Date | string
    luzId: number
    desfazido?: boolean
  }

  export type ComandoCreateOrConnectWithoutUsuarioInput = {
    where: ComandoWhereUniqueInput
    create: XOR<ComandoCreateWithoutUsuarioInput, ComandoUncheckedCreateWithoutUsuarioInput>
  }

  export type ComandoCreateManyUsuarioInputEnvelope = {
    data: ComandoCreateManyUsuarioInput | ComandoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ComandoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ComandoWhereUniqueInput
    update: XOR<ComandoUpdateWithoutUsuarioInput, ComandoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ComandoCreateWithoutUsuarioInput, ComandoUncheckedCreateWithoutUsuarioInput>
  }

  export type ComandoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ComandoWhereUniqueInput
    data: XOR<ComandoUpdateWithoutUsuarioInput, ComandoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ComandoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ComandoScalarWhereInput
    data: XOR<ComandoUpdateManyMutationInput, ComandoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ComandoScalarWhereInput = {
    AND?: ComandoScalarWhereInput | ComandoScalarWhereInput[]
    OR?: ComandoScalarWhereInput[]
    NOT?: ComandoScalarWhereInput | ComandoScalarWhereInput[]
    id?: IntFilter<"Comando"> | number
    tipo?: StringFilter<"Comando"> | string
    criadoEm?: DateTimeFilter<"Comando"> | Date | string
    usuarioId?: IntFilter<"Comando"> | number
    luzId?: IntFilter<"Comando"> | number
    desfazido?: BoolFilter<"Comando"> | boolean
  }

  export type ComandoCreateWithoutLuzInput = {
    tipo: string
    criadoEm?: Date | string
    desfazido?: boolean
    usuario: UsuarioCreateNestedOneWithoutComandosInput
  }

  export type ComandoUncheckedCreateWithoutLuzInput = {
    id?: number
    tipo: string
    criadoEm?: Date | string
    usuarioId: number
    desfazido?: boolean
  }

  export type ComandoCreateOrConnectWithoutLuzInput = {
    where: ComandoWhereUniqueInput
    create: XOR<ComandoCreateWithoutLuzInput, ComandoUncheckedCreateWithoutLuzInput>
  }

  export type ComandoCreateManyLuzInputEnvelope = {
    data: ComandoCreateManyLuzInput | ComandoCreateManyLuzInput[]
    skipDuplicates?: boolean
  }

  export type ComandoUpsertWithWhereUniqueWithoutLuzInput = {
    where: ComandoWhereUniqueInput
    update: XOR<ComandoUpdateWithoutLuzInput, ComandoUncheckedUpdateWithoutLuzInput>
    create: XOR<ComandoCreateWithoutLuzInput, ComandoUncheckedCreateWithoutLuzInput>
  }

  export type ComandoUpdateWithWhereUniqueWithoutLuzInput = {
    where: ComandoWhereUniqueInput
    data: XOR<ComandoUpdateWithoutLuzInput, ComandoUncheckedUpdateWithoutLuzInput>
  }

  export type ComandoUpdateManyWithWhereWithoutLuzInput = {
    where: ComandoScalarWhereInput
    data: XOR<ComandoUpdateManyMutationInput, ComandoUncheckedUpdateManyWithoutLuzInput>
  }

  export type UsuarioCreateWithoutComandosInput = {
    nome: string
  }

  export type UsuarioUncheckedCreateWithoutComandosInput = {
    id?: number
    nome: string
  }

  export type UsuarioCreateOrConnectWithoutComandosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComandosInput, UsuarioUncheckedCreateWithoutComandosInput>
  }

  export type LuzCreateWithoutComandosInput = {
    nome: string
    estado?: boolean
  }

  export type LuzUncheckedCreateWithoutComandosInput = {
    id?: number
    nome: string
    estado?: boolean
  }

  export type LuzCreateOrConnectWithoutComandosInput = {
    where: LuzWhereUniqueInput
    create: XOR<LuzCreateWithoutComandosInput, LuzUncheckedCreateWithoutComandosInput>
  }

  export type UsuarioUpsertWithoutComandosInput = {
    update: XOR<UsuarioUpdateWithoutComandosInput, UsuarioUncheckedUpdateWithoutComandosInput>
    create: XOR<UsuarioCreateWithoutComandosInput, UsuarioUncheckedCreateWithoutComandosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComandosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComandosInput, UsuarioUncheckedUpdateWithoutComandosInput>
  }

  export type UsuarioUpdateWithoutComandosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutComandosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type LuzUpsertWithoutComandosInput = {
    update: XOR<LuzUpdateWithoutComandosInput, LuzUncheckedUpdateWithoutComandosInput>
    create: XOR<LuzCreateWithoutComandosInput, LuzUncheckedCreateWithoutComandosInput>
    where?: LuzWhereInput
  }

  export type LuzUpdateToOneWithWhereWithoutComandosInput = {
    where?: LuzWhereInput
    data: XOR<LuzUpdateWithoutComandosInput, LuzUncheckedUpdateWithoutComandosInput>
  }

  export type LuzUpdateWithoutComandosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LuzUncheckedUpdateWithoutComandosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComandoCreateManyUsuarioInput = {
    id?: number
    tipo: string
    criadoEm?: Date | string
    luzId: number
    desfazido?: boolean
  }

  export type ComandoUpdateWithoutUsuarioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    desfazido?: BoolFieldUpdateOperationsInput | boolean
    luz?: LuzUpdateOneRequiredWithoutComandosNestedInput
  }

  export type ComandoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    luzId?: IntFieldUpdateOperationsInput | number
    desfazido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComandoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    luzId?: IntFieldUpdateOperationsInput | number
    desfazido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComandoCreateManyLuzInput = {
    id?: number
    tipo: string
    criadoEm?: Date | string
    usuarioId: number
    desfazido?: boolean
  }

  export type ComandoUpdateWithoutLuzInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    desfazido?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutComandosNestedInput
  }

  export type ComandoUncheckedUpdateWithoutLuzInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    desfazido?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComandoUncheckedUpdateManyWithoutLuzInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    desfazido?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}