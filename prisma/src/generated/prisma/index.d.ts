
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
 * Model berkas
 * 
 */
export type berkas = $Result.DefaultSelection<Prisma.$berkasPayload>
/**
 * Model dosen
 * 
 */
export type dosen = $Result.DefaultSelection<Prisma.$dosenPayload>
/**
 * Model kelas
 * 
 */
export type kelas = $Result.DefaultSelection<Prisma.$kelasPayload>
/**
 * Model lowongan
 * 
 */
export type lowongan = $Result.DefaultSelection<Prisma.$lowonganPayload>
/**
 * Model mahasiswa
 * 
 */
export type mahasiswa = $Result.DefaultSelection<Prisma.$mahasiswaPayload>
/**
 * Model mata_kuliah
 * 
 */
export type mata_kuliah = $Result.DefaultSelection<Prisma.$mata_kuliahPayload>
/**
 * Model notifikasi
 * 
 */
export type notifikasi = $Result.DefaultSelection<Prisma.$notifikasiPayload>
/**
 * Model pendaftaran
 * 
 */
export type pendaftaran = $Result.DefaultSelection<Prisma.$pendaftaranPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const jenis_notifikasi_enum: {
  email: 'email',
  whatsapp: 'whatsapp',
  floater: 'floater'
};

export type jenis_notifikasi_enum = (typeof jenis_notifikasi_enum)[keyof typeof jenis_notifikasi_enum]


export const status_pendaftaran_enum: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type status_pendaftaran_enum = (typeof status_pendaftaran_enum)[keyof typeof status_pendaftaran_enum]


export const user_role_enum: {
  mahasiswa: 'mahasiswa',
  dosen: 'dosen'
};

export type user_role_enum = (typeof user_role_enum)[keyof typeof user_role_enum]

}

export type jenis_notifikasi_enum = $Enums.jenis_notifikasi_enum

export const jenis_notifikasi_enum: typeof $Enums.jenis_notifikasi_enum

export type status_pendaftaran_enum = $Enums.status_pendaftaran_enum

export const status_pendaftaran_enum: typeof $Enums.status_pendaftaran_enum

export type user_role_enum = $Enums.user_role_enum

export const user_role_enum: typeof $Enums.user_role_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Berkas
 * const berkas = await prisma.berkas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Berkas
   * const berkas = await prisma.berkas.findMany()
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
   * `prisma.berkas`: Exposes CRUD operations for the **berkas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Berkas
    * const berkas = await prisma.berkas.findMany()
    * ```
    */
  get berkas(): Prisma.berkasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.dosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.kelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lowongan`: Exposes CRUD operations for the **lowongan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lowongans
    * const lowongans = await prisma.lowongan.findMany()
    * ```
    */
  get lowongan(): Prisma.lowonganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.mahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mata_kuliah`: Exposes CRUD operations for the **mata_kuliah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mata_kuliahs
    * const mata_kuliahs = await prisma.mata_kuliah.findMany()
    * ```
    */
  get mata_kuliah(): Prisma.mata_kuliahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifikasi`: Exposes CRUD operations for the **notifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifikasis
    * const notifikasis = await prisma.notifikasi.findMany()
    * ```
    */
  get notifikasi(): Prisma.notifikasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendaftaran`: Exposes CRUD operations for the **pendaftaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendaftarans
    * const pendaftarans = await prisma.pendaftaran.findMany()
    * ```
    */
  get pendaftaran(): Prisma.pendaftaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    berkas: 'berkas',
    dosen: 'dosen',
    kelas: 'kelas',
    lowongan: 'lowongan',
    mahasiswa: 'mahasiswa',
    mata_kuliah: 'mata_kuliah',
    notifikasi: 'notifikasi',
    pendaftaran: 'pendaftaran',
    users: 'users'
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
      modelProps: "berkas" | "dosen" | "kelas" | "lowongan" | "mahasiswa" | "mata_kuliah" | "notifikasi" | "pendaftaran" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      berkas: {
        payload: Prisma.$berkasPayload<ExtArgs>
        fields: Prisma.berkasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.berkasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.berkasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          findFirst: {
            args: Prisma.berkasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.berkasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          findMany: {
            args: Prisma.berkasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>[]
          }
          create: {
            args: Prisma.berkasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          createMany: {
            args: Prisma.berkasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.berkasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>[]
          }
          delete: {
            args: Prisma.berkasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          update: {
            args: Prisma.berkasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          deleteMany: {
            args: Prisma.berkasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.berkasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.berkasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>[]
          }
          upsert: {
            args: Prisma.berkasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          aggregate: {
            args: Prisma.BerkasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBerkas>
          }
          groupBy: {
            args: Prisma.berkasGroupByArgs<ExtArgs>
            result: $Utils.Optional<BerkasGroupByOutputType>[]
          }
          count: {
            args: Prisma.berkasCountArgs<ExtArgs>
            result: $Utils.Optional<BerkasCountAggregateOutputType> | number
          }
        }
      }
      dosen: {
        payload: Prisma.$dosenPayload<ExtArgs>
        fields: Prisma.dosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findFirst: {
            args: Prisma.dosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findMany: {
            args: Prisma.dosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          create: {
            args: Prisma.dosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          createMany: {
            args: Prisma.dosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dosenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          delete: {
            args: Prisma.dosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          update: {
            args: Prisma.dosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          deleteMany: {
            args: Prisma.dosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dosenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          upsert: {
            args: Prisma.dosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.dosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.dosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      kelas: {
        payload: Prisma.$kelasPayload<ExtArgs>
        fields: Prisma.kelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          findFirst: {
            args: Prisma.kelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          findMany: {
            args: Prisma.kelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>[]
          }
          create: {
            args: Prisma.kelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          createMany: {
            args: Prisma.kelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>[]
          }
          delete: {
            args: Prisma.kelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          update: {
            args: Prisma.kelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          deleteMany: {
            args: Prisma.kelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>[]
          }
          upsert: {
            args: Prisma.kelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.kelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.kelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      lowongan: {
        payload: Prisma.$lowonganPayload<ExtArgs>
        fields: Prisma.lowonganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lowonganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lowonganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>
          }
          findFirst: {
            args: Prisma.lowonganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lowonganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>
          }
          findMany: {
            args: Prisma.lowonganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>[]
          }
          create: {
            args: Prisma.lowonganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>
          }
          createMany: {
            args: Prisma.lowonganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lowonganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>[]
          }
          delete: {
            args: Prisma.lowonganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>
          }
          update: {
            args: Prisma.lowonganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>
          }
          deleteMany: {
            args: Prisma.lowonganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lowonganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lowonganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>[]
          }
          upsert: {
            args: Prisma.lowonganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lowonganPayload>
          }
          aggregate: {
            args: Prisma.LowonganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLowongan>
          }
          groupBy: {
            args: Prisma.lowonganGroupByArgs<ExtArgs>
            result: $Utils.Optional<LowonganGroupByOutputType>[]
          }
          count: {
            args: Prisma.lowonganCountArgs<ExtArgs>
            result: $Utils.Optional<LowonganCountAggregateOutputType> | number
          }
        }
      }
      mahasiswa: {
        payload: Prisma.$mahasiswaPayload<ExtArgs>
        fields: Prisma.mahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findFirst: {
            args: Prisma.mahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findMany: {
            args: Prisma.mahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          create: {
            args: Prisma.mahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          createMany: {
            args: Prisma.mahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mahasiswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          delete: {
            args: Prisma.mahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          update: {
            args: Prisma.mahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.mahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mahasiswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          upsert: {
            args: Prisma.mahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.mahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      mata_kuliah: {
        payload: Prisma.$mata_kuliahPayload<ExtArgs>
        fields: Prisma.mata_kuliahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mata_kuliahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mata_kuliahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          findFirst: {
            args: Prisma.mata_kuliahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mata_kuliahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          findMany: {
            args: Prisma.mata_kuliahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>[]
          }
          create: {
            args: Prisma.mata_kuliahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          createMany: {
            args: Prisma.mata_kuliahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mata_kuliahCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>[]
          }
          delete: {
            args: Prisma.mata_kuliahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          update: {
            args: Prisma.mata_kuliahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          deleteMany: {
            args: Prisma.mata_kuliahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mata_kuliahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mata_kuliahUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>[]
          }
          upsert: {
            args: Prisma.mata_kuliahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mata_kuliahPayload>
          }
          aggregate: {
            args: Prisma.Mata_kuliahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMata_kuliah>
          }
          groupBy: {
            args: Prisma.mata_kuliahGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mata_kuliahGroupByOutputType>[]
          }
          count: {
            args: Prisma.mata_kuliahCountArgs<ExtArgs>
            result: $Utils.Optional<Mata_kuliahCountAggregateOutputType> | number
          }
        }
      }
      notifikasi: {
        payload: Prisma.$notifikasiPayload<ExtArgs>
        fields: Prisma.notifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          findFirst: {
            args: Prisma.notifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          findMany: {
            args: Prisma.notifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>[]
          }
          create: {
            args: Prisma.notifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          createMany: {
            args: Prisma.notifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notifikasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>[]
          }
          delete: {
            args: Prisma.notifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          update: {
            args: Prisma.notifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          deleteMany: {
            args: Prisma.notifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notifikasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>[]
          }
          upsert: {
            args: Prisma.notifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notifikasiPayload>
          }
          aggregate: {
            args: Prisma.NotifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifikasi>
          }
          groupBy: {
            args: Prisma.notifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.notifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiCountAggregateOutputType> | number
          }
        }
      }
      pendaftaran: {
        payload: Prisma.$pendaftaranPayload<ExtArgs>
        fields: Prisma.pendaftaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pendaftaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pendaftaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>
          }
          findFirst: {
            args: Prisma.pendaftaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pendaftaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>
          }
          findMany: {
            args: Prisma.pendaftaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>[]
          }
          create: {
            args: Prisma.pendaftaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>
          }
          createMany: {
            args: Prisma.pendaftaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pendaftaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>[]
          }
          delete: {
            args: Prisma.pendaftaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>
          }
          update: {
            args: Prisma.pendaftaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>
          }
          deleteMany: {
            args: Prisma.pendaftaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pendaftaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pendaftaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>[]
          }
          upsert: {
            args: Prisma.pendaftaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendaftaranPayload>
          }
          aggregate: {
            args: Prisma.PendaftaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendaftaran>
          }
          groupBy: {
            args: Prisma.pendaftaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.pendaftaranCountArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    berkas?: berkasOmit
    dosen?: dosenOmit
    kelas?: kelasOmit
    lowongan?: lowonganOmit
    mahasiswa?: mahasiswaOmit
    mata_kuliah?: mata_kuliahOmit
    notifikasi?: notifikasiOmit
    pendaftaran?: pendaftaranOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    lowongan: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | DosenCountOutputTypeCountLowonganArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountLowonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lowonganWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    lowongan: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | KelasCountOutputTypeCountLowonganArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountLowonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lowonganWhereInput
  }


  /**
   * Count Type LowonganCountOutputType
   */

  export type LowonganCountOutputType = {
    notifikasi: number
    pendaftaran: number
  }

  export type LowonganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifikasi?: boolean | LowonganCountOutputTypeCountNotifikasiArgs
    pendaftaran?: boolean | LowonganCountOutputTypeCountPendaftaranArgs
  }

  // Custom InputTypes
  /**
   * LowonganCountOutputType without action
   */
  export type LowonganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LowonganCountOutputType
     */
    select?: LowonganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LowonganCountOutputType without action
   */
  export type LowonganCountOutputTypeCountNotifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notifikasiWhereInput
  }

  /**
   * LowonganCountOutputType without action
   */
  export type LowonganCountOutputTypeCountPendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendaftaranWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    notifikasi: number
    pendaftaran: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifikasi?: boolean | MahasiswaCountOutputTypeCountNotifikasiArgs
    pendaftaran?: boolean | MahasiswaCountOutputTypeCountPendaftaranArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountNotifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notifikasiWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountPendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendaftaranWhereInput
  }


  /**
   * Count Type Mata_kuliahCountOutputType
   */

  export type Mata_kuliahCountOutputType = {
    kelas: number
  }

  export type Mata_kuliahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | Mata_kuliahCountOutputTypeCountKelasArgs
  }

  // Custom InputTypes
  /**
   * Mata_kuliahCountOutputType without action
   */
  export type Mata_kuliahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mata_kuliahCountOutputType
     */
    select?: Mata_kuliahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Mata_kuliahCountOutputType without action
   */
  export type Mata_kuliahCountOutputTypeCountKelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelasWhereInput
  }


  /**
   * Count Type PendaftaranCountOutputType
   */

  export type PendaftaranCountOutputType = {
    berkas: number
  }

  export type PendaftaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berkas?: boolean | PendaftaranCountOutputTypeCountBerkasArgs
  }

  // Custom InputTypes
  /**
   * PendaftaranCountOutputType without action
   */
  export type PendaftaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendaftaranCountOutputType
     */
    select?: PendaftaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PendaftaranCountOutputType without action
   */
  export type PendaftaranCountOutputTypeCountBerkasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: berkasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model berkas
   */

  export type AggregateBerkas = {
    _count: BerkasCountAggregateOutputType | null
    _avg: BerkasAvgAggregateOutputType | null
    _sum: BerkasSumAggregateOutputType | null
    _min: BerkasMinAggregateOutputType | null
    _max: BerkasMaxAggregateOutputType | null
  }

  export type BerkasAvgAggregateOutputType = {
    id_berkas: number | null
    id_pendaftaran: number | null
  }

  export type BerkasSumAggregateOutputType = {
    id_berkas: number | null
    id_pendaftaran: number | null
  }

  export type BerkasMinAggregateOutputType = {
    id_berkas: number | null
    id_pendaftaran: number | null
    nama_file: string | null
    path_file: string | null
    tanggal_upload: Date | null
  }

  export type BerkasMaxAggregateOutputType = {
    id_berkas: number | null
    id_pendaftaran: number | null
    nama_file: string | null
    path_file: string | null
    tanggal_upload: Date | null
  }

  export type BerkasCountAggregateOutputType = {
    id_berkas: number
    id_pendaftaran: number
    nama_file: number
    path_file: number
    tanggal_upload: number
    _all: number
  }


  export type BerkasAvgAggregateInputType = {
    id_berkas?: true
    id_pendaftaran?: true
  }

  export type BerkasSumAggregateInputType = {
    id_berkas?: true
    id_pendaftaran?: true
  }

  export type BerkasMinAggregateInputType = {
    id_berkas?: true
    id_pendaftaran?: true
    nama_file?: true
    path_file?: true
    tanggal_upload?: true
  }

  export type BerkasMaxAggregateInputType = {
    id_berkas?: true
    id_pendaftaran?: true
    nama_file?: true
    path_file?: true
    tanggal_upload?: true
  }

  export type BerkasCountAggregateInputType = {
    id_berkas?: true
    id_pendaftaran?: true
    nama_file?: true
    path_file?: true
    tanggal_upload?: true
    _all?: true
  }

  export type BerkasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which berkas to aggregate.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned berkas
    **/
    _count?: true | BerkasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BerkasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BerkasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BerkasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BerkasMaxAggregateInputType
  }

  export type GetBerkasAggregateType<T extends BerkasAggregateArgs> = {
        [P in keyof T & keyof AggregateBerkas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBerkas[P]>
      : GetScalarType<T[P], AggregateBerkas[P]>
  }




  export type berkasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: berkasWhereInput
    orderBy?: berkasOrderByWithAggregationInput | berkasOrderByWithAggregationInput[]
    by: BerkasScalarFieldEnum[] | BerkasScalarFieldEnum
    having?: berkasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BerkasCountAggregateInputType | true
    _avg?: BerkasAvgAggregateInputType
    _sum?: BerkasSumAggregateInputType
    _min?: BerkasMinAggregateInputType
    _max?: BerkasMaxAggregateInputType
  }

  export type BerkasGroupByOutputType = {
    id_berkas: number
    id_pendaftaran: number
    nama_file: string | null
    path_file: string | null
    tanggal_upload: Date | null
    _count: BerkasCountAggregateOutputType | null
    _avg: BerkasAvgAggregateOutputType | null
    _sum: BerkasSumAggregateOutputType | null
    _min: BerkasMinAggregateOutputType | null
    _max: BerkasMaxAggregateOutputType | null
  }

  type GetBerkasGroupByPayload<T extends berkasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BerkasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BerkasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BerkasGroupByOutputType[P]>
            : GetScalarType<T[P], BerkasGroupByOutputType[P]>
        }
      >
    >


  export type berkasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_berkas?: boolean
    id_pendaftaran?: boolean
    nama_file?: boolean
    path_file?: boolean
    tanggal_upload?: boolean
    pendaftaran?: boolean | pendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["berkas"]>

  export type berkasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_berkas?: boolean
    id_pendaftaran?: boolean
    nama_file?: boolean
    path_file?: boolean
    tanggal_upload?: boolean
    pendaftaran?: boolean | pendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["berkas"]>

  export type berkasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_berkas?: boolean
    id_pendaftaran?: boolean
    nama_file?: boolean
    path_file?: boolean
    tanggal_upload?: boolean
    pendaftaran?: boolean | pendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["berkas"]>

  export type berkasSelectScalar = {
    id_berkas?: boolean
    id_pendaftaran?: boolean
    nama_file?: boolean
    path_file?: boolean
    tanggal_upload?: boolean
  }

  export type berkasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_berkas" | "id_pendaftaran" | "nama_file" | "path_file" | "tanggal_upload", ExtArgs["result"]["berkas"]>
  export type berkasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | pendaftaranDefaultArgs<ExtArgs>
  }
  export type berkasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | pendaftaranDefaultArgs<ExtArgs>
  }
  export type berkasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | pendaftaranDefaultArgs<ExtArgs>
  }

  export type $berkasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "berkas"
    objects: {
      pendaftaran: Prisma.$pendaftaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_berkas: number
      id_pendaftaran: number
      nama_file: string | null
      path_file: string | null
      tanggal_upload: Date | null
    }, ExtArgs["result"]["berkas"]>
    composites: {}
  }

  type berkasGetPayload<S extends boolean | null | undefined | berkasDefaultArgs> = $Result.GetResult<Prisma.$berkasPayload, S>

  type berkasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<berkasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BerkasCountAggregateInputType | true
    }

  export interface berkasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['berkas'], meta: { name: 'berkas' } }
    /**
     * Find zero or one Berkas that matches the filter.
     * @param {berkasFindUniqueArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends berkasFindUniqueArgs>(args: SelectSubset<T, berkasFindUniqueArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Berkas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {berkasFindUniqueOrThrowArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends berkasFindUniqueOrThrowArgs>(args: SelectSubset<T, berkasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berkas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasFindFirstArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends berkasFindFirstArgs>(args?: SelectSubset<T, berkasFindFirstArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berkas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasFindFirstOrThrowArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends berkasFindFirstOrThrowArgs>(args?: SelectSubset<T, berkasFindFirstOrThrowArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Berkas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Berkas
     * const berkas = await prisma.berkas.findMany()
     * 
     * // Get first 10 Berkas
     * const berkas = await prisma.berkas.findMany({ take: 10 })
     * 
     * // Only select the `id_berkas`
     * const berkasWithId_berkasOnly = await prisma.berkas.findMany({ select: { id_berkas: true } })
     * 
     */
    findMany<T extends berkasFindManyArgs>(args?: SelectSubset<T, berkasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Berkas.
     * @param {berkasCreateArgs} args - Arguments to create a Berkas.
     * @example
     * // Create one Berkas
     * const Berkas = await prisma.berkas.create({
     *   data: {
     *     // ... data to create a Berkas
     *   }
     * })
     * 
     */
    create<T extends berkasCreateArgs>(args: SelectSubset<T, berkasCreateArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Berkas.
     * @param {berkasCreateManyArgs} args - Arguments to create many Berkas.
     * @example
     * // Create many Berkas
     * const berkas = await prisma.berkas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends berkasCreateManyArgs>(args?: SelectSubset<T, berkasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Berkas and returns the data saved in the database.
     * @param {berkasCreateManyAndReturnArgs} args - Arguments to create many Berkas.
     * @example
     * // Create many Berkas
     * const berkas = await prisma.berkas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Berkas and only return the `id_berkas`
     * const berkasWithId_berkasOnly = await prisma.berkas.createManyAndReturn({
     *   select: { id_berkas: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends berkasCreateManyAndReturnArgs>(args?: SelectSubset<T, berkasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Berkas.
     * @param {berkasDeleteArgs} args - Arguments to delete one Berkas.
     * @example
     * // Delete one Berkas
     * const Berkas = await prisma.berkas.delete({
     *   where: {
     *     // ... filter to delete one Berkas
     *   }
     * })
     * 
     */
    delete<T extends berkasDeleteArgs>(args: SelectSubset<T, berkasDeleteArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Berkas.
     * @param {berkasUpdateArgs} args - Arguments to update one Berkas.
     * @example
     * // Update one Berkas
     * const berkas = await prisma.berkas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends berkasUpdateArgs>(args: SelectSubset<T, berkasUpdateArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Berkas.
     * @param {berkasDeleteManyArgs} args - Arguments to filter Berkas to delete.
     * @example
     * // Delete a few Berkas
     * const { count } = await prisma.berkas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends berkasDeleteManyArgs>(args?: SelectSubset<T, berkasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Berkas
     * const berkas = await prisma.berkas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends berkasUpdateManyArgs>(args: SelectSubset<T, berkasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Berkas and returns the data updated in the database.
     * @param {berkasUpdateManyAndReturnArgs} args - Arguments to update many Berkas.
     * @example
     * // Update many Berkas
     * const berkas = await prisma.berkas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Berkas and only return the `id_berkas`
     * const berkasWithId_berkasOnly = await prisma.berkas.updateManyAndReturn({
     *   select: { id_berkas: true },
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
    updateManyAndReturn<T extends berkasUpdateManyAndReturnArgs>(args: SelectSubset<T, berkasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Berkas.
     * @param {berkasUpsertArgs} args - Arguments to update or create a Berkas.
     * @example
     * // Update or create a Berkas
     * const berkas = await prisma.berkas.upsert({
     *   create: {
     *     // ... data to create a Berkas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Berkas we want to update
     *   }
     * })
     */
    upsert<T extends berkasUpsertArgs>(args: SelectSubset<T, berkasUpsertArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasCountArgs} args - Arguments to filter Berkas to count.
     * @example
     * // Count the number of Berkas
     * const count = await prisma.berkas.count({
     *   where: {
     *     // ... the filter for the Berkas we want to count
     *   }
     * })
    **/
    count<T extends berkasCountArgs>(
      args?: Subset<T, berkasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BerkasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerkasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BerkasAggregateArgs>(args: Subset<T, BerkasAggregateArgs>): Prisma.PrismaPromise<GetBerkasAggregateType<T>>

    /**
     * Group by Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasGroupByArgs} args - Group by arguments.
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
      T extends berkasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: berkasGroupByArgs['orderBy'] }
        : { orderBy?: berkasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, berkasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBerkasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the berkas model
   */
  readonly fields: berkasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for berkas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__berkasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendaftaran<T extends pendaftaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pendaftaranDefaultArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the berkas model
   */
  interface berkasFieldRefs {
    readonly id_berkas: FieldRef<"berkas", 'Int'>
    readonly id_pendaftaran: FieldRef<"berkas", 'Int'>
    readonly nama_file: FieldRef<"berkas", 'String'>
    readonly path_file: FieldRef<"berkas", 'String'>
    readonly tanggal_upload: FieldRef<"berkas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * berkas findUnique
   */
  export type berkasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas findUniqueOrThrow
   */
  export type berkasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas findFirst
   */
  export type berkasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for berkas.
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of berkas.
     */
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * berkas findFirstOrThrow
   */
  export type berkasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for berkas.
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of berkas.
     */
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * berkas findMany
   */
  export type berkasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing berkas.
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * berkas create
   */
  export type berkasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * The data needed to create a berkas.
     */
    data: XOR<berkasCreateInput, berkasUncheckedCreateInput>
  }

  /**
   * berkas createMany
   */
  export type berkasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many berkas.
     */
    data: berkasCreateManyInput | berkasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * berkas createManyAndReturn
   */
  export type berkasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * The data used to create many berkas.
     */
    data: berkasCreateManyInput | berkasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * berkas update
   */
  export type berkasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * The data needed to update a berkas.
     */
    data: XOR<berkasUpdateInput, berkasUncheckedUpdateInput>
    /**
     * Choose, which berkas to update.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas updateMany
   */
  export type berkasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update berkas.
     */
    data: XOR<berkasUpdateManyMutationInput, berkasUncheckedUpdateManyInput>
    /**
     * Filter which berkas to update
     */
    where?: berkasWhereInput
    /**
     * Limit how many berkas to update.
     */
    limit?: number
  }

  /**
   * berkas updateManyAndReturn
   */
  export type berkasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * The data used to update berkas.
     */
    data: XOR<berkasUpdateManyMutationInput, berkasUncheckedUpdateManyInput>
    /**
     * Filter which berkas to update
     */
    where?: berkasWhereInput
    /**
     * Limit how many berkas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * berkas upsert
   */
  export type berkasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * The filter to search for the berkas to update in case it exists.
     */
    where: berkasWhereUniqueInput
    /**
     * In case the berkas found by the `where` argument doesn't exist, create a new berkas with this data.
     */
    create: XOR<berkasCreateInput, berkasUncheckedCreateInput>
    /**
     * In case the berkas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<berkasUpdateInput, berkasUncheckedUpdateInput>
  }

  /**
   * berkas delete
   */
  export type berkasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter which berkas to delete.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas deleteMany
   */
  export type berkasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which berkas to delete
     */
    where?: berkasWhereInput
    /**
     * Limit how many berkas to delete.
     */
    limit?: number
  }

  /**
   * berkas without action
   */
  export type berkasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
  }


  /**
   * Model dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenAvgAggregateOutputType = {
    id_dosen: number | null
  }

  export type DosenSumAggregateOutputType = {
    id_dosen: bigint | null
  }

  export type DosenMinAggregateOutputType = {
    id_dosen: bigint | null
    nip: string | null
    nama: string | null
    email: string | null
    no_telepon: string | null
    jurusan: string | null
  }

  export type DosenMaxAggregateOutputType = {
    id_dosen: bigint | null
    nip: string | null
    nama: string | null
    email: string | null
    no_telepon: string | null
    jurusan: string | null
  }

  export type DosenCountAggregateOutputType = {
    id_dosen: number
    nip: number
    nama: number
    email: number
    no_telepon: number
    jurusan: number
    _all: number
  }


  export type DosenAvgAggregateInputType = {
    id_dosen?: true
  }

  export type DosenSumAggregateInputType = {
    id_dosen?: true
  }

  export type DosenMinAggregateInputType = {
    id_dosen?: true
    nip?: true
    nama?: true
    email?: true
    no_telepon?: true
    jurusan?: true
  }

  export type DosenMaxAggregateInputType = {
    id_dosen?: true
    nip?: true
    nama?: true
    email?: true
    no_telepon?: true
    jurusan?: true
  }

  export type DosenCountAggregateInputType = {
    id_dosen?: true
    nip?: true
    nama?: true
    email?: true
    no_telepon?: true
    jurusan?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosen to aggregate.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DosenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DosenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type dosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dosenWhereInput
    orderBy?: dosenOrderByWithAggregationInput | dosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: dosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _avg?: DosenAvgAggregateInputType
    _sum?: DosenSumAggregateInputType
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    id_dosen: bigint
    nip: string | null
    nama: string | null
    email: string | null
    no_telepon: string | null
    jurusan: string | null
    _count: DosenCountAggregateOutputType | null
    _avg: DosenAvgAggregateOutputType | null
    _sum: DosenSumAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends dosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type dosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dosen?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    lowongan?: boolean | dosen$lowonganArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dosen?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_dosen?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>

  export type dosenSelectScalar = {
    id_dosen?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
  }

  export type dosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_dosen" | "nip" | "nama" | "email" | "no_telepon" | "jurusan", ExtArgs["result"]["dosen"]>
  export type dosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    lowongan?: boolean | dosen$lowonganArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dosenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type dosenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $dosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dosen"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      lowongan: Prisma.$lowonganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_dosen: bigint
      nip: string | null
      nama: string | null
      email: string | null
      no_telepon: string | null
      jurusan: string | null
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type dosenGetPayload<S extends boolean | null | undefined | dosenDefaultArgs> = $Result.GetResult<Prisma.$dosenPayload, S>

  type dosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface dosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dosen'], meta: { name: 'dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {dosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dosenFindUniqueArgs>(args: SelectSubset<T, dosenFindUniqueArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dosenFindUniqueOrThrowArgs>(args: SelectSubset<T, dosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dosenFindFirstArgs>(args?: SelectSubset<T, dosenFindFirstArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dosenFindFirstOrThrowArgs>(args?: SelectSubset<T, dosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `id_dosen`
     * const dosenWithId_dosenOnly = await prisma.dosen.findMany({ select: { id_dosen: true } })
     * 
     */
    findMany<T extends dosenFindManyArgs>(args?: SelectSubset<T, dosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {dosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends dosenCreateArgs>(args: SelectSubset<T, dosenCreateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {dosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dosenCreateManyArgs>(args?: SelectSubset<T, dosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dosens and returns the data saved in the database.
     * @param {dosenCreateManyAndReturnArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dosens and only return the `id_dosen`
     * const dosenWithId_dosenOnly = await prisma.dosen.createManyAndReturn({
     *   select: { id_dosen: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dosenCreateManyAndReturnArgs>(args?: SelectSubset<T, dosenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dosen.
     * @param {dosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends dosenDeleteArgs>(args: SelectSubset<T, dosenDeleteArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {dosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dosenUpdateArgs>(args: SelectSubset<T, dosenUpdateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {dosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dosenDeleteManyArgs>(args?: SelectSubset<T, dosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dosenUpdateManyArgs>(args: SelectSubset<T, dosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens and returns the data updated in the database.
     * @param {dosenUpdateManyAndReturnArgs} args - Arguments to update many Dosens.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dosens and only return the `id_dosen`
     * const dosenWithId_dosenOnly = await prisma.dosen.updateManyAndReturn({
     *   select: { id_dosen: true },
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
    updateManyAndReturn<T extends dosenUpdateManyAndReturnArgs>(args: SelectSubset<T, dosenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dosen.
     * @param {dosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends dosenUpsertArgs>(args: SelectSubset<T, dosenUpsertArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends dosenCountArgs>(
      args?: Subset<T, dosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenGroupByArgs} args - Group by arguments.
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
      T extends dosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dosenGroupByArgs['orderBy'] }
        : { orderBy?: dosenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dosen model
   */
  readonly fields: dosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lowongan<T extends dosen$lowonganArgs<ExtArgs> = {}>(args?: Subset<T, dosen$lowonganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the dosen model
   */
  interface dosenFieldRefs {
    readonly id_dosen: FieldRef<"dosen", 'BigInt'>
    readonly nip: FieldRef<"dosen", 'String'>
    readonly nama: FieldRef<"dosen", 'String'>
    readonly email: FieldRef<"dosen", 'String'>
    readonly no_telepon: FieldRef<"dosen", 'String'>
    readonly jurusan: FieldRef<"dosen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dosen findUnique
   */
  export type dosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findUniqueOrThrow
   */
  export type dosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findFirst
   */
  export type dosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findFirstOrThrow
   */
  export type dosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findMany
   */
  export type dosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosens to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen create
   */
  export type dosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to create a dosen.
     */
    data: XOR<dosenCreateInput, dosenUncheckedCreateInput>
  }

  /**
   * dosen createMany
   */
  export type dosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dosens.
     */
    data: dosenCreateManyInput | dosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dosen createManyAndReturn
   */
  export type dosenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * The data used to create many dosens.
     */
    data: dosenCreateManyInput | dosenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dosen update
   */
  export type dosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to update a dosen.
     */
    data: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
    /**
     * Choose, which dosen to update.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen updateMany
   */
  export type dosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to update.
     */
    limit?: number
  }

  /**
   * dosen updateManyAndReturn
   */
  export type dosenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * dosen upsert
   */
  export type dosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The filter to search for the dosen to update in case it exists.
     */
    where: dosenWhereUniqueInput
    /**
     * In case the dosen found by the `where` argument doesn't exist, create a new dosen with this data.
     */
    create: XOR<dosenCreateInput, dosenUncheckedCreateInput>
    /**
     * In case the dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
  }

  /**
   * dosen delete
   */
  export type dosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter which dosen to delete.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen deleteMany
   */
  export type dosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosens to delete
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to delete.
     */
    limit?: number
  }

  /**
   * dosen.lowongan
   */
  export type dosen$lowonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    where?: lowonganWhereInput
    orderBy?: lowonganOrderByWithRelationInput | lowonganOrderByWithRelationInput[]
    cursor?: lowonganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * dosen without action
   */
  export type dosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
  }


  /**
   * Model kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasAvgAggregateOutputType = {
    id_kelas: number | null
    id_mk: number | null
  }

  export type KelasSumAggregateOutputType = {
    id_kelas: number | null
    id_mk: number | null
  }

  export type KelasMinAggregateOutputType = {
    id_kelas: number | null
    id_mk: number | null
    nama_kelas: string | null
    jadwal_kelas: string | null
  }

  export type KelasMaxAggregateOutputType = {
    id_kelas: number | null
    id_mk: number | null
    nama_kelas: string | null
    jadwal_kelas: string | null
  }

  export type KelasCountAggregateOutputType = {
    id_kelas: number
    id_mk: number
    nama_kelas: number
    jadwal_kelas: number
    _all: number
  }


  export type KelasAvgAggregateInputType = {
    id_kelas?: true
    id_mk?: true
  }

  export type KelasSumAggregateInputType = {
    id_kelas?: true
    id_mk?: true
  }

  export type KelasMinAggregateInputType = {
    id_kelas?: true
    id_mk?: true
    nama_kelas?: true
    jadwal_kelas?: true
  }

  export type KelasMaxAggregateInputType = {
    id_kelas?: true
    id_mk?: true
    nama_kelas?: true
    jadwal_kelas?: true
  }

  export type KelasCountAggregateInputType = {
    id_kelas?: true
    id_mk?: true
    nama_kelas?: true
    jadwal_kelas?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelas to aggregate.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type kelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelasWhereInput
    orderBy?: kelasOrderByWithAggregationInput | kelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: kelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _avg?: KelasAvgAggregateInputType
    _sum?: KelasSumAggregateInputType
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id_kelas: number
    id_mk: number
    nama_kelas: string | null
    jadwal_kelas: string | null
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends kelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type kelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kelas?: boolean
    id_mk?: boolean
    nama_kelas?: boolean
    jadwal_kelas?: boolean
    mata_kuliah?: boolean | mata_kuliahDefaultArgs<ExtArgs>
    lowongan?: boolean | kelas$lowonganArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type kelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kelas?: boolean
    id_mk?: boolean
    nama_kelas?: boolean
    jadwal_kelas?: boolean
    mata_kuliah?: boolean | mata_kuliahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type kelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kelas?: boolean
    id_mk?: boolean
    nama_kelas?: boolean
    jadwal_kelas?: boolean
    mata_kuliah?: boolean | mata_kuliahDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type kelasSelectScalar = {
    id_kelas?: boolean
    id_mk?: boolean
    nama_kelas?: boolean
    jadwal_kelas?: boolean
  }

  export type kelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kelas" | "id_mk" | "nama_kelas" | "jadwal_kelas", ExtArgs["result"]["kelas"]>
  export type kelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mata_kuliah?: boolean | mata_kuliahDefaultArgs<ExtArgs>
    lowongan?: boolean | kelas$lowonganArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type kelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mata_kuliah?: boolean | mata_kuliahDefaultArgs<ExtArgs>
  }
  export type kelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mata_kuliah?: boolean | mata_kuliahDefaultArgs<ExtArgs>
  }

  export type $kelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kelas"
    objects: {
      mata_kuliah: Prisma.$mata_kuliahPayload<ExtArgs>
      lowongan: Prisma.$lowonganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kelas: number
      id_mk: number
      nama_kelas: string | null
      jadwal_kelas: string | null
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type kelasGetPayload<S extends boolean | null | undefined | kelasDefaultArgs> = $Result.GetResult<Prisma.$kelasPayload, S>

  type kelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface kelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kelas'], meta: { name: 'kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {kelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kelasFindUniqueArgs>(args: SelectSubset<T, kelasFindUniqueArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kelasFindUniqueOrThrowArgs>(args: SelectSubset<T, kelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kelasFindFirstArgs>(args?: SelectSubset<T, kelasFindFirstArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kelasFindFirstOrThrowArgs>(args?: SelectSubset<T, kelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id_kelas`
     * const kelasWithId_kelasOnly = await prisma.kelas.findMany({ select: { id_kelas: true } })
     * 
     */
    findMany<T extends kelasFindManyArgs>(args?: SelectSubset<T, kelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {kelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends kelasCreateArgs>(args: SelectSubset<T, kelasCreateArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {kelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kelasCreateManyArgs>(args?: SelectSubset<T, kelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {kelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelas and only return the `id_kelas`
     * const kelasWithId_kelasOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id_kelas: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kelasCreateManyAndReturnArgs>(args?: SelectSubset<T, kelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelas.
     * @param {kelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends kelasDeleteArgs>(args: SelectSubset<T, kelasDeleteArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {kelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kelasUpdateArgs>(args: SelectSubset<T, kelasUpdateArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {kelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kelasDeleteManyArgs>(args?: SelectSubset<T, kelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kelasUpdateManyArgs>(args: SelectSubset<T, kelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {kelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelas and only return the `id_kelas`
     * const kelasWithId_kelasOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id_kelas: true },
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
    updateManyAndReturn<T extends kelasUpdateManyAndReturnArgs>(args: SelectSubset<T, kelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelas.
     * @param {kelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends kelasUpsertArgs>(args: SelectSubset<T, kelasUpsertArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends kelasCountArgs>(
      args?: Subset<T, kelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelasGroupByArgs} args - Group by arguments.
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
      T extends kelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kelasGroupByArgs['orderBy'] }
        : { orderBy?: kelasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kelas model
   */
  readonly fields: kelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mata_kuliah<T extends mata_kuliahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mata_kuliahDefaultArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lowongan<T extends kelas$lowonganArgs<ExtArgs> = {}>(args?: Subset<T, kelas$lowonganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the kelas model
   */
  interface kelasFieldRefs {
    readonly id_kelas: FieldRef<"kelas", 'Int'>
    readonly id_mk: FieldRef<"kelas", 'Int'>
    readonly nama_kelas: FieldRef<"kelas", 'String'>
    readonly jadwal_kelas: FieldRef<"kelas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kelas findUnique
   */
  export type kelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas findUniqueOrThrow
   */
  export type kelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas findFirst
   */
  export type kelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas findFirstOrThrow
   */
  export type kelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas findMany
   */
  export type kelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter, which kelas to fetch.
     */
    where?: kelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelas to fetch.
     */
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kelas.
     */
    cursor?: kelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * kelas create
   */
  export type kelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The data needed to create a kelas.
     */
    data: XOR<kelasCreateInput, kelasUncheckedCreateInput>
  }

  /**
   * kelas createMany
   */
  export type kelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kelas.
     */
    data: kelasCreateManyInput | kelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kelas createManyAndReturn
   */
  export type kelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * The data used to create many kelas.
     */
    data: kelasCreateManyInput | kelasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * kelas update
   */
  export type kelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The data needed to update a kelas.
     */
    data: XOR<kelasUpdateInput, kelasUncheckedUpdateInput>
    /**
     * Choose, which kelas to update.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas updateMany
   */
  export type kelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kelas.
     */
    data: XOR<kelasUpdateManyMutationInput, kelasUncheckedUpdateManyInput>
    /**
     * Filter which kelas to update
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to update.
     */
    limit?: number
  }

  /**
   * kelas updateManyAndReturn
   */
  export type kelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * The data used to update kelas.
     */
    data: XOR<kelasUpdateManyMutationInput, kelasUncheckedUpdateManyInput>
    /**
     * Filter which kelas to update
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * kelas upsert
   */
  export type kelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * The filter to search for the kelas to update in case it exists.
     */
    where: kelasWhereUniqueInput
    /**
     * In case the kelas found by the `where` argument doesn't exist, create a new kelas with this data.
     */
    create: XOR<kelasCreateInput, kelasUncheckedCreateInput>
    /**
     * In case the kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kelasUpdateInput, kelasUncheckedUpdateInput>
  }

  /**
   * kelas delete
   */
  export type kelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    /**
     * Filter which kelas to delete.
     */
    where: kelasWhereUniqueInput
  }

  /**
   * kelas deleteMany
   */
  export type kelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelas to delete
     */
    where?: kelasWhereInput
    /**
     * Limit how many kelas to delete.
     */
    limit?: number
  }

  /**
   * kelas.lowongan
   */
  export type kelas$lowonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    where?: lowonganWhereInput
    orderBy?: lowonganOrderByWithRelationInput | lowonganOrderByWithRelationInput[]
    cursor?: lowonganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * kelas without action
   */
  export type kelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
  }


  /**
   * Model lowongan
   */

  export type AggregateLowongan = {
    _count: LowonganCountAggregateOutputType | null
    _avg: LowonganAvgAggregateOutputType | null
    _sum: LowonganSumAggregateOutputType | null
    _min: LowonganMinAggregateOutputType | null
    _max: LowonganMaxAggregateOutputType | null
  }

  export type LowonganAvgAggregateOutputType = {
    id_lowongan: number | null
    id_kelas: number | null
    id_dosen: number | null
    jumlah_asisten: number | null
    honor: Decimal | null
  }

  export type LowonganSumAggregateOutputType = {
    id_lowongan: number | null
    id_kelas: number | null
    id_dosen: bigint | null
    jumlah_asisten: number | null
    honor: Decimal | null
  }

  export type LowonganMinAggregateOutputType = {
    id_lowongan: number | null
    id_kelas: number | null
    id_dosen: bigint | null
    tahun_ajaran: string | null
    jumlah_asisten: number | null
    persyaratan: string | null
    honor: Decimal | null
    tanggal_mulai_pendaftaran: Date | null
    tanggal_akhir_pendaftaran: Date | null
    tanggal_mulai_kontrak: Date | null
    tanggal_akhir_kontrak: Date | null
  }

  export type LowonganMaxAggregateOutputType = {
    id_lowongan: number | null
    id_kelas: number | null
    id_dosen: bigint | null
    tahun_ajaran: string | null
    jumlah_asisten: number | null
    persyaratan: string | null
    honor: Decimal | null
    tanggal_mulai_pendaftaran: Date | null
    tanggal_akhir_pendaftaran: Date | null
    tanggal_mulai_kontrak: Date | null
    tanggal_akhir_kontrak: Date | null
  }

  export type LowonganCountAggregateOutputType = {
    id_lowongan: number
    id_kelas: number
    id_dosen: number
    tahun_ajaran: number
    jumlah_asisten: number
    persyaratan: number
    honor: number
    tanggal_mulai_pendaftaran: number
    tanggal_akhir_pendaftaran: number
    tanggal_mulai_kontrak: number
    tanggal_akhir_kontrak: number
    _all: number
  }


  export type LowonganAvgAggregateInputType = {
    id_lowongan?: true
    id_kelas?: true
    id_dosen?: true
    jumlah_asisten?: true
    honor?: true
  }

  export type LowonganSumAggregateInputType = {
    id_lowongan?: true
    id_kelas?: true
    id_dosen?: true
    jumlah_asisten?: true
    honor?: true
  }

  export type LowonganMinAggregateInputType = {
    id_lowongan?: true
    id_kelas?: true
    id_dosen?: true
    tahun_ajaran?: true
    jumlah_asisten?: true
    persyaratan?: true
    honor?: true
    tanggal_mulai_pendaftaran?: true
    tanggal_akhir_pendaftaran?: true
    tanggal_mulai_kontrak?: true
    tanggal_akhir_kontrak?: true
  }

  export type LowonganMaxAggregateInputType = {
    id_lowongan?: true
    id_kelas?: true
    id_dosen?: true
    tahun_ajaran?: true
    jumlah_asisten?: true
    persyaratan?: true
    honor?: true
    tanggal_mulai_pendaftaran?: true
    tanggal_akhir_pendaftaran?: true
    tanggal_mulai_kontrak?: true
    tanggal_akhir_kontrak?: true
  }

  export type LowonganCountAggregateInputType = {
    id_lowongan?: true
    id_kelas?: true
    id_dosen?: true
    tahun_ajaran?: true
    jumlah_asisten?: true
    persyaratan?: true
    honor?: true
    tanggal_mulai_pendaftaran?: true
    tanggal_akhir_pendaftaran?: true
    tanggal_mulai_kontrak?: true
    tanggal_akhir_kontrak?: true
    _all?: true
  }

  export type LowonganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lowongan to aggregate.
     */
    where?: lowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lowongans to fetch.
     */
    orderBy?: lowonganOrderByWithRelationInput | lowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lowongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lowongans
    **/
    _count?: true | LowonganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LowonganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LowonganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LowonganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LowonganMaxAggregateInputType
  }

  export type GetLowonganAggregateType<T extends LowonganAggregateArgs> = {
        [P in keyof T & keyof AggregateLowongan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLowongan[P]>
      : GetScalarType<T[P], AggregateLowongan[P]>
  }




  export type lowonganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lowonganWhereInput
    orderBy?: lowonganOrderByWithAggregationInput | lowonganOrderByWithAggregationInput[]
    by: LowonganScalarFieldEnum[] | LowonganScalarFieldEnum
    having?: lowonganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LowonganCountAggregateInputType | true
    _avg?: LowonganAvgAggregateInputType
    _sum?: LowonganSumAggregateInputType
    _min?: LowonganMinAggregateInputType
    _max?: LowonganMaxAggregateInputType
  }

  export type LowonganGroupByOutputType = {
    id_lowongan: number
    id_kelas: number
    id_dosen: bigint
    tahun_ajaran: string | null
    jumlah_asisten: number | null
    persyaratan: string | null
    honor: Decimal | null
    tanggal_mulai_pendaftaran: Date | null
    tanggal_akhir_pendaftaran: Date | null
    tanggal_mulai_kontrak: Date | null
    tanggal_akhir_kontrak: Date | null
    _count: LowonganCountAggregateOutputType | null
    _avg: LowonganAvgAggregateOutputType | null
    _sum: LowonganSumAggregateOutputType | null
    _min: LowonganMinAggregateOutputType | null
    _max: LowonganMaxAggregateOutputType | null
  }

  type GetLowonganGroupByPayload<T extends lowonganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LowonganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LowonganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LowonganGroupByOutputType[P]>
            : GetScalarType<T[P], LowonganGroupByOutputType[P]>
        }
      >
    >


  export type lowonganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_lowongan?: boolean
    id_kelas?: boolean
    id_dosen?: boolean
    tahun_ajaran?: boolean
    jumlah_asisten?: boolean
    persyaratan?: boolean
    honor?: boolean
    tanggal_mulai_pendaftaran?: boolean
    tanggal_akhir_pendaftaran?: boolean
    tanggal_mulai_kontrak?: boolean
    tanggal_akhir_kontrak?: boolean
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
    notifikasi?: boolean | lowongan$notifikasiArgs<ExtArgs>
    pendaftaran?: boolean | lowongan$pendaftaranArgs<ExtArgs>
    _count?: boolean | LowonganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowongan"]>

  export type lowonganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_lowongan?: boolean
    id_kelas?: boolean
    id_dosen?: boolean
    tahun_ajaran?: boolean
    jumlah_asisten?: boolean
    persyaratan?: boolean
    honor?: boolean
    tanggal_mulai_pendaftaran?: boolean
    tanggal_akhir_pendaftaran?: boolean
    tanggal_mulai_kontrak?: boolean
    tanggal_akhir_kontrak?: boolean
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowongan"]>

  export type lowonganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_lowongan?: boolean
    id_kelas?: boolean
    id_dosen?: boolean
    tahun_ajaran?: boolean
    jumlah_asisten?: boolean
    persyaratan?: boolean
    honor?: boolean
    tanggal_mulai_pendaftaran?: boolean
    tanggal_akhir_pendaftaran?: boolean
    tanggal_mulai_kontrak?: boolean
    tanggal_akhir_kontrak?: boolean
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lowongan"]>

  export type lowonganSelectScalar = {
    id_lowongan?: boolean
    id_kelas?: boolean
    id_dosen?: boolean
    tahun_ajaran?: boolean
    jumlah_asisten?: boolean
    persyaratan?: boolean
    honor?: boolean
    tanggal_mulai_pendaftaran?: boolean
    tanggal_akhir_pendaftaran?: boolean
    tanggal_mulai_kontrak?: boolean
    tanggal_akhir_kontrak?: boolean
  }

  export type lowonganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_lowongan" | "id_kelas" | "id_dosen" | "tahun_ajaran" | "jumlah_asisten" | "persyaratan" | "honor" | "tanggal_mulai_pendaftaran" | "tanggal_akhir_pendaftaran" | "tanggal_mulai_kontrak" | "tanggal_akhir_kontrak", ExtArgs["result"]["lowongan"]>
  export type lowonganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
    notifikasi?: boolean | lowongan$notifikasiArgs<ExtArgs>
    pendaftaran?: boolean | lowongan$pendaftaranArgs<ExtArgs>
    _count?: boolean | LowonganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lowonganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
  }
  export type lowonganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
    kelas?: boolean | kelasDefaultArgs<ExtArgs>
  }

  export type $lowonganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lowongan"
    objects: {
      dosen: Prisma.$dosenPayload<ExtArgs>
      kelas: Prisma.$kelasPayload<ExtArgs>
      notifikasi: Prisma.$notifikasiPayload<ExtArgs>[]
      pendaftaran: Prisma.$pendaftaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_lowongan: number
      id_kelas: number
      id_dosen: bigint
      tahun_ajaran: string | null
      jumlah_asisten: number | null
      persyaratan: string | null
      honor: Prisma.Decimal | null
      tanggal_mulai_pendaftaran: Date | null
      tanggal_akhir_pendaftaran: Date | null
      tanggal_mulai_kontrak: Date | null
      tanggal_akhir_kontrak: Date | null
    }, ExtArgs["result"]["lowongan"]>
    composites: {}
  }

  type lowonganGetPayload<S extends boolean | null | undefined | lowonganDefaultArgs> = $Result.GetResult<Prisma.$lowonganPayload, S>

  type lowonganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lowonganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LowonganCountAggregateInputType | true
    }

  export interface lowonganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lowongan'], meta: { name: 'lowongan' } }
    /**
     * Find zero or one Lowongan that matches the filter.
     * @param {lowonganFindUniqueArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lowonganFindUniqueArgs>(args: SelectSubset<T, lowonganFindUniqueArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lowongan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lowonganFindUniqueOrThrowArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lowonganFindUniqueOrThrowArgs>(args: SelectSubset<T, lowonganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lowongan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lowonganFindFirstArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lowonganFindFirstArgs>(args?: SelectSubset<T, lowonganFindFirstArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lowongan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lowonganFindFirstOrThrowArgs} args - Arguments to find a Lowongan
     * @example
     * // Get one Lowongan
     * const lowongan = await prisma.lowongan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lowonganFindFirstOrThrowArgs>(args?: SelectSubset<T, lowonganFindFirstOrThrowArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lowongans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lowonganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lowongans
     * const lowongans = await prisma.lowongan.findMany()
     * 
     * // Get first 10 Lowongans
     * const lowongans = await prisma.lowongan.findMany({ take: 10 })
     * 
     * // Only select the `id_lowongan`
     * const lowonganWithId_lowonganOnly = await prisma.lowongan.findMany({ select: { id_lowongan: true } })
     * 
     */
    findMany<T extends lowonganFindManyArgs>(args?: SelectSubset<T, lowonganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lowongan.
     * @param {lowonganCreateArgs} args - Arguments to create a Lowongan.
     * @example
     * // Create one Lowongan
     * const Lowongan = await prisma.lowongan.create({
     *   data: {
     *     // ... data to create a Lowongan
     *   }
     * })
     * 
     */
    create<T extends lowonganCreateArgs>(args: SelectSubset<T, lowonganCreateArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lowongans.
     * @param {lowonganCreateManyArgs} args - Arguments to create many Lowongans.
     * @example
     * // Create many Lowongans
     * const lowongan = await prisma.lowongan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lowonganCreateManyArgs>(args?: SelectSubset<T, lowonganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lowongans and returns the data saved in the database.
     * @param {lowonganCreateManyAndReturnArgs} args - Arguments to create many Lowongans.
     * @example
     * // Create many Lowongans
     * const lowongan = await prisma.lowongan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lowongans and only return the `id_lowongan`
     * const lowonganWithId_lowonganOnly = await prisma.lowongan.createManyAndReturn({
     *   select: { id_lowongan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lowonganCreateManyAndReturnArgs>(args?: SelectSubset<T, lowonganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lowongan.
     * @param {lowonganDeleteArgs} args - Arguments to delete one Lowongan.
     * @example
     * // Delete one Lowongan
     * const Lowongan = await prisma.lowongan.delete({
     *   where: {
     *     // ... filter to delete one Lowongan
     *   }
     * })
     * 
     */
    delete<T extends lowonganDeleteArgs>(args: SelectSubset<T, lowonganDeleteArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lowongan.
     * @param {lowonganUpdateArgs} args - Arguments to update one Lowongan.
     * @example
     * // Update one Lowongan
     * const lowongan = await prisma.lowongan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lowonganUpdateArgs>(args: SelectSubset<T, lowonganUpdateArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lowongans.
     * @param {lowonganDeleteManyArgs} args - Arguments to filter Lowongans to delete.
     * @example
     * // Delete a few Lowongans
     * const { count } = await prisma.lowongan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lowonganDeleteManyArgs>(args?: SelectSubset<T, lowonganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lowongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lowonganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lowongans
     * const lowongan = await prisma.lowongan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lowonganUpdateManyArgs>(args: SelectSubset<T, lowonganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lowongans and returns the data updated in the database.
     * @param {lowonganUpdateManyAndReturnArgs} args - Arguments to update many Lowongans.
     * @example
     * // Update many Lowongans
     * const lowongan = await prisma.lowongan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lowongans and only return the `id_lowongan`
     * const lowonganWithId_lowonganOnly = await prisma.lowongan.updateManyAndReturn({
     *   select: { id_lowongan: true },
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
    updateManyAndReturn<T extends lowonganUpdateManyAndReturnArgs>(args: SelectSubset<T, lowonganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lowongan.
     * @param {lowonganUpsertArgs} args - Arguments to update or create a Lowongan.
     * @example
     * // Update or create a Lowongan
     * const lowongan = await prisma.lowongan.upsert({
     *   create: {
     *     // ... data to create a Lowongan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lowongan we want to update
     *   }
     * })
     */
    upsert<T extends lowonganUpsertArgs>(args: SelectSubset<T, lowonganUpsertArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lowongans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lowonganCountArgs} args - Arguments to filter Lowongans to count.
     * @example
     * // Count the number of Lowongans
     * const count = await prisma.lowongan.count({
     *   where: {
     *     // ... the filter for the Lowongans we want to count
     *   }
     * })
    **/
    count<T extends lowonganCountArgs>(
      args?: Subset<T, lowonganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LowonganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lowongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LowonganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LowonganAggregateArgs>(args: Subset<T, LowonganAggregateArgs>): Prisma.PrismaPromise<GetLowonganAggregateType<T>>

    /**
     * Group by Lowongan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lowonganGroupByArgs} args - Group by arguments.
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
      T extends lowonganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lowonganGroupByArgs['orderBy'] }
        : { orderBy?: lowonganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lowonganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLowonganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lowongan model
   */
  readonly fields: lowonganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lowongan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lowonganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends dosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dosenDefaultArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas<T extends kelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, kelasDefaultArgs<ExtArgs>>): Prisma__kelasClient<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifikasi<T extends lowongan$notifikasiArgs<ExtArgs> = {}>(args?: Subset<T, lowongan$notifikasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pendaftaran<T extends lowongan$pendaftaranArgs<ExtArgs> = {}>(args?: Subset<T, lowongan$pendaftaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the lowongan model
   */
  interface lowonganFieldRefs {
    readonly id_lowongan: FieldRef<"lowongan", 'Int'>
    readonly id_kelas: FieldRef<"lowongan", 'Int'>
    readonly id_dosen: FieldRef<"lowongan", 'BigInt'>
    readonly tahun_ajaran: FieldRef<"lowongan", 'String'>
    readonly jumlah_asisten: FieldRef<"lowongan", 'Int'>
    readonly persyaratan: FieldRef<"lowongan", 'String'>
    readonly honor: FieldRef<"lowongan", 'Decimal'>
    readonly tanggal_mulai_pendaftaran: FieldRef<"lowongan", 'DateTime'>
    readonly tanggal_akhir_pendaftaran: FieldRef<"lowongan", 'DateTime'>
    readonly tanggal_mulai_kontrak: FieldRef<"lowongan", 'DateTime'>
    readonly tanggal_akhir_kontrak: FieldRef<"lowongan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lowongan findUnique
   */
  export type lowonganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * Filter, which lowongan to fetch.
     */
    where: lowonganWhereUniqueInput
  }

  /**
   * lowongan findUniqueOrThrow
   */
  export type lowonganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * Filter, which lowongan to fetch.
     */
    where: lowonganWhereUniqueInput
  }

  /**
   * lowongan findFirst
   */
  export type lowonganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * Filter, which lowongan to fetch.
     */
    where?: lowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lowongans to fetch.
     */
    orderBy?: lowonganOrderByWithRelationInput | lowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lowongans.
     */
    cursor?: lowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lowongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lowongans.
     */
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * lowongan findFirstOrThrow
   */
  export type lowonganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * Filter, which lowongan to fetch.
     */
    where?: lowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lowongans to fetch.
     */
    orderBy?: lowonganOrderByWithRelationInput | lowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lowongans.
     */
    cursor?: lowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lowongans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lowongans.
     */
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * lowongan findMany
   */
  export type lowonganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * Filter, which lowongans to fetch.
     */
    where?: lowonganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lowongans to fetch.
     */
    orderBy?: lowonganOrderByWithRelationInput | lowonganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lowongans.
     */
    cursor?: lowonganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lowongans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lowongans.
     */
    skip?: number
    distinct?: LowonganScalarFieldEnum | LowonganScalarFieldEnum[]
  }

  /**
   * lowongan create
   */
  export type lowonganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * The data needed to create a lowongan.
     */
    data: XOR<lowonganCreateInput, lowonganUncheckedCreateInput>
  }

  /**
   * lowongan createMany
   */
  export type lowonganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lowongans.
     */
    data: lowonganCreateManyInput | lowonganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lowongan createManyAndReturn
   */
  export type lowonganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * The data used to create many lowongans.
     */
    data: lowonganCreateManyInput | lowonganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lowongan update
   */
  export type lowonganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * The data needed to update a lowongan.
     */
    data: XOR<lowonganUpdateInput, lowonganUncheckedUpdateInput>
    /**
     * Choose, which lowongan to update.
     */
    where: lowonganWhereUniqueInput
  }

  /**
   * lowongan updateMany
   */
  export type lowonganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lowongans.
     */
    data: XOR<lowonganUpdateManyMutationInput, lowonganUncheckedUpdateManyInput>
    /**
     * Filter which lowongans to update
     */
    where?: lowonganWhereInput
    /**
     * Limit how many lowongans to update.
     */
    limit?: number
  }

  /**
   * lowongan updateManyAndReturn
   */
  export type lowonganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * The data used to update lowongans.
     */
    data: XOR<lowonganUpdateManyMutationInput, lowonganUncheckedUpdateManyInput>
    /**
     * Filter which lowongans to update
     */
    where?: lowonganWhereInput
    /**
     * Limit how many lowongans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lowongan upsert
   */
  export type lowonganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * The filter to search for the lowongan to update in case it exists.
     */
    where: lowonganWhereUniqueInput
    /**
     * In case the lowongan found by the `where` argument doesn't exist, create a new lowongan with this data.
     */
    create: XOR<lowonganCreateInput, lowonganUncheckedCreateInput>
    /**
     * In case the lowongan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lowonganUpdateInput, lowonganUncheckedUpdateInput>
  }

  /**
   * lowongan delete
   */
  export type lowonganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    /**
     * Filter which lowongan to delete.
     */
    where: lowonganWhereUniqueInput
  }

  /**
   * lowongan deleteMany
   */
  export type lowonganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lowongans to delete
     */
    where?: lowonganWhereInput
    /**
     * Limit how many lowongans to delete.
     */
    limit?: number
  }

  /**
   * lowongan.notifikasi
   */
  export type lowongan$notifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    where?: notifikasiWhereInput
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    cursor?: notifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * lowongan.pendaftaran
   */
  export type lowongan$pendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    where?: pendaftaranWhereInput
    orderBy?: pendaftaranOrderByWithRelationInput | pendaftaranOrderByWithRelationInput[]
    cursor?: pendaftaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * lowongan without action
   */
  export type lowonganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
  }


  /**
   * Model mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaAvgAggregateOutputType = {
    id_mahasiswa: number | null
    semester: number | null
  }

  export type MahasiswaSumAggregateOutputType = {
    id_mahasiswa: bigint | null
    semester: number | null
  }

  export type MahasiswaMinAggregateOutputType = {
    id_mahasiswa: bigint | null
    nrp: string | null
    nama: string | null
    email: string | null
    no_telepon: string | null
    jurusan: string | null
    angkatan: string | null
    semester: number | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    id_mahasiswa: bigint | null
    nrp: string | null
    nama: string | null
    email: string | null
    no_telepon: string | null
    jurusan: string | null
    angkatan: string | null
    semester: number | null
  }

  export type MahasiswaCountAggregateOutputType = {
    id_mahasiswa: number
    nrp: number
    nama: number
    email: number
    no_telepon: number
    jurusan: number
    angkatan: number
    semester: number
    _all: number
  }


  export type MahasiswaAvgAggregateInputType = {
    id_mahasiswa?: true
    semester?: true
  }

  export type MahasiswaSumAggregateInputType = {
    id_mahasiswa?: true
    semester?: true
  }

  export type MahasiswaMinAggregateInputType = {
    id_mahasiswa?: true
    nrp?: true
    nama?: true
    email?: true
    no_telepon?: true
    jurusan?: true
    angkatan?: true
    semester?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    id_mahasiswa?: true
    nrp?: true
    nama?: true
    email?: true
    no_telepon?: true
    jurusan?: true
    angkatan?: true
    semester?: true
  }

  export type MahasiswaCountAggregateInputType = {
    id_mahasiswa?: true
    nrp?: true
    nama?: true
    email?: true
    no_telepon?: true
    jurusan?: true
    angkatan?: true
    semester?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswa to aggregate.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MahasiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MahasiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type mahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mahasiswaWhereInput
    orderBy?: mahasiswaOrderByWithAggregationInput | mahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: mahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _avg?: MahasiswaAvgAggregateInputType
    _sum?: MahasiswaSumAggregateInputType
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    id_mahasiswa: bigint
    nrp: string | null
    nama: string | null
    email: string | null
    no_telepon: string | null
    jurusan: string | null
    angkatan: string | null
    semester: number | null
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends mahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type mahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mahasiswa?: boolean
    nrp?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
    angkatan?: boolean
    semester?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    notifikasi?: boolean | mahasiswa$notifikasiArgs<ExtArgs>
    pendaftaran?: boolean | mahasiswa$pendaftaranArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mahasiswa?: boolean
    nrp?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
    angkatan?: boolean
    semester?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mahasiswa?: boolean
    nrp?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
    angkatan?: boolean
    semester?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type mahasiswaSelectScalar = {
    id_mahasiswa?: boolean
    nrp?: boolean
    nama?: boolean
    email?: boolean
    no_telepon?: boolean
    jurusan?: boolean
    angkatan?: boolean
    semester?: boolean
  }

  export type mahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mahasiswa" | "nrp" | "nama" | "email" | "no_telepon" | "jurusan" | "angkatan" | "semester", ExtArgs["result"]["mahasiswa"]>
  export type mahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    notifikasi?: boolean | mahasiswa$notifikasiArgs<ExtArgs>
    pendaftaran?: boolean | mahasiswa$pendaftaranArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mahasiswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type mahasiswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $mahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mahasiswa"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      notifikasi: Prisma.$notifikasiPayload<ExtArgs>[]
      pendaftaran: Prisma.$pendaftaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mahasiswa: bigint
      nrp: string | null
      nama: string | null
      email: string | null
      no_telepon: string | null
      jurusan: string | null
      angkatan: string | null
      semester: number | null
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type mahasiswaGetPayload<S extends boolean | null | undefined | mahasiswaDefaultArgs> = $Result.GetResult<Prisma.$mahasiswaPayload, S>

  type mahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface mahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mahasiswa'], meta: { name: 'mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {mahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mahasiswaFindUniqueArgs>(args: SelectSubset<T, mahasiswaFindUniqueArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, mahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mahasiswaFindFirstArgs>(args?: SelectSubset<T, mahasiswaFindFirstArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, mahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id_mahasiswa`
     * const mahasiswaWithId_mahasiswaOnly = await prisma.mahasiswa.findMany({ select: { id_mahasiswa: true } })
     * 
     */
    findMany<T extends mahasiswaFindManyArgs>(args?: SelectSubset<T, mahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {mahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends mahasiswaCreateArgs>(args: SelectSubset<T, mahasiswaCreateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {mahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mahasiswaCreateManyArgs>(args?: SelectSubset<T, mahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mahasiswas and returns the data saved in the database.
     * @param {mahasiswaCreateManyAndReturnArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mahasiswas and only return the `id_mahasiswa`
     * const mahasiswaWithId_mahasiswaOnly = await prisma.mahasiswa.createManyAndReturn({
     *   select: { id_mahasiswa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mahasiswaCreateManyAndReturnArgs>(args?: SelectSubset<T, mahasiswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mahasiswa.
     * @param {mahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends mahasiswaDeleteArgs>(args: SelectSubset<T, mahasiswaDeleteArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {mahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mahasiswaUpdateArgs>(args: SelectSubset<T, mahasiswaUpdateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {mahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mahasiswaDeleteManyArgs>(args?: SelectSubset<T, mahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mahasiswaUpdateManyArgs>(args: SelectSubset<T, mahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas and returns the data updated in the database.
     * @param {mahasiswaUpdateManyAndReturnArgs} args - Arguments to update many Mahasiswas.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mahasiswas and only return the `id_mahasiswa`
     * const mahasiswaWithId_mahasiswaOnly = await prisma.mahasiswa.updateManyAndReturn({
     *   select: { id_mahasiswa: true },
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
    updateManyAndReturn<T extends mahasiswaUpdateManyAndReturnArgs>(args: SelectSubset<T, mahasiswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mahasiswa.
     * @param {mahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends mahasiswaUpsertArgs>(args: SelectSubset<T, mahasiswaUpsertArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends mahasiswaCountArgs>(
      args?: Subset<T, mahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaGroupByArgs} args - Group by arguments.
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
      T extends mahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: mahasiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mahasiswa model
   */
  readonly fields: mahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifikasi<T extends mahasiswa$notifikasiArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$notifikasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pendaftaran<T extends mahasiswa$pendaftaranArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$pendaftaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the mahasiswa model
   */
  interface mahasiswaFieldRefs {
    readonly id_mahasiswa: FieldRef<"mahasiswa", 'BigInt'>
    readonly nrp: FieldRef<"mahasiswa", 'String'>
    readonly nama: FieldRef<"mahasiswa", 'String'>
    readonly email: FieldRef<"mahasiswa", 'String'>
    readonly no_telepon: FieldRef<"mahasiswa", 'String'>
    readonly jurusan: FieldRef<"mahasiswa", 'String'>
    readonly angkatan: FieldRef<"mahasiswa", 'String'>
    readonly semester: FieldRef<"mahasiswa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mahasiswa findUnique
   */
  export type mahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findUniqueOrThrow
   */
  export type mahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findFirst
   */
  export type mahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findFirstOrThrow
   */
  export type mahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findMany
   */
  export type mahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswas to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa create
   */
  export type mahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a mahasiswa.
     */
    data: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
  }

  /**
   * mahasiswa createMany
   */
  export type mahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mahasiswa createManyAndReturn
   */
  export type mahasiswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mahasiswa update
   */
  export type mahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a mahasiswa.
     */
    data: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
    /**
     * Choose, which mahasiswa to update.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa updateMany
   */
  export type mahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to update.
     */
    limit?: number
  }

  /**
   * mahasiswa updateManyAndReturn
   */
  export type mahasiswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mahasiswa upsert
   */
  export type mahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the mahasiswa to update in case it exists.
     */
    where: mahasiswaWhereUniqueInput
    /**
     * In case the mahasiswa found by the `where` argument doesn't exist, create a new mahasiswa with this data.
     */
    create: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
    /**
     * In case the mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
  }

  /**
   * mahasiswa delete
   */
  export type mahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter which mahasiswa to delete.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa deleteMany
   */
  export type mahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswas to delete
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * mahasiswa.notifikasi
   */
  export type mahasiswa$notifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    where?: notifikasiWhereInput
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    cursor?: notifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * mahasiswa.pendaftaran
   */
  export type mahasiswa$pendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    where?: pendaftaranWhereInput
    orderBy?: pendaftaranOrderByWithRelationInput | pendaftaranOrderByWithRelationInput[]
    cursor?: pendaftaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * mahasiswa without action
   */
  export type mahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model mata_kuliah
   */

  export type AggregateMata_kuliah = {
    _count: Mata_kuliahCountAggregateOutputType | null
    _avg: Mata_kuliahAvgAggregateOutputType | null
    _sum: Mata_kuliahSumAggregateOutputType | null
    _min: Mata_kuliahMinAggregateOutputType | null
    _max: Mata_kuliahMaxAggregateOutputType | null
  }

  export type Mata_kuliahAvgAggregateOutputType = {
    id_mk: number | null
    jumlah_sks: number | null
  }

  export type Mata_kuliahSumAggregateOutputType = {
    id_mk: number | null
    jumlah_sks: number | null
  }

  export type Mata_kuliahMinAggregateOutputType = {
    id_mk: number | null
    kode_mk: string | null
    nama_mk: string | null
    jumlah_sks: number | null
  }

  export type Mata_kuliahMaxAggregateOutputType = {
    id_mk: number | null
    kode_mk: string | null
    nama_mk: string | null
    jumlah_sks: number | null
  }

  export type Mata_kuliahCountAggregateOutputType = {
    id_mk: number
    kode_mk: number
    nama_mk: number
    jumlah_sks: number
    _all: number
  }


  export type Mata_kuliahAvgAggregateInputType = {
    id_mk?: true
    jumlah_sks?: true
  }

  export type Mata_kuliahSumAggregateInputType = {
    id_mk?: true
    jumlah_sks?: true
  }

  export type Mata_kuliahMinAggregateInputType = {
    id_mk?: true
    kode_mk?: true
    nama_mk?: true
    jumlah_sks?: true
  }

  export type Mata_kuliahMaxAggregateInputType = {
    id_mk?: true
    kode_mk?: true
    nama_mk?: true
    jumlah_sks?: true
  }

  export type Mata_kuliahCountAggregateInputType = {
    id_mk?: true
    kode_mk?: true
    nama_mk?: true
    jumlah_sks?: true
    _all?: true
  }

  export type Mata_kuliahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mata_kuliah to aggregate.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mata_kuliahs
    **/
    _count?: true | Mata_kuliahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mata_kuliahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mata_kuliahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mata_kuliahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mata_kuliahMaxAggregateInputType
  }

  export type GetMata_kuliahAggregateType<T extends Mata_kuliahAggregateArgs> = {
        [P in keyof T & keyof AggregateMata_kuliah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMata_kuliah[P]>
      : GetScalarType<T[P], AggregateMata_kuliah[P]>
  }




  export type mata_kuliahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mata_kuliahWhereInput
    orderBy?: mata_kuliahOrderByWithAggregationInput | mata_kuliahOrderByWithAggregationInput[]
    by: Mata_kuliahScalarFieldEnum[] | Mata_kuliahScalarFieldEnum
    having?: mata_kuliahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mata_kuliahCountAggregateInputType | true
    _avg?: Mata_kuliahAvgAggregateInputType
    _sum?: Mata_kuliahSumAggregateInputType
    _min?: Mata_kuliahMinAggregateInputType
    _max?: Mata_kuliahMaxAggregateInputType
  }

  export type Mata_kuliahGroupByOutputType = {
    id_mk: number
    kode_mk: string | null
    nama_mk: string | null
    jumlah_sks: number | null
    _count: Mata_kuliahCountAggregateOutputType | null
    _avg: Mata_kuliahAvgAggregateOutputType | null
    _sum: Mata_kuliahSumAggregateOutputType | null
    _min: Mata_kuliahMinAggregateOutputType | null
    _max: Mata_kuliahMaxAggregateOutputType | null
  }

  type GetMata_kuliahGroupByPayload<T extends mata_kuliahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mata_kuliahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mata_kuliahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mata_kuliahGroupByOutputType[P]>
            : GetScalarType<T[P], Mata_kuliahGroupByOutputType[P]>
        }
      >
    >


  export type mata_kuliahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mk?: boolean
    kode_mk?: boolean
    nama_mk?: boolean
    jumlah_sks?: boolean
    kelas?: boolean | mata_kuliah$kelasArgs<ExtArgs>
    _count?: boolean | Mata_kuliahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mata_kuliah"]>

  export type mata_kuliahSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mk?: boolean
    kode_mk?: boolean
    nama_mk?: boolean
    jumlah_sks?: boolean
  }, ExtArgs["result"]["mata_kuliah"]>

  export type mata_kuliahSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mk?: boolean
    kode_mk?: boolean
    nama_mk?: boolean
    jumlah_sks?: boolean
  }, ExtArgs["result"]["mata_kuliah"]>

  export type mata_kuliahSelectScalar = {
    id_mk?: boolean
    kode_mk?: boolean
    nama_mk?: boolean
    jumlah_sks?: boolean
  }

  export type mata_kuliahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mk" | "kode_mk" | "nama_mk" | "jumlah_sks", ExtArgs["result"]["mata_kuliah"]>
  export type mata_kuliahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | mata_kuliah$kelasArgs<ExtArgs>
    _count?: boolean | Mata_kuliahCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mata_kuliahIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mata_kuliahIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mata_kuliahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mata_kuliah"
    objects: {
      kelas: Prisma.$kelasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mk: number
      kode_mk: string | null
      nama_mk: string | null
      jumlah_sks: number | null
    }, ExtArgs["result"]["mata_kuliah"]>
    composites: {}
  }

  type mata_kuliahGetPayload<S extends boolean | null | undefined | mata_kuliahDefaultArgs> = $Result.GetResult<Prisma.$mata_kuliahPayload, S>

  type mata_kuliahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mata_kuliahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mata_kuliahCountAggregateInputType | true
    }

  export interface mata_kuliahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mata_kuliah'], meta: { name: 'mata_kuliah' } }
    /**
     * Find zero or one Mata_kuliah that matches the filter.
     * @param {mata_kuliahFindUniqueArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mata_kuliahFindUniqueArgs>(args: SelectSubset<T, mata_kuliahFindUniqueArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mata_kuliah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mata_kuliahFindUniqueOrThrowArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mata_kuliahFindUniqueOrThrowArgs>(args: SelectSubset<T, mata_kuliahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mata_kuliah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahFindFirstArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mata_kuliahFindFirstArgs>(args?: SelectSubset<T, mata_kuliahFindFirstArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mata_kuliah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahFindFirstOrThrowArgs} args - Arguments to find a Mata_kuliah
     * @example
     * // Get one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mata_kuliahFindFirstOrThrowArgs>(args?: SelectSubset<T, mata_kuliahFindFirstOrThrowArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mata_kuliahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mata_kuliahs
     * const mata_kuliahs = await prisma.mata_kuliah.findMany()
     * 
     * // Get first 10 Mata_kuliahs
     * const mata_kuliahs = await prisma.mata_kuliah.findMany({ take: 10 })
     * 
     * // Only select the `id_mk`
     * const mata_kuliahWithId_mkOnly = await prisma.mata_kuliah.findMany({ select: { id_mk: true } })
     * 
     */
    findMany<T extends mata_kuliahFindManyArgs>(args?: SelectSubset<T, mata_kuliahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mata_kuliah.
     * @param {mata_kuliahCreateArgs} args - Arguments to create a Mata_kuliah.
     * @example
     * // Create one Mata_kuliah
     * const Mata_kuliah = await prisma.mata_kuliah.create({
     *   data: {
     *     // ... data to create a Mata_kuliah
     *   }
     * })
     * 
     */
    create<T extends mata_kuliahCreateArgs>(args: SelectSubset<T, mata_kuliahCreateArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mata_kuliahs.
     * @param {mata_kuliahCreateManyArgs} args - Arguments to create many Mata_kuliahs.
     * @example
     * // Create many Mata_kuliahs
     * const mata_kuliah = await prisma.mata_kuliah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mata_kuliahCreateManyArgs>(args?: SelectSubset<T, mata_kuliahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mata_kuliahs and returns the data saved in the database.
     * @param {mata_kuliahCreateManyAndReturnArgs} args - Arguments to create many Mata_kuliahs.
     * @example
     * // Create many Mata_kuliahs
     * const mata_kuliah = await prisma.mata_kuliah.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mata_kuliahs and only return the `id_mk`
     * const mata_kuliahWithId_mkOnly = await prisma.mata_kuliah.createManyAndReturn({
     *   select: { id_mk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mata_kuliahCreateManyAndReturnArgs>(args?: SelectSubset<T, mata_kuliahCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mata_kuliah.
     * @param {mata_kuliahDeleteArgs} args - Arguments to delete one Mata_kuliah.
     * @example
     * // Delete one Mata_kuliah
     * const Mata_kuliah = await prisma.mata_kuliah.delete({
     *   where: {
     *     // ... filter to delete one Mata_kuliah
     *   }
     * })
     * 
     */
    delete<T extends mata_kuliahDeleteArgs>(args: SelectSubset<T, mata_kuliahDeleteArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mata_kuliah.
     * @param {mata_kuliahUpdateArgs} args - Arguments to update one Mata_kuliah.
     * @example
     * // Update one Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mata_kuliahUpdateArgs>(args: SelectSubset<T, mata_kuliahUpdateArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mata_kuliahs.
     * @param {mata_kuliahDeleteManyArgs} args - Arguments to filter Mata_kuliahs to delete.
     * @example
     * // Delete a few Mata_kuliahs
     * const { count } = await prisma.mata_kuliah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mata_kuliahDeleteManyArgs>(args?: SelectSubset<T, mata_kuliahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mata_kuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mata_kuliahs
     * const mata_kuliah = await prisma.mata_kuliah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mata_kuliahUpdateManyArgs>(args: SelectSubset<T, mata_kuliahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mata_kuliahs and returns the data updated in the database.
     * @param {mata_kuliahUpdateManyAndReturnArgs} args - Arguments to update many Mata_kuliahs.
     * @example
     * // Update many Mata_kuliahs
     * const mata_kuliah = await prisma.mata_kuliah.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mata_kuliahs and only return the `id_mk`
     * const mata_kuliahWithId_mkOnly = await prisma.mata_kuliah.updateManyAndReturn({
     *   select: { id_mk: true },
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
    updateManyAndReturn<T extends mata_kuliahUpdateManyAndReturnArgs>(args: SelectSubset<T, mata_kuliahUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mata_kuliah.
     * @param {mata_kuliahUpsertArgs} args - Arguments to update or create a Mata_kuliah.
     * @example
     * // Update or create a Mata_kuliah
     * const mata_kuliah = await prisma.mata_kuliah.upsert({
     *   create: {
     *     // ... data to create a Mata_kuliah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mata_kuliah we want to update
     *   }
     * })
     */
    upsert<T extends mata_kuliahUpsertArgs>(args: SelectSubset<T, mata_kuliahUpsertArgs<ExtArgs>>): Prisma__mata_kuliahClient<$Result.GetResult<Prisma.$mata_kuliahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mata_kuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahCountArgs} args - Arguments to filter Mata_kuliahs to count.
     * @example
     * // Count the number of Mata_kuliahs
     * const count = await prisma.mata_kuliah.count({
     *   where: {
     *     // ... the filter for the Mata_kuliahs we want to count
     *   }
     * })
    **/
    count<T extends mata_kuliahCountArgs>(
      args?: Subset<T, mata_kuliahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mata_kuliahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mata_kuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mata_kuliahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mata_kuliahAggregateArgs>(args: Subset<T, Mata_kuliahAggregateArgs>): Prisma.PrismaPromise<GetMata_kuliahAggregateType<T>>

    /**
     * Group by Mata_kuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mata_kuliahGroupByArgs} args - Group by arguments.
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
      T extends mata_kuliahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mata_kuliahGroupByArgs['orderBy'] }
        : { orderBy?: mata_kuliahGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mata_kuliahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMata_kuliahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mata_kuliah model
   */
  readonly fields: mata_kuliahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mata_kuliah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mata_kuliahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends mata_kuliah$kelasArgs<ExtArgs> = {}>(args?: Subset<T, mata_kuliah$kelasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the mata_kuliah model
   */
  interface mata_kuliahFieldRefs {
    readonly id_mk: FieldRef<"mata_kuliah", 'Int'>
    readonly kode_mk: FieldRef<"mata_kuliah", 'String'>
    readonly nama_mk: FieldRef<"mata_kuliah", 'String'>
    readonly jumlah_sks: FieldRef<"mata_kuliah", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mata_kuliah findUnique
   */
  export type mata_kuliahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah findUniqueOrThrow
   */
  export type mata_kuliahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah findFirst
   */
  export type mata_kuliahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mata_kuliahs.
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mata_kuliahs.
     */
    distinct?: Mata_kuliahScalarFieldEnum | Mata_kuliahScalarFieldEnum[]
  }

  /**
   * mata_kuliah findFirstOrThrow
   */
  export type mata_kuliahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliah to fetch.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mata_kuliahs.
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mata_kuliahs.
     */
    distinct?: Mata_kuliahScalarFieldEnum | Mata_kuliahScalarFieldEnum[]
  }

  /**
   * mata_kuliah findMany
   */
  export type mata_kuliahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter, which mata_kuliahs to fetch.
     */
    where?: mata_kuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mata_kuliahs to fetch.
     */
    orderBy?: mata_kuliahOrderByWithRelationInput | mata_kuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mata_kuliahs.
     */
    cursor?: mata_kuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mata_kuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mata_kuliahs.
     */
    skip?: number
    distinct?: Mata_kuliahScalarFieldEnum | Mata_kuliahScalarFieldEnum[]
  }

  /**
   * mata_kuliah create
   */
  export type mata_kuliahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * The data needed to create a mata_kuliah.
     */
    data?: XOR<mata_kuliahCreateInput, mata_kuliahUncheckedCreateInput>
  }

  /**
   * mata_kuliah createMany
   */
  export type mata_kuliahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mata_kuliahs.
     */
    data: mata_kuliahCreateManyInput | mata_kuliahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mata_kuliah createManyAndReturn
   */
  export type mata_kuliahCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * The data used to create many mata_kuliahs.
     */
    data: mata_kuliahCreateManyInput | mata_kuliahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mata_kuliah update
   */
  export type mata_kuliahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * The data needed to update a mata_kuliah.
     */
    data: XOR<mata_kuliahUpdateInput, mata_kuliahUncheckedUpdateInput>
    /**
     * Choose, which mata_kuliah to update.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah updateMany
   */
  export type mata_kuliahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mata_kuliahs.
     */
    data: XOR<mata_kuliahUpdateManyMutationInput, mata_kuliahUncheckedUpdateManyInput>
    /**
     * Filter which mata_kuliahs to update
     */
    where?: mata_kuliahWhereInput
    /**
     * Limit how many mata_kuliahs to update.
     */
    limit?: number
  }

  /**
   * mata_kuliah updateManyAndReturn
   */
  export type mata_kuliahUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * The data used to update mata_kuliahs.
     */
    data: XOR<mata_kuliahUpdateManyMutationInput, mata_kuliahUncheckedUpdateManyInput>
    /**
     * Filter which mata_kuliahs to update
     */
    where?: mata_kuliahWhereInput
    /**
     * Limit how many mata_kuliahs to update.
     */
    limit?: number
  }

  /**
   * mata_kuliah upsert
   */
  export type mata_kuliahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * The filter to search for the mata_kuliah to update in case it exists.
     */
    where: mata_kuliahWhereUniqueInput
    /**
     * In case the mata_kuliah found by the `where` argument doesn't exist, create a new mata_kuliah with this data.
     */
    create: XOR<mata_kuliahCreateInput, mata_kuliahUncheckedCreateInput>
    /**
     * In case the mata_kuliah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mata_kuliahUpdateInput, mata_kuliahUncheckedUpdateInput>
  }

  /**
   * mata_kuliah delete
   */
  export type mata_kuliahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
    /**
     * Filter which mata_kuliah to delete.
     */
    where: mata_kuliahWhereUniqueInput
  }

  /**
   * mata_kuliah deleteMany
   */
  export type mata_kuliahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mata_kuliahs to delete
     */
    where?: mata_kuliahWhereInput
    /**
     * Limit how many mata_kuliahs to delete.
     */
    limit?: number
  }

  /**
   * mata_kuliah.kelas
   */
  export type mata_kuliah$kelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelas
     */
    select?: kelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelas
     */
    omit?: kelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelasInclude<ExtArgs> | null
    where?: kelasWhereInput
    orderBy?: kelasOrderByWithRelationInput | kelasOrderByWithRelationInput[]
    cursor?: kelasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * mata_kuliah without action
   */
  export type mata_kuliahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mata_kuliah
     */
    select?: mata_kuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mata_kuliah
     */
    omit?: mata_kuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mata_kuliahInclude<ExtArgs> | null
  }


  /**
   * Model notifikasi
   */

  export type AggregateNotifikasi = {
    _count: NotifikasiCountAggregateOutputType | null
    _avg: NotifikasiAvgAggregateOutputType | null
    _sum: NotifikasiSumAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  export type NotifikasiAvgAggregateOutputType = {
    id_notifikasi: number | null
    id_lowongan: number | null
    id_mahasiswa: number | null
  }

  export type NotifikasiSumAggregateOutputType = {
    id_notifikasi: number | null
    id_lowongan: number | null
    id_mahasiswa: bigint | null
  }

  export type NotifikasiMinAggregateOutputType = {
    id_notifikasi: number | null
    id_lowongan: number | null
    id_mahasiswa: bigint | null
    jenis_notifikasi: $Enums.jenis_notifikasi_enum | null
    isi_pesan: string | null
    tanggal_kirim: Date | null
  }

  export type NotifikasiMaxAggregateOutputType = {
    id_notifikasi: number | null
    id_lowongan: number | null
    id_mahasiswa: bigint | null
    jenis_notifikasi: $Enums.jenis_notifikasi_enum | null
    isi_pesan: string | null
    tanggal_kirim: Date | null
  }

  export type NotifikasiCountAggregateOutputType = {
    id_notifikasi: number
    id_lowongan: number
    id_mahasiswa: number
    jenis_notifikasi: number
    isi_pesan: number
    tanggal_kirim: number
    _all: number
  }


  export type NotifikasiAvgAggregateInputType = {
    id_notifikasi?: true
    id_lowongan?: true
    id_mahasiswa?: true
  }

  export type NotifikasiSumAggregateInputType = {
    id_notifikasi?: true
    id_lowongan?: true
    id_mahasiswa?: true
  }

  export type NotifikasiMinAggregateInputType = {
    id_notifikasi?: true
    id_lowongan?: true
    id_mahasiswa?: true
    jenis_notifikasi?: true
    isi_pesan?: true
    tanggal_kirim?: true
  }

  export type NotifikasiMaxAggregateInputType = {
    id_notifikasi?: true
    id_lowongan?: true
    id_mahasiswa?: true
    jenis_notifikasi?: true
    isi_pesan?: true
    tanggal_kirim?: true
  }

  export type NotifikasiCountAggregateInputType = {
    id_notifikasi?: true
    id_lowongan?: true
    id_mahasiswa?: true
    jenis_notifikasi?: true
    isi_pesan?: true
    tanggal_kirim?: true
    _all?: true
  }

  export type NotifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifikasi to aggregate.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifikasis
    **/
    _count?: true | NotifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotifikasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotifikasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotifikasiMaxAggregateInputType
  }

  export type GetNotifikasiAggregateType<T extends NotifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifikasi[P]>
      : GetScalarType<T[P], AggregateNotifikasi[P]>
  }




  export type notifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notifikasiWhereInput
    orderBy?: notifikasiOrderByWithAggregationInput | notifikasiOrderByWithAggregationInput[]
    by: NotifikasiScalarFieldEnum[] | NotifikasiScalarFieldEnum
    having?: notifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotifikasiCountAggregateInputType | true
    _avg?: NotifikasiAvgAggregateInputType
    _sum?: NotifikasiSumAggregateInputType
    _min?: NotifikasiMinAggregateInputType
    _max?: NotifikasiMaxAggregateInputType
  }

  export type NotifikasiGroupByOutputType = {
    id_notifikasi: number
    id_lowongan: number | null
    id_mahasiswa: bigint | null
    jenis_notifikasi: $Enums.jenis_notifikasi_enum | null
    isi_pesan: string | null
    tanggal_kirim: Date | null
    _count: NotifikasiCountAggregateOutputType | null
    _avg: NotifikasiAvgAggregateOutputType | null
    _sum: NotifikasiSumAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  type GetNotifikasiGroupByPayload<T extends notifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
        }
      >
    >


  export type notifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notifikasi?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    jenis_notifikasi?: boolean
    isi_pesan?: boolean
    tanggal_kirim?: boolean
    lowongan?: boolean | notifikasi$lowonganArgs<ExtArgs>
    mahasiswa?: boolean | notifikasi$mahasiswaArgs<ExtArgs>
  }, ExtArgs["result"]["notifikasi"]>

  export type notifikasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notifikasi?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    jenis_notifikasi?: boolean
    isi_pesan?: boolean
    tanggal_kirim?: boolean
    lowongan?: boolean | notifikasi$lowonganArgs<ExtArgs>
    mahasiswa?: boolean | notifikasi$mahasiswaArgs<ExtArgs>
  }, ExtArgs["result"]["notifikasi"]>

  export type notifikasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notifikasi?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    jenis_notifikasi?: boolean
    isi_pesan?: boolean
    tanggal_kirim?: boolean
    lowongan?: boolean | notifikasi$lowonganArgs<ExtArgs>
    mahasiswa?: boolean | notifikasi$mahasiswaArgs<ExtArgs>
  }, ExtArgs["result"]["notifikasi"]>

  export type notifikasiSelectScalar = {
    id_notifikasi?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    jenis_notifikasi?: boolean
    isi_pesan?: boolean
    tanggal_kirim?: boolean
  }

  export type notifikasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_notifikasi" | "id_lowongan" | "id_mahasiswa" | "jenis_notifikasi" | "isi_pesan" | "tanggal_kirim", ExtArgs["result"]["notifikasi"]>
  export type notifikasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | notifikasi$lowonganArgs<ExtArgs>
    mahasiswa?: boolean | notifikasi$mahasiswaArgs<ExtArgs>
  }
  export type notifikasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | notifikasi$lowonganArgs<ExtArgs>
    mahasiswa?: boolean | notifikasi$mahasiswaArgs<ExtArgs>
  }
  export type notifikasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | notifikasi$lowonganArgs<ExtArgs>
    mahasiswa?: boolean | notifikasi$mahasiswaArgs<ExtArgs>
  }

  export type $notifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifikasi"
    objects: {
      lowongan: Prisma.$lowonganPayload<ExtArgs> | null
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_notifikasi: number
      id_lowongan: number | null
      id_mahasiswa: bigint | null
      jenis_notifikasi: $Enums.jenis_notifikasi_enum | null
      isi_pesan: string | null
      tanggal_kirim: Date | null
    }, ExtArgs["result"]["notifikasi"]>
    composites: {}
  }

  type notifikasiGetPayload<S extends boolean | null | undefined | notifikasiDefaultArgs> = $Result.GetResult<Prisma.$notifikasiPayload, S>

  type notifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notifikasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotifikasiCountAggregateInputType | true
    }

  export interface notifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifikasi'], meta: { name: 'notifikasi' } }
    /**
     * Find zero or one Notifikasi that matches the filter.
     * @param {notifikasiFindUniqueArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notifikasiFindUniqueArgs>(args: SelectSubset<T, notifikasiFindUniqueArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifikasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notifikasiFindUniqueOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, notifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiFindFirstArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notifikasiFindFirstArgs>(args?: SelectSubset<T, notifikasiFindFirstArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiFindFirstOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, notifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany()
     * 
     * // Get first 10 Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany({ take: 10 })
     * 
     * // Only select the `id_notifikasi`
     * const notifikasiWithId_notifikasiOnly = await prisma.notifikasi.findMany({ select: { id_notifikasi: true } })
     * 
     */
    findMany<T extends notifikasiFindManyArgs>(args?: SelectSubset<T, notifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifikasi.
     * @param {notifikasiCreateArgs} args - Arguments to create a Notifikasi.
     * @example
     * // Create one Notifikasi
     * const Notifikasi = await prisma.notifikasi.create({
     *   data: {
     *     // ... data to create a Notifikasi
     *   }
     * })
     * 
     */
    create<T extends notifikasiCreateArgs>(args: SelectSubset<T, notifikasiCreateArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifikasis.
     * @param {notifikasiCreateManyArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notifikasiCreateManyArgs>(args?: SelectSubset<T, notifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifikasis and returns the data saved in the database.
     * @param {notifikasiCreateManyAndReturnArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifikasis and only return the `id_notifikasi`
     * const notifikasiWithId_notifikasiOnly = await prisma.notifikasi.createManyAndReturn({
     *   select: { id_notifikasi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notifikasiCreateManyAndReturnArgs>(args?: SelectSubset<T, notifikasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifikasi.
     * @param {notifikasiDeleteArgs} args - Arguments to delete one Notifikasi.
     * @example
     * // Delete one Notifikasi
     * const Notifikasi = await prisma.notifikasi.delete({
     *   where: {
     *     // ... filter to delete one Notifikasi
     *   }
     * })
     * 
     */
    delete<T extends notifikasiDeleteArgs>(args: SelectSubset<T, notifikasiDeleteArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifikasi.
     * @param {notifikasiUpdateArgs} args - Arguments to update one Notifikasi.
     * @example
     * // Update one Notifikasi
     * const notifikasi = await prisma.notifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notifikasiUpdateArgs>(args: SelectSubset<T, notifikasiUpdateArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifikasis.
     * @param {notifikasiDeleteManyArgs} args - Arguments to filter Notifikasis to delete.
     * @example
     * // Delete a few Notifikasis
     * const { count } = await prisma.notifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notifikasiDeleteManyArgs>(args?: SelectSubset<T, notifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifikasis
     * const notifikasi = await prisma.notifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notifikasiUpdateManyArgs>(args: SelectSubset<T, notifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifikasis and returns the data updated in the database.
     * @param {notifikasiUpdateManyAndReturnArgs} args - Arguments to update many Notifikasis.
     * @example
     * // Update many Notifikasis
     * const notifikasi = await prisma.notifikasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifikasis and only return the `id_notifikasi`
     * const notifikasiWithId_notifikasiOnly = await prisma.notifikasi.updateManyAndReturn({
     *   select: { id_notifikasi: true },
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
    updateManyAndReturn<T extends notifikasiUpdateManyAndReturnArgs>(args: SelectSubset<T, notifikasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifikasi.
     * @param {notifikasiUpsertArgs} args - Arguments to update or create a Notifikasi.
     * @example
     * // Update or create a Notifikasi
     * const notifikasi = await prisma.notifikasi.upsert({
     *   create: {
     *     // ... data to create a Notifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifikasi we want to update
     *   }
     * })
     */
    upsert<T extends notifikasiUpsertArgs>(args: SelectSubset<T, notifikasiUpsertArgs<ExtArgs>>): Prisma__notifikasiClient<$Result.GetResult<Prisma.$notifikasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiCountArgs} args - Arguments to filter Notifikasis to count.
     * @example
     * // Count the number of Notifikasis
     * const count = await prisma.notifikasi.count({
     *   where: {
     *     // ... the filter for the Notifikasis we want to count
     *   }
     * })
    **/
    count<T extends notifikasiCountArgs>(
      args?: Subset<T, notifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotifikasiAggregateArgs>(args: Subset<T, NotifikasiAggregateArgs>): Prisma.PrismaPromise<GetNotifikasiAggregateType<T>>

    /**
     * Group by Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notifikasiGroupByArgs} args - Group by arguments.
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
      T extends notifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notifikasiGroupByArgs['orderBy'] }
        : { orderBy?: notifikasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifikasi model
   */
  readonly fields: notifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lowongan<T extends notifikasi$lowonganArgs<ExtArgs> = {}>(args?: Subset<T, notifikasi$lowonganArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends notifikasi$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, notifikasi$mahasiswaArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notifikasi model
   */
  interface notifikasiFieldRefs {
    readonly id_notifikasi: FieldRef<"notifikasi", 'Int'>
    readonly id_lowongan: FieldRef<"notifikasi", 'Int'>
    readonly id_mahasiswa: FieldRef<"notifikasi", 'BigInt'>
    readonly jenis_notifikasi: FieldRef<"notifikasi", 'jenis_notifikasi_enum'>
    readonly isi_pesan: FieldRef<"notifikasi", 'String'>
    readonly tanggal_kirim: FieldRef<"notifikasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifikasi findUnique
   */
  export type notifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi findUniqueOrThrow
   */
  export type notifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi findFirst
   */
  export type notifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifikasis.
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * notifikasi findFirstOrThrow
   */
  export type notifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasi to fetch.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifikasis.
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * notifikasi findMany
   */
  export type notifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which notifikasis to fetch.
     */
    where?: notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifikasis to fetch.
     */
    orderBy?: notifikasiOrderByWithRelationInput | notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifikasis.
     */
    cursor?: notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifikasis.
     */
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * notifikasi create
   */
  export type notifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * The data needed to create a notifikasi.
     */
    data?: XOR<notifikasiCreateInput, notifikasiUncheckedCreateInput>
  }

  /**
   * notifikasi createMany
   */
  export type notifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifikasis.
     */
    data: notifikasiCreateManyInput | notifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifikasi createManyAndReturn
   */
  export type notifikasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * The data used to create many notifikasis.
     */
    data: notifikasiCreateManyInput | notifikasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifikasi update
   */
  export type notifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * The data needed to update a notifikasi.
     */
    data: XOR<notifikasiUpdateInput, notifikasiUncheckedUpdateInput>
    /**
     * Choose, which notifikasi to update.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi updateMany
   */
  export type notifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifikasis.
     */
    data: XOR<notifikasiUpdateManyMutationInput, notifikasiUncheckedUpdateManyInput>
    /**
     * Filter which notifikasis to update
     */
    where?: notifikasiWhereInput
    /**
     * Limit how many notifikasis to update.
     */
    limit?: number
  }

  /**
   * notifikasi updateManyAndReturn
   */
  export type notifikasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * The data used to update notifikasis.
     */
    data: XOR<notifikasiUpdateManyMutationInput, notifikasiUncheckedUpdateManyInput>
    /**
     * Filter which notifikasis to update
     */
    where?: notifikasiWhereInput
    /**
     * Limit how many notifikasis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifikasi upsert
   */
  export type notifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * The filter to search for the notifikasi to update in case it exists.
     */
    where: notifikasiWhereUniqueInput
    /**
     * In case the notifikasi found by the `where` argument doesn't exist, create a new notifikasi with this data.
     */
    create: XOR<notifikasiCreateInput, notifikasiUncheckedCreateInput>
    /**
     * In case the notifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notifikasiUpdateInput, notifikasiUncheckedUpdateInput>
  }

  /**
   * notifikasi delete
   */
  export type notifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
    /**
     * Filter which notifikasi to delete.
     */
    where: notifikasiWhereUniqueInput
  }

  /**
   * notifikasi deleteMany
   */
  export type notifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifikasis to delete
     */
    where?: notifikasiWhereInput
    /**
     * Limit how many notifikasis to delete.
     */
    limit?: number
  }

  /**
   * notifikasi.lowongan
   */
  export type notifikasi$lowonganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lowongan
     */
    select?: lowonganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lowongan
     */
    omit?: lowonganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lowonganInclude<ExtArgs> | null
    where?: lowonganWhereInput
  }

  /**
   * notifikasi.mahasiswa
   */
  export type notifikasi$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    where?: mahasiswaWhereInput
  }

  /**
   * notifikasi without action
   */
  export type notifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifikasi
     */
    select?: notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifikasi
     */
    omit?: notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notifikasiInclude<ExtArgs> | null
  }


  /**
   * Model pendaftaran
   */

  export type AggregatePendaftaran = {
    _count: PendaftaranCountAggregateOutputType | null
    _avg: PendaftaranAvgAggregateOutputType | null
    _sum: PendaftaranSumAggregateOutputType | null
    _min: PendaftaranMinAggregateOutputType | null
    _max: PendaftaranMaxAggregateOutputType | null
  }

  export type PendaftaranAvgAggregateOutputType = {
    id_pendaftaran: number | null
    id_lowongan: number | null
    id_mahasiswa: number | null
  }

  export type PendaftaranSumAggregateOutputType = {
    id_pendaftaran: number | null
    id_lowongan: number | null
    id_mahasiswa: bigint | null
  }

  export type PendaftaranMinAggregateOutputType = {
    id_pendaftaran: number | null
    id_lowongan: number | null
    id_mahasiswa: bigint | null
    status_pendaftaran: $Enums.status_pendaftaran_enum | null
    tanggal_daftar: Date | null
  }

  export type PendaftaranMaxAggregateOutputType = {
    id_pendaftaran: number | null
    id_lowongan: number | null
    id_mahasiswa: bigint | null
    status_pendaftaran: $Enums.status_pendaftaran_enum | null
    tanggal_daftar: Date | null
  }

  export type PendaftaranCountAggregateOutputType = {
    id_pendaftaran: number
    id_lowongan: number
    id_mahasiswa: number
    status_pendaftaran: number
    tanggal_daftar: number
    _all: number
  }


  export type PendaftaranAvgAggregateInputType = {
    id_pendaftaran?: true
    id_lowongan?: true
    id_mahasiswa?: true
  }

  export type PendaftaranSumAggregateInputType = {
    id_pendaftaran?: true
    id_lowongan?: true
    id_mahasiswa?: true
  }

  export type PendaftaranMinAggregateInputType = {
    id_pendaftaran?: true
    id_lowongan?: true
    id_mahasiswa?: true
    status_pendaftaran?: true
    tanggal_daftar?: true
  }

  export type PendaftaranMaxAggregateInputType = {
    id_pendaftaran?: true
    id_lowongan?: true
    id_mahasiswa?: true
    status_pendaftaran?: true
    tanggal_daftar?: true
  }

  export type PendaftaranCountAggregateInputType = {
    id_pendaftaran?: true
    id_lowongan?: true
    id_mahasiswa?: true
    status_pendaftaran?: true
    tanggal_daftar?: true
    _all?: true
  }

  export type PendaftaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendaftaran to aggregate.
     */
    where?: pendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftarans to fetch.
     */
    orderBy?: pendaftaranOrderByWithRelationInput | pendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pendaftarans
    **/
    _count?: true | PendaftaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendaftaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendaftaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendaftaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendaftaranMaxAggregateInputType
  }

  export type GetPendaftaranAggregateType<T extends PendaftaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePendaftaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendaftaran[P]>
      : GetScalarType<T[P], AggregatePendaftaran[P]>
  }




  export type pendaftaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendaftaranWhereInput
    orderBy?: pendaftaranOrderByWithAggregationInput | pendaftaranOrderByWithAggregationInput[]
    by: PendaftaranScalarFieldEnum[] | PendaftaranScalarFieldEnum
    having?: pendaftaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendaftaranCountAggregateInputType | true
    _avg?: PendaftaranAvgAggregateInputType
    _sum?: PendaftaranSumAggregateInputType
    _min?: PendaftaranMinAggregateInputType
    _max?: PendaftaranMaxAggregateInputType
  }

  export type PendaftaranGroupByOutputType = {
    id_pendaftaran: number
    id_lowongan: number
    id_mahasiswa: bigint
    status_pendaftaran: $Enums.status_pendaftaran_enum | null
    tanggal_daftar: Date | null
    _count: PendaftaranCountAggregateOutputType | null
    _avg: PendaftaranAvgAggregateOutputType | null
    _sum: PendaftaranSumAggregateOutputType | null
    _min: PendaftaranMinAggregateOutputType | null
    _max: PendaftaranMaxAggregateOutputType | null
  }

  type GetPendaftaranGroupByPayload<T extends pendaftaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendaftaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendaftaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendaftaranGroupByOutputType[P]>
            : GetScalarType<T[P], PendaftaranGroupByOutputType[P]>
        }
      >
    >


  export type pendaftaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pendaftaran?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    status_pendaftaran?: boolean
    tanggal_daftar?: boolean
    berkas?: boolean | pendaftaran$berkasArgs<ExtArgs>
    lowongan?: boolean | lowonganDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    _count?: boolean | PendaftaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type pendaftaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pendaftaran?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    status_pendaftaran?: boolean
    tanggal_daftar?: boolean
    lowongan?: boolean | lowonganDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type pendaftaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pendaftaran?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    status_pendaftaran?: boolean
    tanggal_daftar?: boolean
    lowongan?: boolean | lowonganDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type pendaftaranSelectScalar = {
    id_pendaftaran?: boolean
    id_lowongan?: boolean
    id_mahasiswa?: boolean
    status_pendaftaran?: boolean
    tanggal_daftar?: boolean
  }

  export type pendaftaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pendaftaran" | "id_lowongan" | "id_mahasiswa" | "status_pendaftaran" | "tanggal_daftar", ExtArgs["result"]["pendaftaran"]>
  export type pendaftaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berkas?: boolean | pendaftaran$berkasArgs<ExtArgs>
    lowongan?: boolean | lowonganDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
    _count?: boolean | PendaftaranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pendaftaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | lowonganDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }
  export type pendaftaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lowongan?: boolean | lowonganDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }

  export type $pendaftaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pendaftaran"
    objects: {
      berkas: Prisma.$berkasPayload<ExtArgs>[]
      lowongan: Prisma.$lowonganPayload<ExtArgs>
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pendaftaran: number
      id_lowongan: number
      id_mahasiswa: bigint
      status_pendaftaran: $Enums.status_pendaftaran_enum | null
      tanggal_daftar: Date | null
    }, ExtArgs["result"]["pendaftaran"]>
    composites: {}
  }

  type pendaftaranGetPayload<S extends boolean | null | undefined | pendaftaranDefaultArgs> = $Result.GetResult<Prisma.$pendaftaranPayload, S>

  type pendaftaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pendaftaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendaftaranCountAggregateInputType | true
    }

  export interface pendaftaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pendaftaran'], meta: { name: 'pendaftaran' } }
    /**
     * Find zero or one Pendaftaran that matches the filter.
     * @param {pendaftaranFindUniqueArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pendaftaranFindUniqueArgs>(args: SelectSubset<T, pendaftaranFindUniqueArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pendaftaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pendaftaranFindUniqueOrThrowArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pendaftaranFindUniqueOrThrowArgs>(args: SelectSubset<T, pendaftaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendaftaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaranFindFirstArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pendaftaranFindFirstArgs>(args?: SelectSubset<T, pendaftaranFindFirstArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendaftaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaranFindFirstOrThrowArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pendaftaranFindFirstOrThrowArgs>(args?: SelectSubset<T, pendaftaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pendaftarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendaftarans
     * const pendaftarans = await prisma.pendaftaran.findMany()
     * 
     * // Get first 10 Pendaftarans
     * const pendaftarans = await prisma.pendaftaran.findMany({ take: 10 })
     * 
     * // Only select the `id_pendaftaran`
     * const pendaftaranWithId_pendaftaranOnly = await prisma.pendaftaran.findMany({ select: { id_pendaftaran: true } })
     * 
     */
    findMany<T extends pendaftaranFindManyArgs>(args?: SelectSubset<T, pendaftaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pendaftaran.
     * @param {pendaftaranCreateArgs} args - Arguments to create a Pendaftaran.
     * @example
     * // Create one Pendaftaran
     * const Pendaftaran = await prisma.pendaftaran.create({
     *   data: {
     *     // ... data to create a Pendaftaran
     *   }
     * })
     * 
     */
    create<T extends pendaftaranCreateArgs>(args: SelectSubset<T, pendaftaranCreateArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pendaftarans.
     * @param {pendaftaranCreateManyArgs} args - Arguments to create many Pendaftarans.
     * @example
     * // Create many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pendaftaranCreateManyArgs>(args?: SelectSubset<T, pendaftaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendaftarans and returns the data saved in the database.
     * @param {pendaftaranCreateManyAndReturnArgs} args - Arguments to create many Pendaftarans.
     * @example
     * // Create many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendaftarans and only return the `id_pendaftaran`
     * const pendaftaranWithId_pendaftaranOnly = await prisma.pendaftaran.createManyAndReturn({
     *   select: { id_pendaftaran: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pendaftaranCreateManyAndReturnArgs>(args?: SelectSubset<T, pendaftaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pendaftaran.
     * @param {pendaftaranDeleteArgs} args - Arguments to delete one Pendaftaran.
     * @example
     * // Delete one Pendaftaran
     * const Pendaftaran = await prisma.pendaftaran.delete({
     *   where: {
     *     // ... filter to delete one Pendaftaran
     *   }
     * })
     * 
     */
    delete<T extends pendaftaranDeleteArgs>(args: SelectSubset<T, pendaftaranDeleteArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pendaftaran.
     * @param {pendaftaranUpdateArgs} args - Arguments to update one Pendaftaran.
     * @example
     * // Update one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pendaftaranUpdateArgs>(args: SelectSubset<T, pendaftaranUpdateArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pendaftarans.
     * @param {pendaftaranDeleteManyArgs} args - Arguments to filter Pendaftarans to delete.
     * @example
     * // Delete a few Pendaftarans
     * const { count } = await prisma.pendaftaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pendaftaranDeleteManyArgs>(args?: SelectSubset<T, pendaftaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendaftarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pendaftaranUpdateManyArgs>(args: SelectSubset<T, pendaftaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendaftarans and returns the data updated in the database.
     * @param {pendaftaranUpdateManyAndReturnArgs} args - Arguments to update many Pendaftarans.
     * @example
     * // Update many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pendaftarans and only return the `id_pendaftaran`
     * const pendaftaranWithId_pendaftaranOnly = await prisma.pendaftaran.updateManyAndReturn({
     *   select: { id_pendaftaran: true },
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
    updateManyAndReturn<T extends pendaftaranUpdateManyAndReturnArgs>(args: SelectSubset<T, pendaftaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pendaftaran.
     * @param {pendaftaranUpsertArgs} args - Arguments to update or create a Pendaftaran.
     * @example
     * // Update or create a Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.upsert({
     *   create: {
     *     // ... data to create a Pendaftaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pendaftaran we want to update
     *   }
     * })
     */
    upsert<T extends pendaftaranUpsertArgs>(args: SelectSubset<T, pendaftaranUpsertArgs<ExtArgs>>): Prisma__pendaftaranClient<$Result.GetResult<Prisma.$pendaftaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pendaftarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaranCountArgs} args - Arguments to filter Pendaftarans to count.
     * @example
     * // Count the number of Pendaftarans
     * const count = await prisma.pendaftaran.count({
     *   where: {
     *     // ... the filter for the Pendaftarans we want to count
     *   }
     * })
    **/
    count<T extends pendaftaranCountArgs>(
      args?: Subset<T, pendaftaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendaftaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pendaftaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendaftaranAggregateArgs>(args: Subset<T, PendaftaranAggregateArgs>): Prisma.PrismaPromise<GetPendaftaranAggregateType<T>>

    /**
     * Group by Pendaftaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendaftaranGroupByArgs} args - Group by arguments.
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
      T extends pendaftaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pendaftaranGroupByArgs['orderBy'] }
        : { orderBy?: pendaftaranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pendaftaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendaftaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pendaftaran model
   */
  readonly fields: pendaftaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pendaftaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pendaftaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    berkas<T extends pendaftaran$berkasArgs<ExtArgs> = {}>(args?: Subset<T, pendaftaran$berkasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lowongan<T extends lowonganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lowonganDefaultArgs<ExtArgs>>): Prisma__lowonganClient<$Result.GetResult<Prisma.$lowonganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pendaftaran model
   */
  interface pendaftaranFieldRefs {
    readonly id_pendaftaran: FieldRef<"pendaftaran", 'Int'>
    readonly id_lowongan: FieldRef<"pendaftaran", 'Int'>
    readonly id_mahasiswa: FieldRef<"pendaftaran", 'BigInt'>
    readonly status_pendaftaran: FieldRef<"pendaftaran", 'status_pendaftaran_enum'>
    readonly tanggal_daftar: FieldRef<"pendaftaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pendaftaran findUnique
   */
  export type pendaftaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran to fetch.
     */
    where: pendaftaranWhereUniqueInput
  }

  /**
   * pendaftaran findUniqueOrThrow
   */
  export type pendaftaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran to fetch.
     */
    where: pendaftaranWhereUniqueInput
  }

  /**
   * pendaftaran findFirst
   */
  export type pendaftaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran to fetch.
     */
    where?: pendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftarans to fetch.
     */
    orderBy?: pendaftaranOrderByWithRelationInput | pendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendaftarans.
     */
    cursor?: pendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendaftarans.
     */
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * pendaftaran findFirstOrThrow
   */
  export type pendaftaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which pendaftaran to fetch.
     */
    where?: pendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftarans to fetch.
     */
    orderBy?: pendaftaranOrderByWithRelationInput | pendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendaftarans.
     */
    cursor?: pendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendaftarans.
     */
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * pendaftaran findMany
   */
  export type pendaftaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which pendaftarans to fetch.
     */
    where?: pendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendaftarans to fetch.
     */
    orderBy?: pendaftaranOrderByWithRelationInput | pendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pendaftarans.
     */
    cursor?: pendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendaftarans.
     */
    skip?: number
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * pendaftaran create
   */
  export type pendaftaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * The data needed to create a pendaftaran.
     */
    data: XOR<pendaftaranCreateInput, pendaftaranUncheckedCreateInput>
  }

  /**
   * pendaftaran createMany
   */
  export type pendaftaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pendaftarans.
     */
    data: pendaftaranCreateManyInput | pendaftaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pendaftaran createManyAndReturn
   */
  export type pendaftaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * The data used to create many pendaftarans.
     */
    data: pendaftaranCreateManyInput | pendaftaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pendaftaran update
   */
  export type pendaftaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * The data needed to update a pendaftaran.
     */
    data: XOR<pendaftaranUpdateInput, pendaftaranUncheckedUpdateInput>
    /**
     * Choose, which pendaftaran to update.
     */
    where: pendaftaranWhereUniqueInput
  }

  /**
   * pendaftaran updateMany
   */
  export type pendaftaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pendaftarans.
     */
    data: XOR<pendaftaranUpdateManyMutationInput, pendaftaranUncheckedUpdateManyInput>
    /**
     * Filter which pendaftarans to update
     */
    where?: pendaftaranWhereInput
    /**
     * Limit how many pendaftarans to update.
     */
    limit?: number
  }

  /**
   * pendaftaran updateManyAndReturn
   */
  export type pendaftaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * The data used to update pendaftarans.
     */
    data: XOR<pendaftaranUpdateManyMutationInput, pendaftaranUncheckedUpdateManyInput>
    /**
     * Filter which pendaftarans to update
     */
    where?: pendaftaranWhereInput
    /**
     * Limit how many pendaftarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pendaftaran upsert
   */
  export type pendaftaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * The filter to search for the pendaftaran to update in case it exists.
     */
    where: pendaftaranWhereUniqueInput
    /**
     * In case the pendaftaran found by the `where` argument doesn't exist, create a new pendaftaran with this data.
     */
    create: XOR<pendaftaranCreateInput, pendaftaranUncheckedCreateInput>
    /**
     * In case the pendaftaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pendaftaranUpdateInput, pendaftaranUncheckedUpdateInput>
  }

  /**
   * pendaftaran delete
   */
  export type pendaftaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
    /**
     * Filter which pendaftaran to delete.
     */
    where: pendaftaranWhereUniqueInput
  }

  /**
   * pendaftaran deleteMany
   */
  export type pendaftaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendaftarans to delete
     */
    where?: pendaftaranWhereInput
    /**
     * Limit how many pendaftarans to delete.
     */
    limit?: number
  }

  /**
   * pendaftaran.berkas
   */
  export type pendaftaran$berkasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    where?: berkasWhereInput
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    cursor?: berkasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * pendaftaran without action
   */
  export type pendaftaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendaftaran
     */
    select?: pendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendaftaran
     */
    omit?: pendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendaftaranInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UsersSumAggregateOutputType = {
    id_user: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: bigint | null
    email: string | null
    password_hash: string | null
    role: $Enums.user_role_enum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: bigint | null
    email: string | null
    password_hash: string | null
    role: $Enums.user_role_enum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    email: number
    password_hash: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id_user?: true
  }

  export type UsersSumAggregateInputType = {
    id_user?: true
  }

  export type UsersMinAggregateInputType = {
    id_user?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: bigint
    email: string
    password_hash: string
    role: $Enums.user_role_enum
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    dosen?: boolean | users$dosenArgs<ExtArgs>
    mahasiswa?: boolean | users$mahasiswaArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id_user?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "email" | "password_hash" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | users$dosenArgs<ExtArgs>
    mahasiswa?: boolean | users$mahasiswaArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      dosen: Prisma.$dosenPayload<ExtArgs> | null
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: bigint
      email: string
      password_hash: string
      role: $Enums.user_role_enum
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.updateManyAndReturn({
     *   select: { id_user: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends users$dosenArgs<ExtArgs> = {}>(args?: Subset<T, users$dosenArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends users$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, users$mahasiswaArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id_user: FieldRef<"users", 'BigInt'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'user_role_enum'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.dosen
   */
  export type users$dosenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    where?: dosenWhereInput
  }

  /**
   * users.mahasiswa
   */
  export type users$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    where?: mahasiswaWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const BerkasScalarFieldEnum: {
    id_berkas: 'id_berkas',
    id_pendaftaran: 'id_pendaftaran',
    nama_file: 'nama_file',
    path_file: 'path_file',
    tanggal_upload: 'tanggal_upload'
  };

  export type BerkasScalarFieldEnum = (typeof BerkasScalarFieldEnum)[keyof typeof BerkasScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    id_dosen: 'id_dosen',
    nip: 'nip',
    nama: 'nama',
    email: 'email',
    no_telepon: 'no_telepon',
    jurusan: 'jurusan'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id_kelas: 'id_kelas',
    id_mk: 'id_mk',
    nama_kelas: 'nama_kelas',
    jadwal_kelas: 'jadwal_kelas'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const LowonganScalarFieldEnum: {
    id_lowongan: 'id_lowongan',
    id_kelas: 'id_kelas',
    id_dosen: 'id_dosen',
    tahun_ajaran: 'tahun_ajaran',
    jumlah_asisten: 'jumlah_asisten',
    persyaratan: 'persyaratan',
    honor: 'honor',
    tanggal_mulai_pendaftaran: 'tanggal_mulai_pendaftaran',
    tanggal_akhir_pendaftaran: 'tanggal_akhir_pendaftaran',
    tanggal_mulai_kontrak: 'tanggal_mulai_kontrak',
    tanggal_akhir_kontrak: 'tanggal_akhir_kontrak'
  };

  export type LowonganScalarFieldEnum = (typeof LowonganScalarFieldEnum)[keyof typeof LowonganScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    id_mahasiswa: 'id_mahasiswa',
    nrp: 'nrp',
    nama: 'nama',
    email: 'email',
    no_telepon: 'no_telepon',
    jurusan: 'jurusan',
    angkatan: 'angkatan',
    semester: 'semester'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const Mata_kuliahScalarFieldEnum: {
    id_mk: 'id_mk',
    kode_mk: 'kode_mk',
    nama_mk: 'nama_mk',
    jumlah_sks: 'jumlah_sks'
  };

  export type Mata_kuliahScalarFieldEnum = (typeof Mata_kuliahScalarFieldEnum)[keyof typeof Mata_kuliahScalarFieldEnum]


  export const NotifikasiScalarFieldEnum: {
    id_notifikasi: 'id_notifikasi',
    id_lowongan: 'id_lowongan',
    id_mahasiswa: 'id_mahasiswa',
    jenis_notifikasi: 'jenis_notifikasi',
    isi_pesan: 'isi_pesan',
    tanggal_kirim: 'tanggal_kirim'
  };

  export type NotifikasiScalarFieldEnum = (typeof NotifikasiScalarFieldEnum)[keyof typeof NotifikasiScalarFieldEnum]


  export const PendaftaranScalarFieldEnum: {
    id_pendaftaran: 'id_pendaftaran',
    id_lowongan: 'id_lowongan',
    id_mahasiswa: 'id_mahasiswa',
    status_pendaftaran: 'status_pendaftaran',
    tanggal_daftar: 'tanggal_daftar'
  };

  export type PendaftaranScalarFieldEnum = (typeof PendaftaranScalarFieldEnum)[keyof typeof PendaftaranScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'jenis_notifikasi_enum'
   */
  export type Enumjenis_notifikasi_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'jenis_notifikasi_enum'>
    


  /**
   * Reference to a field of type 'jenis_notifikasi_enum[]'
   */
  export type ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'jenis_notifikasi_enum[]'>
    


  /**
   * Reference to a field of type 'status_pendaftaran_enum'
   */
  export type Enumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_pendaftaran_enum'>
    


  /**
   * Reference to a field of type 'status_pendaftaran_enum[]'
   */
  export type ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_pendaftaran_enum[]'>
    


  /**
   * Reference to a field of type 'user_role_enum'
   */
  export type Enumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum'>
    


  /**
   * Reference to a field of type 'user_role_enum[]'
   */
  export type ListEnumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type berkasWhereInput = {
    AND?: berkasWhereInput | berkasWhereInput[]
    OR?: berkasWhereInput[]
    NOT?: berkasWhereInput | berkasWhereInput[]
    id_berkas?: IntFilter<"berkas"> | number
    id_pendaftaran?: IntFilter<"berkas"> | number
    nama_file?: StringNullableFilter<"berkas"> | string | null
    path_file?: StringNullableFilter<"berkas"> | string | null
    tanggal_upload?: DateTimeNullableFilter<"berkas"> | Date | string | null
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, pendaftaranWhereInput>
  }

  export type berkasOrderByWithRelationInput = {
    id_berkas?: SortOrder
    id_pendaftaran?: SortOrder
    nama_file?: SortOrderInput | SortOrder
    path_file?: SortOrderInput | SortOrder
    tanggal_upload?: SortOrderInput | SortOrder
    pendaftaran?: pendaftaranOrderByWithRelationInput
  }

  export type berkasWhereUniqueInput = Prisma.AtLeast<{
    id_berkas?: number
    AND?: berkasWhereInput | berkasWhereInput[]
    OR?: berkasWhereInput[]
    NOT?: berkasWhereInput | berkasWhereInput[]
    id_pendaftaran?: IntFilter<"berkas"> | number
    nama_file?: StringNullableFilter<"berkas"> | string | null
    path_file?: StringNullableFilter<"berkas"> | string | null
    tanggal_upload?: DateTimeNullableFilter<"berkas"> | Date | string | null
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, pendaftaranWhereInput>
  }, "id_berkas">

  export type berkasOrderByWithAggregationInput = {
    id_berkas?: SortOrder
    id_pendaftaran?: SortOrder
    nama_file?: SortOrderInput | SortOrder
    path_file?: SortOrderInput | SortOrder
    tanggal_upload?: SortOrderInput | SortOrder
    _count?: berkasCountOrderByAggregateInput
    _avg?: berkasAvgOrderByAggregateInput
    _max?: berkasMaxOrderByAggregateInput
    _min?: berkasMinOrderByAggregateInput
    _sum?: berkasSumOrderByAggregateInput
  }

  export type berkasScalarWhereWithAggregatesInput = {
    AND?: berkasScalarWhereWithAggregatesInput | berkasScalarWhereWithAggregatesInput[]
    OR?: berkasScalarWhereWithAggregatesInput[]
    NOT?: berkasScalarWhereWithAggregatesInput | berkasScalarWhereWithAggregatesInput[]
    id_berkas?: IntWithAggregatesFilter<"berkas"> | number
    id_pendaftaran?: IntWithAggregatesFilter<"berkas"> | number
    nama_file?: StringNullableWithAggregatesFilter<"berkas"> | string | null
    path_file?: StringNullableWithAggregatesFilter<"berkas"> | string | null
    tanggal_upload?: DateTimeNullableWithAggregatesFilter<"berkas"> | Date | string | null
  }

  export type dosenWhereInput = {
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    id_dosen?: BigIntFilter<"dosen"> | bigint | number
    nip?: StringNullableFilter<"dosen"> | string | null
    nama?: StringNullableFilter<"dosen"> | string | null
    email?: StringNullableFilter<"dosen"> | string | null
    no_telepon?: StringNullableFilter<"dosen"> | string | null
    jurusan?: StringNullableFilter<"dosen"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lowongan?: LowonganListRelationFilter
  }

  export type dosenOrderByWithRelationInput = {
    id_dosen?: SortOrder
    nip?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    no_telepon?: SortOrderInput | SortOrder
    jurusan?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    lowongan?: lowonganOrderByRelationAggregateInput
  }

  export type dosenWhereUniqueInput = Prisma.AtLeast<{
    id_dosen?: bigint | number
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    nip?: StringNullableFilter<"dosen"> | string | null
    nama?: StringNullableFilter<"dosen"> | string | null
    email?: StringNullableFilter<"dosen"> | string | null
    no_telepon?: StringNullableFilter<"dosen"> | string | null
    jurusan?: StringNullableFilter<"dosen"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    lowongan?: LowonganListRelationFilter
  }, "id_dosen">

  export type dosenOrderByWithAggregationInput = {
    id_dosen?: SortOrder
    nip?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    no_telepon?: SortOrderInput | SortOrder
    jurusan?: SortOrderInput | SortOrder
    _count?: dosenCountOrderByAggregateInput
    _avg?: dosenAvgOrderByAggregateInput
    _max?: dosenMaxOrderByAggregateInput
    _min?: dosenMinOrderByAggregateInput
    _sum?: dosenSumOrderByAggregateInput
  }

  export type dosenScalarWhereWithAggregatesInput = {
    AND?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    OR?: dosenScalarWhereWithAggregatesInput[]
    NOT?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    id_dosen?: BigIntWithAggregatesFilter<"dosen"> | bigint | number
    nip?: StringNullableWithAggregatesFilter<"dosen"> | string | null
    nama?: StringNullableWithAggregatesFilter<"dosen"> | string | null
    email?: StringNullableWithAggregatesFilter<"dosen"> | string | null
    no_telepon?: StringNullableWithAggregatesFilter<"dosen"> | string | null
    jurusan?: StringNullableWithAggregatesFilter<"dosen"> | string | null
  }

  export type kelasWhereInput = {
    AND?: kelasWhereInput | kelasWhereInput[]
    OR?: kelasWhereInput[]
    NOT?: kelasWhereInput | kelasWhereInput[]
    id_kelas?: IntFilter<"kelas"> | number
    id_mk?: IntFilter<"kelas"> | number
    nama_kelas?: StringNullableFilter<"kelas"> | string | null
    jadwal_kelas?: StringNullableFilter<"kelas"> | string | null
    mata_kuliah?: XOR<Mata_kuliahScalarRelationFilter, mata_kuliahWhereInput>
    lowongan?: LowonganListRelationFilter
  }

  export type kelasOrderByWithRelationInput = {
    id_kelas?: SortOrder
    id_mk?: SortOrder
    nama_kelas?: SortOrderInput | SortOrder
    jadwal_kelas?: SortOrderInput | SortOrder
    mata_kuliah?: mata_kuliahOrderByWithRelationInput
    lowongan?: lowonganOrderByRelationAggregateInput
  }

  export type kelasWhereUniqueInput = Prisma.AtLeast<{
    id_kelas?: number
    AND?: kelasWhereInput | kelasWhereInput[]
    OR?: kelasWhereInput[]
    NOT?: kelasWhereInput | kelasWhereInput[]
    id_mk?: IntFilter<"kelas"> | number
    nama_kelas?: StringNullableFilter<"kelas"> | string | null
    jadwal_kelas?: StringNullableFilter<"kelas"> | string | null
    mata_kuliah?: XOR<Mata_kuliahScalarRelationFilter, mata_kuliahWhereInput>
    lowongan?: LowonganListRelationFilter
  }, "id_kelas">

  export type kelasOrderByWithAggregationInput = {
    id_kelas?: SortOrder
    id_mk?: SortOrder
    nama_kelas?: SortOrderInput | SortOrder
    jadwal_kelas?: SortOrderInput | SortOrder
    _count?: kelasCountOrderByAggregateInput
    _avg?: kelasAvgOrderByAggregateInput
    _max?: kelasMaxOrderByAggregateInput
    _min?: kelasMinOrderByAggregateInput
    _sum?: kelasSumOrderByAggregateInput
  }

  export type kelasScalarWhereWithAggregatesInput = {
    AND?: kelasScalarWhereWithAggregatesInput | kelasScalarWhereWithAggregatesInput[]
    OR?: kelasScalarWhereWithAggregatesInput[]
    NOT?: kelasScalarWhereWithAggregatesInput | kelasScalarWhereWithAggregatesInput[]
    id_kelas?: IntWithAggregatesFilter<"kelas"> | number
    id_mk?: IntWithAggregatesFilter<"kelas"> | number
    nama_kelas?: StringNullableWithAggregatesFilter<"kelas"> | string | null
    jadwal_kelas?: StringNullableWithAggregatesFilter<"kelas"> | string | null
  }

  export type lowonganWhereInput = {
    AND?: lowonganWhereInput | lowonganWhereInput[]
    OR?: lowonganWhereInput[]
    NOT?: lowonganWhereInput | lowonganWhereInput[]
    id_lowongan?: IntFilter<"lowongan"> | number
    id_kelas?: IntFilter<"lowongan"> | number
    id_dosen?: BigIntFilter<"lowongan"> | bigint | number
    tahun_ajaran?: StringNullableFilter<"lowongan"> | string | null
    jumlah_asisten?: IntNullableFilter<"lowongan"> | number | null
    persyaratan?: StringNullableFilter<"lowongan"> | string | null
    honor?: DecimalNullableFilter<"lowongan"> | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_akhir_pendaftaran?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_mulai_kontrak?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_akhir_kontrak?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, kelasWhereInput>
    notifikasi?: NotifikasiListRelationFilter
    pendaftaran?: PendaftaranListRelationFilter
  }

  export type lowonganOrderByWithRelationInput = {
    id_lowongan?: SortOrder
    id_kelas?: SortOrder
    id_dosen?: SortOrder
    tahun_ajaran?: SortOrderInput | SortOrder
    jumlah_asisten?: SortOrderInput | SortOrder
    persyaratan?: SortOrderInput | SortOrder
    honor?: SortOrderInput | SortOrder
    tanggal_mulai_pendaftaran?: SortOrderInput | SortOrder
    tanggal_akhir_pendaftaran?: SortOrderInput | SortOrder
    tanggal_mulai_kontrak?: SortOrderInput | SortOrder
    tanggal_akhir_kontrak?: SortOrderInput | SortOrder
    dosen?: dosenOrderByWithRelationInput
    kelas?: kelasOrderByWithRelationInput
    notifikasi?: notifikasiOrderByRelationAggregateInput
    pendaftaran?: pendaftaranOrderByRelationAggregateInput
  }

  export type lowonganWhereUniqueInput = Prisma.AtLeast<{
    id_lowongan?: number
    AND?: lowonganWhereInput | lowonganWhereInput[]
    OR?: lowonganWhereInput[]
    NOT?: lowonganWhereInput | lowonganWhereInput[]
    id_kelas?: IntFilter<"lowongan"> | number
    id_dosen?: BigIntFilter<"lowongan"> | bigint | number
    tahun_ajaran?: StringNullableFilter<"lowongan"> | string | null
    jumlah_asisten?: IntNullableFilter<"lowongan"> | number | null
    persyaratan?: StringNullableFilter<"lowongan"> | string | null
    honor?: DecimalNullableFilter<"lowongan"> | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_akhir_pendaftaran?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_mulai_kontrak?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_akhir_kontrak?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, kelasWhereInput>
    notifikasi?: NotifikasiListRelationFilter
    pendaftaran?: PendaftaranListRelationFilter
  }, "id_lowongan">

  export type lowonganOrderByWithAggregationInput = {
    id_lowongan?: SortOrder
    id_kelas?: SortOrder
    id_dosen?: SortOrder
    tahun_ajaran?: SortOrderInput | SortOrder
    jumlah_asisten?: SortOrderInput | SortOrder
    persyaratan?: SortOrderInput | SortOrder
    honor?: SortOrderInput | SortOrder
    tanggal_mulai_pendaftaran?: SortOrderInput | SortOrder
    tanggal_akhir_pendaftaran?: SortOrderInput | SortOrder
    tanggal_mulai_kontrak?: SortOrderInput | SortOrder
    tanggal_akhir_kontrak?: SortOrderInput | SortOrder
    _count?: lowonganCountOrderByAggregateInput
    _avg?: lowonganAvgOrderByAggregateInput
    _max?: lowonganMaxOrderByAggregateInput
    _min?: lowonganMinOrderByAggregateInput
    _sum?: lowonganSumOrderByAggregateInput
  }

  export type lowonganScalarWhereWithAggregatesInput = {
    AND?: lowonganScalarWhereWithAggregatesInput | lowonganScalarWhereWithAggregatesInput[]
    OR?: lowonganScalarWhereWithAggregatesInput[]
    NOT?: lowonganScalarWhereWithAggregatesInput | lowonganScalarWhereWithAggregatesInput[]
    id_lowongan?: IntWithAggregatesFilter<"lowongan"> | number
    id_kelas?: IntWithAggregatesFilter<"lowongan"> | number
    id_dosen?: BigIntWithAggregatesFilter<"lowongan"> | bigint | number
    tahun_ajaran?: StringNullableWithAggregatesFilter<"lowongan"> | string | null
    jumlah_asisten?: IntNullableWithAggregatesFilter<"lowongan"> | number | null
    persyaratan?: StringNullableWithAggregatesFilter<"lowongan"> | string | null
    honor?: DecimalNullableWithAggregatesFilter<"lowongan"> | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: DateTimeNullableWithAggregatesFilter<"lowongan"> | Date | string | null
    tanggal_akhir_pendaftaran?: DateTimeNullableWithAggregatesFilter<"lowongan"> | Date | string | null
    tanggal_mulai_kontrak?: DateTimeNullableWithAggregatesFilter<"lowongan"> | Date | string | null
    tanggal_akhir_kontrak?: DateTimeNullableWithAggregatesFilter<"lowongan"> | Date | string | null
  }

  export type mahasiswaWhereInput = {
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    id_mahasiswa?: BigIntFilter<"mahasiswa"> | bigint | number
    nrp?: StringNullableFilter<"mahasiswa"> | string | null
    nama?: StringNullableFilter<"mahasiswa"> | string | null
    email?: StringNullableFilter<"mahasiswa"> | string | null
    no_telepon?: StringNullableFilter<"mahasiswa"> | string | null
    jurusan?: StringNullableFilter<"mahasiswa"> | string | null
    angkatan?: StringNullableFilter<"mahasiswa"> | string | null
    semester?: IntNullableFilter<"mahasiswa"> | number | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    notifikasi?: NotifikasiListRelationFilter
    pendaftaran?: PendaftaranListRelationFilter
  }

  export type mahasiswaOrderByWithRelationInput = {
    id_mahasiswa?: SortOrder
    nrp?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    no_telepon?: SortOrderInput | SortOrder
    jurusan?: SortOrderInput | SortOrder
    angkatan?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    notifikasi?: notifikasiOrderByRelationAggregateInput
    pendaftaran?: pendaftaranOrderByRelationAggregateInput
  }

  export type mahasiswaWhereUniqueInput = Prisma.AtLeast<{
    id_mahasiswa?: bigint | number
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nrp?: StringNullableFilter<"mahasiswa"> | string | null
    nama?: StringNullableFilter<"mahasiswa"> | string | null
    email?: StringNullableFilter<"mahasiswa"> | string | null
    no_telepon?: StringNullableFilter<"mahasiswa"> | string | null
    jurusan?: StringNullableFilter<"mahasiswa"> | string | null
    angkatan?: StringNullableFilter<"mahasiswa"> | string | null
    semester?: IntNullableFilter<"mahasiswa"> | number | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    notifikasi?: NotifikasiListRelationFilter
    pendaftaran?: PendaftaranListRelationFilter
  }, "id_mahasiswa">

  export type mahasiswaOrderByWithAggregationInput = {
    id_mahasiswa?: SortOrder
    nrp?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    no_telepon?: SortOrderInput | SortOrder
    jurusan?: SortOrderInput | SortOrder
    angkatan?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    _count?: mahasiswaCountOrderByAggregateInput
    _avg?: mahasiswaAvgOrderByAggregateInput
    _max?: mahasiswaMaxOrderByAggregateInput
    _min?: mahasiswaMinOrderByAggregateInput
    _sum?: mahasiswaSumOrderByAggregateInput
  }

  export type mahasiswaScalarWhereWithAggregatesInput = {
    AND?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    OR?: mahasiswaScalarWhereWithAggregatesInput[]
    NOT?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    id_mahasiswa?: BigIntWithAggregatesFilter<"mahasiswa"> | bigint | number
    nrp?: StringNullableWithAggregatesFilter<"mahasiswa"> | string | null
    nama?: StringNullableWithAggregatesFilter<"mahasiswa"> | string | null
    email?: StringNullableWithAggregatesFilter<"mahasiswa"> | string | null
    no_telepon?: StringNullableWithAggregatesFilter<"mahasiswa"> | string | null
    jurusan?: StringNullableWithAggregatesFilter<"mahasiswa"> | string | null
    angkatan?: StringNullableWithAggregatesFilter<"mahasiswa"> | string | null
    semester?: IntNullableWithAggregatesFilter<"mahasiswa"> | number | null
  }

  export type mata_kuliahWhereInput = {
    AND?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    OR?: mata_kuliahWhereInput[]
    NOT?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    id_mk?: IntFilter<"mata_kuliah"> | number
    kode_mk?: StringNullableFilter<"mata_kuliah"> | string | null
    nama_mk?: StringNullableFilter<"mata_kuliah"> | string | null
    jumlah_sks?: IntNullableFilter<"mata_kuliah"> | number | null
    kelas?: KelasListRelationFilter
  }

  export type mata_kuliahOrderByWithRelationInput = {
    id_mk?: SortOrder
    kode_mk?: SortOrderInput | SortOrder
    nama_mk?: SortOrderInput | SortOrder
    jumlah_sks?: SortOrderInput | SortOrder
    kelas?: kelasOrderByRelationAggregateInput
  }

  export type mata_kuliahWhereUniqueInput = Prisma.AtLeast<{
    id_mk?: number
    AND?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    OR?: mata_kuliahWhereInput[]
    NOT?: mata_kuliahWhereInput | mata_kuliahWhereInput[]
    kode_mk?: StringNullableFilter<"mata_kuliah"> | string | null
    nama_mk?: StringNullableFilter<"mata_kuliah"> | string | null
    jumlah_sks?: IntNullableFilter<"mata_kuliah"> | number | null
    kelas?: KelasListRelationFilter
  }, "id_mk">

  export type mata_kuliahOrderByWithAggregationInput = {
    id_mk?: SortOrder
    kode_mk?: SortOrderInput | SortOrder
    nama_mk?: SortOrderInput | SortOrder
    jumlah_sks?: SortOrderInput | SortOrder
    _count?: mata_kuliahCountOrderByAggregateInput
    _avg?: mata_kuliahAvgOrderByAggregateInput
    _max?: mata_kuliahMaxOrderByAggregateInput
    _min?: mata_kuliahMinOrderByAggregateInput
    _sum?: mata_kuliahSumOrderByAggregateInput
  }

  export type mata_kuliahScalarWhereWithAggregatesInput = {
    AND?: mata_kuliahScalarWhereWithAggregatesInput | mata_kuliahScalarWhereWithAggregatesInput[]
    OR?: mata_kuliahScalarWhereWithAggregatesInput[]
    NOT?: mata_kuliahScalarWhereWithAggregatesInput | mata_kuliahScalarWhereWithAggregatesInput[]
    id_mk?: IntWithAggregatesFilter<"mata_kuliah"> | number
    kode_mk?: StringNullableWithAggregatesFilter<"mata_kuliah"> | string | null
    nama_mk?: StringNullableWithAggregatesFilter<"mata_kuliah"> | string | null
    jumlah_sks?: IntNullableWithAggregatesFilter<"mata_kuliah"> | number | null
  }

  export type notifikasiWhereInput = {
    AND?: notifikasiWhereInput | notifikasiWhereInput[]
    OR?: notifikasiWhereInput[]
    NOT?: notifikasiWhereInput | notifikasiWhereInput[]
    id_notifikasi?: IntFilter<"notifikasi"> | number
    id_lowongan?: IntNullableFilter<"notifikasi"> | number | null
    id_mahasiswa?: BigIntNullableFilter<"notifikasi"> | bigint | number | null
    jenis_notifikasi?: Enumjenis_notifikasi_enumNullableFilter<"notifikasi"> | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: StringNullableFilter<"notifikasi"> | string | null
    tanggal_kirim?: DateTimeNullableFilter<"notifikasi"> | Date | string | null
    lowongan?: XOR<LowonganNullableScalarRelationFilter, lowonganWhereInput> | null
    mahasiswa?: XOR<MahasiswaNullableScalarRelationFilter, mahasiswaWhereInput> | null
  }

  export type notifikasiOrderByWithRelationInput = {
    id_notifikasi?: SortOrder
    id_lowongan?: SortOrderInput | SortOrder
    id_mahasiswa?: SortOrderInput | SortOrder
    jenis_notifikasi?: SortOrderInput | SortOrder
    isi_pesan?: SortOrderInput | SortOrder
    tanggal_kirim?: SortOrderInput | SortOrder
    lowongan?: lowonganOrderByWithRelationInput
    mahasiswa?: mahasiswaOrderByWithRelationInput
  }

  export type notifikasiWhereUniqueInput = Prisma.AtLeast<{
    id_notifikasi?: number
    AND?: notifikasiWhereInput | notifikasiWhereInput[]
    OR?: notifikasiWhereInput[]
    NOT?: notifikasiWhereInput | notifikasiWhereInput[]
    id_lowongan?: IntNullableFilter<"notifikasi"> | number | null
    id_mahasiswa?: BigIntNullableFilter<"notifikasi"> | bigint | number | null
    jenis_notifikasi?: Enumjenis_notifikasi_enumNullableFilter<"notifikasi"> | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: StringNullableFilter<"notifikasi"> | string | null
    tanggal_kirim?: DateTimeNullableFilter<"notifikasi"> | Date | string | null
    lowongan?: XOR<LowonganNullableScalarRelationFilter, lowonganWhereInput> | null
    mahasiswa?: XOR<MahasiswaNullableScalarRelationFilter, mahasiswaWhereInput> | null
  }, "id_notifikasi">

  export type notifikasiOrderByWithAggregationInput = {
    id_notifikasi?: SortOrder
    id_lowongan?: SortOrderInput | SortOrder
    id_mahasiswa?: SortOrderInput | SortOrder
    jenis_notifikasi?: SortOrderInput | SortOrder
    isi_pesan?: SortOrderInput | SortOrder
    tanggal_kirim?: SortOrderInput | SortOrder
    _count?: notifikasiCountOrderByAggregateInput
    _avg?: notifikasiAvgOrderByAggregateInput
    _max?: notifikasiMaxOrderByAggregateInput
    _min?: notifikasiMinOrderByAggregateInput
    _sum?: notifikasiSumOrderByAggregateInput
  }

  export type notifikasiScalarWhereWithAggregatesInput = {
    AND?: notifikasiScalarWhereWithAggregatesInput | notifikasiScalarWhereWithAggregatesInput[]
    OR?: notifikasiScalarWhereWithAggregatesInput[]
    NOT?: notifikasiScalarWhereWithAggregatesInput | notifikasiScalarWhereWithAggregatesInput[]
    id_notifikasi?: IntWithAggregatesFilter<"notifikasi"> | number
    id_lowongan?: IntNullableWithAggregatesFilter<"notifikasi"> | number | null
    id_mahasiswa?: BigIntNullableWithAggregatesFilter<"notifikasi"> | bigint | number | null
    jenis_notifikasi?: Enumjenis_notifikasi_enumNullableWithAggregatesFilter<"notifikasi"> | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: StringNullableWithAggregatesFilter<"notifikasi"> | string | null
    tanggal_kirim?: DateTimeNullableWithAggregatesFilter<"notifikasi"> | Date | string | null
  }

  export type pendaftaranWhereInput = {
    AND?: pendaftaranWhereInput | pendaftaranWhereInput[]
    OR?: pendaftaranWhereInput[]
    NOT?: pendaftaranWhereInput | pendaftaranWhereInput[]
    id_pendaftaran?: IntFilter<"pendaftaran"> | number
    id_lowongan?: IntFilter<"pendaftaran"> | number
    id_mahasiswa?: BigIntFilter<"pendaftaran"> | bigint | number
    status_pendaftaran?: Enumstatus_pendaftaran_enumNullableFilter<"pendaftaran"> | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: DateTimeNullableFilter<"pendaftaran"> | Date | string | null
    berkas?: BerkasListRelationFilter
    lowongan?: XOR<LowonganScalarRelationFilter, lowonganWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }

  export type pendaftaranOrderByWithRelationInput = {
    id_pendaftaran?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    status_pendaftaran?: SortOrderInput | SortOrder
    tanggal_daftar?: SortOrderInput | SortOrder
    berkas?: berkasOrderByRelationAggregateInput
    lowongan?: lowonganOrderByWithRelationInput
    mahasiswa?: mahasiswaOrderByWithRelationInput
  }

  export type pendaftaranWhereUniqueInput = Prisma.AtLeast<{
    id_pendaftaran?: number
    AND?: pendaftaranWhereInput | pendaftaranWhereInput[]
    OR?: pendaftaranWhereInput[]
    NOT?: pendaftaranWhereInput | pendaftaranWhereInput[]
    id_lowongan?: IntFilter<"pendaftaran"> | number
    id_mahasiswa?: BigIntFilter<"pendaftaran"> | bigint | number
    status_pendaftaran?: Enumstatus_pendaftaran_enumNullableFilter<"pendaftaran"> | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: DateTimeNullableFilter<"pendaftaran"> | Date | string | null
    berkas?: BerkasListRelationFilter
    lowongan?: XOR<LowonganScalarRelationFilter, lowonganWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }, "id_pendaftaran">

  export type pendaftaranOrderByWithAggregationInput = {
    id_pendaftaran?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    status_pendaftaran?: SortOrderInput | SortOrder
    tanggal_daftar?: SortOrderInput | SortOrder
    _count?: pendaftaranCountOrderByAggregateInput
    _avg?: pendaftaranAvgOrderByAggregateInput
    _max?: pendaftaranMaxOrderByAggregateInput
    _min?: pendaftaranMinOrderByAggregateInput
    _sum?: pendaftaranSumOrderByAggregateInput
  }

  export type pendaftaranScalarWhereWithAggregatesInput = {
    AND?: pendaftaranScalarWhereWithAggregatesInput | pendaftaranScalarWhereWithAggregatesInput[]
    OR?: pendaftaranScalarWhereWithAggregatesInput[]
    NOT?: pendaftaranScalarWhereWithAggregatesInput | pendaftaranScalarWhereWithAggregatesInput[]
    id_pendaftaran?: IntWithAggregatesFilter<"pendaftaran"> | number
    id_lowongan?: IntWithAggregatesFilter<"pendaftaran"> | number
    id_mahasiswa?: BigIntWithAggregatesFilter<"pendaftaran"> | bigint | number
    status_pendaftaran?: Enumstatus_pendaftaran_enumNullableWithAggregatesFilter<"pendaftaran"> | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: DateTimeNullableWithAggregatesFilter<"pendaftaran"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_user?: BigIntFilter<"users"> | bigint | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: Enumuser_role_enumFilter<"users"> | $Enums.user_role_enum
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    dosen?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
    mahasiswa?: XOR<MahasiswaNullableScalarRelationFilter, mahasiswaWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id_user?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    dosen?: dosenOrderByWithRelationInput
    mahasiswa?: mahasiswaOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: bigint | number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    role?: Enumuser_role_enumFilter<"users"> | $Enums.user_role_enum
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    dosen?: XOR<DosenNullableScalarRelationFilter, dosenWhereInput> | null
    mahasiswa?: XOR<MahasiswaNullableScalarRelationFilter, mahasiswaWhereInput> | null
  }, "id_user" | "email">

  export type usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id_user?: BigIntWithAggregatesFilter<"users"> | bigint | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: Enumuser_role_enumWithAggregatesFilter<"users"> | $Enums.user_role_enum
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type berkasCreateInput = {
    nama_file?: string | null
    path_file?: string | null
    tanggal_upload?: Date | string | null
    pendaftaran: pendaftaranCreateNestedOneWithoutBerkasInput
  }

  export type berkasUncheckedCreateInput = {
    id_berkas?: number
    id_pendaftaran: number
    nama_file?: string | null
    path_file?: string | null
    tanggal_upload?: Date | string | null
  }

  export type berkasUpdateInput = {
    nama_file?: NullableStringFieldUpdateOperationsInput | string | null
    path_file?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_upload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendaftaran?: pendaftaranUpdateOneRequiredWithoutBerkasNestedInput
  }

  export type berkasUncheckedUpdateInput = {
    id_berkas?: IntFieldUpdateOperationsInput | number
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    nama_file?: NullableStringFieldUpdateOperationsInput | string | null
    path_file?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_upload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type berkasCreateManyInput = {
    id_berkas?: number
    id_pendaftaran: number
    nama_file?: string | null
    path_file?: string | null
    tanggal_upload?: Date | string | null
  }

  export type berkasUpdateManyMutationInput = {
    nama_file?: NullableStringFieldUpdateOperationsInput | string | null
    path_file?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_upload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type berkasUncheckedUpdateManyInput = {
    id_berkas?: IntFieldUpdateOperationsInput | number
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    nama_file?: NullableStringFieldUpdateOperationsInput | string | null
    path_file?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_upload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type dosenCreateInput = {
    nip?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    users?: usersCreateNestedOneWithoutDosenInput
    lowongan?: lowonganCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateInput = {
    id_dosen?: bigint | number
    nip?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    lowongan?: lowonganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenUpdateInput = {
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutDosenNestedInput
    lowongan?: lowonganUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateInput = {
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: lowonganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type dosenCreateManyInput = {
    id_dosen?: bigint | number
    nip?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
  }

  export type dosenUpdateManyMutationInput = {
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dosenUncheckedUpdateManyInput = {
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kelasCreateInput = {
    nama_kelas?: string | null
    jadwal_kelas?: string | null
    mata_kuliah: mata_kuliahCreateNestedOneWithoutKelasInput
    lowongan?: lowonganCreateNestedManyWithoutKelasInput
  }

  export type kelasUncheckedCreateInput = {
    id_kelas?: number
    id_mk: number
    nama_kelas?: string | null
    jadwal_kelas?: string | null
    lowongan?: lowonganUncheckedCreateNestedManyWithoutKelasInput
  }

  export type kelasUpdateInput = {
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    mata_kuliah?: mata_kuliahUpdateOneRequiredWithoutKelasNestedInput
    lowongan?: lowonganUpdateManyWithoutKelasNestedInput
  }

  export type kelasUncheckedUpdateInput = {
    id_kelas?: IntFieldUpdateOperationsInput | number
    id_mk?: IntFieldUpdateOperationsInput | number
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: lowonganUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type kelasCreateManyInput = {
    id_kelas?: number
    id_mk: number
    nama_kelas?: string | null
    jadwal_kelas?: string | null
  }

  export type kelasUpdateManyMutationInput = {
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kelasUncheckedUpdateManyInput = {
    id_kelas?: IntFieldUpdateOperationsInput | number
    id_mk?: IntFieldUpdateOperationsInput | number
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lowonganCreateInput = {
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    dosen: dosenCreateNestedOneWithoutLowonganInput
    kelas: kelasCreateNestedOneWithoutLowonganInput
    notifikasi?: notifikasiCreateNestedManyWithoutLowonganInput
    pendaftaran?: pendaftaranCreateNestedManyWithoutLowonganInput
  }

  export type lowonganUncheckedCreateInput = {
    id_lowongan?: number
    id_kelas: number
    id_dosen: bigint | number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutLowonganInput
    pendaftaran?: pendaftaranUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type lowonganUpdateInput = {
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUpdateOneRequiredWithoutLowonganNestedInput
    kelas?: kelasUpdateOneRequiredWithoutLowonganNestedInput
    notifikasi?: notifikasiUpdateManyWithoutLowonganNestedInput
    pendaftaran?: pendaftaranUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganUncheckedUpdateInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_kelas?: IntFieldUpdateOperationsInput | number
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifikasi?: notifikasiUncheckedUpdateManyWithoutLowonganNestedInput
    pendaftaran?: pendaftaranUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganCreateManyInput = {
    id_lowongan?: number
    id_kelas: number
    id_dosen: bigint | number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
  }

  export type lowonganUpdateManyMutationInput = {
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lowonganUncheckedUpdateManyInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_kelas?: IntFieldUpdateOperationsInput | number
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mahasiswaCreateInput = {
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    users?: usersCreateNestedOneWithoutMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutMahasiswaInput
    pendaftaran?: pendaftaranCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateInput = {
    id_mahasiswa?: bigint | number
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutMahasiswaInput
    pendaftaran?: pendaftaranUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUpdateInput = {
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneRequiredWithoutMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutMahasiswaNestedInput
    pendaftaran?: pendaftaranUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateInput = {
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    notifikasi?: notifikasiUncheckedUpdateManyWithoutMahasiswaNestedInput
    pendaftaran?: pendaftaranUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaCreateManyInput = {
    id_mahasiswa?: bigint | number
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
  }

  export type mahasiswaUpdateManyMutationInput = {
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mahasiswaUncheckedUpdateManyInput = {
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mata_kuliahCreateInput = {
    kode_mk?: string | null
    nama_mk?: string | null
    jumlah_sks?: number | null
    kelas?: kelasCreateNestedManyWithoutMata_kuliahInput
  }

  export type mata_kuliahUncheckedCreateInput = {
    id_mk?: number
    kode_mk?: string | null
    nama_mk?: string | null
    jumlah_sks?: number | null
    kelas?: kelasUncheckedCreateNestedManyWithoutMata_kuliahInput
  }

  export type mata_kuliahUpdateInput = {
    kode_mk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_mk?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_sks?: NullableIntFieldUpdateOperationsInput | number | null
    kelas?: kelasUpdateManyWithoutMata_kuliahNestedInput
  }

  export type mata_kuliahUncheckedUpdateInput = {
    id_mk?: IntFieldUpdateOperationsInput | number
    kode_mk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_mk?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_sks?: NullableIntFieldUpdateOperationsInput | number | null
    kelas?: kelasUncheckedUpdateManyWithoutMata_kuliahNestedInput
  }

  export type mata_kuliahCreateManyInput = {
    id_mk?: number
    kode_mk?: string | null
    nama_mk?: string | null
    jumlah_sks?: number | null
  }

  export type mata_kuliahUpdateManyMutationInput = {
    kode_mk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_mk?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_sks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mata_kuliahUncheckedUpdateManyInput = {
    id_mk?: IntFieldUpdateOperationsInput | number
    kode_mk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_mk?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_sks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notifikasiCreateInput = {
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
    lowongan?: lowonganCreateNestedOneWithoutNotifikasiInput
    mahasiswa?: mahasiswaCreateNestedOneWithoutNotifikasiInput
  }

  export type notifikasiUncheckedCreateInput = {
    id_notifikasi?: number
    id_lowongan?: number | null
    id_mahasiswa?: bigint | number | null
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
  }

  export type notifikasiUpdateInput = {
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lowongan?: lowonganUpdateOneWithoutNotifikasiNestedInput
    mahasiswa?: mahasiswaUpdateOneWithoutNotifikasiNestedInput
  }

  export type notifikasiUncheckedUpdateInput = {
    id_notifikasi?: IntFieldUpdateOperationsInput | number
    id_lowongan?: NullableIntFieldUpdateOperationsInput | number | null
    id_mahasiswa?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notifikasiCreateManyInput = {
    id_notifikasi?: number
    id_lowongan?: number | null
    id_mahasiswa?: bigint | number | null
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
  }

  export type notifikasiUpdateManyMutationInput = {
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notifikasiUncheckedUpdateManyInput = {
    id_notifikasi?: IntFieldUpdateOperationsInput | number
    id_lowongan?: NullableIntFieldUpdateOperationsInput | number | null
    id_mahasiswa?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pendaftaranCreateInput = {
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
    berkas?: berkasCreateNestedManyWithoutPendaftaranInput
    lowongan: lowonganCreateNestedOneWithoutPendaftaranInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPendaftaranInput
  }

  export type pendaftaranUncheckedCreateInput = {
    id_pendaftaran?: number
    id_lowongan: number
    id_mahasiswa: bigint | number
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
    berkas?: berkasUncheckedCreateNestedManyWithoutPendaftaranInput
  }

  export type pendaftaranUpdateInput = {
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUpdateManyWithoutPendaftaranNestedInput
    lowongan?: lowonganUpdateOneRequiredWithoutPendaftaranNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPendaftaranNestedInput
  }

  export type pendaftaranUncheckedUpdateInput = {
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUncheckedUpdateManyWithoutPendaftaranNestedInput
  }

  export type pendaftaranCreateManyInput = {
    id_pendaftaran?: number
    id_lowongan: number
    id_mahasiswa: bigint | number
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
  }

  export type pendaftaranUpdateManyMutationInput = {
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pendaftaranUncheckedUpdateManyInput = {
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id_user?: bigint | number
    email: string
    password_hash: string
    role?: $Enums.user_role_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dosen?: dosenCreateNestedOneWithoutUsersInput
    mahasiswa?: mahasiswaCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id_user?: bigint | number
    email: string
    password_hash: string
    role?: $Enums.user_role_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dosen?: dosenUncheckedCreateNestedOneWithoutUsersInput
    mahasiswa?: mahasiswaUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersUpdateInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUpdateOneWithoutUsersNestedInput
    mahasiswa?: mahasiswaUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUncheckedUpdateOneWithoutUsersNestedInput
    mahasiswa?: mahasiswaUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id_user?: bigint | number
    email: string
    password_hash: string
    role?: $Enums.user_role_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PendaftaranScalarRelationFilter = {
    is?: pendaftaranWhereInput
    isNot?: pendaftaranWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type berkasCountOrderByAggregateInput = {
    id_berkas?: SortOrder
    id_pendaftaran?: SortOrder
    nama_file?: SortOrder
    path_file?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type berkasAvgOrderByAggregateInput = {
    id_berkas?: SortOrder
    id_pendaftaran?: SortOrder
  }

  export type berkasMaxOrderByAggregateInput = {
    id_berkas?: SortOrder
    id_pendaftaran?: SortOrder
    nama_file?: SortOrder
    path_file?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type berkasMinOrderByAggregateInput = {
    id_berkas?: SortOrder
    id_pendaftaran?: SortOrder
    nama_file?: SortOrder
    path_file?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type berkasSumOrderByAggregateInput = {
    id_berkas?: SortOrder
    id_pendaftaran?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type LowonganListRelationFilter = {
    every?: lowonganWhereInput
    some?: lowonganWhereInput
    none?: lowonganWhereInput
  }

  export type lowonganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dosenCountOrderByAggregateInput = {
    id_dosen?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    jurusan?: SortOrder
  }

  export type dosenAvgOrderByAggregateInput = {
    id_dosen?: SortOrder
  }

  export type dosenMaxOrderByAggregateInput = {
    id_dosen?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    jurusan?: SortOrder
  }

  export type dosenMinOrderByAggregateInput = {
    id_dosen?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    jurusan?: SortOrder
  }

  export type dosenSumOrderByAggregateInput = {
    id_dosen?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Mata_kuliahScalarRelationFilter = {
    is?: mata_kuliahWhereInput
    isNot?: mata_kuliahWhereInput
  }

  export type kelasCountOrderByAggregateInput = {
    id_kelas?: SortOrder
    id_mk?: SortOrder
    nama_kelas?: SortOrder
    jadwal_kelas?: SortOrder
  }

  export type kelasAvgOrderByAggregateInput = {
    id_kelas?: SortOrder
    id_mk?: SortOrder
  }

  export type kelasMaxOrderByAggregateInput = {
    id_kelas?: SortOrder
    id_mk?: SortOrder
    nama_kelas?: SortOrder
    jadwal_kelas?: SortOrder
  }

  export type kelasMinOrderByAggregateInput = {
    id_kelas?: SortOrder
    id_mk?: SortOrder
    nama_kelas?: SortOrder
    jadwal_kelas?: SortOrder
  }

  export type kelasSumOrderByAggregateInput = {
    id_kelas?: SortOrder
    id_mk?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DosenScalarRelationFilter = {
    is?: dosenWhereInput
    isNot?: dosenWhereInput
  }

  export type KelasScalarRelationFilter = {
    is?: kelasWhereInput
    isNot?: kelasWhereInput
  }

  export type NotifikasiListRelationFilter = {
    every?: notifikasiWhereInput
    some?: notifikasiWhereInput
    none?: notifikasiWhereInput
  }

  export type PendaftaranListRelationFilter = {
    every?: pendaftaranWhereInput
    some?: pendaftaranWhereInput
    none?: pendaftaranWhereInput
  }

  export type notifikasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pendaftaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lowonganCountOrderByAggregateInput = {
    id_lowongan?: SortOrder
    id_kelas?: SortOrder
    id_dosen?: SortOrder
    tahun_ajaran?: SortOrder
    jumlah_asisten?: SortOrder
    persyaratan?: SortOrder
    honor?: SortOrder
    tanggal_mulai_pendaftaran?: SortOrder
    tanggal_akhir_pendaftaran?: SortOrder
    tanggal_mulai_kontrak?: SortOrder
    tanggal_akhir_kontrak?: SortOrder
  }

  export type lowonganAvgOrderByAggregateInput = {
    id_lowongan?: SortOrder
    id_kelas?: SortOrder
    id_dosen?: SortOrder
    jumlah_asisten?: SortOrder
    honor?: SortOrder
  }

  export type lowonganMaxOrderByAggregateInput = {
    id_lowongan?: SortOrder
    id_kelas?: SortOrder
    id_dosen?: SortOrder
    tahun_ajaran?: SortOrder
    jumlah_asisten?: SortOrder
    persyaratan?: SortOrder
    honor?: SortOrder
    tanggal_mulai_pendaftaran?: SortOrder
    tanggal_akhir_pendaftaran?: SortOrder
    tanggal_mulai_kontrak?: SortOrder
    tanggal_akhir_kontrak?: SortOrder
  }

  export type lowonganMinOrderByAggregateInput = {
    id_lowongan?: SortOrder
    id_kelas?: SortOrder
    id_dosen?: SortOrder
    tahun_ajaran?: SortOrder
    jumlah_asisten?: SortOrder
    persyaratan?: SortOrder
    honor?: SortOrder
    tanggal_mulai_pendaftaran?: SortOrder
    tanggal_akhir_pendaftaran?: SortOrder
    tanggal_mulai_kontrak?: SortOrder
    tanggal_akhir_kontrak?: SortOrder
  }

  export type lowonganSumOrderByAggregateInput = {
    id_lowongan?: SortOrder
    id_kelas?: SortOrder
    id_dosen?: SortOrder
    jumlah_asisten?: SortOrder
    honor?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type mahasiswaCountOrderByAggregateInput = {
    id_mahasiswa?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    jurusan?: SortOrder
    angkatan?: SortOrder
    semester?: SortOrder
  }

  export type mahasiswaAvgOrderByAggregateInput = {
    id_mahasiswa?: SortOrder
    semester?: SortOrder
  }

  export type mahasiswaMaxOrderByAggregateInput = {
    id_mahasiswa?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    jurusan?: SortOrder
    angkatan?: SortOrder
    semester?: SortOrder
  }

  export type mahasiswaMinOrderByAggregateInput = {
    id_mahasiswa?: SortOrder
    nrp?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    no_telepon?: SortOrder
    jurusan?: SortOrder
    angkatan?: SortOrder
    semester?: SortOrder
  }

  export type mahasiswaSumOrderByAggregateInput = {
    id_mahasiswa?: SortOrder
    semester?: SortOrder
  }

  export type KelasListRelationFilter = {
    every?: kelasWhereInput
    some?: kelasWhereInput
    none?: kelasWhereInput
  }

  export type kelasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mata_kuliahCountOrderByAggregateInput = {
    id_mk?: SortOrder
    kode_mk?: SortOrder
    nama_mk?: SortOrder
    jumlah_sks?: SortOrder
  }

  export type mata_kuliahAvgOrderByAggregateInput = {
    id_mk?: SortOrder
    jumlah_sks?: SortOrder
  }

  export type mata_kuliahMaxOrderByAggregateInput = {
    id_mk?: SortOrder
    kode_mk?: SortOrder
    nama_mk?: SortOrder
    jumlah_sks?: SortOrder
  }

  export type mata_kuliahMinOrderByAggregateInput = {
    id_mk?: SortOrder
    kode_mk?: SortOrder
    nama_mk?: SortOrder
    jumlah_sks?: SortOrder
  }

  export type mata_kuliahSumOrderByAggregateInput = {
    id_mk?: SortOrder
    jumlah_sks?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Enumjenis_notifikasi_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis_notifikasi_enum | Enumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumjenis_notifikasi_enumNullableFilter<$PrismaModel> | $Enums.jenis_notifikasi_enum | null
  }

  export type LowonganNullableScalarRelationFilter = {
    is?: lowonganWhereInput | null
    isNot?: lowonganWhereInput | null
  }

  export type MahasiswaNullableScalarRelationFilter = {
    is?: mahasiswaWhereInput | null
    isNot?: mahasiswaWhereInput | null
  }

  export type notifikasiCountOrderByAggregateInput = {
    id_notifikasi?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    jenis_notifikasi?: SortOrder
    isi_pesan?: SortOrder
    tanggal_kirim?: SortOrder
  }

  export type notifikasiAvgOrderByAggregateInput = {
    id_notifikasi?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
  }

  export type notifikasiMaxOrderByAggregateInput = {
    id_notifikasi?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    jenis_notifikasi?: SortOrder
    isi_pesan?: SortOrder
    tanggal_kirim?: SortOrder
  }

  export type notifikasiMinOrderByAggregateInput = {
    id_notifikasi?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    jenis_notifikasi?: SortOrder
    isi_pesan?: SortOrder
    tanggal_kirim?: SortOrder
  }

  export type notifikasiSumOrderByAggregateInput = {
    id_notifikasi?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type Enumjenis_notifikasi_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis_notifikasi_enum | Enumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumjenis_notifikasi_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.jenis_notifikasi_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumjenis_notifikasi_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumjenis_notifikasi_enumNullableFilter<$PrismaModel>
  }

  export type Enumstatus_pendaftaran_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pendaftaran_enum | Enumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_pendaftaran_enumNullableFilter<$PrismaModel> | $Enums.status_pendaftaran_enum | null
  }

  export type BerkasListRelationFilter = {
    every?: berkasWhereInput
    some?: berkasWhereInput
    none?: berkasWhereInput
  }

  export type LowonganScalarRelationFilter = {
    is?: lowonganWhereInput
    isNot?: lowonganWhereInput
  }

  export type MahasiswaScalarRelationFilter = {
    is?: mahasiswaWhereInput
    isNot?: mahasiswaWhereInput
  }

  export type berkasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pendaftaranCountOrderByAggregateInput = {
    id_pendaftaran?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    status_pendaftaran?: SortOrder
    tanggal_daftar?: SortOrder
  }

  export type pendaftaranAvgOrderByAggregateInput = {
    id_pendaftaran?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
  }

  export type pendaftaranMaxOrderByAggregateInput = {
    id_pendaftaran?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    status_pendaftaran?: SortOrder
    tanggal_daftar?: SortOrder
  }

  export type pendaftaranMinOrderByAggregateInput = {
    id_pendaftaran?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
    status_pendaftaran?: SortOrder
    tanggal_daftar?: SortOrder
  }

  export type pendaftaranSumOrderByAggregateInput = {
    id_pendaftaran?: SortOrder
    id_lowongan?: SortOrder
    id_mahasiswa?: SortOrder
  }

  export type Enumstatus_pendaftaran_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pendaftaran_enum | Enumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_pendaftaran_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_pendaftaran_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_pendaftaran_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_pendaftaran_enumNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumuser_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumFilter<$PrismaModel> | $Enums.user_role_enum
  }

  export type DosenNullableScalarRelationFilter = {
    is?: dosenWhereInput | null
    isNot?: dosenWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id_user?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumuser_role_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumWithAggregatesFilter<$PrismaModel> | $Enums.user_role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_role_enumFilter<$PrismaModel>
    _max?: NestedEnumuser_role_enumFilter<$PrismaModel>
  }

  export type pendaftaranCreateNestedOneWithoutBerkasInput = {
    create?: XOR<pendaftaranCreateWithoutBerkasInput, pendaftaranUncheckedCreateWithoutBerkasInput>
    connectOrCreate?: pendaftaranCreateOrConnectWithoutBerkasInput
    connect?: pendaftaranWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type pendaftaranUpdateOneRequiredWithoutBerkasNestedInput = {
    create?: XOR<pendaftaranCreateWithoutBerkasInput, pendaftaranUncheckedCreateWithoutBerkasInput>
    connectOrCreate?: pendaftaranCreateOrConnectWithoutBerkasInput
    upsert?: pendaftaranUpsertWithoutBerkasInput
    connect?: pendaftaranWhereUniqueInput
    update?: XOR<XOR<pendaftaranUpdateToOneWithWhereWithoutBerkasInput, pendaftaranUpdateWithoutBerkasInput>, pendaftaranUncheckedUpdateWithoutBerkasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutDosenInput = {
    create?: XOR<usersCreateWithoutDosenInput, usersUncheckedCreateWithoutDosenInput>
    connectOrCreate?: usersCreateOrConnectWithoutDosenInput
    connect?: usersWhereUniqueInput
  }

  export type lowonganCreateNestedManyWithoutDosenInput = {
    create?: XOR<lowonganCreateWithoutDosenInput, lowonganUncheckedCreateWithoutDosenInput> | lowonganCreateWithoutDosenInput[] | lowonganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutDosenInput | lowonganCreateOrConnectWithoutDosenInput[]
    createMany?: lowonganCreateManyDosenInputEnvelope
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
  }

  export type lowonganUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<lowonganCreateWithoutDosenInput, lowonganUncheckedCreateWithoutDosenInput> | lowonganCreateWithoutDosenInput[] | lowonganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutDosenInput | lowonganCreateOrConnectWithoutDosenInput[]
    createMany?: lowonganCreateManyDosenInputEnvelope
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutDosenNestedInput = {
    create?: XOR<usersCreateWithoutDosenInput, usersUncheckedCreateWithoutDosenInput>
    connectOrCreate?: usersCreateOrConnectWithoutDosenInput
    upsert?: usersUpsertWithoutDosenInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDosenInput, usersUpdateWithoutDosenInput>, usersUncheckedUpdateWithoutDosenInput>
  }

  export type lowonganUpdateManyWithoutDosenNestedInput = {
    create?: XOR<lowonganCreateWithoutDosenInput, lowonganUncheckedCreateWithoutDosenInput> | lowonganCreateWithoutDosenInput[] | lowonganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutDosenInput | lowonganCreateOrConnectWithoutDosenInput[]
    upsert?: lowonganUpsertWithWhereUniqueWithoutDosenInput | lowonganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: lowonganCreateManyDosenInputEnvelope
    set?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    disconnect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    delete?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    update?: lowonganUpdateWithWhereUniqueWithoutDosenInput | lowonganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: lowonganUpdateManyWithWhereWithoutDosenInput | lowonganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: lowonganScalarWhereInput | lowonganScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type lowonganUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<lowonganCreateWithoutDosenInput, lowonganUncheckedCreateWithoutDosenInput> | lowonganCreateWithoutDosenInput[] | lowonganUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutDosenInput | lowonganCreateOrConnectWithoutDosenInput[]
    upsert?: lowonganUpsertWithWhereUniqueWithoutDosenInput | lowonganUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: lowonganCreateManyDosenInputEnvelope
    set?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    disconnect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    delete?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    update?: lowonganUpdateWithWhereUniqueWithoutDosenInput | lowonganUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: lowonganUpdateManyWithWhereWithoutDosenInput | lowonganUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: lowonganScalarWhereInput | lowonganScalarWhereInput[]
  }

  export type mata_kuliahCreateNestedOneWithoutKelasInput = {
    create?: XOR<mata_kuliahCreateWithoutKelasInput, mata_kuliahUncheckedCreateWithoutKelasInput>
    connectOrCreate?: mata_kuliahCreateOrConnectWithoutKelasInput
    connect?: mata_kuliahWhereUniqueInput
  }

  export type lowonganCreateNestedManyWithoutKelasInput = {
    create?: XOR<lowonganCreateWithoutKelasInput, lowonganUncheckedCreateWithoutKelasInput> | lowonganCreateWithoutKelasInput[] | lowonganUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutKelasInput | lowonganCreateOrConnectWithoutKelasInput[]
    createMany?: lowonganCreateManyKelasInputEnvelope
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
  }

  export type lowonganUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<lowonganCreateWithoutKelasInput, lowonganUncheckedCreateWithoutKelasInput> | lowonganCreateWithoutKelasInput[] | lowonganUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutKelasInput | lowonganCreateOrConnectWithoutKelasInput[]
    createMany?: lowonganCreateManyKelasInputEnvelope
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
  }

  export type mata_kuliahUpdateOneRequiredWithoutKelasNestedInput = {
    create?: XOR<mata_kuliahCreateWithoutKelasInput, mata_kuliahUncheckedCreateWithoutKelasInput>
    connectOrCreate?: mata_kuliahCreateOrConnectWithoutKelasInput
    upsert?: mata_kuliahUpsertWithoutKelasInput
    connect?: mata_kuliahWhereUniqueInput
    update?: XOR<XOR<mata_kuliahUpdateToOneWithWhereWithoutKelasInput, mata_kuliahUpdateWithoutKelasInput>, mata_kuliahUncheckedUpdateWithoutKelasInput>
  }

  export type lowonganUpdateManyWithoutKelasNestedInput = {
    create?: XOR<lowonganCreateWithoutKelasInput, lowonganUncheckedCreateWithoutKelasInput> | lowonganCreateWithoutKelasInput[] | lowonganUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutKelasInput | lowonganCreateOrConnectWithoutKelasInput[]
    upsert?: lowonganUpsertWithWhereUniqueWithoutKelasInput | lowonganUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: lowonganCreateManyKelasInputEnvelope
    set?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    disconnect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    delete?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    update?: lowonganUpdateWithWhereUniqueWithoutKelasInput | lowonganUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: lowonganUpdateManyWithWhereWithoutKelasInput | lowonganUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: lowonganScalarWhereInput | lowonganScalarWhereInput[]
  }

  export type lowonganUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<lowonganCreateWithoutKelasInput, lowonganUncheckedCreateWithoutKelasInput> | lowonganCreateWithoutKelasInput[] | lowonganUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: lowonganCreateOrConnectWithoutKelasInput | lowonganCreateOrConnectWithoutKelasInput[]
    upsert?: lowonganUpsertWithWhereUniqueWithoutKelasInput | lowonganUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: lowonganCreateManyKelasInputEnvelope
    set?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    disconnect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    delete?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    connect?: lowonganWhereUniqueInput | lowonganWhereUniqueInput[]
    update?: lowonganUpdateWithWhereUniqueWithoutKelasInput | lowonganUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: lowonganUpdateManyWithWhereWithoutKelasInput | lowonganUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: lowonganScalarWhereInput | lowonganScalarWhereInput[]
  }

  export type dosenCreateNestedOneWithoutLowonganInput = {
    create?: XOR<dosenCreateWithoutLowonganInput, dosenUncheckedCreateWithoutLowonganInput>
    connectOrCreate?: dosenCreateOrConnectWithoutLowonganInput
    connect?: dosenWhereUniqueInput
  }

  export type kelasCreateNestedOneWithoutLowonganInput = {
    create?: XOR<kelasCreateWithoutLowonganInput, kelasUncheckedCreateWithoutLowonganInput>
    connectOrCreate?: kelasCreateOrConnectWithoutLowonganInput
    connect?: kelasWhereUniqueInput
  }

  export type notifikasiCreateNestedManyWithoutLowonganInput = {
    create?: XOR<notifikasiCreateWithoutLowonganInput, notifikasiUncheckedCreateWithoutLowonganInput> | notifikasiCreateWithoutLowonganInput[] | notifikasiUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutLowonganInput | notifikasiCreateOrConnectWithoutLowonganInput[]
    createMany?: notifikasiCreateManyLowonganInputEnvelope
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
  }

  export type pendaftaranCreateNestedManyWithoutLowonganInput = {
    create?: XOR<pendaftaranCreateWithoutLowonganInput, pendaftaranUncheckedCreateWithoutLowonganInput> | pendaftaranCreateWithoutLowonganInput[] | pendaftaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutLowonganInput | pendaftaranCreateOrConnectWithoutLowonganInput[]
    createMany?: pendaftaranCreateManyLowonganInputEnvelope
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
  }

  export type notifikasiUncheckedCreateNestedManyWithoutLowonganInput = {
    create?: XOR<notifikasiCreateWithoutLowonganInput, notifikasiUncheckedCreateWithoutLowonganInput> | notifikasiCreateWithoutLowonganInput[] | notifikasiUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutLowonganInput | notifikasiCreateOrConnectWithoutLowonganInput[]
    createMany?: notifikasiCreateManyLowonganInputEnvelope
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
  }

  export type pendaftaranUncheckedCreateNestedManyWithoutLowonganInput = {
    create?: XOR<pendaftaranCreateWithoutLowonganInput, pendaftaranUncheckedCreateWithoutLowonganInput> | pendaftaranCreateWithoutLowonganInput[] | pendaftaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutLowonganInput | pendaftaranCreateOrConnectWithoutLowonganInput[]
    createMany?: pendaftaranCreateManyLowonganInputEnvelope
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dosenUpdateOneRequiredWithoutLowonganNestedInput = {
    create?: XOR<dosenCreateWithoutLowonganInput, dosenUncheckedCreateWithoutLowonganInput>
    connectOrCreate?: dosenCreateOrConnectWithoutLowonganInput
    upsert?: dosenUpsertWithoutLowonganInput
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutLowonganInput, dosenUpdateWithoutLowonganInput>, dosenUncheckedUpdateWithoutLowonganInput>
  }

  export type kelasUpdateOneRequiredWithoutLowonganNestedInput = {
    create?: XOR<kelasCreateWithoutLowonganInput, kelasUncheckedCreateWithoutLowonganInput>
    connectOrCreate?: kelasCreateOrConnectWithoutLowonganInput
    upsert?: kelasUpsertWithoutLowonganInput
    connect?: kelasWhereUniqueInput
    update?: XOR<XOR<kelasUpdateToOneWithWhereWithoutLowonganInput, kelasUpdateWithoutLowonganInput>, kelasUncheckedUpdateWithoutLowonganInput>
  }

  export type notifikasiUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<notifikasiCreateWithoutLowonganInput, notifikasiUncheckedCreateWithoutLowonganInput> | notifikasiCreateWithoutLowonganInput[] | notifikasiUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutLowonganInput | notifikasiCreateOrConnectWithoutLowonganInput[]
    upsert?: notifikasiUpsertWithWhereUniqueWithoutLowonganInput | notifikasiUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: notifikasiCreateManyLowonganInputEnvelope
    set?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    disconnect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    delete?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    update?: notifikasiUpdateWithWhereUniqueWithoutLowonganInput | notifikasiUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: notifikasiUpdateManyWithWhereWithoutLowonganInput | notifikasiUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
  }

  export type pendaftaranUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<pendaftaranCreateWithoutLowonganInput, pendaftaranUncheckedCreateWithoutLowonganInput> | pendaftaranCreateWithoutLowonganInput[] | pendaftaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutLowonganInput | pendaftaranCreateOrConnectWithoutLowonganInput[]
    upsert?: pendaftaranUpsertWithWhereUniqueWithoutLowonganInput | pendaftaranUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: pendaftaranCreateManyLowonganInputEnvelope
    set?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    disconnect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    delete?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    update?: pendaftaranUpdateWithWhereUniqueWithoutLowonganInput | pendaftaranUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: pendaftaranUpdateManyWithWhereWithoutLowonganInput | pendaftaranUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: pendaftaranScalarWhereInput | pendaftaranScalarWhereInput[]
  }

  export type notifikasiUncheckedUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<notifikasiCreateWithoutLowonganInput, notifikasiUncheckedCreateWithoutLowonganInput> | notifikasiCreateWithoutLowonganInput[] | notifikasiUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutLowonganInput | notifikasiCreateOrConnectWithoutLowonganInput[]
    upsert?: notifikasiUpsertWithWhereUniqueWithoutLowonganInput | notifikasiUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: notifikasiCreateManyLowonganInputEnvelope
    set?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    disconnect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    delete?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    update?: notifikasiUpdateWithWhereUniqueWithoutLowonganInput | notifikasiUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: notifikasiUpdateManyWithWhereWithoutLowonganInput | notifikasiUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
  }

  export type pendaftaranUncheckedUpdateManyWithoutLowonganNestedInput = {
    create?: XOR<pendaftaranCreateWithoutLowonganInput, pendaftaranUncheckedCreateWithoutLowonganInput> | pendaftaranCreateWithoutLowonganInput[] | pendaftaranUncheckedCreateWithoutLowonganInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutLowonganInput | pendaftaranCreateOrConnectWithoutLowonganInput[]
    upsert?: pendaftaranUpsertWithWhereUniqueWithoutLowonganInput | pendaftaranUpsertWithWhereUniqueWithoutLowonganInput[]
    createMany?: pendaftaranCreateManyLowonganInputEnvelope
    set?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    disconnect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    delete?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    update?: pendaftaranUpdateWithWhereUniqueWithoutLowonganInput | pendaftaranUpdateWithWhereUniqueWithoutLowonganInput[]
    updateMany?: pendaftaranUpdateManyWithWhereWithoutLowonganInput | pendaftaranUpdateManyWithWhereWithoutLowonganInput[]
    deleteMany?: pendaftaranScalarWhereInput | pendaftaranScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<usersCreateWithoutMahasiswaInput, usersUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: usersCreateOrConnectWithoutMahasiswaInput
    connect?: usersWhereUniqueInput
  }

  export type notifikasiCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<notifikasiCreateWithoutMahasiswaInput, notifikasiUncheckedCreateWithoutMahasiswaInput> | notifikasiCreateWithoutMahasiswaInput[] | notifikasiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutMahasiswaInput | notifikasiCreateOrConnectWithoutMahasiswaInput[]
    createMany?: notifikasiCreateManyMahasiswaInputEnvelope
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
  }

  export type pendaftaranCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<pendaftaranCreateWithoutMahasiswaInput, pendaftaranUncheckedCreateWithoutMahasiswaInput> | pendaftaranCreateWithoutMahasiswaInput[] | pendaftaranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutMahasiswaInput | pendaftaranCreateOrConnectWithoutMahasiswaInput[]
    createMany?: pendaftaranCreateManyMahasiswaInputEnvelope
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
  }

  export type notifikasiUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<notifikasiCreateWithoutMahasiswaInput, notifikasiUncheckedCreateWithoutMahasiswaInput> | notifikasiCreateWithoutMahasiswaInput[] | notifikasiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutMahasiswaInput | notifikasiCreateOrConnectWithoutMahasiswaInput[]
    createMany?: notifikasiCreateManyMahasiswaInputEnvelope
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
  }

  export type pendaftaranUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<pendaftaranCreateWithoutMahasiswaInput, pendaftaranUncheckedCreateWithoutMahasiswaInput> | pendaftaranCreateWithoutMahasiswaInput[] | pendaftaranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutMahasiswaInput | pendaftaranCreateOrConnectWithoutMahasiswaInput[]
    createMany?: pendaftaranCreateManyMahasiswaInputEnvelope
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutMahasiswaNestedInput = {
    create?: XOR<usersCreateWithoutMahasiswaInput, usersUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: usersCreateOrConnectWithoutMahasiswaInput
    upsert?: usersUpsertWithoutMahasiswaInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMahasiswaInput, usersUpdateWithoutMahasiswaInput>, usersUncheckedUpdateWithoutMahasiswaInput>
  }

  export type notifikasiUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<notifikasiCreateWithoutMahasiswaInput, notifikasiUncheckedCreateWithoutMahasiswaInput> | notifikasiCreateWithoutMahasiswaInput[] | notifikasiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutMahasiswaInput | notifikasiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: notifikasiUpsertWithWhereUniqueWithoutMahasiswaInput | notifikasiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: notifikasiCreateManyMahasiswaInputEnvelope
    set?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    disconnect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    delete?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    update?: notifikasiUpdateWithWhereUniqueWithoutMahasiswaInput | notifikasiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: notifikasiUpdateManyWithWhereWithoutMahasiswaInput | notifikasiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
  }

  export type pendaftaranUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<pendaftaranCreateWithoutMahasiswaInput, pendaftaranUncheckedCreateWithoutMahasiswaInput> | pendaftaranCreateWithoutMahasiswaInput[] | pendaftaranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutMahasiswaInput | pendaftaranCreateOrConnectWithoutMahasiswaInput[]
    upsert?: pendaftaranUpsertWithWhereUniqueWithoutMahasiswaInput | pendaftaranUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: pendaftaranCreateManyMahasiswaInputEnvelope
    set?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    disconnect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    delete?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    update?: pendaftaranUpdateWithWhereUniqueWithoutMahasiswaInput | pendaftaranUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: pendaftaranUpdateManyWithWhereWithoutMahasiswaInput | pendaftaranUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: pendaftaranScalarWhereInput | pendaftaranScalarWhereInput[]
  }

  export type notifikasiUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<notifikasiCreateWithoutMahasiswaInput, notifikasiUncheckedCreateWithoutMahasiswaInput> | notifikasiCreateWithoutMahasiswaInput[] | notifikasiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: notifikasiCreateOrConnectWithoutMahasiswaInput | notifikasiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: notifikasiUpsertWithWhereUniqueWithoutMahasiswaInput | notifikasiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: notifikasiCreateManyMahasiswaInputEnvelope
    set?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    disconnect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    delete?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    connect?: notifikasiWhereUniqueInput | notifikasiWhereUniqueInput[]
    update?: notifikasiUpdateWithWhereUniqueWithoutMahasiswaInput | notifikasiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: notifikasiUpdateManyWithWhereWithoutMahasiswaInput | notifikasiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
  }

  export type pendaftaranUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<pendaftaranCreateWithoutMahasiswaInput, pendaftaranUncheckedCreateWithoutMahasiswaInput> | pendaftaranCreateWithoutMahasiswaInput[] | pendaftaranUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: pendaftaranCreateOrConnectWithoutMahasiswaInput | pendaftaranCreateOrConnectWithoutMahasiswaInput[]
    upsert?: pendaftaranUpsertWithWhereUniqueWithoutMahasiswaInput | pendaftaranUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: pendaftaranCreateManyMahasiswaInputEnvelope
    set?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    disconnect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    delete?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    connect?: pendaftaranWhereUniqueInput | pendaftaranWhereUniqueInput[]
    update?: pendaftaranUpdateWithWhereUniqueWithoutMahasiswaInput | pendaftaranUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: pendaftaranUpdateManyWithWhereWithoutMahasiswaInput | pendaftaranUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: pendaftaranScalarWhereInput | pendaftaranScalarWhereInput[]
  }

  export type kelasCreateNestedManyWithoutMata_kuliahInput = {
    create?: XOR<kelasCreateWithoutMata_kuliahInput, kelasUncheckedCreateWithoutMata_kuliahInput> | kelasCreateWithoutMata_kuliahInput[] | kelasUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutMata_kuliahInput | kelasCreateOrConnectWithoutMata_kuliahInput[]
    createMany?: kelasCreateManyMata_kuliahInputEnvelope
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
  }

  export type kelasUncheckedCreateNestedManyWithoutMata_kuliahInput = {
    create?: XOR<kelasCreateWithoutMata_kuliahInput, kelasUncheckedCreateWithoutMata_kuliahInput> | kelasCreateWithoutMata_kuliahInput[] | kelasUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutMata_kuliahInput | kelasCreateOrConnectWithoutMata_kuliahInput[]
    createMany?: kelasCreateManyMata_kuliahInputEnvelope
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
  }

  export type kelasUpdateManyWithoutMata_kuliahNestedInput = {
    create?: XOR<kelasCreateWithoutMata_kuliahInput, kelasUncheckedCreateWithoutMata_kuliahInput> | kelasCreateWithoutMata_kuliahInput[] | kelasUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutMata_kuliahInput | kelasCreateOrConnectWithoutMata_kuliahInput[]
    upsert?: kelasUpsertWithWhereUniqueWithoutMata_kuliahInput | kelasUpsertWithWhereUniqueWithoutMata_kuliahInput[]
    createMany?: kelasCreateManyMata_kuliahInputEnvelope
    set?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    disconnect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    delete?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    update?: kelasUpdateWithWhereUniqueWithoutMata_kuliahInput | kelasUpdateWithWhereUniqueWithoutMata_kuliahInput[]
    updateMany?: kelasUpdateManyWithWhereWithoutMata_kuliahInput | kelasUpdateManyWithWhereWithoutMata_kuliahInput[]
    deleteMany?: kelasScalarWhereInput | kelasScalarWhereInput[]
  }

  export type kelasUncheckedUpdateManyWithoutMata_kuliahNestedInput = {
    create?: XOR<kelasCreateWithoutMata_kuliahInput, kelasUncheckedCreateWithoutMata_kuliahInput> | kelasCreateWithoutMata_kuliahInput[] | kelasUncheckedCreateWithoutMata_kuliahInput[]
    connectOrCreate?: kelasCreateOrConnectWithoutMata_kuliahInput | kelasCreateOrConnectWithoutMata_kuliahInput[]
    upsert?: kelasUpsertWithWhereUniqueWithoutMata_kuliahInput | kelasUpsertWithWhereUniqueWithoutMata_kuliahInput[]
    createMany?: kelasCreateManyMata_kuliahInputEnvelope
    set?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    disconnect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    delete?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    connect?: kelasWhereUniqueInput | kelasWhereUniqueInput[]
    update?: kelasUpdateWithWhereUniqueWithoutMata_kuliahInput | kelasUpdateWithWhereUniqueWithoutMata_kuliahInput[]
    updateMany?: kelasUpdateManyWithWhereWithoutMata_kuliahInput | kelasUpdateManyWithWhereWithoutMata_kuliahInput[]
    deleteMany?: kelasScalarWhereInput | kelasScalarWhereInput[]
  }

  export type lowonganCreateNestedOneWithoutNotifikasiInput = {
    create?: XOR<lowonganCreateWithoutNotifikasiInput, lowonganUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: lowonganCreateOrConnectWithoutNotifikasiInput
    connect?: lowonganWhereUniqueInput
  }

  export type mahasiswaCreateNestedOneWithoutNotifikasiInput = {
    create?: XOR<mahasiswaCreateWithoutNotifikasiInput, mahasiswaUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNotifikasiInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput = {
    set?: $Enums.jenis_notifikasi_enum | null
  }

  export type lowonganUpdateOneWithoutNotifikasiNestedInput = {
    create?: XOR<lowonganCreateWithoutNotifikasiInput, lowonganUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: lowonganCreateOrConnectWithoutNotifikasiInput
    upsert?: lowonganUpsertWithoutNotifikasiInput
    disconnect?: lowonganWhereInput | boolean
    delete?: lowonganWhereInput | boolean
    connect?: lowonganWhereUniqueInput
    update?: XOR<XOR<lowonganUpdateToOneWithWhereWithoutNotifikasiInput, lowonganUpdateWithoutNotifikasiInput>, lowonganUncheckedUpdateWithoutNotifikasiInput>
  }

  export type mahasiswaUpdateOneWithoutNotifikasiNestedInput = {
    create?: XOR<mahasiswaCreateWithoutNotifikasiInput, mahasiswaUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutNotifikasiInput
    upsert?: mahasiswaUpsertWithoutNotifikasiInput
    disconnect?: mahasiswaWhereInput | boolean
    delete?: mahasiswaWhereInput | boolean
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutNotifikasiInput, mahasiswaUpdateWithoutNotifikasiInput>, mahasiswaUncheckedUpdateWithoutNotifikasiInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type berkasCreateNestedManyWithoutPendaftaranInput = {
    create?: XOR<berkasCreateWithoutPendaftaranInput, berkasUncheckedCreateWithoutPendaftaranInput> | berkasCreateWithoutPendaftaranInput[] | berkasUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutPendaftaranInput | berkasCreateOrConnectWithoutPendaftaranInput[]
    createMany?: berkasCreateManyPendaftaranInputEnvelope
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
  }

  export type lowonganCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<lowonganCreateWithoutPendaftaranInput, lowonganUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: lowonganCreateOrConnectWithoutPendaftaranInput
    connect?: lowonganWhereUniqueInput
  }

  export type mahasiswaCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<mahasiswaCreateWithoutPendaftaranInput, mahasiswaUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutPendaftaranInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type berkasUncheckedCreateNestedManyWithoutPendaftaranInput = {
    create?: XOR<berkasCreateWithoutPendaftaranInput, berkasUncheckedCreateWithoutPendaftaranInput> | berkasCreateWithoutPendaftaranInput[] | berkasUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutPendaftaranInput | berkasCreateOrConnectWithoutPendaftaranInput[]
    createMany?: berkasCreateManyPendaftaranInputEnvelope
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
  }

  export type NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput = {
    set?: $Enums.status_pendaftaran_enum | null
  }

  export type berkasUpdateManyWithoutPendaftaranNestedInput = {
    create?: XOR<berkasCreateWithoutPendaftaranInput, berkasUncheckedCreateWithoutPendaftaranInput> | berkasCreateWithoutPendaftaranInput[] | berkasUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutPendaftaranInput | berkasCreateOrConnectWithoutPendaftaranInput[]
    upsert?: berkasUpsertWithWhereUniqueWithoutPendaftaranInput | berkasUpsertWithWhereUniqueWithoutPendaftaranInput[]
    createMany?: berkasCreateManyPendaftaranInputEnvelope
    set?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    disconnect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    delete?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    update?: berkasUpdateWithWhereUniqueWithoutPendaftaranInput | berkasUpdateWithWhereUniqueWithoutPendaftaranInput[]
    updateMany?: berkasUpdateManyWithWhereWithoutPendaftaranInput | berkasUpdateManyWithWhereWithoutPendaftaranInput[]
    deleteMany?: berkasScalarWhereInput | berkasScalarWhereInput[]
  }

  export type lowonganUpdateOneRequiredWithoutPendaftaranNestedInput = {
    create?: XOR<lowonganCreateWithoutPendaftaranInput, lowonganUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: lowonganCreateOrConnectWithoutPendaftaranInput
    upsert?: lowonganUpsertWithoutPendaftaranInput
    connect?: lowonganWhereUniqueInput
    update?: XOR<XOR<lowonganUpdateToOneWithWhereWithoutPendaftaranInput, lowonganUpdateWithoutPendaftaranInput>, lowonganUncheckedUpdateWithoutPendaftaranInput>
  }

  export type mahasiswaUpdateOneRequiredWithoutPendaftaranNestedInput = {
    create?: XOR<mahasiswaCreateWithoutPendaftaranInput, mahasiswaUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutPendaftaranInput
    upsert?: mahasiswaUpsertWithoutPendaftaranInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutPendaftaranInput, mahasiswaUpdateWithoutPendaftaranInput>, mahasiswaUncheckedUpdateWithoutPendaftaranInput>
  }

  export type berkasUncheckedUpdateManyWithoutPendaftaranNestedInput = {
    create?: XOR<berkasCreateWithoutPendaftaranInput, berkasUncheckedCreateWithoutPendaftaranInput> | berkasCreateWithoutPendaftaranInput[] | berkasUncheckedCreateWithoutPendaftaranInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutPendaftaranInput | berkasCreateOrConnectWithoutPendaftaranInput[]
    upsert?: berkasUpsertWithWhereUniqueWithoutPendaftaranInput | berkasUpsertWithWhereUniqueWithoutPendaftaranInput[]
    createMany?: berkasCreateManyPendaftaranInputEnvelope
    set?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    disconnect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    delete?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    update?: berkasUpdateWithWhereUniqueWithoutPendaftaranInput | berkasUpdateWithWhereUniqueWithoutPendaftaranInput[]
    updateMany?: berkasUpdateManyWithWhereWithoutPendaftaranInput | berkasUpdateManyWithWhereWithoutPendaftaranInput[]
    deleteMany?: berkasScalarWhereInput | berkasScalarWhereInput[]
  }

  export type dosenCreateNestedOneWithoutUsersInput = {
    create?: XOR<dosenCreateWithoutUsersInput, dosenUncheckedCreateWithoutUsersInput>
    connectOrCreate?: dosenCreateOrConnectWithoutUsersInput
    connect?: dosenWhereUniqueInput
  }

  export type mahasiswaCreateNestedOneWithoutUsersInput = {
    create?: XOR<mahasiswaCreateWithoutUsersInput, mahasiswaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutUsersInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type dosenUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<dosenCreateWithoutUsersInput, dosenUncheckedCreateWithoutUsersInput>
    connectOrCreate?: dosenCreateOrConnectWithoutUsersInput
    connect?: dosenWhereUniqueInput
  }

  export type mahasiswaUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<mahasiswaCreateWithoutUsersInput, mahasiswaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutUsersInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumuser_role_enumFieldUpdateOperationsInput = {
    set?: $Enums.user_role_enum
  }

  export type dosenUpdateOneWithoutUsersNestedInput = {
    create?: XOR<dosenCreateWithoutUsersInput, dosenUncheckedCreateWithoutUsersInput>
    connectOrCreate?: dosenCreateOrConnectWithoutUsersInput
    upsert?: dosenUpsertWithoutUsersInput
    disconnect?: dosenWhereInput | boolean
    delete?: dosenWhereInput | boolean
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutUsersInput, dosenUpdateWithoutUsersInput>, dosenUncheckedUpdateWithoutUsersInput>
  }

  export type mahasiswaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<mahasiswaCreateWithoutUsersInput, mahasiswaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutUsersInput
    upsert?: mahasiswaUpsertWithoutUsersInput
    disconnect?: mahasiswaWhereInput | boolean
    delete?: mahasiswaWhereInput | boolean
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutUsersInput, mahasiswaUpdateWithoutUsersInput>, mahasiswaUncheckedUpdateWithoutUsersInput>
  }

  export type dosenUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<dosenCreateWithoutUsersInput, dosenUncheckedCreateWithoutUsersInput>
    connectOrCreate?: dosenCreateOrConnectWithoutUsersInput
    upsert?: dosenUpsertWithoutUsersInput
    disconnect?: dosenWhereInput | boolean
    delete?: dosenWhereInput | boolean
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutUsersInput, dosenUpdateWithoutUsersInput>, dosenUncheckedUpdateWithoutUsersInput>
  }

  export type mahasiswaUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<mahasiswaCreateWithoutUsersInput, mahasiswaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutUsersInput
    upsert?: mahasiswaUpsertWithoutUsersInput
    disconnect?: mahasiswaWhereInput | boolean
    delete?: mahasiswaWhereInput | boolean
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutUsersInput, mahasiswaUpdateWithoutUsersInput>, mahasiswaUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumjenis_notifikasi_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis_notifikasi_enum | Enumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumjenis_notifikasi_enumNullableFilter<$PrismaModel> | $Enums.jenis_notifikasi_enum | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumjenis_notifikasi_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis_notifikasi_enum | Enumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.jenis_notifikasi_enum[] | ListEnumjenis_notifikasi_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumjenis_notifikasi_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.jenis_notifikasi_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumjenis_notifikasi_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumjenis_notifikasi_enumNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatus_pendaftaran_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pendaftaran_enum | Enumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_pendaftaran_enumNullableFilter<$PrismaModel> | $Enums.status_pendaftaran_enum | null
  }

  export type NestedEnumstatus_pendaftaran_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pendaftaran_enum | Enumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_pendaftaran_enum[] | ListEnumstatus_pendaftaran_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_pendaftaran_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_pendaftaran_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_pendaftaran_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_pendaftaran_enumNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumuser_role_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumFilter<$PrismaModel> | $Enums.user_role_enum
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumuser_role_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role_enum | Enumuser_role_enumFieldRefInput<$PrismaModel>
    in?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role_enum[] | ListEnumuser_role_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_role_enumWithAggregatesFilter<$PrismaModel> | $Enums.user_role_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_role_enumFilter<$PrismaModel>
    _max?: NestedEnumuser_role_enumFilter<$PrismaModel>
  }

  export type pendaftaranCreateWithoutBerkasInput = {
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
    lowongan: lowonganCreateNestedOneWithoutPendaftaranInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPendaftaranInput
  }

  export type pendaftaranUncheckedCreateWithoutBerkasInput = {
    id_pendaftaran?: number
    id_lowongan: number
    id_mahasiswa: bigint | number
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
  }

  export type pendaftaranCreateOrConnectWithoutBerkasInput = {
    where: pendaftaranWhereUniqueInput
    create: XOR<pendaftaranCreateWithoutBerkasInput, pendaftaranUncheckedCreateWithoutBerkasInput>
  }

  export type pendaftaranUpsertWithoutBerkasInput = {
    update: XOR<pendaftaranUpdateWithoutBerkasInput, pendaftaranUncheckedUpdateWithoutBerkasInput>
    create: XOR<pendaftaranCreateWithoutBerkasInput, pendaftaranUncheckedCreateWithoutBerkasInput>
    where?: pendaftaranWhereInput
  }

  export type pendaftaranUpdateToOneWithWhereWithoutBerkasInput = {
    where?: pendaftaranWhereInput
    data: XOR<pendaftaranUpdateWithoutBerkasInput, pendaftaranUncheckedUpdateWithoutBerkasInput>
  }

  export type pendaftaranUpdateWithoutBerkasInput = {
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lowongan?: lowonganUpdateOneRequiredWithoutPendaftaranNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPendaftaranNestedInput
  }

  export type pendaftaranUncheckedUpdateWithoutBerkasInput = {
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateWithoutDosenInput = {
    id_user?: bigint | number
    email: string
    password_hash: string
    role?: $Enums.user_role_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mahasiswa?: mahasiswaCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDosenInput = {
    id_user?: bigint | number
    email: string
    password_hash: string
    role?: $Enums.user_role_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    mahasiswa?: mahasiswaUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDosenInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDosenInput, usersUncheckedCreateWithoutDosenInput>
  }

  export type lowonganCreateWithoutDosenInput = {
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    kelas: kelasCreateNestedOneWithoutLowonganInput
    notifikasi?: notifikasiCreateNestedManyWithoutLowonganInput
    pendaftaran?: pendaftaranCreateNestedManyWithoutLowonganInput
  }

  export type lowonganUncheckedCreateWithoutDosenInput = {
    id_lowongan?: number
    id_kelas: number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutLowonganInput
    pendaftaran?: pendaftaranUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type lowonganCreateOrConnectWithoutDosenInput = {
    where: lowonganWhereUniqueInput
    create: XOR<lowonganCreateWithoutDosenInput, lowonganUncheckedCreateWithoutDosenInput>
  }

  export type lowonganCreateManyDosenInputEnvelope = {
    data: lowonganCreateManyDosenInput | lowonganCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutDosenInput = {
    update: XOR<usersUpdateWithoutDosenInput, usersUncheckedUpdateWithoutDosenInput>
    create: XOR<usersCreateWithoutDosenInput, usersUncheckedCreateWithoutDosenInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDosenInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDosenInput, usersUncheckedUpdateWithoutDosenInput>
  }

  export type usersUpdateWithoutDosenInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mahasiswa?: mahasiswaUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDosenInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mahasiswa?: mahasiswaUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type lowonganUpsertWithWhereUniqueWithoutDosenInput = {
    where: lowonganWhereUniqueInput
    update: XOR<lowonganUpdateWithoutDosenInput, lowonganUncheckedUpdateWithoutDosenInput>
    create: XOR<lowonganCreateWithoutDosenInput, lowonganUncheckedCreateWithoutDosenInput>
  }

  export type lowonganUpdateWithWhereUniqueWithoutDosenInput = {
    where: lowonganWhereUniqueInput
    data: XOR<lowonganUpdateWithoutDosenInput, lowonganUncheckedUpdateWithoutDosenInput>
  }

  export type lowonganUpdateManyWithWhereWithoutDosenInput = {
    where: lowonganScalarWhereInput
    data: XOR<lowonganUpdateManyMutationInput, lowonganUncheckedUpdateManyWithoutDosenInput>
  }

  export type lowonganScalarWhereInput = {
    AND?: lowonganScalarWhereInput | lowonganScalarWhereInput[]
    OR?: lowonganScalarWhereInput[]
    NOT?: lowonganScalarWhereInput | lowonganScalarWhereInput[]
    id_lowongan?: IntFilter<"lowongan"> | number
    id_kelas?: IntFilter<"lowongan"> | number
    id_dosen?: BigIntFilter<"lowongan"> | bigint | number
    tahun_ajaran?: StringNullableFilter<"lowongan"> | string | null
    jumlah_asisten?: IntNullableFilter<"lowongan"> | number | null
    persyaratan?: StringNullableFilter<"lowongan"> | string | null
    honor?: DecimalNullableFilter<"lowongan"> | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_akhir_pendaftaran?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_mulai_kontrak?: DateTimeNullableFilter<"lowongan"> | Date | string | null
    tanggal_akhir_kontrak?: DateTimeNullableFilter<"lowongan"> | Date | string | null
  }

  export type mata_kuliahCreateWithoutKelasInput = {
    kode_mk?: string | null
    nama_mk?: string | null
    jumlah_sks?: number | null
  }

  export type mata_kuliahUncheckedCreateWithoutKelasInput = {
    id_mk?: number
    kode_mk?: string | null
    nama_mk?: string | null
    jumlah_sks?: number | null
  }

  export type mata_kuliahCreateOrConnectWithoutKelasInput = {
    where: mata_kuliahWhereUniqueInput
    create: XOR<mata_kuliahCreateWithoutKelasInput, mata_kuliahUncheckedCreateWithoutKelasInput>
  }

  export type lowonganCreateWithoutKelasInput = {
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    dosen: dosenCreateNestedOneWithoutLowonganInput
    notifikasi?: notifikasiCreateNestedManyWithoutLowonganInput
    pendaftaran?: pendaftaranCreateNestedManyWithoutLowonganInput
  }

  export type lowonganUncheckedCreateWithoutKelasInput = {
    id_lowongan?: number
    id_dosen: bigint | number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutLowonganInput
    pendaftaran?: pendaftaranUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type lowonganCreateOrConnectWithoutKelasInput = {
    where: lowonganWhereUniqueInput
    create: XOR<lowonganCreateWithoutKelasInput, lowonganUncheckedCreateWithoutKelasInput>
  }

  export type lowonganCreateManyKelasInputEnvelope = {
    data: lowonganCreateManyKelasInput | lowonganCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type mata_kuliahUpsertWithoutKelasInput = {
    update: XOR<mata_kuliahUpdateWithoutKelasInput, mata_kuliahUncheckedUpdateWithoutKelasInput>
    create: XOR<mata_kuliahCreateWithoutKelasInput, mata_kuliahUncheckedCreateWithoutKelasInput>
    where?: mata_kuliahWhereInput
  }

  export type mata_kuliahUpdateToOneWithWhereWithoutKelasInput = {
    where?: mata_kuliahWhereInput
    data: XOR<mata_kuliahUpdateWithoutKelasInput, mata_kuliahUncheckedUpdateWithoutKelasInput>
  }

  export type mata_kuliahUpdateWithoutKelasInput = {
    kode_mk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_mk?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_sks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mata_kuliahUncheckedUpdateWithoutKelasInput = {
    id_mk?: IntFieldUpdateOperationsInput | number
    kode_mk?: NullableStringFieldUpdateOperationsInput | string | null
    nama_mk?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_sks?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type lowonganUpsertWithWhereUniqueWithoutKelasInput = {
    where: lowonganWhereUniqueInput
    update: XOR<lowonganUpdateWithoutKelasInput, lowonganUncheckedUpdateWithoutKelasInput>
    create: XOR<lowonganCreateWithoutKelasInput, lowonganUncheckedCreateWithoutKelasInput>
  }

  export type lowonganUpdateWithWhereUniqueWithoutKelasInput = {
    where: lowonganWhereUniqueInput
    data: XOR<lowonganUpdateWithoutKelasInput, lowonganUncheckedUpdateWithoutKelasInput>
  }

  export type lowonganUpdateManyWithWhereWithoutKelasInput = {
    where: lowonganScalarWhereInput
    data: XOR<lowonganUpdateManyMutationInput, lowonganUncheckedUpdateManyWithoutKelasInput>
  }

  export type dosenCreateWithoutLowonganInput = {
    nip?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    users?: usersCreateNestedOneWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutLowonganInput = {
    id_dosen?: bigint | number
    nip?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
  }

  export type dosenCreateOrConnectWithoutLowonganInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutLowonganInput, dosenUncheckedCreateWithoutLowonganInput>
  }

  export type kelasCreateWithoutLowonganInput = {
    nama_kelas?: string | null
    jadwal_kelas?: string | null
    mata_kuliah: mata_kuliahCreateNestedOneWithoutKelasInput
  }

  export type kelasUncheckedCreateWithoutLowonganInput = {
    id_kelas?: number
    id_mk: number
    nama_kelas?: string | null
    jadwal_kelas?: string | null
  }

  export type kelasCreateOrConnectWithoutLowonganInput = {
    where: kelasWhereUniqueInput
    create: XOR<kelasCreateWithoutLowonganInput, kelasUncheckedCreateWithoutLowonganInput>
  }

  export type notifikasiCreateWithoutLowonganInput = {
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
    mahasiswa?: mahasiswaCreateNestedOneWithoutNotifikasiInput
  }

  export type notifikasiUncheckedCreateWithoutLowonganInput = {
    id_notifikasi?: number
    id_mahasiswa?: bigint | number | null
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
  }

  export type notifikasiCreateOrConnectWithoutLowonganInput = {
    where: notifikasiWhereUniqueInput
    create: XOR<notifikasiCreateWithoutLowonganInput, notifikasiUncheckedCreateWithoutLowonganInput>
  }

  export type notifikasiCreateManyLowonganInputEnvelope = {
    data: notifikasiCreateManyLowonganInput | notifikasiCreateManyLowonganInput[]
    skipDuplicates?: boolean
  }

  export type pendaftaranCreateWithoutLowonganInput = {
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
    berkas?: berkasCreateNestedManyWithoutPendaftaranInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPendaftaranInput
  }

  export type pendaftaranUncheckedCreateWithoutLowonganInput = {
    id_pendaftaran?: number
    id_mahasiswa: bigint | number
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
    berkas?: berkasUncheckedCreateNestedManyWithoutPendaftaranInput
  }

  export type pendaftaranCreateOrConnectWithoutLowonganInput = {
    where: pendaftaranWhereUniqueInput
    create: XOR<pendaftaranCreateWithoutLowonganInput, pendaftaranUncheckedCreateWithoutLowonganInput>
  }

  export type pendaftaranCreateManyLowonganInputEnvelope = {
    data: pendaftaranCreateManyLowonganInput | pendaftaranCreateManyLowonganInput[]
    skipDuplicates?: boolean
  }

  export type dosenUpsertWithoutLowonganInput = {
    update: XOR<dosenUpdateWithoutLowonganInput, dosenUncheckedUpdateWithoutLowonganInput>
    create: XOR<dosenCreateWithoutLowonganInput, dosenUncheckedCreateWithoutLowonganInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutLowonganInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutLowonganInput, dosenUncheckedUpdateWithoutLowonganInput>
  }

  export type dosenUpdateWithoutLowonganInput = {
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutLowonganInput = {
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kelasUpsertWithoutLowonganInput = {
    update: XOR<kelasUpdateWithoutLowonganInput, kelasUncheckedUpdateWithoutLowonganInput>
    create: XOR<kelasCreateWithoutLowonganInput, kelasUncheckedCreateWithoutLowonganInput>
    where?: kelasWhereInput
  }

  export type kelasUpdateToOneWithWhereWithoutLowonganInput = {
    where?: kelasWhereInput
    data: XOR<kelasUpdateWithoutLowonganInput, kelasUncheckedUpdateWithoutLowonganInput>
  }

  export type kelasUpdateWithoutLowonganInput = {
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    mata_kuliah?: mata_kuliahUpdateOneRequiredWithoutKelasNestedInput
  }

  export type kelasUncheckedUpdateWithoutLowonganInput = {
    id_kelas?: IntFieldUpdateOperationsInput | number
    id_mk?: IntFieldUpdateOperationsInput | number
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notifikasiUpsertWithWhereUniqueWithoutLowonganInput = {
    where: notifikasiWhereUniqueInput
    update: XOR<notifikasiUpdateWithoutLowonganInput, notifikasiUncheckedUpdateWithoutLowonganInput>
    create: XOR<notifikasiCreateWithoutLowonganInput, notifikasiUncheckedCreateWithoutLowonganInput>
  }

  export type notifikasiUpdateWithWhereUniqueWithoutLowonganInput = {
    where: notifikasiWhereUniqueInput
    data: XOR<notifikasiUpdateWithoutLowonganInput, notifikasiUncheckedUpdateWithoutLowonganInput>
  }

  export type notifikasiUpdateManyWithWhereWithoutLowonganInput = {
    where: notifikasiScalarWhereInput
    data: XOR<notifikasiUpdateManyMutationInput, notifikasiUncheckedUpdateManyWithoutLowonganInput>
  }

  export type notifikasiScalarWhereInput = {
    AND?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
    OR?: notifikasiScalarWhereInput[]
    NOT?: notifikasiScalarWhereInput | notifikasiScalarWhereInput[]
    id_notifikasi?: IntFilter<"notifikasi"> | number
    id_lowongan?: IntNullableFilter<"notifikasi"> | number | null
    id_mahasiswa?: BigIntNullableFilter<"notifikasi"> | bigint | number | null
    jenis_notifikasi?: Enumjenis_notifikasi_enumNullableFilter<"notifikasi"> | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: StringNullableFilter<"notifikasi"> | string | null
    tanggal_kirim?: DateTimeNullableFilter<"notifikasi"> | Date | string | null
  }

  export type pendaftaranUpsertWithWhereUniqueWithoutLowonganInput = {
    where: pendaftaranWhereUniqueInput
    update: XOR<pendaftaranUpdateWithoutLowonganInput, pendaftaranUncheckedUpdateWithoutLowonganInput>
    create: XOR<pendaftaranCreateWithoutLowonganInput, pendaftaranUncheckedCreateWithoutLowonganInput>
  }

  export type pendaftaranUpdateWithWhereUniqueWithoutLowonganInput = {
    where: pendaftaranWhereUniqueInput
    data: XOR<pendaftaranUpdateWithoutLowonganInput, pendaftaranUncheckedUpdateWithoutLowonganInput>
  }

  export type pendaftaranUpdateManyWithWhereWithoutLowonganInput = {
    where: pendaftaranScalarWhereInput
    data: XOR<pendaftaranUpdateManyMutationInput, pendaftaranUncheckedUpdateManyWithoutLowonganInput>
  }

  export type pendaftaranScalarWhereInput = {
    AND?: pendaftaranScalarWhereInput | pendaftaranScalarWhereInput[]
    OR?: pendaftaranScalarWhereInput[]
    NOT?: pendaftaranScalarWhereInput | pendaftaranScalarWhereInput[]
    id_pendaftaran?: IntFilter<"pendaftaran"> | number
    id_lowongan?: IntFilter<"pendaftaran"> | number
    id_mahasiswa?: BigIntFilter<"pendaftaran"> | bigint | number
    status_pendaftaran?: Enumstatus_pendaftaran_enumNullableFilter<"pendaftaran"> | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: DateTimeNullableFilter<"pendaftaran"> | Date | string | null
  }

  export type usersCreateWithoutMahasiswaInput = {
    id_user?: bigint | number
    email: string
    password_hash: string
    role?: $Enums.user_role_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dosen?: dosenCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMahasiswaInput = {
    id_user?: bigint | number
    email: string
    password_hash: string
    role?: $Enums.user_role_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    dosen?: dosenUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMahasiswaInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMahasiswaInput, usersUncheckedCreateWithoutMahasiswaInput>
  }

  export type notifikasiCreateWithoutMahasiswaInput = {
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
    lowongan?: lowonganCreateNestedOneWithoutNotifikasiInput
  }

  export type notifikasiUncheckedCreateWithoutMahasiswaInput = {
    id_notifikasi?: number
    id_lowongan?: number | null
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
  }

  export type notifikasiCreateOrConnectWithoutMahasiswaInput = {
    where: notifikasiWhereUniqueInput
    create: XOR<notifikasiCreateWithoutMahasiswaInput, notifikasiUncheckedCreateWithoutMahasiswaInput>
  }

  export type notifikasiCreateManyMahasiswaInputEnvelope = {
    data: notifikasiCreateManyMahasiswaInput | notifikasiCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type pendaftaranCreateWithoutMahasiswaInput = {
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
    berkas?: berkasCreateNestedManyWithoutPendaftaranInput
    lowongan: lowonganCreateNestedOneWithoutPendaftaranInput
  }

  export type pendaftaranUncheckedCreateWithoutMahasiswaInput = {
    id_pendaftaran?: number
    id_lowongan: number
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
    berkas?: berkasUncheckedCreateNestedManyWithoutPendaftaranInput
  }

  export type pendaftaranCreateOrConnectWithoutMahasiswaInput = {
    where: pendaftaranWhereUniqueInput
    create: XOR<pendaftaranCreateWithoutMahasiswaInput, pendaftaranUncheckedCreateWithoutMahasiswaInput>
  }

  export type pendaftaranCreateManyMahasiswaInputEnvelope = {
    data: pendaftaranCreateManyMahasiswaInput | pendaftaranCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutMahasiswaInput = {
    update: XOR<usersUpdateWithoutMahasiswaInput, usersUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<usersCreateWithoutMahasiswaInput, usersUncheckedCreateWithoutMahasiswaInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMahasiswaInput, usersUncheckedUpdateWithoutMahasiswaInput>
  }

  export type usersUpdateWithoutMahasiswaInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMahasiswaInput = {
    id_user?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type notifikasiUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: notifikasiWhereUniqueInput
    update: XOR<notifikasiUpdateWithoutMahasiswaInput, notifikasiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<notifikasiCreateWithoutMahasiswaInput, notifikasiUncheckedCreateWithoutMahasiswaInput>
  }

  export type notifikasiUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: notifikasiWhereUniqueInput
    data: XOR<notifikasiUpdateWithoutMahasiswaInput, notifikasiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type notifikasiUpdateManyWithWhereWithoutMahasiswaInput = {
    where: notifikasiScalarWhereInput
    data: XOR<notifikasiUpdateManyMutationInput, notifikasiUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type pendaftaranUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: pendaftaranWhereUniqueInput
    update: XOR<pendaftaranUpdateWithoutMahasiswaInput, pendaftaranUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<pendaftaranCreateWithoutMahasiswaInput, pendaftaranUncheckedCreateWithoutMahasiswaInput>
  }

  export type pendaftaranUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: pendaftaranWhereUniqueInput
    data: XOR<pendaftaranUpdateWithoutMahasiswaInput, pendaftaranUncheckedUpdateWithoutMahasiswaInput>
  }

  export type pendaftaranUpdateManyWithWhereWithoutMahasiswaInput = {
    where: pendaftaranScalarWhereInput
    data: XOR<pendaftaranUpdateManyMutationInput, pendaftaranUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type kelasCreateWithoutMata_kuliahInput = {
    nama_kelas?: string | null
    jadwal_kelas?: string | null
    lowongan?: lowonganCreateNestedManyWithoutKelasInput
  }

  export type kelasUncheckedCreateWithoutMata_kuliahInput = {
    id_kelas?: number
    nama_kelas?: string | null
    jadwal_kelas?: string | null
    lowongan?: lowonganUncheckedCreateNestedManyWithoutKelasInput
  }

  export type kelasCreateOrConnectWithoutMata_kuliahInput = {
    where: kelasWhereUniqueInput
    create: XOR<kelasCreateWithoutMata_kuliahInput, kelasUncheckedCreateWithoutMata_kuliahInput>
  }

  export type kelasCreateManyMata_kuliahInputEnvelope = {
    data: kelasCreateManyMata_kuliahInput | kelasCreateManyMata_kuliahInput[]
    skipDuplicates?: boolean
  }

  export type kelasUpsertWithWhereUniqueWithoutMata_kuliahInput = {
    where: kelasWhereUniqueInput
    update: XOR<kelasUpdateWithoutMata_kuliahInput, kelasUncheckedUpdateWithoutMata_kuliahInput>
    create: XOR<kelasCreateWithoutMata_kuliahInput, kelasUncheckedCreateWithoutMata_kuliahInput>
  }

  export type kelasUpdateWithWhereUniqueWithoutMata_kuliahInput = {
    where: kelasWhereUniqueInput
    data: XOR<kelasUpdateWithoutMata_kuliahInput, kelasUncheckedUpdateWithoutMata_kuliahInput>
  }

  export type kelasUpdateManyWithWhereWithoutMata_kuliahInput = {
    where: kelasScalarWhereInput
    data: XOR<kelasUpdateManyMutationInput, kelasUncheckedUpdateManyWithoutMata_kuliahInput>
  }

  export type kelasScalarWhereInput = {
    AND?: kelasScalarWhereInput | kelasScalarWhereInput[]
    OR?: kelasScalarWhereInput[]
    NOT?: kelasScalarWhereInput | kelasScalarWhereInput[]
    id_kelas?: IntFilter<"kelas"> | number
    id_mk?: IntFilter<"kelas"> | number
    nama_kelas?: StringNullableFilter<"kelas"> | string | null
    jadwal_kelas?: StringNullableFilter<"kelas"> | string | null
  }

  export type lowonganCreateWithoutNotifikasiInput = {
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    dosen: dosenCreateNestedOneWithoutLowonganInput
    kelas: kelasCreateNestedOneWithoutLowonganInput
    pendaftaran?: pendaftaranCreateNestedManyWithoutLowonganInput
  }

  export type lowonganUncheckedCreateWithoutNotifikasiInput = {
    id_lowongan?: number
    id_kelas: number
    id_dosen: bigint | number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    pendaftaran?: pendaftaranUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type lowonganCreateOrConnectWithoutNotifikasiInput = {
    where: lowonganWhereUniqueInput
    create: XOR<lowonganCreateWithoutNotifikasiInput, lowonganUncheckedCreateWithoutNotifikasiInput>
  }

  export type mahasiswaCreateWithoutNotifikasiInput = {
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    users?: usersCreateNestedOneWithoutMahasiswaInput
    pendaftaran?: pendaftaranCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutNotifikasiInput = {
    id_mahasiswa?: bigint | number
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    pendaftaran?: pendaftaranUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutNotifikasiInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutNotifikasiInput, mahasiswaUncheckedCreateWithoutNotifikasiInput>
  }

  export type lowonganUpsertWithoutNotifikasiInput = {
    update: XOR<lowonganUpdateWithoutNotifikasiInput, lowonganUncheckedUpdateWithoutNotifikasiInput>
    create: XOR<lowonganCreateWithoutNotifikasiInput, lowonganUncheckedCreateWithoutNotifikasiInput>
    where?: lowonganWhereInput
  }

  export type lowonganUpdateToOneWithWhereWithoutNotifikasiInput = {
    where?: lowonganWhereInput
    data: XOR<lowonganUpdateWithoutNotifikasiInput, lowonganUncheckedUpdateWithoutNotifikasiInput>
  }

  export type lowonganUpdateWithoutNotifikasiInput = {
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUpdateOneRequiredWithoutLowonganNestedInput
    kelas?: kelasUpdateOneRequiredWithoutLowonganNestedInput
    pendaftaran?: pendaftaranUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganUncheckedUpdateWithoutNotifikasiInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_kelas?: IntFieldUpdateOperationsInput | number
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendaftaran?: pendaftaranUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type mahasiswaUpsertWithoutNotifikasiInput = {
    update: XOR<mahasiswaUpdateWithoutNotifikasiInput, mahasiswaUncheckedUpdateWithoutNotifikasiInput>
    create: XOR<mahasiswaCreateWithoutNotifikasiInput, mahasiswaUncheckedCreateWithoutNotifikasiInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutNotifikasiInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutNotifikasiInput, mahasiswaUncheckedUpdateWithoutNotifikasiInput>
  }

  export type mahasiswaUpdateWithoutNotifikasiInput = {
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneRequiredWithoutMahasiswaNestedInput
    pendaftaran?: pendaftaranUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutNotifikasiInput = {
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    pendaftaran?: pendaftaranUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type berkasCreateWithoutPendaftaranInput = {
    nama_file?: string | null
    path_file?: string | null
    tanggal_upload?: Date | string | null
  }

  export type berkasUncheckedCreateWithoutPendaftaranInput = {
    id_berkas?: number
    nama_file?: string | null
    path_file?: string | null
    tanggal_upload?: Date | string | null
  }

  export type berkasCreateOrConnectWithoutPendaftaranInput = {
    where: berkasWhereUniqueInput
    create: XOR<berkasCreateWithoutPendaftaranInput, berkasUncheckedCreateWithoutPendaftaranInput>
  }

  export type berkasCreateManyPendaftaranInputEnvelope = {
    data: berkasCreateManyPendaftaranInput | berkasCreateManyPendaftaranInput[]
    skipDuplicates?: boolean
  }

  export type lowonganCreateWithoutPendaftaranInput = {
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    dosen: dosenCreateNestedOneWithoutLowonganInput
    kelas: kelasCreateNestedOneWithoutLowonganInput
    notifikasi?: notifikasiCreateNestedManyWithoutLowonganInput
  }

  export type lowonganUncheckedCreateWithoutPendaftaranInput = {
    id_lowongan?: number
    id_kelas: number
    id_dosen: bigint | number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutLowonganInput
  }

  export type lowonganCreateOrConnectWithoutPendaftaranInput = {
    where: lowonganWhereUniqueInput
    create: XOR<lowonganCreateWithoutPendaftaranInput, lowonganUncheckedCreateWithoutPendaftaranInput>
  }

  export type mahasiswaCreateWithoutPendaftaranInput = {
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    users?: usersCreateNestedOneWithoutMahasiswaInput
    notifikasi?: notifikasiCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutPendaftaranInput = {
    id_mahasiswa?: bigint | number
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutPendaftaranInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutPendaftaranInput, mahasiswaUncheckedCreateWithoutPendaftaranInput>
  }

  export type berkasUpsertWithWhereUniqueWithoutPendaftaranInput = {
    where: berkasWhereUniqueInput
    update: XOR<berkasUpdateWithoutPendaftaranInput, berkasUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<berkasCreateWithoutPendaftaranInput, berkasUncheckedCreateWithoutPendaftaranInput>
  }

  export type berkasUpdateWithWhereUniqueWithoutPendaftaranInput = {
    where: berkasWhereUniqueInput
    data: XOR<berkasUpdateWithoutPendaftaranInput, berkasUncheckedUpdateWithoutPendaftaranInput>
  }

  export type berkasUpdateManyWithWhereWithoutPendaftaranInput = {
    where: berkasScalarWhereInput
    data: XOR<berkasUpdateManyMutationInput, berkasUncheckedUpdateManyWithoutPendaftaranInput>
  }

  export type berkasScalarWhereInput = {
    AND?: berkasScalarWhereInput | berkasScalarWhereInput[]
    OR?: berkasScalarWhereInput[]
    NOT?: berkasScalarWhereInput | berkasScalarWhereInput[]
    id_berkas?: IntFilter<"berkas"> | number
    id_pendaftaran?: IntFilter<"berkas"> | number
    nama_file?: StringNullableFilter<"berkas"> | string | null
    path_file?: StringNullableFilter<"berkas"> | string | null
    tanggal_upload?: DateTimeNullableFilter<"berkas"> | Date | string | null
  }

  export type lowonganUpsertWithoutPendaftaranInput = {
    update: XOR<lowonganUpdateWithoutPendaftaranInput, lowonganUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<lowonganCreateWithoutPendaftaranInput, lowonganUncheckedCreateWithoutPendaftaranInput>
    where?: lowonganWhereInput
  }

  export type lowonganUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: lowonganWhereInput
    data: XOR<lowonganUpdateWithoutPendaftaranInput, lowonganUncheckedUpdateWithoutPendaftaranInput>
  }

  export type lowonganUpdateWithoutPendaftaranInput = {
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUpdateOneRequiredWithoutLowonganNestedInput
    kelas?: kelasUpdateOneRequiredWithoutLowonganNestedInput
    notifikasi?: notifikasiUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganUncheckedUpdateWithoutPendaftaranInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_kelas?: IntFieldUpdateOperationsInput | number
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifikasi?: notifikasiUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type mahasiswaUpsertWithoutPendaftaranInput = {
    update: XOR<mahasiswaUpdateWithoutPendaftaranInput, mahasiswaUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<mahasiswaCreateWithoutPendaftaranInput, mahasiswaUncheckedCreateWithoutPendaftaranInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutPendaftaranInput, mahasiswaUncheckedUpdateWithoutPendaftaranInput>
  }

  export type mahasiswaUpdateWithoutPendaftaranInput = {
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneRequiredWithoutMahasiswaNestedInput
    notifikasi?: notifikasiUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutPendaftaranInput = {
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    notifikasi?: notifikasiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type dosenCreateWithoutUsersInput = {
    nip?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    lowongan?: lowonganCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateWithoutUsersInput = {
    nip?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    lowongan?: lowonganUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenCreateOrConnectWithoutUsersInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutUsersInput, dosenUncheckedCreateWithoutUsersInput>
  }

  export type mahasiswaCreateWithoutUsersInput = {
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    notifikasi?: notifikasiCreateNestedManyWithoutMahasiswaInput
    pendaftaran?: pendaftaranCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateWithoutUsersInput = {
    nrp?: string | null
    nama?: string | null
    email?: string | null
    no_telepon?: string | null
    jurusan?: string | null
    angkatan?: string | null
    semester?: number | null
    notifikasi?: notifikasiUncheckedCreateNestedManyWithoutMahasiswaInput
    pendaftaran?: pendaftaranUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaCreateOrConnectWithoutUsersInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutUsersInput, mahasiswaUncheckedCreateWithoutUsersInput>
  }

  export type dosenUpsertWithoutUsersInput = {
    update: XOR<dosenUpdateWithoutUsersInput, dosenUncheckedUpdateWithoutUsersInput>
    create: XOR<dosenCreateWithoutUsersInput, dosenUncheckedCreateWithoutUsersInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutUsersInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutUsersInput, dosenUncheckedUpdateWithoutUsersInput>
  }

  export type dosenUpdateWithoutUsersInput = {
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: lowonganUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateWithoutUsersInput = {
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: lowonganUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type mahasiswaUpsertWithoutUsersInput = {
    update: XOR<mahasiswaUpdateWithoutUsersInput, mahasiswaUncheckedUpdateWithoutUsersInput>
    create: XOR<mahasiswaCreateWithoutUsersInput, mahasiswaUncheckedCreateWithoutUsersInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutUsersInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutUsersInput, mahasiswaUncheckedUpdateWithoutUsersInput>
  }

  export type mahasiswaUpdateWithoutUsersInput = {
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    notifikasi?: notifikasiUpdateManyWithoutMahasiswaNestedInput
    pendaftaran?: pendaftaranUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateWithoutUsersInput = {
    nrp?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    no_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    angkatan?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    notifikasi?: notifikasiUncheckedUpdateManyWithoutMahasiswaNestedInput
    pendaftaran?: pendaftaranUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type lowonganCreateManyDosenInput = {
    id_lowongan?: number
    id_kelas: number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
  }

  export type lowonganUpdateWithoutDosenInput = {
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelas?: kelasUpdateOneRequiredWithoutLowonganNestedInput
    notifikasi?: notifikasiUpdateManyWithoutLowonganNestedInput
    pendaftaran?: pendaftaranUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganUncheckedUpdateWithoutDosenInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_kelas?: IntFieldUpdateOperationsInput | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifikasi?: notifikasiUncheckedUpdateManyWithoutLowonganNestedInput
    pendaftaran?: pendaftaranUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganUncheckedUpdateManyWithoutDosenInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_kelas?: IntFieldUpdateOperationsInput | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type lowonganCreateManyKelasInput = {
    id_lowongan?: number
    id_dosen: bigint | number
    tahun_ajaran?: string | null
    jumlah_asisten?: number | null
    persyaratan?: string | null
    honor?: Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: Date | string | null
    tanggal_akhir_pendaftaran?: Date | string | null
    tanggal_mulai_kontrak?: Date | string | null
    tanggal_akhir_kontrak?: Date | string | null
  }

  export type lowonganUpdateWithoutKelasInput = {
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dosen?: dosenUpdateOneRequiredWithoutLowonganNestedInput
    notifikasi?: notifikasiUpdateManyWithoutLowonganNestedInput
    pendaftaran?: pendaftaranUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganUncheckedUpdateWithoutKelasInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifikasi?: notifikasiUncheckedUpdateManyWithoutLowonganNestedInput
    pendaftaran?: pendaftaranUncheckedUpdateManyWithoutLowonganNestedInput
  }

  export type lowonganUncheckedUpdateManyWithoutKelasInput = {
    id_lowongan?: IntFieldUpdateOperationsInput | number
    id_dosen?: BigIntFieldUpdateOperationsInput | bigint | number
    tahun_ajaran?: NullableStringFieldUpdateOperationsInput | string | null
    jumlah_asisten?: NullableIntFieldUpdateOperationsInput | number | null
    persyaratan?: NullableStringFieldUpdateOperationsInput | string | null
    honor?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tanggal_mulai_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_pendaftaran?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_mulai_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_akhir_kontrak?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notifikasiCreateManyLowonganInput = {
    id_notifikasi?: number
    id_mahasiswa?: bigint | number | null
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
  }

  export type pendaftaranCreateManyLowonganInput = {
    id_pendaftaran?: number
    id_mahasiswa: bigint | number
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
  }

  export type notifikasiUpdateWithoutLowonganInput = {
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mahasiswa?: mahasiswaUpdateOneWithoutNotifikasiNestedInput
  }

  export type notifikasiUncheckedUpdateWithoutLowonganInput = {
    id_notifikasi?: IntFieldUpdateOperationsInput | number
    id_mahasiswa?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notifikasiUncheckedUpdateManyWithoutLowonganInput = {
    id_notifikasi?: IntFieldUpdateOperationsInput | number
    id_mahasiswa?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pendaftaranUpdateWithoutLowonganInput = {
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUpdateManyWithoutPendaftaranNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPendaftaranNestedInput
  }

  export type pendaftaranUncheckedUpdateWithoutLowonganInput = {
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUncheckedUpdateManyWithoutPendaftaranNestedInput
  }

  export type pendaftaranUncheckedUpdateManyWithoutLowonganInput = {
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    id_mahasiswa?: BigIntFieldUpdateOperationsInput | bigint | number
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notifikasiCreateManyMahasiswaInput = {
    id_notifikasi?: number
    id_lowongan?: number | null
    jenis_notifikasi?: $Enums.jenis_notifikasi_enum | null
    isi_pesan?: string | null
    tanggal_kirim?: Date | string | null
  }

  export type pendaftaranCreateManyMahasiswaInput = {
    id_pendaftaran?: number
    id_lowongan: number
    status_pendaftaran?: $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: Date | string | null
  }

  export type notifikasiUpdateWithoutMahasiswaInput = {
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lowongan?: lowonganUpdateOneWithoutNotifikasiNestedInput
  }

  export type notifikasiUncheckedUpdateWithoutMahasiswaInput = {
    id_notifikasi?: IntFieldUpdateOperationsInput | number
    id_lowongan?: NullableIntFieldUpdateOperationsInput | number | null
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notifikasiUncheckedUpdateManyWithoutMahasiswaInput = {
    id_notifikasi?: IntFieldUpdateOperationsInput | number
    id_lowongan?: NullableIntFieldUpdateOperationsInput | number | null
    jenis_notifikasi?: NullableEnumjenis_notifikasi_enumFieldUpdateOperationsInput | $Enums.jenis_notifikasi_enum | null
    isi_pesan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_kirim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pendaftaranUpdateWithoutMahasiswaInput = {
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUpdateManyWithoutPendaftaranNestedInput
    lowongan?: lowonganUpdateOneRequiredWithoutPendaftaranNestedInput
  }

  export type pendaftaranUncheckedUpdateWithoutMahasiswaInput = {
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    id_lowongan?: IntFieldUpdateOperationsInput | number
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUncheckedUpdateManyWithoutPendaftaranNestedInput
  }

  export type pendaftaranUncheckedUpdateManyWithoutMahasiswaInput = {
    id_pendaftaran?: IntFieldUpdateOperationsInput | number
    id_lowongan?: IntFieldUpdateOperationsInput | number
    status_pendaftaran?: NullableEnumstatus_pendaftaran_enumFieldUpdateOperationsInput | $Enums.status_pendaftaran_enum | null
    tanggal_daftar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kelasCreateManyMata_kuliahInput = {
    id_kelas?: number
    nama_kelas?: string | null
    jadwal_kelas?: string | null
  }

  export type kelasUpdateWithoutMata_kuliahInput = {
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: lowonganUpdateManyWithoutKelasNestedInput
  }

  export type kelasUncheckedUpdateWithoutMata_kuliahInput = {
    id_kelas?: IntFieldUpdateOperationsInput | number
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    lowongan?: lowonganUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type kelasUncheckedUpdateManyWithoutMata_kuliahInput = {
    id_kelas?: IntFieldUpdateOperationsInput | number
    nama_kelas?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal_kelas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type berkasCreateManyPendaftaranInput = {
    id_berkas?: number
    nama_file?: string | null
    path_file?: string | null
    tanggal_upload?: Date | string | null
  }

  export type berkasUpdateWithoutPendaftaranInput = {
    nama_file?: NullableStringFieldUpdateOperationsInput | string | null
    path_file?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_upload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type berkasUncheckedUpdateWithoutPendaftaranInput = {
    id_berkas?: IntFieldUpdateOperationsInput | number
    nama_file?: NullableStringFieldUpdateOperationsInput | string | null
    path_file?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_upload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type berkasUncheckedUpdateManyWithoutPendaftaranInput = {
    id_berkas?: IntFieldUpdateOperationsInput | number
    nama_file?: NullableStringFieldUpdateOperationsInput | string | null
    path_file?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_upload?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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