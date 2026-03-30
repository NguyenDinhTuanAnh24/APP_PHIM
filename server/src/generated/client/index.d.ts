
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model LoyaltyLog
 * 
 */
export type LoyaltyLog = $Result.DefaultSelection<Prisma.$LoyaltyLogPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Cinema
 * 
 */
export type Cinema = $Result.DefaultSelection<Prisma.$CinemaPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Showtime
 * 
 */
export type Showtime = $Result.DefaultSelection<Prisma.$ShowtimePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingItem
 * 
 */
export type BookingItem = $Result.DefaultSelection<Prisma.$BookingItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model FoodCombo
 * 
 */
export type FoodCombo = $Result.DefaultSelection<Prisma.$FoodComboPayload>
/**
 * Model FoodItem
 * 
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model PointRedemption
 * 
 */
export type PointRedemption = $Result.DefaultSelection<Prisma.$PointRedemptionPayload>
/**
 * Model SupportTicket
 * 
 */
export type SupportTicket = $Result.DefaultSelection<Prisma.$SupportTicketPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MovieStatus: {
  NOW_SHOWING: 'NOW_SHOWING',
  COMING_SOON: 'COMING_SOON'
};

export type MovieStatus = (typeof MovieStatus)[keyof typeof MovieStatus]


export const RoomType: {
  STANDARD: 'STANDARD',
  IMAX: 'IMAX',
  FOUR_DX: 'FOUR_DX'
};

export type RoomType = (typeof RoomType)[keyof typeof RoomType]


export const SeatType: {
  STANDARD: 'STANDARD',
  VIP: 'VIP',
  COUPLE: 'COUPLE',
  DISABLED: 'DISABLED'
};

export type SeatType = (typeof SeatType)[keyof typeof SeatType]


export const BookingStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentMethod: {
  VNPAY: 'VNPAY',
  MOMO: 'MOMO',
  CASH: 'CASH'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const DiscountType: {
  PERCENT: 'PERCENT',
  FIXED: 'FIXED'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MovieStatus = $Enums.MovieStatus

export const MovieStatus: typeof $Enums.MovieStatus

export type RoomType = $Enums.RoomType

export const RoomType: typeof $Enums.RoomType

export type SeatType = $Enums.SeatType

export const SeatType: typeof $Enums.SeatType

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type DiscountType = $Enums.DiscountType

export const DiscountType: typeof $Enums.DiscountType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loyaltyLog`: Exposes CRUD operations for the **LoyaltyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoyaltyLogs
    * const loyaltyLogs = await prisma.loyaltyLog.findMany()
    * ```
    */
  get loyaltyLog(): Prisma.LoyaltyLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cinema`: Exposes CRUD operations for the **Cinema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cinemas
    * const cinemas = await prisma.cinema.findMany()
    * ```
    */
  get cinema(): Prisma.CinemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showtime`: Exposes CRUD operations for the **Showtime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Showtimes
    * const showtimes = await prisma.showtime.findMany()
    * ```
    */
  get showtime(): Prisma.ShowtimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingItem`: Exposes CRUD operations for the **BookingItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingItems
    * const bookingItems = await prisma.bookingItem.findMany()
    * ```
    */
  get bookingItem(): Prisma.BookingItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodCombo`: Exposes CRUD operations for the **FoodCombo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodCombos
    * const foodCombos = await prisma.foodCombo.findMany()
    * ```
    */
  get foodCombo(): Prisma.FoodComboDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodItems
    * const foodItems = await prisma.foodItem.findMany()
    * ```
    */
  get foodItem(): Prisma.FoodItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointRedemption`: Exposes CRUD operations for the **PointRedemption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointRedemptions
    * const pointRedemptions = await prisma.pointRedemption.findMany()
    * ```
    */
  get pointRedemption(): Prisma.PointRedemptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportTickets
    * const supportTickets = await prisma.supportTicket.findMany()
    * ```
    */
  get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    User: 'User',
    LoyaltyLog: 'LoyaltyLog',
    Movie: 'Movie',
    Cinema: 'Cinema',
    Room: 'Room',
    Seat: 'Seat',
    Showtime: 'Showtime',
    Booking: 'Booking',
    BookingItem: 'BookingItem',
    Payment: 'Payment',
    FoodCombo: 'FoodCombo',
    FoodItem: 'FoodItem',
    Voucher: 'Voucher',
    PointRedemption: 'PointRedemption',
    SupportTicket: 'SupportTicket'
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
      modelProps: "user" | "loyaltyLog" | "movie" | "cinema" | "room" | "seat" | "showtime" | "booking" | "bookingItem" | "payment" | "foodCombo" | "foodItem" | "voucher" | "pointRedemption" | "supportTicket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LoyaltyLog: {
        payload: Prisma.$LoyaltyLogPayload<ExtArgs>
        fields: Prisma.LoyaltyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoyaltyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoyaltyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload>
          }
          findFirst: {
            args: Prisma.LoyaltyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoyaltyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload>
          }
          findMany: {
            args: Prisma.LoyaltyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload>[]
          }
          create: {
            args: Prisma.LoyaltyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload>
          }
          createMany: {
            args: Prisma.LoyaltyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoyaltyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload>
          }
          update: {
            args: Prisma.LoyaltyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload>
          }
          deleteMany: {
            args: Prisma.LoyaltyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoyaltyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoyaltyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyLogPayload>
          }
          aggregate: {
            args: Prisma.LoyaltyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoyaltyLog>
          }
          groupBy: {
            args: Prisma.LoyaltyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoyaltyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoyaltyLogCountArgs<ExtArgs>
            result: $Utils.Optional<LoyaltyLogCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Cinema: {
        payload: Prisma.$CinemaPayload<ExtArgs>
        fields: Prisma.CinemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CinemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CinemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findFirst: {
            args: Prisma.CinemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CinemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findMany: {
            args: Prisma.CinemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          create: {
            args: Prisma.CinemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          createMany: {
            args: Prisma.CinemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CinemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          update: {
            args: Prisma.CinemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          deleteMany: {
            args: Prisma.CinemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CinemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CinemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCinema>
          }
          groupBy: {
            args: Prisma.CinemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CinemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CinemaCountArgs<ExtArgs>
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Showtime: {
        payload: Prisma.$ShowtimePayload<ExtArgs>
        fields: Prisma.ShowtimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowtimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowtimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          findFirst: {
            args: Prisma.ShowtimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowtimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          findMany: {
            args: Prisma.ShowtimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>[]
          }
          create: {
            args: Prisma.ShowtimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          createMany: {
            args: Prisma.ShowtimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowtimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          update: {
            args: Prisma.ShowtimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          deleteMany: {
            args: Prisma.ShowtimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowtimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowtimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowtimePayload>
          }
          aggregate: {
            args: Prisma.ShowtimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowtime>
          }
          groupBy: {
            args: Prisma.ShowtimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowtimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowtimeCountArgs<ExtArgs>
            result: $Utils.Optional<ShowtimeCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingItem: {
        payload: Prisma.$BookingItemPayload<ExtArgs>
        fields: Prisma.BookingItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          findFirst: {
            args: Prisma.BookingItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          findMany: {
            args: Prisma.BookingItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>[]
          }
          create: {
            args: Prisma.BookingItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          createMany: {
            args: Prisma.BookingItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          update: {
            args: Prisma.BookingItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          deleteMany: {
            args: Prisma.BookingItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingItemPayload>
          }
          aggregate: {
            args: Prisma.BookingItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingItem>
          }
          groupBy: {
            args: Prisma.BookingItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingItemCountArgs<ExtArgs>
            result: $Utils.Optional<BookingItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      FoodCombo: {
        payload: Prisma.$FoodComboPayload<ExtArgs>
        fields: Prisma.FoodComboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodComboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodComboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload>
          }
          findFirst: {
            args: Prisma.FoodComboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodComboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload>
          }
          findMany: {
            args: Prisma.FoodComboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload>[]
          }
          create: {
            args: Prisma.FoodComboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload>
          }
          createMany: {
            args: Prisma.FoodComboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodComboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload>
          }
          update: {
            args: Prisma.FoodComboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload>
          }
          deleteMany: {
            args: Prisma.FoodComboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodComboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodComboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodComboPayload>
          }
          aggregate: {
            args: Prisma.FoodComboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodCombo>
          }
          groupBy: {
            args: Prisma.FoodComboGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodComboGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodComboCountArgs<ExtArgs>
            result: $Utils.Optional<FoodComboCountAggregateOutputType> | number
          }
        }
      }
      FoodItem: {
        payload: Prisma.$FoodItemPayload<ExtArgs>
        fields: Prisma.FoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findFirst: {
            args: Prisma.FoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findMany: {
            args: Prisma.FoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          create: {
            args: Prisma.FoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          createMany: {
            args: Prisma.FoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          update: {
            args: Prisma.FoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          aggregate: {
            args: Prisma.FoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodItem>
          }
          groupBy: {
            args: Prisma.FoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodItemCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      PointRedemption: {
        payload: Prisma.$PointRedemptionPayload<ExtArgs>
        fields: Prisma.PointRedemptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointRedemptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointRedemptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload>
          }
          findFirst: {
            args: Prisma.PointRedemptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointRedemptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload>
          }
          findMany: {
            args: Prisma.PointRedemptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload>[]
          }
          create: {
            args: Prisma.PointRedemptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload>
          }
          createMany: {
            args: Prisma.PointRedemptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PointRedemptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload>
          }
          update: {
            args: Prisma.PointRedemptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload>
          }
          deleteMany: {
            args: Prisma.PointRedemptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointRedemptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointRedemptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRedemptionPayload>
          }
          aggregate: {
            args: Prisma.PointRedemptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointRedemption>
          }
          groupBy: {
            args: Prisma.PointRedemptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointRedemptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointRedemptionCountArgs<ExtArgs>
            result: $Utils.Optional<PointRedemptionCountAggregateOutputType> | number
          }
        }
      }
      SupportTicket: {
        payload: Prisma.$SupportTicketPayload<ExtArgs>
        fields: Prisma.SupportTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findFirst: {
            args: Prisma.SupportTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findMany: {
            args: Prisma.SupportTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          create: {
            args: Prisma.SupportTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          createMany: {
            args: Prisma.SupportTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupportTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          update: {
            args: Prisma.SupportTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          deleteMany: {
            args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupportTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          aggregate: {
            args: Prisma.SupportTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportTicket>
          }
          groupBy: {
            args: Prisma.SupportTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportTicketCountArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketCountAggregateOutputType> | number
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
    user?: UserOmit
    loyaltyLog?: LoyaltyLogOmit
    movie?: MovieOmit
    cinema?: CinemaOmit
    room?: RoomOmit
    seat?: SeatOmit
    showtime?: ShowtimeOmit
    booking?: BookingOmit
    bookingItem?: BookingItemOmit
    payment?: PaymentOmit
    foodCombo?: FoodComboOmit
    foodItem?: FoodItemOmit
    voucher?: VoucherOmit
    pointRedemption?: PointRedemptionOmit
    supportTicket?: SupportTicketOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    loyalty_logs: number
    support_tickets: number
    point_redemptions: number
    owned_vouchers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    loyalty_logs?: boolean | UserCountOutputTypeCountLoyalty_logsArgs
    support_tickets?: boolean | UserCountOutputTypeCountSupport_ticketsArgs
    point_redemptions?: boolean | UserCountOutputTypeCountPoint_redemptionsArgs
    owned_vouchers?: boolean | UserCountOutputTypeCountOwned_vouchersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoyalty_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoyaltyLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupport_ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPoint_redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointRedemptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwned_vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    showtimes: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showtimes?: boolean | MovieCountOutputTypeCountShowtimesArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountShowtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowtimeWhereInput
  }


  /**
   * Count Type CinemaCountOutputType
   */

  export type CinemaCountOutputType = {
    rooms: number
  }

  export type CinemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | CinemaCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaCountOutputType
     */
    select?: CinemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    seats: number
    showtimes: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | RoomCountOutputTypeCountSeatsArgs
    showtimes?: boolean | RoomCountOutputTypeCountShowtimesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountShowtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowtimeWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    booking_items: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_items?: boolean | SeatCountOutputTypeCountBooking_itemsArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountBooking_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingItemWhereInput
  }


  /**
   * Count Type ShowtimeCountOutputType
   */

  export type ShowtimeCountOutputType = {
    bookings: number
  }

  export type ShowtimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ShowtimeCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ShowtimeCountOutputType without action
   */
  export type ShowtimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowtimeCountOutputType
     */
    select?: ShowtimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowtimeCountOutputType without action
   */
  export type ShowtimeCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    booking_items: number
    food_items: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_items?: boolean | BookingCountOutputTypeCountBooking_itemsArgs
    food_items?: boolean | BookingCountOutputTypeCountFood_itemsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBooking_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingItemWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountFood_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
  }


  /**
   * Count Type FoodComboCountOutputType
   */

  export type FoodComboCountOutputType = {
    food_items: number
  }

  export type FoodComboCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_items?: boolean | FoodComboCountOutputTypeCountFood_itemsArgs
  }

  // Custom InputTypes
  /**
   * FoodComboCountOutputType without action
   */
  export type FoodComboCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodComboCountOutputType
     */
    select?: FoodComboCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodComboCountOutputType without action
   */
  export type FoodComboCountOutputTypeCountFood_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
  }


  /**
   * Count Type VoucherCountOutputType
   */

  export type VoucherCountOutputType = {
    bookings: number
    point_redemptions: number
  }

  export type VoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | VoucherCountOutputTypeCountBookingsArgs
    point_redemptions?: boolean | VoucherCountOutputTypeCountPoint_redemptionsArgs
  }

  // Custom InputTypes
  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherCountOutputType
     */
    select?: VoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountPoint_redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointRedemptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    loyalty_points: number | null
  }

  export type UserSumAggregateOutputType = {
    loyalty_points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    name: string | null
    avatar_url: string | null
    role: $Enums.Role | null
    loyalty_points: number | null
    created_at: Date | null
    loyalty_tier: string | null
    updated_at: Date | null
    date_of_birth: Date | null
    is_verified: boolean | null
    refresh_token: string | null
    ban_reason: string | null
    is_banned: boolean | null
    auth_provider: string | null
    google_email: string | null
    google_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    name: string | null
    avatar_url: string | null
    role: $Enums.Role | null
    loyalty_points: number | null
    created_at: Date | null
    loyalty_tier: string | null
    updated_at: Date | null
    date_of_birth: Date | null
    is_verified: boolean | null
    refresh_token: string | null
    ban_reason: string | null
    is_banned: boolean | null
    auth_provider: string | null
    google_email: string | null
    google_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    password_hash: number
    name: number
    avatar_url: number
    role: number
    loyalty_points: number
    created_at: number
    loyalty_tier: number
    updated_at: number
    date_of_birth: number
    is_verified: number
    refresh_token: number
    ban_reason: number
    is_banned: number
    auth_provider: number
    google_email: number
    google_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    loyalty_points?: true
  }

  export type UserSumAggregateInputType = {
    loyalty_points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    name?: true
    avatar_url?: true
    role?: true
    loyalty_points?: true
    created_at?: true
    loyalty_tier?: true
    updated_at?: true
    date_of_birth?: true
    is_verified?: true
    refresh_token?: true
    ban_reason?: true
    is_banned?: true
    auth_provider?: true
    google_email?: true
    google_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    name?: true
    avatar_url?: true
    role?: true
    loyalty_points?: true
    created_at?: true
    loyalty_tier?: true
    updated_at?: true
    date_of_birth?: true
    is_verified?: true
    refresh_token?: true
    ban_reason?: true
    is_banned?: true
    auth_provider?: true
    google_email?: true
    google_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password_hash?: true
    name?: true
    avatar_url?: true
    role?: true
    loyalty_points?: true
    created_at?: true
    loyalty_tier?: true
    updated_at?: true
    date_of_birth?: true
    is_verified?: true
    refresh_token?: true
    ban_reason?: true
    is_banned?: true
    auth_provider?: true
    google_email?: true
    google_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    password_hash: string | null
    name: string
    avatar_url: string | null
    role: $Enums.Role
    loyalty_points: number
    created_at: Date
    loyalty_tier: string
    updated_at: Date
    date_of_birth: Date | null
    is_verified: boolean
    refresh_token: string | null
    ban_reason: string | null
    is_banned: boolean
    auth_provider: string
    google_email: string | null
    google_id: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    name?: boolean
    avatar_url?: boolean
    role?: boolean
    loyalty_points?: boolean
    created_at?: boolean
    loyalty_tier?: boolean
    updated_at?: boolean
    date_of_birth?: boolean
    is_verified?: boolean
    refresh_token?: boolean
    ban_reason?: boolean
    is_banned?: boolean
    auth_provider?: boolean
    google_email?: boolean
    google_id?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    loyalty_logs?: boolean | User$loyalty_logsArgs<ExtArgs>
    support_tickets?: boolean | User$support_ticketsArgs<ExtArgs>
    point_redemptions?: boolean | User$point_redemptionsArgs<ExtArgs>
    owned_vouchers?: boolean | User$owned_vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    name?: boolean
    avatar_url?: boolean
    role?: boolean
    loyalty_points?: boolean
    created_at?: boolean
    loyalty_tier?: boolean
    updated_at?: boolean
    date_of_birth?: boolean
    is_verified?: boolean
    refresh_token?: boolean
    ban_reason?: boolean
    is_banned?: boolean
    auth_provider?: boolean
    google_email?: boolean
    google_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "password_hash" | "name" | "avatar_url" | "role" | "loyalty_points" | "created_at" | "loyalty_tier" | "updated_at" | "date_of_birth" | "is_verified" | "refresh_token" | "ban_reason" | "is_banned" | "auth_provider" | "google_email" | "google_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    loyalty_logs?: boolean | User$loyalty_logsArgs<ExtArgs>
    support_tickets?: boolean | User$support_ticketsArgs<ExtArgs>
    point_redemptions?: boolean | User$point_redemptionsArgs<ExtArgs>
    owned_vouchers?: boolean | User$owned_vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      loyalty_logs: Prisma.$LoyaltyLogPayload<ExtArgs>[]
      support_tickets: Prisma.$SupportTicketPayload<ExtArgs>[]
      point_redemptions: Prisma.$PointRedemptionPayload<ExtArgs>[]
      owned_vouchers: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      password_hash: string | null
      name: string
      avatar_url: string | null
      role: $Enums.Role
      loyalty_points: number
      created_at: Date
      loyalty_tier: string
      updated_at: Date
      date_of_birth: Date | null
      is_verified: boolean
      refresh_token: string | null
      ban_reason: string | null
      is_banned: boolean
      auth_provider: string
      google_email: string | null
      google_id: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loyalty_logs<T extends User$loyalty_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$loyalty_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    support_tickets<T extends User$support_ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$support_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    point_redemptions<T extends User$point_redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$point_redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owned_vouchers<T extends User$owned_vouchersArgs<ExtArgs> = {}>(args?: Subset<T, User$owned_vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly loyalty_points: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly loyalty_tier: FieldRef<"User", 'String'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly date_of_birth: FieldRef<"User", 'DateTime'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly refresh_token: FieldRef<"User", 'String'>
    readonly ban_reason: FieldRef<"User", 'String'>
    readonly is_banned: FieldRef<"User", 'Boolean'>
    readonly auth_provider: FieldRef<"User", 'String'>
    readonly google_email: FieldRef<"User", 'String'>
    readonly google_id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.loyalty_logs
   */
  export type User$loyalty_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    where?: LoyaltyLogWhereInput
    orderBy?: LoyaltyLogOrderByWithRelationInput | LoyaltyLogOrderByWithRelationInput[]
    cursor?: LoyaltyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoyaltyLogScalarFieldEnum | LoyaltyLogScalarFieldEnum[]
  }

  /**
   * User.support_tickets
   */
  export type User$support_ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    cursor?: SupportTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * User.point_redemptions
   */
  export type User$point_redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    where?: PointRedemptionWhereInput
    orderBy?: PointRedemptionOrderByWithRelationInput | PointRedemptionOrderByWithRelationInput[]
    cursor?: PointRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointRedemptionScalarFieldEnum | PointRedemptionScalarFieldEnum[]
  }

  /**
   * User.owned_vouchers
   */
  export type User$owned_vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LoyaltyLog
   */

  export type AggregateLoyaltyLog = {
    _count: LoyaltyLogCountAggregateOutputType | null
    _avg: LoyaltyLogAvgAggregateOutputType | null
    _sum: LoyaltyLogSumAggregateOutputType | null
    _min: LoyaltyLogMinAggregateOutputType | null
    _max: LoyaltyLogMaxAggregateOutputType | null
  }

  export type LoyaltyLogAvgAggregateOutputType = {
    points: number | null
  }

  export type LoyaltyLogSumAggregateOutputType = {
    points: number | null
  }

  export type LoyaltyLogMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    points: number | null
    type: string | null
    description: string | null
    booking_id: string | null
    created_at: Date | null
  }

  export type LoyaltyLogMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    points: number | null
    type: string | null
    description: string | null
    booking_id: string | null
    created_at: Date | null
  }

  export type LoyaltyLogCountAggregateOutputType = {
    id: number
    user_id: number
    points: number
    type: number
    description: number
    booking_id: number
    created_at: number
    _all: number
  }


  export type LoyaltyLogAvgAggregateInputType = {
    points?: true
  }

  export type LoyaltyLogSumAggregateInputType = {
    points?: true
  }

  export type LoyaltyLogMinAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    type?: true
    description?: true
    booking_id?: true
    created_at?: true
  }

  export type LoyaltyLogMaxAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    type?: true
    description?: true
    booking_id?: true
    created_at?: true
  }

  export type LoyaltyLogCountAggregateInputType = {
    id?: true
    user_id?: true
    points?: true
    type?: true
    description?: true
    booking_id?: true
    created_at?: true
    _all?: true
  }

  export type LoyaltyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyLog to aggregate.
     */
    where?: LoyaltyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLogs to fetch.
     */
    orderBy?: LoyaltyLogOrderByWithRelationInput | LoyaltyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoyaltyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoyaltyLogs
    **/
    _count?: true | LoyaltyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoyaltyLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoyaltyLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoyaltyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoyaltyLogMaxAggregateInputType
  }

  export type GetLoyaltyLogAggregateType<T extends LoyaltyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLoyaltyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoyaltyLog[P]>
      : GetScalarType<T[P], AggregateLoyaltyLog[P]>
  }




  export type LoyaltyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoyaltyLogWhereInput
    orderBy?: LoyaltyLogOrderByWithAggregationInput | LoyaltyLogOrderByWithAggregationInput[]
    by: LoyaltyLogScalarFieldEnum[] | LoyaltyLogScalarFieldEnum
    having?: LoyaltyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoyaltyLogCountAggregateInputType | true
    _avg?: LoyaltyLogAvgAggregateInputType
    _sum?: LoyaltyLogSumAggregateInputType
    _min?: LoyaltyLogMinAggregateInputType
    _max?: LoyaltyLogMaxAggregateInputType
  }

  export type LoyaltyLogGroupByOutputType = {
    id: string
    user_id: string
    points: number
    type: string
    description: string
    booking_id: string | null
    created_at: Date
    _count: LoyaltyLogCountAggregateOutputType | null
    _avg: LoyaltyLogAvgAggregateOutputType | null
    _sum: LoyaltyLogSumAggregateOutputType | null
    _min: LoyaltyLogMinAggregateOutputType | null
    _max: LoyaltyLogMaxAggregateOutputType | null
  }

  type GetLoyaltyLogGroupByPayload<T extends LoyaltyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoyaltyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoyaltyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoyaltyLogGroupByOutputType[P]>
            : GetScalarType<T[P], LoyaltyLogGroupByOutputType[P]>
        }
      >
    >


  export type LoyaltyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    points?: boolean
    type?: boolean
    description?: boolean
    booking_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loyaltyLog"]>



  export type LoyaltyLogSelectScalar = {
    id?: boolean
    user_id?: boolean
    points?: boolean
    type?: boolean
    description?: boolean
    booking_id?: boolean
    created_at?: boolean
  }

  export type LoyaltyLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "points" | "type" | "description" | "booking_id" | "created_at", ExtArgs["result"]["loyaltyLog"]>
  export type LoyaltyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoyaltyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoyaltyLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      points: number
      type: string
      description: string
      booking_id: string | null
      created_at: Date
    }, ExtArgs["result"]["loyaltyLog"]>
    composites: {}
  }

  type LoyaltyLogGetPayload<S extends boolean | null | undefined | LoyaltyLogDefaultArgs> = $Result.GetResult<Prisma.$LoyaltyLogPayload, S>

  type LoyaltyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoyaltyLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoyaltyLogCountAggregateInputType | true
    }

  export interface LoyaltyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyLog'], meta: { name: 'LoyaltyLog' } }
    /**
     * Find zero or one LoyaltyLog that matches the filter.
     * @param {LoyaltyLogFindUniqueArgs} args - Arguments to find a LoyaltyLog
     * @example
     * // Get one LoyaltyLog
     * const loyaltyLog = await prisma.loyaltyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoyaltyLogFindUniqueArgs>(args: SelectSubset<T, LoyaltyLogFindUniqueArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoyaltyLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoyaltyLogFindUniqueOrThrowArgs} args - Arguments to find a LoyaltyLog
     * @example
     * // Get one LoyaltyLog
     * const loyaltyLog = await prisma.loyaltyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoyaltyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, LoyaltyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoyaltyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLogFindFirstArgs} args - Arguments to find a LoyaltyLog
     * @example
     * // Get one LoyaltyLog
     * const loyaltyLog = await prisma.loyaltyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoyaltyLogFindFirstArgs>(args?: SelectSubset<T, LoyaltyLogFindFirstArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoyaltyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLogFindFirstOrThrowArgs} args - Arguments to find a LoyaltyLog
     * @example
     * // Get one LoyaltyLog
     * const loyaltyLog = await prisma.loyaltyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoyaltyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, LoyaltyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoyaltyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoyaltyLogs
     * const loyaltyLogs = await prisma.loyaltyLog.findMany()
     * 
     * // Get first 10 LoyaltyLogs
     * const loyaltyLogs = await prisma.loyaltyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loyaltyLogWithIdOnly = await prisma.loyaltyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoyaltyLogFindManyArgs>(args?: SelectSubset<T, LoyaltyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoyaltyLog.
     * @param {LoyaltyLogCreateArgs} args - Arguments to create a LoyaltyLog.
     * @example
     * // Create one LoyaltyLog
     * const LoyaltyLog = await prisma.loyaltyLog.create({
     *   data: {
     *     // ... data to create a LoyaltyLog
     *   }
     * })
     * 
     */
    create<T extends LoyaltyLogCreateArgs>(args: SelectSubset<T, LoyaltyLogCreateArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoyaltyLogs.
     * @param {LoyaltyLogCreateManyArgs} args - Arguments to create many LoyaltyLogs.
     * @example
     * // Create many LoyaltyLogs
     * const loyaltyLog = await prisma.loyaltyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoyaltyLogCreateManyArgs>(args?: SelectSubset<T, LoyaltyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoyaltyLog.
     * @param {LoyaltyLogDeleteArgs} args - Arguments to delete one LoyaltyLog.
     * @example
     * // Delete one LoyaltyLog
     * const LoyaltyLog = await prisma.loyaltyLog.delete({
     *   where: {
     *     // ... filter to delete one LoyaltyLog
     *   }
     * })
     * 
     */
    delete<T extends LoyaltyLogDeleteArgs>(args: SelectSubset<T, LoyaltyLogDeleteArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoyaltyLog.
     * @param {LoyaltyLogUpdateArgs} args - Arguments to update one LoyaltyLog.
     * @example
     * // Update one LoyaltyLog
     * const loyaltyLog = await prisma.loyaltyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoyaltyLogUpdateArgs>(args: SelectSubset<T, LoyaltyLogUpdateArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoyaltyLogs.
     * @param {LoyaltyLogDeleteManyArgs} args - Arguments to filter LoyaltyLogs to delete.
     * @example
     * // Delete a few LoyaltyLogs
     * const { count } = await prisma.loyaltyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoyaltyLogDeleteManyArgs>(args?: SelectSubset<T, LoyaltyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoyaltyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoyaltyLogs
     * const loyaltyLog = await prisma.loyaltyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoyaltyLogUpdateManyArgs>(args: SelectSubset<T, LoyaltyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoyaltyLog.
     * @param {LoyaltyLogUpsertArgs} args - Arguments to update or create a LoyaltyLog.
     * @example
     * // Update or create a LoyaltyLog
     * const loyaltyLog = await prisma.loyaltyLog.upsert({
     *   create: {
     *     // ... data to create a LoyaltyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoyaltyLog we want to update
     *   }
     * })
     */
    upsert<T extends LoyaltyLogUpsertArgs>(args: SelectSubset<T, LoyaltyLogUpsertArgs<ExtArgs>>): Prisma__LoyaltyLogClient<$Result.GetResult<Prisma.$LoyaltyLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoyaltyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLogCountArgs} args - Arguments to filter LoyaltyLogs to count.
     * @example
     * // Count the number of LoyaltyLogs
     * const count = await prisma.loyaltyLog.count({
     *   where: {
     *     // ... the filter for the LoyaltyLogs we want to count
     *   }
     * })
    **/
    count<T extends LoyaltyLogCountArgs>(
      args?: Subset<T, LoyaltyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoyaltyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoyaltyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoyaltyLogAggregateArgs>(args: Subset<T, LoyaltyLogAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyLogAggregateType<T>>

    /**
     * Group by LoyaltyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyLogGroupByArgs} args - Group by arguments.
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
      T extends LoyaltyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoyaltyLogGroupByArgs['orderBy'] }
        : { orderBy?: LoyaltyLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoyaltyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoyaltyLog model
   */
  readonly fields: LoyaltyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoyaltyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoyaltyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LoyaltyLog model
   */
  interface LoyaltyLogFieldRefs {
    readonly id: FieldRef<"LoyaltyLog", 'String'>
    readonly user_id: FieldRef<"LoyaltyLog", 'String'>
    readonly points: FieldRef<"LoyaltyLog", 'Int'>
    readonly type: FieldRef<"LoyaltyLog", 'String'>
    readonly description: FieldRef<"LoyaltyLog", 'String'>
    readonly booking_id: FieldRef<"LoyaltyLog", 'String'>
    readonly created_at: FieldRef<"LoyaltyLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoyaltyLog findUnique
   */
  export type LoyaltyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLog to fetch.
     */
    where: LoyaltyLogWhereUniqueInput
  }

  /**
   * LoyaltyLog findUniqueOrThrow
   */
  export type LoyaltyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLog to fetch.
     */
    where: LoyaltyLogWhereUniqueInput
  }

  /**
   * LoyaltyLog findFirst
   */
  export type LoyaltyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLog to fetch.
     */
    where?: LoyaltyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLogs to fetch.
     */
    orderBy?: LoyaltyLogOrderByWithRelationInput | LoyaltyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoyaltyLogs.
     */
    cursor?: LoyaltyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoyaltyLogs.
     */
    distinct?: LoyaltyLogScalarFieldEnum | LoyaltyLogScalarFieldEnum[]
  }

  /**
   * LoyaltyLog findFirstOrThrow
   */
  export type LoyaltyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLog to fetch.
     */
    where?: LoyaltyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLogs to fetch.
     */
    orderBy?: LoyaltyLogOrderByWithRelationInput | LoyaltyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoyaltyLogs.
     */
    cursor?: LoyaltyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoyaltyLogs.
     */
    distinct?: LoyaltyLogScalarFieldEnum | LoyaltyLogScalarFieldEnum[]
  }

  /**
   * LoyaltyLog findMany
   */
  export type LoyaltyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyLogs to fetch.
     */
    where?: LoyaltyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyLogs to fetch.
     */
    orderBy?: LoyaltyLogOrderByWithRelationInput | LoyaltyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoyaltyLogs.
     */
    cursor?: LoyaltyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyLogs.
     */
    skip?: number
    distinct?: LoyaltyLogScalarFieldEnum | LoyaltyLogScalarFieldEnum[]
  }

  /**
   * LoyaltyLog create
   */
  export type LoyaltyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a LoyaltyLog.
     */
    data: XOR<LoyaltyLogCreateInput, LoyaltyLogUncheckedCreateInput>
  }

  /**
   * LoyaltyLog createMany
   */
  export type LoyaltyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoyaltyLogs.
     */
    data: LoyaltyLogCreateManyInput | LoyaltyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoyaltyLog update
   */
  export type LoyaltyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a LoyaltyLog.
     */
    data: XOR<LoyaltyLogUpdateInput, LoyaltyLogUncheckedUpdateInput>
    /**
     * Choose, which LoyaltyLog to update.
     */
    where: LoyaltyLogWhereUniqueInput
  }

  /**
   * LoyaltyLog updateMany
   */
  export type LoyaltyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoyaltyLogs.
     */
    data: XOR<LoyaltyLogUpdateManyMutationInput, LoyaltyLogUncheckedUpdateManyInput>
    /**
     * Filter which LoyaltyLogs to update
     */
    where?: LoyaltyLogWhereInput
    /**
     * Limit how many LoyaltyLogs to update.
     */
    limit?: number
  }

  /**
   * LoyaltyLog upsert
   */
  export type LoyaltyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the LoyaltyLog to update in case it exists.
     */
    where: LoyaltyLogWhereUniqueInput
    /**
     * In case the LoyaltyLog found by the `where` argument doesn't exist, create a new LoyaltyLog with this data.
     */
    create: XOR<LoyaltyLogCreateInput, LoyaltyLogUncheckedCreateInput>
    /**
     * In case the LoyaltyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoyaltyLogUpdateInput, LoyaltyLogUncheckedUpdateInput>
  }

  /**
   * LoyaltyLog delete
   */
  export type LoyaltyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
    /**
     * Filter which LoyaltyLog to delete.
     */
    where: LoyaltyLogWhereUniqueInput
  }

  /**
   * LoyaltyLog deleteMany
   */
  export type LoyaltyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyLogs to delete
     */
    where?: LoyaltyLogWhereInput
    /**
     * Limit how many LoyaltyLogs to delete.
     */
    limit?: number
  }

  /**
   * LoyaltyLog without action
   */
  export type LoyaltyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyLog
     */
    select?: LoyaltyLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyLog
     */
    omit?: LoyaltyLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyLogInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    tmdb_id: number | null
    duration: number | null
    rating: number | null
  }

  export type MovieSumAggregateOutputType = {
    tmdb_id: number | null
    duration: number | null
    rating: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    tmdb_id: number | null
    title: string | null
    original_title: string | null
    overview: string | null
    poster_url: string | null
    backdrop_url: string | null
    trailer_key: string | null
    genres: string | null
    cast: string | null
    director: string | null
    duration: number | null
    rating: number | null
    language: string | null
    status: $Enums.MovieStatus | null
    release_date: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    tmdb_id: number | null
    title: string | null
    original_title: string | null
    overview: string | null
    poster_url: string | null
    backdrop_url: string | null
    trailer_key: string | null
    genres: string | null
    cast: string | null
    director: string | null
    duration: number | null
    rating: number | null
    language: string | null
    status: $Enums.MovieStatus | null
    release_date: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    tmdb_id: number
    title: number
    original_title: number
    overview: number
    poster_url: number
    backdrop_url: number
    trailer_key: number
    genres: number
    cast: number
    director: number
    duration: number
    rating: number
    language: number
    status: number
    release_date: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    tmdb_id?: true
    duration?: true
    rating?: true
  }

  export type MovieSumAggregateInputType = {
    tmdb_id?: true
    duration?: true
    rating?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    tmdb_id?: true
    title?: true
    original_title?: true
    overview?: true
    poster_url?: true
    backdrop_url?: true
    trailer_key?: true
    genres?: true
    cast?: true
    director?: true
    duration?: true
    rating?: true
    language?: true
    status?: true
    release_date?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    tmdb_id?: true
    title?: true
    original_title?: true
    overview?: true
    poster_url?: true
    backdrop_url?: true
    trailer_key?: true
    genres?: true
    cast?: true
    director?: true
    duration?: true
    rating?: true
    language?: true
    status?: true
    release_date?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    tmdb_id?: true
    title?: true
    original_title?: true
    overview?: true
    poster_url?: true
    backdrop_url?: true
    trailer_key?: true
    genres?: true
    cast?: true
    director?: true
    duration?: true
    rating?: true
    language?: true
    status?: true
    release_date?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    tmdb_id: number
    title: string
    original_title: string
    overview: string
    poster_url: string
    backdrop_url: string
    trailer_key: string | null
    genres: string
    cast: string
    director: string
    duration: number
    rating: number
    language: string
    status: $Enums.MovieStatus
    release_date: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdb_id?: boolean
    title?: boolean
    original_title?: boolean
    overview?: boolean
    poster_url?: boolean
    backdrop_url?: boolean
    trailer_key?: boolean
    genres?: boolean
    cast?: boolean
    director?: boolean
    duration?: boolean
    rating?: boolean
    language?: boolean
    status?: boolean
    release_date?: boolean
    showtimes?: boolean | Movie$showtimesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>



  export type MovieSelectScalar = {
    id?: boolean
    tmdb_id?: boolean
    title?: boolean
    original_title?: boolean
    overview?: boolean
    poster_url?: boolean
    backdrop_url?: boolean
    trailer_key?: boolean
    genres?: boolean
    cast?: boolean
    director?: boolean
    duration?: boolean
    rating?: boolean
    language?: boolean
    status?: boolean
    release_date?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tmdb_id" | "title" | "original_title" | "overview" | "poster_url" | "backdrop_url" | "trailer_key" | "genres" | "cast" | "director" | "duration" | "rating" | "language" | "status" | "release_date", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showtimes?: boolean | Movie$showtimesArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      showtimes: Prisma.$ShowtimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tmdb_id: number
      title: string
      original_title: string
      overview: string
      poster_url: string
      backdrop_url: string
      trailer_key: string | null
      genres: string
      cast: string
      director: string
      duration: number
      rating: number
      language: string
      status: $Enums.MovieStatus
      release_date: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    showtimes<T extends Movie$showtimesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$showtimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly tmdb_id: FieldRef<"Movie", 'Int'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly original_title: FieldRef<"Movie", 'String'>
    readonly overview: FieldRef<"Movie", 'String'>
    readonly poster_url: FieldRef<"Movie", 'String'>
    readonly backdrop_url: FieldRef<"Movie", 'String'>
    readonly trailer_key: FieldRef<"Movie", 'String'>
    readonly genres: FieldRef<"Movie", 'String'>
    readonly cast: FieldRef<"Movie", 'String'>
    readonly director: FieldRef<"Movie", 'String'>
    readonly duration: FieldRef<"Movie", 'Int'>
    readonly rating: FieldRef<"Movie", 'Float'>
    readonly language: FieldRef<"Movie", 'String'>
    readonly status: FieldRef<"Movie", 'MovieStatus'>
    readonly release_date: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.showtimes
   */
  export type Movie$showtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    where?: ShowtimeWhereInput
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    cursor?: ShowtimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  export type CinemaAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CinemaSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CinemaMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    lat: number | null
    lng: number | null
    image_url: string | null
  }

  export type CinemaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    lat: number | null
    lng: number | null
    image_url: string | null
  }

  export type CinemaCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    lat: number
    lng: number
    image_url: number
    _all: number
  }


  export type CinemaAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CinemaSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CinemaMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    lat?: true
    lng?: true
    image_url?: true
  }

  export type CinemaMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    lat?: true
    lng?: true
    image_url?: true
  }

  export type CinemaCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    lat?: true
    lng?: true
    image_url?: true
    _all?: true
  }

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinema to aggregate.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cinemas
    **/
    _count?: true | CinemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CinemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CinemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CinemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CinemaMaxAggregateInputType
  }

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
        [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>
  }




  export type CinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithAggregationInput | CinemaOrderByWithAggregationInput[]
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum
    having?: CinemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CinemaCountAggregateInputType | true
    _avg?: CinemaAvgAggregateInputType
    _sum?: CinemaSumAggregateInputType
    _min?: CinemaMinAggregateInputType
    _max?: CinemaMaxAggregateInputType
  }

  export type CinemaGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    lat: number
    lng: number
    image_url: string | null
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  type GetCinemaGroupByPayload<T extends CinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CinemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CinemaGroupByOutputType[P]>
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
        }
      >
    >


  export type CinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    image_url?: boolean
    rooms?: boolean | Cinema$roomsArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cinema"]>



  export type CinemaSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    lat?: boolean
    lng?: boolean
    image_url?: boolean
  }

  export type CinemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "lat" | "lng" | "image_url", ExtArgs["result"]["cinema"]>
  export type CinemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Cinema$roomsArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cinema"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      lat: number
      lng: number
      image_url: string | null
    }, ExtArgs["result"]["cinema"]>
    composites: {}
  }

  type CinemaGetPayload<S extends boolean | null | undefined | CinemaDefaultArgs> = $Result.GetResult<Prisma.$CinemaPayload, S>

  type CinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CinemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CinemaCountAggregateInputType | true
    }

  export interface CinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cinema'], meta: { name: 'Cinema' } }
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {CinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CinemaFindUniqueArgs>(args: SelectSubset<T, CinemaFindUniqueArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cinema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CinemaFindUniqueOrThrowArgs>(args: SelectSubset<T, CinemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CinemaFindFirstArgs>(args?: SelectSubset<T, CinemaFindFirstArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CinemaFindFirstOrThrowArgs>(args?: SelectSubset<T, CinemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     * 
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CinemaFindManyArgs>(args?: SelectSubset<T, CinemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cinema.
     * @param {CinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     * 
     */
    create<T extends CinemaCreateArgs>(args: SelectSubset<T, CinemaCreateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cinemas.
     * @param {CinemaCreateManyArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CinemaCreateManyArgs>(args?: SelectSubset<T, CinemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cinema.
     * @param {CinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     * 
     */
    delete<T extends CinemaDeleteArgs>(args: SelectSubset<T, CinemaDeleteArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cinema.
     * @param {CinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CinemaUpdateArgs>(args: SelectSubset<T, CinemaUpdateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cinemas.
     * @param {CinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CinemaDeleteManyArgs>(args?: SelectSubset<T, CinemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CinemaUpdateManyArgs>(args: SelectSubset<T, CinemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cinema.
     * @param {CinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     */
    upsert<T extends CinemaUpsertArgs>(args: SelectSubset<T, CinemaUpsertArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
    **/
    count<T extends CinemaCountArgs>(
      args?: Subset<T, CinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CinemaAggregateArgs>(args: Subset<T, CinemaAggregateArgs>): Prisma.PrismaPromise<GetCinemaAggregateType<T>>

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaGroupByArgs} args - Group by arguments.
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
      T extends CinemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CinemaGroupByArgs['orderBy'] }
        : { orderBy?: CinemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CinemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cinema model
   */
  readonly fields: CinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CinemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Cinema$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cinema model
   */
  interface CinemaFieldRefs {
    readonly id: FieldRef<"Cinema", 'String'>
    readonly name: FieldRef<"Cinema", 'String'>
    readonly address: FieldRef<"Cinema", 'String'>
    readonly city: FieldRef<"Cinema", 'String'>
    readonly lat: FieldRef<"Cinema", 'Float'>
    readonly lng: FieldRef<"Cinema", 'Float'>
    readonly image_url: FieldRef<"Cinema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cinema findUnique
   */
  export type CinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findUniqueOrThrow
   */
  export type CinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findFirst
   */
  export type CinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findFirstOrThrow
   */
  export type CinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findMany
   */
  export type CinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinemas to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema create
   */
  export type CinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cinema.
     */
    data: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
  }

  /**
   * Cinema createMany
   */
  export type CinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cinema update
   */
  export type CinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cinema.
     */
    data: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
    /**
     * Choose, which Cinema to update.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema updateMany
   */
  export type CinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema upsert
   */
  export type CinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cinema to update in case it exists.
     */
    where: CinemaWhereUniqueInput
    /**
     * In case the Cinema found by the `where` argument doesn't exist, create a new Cinema with this data.
     */
    create: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
    /**
     * In case the Cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
  }

  /**
   * Cinema delete
   */
  export type CinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter which Cinema to delete.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema deleteMany
   */
  export type CinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinemas to delete
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to delete.
     */
    limit?: number
  }

  /**
   * Cinema.rooms
   */
  export type Cinema$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Cinema without action
   */
  export type CinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    total_rows: number | null
    total_cols: number | null
  }

  export type RoomSumAggregateOutputType = {
    total_rows: number | null
    total_cols: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    cinema_id: string | null
    name: string | null
    type: $Enums.RoomType | null
    total_rows: number | null
    total_cols: number | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    cinema_id: string | null
    name: string | null
    type: $Enums.RoomType | null
    total_rows: number | null
    total_cols: number | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    cinema_id: number
    name: number
    type: number
    total_rows: number
    total_cols: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    total_rows?: true
    total_cols?: true
  }

  export type RoomSumAggregateInputType = {
    total_rows?: true
    total_cols?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    cinema_id?: true
    name?: true
    type?: true
    total_rows?: true
    total_cols?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    cinema_id?: true
    name?: true
    type?: true
    total_rows?: true
    total_cols?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    cinema_id?: true
    name?: true
    type?: true
    total_rows?: true
    total_cols?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    cinema_id: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cinema_id?: boolean
    name?: boolean
    type?: boolean
    total_rows?: boolean
    total_cols?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    seats?: boolean | Room$seatsArgs<ExtArgs>
    showtimes?: boolean | Room$showtimesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    cinema_id?: boolean
    name?: boolean
    type?: boolean
    total_rows?: boolean
    total_cols?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cinema_id" | "name" | "type" | "total_rows" | "total_cols", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    seats?: boolean | Room$seatsArgs<ExtArgs>
    showtimes?: boolean | Room$showtimesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      cinema: Prisma.$CinemaPayload<ExtArgs>
      seats: Prisma.$SeatPayload<ExtArgs>[]
      showtimes: Prisma.$ShowtimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cinema_id: string
      name: string
      type: $Enums.RoomType
      total_rows: number
      total_cols: number
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cinema<T extends CinemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CinemaDefaultArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seats<T extends Room$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Room$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    showtimes<T extends Room$showtimesArgs<ExtArgs> = {}>(args?: Subset<T, Room$showtimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly cinema_id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly type: FieldRef<"Room", 'RoomType'>
    readonly total_rows: FieldRef<"Room", 'Int'>
    readonly total_cols: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.seats
   */
  export type Room$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Room.showtimes
   */
  export type Room$showtimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    where?: ShowtimeWhereInput
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    cursor?: ShowtimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    col: number | null
  }

  export type SeatSumAggregateOutputType = {
    col: number | null
  }

  export type SeatMinAggregateOutputType = {
    id: string | null
    room_id: string | null
    row: string | null
    col: number | null
    type: $Enums.SeatType | null
  }

  export type SeatMaxAggregateOutputType = {
    id: string | null
    room_id: string | null
    row: string | null
    col: number | null
    type: $Enums.SeatType | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    room_id: number
    row: number
    col: number
    type: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    col?: true
  }

  export type SeatSumAggregateInputType = {
    col?: true
  }

  export type SeatMinAggregateInputType = {
    id?: true
    room_id?: true
    row?: true
    col?: true
    type?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    room_id?: true
    row?: true
    col?: true
    type?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    room_id?: true
    row?: true
    col?: true
    type?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: string
    room_id: string
    row: string
    col: number
    type: $Enums.SeatType
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    row?: boolean
    col?: boolean
    type?: boolean
    booking_items?: boolean | Seat$booking_itemsArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>



  export type SeatSelectScalar = {
    id?: boolean
    room_id?: boolean
    row?: boolean
    col?: boolean
    type?: boolean
  }

  export type SeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "row" | "col" | "type", ExtArgs["result"]["seat"]>
  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_items?: boolean | Seat$booking_itemsArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      booking_items: Prisma.$BookingItemPayload<ExtArgs>[]
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_id: string
      row: string
      col: number
      type: $Enums.SeatType
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
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
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking_items<T extends Seat$booking_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Seat$booking_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Seat model
   */
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'String'>
    readonly room_id: FieldRef<"Seat", 'String'>
    readonly row: FieldRef<"Seat", 'String'>
    readonly col: FieldRef<"Seat", 'Int'>
    readonly type: FieldRef<"Seat", 'SeatType'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to update.
     */
    limit?: number
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to delete.
     */
    limit?: number
  }

  /**
   * Seat.booking_items
   */
  export type Seat$booking_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    where?: BookingItemWhereInput
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    cursor?: BookingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Showtime
   */

  export type AggregateShowtime = {
    _count: ShowtimeCountAggregateOutputType | null
    _avg: ShowtimeAvgAggregateOutputType | null
    _sum: ShowtimeSumAggregateOutputType | null
    _min: ShowtimeMinAggregateOutputType | null
    _max: ShowtimeMaxAggregateOutputType | null
  }

  export type ShowtimeAvgAggregateOutputType = {
    price: number | null
    vip_price: number | null
    couple_price: number | null
  }

  export type ShowtimeSumAggregateOutputType = {
    price: number | null
    vip_price: number | null
    couple_price: number | null
  }

  export type ShowtimeMinAggregateOutputType = {
    id: string | null
    movie_id: string | null
    room_id: string | null
    start_time: Date | null
    end_time: Date | null
    price: number | null
    vip_price: number | null
    couple_price: number | null
    language: string | null
    format: string | null
  }

  export type ShowtimeMaxAggregateOutputType = {
    id: string | null
    movie_id: string | null
    room_id: string | null
    start_time: Date | null
    end_time: Date | null
    price: number | null
    vip_price: number | null
    couple_price: number | null
    language: string | null
    format: string | null
  }

  export type ShowtimeCountAggregateOutputType = {
    id: number
    movie_id: number
    room_id: number
    start_time: number
    end_time: number
    price: number
    vip_price: number
    couple_price: number
    language: number
    format: number
    _all: number
  }


  export type ShowtimeAvgAggregateInputType = {
    price?: true
    vip_price?: true
    couple_price?: true
  }

  export type ShowtimeSumAggregateInputType = {
    price?: true
    vip_price?: true
    couple_price?: true
  }

  export type ShowtimeMinAggregateInputType = {
    id?: true
    movie_id?: true
    room_id?: true
    start_time?: true
    end_time?: true
    price?: true
    vip_price?: true
    couple_price?: true
    language?: true
    format?: true
  }

  export type ShowtimeMaxAggregateInputType = {
    id?: true
    movie_id?: true
    room_id?: true
    start_time?: true
    end_time?: true
    price?: true
    vip_price?: true
    couple_price?: true
    language?: true
    format?: true
  }

  export type ShowtimeCountAggregateInputType = {
    id?: true
    movie_id?: true
    room_id?: true
    start_time?: true
    end_time?: true
    price?: true
    vip_price?: true
    couple_price?: true
    language?: true
    format?: true
    _all?: true
  }

  export type ShowtimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showtime to aggregate.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Showtimes
    **/
    _count?: true | ShowtimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowtimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowtimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowtimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowtimeMaxAggregateInputType
  }

  export type GetShowtimeAggregateType<T extends ShowtimeAggregateArgs> = {
        [P in keyof T & keyof AggregateShowtime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowtime[P]>
      : GetScalarType<T[P], AggregateShowtime[P]>
  }




  export type ShowtimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowtimeWhereInput
    orderBy?: ShowtimeOrderByWithAggregationInput | ShowtimeOrderByWithAggregationInput[]
    by: ShowtimeScalarFieldEnum[] | ShowtimeScalarFieldEnum
    having?: ShowtimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowtimeCountAggregateInputType | true
    _avg?: ShowtimeAvgAggregateInputType
    _sum?: ShowtimeSumAggregateInputType
    _min?: ShowtimeMinAggregateInputType
    _max?: ShowtimeMaxAggregateInputType
  }

  export type ShowtimeGroupByOutputType = {
    id: string
    movie_id: string
    room_id: string
    start_time: Date
    end_time: Date
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    _count: ShowtimeCountAggregateOutputType | null
    _avg: ShowtimeAvgAggregateOutputType | null
    _sum: ShowtimeSumAggregateOutputType | null
    _min: ShowtimeMinAggregateOutputType | null
    _max: ShowtimeMaxAggregateOutputType | null
  }

  type GetShowtimeGroupByPayload<T extends ShowtimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowtimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowtimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowtimeGroupByOutputType[P]>
            : GetScalarType<T[P], ShowtimeGroupByOutputType[P]>
        }
      >
    >


  export type ShowtimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movie_id?: boolean
    room_id?: boolean
    start_time?: boolean
    end_time?: boolean
    price?: boolean
    vip_price?: boolean
    couple_price?: boolean
    language?: boolean
    format?: boolean
    bookings?: boolean | Showtime$bookingsArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    _count?: boolean | ShowtimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showtime"]>



  export type ShowtimeSelectScalar = {
    id?: boolean
    movie_id?: boolean
    room_id?: boolean
    start_time?: boolean
    end_time?: boolean
    price?: boolean
    vip_price?: boolean
    couple_price?: boolean
    language?: boolean
    format?: boolean
  }

  export type ShowtimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movie_id" | "room_id" | "start_time" | "end_time" | "price" | "vip_price" | "couple_price" | "language" | "format", ExtArgs["result"]["showtime"]>
  export type ShowtimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Showtime$bookingsArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    _count?: boolean | ShowtimeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShowtimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Showtime"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      movie: Prisma.$MoviePayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      movie_id: string
      room_id: string
      start_time: Date
      end_time: Date
      price: number
      vip_price: number
      couple_price: number
      language: string
      format: string
    }, ExtArgs["result"]["showtime"]>
    composites: {}
  }

  type ShowtimeGetPayload<S extends boolean | null | undefined | ShowtimeDefaultArgs> = $Result.GetResult<Prisma.$ShowtimePayload, S>

  type ShowtimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowtimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowtimeCountAggregateInputType | true
    }

  export interface ShowtimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Showtime'], meta: { name: 'Showtime' } }
    /**
     * Find zero or one Showtime that matches the filter.
     * @param {ShowtimeFindUniqueArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowtimeFindUniqueArgs>(args: SelectSubset<T, ShowtimeFindUniqueArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Showtime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowtimeFindUniqueOrThrowArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowtimeFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowtimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showtime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeFindFirstArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowtimeFindFirstArgs>(args?: SelectSubset<T, ShowtimeFindFirstArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showtime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeFindFirstOrThrowArgs} args - Arguments to find a Showtime
     * @example
     * // Get one Showtime
     * const showtime = await prisma.showtime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowtimeFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowtimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Showtimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Showtimes
     * const showtimes = await prisma.showtime.findMany()
     * 
     * // Get first 10 Showtimes
     * const showtimes = await prisma.showtime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showtimeWithIdOnly = await prisma.showtime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowtimeFindManyArgs>(args?: SelectSubset<T, ShowtimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Showtime.
     * @param {ShowtimeCreateArgs} args - Arguments to create a Showtime.
     * @example
     * // Create one Showtime
     * const Showtime = await prisma.showtime.create({
     *   data: {
     *     // ... data to create a Showtime
     *   }
     * })
     * 
     */
    create<T extends ShowtimeCreateArgs>(args: SelectSubset<T, ShowtimeCreateArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Showtimes.
     * @param {ShowtimeCreateManyArgs} args - Arguments to create many Showtimes.
     * @example
     * // Create many Showtimes
     * const showtime = await prisma.showtime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowtimeCreateManyArgs>(args?: SelectSubset<T, ShowtimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Showtime.
     * @param {ShowtimeDeleteArgs} args - Arguments to delete one Showtime.
     * @example
     * // Delete one Showtime
     * const Showtime = await prisma.showtime.delete({
     *   where: {
     *     // ... filter to delete one Showtime
     *   }
     * })
     * 
     */
    delete<T extends ShowtimeDeleteArgs>(args: SelectSubset<T, ShowtimeDeleteArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Showtime.
     * @param {ShowtimeUpdateArgs} args - Arguments to update one Showtime.
     * @example
     * // Update one Showtime
     * const showtime = await prisma.showtime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowtimeUpdateArgs>(args: SelectSubset<T, ShowtimeUpdateArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Showtimes.
     * @param {ShowtimeDeleteManyArgs} args - Arguments to filter Showtimes to delete.
     * @example
     * // Delete a few Showtimes
     * const { count } = await prisma.showtime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowtimeDeleteManyArgs>(args?: SelectSubset<T, ShowtimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Showtimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Showtimes
     * const showtime = await prisma.showtime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowtimeUpdateManyArgs>(args: SelectSubset<T, ShowtimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Showtime.
     * @param {ShowtimeUpsertArgs} args - Arguments to update or create a Showtime.
     * @example
     * // Update or create a Showtime
     * const showtime = await prisma.showtime.upsert({
     *   create: {
     *     // ... data to create a Showtime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Showtime we want to update
     *   }
     * })
     */
    upsert<T extends ShowtimeUpsertArgs>(args: SelectSubset<T, ShowtimeUpsertArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Showtimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeCountArgs} args - Arguments to filter Showtimes to count.
     * @example
     * // Count the number of Showtimes
     * const count = await prisma.showtime.count({
     *   where: {
     *     // ... the filter for the Showtimes we want to count
     *   }
     * })
    **/
    count<T extends ShowtimeCountArgs>(
      args?: Subset<T, ShowtimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowtimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Showtime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowtimeAggregateArgs>(args: Subset<T, ShowtimeAggregateArgs>): Prisma.PrismaPromise<GetShowtimeAggregateType<T>>

    /**
     * Group by Showtime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowtimeGroupByArgs} args - Group by arguments.
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
      T extends ShowtimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowtimeGroupByArgs['orderBy'] }
        : { orderBy?: ShowtimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowtimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowtimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Showtime model
   */
  readonly fields: ShowtimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Showtime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowtimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Showtime$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Showtime$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Showtime model
   */
  interface ShowtimeFieldRefs {
    readonly id: FieldRef<"Showtime", 'String'>
    readonly movie_id: FieldRef<"Showtime", 'String'>
    readonly room_id: FieldRef<"Showtime", 'String'>
    readonly start_time: FieldRef<"Showtime", 'DateTime'>
    readonly end_time: FieldRef<"Showtime", 'DateTime'>
    readonly price: FieldRef<"Showtime", 'Int'>
    readonly vip_price: FieldRef<"Showtime", 'Int'>
    readonly couple_price: FieldRef<"Showtime", 'Int'>
    readonly language: FieldRef<"Showtime", 'String'>
    readonly format: FieldRef<"Showtime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Showtime findUnique
   */
  export type ShowtimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime findUniqueOrThrow
   */
  export type ShowtimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime findFirst
   */
  export type ShowtimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showtimes.
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showtimes.
     */
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Showtime findFirstOrThrow
   */
  export type ShowtimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtime to fetch.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showtimes.
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showtimes.
     */
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Showtime findMany
   */
  export type ShowtimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter, which Showtimes to fetch.
     */
    where?: ShowtimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showtimes to fetch.
     */
    orderBy?: ShowtimeOrderByWithRelationInput | ShowtimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Showtimes.
     */
    cursor?: ShowtimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showtimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showtimes.
     */
    skip?: number
    distinct?: ShowtimeScalarFieldEnum | ShowtimeScalarFieldEnum[]
  }

  /**
   * Showtime create
   */
  export type ShowtimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Showtime.
     */
    data: XOR<ShowtimeCreateInput, ShowtimeUncheckedCreateInput>
  }

  /**
   * Showtime createMany
   */
  export type ShowtimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Showtimes.
     */
    data: ShowtimeCreateManyInput | ShowtimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Showtime update
   */
  export type ShowtimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Showtime.
     */
    data: XOR<ShowtimeUpdateInput, ShowtimeUncheckedUpdateInput>
    /**
     * Choose, which Showtime to update.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime updateMany
   */
  export type ShowtimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Showtimes.
     */
    data: XOR<ShowtimeUpdateManyMutationInput, ShowtimeUncheckedUpdateManyInput>
    /**
     * Filter which Showtimes to update
     */
    where?: ShowtimeWhereInput
    /**
     * Limit how many Showtimes to update.
     */
    limit?: number
  }

  /**
   * Showtime upsert
   */
  export type ShowtimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Showtime to update in case it exists.
     */
    where: ShowtimeWhereUniqueInput
    /**
     * In case the Showtime found by the `where` argument doesn't exist, create a new Showtime with this data.
     */
    create: XOR<ShowtimeCreateInput, ShowtimeUncheckedCreateInput>
    /**
     * In case the Showtime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowtimeUpdateInput, ShowtimeUncheckedUpdateInput>
  }

  /**
   * Showtime delete
   */
  export type ShowtimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
    /**
     * Filter which Showtime to delete.
     */
    where: ShowtimeWhereUniqueInput
  }

  /**
   * Showtime deleteMany
   */
  export type ShowtimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showtimes to delete
     */
    where?: ShowtimeWhereInput
    /**
     * Limit how many Showtimes to delete.
     */
    limit?: number
  }

  /**
   * Showtime.bookings
   */
  export type Showtime$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Showtime without action
   */
  export type ShowtimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showtime
     */
    select?: ShowtimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showtime
     */
    omit?: ShowtimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowtimeInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    total_amount: number | null
    discount_amount: number | null
  }

  export type BookingSumAggregateOutputType = {
    total_amount: number | null
    discount_amount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    showtime_id: string | null
    status: $Enums.BookingStatus | null
    total_amount: number | null
    qr_code: string | null
    qr_image_url: string | null
    paid_at: Date | null
    created_at: Date | null
    expires_at: Date | null
    discount_amount: number | null
    voucher_code: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    showtime_id: string | null
    status: $Enums.BookingStatus | null
    total_amount: number | null
    qr_code: string | null
    qr_image_url: string | null
    paid_at: Date | null
    created_at: Date | null
    expires_at: Date | null
    discount_amount: number | null
    voucher_code: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    user_id: number
    showtime_id: number
    status: number
    total_amount: number
    qr_code: number
    qr_image_url: number
    paid_at: number
    created_at: number
    expires_at: number
    discount_amount: number
    voucher_code: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    total_amount?: true
    discount_amount?: true
  }

  export type BookingSumAggregateInputType = {
    total_amount?: true
    discount_amount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    user_id?: true
    showtime_id?: true
    status?: true
    total_amount?: true
    qr_code?: true
    qr_image_url?: true
    paid_at?: true
    created_at?: true
    expires_at?: true
    discount_amount?: true
    voucher_code?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    user_id?: true
    showtime_id?: true
    status?: true
    total_amount?: true
    qr_code?: true
    qr_image_url?: true
    paid_at?: true
    created_at?: true
    expires_at?: true
    discount_amount?: true
    voucher_code?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    user_id?: true
    showtime_id?: true
    status?: true
    total_amount?: true
    qr_code?: true
    qr_image_url?: true
    paid_at?: true
    created_at?: true
    expires_at?: true
    discount_amount?: true
    voucher_code?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    user_id: string
    showtime_id: string
    status: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url: string | null
    paid_at: Date | null
    created_at: Date
    expires_at: Date
    discount_amount: number
    voucher_code: string | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    showtime_id?: boolean
    status?: boolean
    total_amount?: boolean
    qr_code?: boolean
    qr_image_url?: boolean
    paid_at?: boolean
    created_at?: boolean
    expires_at?: boolean
    discount_amount?: boolean
    voucher_code?: boolean
    booking_items?: boolean | Booking$booking_itemsArgs<ExtArgs>
    showtime?: boolean | ShowtimeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Booking$voucherArgs<ExtArgs>
    food_items?: boolean | Booking$food_itemsArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    user_id?: boolean
    showtime_id?: boolean
    status?: boolean
    total_amount?: boolean
    qr_code?: boolean
    qr_image_url?: boolean
    paid_at?: boolean
    created_at?: boolean
    expires_at?: boolean
    discount_amount?: boolean
    voucher_code?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "showtime_id" | "status" | "total_amount" | "qr_code" | "qr_image_url" | "paid_at" | "created_at" | "expires_at" | "discount_amount" | "voucher_code", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_items?: boolean | Booking$booking_itemsArgs<ExtArgs>
    showtime?: boolean | ShowtimeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Booking$voucherArgs<ExtArgs>
    food_items?: boolean | Booking$food_itemsArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      booking_items: Prisma.$BookingItemPayload<ExtArgs>[]
      showtime: Prisma.$ShowtimePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs> | null
      food_items: Prisma.$FoodItemPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      showtime_id: string
      status: $Enums.BookingStatus
      total_amount: number
      qr_code: string
      qr_image_url: string | null
      paid_at: Date | null
      created_at: Date
      expires_at: Date
      discount_amount: number
      voucher_code: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking_items<T extends Booking$booking_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$booking_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    showtime<T extends ShowtimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowtimeDefaultArgs<ExtArgs>>): Prisma__ShowtimeClient<$Result.GetResult<Prisma.$ShowtimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends Booking$voucherArgs<ExtArgs> = {}>(args?: Subset<T, Booking$voucherArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    food_items<T extends Booking$food_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$food_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly user_id: FieldRef<"Booking", 'String'>
    readonly showtime_id: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly total_amount: FieldRef<"Booking", 'Int'>
    readonly qr_code: FieldRef<"Booking", 'String'>
    readonly qr_image_url: FieldRef<"Booking", 'String'>
    readonly paid_at: FieldRef<"Booking", 'DateTime'>
    readonly created_at: FieldRef<"Booking", 'DateTime'>
    readonly expires_at: FieldRef<"Booking", 'DateTime'>
    readonly discount_amount: FieldRef<"Booking", 'Int'>
    readonly voucher_code: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.booking_items
   */
  export type Booking$booking_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    where?: BookingItemWhereInput
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    cursor?: BookingItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * Booking.voucher
   */
  export type Booking$voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
  }

  /**
   * Booking.food_items
   */
  export type Booking$food_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    cursor?: FoodItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingItem
   */

  export type AggregateBookingItem = {
    _count: BookingItemCountAggregateOutputType | null
    _avg: BookingItemAvgAggregateOutputType | null
    _sum: BookingItemSumAggregateOutputType | null
    _min: BookingItemMinAggregateOutputType | null
    _max: BookingItemMaxAggregateOutputType | null
  }

  export type BookingItemAvgAggregateOutputType = {
    price: number | null
  }

  export type BookingItemSumAggregateOutputType = {
    price: number | null
  }

  export type BookingItemMinAggregateOutputType = {
    id: string | null
    booking_id: string | null
    seat_id: string | null
    price: number | null
    showtime_id: string | null
  }

  export type BookingItemMaxAggregateOutputType = {
    id: string | null
    booking_id: string | null
    seat_id: string | null
    price: number | null
    showtime_id: string | null
  }

  export type BookingItemCountAggregateOutputType = {
    id: number
    booking_id: number
    seat_id: number
    price: number
    showtime_id: number
    _all: number
  }


  export type BookingItemAvgAggregateInputType = {
    price?: true
  }

  export type BookingItemSumAggregateInputType = {
    price?: true
  }

  export type BookingItemMinAggregateInputType = {
    id?: true
    booking_id?: true
    seat_id?: true
    price?: true
    showtime_id?: true
  }

  export type BookingItemMaxAggregateInputType = {
    id?: true
    booking_id?: true
    seat_id?: true
    price?: true
    showtime_id?: true
  }

  export type BookingItemCountAggregateInputType = {
    id?: true
    booking_id?: true
    seat_id?: true
    price?: true
    showtime_id?: true
    _all?: true
  }

  export type BookingItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingItem to aggregate.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingItems
    **/
    _count?: true | BookingItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingItemMaxAggregateInputType
  }

  export type GetBookingItemAggregateType<T extends BookingItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingItem[P]>
      : GetScalarType<T[P], AggregateBookingItem[P]>
  }




  export type BookingItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingItemWhereInput
    orderBy?: BookingItemOrderByWithAggregationInput | BookingItemOrderByWithAggregationInput[]
    by: BookingItemScalarFieldEnum[] | BookingItemScalarFieldEnum
    having?: BookingItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingItemCountAggregateInputType | true
    _avg?: BookingItemAvgAggregateInputType
    _sum?: BookingItemSumAggregateInputType
    _min?: BookingItemMinAggregateInputType
    _max?: BookingItemMaxAggregateInputType
  }

  export type BookingItemGroupByOutputType = {
    id: string
    booking_id: string
    seat_id: string
    price: number
    showtime_id: string
    _count: BookingItemCountAggregateOutputType | null
    _avg: BookingItemAvgAggregateOutputType | null
    _sum: BookingItemSumAggregateOutputType | null
    _min: BookingItemMinAggregateOutputType | null
    _max: BookingItemMaxAggregateOutputType | null
  }

  type GetBookingItemGroupByPayload<T extends BookingItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingItemGroupByOutputType[P]>
            : GetScalarType<T[P], BookingItemGroupByOutputType[P]>
        }
      >
    >


  export type BookingItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    seat_id?: boolean
    price?: boolean
    showtime_id?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingItem"]>



  export type BookingItemSelectScalar = {
    id?: boolean
    booking_id?: boolean
    seat_id?: boolean
    price?: boolean
    showtime_id?: boolean
  }

  export type BookingItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "seat_id" | "price" | "showtime_id", ExtArgs["result"]["bookingItem"]>
  export type BookingItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }

  export type $BookingItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingItem"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_id: string
      seat_id: string
      price: number
      showtime_id: string
    }, ExtArgs["result"]["bookingItem"]>
    composites: {}
  }

  type BookingItemGetPayload<S extends boolean | null | undefined | BookingItemDefaultArgs> = $Result.GetResult<Prisma.$BookingItemPayload, S>

  type BookingItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingItemCountAggregateInputType | true
    }

  export interface BookingItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingItem'], meta: { name: 'BookingItem' } }
    /**
     * Find zero or one BookingItem that matches the filter.
     * @param {BookingItemFindUniqueArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingItemFindUniqueArgs>(args: SelectSubset<T, BookingItemFindUniqueArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingItemFindUniqueOrThrowArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindFirstArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingItemFindFirstArgs>(args?: SelectSubset<T, BookingItemFindFirstArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindFirstOrThrowArgs} args - Arguments to find a BookingItem
     * @example
     * // Get one BookingItem
     * const bookingItem = await prisma.bookingItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingItems
     * const bookingItems = await prisma.bookingItem.findMany()
     * 
     * // Get first 10 BookingItems
     * const bookingItems = await prisma.bookingItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingItemWithIdOnly = await prisma.bookingItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingItemFindManyArgs>(args?: SelectSubset<T, BookingItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingItem.
     * @param {BookingItemCreateArgs} args - Arguments to create a BookingItem.
     * @example
     * // Create one BookingItem
     * const BookingItem = await prisma.bookingItem.create({
     *   data: {
     *     // ... data to create a BookingItem
     *   }
     * })
     * 
     */
    create<T extends BookingItemCreateArgs>(args: SelectSubset<T, BookingItemCreateArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingItems.
     * @param {BookingItemCreateManyArgs} args - Arguments to create many BookingItems.
     * @example
     * // Create many BookingItems
     * const bookingItem = await prisma.bookingItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingItemCreateManyArgs>(args?: SelectSubset<T, BookingItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingItem.
     * @param {BookingItemDeleteArgs} args - Arguments to delete one BookingItem.
     * @example
     * // Delete one BookingItem
     * const BookingItem = await prisma.bookingItem.delete({
     *   where: {
     *     // ... filter to delete one BookingItem
     *   }
     * })
     * 
     */
    delete<T extends BookingItemDeleteArgs>(args: SelectSubset<T, BookingItemDeleteArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingItem.
     * @param {BookingItemUpdateArgs} args - Arguments to update one BookingItem.
     * @example
     * // Update one BookingItem
     * const bookingItem = await prisma.bookingItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingItemUpdateArgs>(args: SelectSubset<T, BookingItemUpdateArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingItems.
     * @param {BookingItemDeleteManyArgs} args - Arguments to filter BookingItems to delete.
     * @example
     * // Delete a few BookingItems
     * const { count } = await prisma.bookingItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingItemDeleteManyArgs>(args?: SelectSubset<T, BookingItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingItems
     * const bookingItem = await prisma.bookingItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingItemUpdateManyArgs>(args: SelectSubset<T, BookingItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingItem.
     * @param {BookingItemUpsertArgs} args - Arguments to update or create a BookingItem.
     * @example
     * // Update or create a BookingItem
     * const bookingItem = await prisma.bookingItem.upsert({
     *   create: {
     *     // ... data to create a BookingItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingItem we want to update
     *   }
     * })
     */
    upsert<T extends BookingItemUpsertArgs>(args: SelectSubset<T, BookingItemUpsertArgs<ExtArgs>>): Prisma__BookingItemClient<$Result.GetResult<Prisma.$BookingItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemCountArgs} args - Arguments to filter BookingItems to count.
     * @example
     * // Count the number of BookingItems
     * const count = await prisma.bookingItem.count({
     *   where: {
     *     // ... the filter for the BookingItems we want to count
     *   }
     * })
    **/
    count<T extends BookingItemCountArgs>(
      args?: Subset<T, BookingItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingItemAggregateArgs>(args: Subset<T, BookingItemAggregateArgs>): Prisma.PrismaPromise<GetBookingItemAggregateType<T>>

    /**
     * Group by BookingItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingItemGroupByArgs} args - Group by arguments.
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
      T extends BookingItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingItemGroupByArgs['orderBy'] }
        : { orderBy?: BookingItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingItem model
   */
  readonly fields: BookingItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends SeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatDefaultArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingItem model
   */
  interface BookingItemFieldRefs {
    readonly id: FieldRef<"BookingItem", 'String'>
    readonly booking_id: FieldRef<"BookingItem", 'String'>
    readonly seat_id: FieldRef<"BookingItem", 'String'>
    readonly price: FieldRef<"BookingItem", 'Int'>
    readonly showtime_id: FieldRef<"BookingItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingItem findUnique
   */
  export type BookingItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem findUniqueOrThrow
   */
  export type BookingItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem findFirst
   */
  export type BookingItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingItems.
     */
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * BookingItem findFirstOrThrow
   */
  export type BookingItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItem to fetch.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingItems.
     */
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * BookingItem findMany
   */
  export type BookingItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter, which BookingItems to fetch.
     */
    where?: BookingItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingItems to fetch.
     */
    orderBy?: BookingItemOrderByWithRelationInput | BookingItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingItems.
     */
    cursor?: BookingItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingItems.
     */
    skip?: number
    distinct?: BookingItemScalarFieldEnum | BookingItemScalarFieldEnum[]
  }

  /**
   * BookingItem create
   */
  export type BookingItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingItem.
     */
    data: XOR<BookingItemCreateInput, BookingItemUncheckedCreateInput>
  }

  /**
   * BookingItem createMany
   */
  export type BookingItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingItems.
     */
    data: BookingItemCreateManyInput | BookingItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingItem update
   */
  export type BookingItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingItem.
     */
    data: XOR<BookingItemUpdateInput, BookingItemUncheckedUpdateInput>
    /**
     * Choose, which BookingItem to update.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem updateMany
   */
  export type BookingItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingItems.
     */
    data: XOR<BookingItemUpdateManyMutationInput, BookingItemUncheckedUpdateManyInput>
    /**
     * Filter which BookingItems to update
     */
    where?: BookingItemWhereInput
    /**
     * Limit how many BookingItems to update.
     */
    limit?: number
  }

  /**
   * BookingItem upsert
   */
  export type BookingItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingItem to update in case it exists.
     */
    where: BookingItemWhereUniqueInput
    /**
     * In case the BookingItem found by the `where` argument doesn't exist, create a new BookingItem with this data.
     */
    create: XOR<BookingItemCreateInput, BookingItemUncheckedCreateInput>
    /**
     * In case the BookingItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingItemUpdateInput, BookingItemUncheckedUpdateInput>
  }

  /**
   * BookingItem delete
   */
  export type BookingItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
    /**
     * Filter which BookingItem to delete.
     */
    where: BookingItemWhereUniqueInput
  }

  /**
   * BookingItem deleteMany
   */
  export type BookingItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingItems to delete
     */
    where?: BookingItemWhereInput
    /**
     * Limit how many BookingItems to delete.
     */
    limit?: number
  }

  /**
   * BookingItem without action
   */
  export type BookingItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingItem
     */
    select?: BookingItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingItem
     */
    omit?: BookingItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    booking_id: string | null
    method: $Enums.PaymentMethod | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    transaction_id: string | null
    vnpay_data: string | null
    created_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    booking_id: string | null
    method: $Enums.PaymentMethod | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    transaction_id: string | null
    vnpay_data: string | null
    created_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    booking_id: number
    method: number
    amount: number
    status: number
    transaction_id: number
    vnpay_data: number
    created_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    booking_id?: true
    method?: true
    amount?: true
    status?: true
    transaction_id?: true
    vnpay_data?: true
    created_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    booking_id?: true
    method?: true
    amount?: true
    status?: true
    transaction_id?: true
    vnpay_data?: true
    created_at?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    booking_id?: true
    method?: true
    amount?: true
    status?: true
    transaction_id?: true
    vnpay_data?: true
    created_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    booking_id: string
    method: $Enums.PaymentMethod
    amount: number
    status: $Enums.PaymentStatus
    transaction_id: string | null
    vnpay_data: string | null
    created_at: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    transaction_id?: boolean
    vnpay_data?: boolean
    created_at?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    booking_id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    transaction_id?: boolean
    vnpay_data?: boolean
    created_at?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "method" | "amount" | "status" | "transaction_id" | "vnpay_data" | "created_at", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_id: string
      method: $Enums.PaymentMethod
      amount: number
      status: $Enums.PaymentStatus
      transaction_id: string | null
      vnpay_data: string | null
      created_at: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly booking_id: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly transaction_id: FieldRef<"Payment", 'String'>
    readonly vnpay_data: FieldRef<"Payment", 'String'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model FoodCombo
   */

  export type AggregateFoodCombo = {
    _count: FoodComboCountAggregateOutputType | null
    _avg: FoodComboAvgAggregateOutputType | null
    _sum: FoodComboSumAggregateOutputType | null
    _min: FoodComboMinAggregateOutputType | null
    _max: FoodComboMaxAggregateOutputType | null
  }

  export type FoodComboAvgAggregateOutputType = {
    price: number | null
  }

  export type FoodComboSumAggregateOutputType = {
    price: number | null
  }

  export type FoodComboMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    image_url: string | null
  }

  export type FoodComboMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    image_url: string | null
  }

  export type FoodComboCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    image_url: number
    _all: number
  }


  export type FoodComboAvgAggregateInputType = {
    price?: true
  }

  export type FoodComboSumAggregateInputType = {
    price?: true
  }

  export type FoodComboMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
  }

  export type FoodComboMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
  }

  export type FoodComboCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    image_url?: true
    _all?: true
  }

  export type FoodComboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCombo to aggregate.
     */
    where?: FoodComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCombos to fetch.
     */
    orderBy?: FoodComboOrderByWithRelationInput | FoodComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodCombos
    **/
    _count?: true | FoodComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodComboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodComboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodComboMaxAggregateInputType
  }

  export type GetFoodComboAggregateType<T extends FoodComboAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodCombo[P]>
      : GetScalarType<T[P], AggregateFoodCombo[P]>
  }




  export type FoodComboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodComboWhereInput
    orderBy?: FoodComboOrderByWithAggregationInput | FoodComboOrderByWithAggregationInput[]
    by: FoodComboScalarFieldEnum[] | FoodComboScalarFieldEnum
    having?: FoodComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodComboCountAggregateInputType | true
    _avg?: FoodComboAvgAggregateInputType
    _sum?: FoodComboSumAggregateInputType
    _min?: FoodComboMinAggregateInputType
    _max?: FoodComboMaxAggregateInputType
  }

  export type FoodComboGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    image_url: string
    _count: FoodComboCountAggregateOutputType | null
    _avg: FoodComboAvgAggregateOutputType | null
    _sum: FoodComboSumAggregateOutputType | null
    _min: FoodComboMinAggregateOutputType | null
    _max: FoodComboMaxAggregateOutputType | null
  }

  type GetFoodComboGroupByPayload<T extends FoodComboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodComboGroupByOutputType[P]>
            : GetScalarType<T[P], FoodComboGroupByOutputType[P]>
        }
      >
    >


  export type FoodComboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
    food_items?: boolean | FoodCombo$food_itemsArgs<ExtArgs>
    _count?: boolean | FoodComboCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodCombo"]>



  export type FoodComboSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    image_url?: boolean
  }

  export type FoodComboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "image_url", ExtArgs["result"]["foodCombo"]>
  export type FoodComboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_items?: boolean | FoodCombo$food_itemsArgs<ExtArgs>
    _count?: boolean | FoodComboCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodComboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodCombo"
    objects: {
      food_items: Prisma.$FoodItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      image_url: string
    }, ExtArgs["result"]["foodCombo"]>
    composites: {}
  }

  type FoodComboGetPayload<S extends boolean | null | undefined | FoodComboDefaultArgs> = $Result.GetResult<Prisma.$FoodComboPayload, S>

  type FoodComboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodComboCountAggregateInputType | true
    }

  export interface FoodComboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodCombo'], meta: { name: 'FoodCombo' } }
    /**
     * Find zero or one FoodCombo that matches the filter.
     * @param {FoodComboFindUniqueArgs} args - Arguments to find a FoodCombo
     * @example
     * // Get one FoodCombo
     * const foodCombo = await prisma.foodCombo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodComboFindUniqueArgs>(args: SelectSubset<T, FoodComboFindUniqueArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodCombo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodComboFindUniqueOrThrowArgs} args - Arguments to find a FoodCombo
     * @example
     * // Get one FoodCombo
     * const foodCombo = await prisma.foodCombo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodComboFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCombo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodComboFindFirstArgs} args - Arguments to find a FoodCombo
     * @example
     * // Get one FoodCombo
     * const foodCombo = await prisma.foodCombo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodComboFindFirstArgs>(args?: SelectSubset<T, FoodComboFindFirstArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCombo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodComboFindFirstOrThrowArgs} args - Arguments to find a FoodCombo
     * @example
     * // Get one FoodCombo
     * const foodCombo = await prisma.foodCombo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodComboFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodComboFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodComboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodCombos
     * const foodCombos = await prisma.foodCombo.findMany()
     * 
     * // Get first 10 FoodCombos
     * const foodCombos = await prisma.foodCombo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodComboWithIdOnly = await prisma.foodCombo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodComboFindManyArgs>(args?: SelectSubset<T, FoodComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodCombo.
     * @param {FoodComboCreateArgs} args - Arguments to create a FoodCombo.
     * @example
     * // Create one FoodCombo
     * const FoodCombo = await prisma.foodCombo.create({
     *   data: {
     *     // ... data to create a FoodCombo
     *   }
     * })
     * 
     */
    create<T extends FoodComboCreateArgs>(args: SelectSubset<T, FoodComboCreateArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodCombos.
     * @param {FoodComboCreateManyArgs} args - Arguments to create many FoodCombos.
     * @example
     * // Create many FoodCombos
     * const foodCombo = await prisma.foodCombo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodComboCreateManyArgs>(args?: SelectSubset<T, FoodComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodCombo.
     * @param {FoodComboDeleteArgs} args - Arguments to delete one FoodCombo.
     * @example
     * // Delete one FoodCombo
     * const FoodCombo = await prisma.foodCombo.delete({
     *   where: {
     *     // ... filter to delete one FoodCombo
     *   }
     * })
     * 
     */
    delete<T extends FoodComboDeleteArgs>(args: SelectSubset<T, FoodComboDeleteArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodCombo.
     * @param {FoodComboUpdateArgs} args - Arguments to update one FoodCombo.
     * @example
     * // Update one FoodCombo
     * const foodCombo = await prisma.foodCombo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodComboUpdateArgs>(args: SelectSubset<T, FoodComboUpdateArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodCombos.
     * @param {FoodComboDeleteManyArgs} args - Arguments to filter FoodCombos to delete.
     * @example
     * // Delete a few FoodCombos
     * const { count } = await prisma.foodCombo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodComboDeleteManyArgs>(args?: SelectSubset<T, FoodComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodCombos
     * const foodCombo = await prisma.foodCombo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodComboUpdateManyArgs>(args: SelectSubset<T, FoodComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodCombo.
     * @param {FoodComboUpsertArgs} args - Arguments to update or create a FoodCombo.
     * @example
     * // Update or create a FoodCombo
     * const foodCombo = await prisma.foodCombo.upsert({
     *   create: {
     *     // ... data to create a FoodCombo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodCombo we want to update
     *   }
     * })
     */
    upsert<T extends FoodComboUpsertArgs>(args: SelectSubset<T, FoodComboUpsertArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodComboCountArgs} args - Arguments to filter FoodCombos to count.
     * @example
     * // Count the number of FoodCombos
     * const count = await prisma.foodCombo.count({
     *   where: {
     *     // ... the filter for the FoodCombos we want to count
     *   }
     * })
    **/
    count<T extends FoodComboCountArgs>(
      args?: Subset<T, FoodComboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodComboAggregateArgs>(args: Subset<T, FoodComboAggregateArgs>): Prisma.PrismaPromise<GetFoodComboAggregateType<T>>

    /**
     * Group by FoodCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodComboGroupByArgs} args - Group by arguments.
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
      T extends FoodComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodComboGroupByArgs['orderBy'] }
        : { orderBy?: FoodComboGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodCombo model
   */
  readonly fields: FoodComboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodCombo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodComboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food_items<T extends FoodCombo$food_itemsArgs<ExtArgs> = {}>(args?: Subset<T, FoodCombo$food_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FoodCombo model
   */
  interface FoodComboFieldRefs {
    readonly id: FieldRef<"FoodCombo", 'String'>
    readonly name: FieldRef<"FoodCombo", 'String'>
    readonly description: FieldRef<"FoodCombo", 'String'>
    readonly price: FieldRef<"FoodCombo", 'Int'>
    readonly image_url: FieldRef<"FoodCombo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodCombo findUnique
   */
  export type FoodComboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * Filter, which FoodCombo to fetch.
     */
    where: FoodComboWhereUniqueInput
  }

  /**
   * FoodCombo findUniqueOrThrow
   */
  export type FoodComboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * Filter, which FoodCombo to fetch.
     */
    where: FoodComboWhereUniqueInput
  }

  /**
   * FoodCombo findFirst
   */
  export type FoodComboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * Filter, which FoodCombo to fetch.
     */
    where?: FoodComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCombos to fetch.
     */
    orderBy?: FoodComboOrderByWithRelationInput | FoodComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCombos.
     */
    cursor?: FoodComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCombos.
     */
    distinct?: FoodComboScalarFieldEnum | FoodComboScalarFieldEnum[]
  }

  /**
   * FoodCombo findFirstOrThrow
   */
  export type FoodComboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * Filter, which FoodCombo to fetch.
     */
    where?: FoodComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCombos to fetch.
     */
    orderBy?: FoodComboOrderByWithRelationInput | FoodComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCombos.
     */
    cursor?: FoodComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCombos.
     */
    distinct?: FoodComboScalarFieldEnum | FoodComboScalarFieldEnum[]
  }

  /**
   * FoodCombo findMany
   */
  export type FoodComboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * Filter, which FoodCombos to fetch.
     */
    where?: FoodComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCombos to fetch.
     */
    orderBy?: FoodComboOrderByWithRelationInput | FoodComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodCombos.
     */
    cursor?: FoodComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCombos.
     */
    skip?: number
    distinct?: FoodComboScalarFieldEnum | FoodComboScalarFieldEnum[]
  }

  /**
   * FoodCombo create
   */
  export type FoodComboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodCombo.
     */
    data: XOR<FoodComboCreateInput, FoodComboUncheckedCreateInput>
  }

  /**
   * FoodCombo createMany
   */
  export type FoodComboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodCombos.
     */
    data: FoodComboCreateManyInput | FoodComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodCombo update
   */
  export type FoodComboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodCombo.
     */
    data: XOR<FoodComboUpdateInput, FoodComboUncheckedUpdateInput>
    /**
     * Choose, which FoodCombo to update.
     */
    where: FoodComboWhereUniqueInput
  }

  /**
   * FoodCombo updateMany
   */
  export type FoodComboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodCombos.
     */
    data: XOR<FoodComboUpdateManyMutationInput, FoodComboUncheckedUpdateManyInput>
    /**
     * Filter which FoodCombos to update
     */
    where?: FoodComboWhereInput
    /**
     * Limit how many FoodCombos to update.
     */
    limit?: number
  }

  /**
   * FoodCombo upsert
   */
  export type FoodComboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodCombo to update in case it exists.
     */
    where: FoodComboWhereUniqueInput
    /**
     * In case the FoodCombo found by the `where` argument doesn't exist, create a new FoodCombo with this data.
     */
    create: XOR<FoodComboCreateInput, FoodComboUncheckedCreateInput>
    /**
     * In case the FoodCombo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodComboUpdateInput, FoodComboUncheckedUpdateInput>
  }

  /**
   * FoodCombo delete
   */
  export type FoodComboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
    /**
     * Filter which FoodCombo to delete.
     */
    where: FoodComboWhereUniqueInput
  }

  /**
   * FoodCombo deleteMany
   */
  export type FoodComboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCombos to delete
     */
    where?: FoodComboWhereInput
    /**
     * Limit how many FoodCombos to delete.
     */
    limit?: number
  }

  /**
   * FoodCombo.food_items
   */
  export type FoodCombo$food_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    cursor?: FoodItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodCombo without action
   */
  export type FoodComboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCombo
     */
    select?: FoodComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCombo
     */
    omit?: FoodComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodComboInclude<ExtArgs> | null
  }


  /**
   * Model FoodItem
   */

  export type AggregateFoodItem = {
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  export type FoodItemAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type FoodItemSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type FoodItemMinAggregateOutputType = {
    id: string | null
    booking_id: string | null
    combo_id: string | null
    quantity: number | null
    price: number | null
  }

  export type FoodItemMaxAggregateOutputType = {
    id: string | null
    booking_id: string | null
    combo_id: string | null
    quantity: number | null
    price: number | null
  }

  export type FoodItemCountAggregateOutputType = {
    id: number
    booking_id: number
    combo_id: number
    quantity: number
    price: number
    _all: number
  }


  export type FoodItemAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type FoodItemSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type FoodItemMinAggregateInputType = {
    id?: true
    booking_id?: true
    combo_id?: true
    quantity?: true
    price?: true
  }

  export type FoodItemMaxAggregateInputType = {
    id?: true
    booking_id?: true
    combo_id?: true
    quantity?: true
    price?: true
  }

  export type FoodItemCountAggregateInputType = {
    id?: true
    booking_id?: true
    combo_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type FoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItem to aggregate.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodItems
    **/
    _count?: true | FoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodItemMaxAggregateInputType
  }

  export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodItem[P]>
      : GetScalarType<T[P], AggregateFoodItem[P]>
  }




  export type FoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithAggregationInput | FoodItemOrderByWithAggregationInput[]
    by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum
    having?: FoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodItemCountAggregateInputType | true
    _avg?: FoodItemAvgAggregateInputType
    _sum?: FoodItemSumAggregateInputType
    _min?: FoodItemMinAggregateInputType
    _max?: FoodItemMaxAggregateInputType
  }

  export type FoodItemGroupByOutputType = {
    id: string
    booking_id: string
    combo_id: string
    quantity: number
    price: number
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_id?: boolean
    combo_id?: boolean
    quantity?: boolean
    price?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    combo?: boolean | FoodComboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodItem"]>



  export type FoodItemSelectScalar = {
    id?: boolean
    booking_id?: boolean
    combo_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type FoodItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_id" | "combo_id" | "quantity" | "price", ExtArgs["result"]["foodItem"]>
  export type FoodItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    combo?: boolean | FoodComboDefaultArgs<ExtArgs>
  }

  export type $FoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodItem"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      combo: Prisma.$FoodComboPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_id: string
      combo_id: string
      quantity: number
      price: number
    }, ExtArgs["result"]["foodItem"]>
    composites: {}
  }

  type FoodItemGetPayload<S extends boolean | null | undefined | FoodItemDefaultArgs> = $Result.GetResult<Prisma.$FoodItemPayload, S>

  type FoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodItemCountAggregateInputType | true
    }

  export interface FoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodItem'], meta: { name: 'FoodItem' } }
    /**
     * Find zero or one FoodItem that matches the filter.
     * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodItemFindUniqueArgs>(args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodItemFindFirstArgs>(args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * 
     * // Get first 10 FoodItems
     * const foodItems = await prisma.foodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodItemFindManyArgs>(args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodItem.
     * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
     * @example
     * // Create one FoodItem
     * const FoodItem = await prisma.foodItem.create({
     *   data: {
     *     // ... data to create a FoodItem
     *   }
     * })
     * 
     */
    create<T extends FoodItemCreateArgs>(args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodItems.
     * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodItemCreateManyArgs>(args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodItem.
     * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
     * @example
     * // Delete one FoodItem
     * const FoodItem = await prisma.foodItem.delete({
     *   where: {
     *     // ... filter to delete one FoodItem
     *   }
     * })
     * 
     */
    delete<T extends FoodItemDeleteArgs>(args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodItem.
     * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
     * @example
     * // Update one FoodItem
     * const foodItem = await prisma.foodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodItemUpdateArgs>(args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodItems.
     * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
     * @example
     * // Delete a few FoodItems
     * const { count } = await prisma.foodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodItemDeleteManyArgs>(args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodItemUpdateManyArgs>(args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodItem.
     * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
     * @example
     * // Update or create a FoodItem
     * const foodItem = await prisma.foodItem.upsert({
     *   create: {
     *     // ... data to create a FoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodItemUpsertArgs>(args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
     * @example
     * // Count the number of FoodItems
     * const count = await prisma.foodItem.count({
     *   where: {
     *     // ... the filter for the FoodItems we want to count
     *   }
     * })
    **/
    count<T extends FoodItemCountArgs>(
      args?: Subset<T, FoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodItemAggregateArgs>(args: Subset<T, FoodItemAggregateArgs>): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>

    /**
     * Group by FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemGroupByArgs} args - Group by arguments.
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
      T extends FoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodItem model
   */
  readonly fields: FoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    combo<T extends FoodComboDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodComboDefaultArgs<ExtArgs>>): Prisma__FoodComboClient<$Result.GetResult<Prisma.$FoodComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FoodItem model
   */
  interface FoodItemFieldRefs {
    readonly id: FieldRef<"FoodItem", 'String'>
    readonly booking_id: FieldRef<"FoodItem", 'String'>
    readonly combo_id: FieldRef<"FoodItem", 'String'>
    readonly quantity: FieldRef<"FoodItem", 'Int'>
    readonly price: FieldRef<"FoodItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FoodItem findUnique
   */
  export type FoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findUniqueOrThrow
   */
  export type FoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findFirst
   */
  export type FoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findFirstOrThrow
   */
  export type FoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findMany
   */
  export type FoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItems to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem create
   */
  export type FoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodItem.
     */
    data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
  }

  /**
   * FoodItem createMany
   */
  export type FoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem update
   */
  export type FoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodItem.
     */
    data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
    /**
     * Choose, which FoodItem to update.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem updateMany
   */
  export type FoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem upsert
   */
  export type FoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodItem to update in case it exists.
     */
    where: FoodItemWhereUniqueInput
    /**
     * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
     */
    create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
    /**
     * In case the FoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
  }

  /**
   * FoodItem delete
   */
  export type FoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter which FoodItem to delete.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem deleteMany
   */
  export type FoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItems to delete
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to delete.
     */
    limit?: number
  }

  /**
   * FoodItem without action
   */
  export type FoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    discount_value: number | null
    min_amount: number | null
    max_discount: number | null
    usage_limit: number | null
    used_count: number | null
  }

  export type VoucherSumAggregateOutputType = {
    discount_value: number | null
    min_amount: number | null
    max_discount: number | null
    usage_limit: number | null
    used_count: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: string | null
    code: string | null
    discount_type: $Enums.DiscountType | null
    discount_value: number | null
    min_amount: number | null
    max_discount: number | null
    usage_limit: number | null
    used_count: number | null
    expires_at: Date | null
    created_at: Date | null
    description: string | null
    is_active: boolean | null
    source: string | null
    owner_user_id: string | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: string | null
    code: string | null
    discount_type: $Enums.DiscountType | null
    discount_value: number | null
    min_amount: number | null
    max_discount: number | null
    usage_limit: number | null
    used_count: number | null
    expires_at: Date | null
    created_at: Date | null
    description: string | null
    is_active: boolean | null
    source: string | null
    owner_user_id: string | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    code: number
    discount_type: number
    discount_value: number
    min_amount: number
    max_discount: number
    usage_limit: number
    used_count: number
    expires_at: number
    created_at: number
    description: number
    is_active: number
    source: number
    owner_user_id: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    discount_value?: true
    min_amount?: true
    max_discount?: true
    usage_limit?: true
    used_count?: true
  }

  export type VoucherSumAggregateInputType = {
    discount_value?: true
    min_amount?: true
    max_discount?: true
    usage_limit?: true
    used_count?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    code?: true
    discount_type?: true
    discount_value?: true
    min_amount?: true
    max_discount?: true
    usage_limit?: true
    used_count?: true
    expires_at?: true
    created_at?: true
    description?: true
    is_active?: true
    source?: true
    owner_user_id?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    code?: true
    discount_type?: true
    discount_value?: true
    min_amount?: true
    max_discount?: true
    usage_limit?: true
    used_count?: true
    expires_at?: true
    created_at?: true
    description?: true
    is_active?: true
    source?: true
    owner_user_id?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    code?: true
    discount_type?: true
    discount_value?: true
    min_amount?: true
    max_discount?: true
    usage_limit?: true
    used_count?: true
    expires_at?: true
    created_at?: true
    description?: true
    is_active?: true
    source?: true
    owner_user_id?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount: number
    max_discount: number | null
    usage_limit: number
    used_count: number
    expires_at: Date
    created_at: Date
    description: string | null
    is_active: boolean
    source: string
    owner_user_id: string | null
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount_type?: boolean
    discount_value?: boolean
    min_amount?: boolean
    max_discount?: boolean
    usage_limit?: boolean
    used_count?: boolean
    expires_at?: boolean
    created_at?: boolean
    description?: boolean
    is_active?: boolean
    source?: boolean
    owner_user_id?: boolean
    bookings?: boolean | Voucher$bookingsArgs<ExtArgs>
    point_redemptions?: boolean | Voucher$point_redemptionsArgs<ExtArgs>
    owner?: boolean | Voucher$ownerArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>



  export type VoucherSelectScalar = {
    id?: boolean
    code?: boolean
    discount_type?: boolean
    discount_value?: boolean
    min_amount?: boolean
    max_discount?: boolean
    usage_limit?: boolean
    used_count?: boolean
    expires_at?: boolean
    created_at?: boolean
    description?: boolean
    is_active?: boolean
    source?: boolean
    owner_user_id?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "discount_type" | "discount_value" | "min_amount" | "max_discount" | "usage_limit" | "used_count" | "expires_at" | "created_at" | "description" | "is_active" | "source" | "owner_user_id", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Voucher$bookingsArgs<ExtArgs>
    point_redemptions?: boolean | Voucher$point_redemptionsArgs<ExtArgs>
    owner?: boolean | Voucher$ownerArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      point_redemptions: Prisma.$PointRedemptionPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      discount_type: $Enums.DiscountType
      discount_value: number
      min_amount: number
      max_discount: number | null
      usage_limit: number
      used_count: number
      expires_at: Date
      created_at: Date
      description: string | null
      is_active: boolean
      source: string
      owner_user_id: string | null
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Voucher$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    point_redemptions<T extends Voucher$point_redemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$point_redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends Voucher$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'String'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly discount_type: FieldRef<"Voucher", 'DiscountType'>
    readonly discount_value: FieldRef<"Voucher", 'Int'>
    readonly min_amount: FieldRef<"Voucher", 'Int'>
    readonly max_discount: FieldRef<"Voucher", 'Int'>
    readonly usage_limit: FieldRef<"Voucher", 'Int'>
    readonly used_count: FieldRef<"Voucher", 'Int'>
    readonly expires_at: FieldRef<"Voucher", 'DateTime'>
    readonly created_at: FieldRef<"Voucher", 'DateTime'>
    readonly description: FieldRef<"Voucher", 'String'>
    readonly is_active: FieldRef<"Voucher", 'Boolean'>
    readonly source: FieldRef<"Voucher", 'String'>
    readonly owner_user_id: FieldRef<"Voucher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.bookings
   */
  export type Voucher$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Voucher.point_redemptions
   */
  export type Voucher$point_redemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    where?: PointRedemptionWhereInput
    orderBy?: PointRedemptionOrderByWithRelationInput | PointRedemptionOrderByWithRelationInput[]
    cursor?: PointRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointRedemptionScalarFieldEnum | PointRedemptionScalarFieldEnum[]
  }

  /**
   * Voucher.owner
   */
  export type Voucher$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model PointRedemption
   */

  export type AggregatePointRedemption = {
    _count: PointRedemptionCountAggregateOutputType | null
    _avg: PointRedemptionAvgAggregateOutputType | null
    _sum: PointRedemptionSumAggregateOutputType | null
    _min: PointRedemptionMinAggregateOutputType | null
    _max: PointRedemptionMaxAggregateOutputType | null
  }

  export type PointRedemptionAvgAggregateOutputType = {
    points_used: number | null
  }

  export type PointRedemptionSumAggregateOutputType = {
    points_used: number | null
  }

  export type PointRedemptionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    points_used: number | null
    voucher_id: string | null
    created_at: Date | null
  }

  export type PointRedemptionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    points_used: number | null
    voucher_id: string | null
    created_at: Date | null
  }

  export type PointRedemptionCountAggregateOutputType = {
    id: number
    user_id: number
    points_used: number
    voucher_id: number
    created_at: number
    _all: number
  }


  export type PointRedemptionAvgAggregateInputType = {
    points_used?: true
  }

  export type PointRedemptionSumAggregateInputType = {
    points_used?: true
  }

  export type PointRedemptionMinAggregateInputType = {
    id?: true
    user_id?: true
    points_used?: true
    voucher_id?: true
    created_at?: true
  }

  export type PointRedemptionMaxAggregateInputType = {
    id?: true
    user_id?: true
    points_used?: true
    voucher_id?: true
    created_at?: true
  }

  export type PointRedemptionCountAggregateInputType = {
    id?: true
    user_id?: true
    points_used?: true
    voucher_id?: true
    created_at?: true
    _all?: true
  }

  export type PointRedemptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointRedemption to aggregate.
     */
    where?: PointRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRedemptions to fetch.
     */
    orderBy?: PointRedemptionOrderByWithRelationInput | PointRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointRedemptions
    **/
    _count?: true | PointRedemptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointRedemptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointRedemptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointRedemptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointRedemptionMaxAggregateInputType
  }

  export type GetPointRedemptionAggregateType<T extends PointRedemptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePointRedemption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointRedemption[P]>
      : GetScalarType<T[P], AggregatePointRedemption[P]>
  }




  export type PointRedemptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointRedemptionWhereInput
    orderBy?: PointRedemptionOrderByWithAggregationInput | PointRedemptionOrderByWithAggregationInput[]
    by: PointRedemptionScalarFieldEnum[] | PointRedemptionScalarFieldEnum
    having?: PointRedemptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointRedemptionCountAggregateInputType | true
    _avg?: PointRedemptionAvgAggregateInputType
    _sum?: PointRedemptionSumAggregateInputType
    _min?: PointRedemptionMinAggregateInputType
    _max?: PointRedemptionMaxAggregateInputType
  }

  export type PointRedemptionGroupByOutputType = {
    id: string
    user_id: string
    points_used: number
    voucher_id: string
    created_at: Date
    _count: PointRedemptionCountAggregateOutputType | null
    _avg: PointRedemptionAvgAggregateOutputType | null
    _sum: PointRedemptionSumAggregateOutputType | null
    _min: PointRedemptionMinAggregateOutputType | null
    _max: PointRedemptionMaxAggregateOutputType | null
  }

  type GetPointRedemptionGroupByPayload<T extends PointRedemptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointRedemptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointRedemptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointRedemptionGroupByOutputType[P]>
            : GetScalarType<T[P], PointRedemptionGroupByOutputType[P]>
        }
      >
    >


  export type PointRedemptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    points_used?: boolean
    voucher_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointRedemption"]>



  export type PointRedemptionSelectScalar = {
    id?: boolean
    user_id?: boolean
    points_used?: boolean
    voucher_id?: boolean
    created_at?: boolean
  }

  export type PointRedemptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "points_used" | "voucher_id" | "created_at", ExtArgs["result"]["pointRedemption"]>
  export type PointRedemptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }

  export type $PointRedemptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointRedemption"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      points_used: number
      voucher_id: string
      created_at: Date
    }, ExtArgs["result"]["pointRedemption"]>
    composites: {}
  }

  type PointRedemptionGetPayload<S extends boolean | null | undefined | PointRedemptionDefaultArgs> = $Result.GetResult<Prisma.$PointRedemptionPayload, S>

  type PointRedemptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointRedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointRedemptionCountAggregateInputType | true
    }

  export interface PointRedemptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointRedemption'], meta: { name: 'PointRedemption' } }
    /**
     * Find zero or one PointRedemption that matches the filter.
     * @param {PointRedemptionFindUniqueArgs} args - Arguments to find a PointRedemption
     * @example
     * // Get one PointRedemption
     * const pointRedemption = await prisma.pointRedemption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointRedemptionFindUniqueArgs>(args: SelectSubset<T, PointRedemptionFindUniqueArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointRedemption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointRedemptionFindUniqueOrThrowArgs} args - Arguments to find a PointRedemption
     * @example
     * // Get one PointRedemption
     * const pointRedemption = await prisma.pointRedemption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointRedemptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PointRedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointRedemption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRedemptionFindFirstArgs} args - Arguments to find a PointRedemption
     * @example
     * // Get one PointRedemption
     * const pointRedemption = await prisma.pointRedemption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointRedemptionFindFirstArgs>(args?: SelectSubset<T, PointRedemptionFindFirstArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointRedemption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRedemptionFindFirstOrThrowArgs} args - Arguments to find a PointRedemption
     * @example
     * // Get one PointRedemption
     * const pointRedemption = await prisma.pointRedemption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointRedemptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PointRedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointRedemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRedemptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointRedemptions
     * const pointRedemptions = await prisma.pointRedemption.findMany()
     * 
     * // Get first 10 PointRedemptions
     * const pointRedemptions = await prisma.pointRedemption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointRedemptionWithIdOnly = await prisma.pointRedemption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointRedemptionFindManyArgs>(args?: SelectSubset<T, PointRedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointRedemption.
     * @param {PointRedemptionCreateArgs} args - Arguments to create a PointRedemption.
     * @example
     * // Create one PointRedemption
     * const PointRedemption = await prisma.pointRedemption.create({
     *   data: {
     *     // ... data to create a PointRedemption
     *   }
     * })
     * 
     */
    create<T extends PointRedemptionCreateArgs>(args: SelectSubset<T, PointRedemptionCreateArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointRedemptions.
     * @param {PointRedemptionCreateManyArgs} args - Arguments to create many PointRedemptions.
     * @example
     * // Create many PointRedemptions
     * const pointRedemption = await prisma.pointRedemption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointRedemptionCreateManyArgs>(args?: SelectSubset<T, PointRedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PointRedemption.
     * @param {PointRedemptionDeleteArgs} args - Arguments to delete one PointRedemption.
     * @example
     * // Delete one PointRedemption
     * const PointRedemption = await prisma.pointRedemption.delete({
     *   where: {
     *     // ... filter to delete one PointRedemption
     *   }
     * })
     * 
     */
    delete<T extends PointRedemptionDeleteArgs>(args: SelectSubset<T, PointRedemptionDeleteArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointRedemption.
     * @param {PointRedemptionUpdateArgs} args - Arguments to update one PointRedemption.
     * @example
     * // Update one PointRedemption
     * const pointRedemption = await prisma.pointRedemption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointRedemptionUpdateArgs>(args: SelectSubset<T, PointRedemptionUpdateArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointRedemptions.
     * @param {PointRedemptionDeleteManyArgs} args - Arguments to filter PointRedemptions to delete.
     * @example
     * // Delete a few PointRedemptions
     * const { count } = await prisma.pointRedemption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointRedemptionDeleteManyArgs>(args?: SelectSubset<T, PointRedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRedemptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointRedemptions
     * const pointRedemption = await prisma.pointRedemption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointRedemptionUpdateManyArgs>(args: SelectSubset<T, PointRedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PointRedemption.
     * @param {PointRedemptionUpsertArgs} args - Arguments to update or create a PointRedemption.
     * @example
     * // Update or create a PointRedemption
     * const pointRedemption = await prisma.pointRedemption.upsert({
     *   create: {
     *     // ... data to create a PointRedemption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointRedemption we want to update
     *   }
     * })
     */
    upsert<T extends PointRedemptionUpsertArgs>(args: SelectSubset<T, PointRedemptionUpsertArgs<ExtArgs>>): Prisma__PointRedemptionClient<$Result.GetResult<Prisma.$PointRedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRedemptionCountArgs} args - Arguments to filter PointRedemptions to count.
     * @example
     * // Count the number of PointRedemptions
     * const count = await prisma.pointRedemption.count({
     *   where: {
     *     // ... the filter for the PointRedemptions we want to count
     *   }
     * })
    **/
    count<T extends PointRedemptionCountArgs>(
      args?: Subset<T, PointRedemptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointRedemptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRedemptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointRedemptionAggregateArgs>(args: Subset<T, PointRedemptionAggregateArgs>): Prisma.PrismaPromise<GetPointRedemptionAggregateType<T>>

    /**
     * Group by PointRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRedemptionGroupByArgs} args - Group by arguments.
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
      T extends PointRedemptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointRedemptionGroupByArgs['orderBy'] }
        : { orderBy?: PointRedemptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointRedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointRedemption model
   */
  readonly fields: PointRedemptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointRedemption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointRedemptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends VoucherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoucherDefaultArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PointRedemption model
   */
  interface PointRedemptionFieldRefs {
    readonly id: FieldRef<"PointRedemption", 'String'>
    readonly user_id: FieldRef<"PointRedemption", 'String'>
    readonly points_used: FieldRef<"PointRedemption", 'Int'>
    readonly voucher_id: FieldRef<"PointRedemption", 'String'>
    readonly created_at: FieldRef<"PointRedemption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointRedemption findUnique
   */
  export type PointRedemptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which PointRedemption to fetch.
     */
    where: PointRedemptionWhereUniqueInput
  }

  /**
   * PointRedemption findUniqueOrThrow
   */
  export type PointRedemptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which PointRedemption to fetch.
     */
    where: PointRedemptionWhereUniqueInput
  }

  /**
   * PointRedemption findFirst
   */
  export type PointRedemptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which PointRedemption to fetch.
     */
    where?: PointRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRedemptions to fetch.
     */
    orderBy?: PointRedemptionOrderByWithRelationInput | PointRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointRedemptions.
     */
    cursor?: PointRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointRedemptions.
     */
    distinct?: PointRedemptionScalarFieldEnum | PointRedemptionScalarFieldEnum[]
  }

  /**
   * PointRedemption findFirstOrThrow
   */
  export type PointRedemptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which PointRedemption to fetch.
     */
    where?: PointRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRedemptions to fetch.
     */
    orderBy?: PointRedemptionOrderByWithRelationInput | PointRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointRedemptions.
     */
    cursor?: PointRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointRedemptions.
     */
    distinct?: PointRedemptionScalarFieldEnum | PointRedemptionScalarFieldEnum[]
  }

  /**
   * PointRedemption findMany
   */
  export type PointRedemptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which PointRedemptions to fetch.
     */
    where?: PointRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRedemptions to fetch.
     */
    orderBy?: PointRedemptionOrderByWithRelationInput | PointRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointRedemptions.
     */
    cursor?: PointRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRedemptions.
     */
    skip?: number
    distinct?: PointRedemptionScalarFieldEnum | PointRedemptionScalarFieldEnum[]
  }

  /**
   * PointRedemption create
   */
  export type PointRedemptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PointRedemption.
     */
    data: XOR<PointRedemptionCreateInput, PointRedemptionUncheckedCreateInput>
  }

  /**
   * PointRedemption createMany
   */
  export type PointRedemptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointRedemptions.
     */
    data: PointRedemptionCreateManyInput | PointRedemptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointRedemption update
   */
  export type PointRedemptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PointRedemption.
     */
    data: XOR<PointRedemptionUpdateInput, PointRedemptionUncheckedUpdateInput>
    /**
     * Choose, which PointRedemption to update.
     */
    where: PointRedemptionWhereUniqueInput
  }

  /**
   * PointRedemption updateMany
   */
  export type PointRedemptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointRedemptions.
     */
    data: XOR<PointRedemptionUpdateManyMutationInput, PointRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which PointRedemptions to update
     */
    where?: PointRedemptionWhereInput
    /**
     * Limit how many PointRedemptions to update.
     */
    limit?: number
  }

  /**
   * PointRedemption upsert
   */
  export type PointRedemptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PointRedemption to update in case it exists.
     */
    where: PointRedemptionWhereUniqueInput
    /**
     * In case the PointRedemption found by the `where` argument doesn't exist, create a new PointRedemption with this data.
     */
    create: XOR<PointRedemptionCreateInput, PointRedemptionUncheckedCreateInput>
    /**
     * In case the PointRedemption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointRedemptionUpdateInput, PointRedemptionUncheckedUpdateInput>
  }

  /**
   * PointRedemption delete
   */
  export type PointRedemptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
    /**
     * Filter which PointRedemption to delete.
     */
    where: PointRedemptionWhereUniqueInput
  }

  /**
   * PointRedemption deleteMany
   */
  export type PointRedemptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointRedemptions to delete
     */
    where?: PointRedemptionWhereInput
    /**
     * Limit how many PointRedemptions to delete.
     */
    limit?: number
  }

  /**
   * PointRedemption without action
   */
  export type PointRedemptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRedemption
     */
    select?: PointRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRedemption
     */
    omit?: PointRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointRedemptionInclude<ExtArgs> | null
  }


  /**
   * Model SupportTicket
   */

  export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  export type SupportTicketMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    category: string | null
    subject: string | null
    message: string | null
    status: string | null
    admin_reply: string | null
    replied_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SupportTicketMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    category: string | null
    subject: string | null
    message: string | null
    status: string | null
    admin_reply: string | null
    replied_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SupportTicketCountAggregateOutputType = {
    id: number
    user_id: number
    category: number
    subject: number
    message: number
    status: number
    admin_reply: number
    replied_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SupportTicketMinAggregateInputType = {
    id?: true
    user_id?: true
    category?: true
    subject?: true
    message?: true
    status?: true
    admin_reply?: true
    replied_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SupportTicketMaxAggregateInputType = {
    id?: true
    user_id?: true
    category?: true
    subject?: true
    message?: true
    status?: true
    admin_reply?: true
    replied_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SupportTicketCountAggregateInputType = {
    id?: true
    user_id?: true
    category?: true
    subject?: true
    message?: true
    status?: true
    admin_reply?: true
    replied_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SupportTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTicket to aggregate.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportTickets
    **/
    _count?: true | SupportTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportTicketMaxAggregateInputType
  }

  export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportTicket[P]>
      : GetScalarType<T[P], AggregateSupportTicket[P]>
  }




  export type SupportTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithAggregationInput | SupportTicketOrderByWithAggregationInput[]
    by: SupportTicketScalarFieldEnum[] | SupportTicketScalarFieldEnum
    having?: SupportTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportTicketCountAggregateInputType | true
    _min?: SupportTicketMinAggregateInputType
    _max?: SupportTicketMaxAggregateInputType
  }

  export type SupportTicketGroupByOutputType = {
    id: string
    user_id: string
    category: string
    subject: string
    message: string
    status: string
    admin_reply: string | null
    replied_at: Date | null
    created_at: Date
    updated_at: Date
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
            : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
        }
      >
    >


  export type SupportTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    category?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    admin_reply?: boolean
    replied_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>



  export type SupportTicketSelectScalar = {
    id?: boolean
    user_id?: boolean
    category?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    admin_reply?: boolean
    replied_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SupportTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "category" | "subject" | "message" | "status" | "admin_reply" | "replied_at" | "created_at" | "updated_at", ExtArgs["result"]["supportTicket"]>
  export type SupportTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SupportTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportTicket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      category: string
      subject: string
      message: string
      status: string
      admin_reply: string | null
      replied_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["supportTicket"]>
    composites: {}
  }

  type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = $Result.GetResult<Prisma.$SupportTicketPayload, S>

  type SupportTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportTicketCountAggregateInputType | true
    }

  export interface SupportTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'], meta: { name: 'SupportTicket' } }
    /**
     * Find zero or one SupportTicket that matches the filter.
     * @param {SupportTicketFindUniqueArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportTicketFindUniqueArgs>(args: SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportTicketFindUniqueOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportTicketFindFirstArgs>(args?: SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany()
     * 
     * // Get first 10 SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportTicketFindManyArgs>(args?: SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportTicket.
     * @param {SupportTicketCreateArgs} args - Arguments to create a SupportTicket.
     * @example
     * // Create one SupportTicket
     * const SupportTicket = await prisma.supportTicket.create({
     *   data: {
     *     // ... data to create a SupportTicket
     *   }
     * })
     * 
     */
    create<T extends SupportTicketCreateArgs>(args: SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportTickets.
     * @param {SupportTicketCreateManyArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportTicketCreateManyArgs>(args?: SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SupportTicket.
     * @param {SupportTicketDeleteArgs} args - Arguments to delete one SupportTicket.
     * @example
     * // Delete one SupportTicket
     * const SupportTicket = await prisma.supportTicket.delete({
     *   where: {
     *     // ... filter to delete one SupportTicket
     *   }
     * })
     * 
     */
    delete<T extends SupportTicketDeleteArgs>(args: SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportTicket.
     * @param {SupportTicketUpdateArgs} args - Arguments to update one SupportTicket.
     * @example
     * // Update one SupportTicket
     * const supportTicket = await prisma.supportTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportTicketUpdateArgs>(args: SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportTickets.
     * @param {SupportTicketDeleteManyArgs} args - Arguments to filter SupportTickets to delete.
     * @example
     * // Delete a few SupportTickets
     * const { count } = await prisma.supportTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportTickets
     * const supportTicket = await prisma.supportTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportTicketUpdateManyArgs>(args: SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupportTicket.
     * @param {SupportTicketUpsertArgs} args - Arguments to update or create a SupportTicket.
     * @example
     * // Update or create a SupportTicket
     * const supportTicket = await prisma.supportTicket.upsert({
     *   create: {
     *     // ... data to create a SupportTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportTicket we want to update
     *   }
     * })
     */
    upsert<T extends SupportTicketUpsertArgs>(args: SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketCountArgs} args - Arguments to filter SupportTickets to count.
     * @example
     * // Count the number of SupportTickets
     * const count = await prisma.supportTicket.count({
     *   where: {
     *     // ... the filter for the SupportTickets we want to count
     *   }
     * })
    **/
    count<T extends SupportTicketCountArgs>(
      args?: Subset<T, SupportTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportTicketAggregateArgs>(args: Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>

    /**
     * Group by SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketGroupByArgs} args - Group by arguments.
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
      T extends SupportTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportTicketGroupByArgs['orderBy'] }
        : { orderBy?: SupportTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportTicket model
   */
  readonly fields: SupportTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupportTicket model
   */
  interface SupportTicketFieldRefs {
    readonly id: FieldRef<"SupportTicket", 'String'>
    readonly user_id: FieldRef<"SupportTicket", 'String'>
    readonly category: FieldRef<"SupportTicket", 'String'>
    readonly subject: FieldRef<"SupportTicket", 'String'>
    readonly message: FieldRef<"SupportTicket", 'String'>
    readonly status: FieldRef<"SupportTicket", 'String'>
    readonly admin_reply: FieldRef<"SupportTicket", 'String'>
    readonly replied_at: FieldRef<"SupportTicket", 'DateTime'>
    readonly created_at: FieldRef<"SupportTicket", 'DateTime'>
    readonly updated_at: FieldRef<"SupportTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportTicket findUnique
   */
  export type SupportTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findUniqueOrThrow
   */
  export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findFirst
   */
  export type SupportTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findFirstOrThrow
   */
  export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findMany
   */
  export type SupportTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTickets to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket create
   */
  export type SupportTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportTicket.
     */
    data: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
  }

  /**
   * SupportTicket createMany
   */
  export type SupportTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportTicket update
   */
  export type SupportTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportTicket.
     */
    data: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
    /**
     * Choose, which SupportTicket to update.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket updateMany
   */
  export type SupportTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportTickets.
     */
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which SupportTickets to update
     */
    where?: SupportTicketWhereInput
    /**
     * Limit how many SupportTickets to update.
     */
    limit?: number
  }

  /**
   * SupportTicket upsert
   */
  export type SupportTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportTicket to update in case it exists.
     */
    where: SupportTicketWhereUniqueInput
    /**
     * In case the SupportTicket found by the `where` argument doesn't exist, create a new SupportTicket with this data.
     */
    create: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
    /**
     * In case the SupportTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
  }

  /**
   * SupportTicket delete
   */
  export type SupportTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter which SupportTicket to delete.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket deleteMany
   */
  export type SupportTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTickets to delete
     */
    where?: SupportTicketWhereInput
    /**
     * Limit how many SupportTickets to delete.
     */
    limit?: number
  }

  /**
   * SupportTicket without action
   */
  export type SupportTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: SupportTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    name: 'name',
    avatar_url: 'avatar_url',
    role: 'role',
    loyalty_points: 'loyalty_points',
    created_at: 'created_at',
    loyalty_tier: 'loyalty_tier',
    updated_at: 'updated_at',
    date_of_birth: 'date_of_birth',
    is_verified: 'is_verified',
    refresh_token: 'refresh_token',
    ban_reason: 'ban_reason',
    is_banned: 'is_banned',
    auth_provider: 'auth_provider',
    google_email: 'google_email',
    google_id: 'google_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LoyaltyLogScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    points: 'points',
    type: 'type',
    description: 'description',
    booking_id: 'booking_id',
    created_at: 'created_at'
  };

  export type LoyaltyLogScalarFieldEnum = (typeof LoyaltyLogScalarFieldEnum)[keyof typeof LoyaltyLogScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    tmdb_id: 'tmdb_id',
    title: 'title',
    original_title: 'original_title',
    overview: 'overview',
    poster_url: 'poster_url',
    backdrop_url: 'backdrop_url',
    trailer_key: 'trailer_key',
    genres: 'genres',
    cast: 'cast',
    director: 'director',
    duration: 'duration',
    rating: 'rating',
    language: 'language',
    status: 'status',
    release_date: 'release_date'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const CinemaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    lat: 'lat',
    lng: 'lng',
    image_url: 'image_url'
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    cinema_id: 'cinema_id',
    name: 'name',
    type: 'type',
    total_rows: 'total_rows',
    total_cols: 'total_cols'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    row: 'row',
    col: 'col',
    type: 'type'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const ShowtimeScalarFieldEnum: {
    id: 'id',
    movie_id: 'movie_id',
    room_id: 'room_id',
    start_time: 'start_time',
    end_time: 'end_time',
    price: 'price',
    vip_price: 'vip_price',
    couple_price: 'couple_price',
    language: 'language',
    format: 'format'
  };

  export type ShowtimeScalarFieldEnum = (typeof ShowtimeScalarFieldEnum)[keyof typeof ShowtimeScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    showtime_id: 'showtime_id',
    status: 'status',
    total_amount: 'total_amount',
    qr_code: 'qr_code',
    qr_image_url: 'qr_image_url',
    paid_at: 'paid_at',
    created_at: 'created_at',
    expires_at: 'expires_at',
    discount_amount: 'discount_amount',
    voucher_code: 'voucher_code'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingItemScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    seat_id: 'seat_id',
    price: 'price',
    showtime_id: 'showtime_id'
  };

  export type BookingItemScalarFieldEnum = (typeof BookingItemScalarFieldEnum)[keyof typeof BookingItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    method: 'method',
    amount: 'amount',
    status: 'status',
    transaction_id: 'transaction_id',
    vnpay_data: 'vnpay_data',
    created_at: 'created_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FoodComboScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    image_url: 'image_url'
  };

  export type FoodComboScalarFieldEnum = (typeof FoodComboScalarFieldEnum)[keyof typeof FoodComboScalarFieldEnum]


  export const FoodItemScalarFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    combo_id: 'combo_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type FoodItemScalarFieldEnum = (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discount_type: 'discount_type',
    discount_value: 'discount_value',
    min_amount: 'min_amount',
    max_discount: 'max_discount',
    usage_limit: 'usage_limit',
    used_count: 'used_count',
    expires_at: 'expires_at',
    created_at: 'created_at',
    description: 'description',
    is_active: 'is_active',
    source: 'source',
    owner_user_id: 'owner_user_id'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const PointRedemptionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    points_used: 'points_used',
    voucher_id: 'voucher_id',
    created_at: 'created_at'
  };

  export type PointRedemptionScalarFieldEnum = (typeof PointRedemptionScalarFieldEnum)[keyof typeof PointRedemptionScalarFieldEnum]


  export const SupportTicketScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    category: 'category',
    subject: 'subject',
    message: 'message',
    status: 'status',
    admin_reply: 'admin_reply',
    replied_at: 'replied_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash',
    name: 'name',
    avatar_url: 'avatar_url',
    loyalty_tier: 'loyalty_tier',
    refresh_token: 'refresh_token',
    ban_reason: 'ban_reason',
    auth_provider: 'auth_provider',
    google_email: 'google_email',
    google_id: 'google_id'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const LoyaltyLogOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    description: 'description',
    booking_id: 'booking_id'
  };

  export type LoyaltyLogOrderByRelevanceFieldEnum = (typeof LoyaltyLogOrderByRelevanceFieldEnum)[keyof typeof LoyaltyLogOrderByRelevanceFieldEnum]


  export const MovieOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    original_title: 'original_title',
    overview: 'overview',
    poster_url: 'poster_url',
    backdrop_url: 'backdrop_url',
    trailer_key: 'trailer_key',
    genres: 'genres',
    cast: 'cast',
    director: 'director',
    language: 'language'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  export const CinemaOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    image_url: 'image_url'
  };

  export type CinemaOrderByRelevanceFieldEnum = (typeof CinemaOrderByRelevanceFieldEnum)[keyof typeof CinemaOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    id: 'id',
    cinema_id: 'cinema_id',
    name: 'name'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const SeatOrderByRelevanceFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    row: 'row'
  };

  export type SeatOrderByRelevanceFieldEnum = (typeof SeatOrderByRelevanceFieldEnum)[keyof typeof SeatOrderByRelevanceFieldEnum]


  export const ShowtimeOrderByRelevanceFieldEnum: {
    id: 'id',
    movie_id: 'movie_id',
    room_id: 'room_id',
    language: 'language',
    format: 'format'
  };

  export type ShowtimeOrderByRelevanceFieldEnum = (typeof ShowtimeOrderByRelevanceFieldEnum)[keyof typeof ShowtimeOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    showtime_id: 'showtime_id',
    qr_code: 'qr_code',
    qr_image_url: 'qr_image_url',
    voucher_code: 'voucher_code'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const BookingItemOrderByRelevanceFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    seat_id: 'seat_id',
    showtime_id: 'showtime_id'
  };

  export type BookingItemOrderByRelevanceFieldEnum = (typeof BookingItemOrderByRelevanceFieldEnum)[keyof typeof BookingItemOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    transaction_id: 'transaction_id',
    vnpay_data: 'vnpay_data'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const FoodComboOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image_url: 'image_url'
  };

  export type FoodComboOrderByRelevanceFieldEnum = (typeof FoodComboOrderByRelevanceFieldEnum)[keyof typeof FoodComboOrderByRelevanceFieldEnum]


  export const FoodItemOrderByRelevanceFieldEnum: {
    id: 'id',
    booking_id: 'booking_id',
    combo_id: 'combo_id'
  };

  export type FoodItemOrderByRelevanceFieldEnum = (typeof FoodItemOrderByRelevanceFieldEnum)[keyof typeof FoodItemOrderByRelevanceFieldEnum]


  export const VoucherOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    source: 'source',
    owner_user_id: 'owner_user_id'
  };

  export type VoucherOrderByRelevanceFieldEnum = (typeof VoucherOrderByRelevanceFieldEnum)[keyof typeof VoucherOrderByRelevanceFieldEnum]


  export const PointRedemptionOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    voucher_id: 'voucher_id'
  };

  export type PointRedemptionOrderByRelevanceFieldEnum = (typeof PointRedemptionOrderByRelevanceFieldEnum)[keyof typeof PointRedemptionOrderByRelevanceFieldEnum]


  export const SupportTicketOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    category: 'category',
    subject: 'subject',
    message: 'message',
    status: 'status',
    admin_reply: 'admin_reply'
  };

  export type SupportTicketOrderByRelevanceFieldEnum = (typeof SupportTicketOrderByRelevanceFieldEnum)[keyof typeof SupportTicketOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'MovieStatus'
   */
  export type EnumMovieStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovieStatus'>
    


  /**
   * Reference to a field of type 'RoomType'
   */
  export type EnumRoomTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomType'>
    


  /**
   * Reference to a field of type 'SeatType'
   */
  export type EnumSeatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeatType'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'DiscountType'
   */
  export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password_hash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    loyalty_points?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    loyalty_tier?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    date_of_birth?: DateTimeNullableFilter<"User"> | Date | string | null
    is_verified?: BoolFilter<"User"> | boolean
    refresh_token?: StringNullableFilter<"User"> | string | null
    ban_reason?: StringNullableFilter<"User"> | string | null
    is_banned?: BoolFilter<"User"> | boolean
    auth_provider?: StringFilter<"User"> | string
    google_email?: StringNullableFilter<"User"> | string | null
    google_id?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    loyalty_logs?: LoyaltyLogListRelationFilter
    support_tickets?: SupportTicketListRelationFilter
    point_redemptions?: PointRedemptionListRelationFilter
    owned_vouchers?: VoucherListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    loyalty_tier?: SortOrder
    updated_at?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    ban_reason?: SortOrderInput | SortOrder
    is_banned?: SortOrder
    auth_provider?: SortOrder
    google_email?: SortOrderInput | SortOrder
    google_id?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    loyalty_logs?: LoyaltyLogOrderByRelationAggregateInput
    support_tickets?: SupportTicketOrderByRelationAggregateInput
    point_redemptions?: PointRedemptionOrderByRelationAggregateInput
    owned_vouchers?: VoucherOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    google_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    loyalty_points?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    loyalty_tier?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    date_of_birth?: DateTimeNullableFilter<"User"> | Date | string | null
    is_verified?: BoolFilter<"User"> | boolean
    refresh_token?: StringNullableFilter<"User"> | string | null
    ban_reason?: StringNullableFilter<"User"> | string | null
    is_banned?: BoolFilter<"User"> | boolean
    auth_provider?: StringFilter<"User"> | string
    google_email?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    loyalty_logs?: LoyaltyLogListRelationFilter
    support_tickets?: SupportTicketListRelationFilter
    point_redemptions?: PointRedemptionListRelationFilter
    owned_vouchers?: VoucherListRelationFilter
  }, "id" | "email" | "phone" | "google_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password_hash?: SortOrderInput | SortOrder
    name?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    role?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    loyalty_tier?: SortOrder
    updated_at?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    ban_reason?: SortOrderInput | SortOrder
    is_banned?: SortOrder
    auth_provider?: SortOrder
    google_email?: SortOrderInput | SortOrder
    google_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    loyalty_points?: IntWithAggregatesFilter<"User"> | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    loyalty_tier?: StringWithAggregatesFilter<"User"> | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    date_of_birth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    refresh_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    ban_reason?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_banned?: BoolWithAggregatesFilter<"User"> | boolean
    auth_provider?: StringWithAggregatesFilter<"User"> | string
    google_email?: StringNullableWithAggregatesFilter<"User"> | string | null
    google_id?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type LoyaltyLogWhereInput = {
    AND?: LoyaltyLogWhereInput | LoyaltyLogWhereInput[]
    OR?: LoyaltyLogWhereInput[]
    NOT?: LoyaltyLogWhereInput | LoyaltyLogWhereInput[]
    id?: StringFilter<"LoyaltyLog"> | string
    user_id?: StringFilter<"LoyaltyLog"> | string
    points?: IntFilter<"LoyaltyLog"> | number
    type?: StringFilter<"LoyaltyLog"> | string
    description?: StringFilter<"LoyaltyLog"> | string
    booking_id?: StringNullableFilter<"LoyaltyLog"> | string | null
    created_at?: DateTimeFilter<"LoyaltyLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LoyaltyLogOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    type?: SortOrder
    description?: SortOrder
    booking_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: LoyaltyLogOrderByRelevanceInput
  }

  export type LoyaltyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoyaltyLogWhereInput | LoyaltyLogWhereInput[]
    OR?: LoyaltyLogWhereInput[]
    NOT?: LoyaltyLogWhereInput | LoyaltyLogWhereInput[]
    user_id?: StringFilter<"LoyaltyLog"> | string
    points?: IntFilter<"LoyaltyLog"> | number
    type?: StringFilter<"LoyaltyLog"> | string
    description?: StringFilter<"LoyaltyLog"> | string
    booking_id?: StringNullableFilter<"LoyaltyLog"> | string | null
    created_at?: DateTimeFilter<"LoyaltyLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LoyaltyLogOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    type?: SortOrder
    description?: SortOrder
    booking_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: LoyaltyLogCountOrderByAggregateInput
    _avg?: LoyaltyLogAvgOrderByAggregateInput
    _max?: LoyaltyLogMaxOrderByAggregateInput
    _min?: LoyaltyLogMinOrderByAggregateInput
    _sum?: LoyaltyLogSumOrderByAggregateInput
  }

  export type LoyaltyLogScalarWhereWithAggregatesInput = {
    AND?: LoyaltyLogScalarWhereWithAggregatesInput | LoyaltyLogScalarWhereWithAggregatesInput[]
    OR?: LoyaltyLogScalarWhereWithAggregatesInput[]
    NOT?: LoyaltyLogScalarWhereWithAggregatesInput | LoyaltyLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoyaltyLog"> | string
    user_id?: StringWithAggregatesFilter<"LoyaltyLog"> | string
    points?: IntWithAggregatesFilter<"LoyaltyLog"> | number
    type?: StringWithAggregatesFilter<"LoyaltyLog"> | string
    description?: StringWithAggregatesFilter<"LoyaltyLog"> | string
    booking_id?: StringNullableWithAggregatesFilter<"LoyaltyLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"LoyaltyLog"> | Date | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: StringFilter<"Movie"> | string
    tmdb_id?: IntFilter<"Movie"> | number
    title?: StringFilter<"Movie"> | string
    original_title?: StringFilter<"Movie"> | string
    overview?: StringFilter<"Movie"> | string
    poster_url?: StringFilter<"Movie"> | string
    backdrop_url?: StringFilter<"Movie"> | string
    trailer_key?: StringNullableFilter<"Movie"> | string | null
    genres?: StringFilter<"Movie"> | string
    cast?: StringFilter<"Movie"> | string
    director?: StringFilter<"Movie"> | string
    duration?: IntFilter<"Movie"> | number
    rating?: FloatFilter<"Movie"> | number
    language?: StringFilter<"Movie"> | string
    status?: EnumMovieStatusFilter<"Movie"> | $Enums.MovieStatus
    release_date?: DateTimeFilter<"Movie"> | Date | string
    showtimes?: ShowtimeListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    overview?: SortOrder
    poster_url?: SortOrder
    backdrop_url?: SortOrder
    trailer_key?: SortOrderInput | SortOrder
    genres?: SortOrder
    cast?: SortOrder
    director?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    language?: SortOrder
    status?: SortOrder
    release_date?: SortOrder
    showtimes?: ShowtimeOrderByRelationAggregateInput
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tmdb_id?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    original_title?: StringFilter<"Movie"> | string
    overview?: StringFilter<"Movie"> | string
    poster_url?: StringFilter<"Movie"> | string
    backdrop_url?: StringFilter<"Movie"> | string
    trailer_key?: StringNullableFilter<"Movie"> | string | null
    genres?: StringFilter<"Movie"> | string
    cast?: StringFilter<"Movie"> | string
    director?: StringFilter<"Movie"> | string
    duration?: IntFilter<"Movie"> | number
    rating?: FloatFilter<"Movie"> | number
    language?: StringFilter<"Movie"> | string
    status?: EnumMovieStatusFilter<"Movie"> | $Enums.MovieStatus
    release_date?: DateTimeFilter<"Movie"> | Date | string
    showtimes?: ShowtimeListRelationFilter
  }, "id" | "tmdb_id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    overview?: SortOrder
    poster_url?: SortOrder
    backdrop_url?: SortOrder
    trailer_key?: SortOrderInput | SortOrder
    genres?: SortOrder
    cast?: SortOrder
    director?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    language?: SortOrder
    status?: SortOrder
    release_date?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie"> | string
    tmdb_id?: IntWithAggregatesFilter<"Movie"> | number
    title?: StringWithAggregatesFilter<"Movie"> | string
    original_title?: StringWithAggregatesFilter<"Movie"> | string
    overview?: StringWithAggregatesFilter<"Movie"> | string
    poster_url?: StringWithAggregatesFilter<"Movie"> | string
    backdrop_url?: StringWithAggregatesFilter<"Movie"> | string
    trailer_key?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    genres?: StringWithAggregatesFilter<"Movie"> | string
    cast?: StringWithAggregatesFilter<"Movie"> | string
    director?: StringWithAggregatesFilter<"Movie"> | string
    duration?: IntWithAggregatesFilter<"Movie"> | number
    rating?: FloatWithAggregatesFilter<"Movie"> | number
    language?: StringWithAggregatesFilter<"Movie"> | string
    status?: EnumMovieStatusWithAggregatesFilter<"Movie"> | $Enums.MovieStatus
    release_date?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type CinemaWhereInput = {
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    id?: StringFilter<"Cinema"> | string
    name?: StringFilter<"Cinema"> | string
    address?: StringFilter<"Cinema"> | string
    city?: StringFilter<"Cinema"> | string
    lat?: FloatFilter<"Cinema"> | number
    lng?: FloatFilter<"Cinema"> | number
    image_url?: StringNullableFilter<"Cinema"> | string | null
    rooms?: RoomListRelationFilter
  }

  export type CinemaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    image_url?: SortOrderInput | SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    _relevance?: CinemaOrderByRelevanceInput
  }

  export type CinemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    name?: StringFilter<"Cinema"> | string
    address?: StringFilter<"Cinema"> | string
    city?: StringFilter<"Cinema"> | string
    lat?: FloatFilter<"Cinema"> | number
    lng?: FloatFilter<"Cinema"> | number
    image_url?: StringNullableFilter<"Cinema"> | string | null
    rooms?: RoomListRelationFilter
  }, "id">

  export type CinemaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: CinemaCountOrderByAggregateInput
    _avg?: CinemaAvgOrderByAggregateInput
    _max?: CinemaMaxOrderByAggregateInput
    _min?: CinemaMinOrderByAggregateInput
    _sum?: CinemaSumOrderByAggregateInput
  }

  export type CinemaScalarWhereWithAggregatesInput = {
    AND?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    OR?: CinemaScalarWhereWithAggregatesInput[]
    NOT?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cinema"> | string
    name?: StringWithAggregatesFilter<"Cinema"> | string
    address?: StringWithAggregatesFilter<"Cinema"> | string
    city?: StringWithAggregatesFilter<"Cinema"> | string
    lat?: FloatWithAggregatesFilter<"Cinema"> | number
    lng?: FloatWithAggregatesFilter<"Cinema"> | number
    image_url?: StringNullableWithAggregatesFilter<"Cinema"> | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    cinema_id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    total_rows?: IntFilter<"Room"> | number
    total_cols?: IntFilter<"Room"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    seats?: SeatListRelationFilter
    showtimes?: ShowtimeListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    cinema_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    total_rows?: SortOrder
    total_cols?: SortOrder
    cinema?: CinemaOrderByWithRelationInput
    seats?: SeatOrderByRelationAggregateInput
    showtimes?: ShowtimeOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    cinema_id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    total_rows?: IntFilter<"Room"> | number
    total_cols?: IntFilter<"Room"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    seats?: SeatListRelationFilter
    showtimes?: ShowtimeListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    cinema_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    total_rows?: SortOrder
    total_cols?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    cinema_id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    type?: EnumRoomTypeWithAggregatesFilter<"Room"> | $Enums.RoomType
    total_rows?: IntWithAggregatesFilter<"Room"> | number
    total_cols?: IntWithAggregatesFilter<"Room"> | number
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: StringFilter<"Seat"> | string
    room_id?: StringFilter<"Seat"> | string
    row?: StringFilter<"Seat"> | string
    col?: IntFilter<"Seat"> | number
    type?: EnumSeatTypeFilter<"Seat"> | $Enums.SeatType
    booking_items?: BookingItemListRelationFilter
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    type?: SortOrder
    booking_items?: BookingItemOrderByRelationAggregateInput
    room?: RoomOrderByWithRelationInput
    _relevance?: SeatOrderByRelevanceInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    room_id_row_col?: SeatRoom_idRowColCompoundUniqueInput
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    room_id?: StringFilter<"Seat"> | string
    row?: StringFilter<"Seat"> | string
    col?: IntFilter<"Seat"> | number
    type?: EnumSeatTypeFilter<"Seat"> | $Enums.SeatType
    booking_items?: BookingItemListRelationFilter
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "room_id_row_col">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    type?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _avg?: SeatAvgOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
    _sum?: SeatSumOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seat"> | string
    room_id?: StringWithAggregatesFilter<"Seat"> | string
    row?: StringWithAggregatesFilter<"Seat"> | string
    col?: IntWithAggregatesFilter<"Seat"> | number
    type?: EnumSeatTypeWithAggregatesFilter<"Seat"> | $Enums.SeatType
  }

  export type ShowtimeWhereInput = {
    AND?: ShowtimeWhereInput | ShowtimeWhereInput[]
    OR?: ShowtimeWhereInput[]
    NOT?: ShowtimeWhereInput | ShowtimeWhereInput[]
    id?: StringFilter<"Showtime"> | string
    movie_id?: StringFilter<"Showtime"> | string
    room_id?: StringFilter<"Showtime"> | string
    start_time?: DateTimeFilter<"Showtime"> | Date | string
    end_time?: DateTimeFilter<"Showtime"> | Date | string
    price?: IntFilter<"Showtime"> | number
    vip_price?: IntFilter<"Showtime"> | number
    couple_price?: IntFilter<"Showtime"> | number
    language?: StringFilter<"Showtime"> | string
    format?: StringFilter<"Showtime"> | string
    bookings?: BookingListRelationFilter
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type ShowtimeOrderByWithRelationInput = {
    id?: SortOrder
    movie_id?: SortOrder
    room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    vip_price?: SortOrder
    couple_price?: SortOrder
    language?: SortOrder
    format?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    movie?: MovieOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    _relevance?: ShowtimeOrderByRelevanceInput
  }

  export type ShowtimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShowtimeWhereInput | ShowtimeWhereInput[]
    OR?: ShowtimeWhereInput[]
    NOT?: ShowtimeWhereInput | ShowtimeWhereInput[]
    movie_id?: StringFilter<"Showtime"> | string
    room_id?: StringFilter<"Showtime"> | string
    start_time?: DateTimeFilter<"Showtime"> | Date | string
    end_time?: DateTimeFilter<"Showtime"> | Date | string
    price?: IntFilter<"Showtime"> | number
    vip_price?: IntFilter<"Showtime"> | number
    couple_price?: IntFilter<"Showtime"> | number
    language?: StringFilter<"Showtime"> | string
    format?: StringFilter<"Showtime"> | string
    bookings?: BookingListRelationFilter
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type ShowtimeOrderByWithAggregationInput = {
    id?: SortOrder
    movie_id?: SortOrder
    room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    vip_price?: SortOrder
    couple_price?: SortOrder
    language?: SortOrder
    format?: SortOrder
    _count?: ShowtimeCountOrderByAggregateInput
    _avg?: ShowtimeAvgOrderByAggregateInput
    _max?: ShowtimeMaxOrderByAggregateInput
    _min?: ShowtimeMinOrderByAggregateInput
    _sum?: ShowtimeSumOrderByAggregateInput
  }

  export type ShowtimeScalarWhereWithAggregatesInput = {
    AND?: ShowtimeScalarWhereWithAggregatesInput | ShowtimeScalarWhereWithAggregatesInput[]
    OR?: ShowtimeScalarWhereWithAggregatesInput[]
    NOT?: ShowtimeScalarWhereWithAggregatesInput | ShowtimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Showtime"> | string
    movie_id?: StringWithAggregatesFilter<"Showtime"> | string
    room_id?: StringWithAggregatesFilter<"Showtime"> | string
    start_time?: DateTimeWithAggregatesFilter<"Showtime"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Showtime"> | Date | string
    price?: IntWithAggregatesFilter<"Showtime"> | number
    vip_price?: IntWithAggregatesFilter<"Showtime"> | number
    couple_price?: IntWithAggregatesFilter<"Showtime"> | number
    language?: StringWithAggregatesFilter<"Showtime"> | string
    format?: StringWithAggregatesFilter<"Showtime"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    user_id?: StringFilter<"Booking"> | string
    showtime_id?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    total_amount?: IntFilter<"Booking"> | number
    qr_code?: StringFilter<"Booking"> | string
    qr_image_url?: StringNullableFilter<"Booking"> | string | null
    paid_at?: DateTimeNullableFilter<"Booking"> | Date | string | null
    created_at?: DateTimeFilter<"Booking"> | Date | string
    expires_at?: DateTimeFilter<"Booking"> | Date | string
    discount_amount?: IntFilter<"Booking"> | number
    voucher_code?: StringNullableFilter<"Booking"> | string | null
    booking_items?: BookingItemListRelationFilter
    showtime?: XOR<ShowtimeScalarRelationFilter, ShowtimeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
    food_items?: FoodItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    showtime_id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    qr_code?: SortOrder
    qr_image_url?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    discount_amount?: SortOrder
    voucher_code?: SortOrderInput | SortOrder
    booking_items?: BookingItemOrderByRelationAggregateInput
    showtime?: ShowtimeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
    food_items?: FoodItemOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qr_code?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    user_id?: StringFilter<"Booking"> | string
    showtime_id?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    total_amount?: IntFilter<"Booking"> | number
    qr_image_url?: StringNullableFilter<"Booking"> | string | null
    paid_at?: DateTimeNullableFilter<"Booking"> | Date | string | null
    created_at?: DateTimeFilter<"Booking"> | Date | string
    expires_at?: DateTimeFilter<"Booking"> | Date | string
    discount_amount?: IntFilter<"Booking"> | number
    voucher_code?: StringNullableFilter<"Booking"> | string | null
    booking_items?: BookingItemListRelationFilter
    showtime?: XOR<ShowtimeScalarRelationFilter, ShowtimeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
    food_items?: FoodItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "qr_code">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    showtime_id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    qr_code?: SortOrder
    qr_image_url?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    discount_amount?: SortOrder
    voucher_code?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    user_id?: StringWithAggregatesFilter<"Booking"> | string
    showtime_id?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    total_amount?: IntWithAggregatesFilter<"Booking"> | number
    qr_code?: StringWithAggregatesFilter<"Booking"> | string
    qr_image_url?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    discount_amount?: IntWithAggregatesFilter<"Booking"> | number
    voucher_code?: StringNullableWithAggregatesFilter<"Booking"> | string | null
  }

  export type BookingItemWhereInput = {
    AND?: BookingItemWhereInput | BookingItemWhereInput[]
    OR?: BookingItemWhereInput[]
    NOT?: BookingItemWhereInput | BookingItemWhereInput[]
    id?: StringFilter<"BookingItem"> | string
    booking_id?: StringFilter<"BookingItem"> | string
    seat_id?: StringFilter<"BookingItem"> | string
    price?: IntFilter<"BookingItem"> | number
    showtime_id?: StringFilter<"BookingItem"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
  }

  export type BookingItemOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    seat_id?: SortOrder
    price?: SortOrder
    showtime_id?: SortOrder
    booking?: BookingOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
    _relevance?: BookingItemOrderByRelevanceInput
  }

  export type BookingItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    booking_id_seat_id?: BookingItemBooking_idSeat_idCompoundUniqueInput
    AND?: BookingItemWhereInput | BookingItemWhereInput[]
    OR?: BookingItemWhereInput[]
    NOT?: BookingItemWhereInput | BookingItemWhereInput[]
    booking_id?: StringFilter<"BookingItem"> | string
    seat_id?: StringFilter<"BookingItem"> | string
    price?: IntFilter<"BookingItem"> | number
    showtime_id?: StringFilter<"BookingItem"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
  }, "id" | "booking_id_seat_id">

  export type BookingItemOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    seat_id?: SortOrder
    price?: SortOrder
    showtime_id?: SortOrder
    _count?: BookingItemCountOrderByAggregateInput
    _avg?: BookingItemAvgOrderByAggregateInput
    _max?: BookingItemMaxOrderByAggregateInput
    _min?: BookingItemMinOrderByAggregateInput
    _sum?: BookingItemSumOrderByAggregateInput
  }

  export type BookingItemScalarWhereWithAggregatesInput = {
    AND?: BookingItemScalarWhereWithAggregatesInput | BookingItemScalarWhereWithAggregatesInput[]
    OR?: BookingItemScalarWhereWithAggregatesInput[]
    NOT?: BookingItemScalarWhereWithAggregatesInput | BookingItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingItem"> | string
    booking_id?: StringWithAggregatesFilter<"BookingItem"> | string
    seat_id?: StringWithAggregatesFilter<"BookingItem"> | string
    price?: IntWithAggregatesFilter<"BookingItem"> | number
    showtime_id?: StringWithAggregatesFilter<"BookingItem"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    booking_id?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amount?: IntFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transaction_id?: StringNullableFilter<"Payment"> | string | null
    vnpay_data?: StringNullableFilter<"Payment"> | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    vnpay_data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    booking_id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    amount?: IntFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transaction_id?: StringNullableFilter<"Payment"> | string | null
    vnpay_data?: StringNullableFilter<"Payment"> | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "booking_id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrderInput | SortOrder
    vnpay_data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    booking_id?: StringWithAggregatesFilter<"Payment"> | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    amount?: IntWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    transaction_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    vnpay_data?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type FoodComboWhereInput = {
    AND?: FoodComboWhereInput | FoodComboWhereInput[]
    OR?: FoodComboWhereInput[]
    NOT?: FoodComboWhereInput | FoodComboWhereInput[]
    id?: StringFilter<"FoodCombo"> | string
    name?: StringFilter<"FoodCombo"> | string
    description?: StringFilter<"FoodCombo"> | string
    price?: IntFilter<"FoodCombo"> | number
    image_url?: StringFilter<"FoodCombo"> | string
    food_items?: FoodItemListRelationFilter
  }

  export type FoodComboOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    food_items?: FoodItemOrderByRelationAggregateInput
    _relevance?: FoodComboOrderByRelevanceInput
  }

  export type FoodComboWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodComboWhereInput | FoodComboWhereInput[]
    OR?: FoodComboWhereInput[]
    NOT?: FoodComboWhereInput | FoodComboWhereInput[]
    name?: StringFilter<"FoodCombo"> | string
    description?: StringFilter<"FoodCombo"> | string
    price?: IntFilter<"FoodCombo"> | number
    image_url?: StringFilter<"FoodCombo"> | string
    food_items?: FoodItemListRelationFilter
  }, "id">

  export type FoodComboOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
    _count?: FoodComboCountOrderByAggregateInput
    _avg?: FoodComboAvgOrderByAggregateInput
    _max?: FoodComboMaxOrderByAggregateInput
    _min?: FoodComboMinOrderByAggregateInput
    _sum?: FoodComboSumOrderByAggregateInput
  }

  export type FoodComboScalarWhereWithAggregatesInput = {
    AND?: FoodComboScalarWhereWithAggregatesInput | FoodComboScalarWhereWithAggregatesInput[]
    OR?: FoodComboScalarWhereWithAggregatesInput[]
    NOT?: FoodComboScalarWhereWithAggregatesInput | FoodComboScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodCombo"> | string
    name?: StringWithAggregatesFilter<"FoodCombo"> | string
    description?: StringWithAggregatesFilter<"FoodCombo"> | string
    price?: IntWithAggregatesFilter<"FoodCombo"> | number
    image_url?: StringWithAggregatesFilter<"FoodCombo"> | string
  }

  export type FoodItemWhereInput = {
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    id?: StringFilter<"FoodItem"> | string
    booking_id?: StringFilter<"FoodItem"> | string
    combo_id?: StringFilter<"FoodItem"> | string
    quantity?: IntFilter<"FoodItem"> | number
    price?: IntFilter<"FoodItem"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    combo?: XOR<FoodComboScalarRelationFilter, FoodComboWhereInput>
  }

  export type FoodItemOrderByWithRelationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    combo_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    booking?: BookingOrderByWithRelationInput
    combo?: FoodComboOrderByWithRelationInput
    _relevance?: FoodItemOrderByRelevanceInput
  }

  export type FoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    booking_id?: StringFilter<"FoodItem"> | string
    combo_id?: StringFilter<"FoodItem"> | string
    quantity?: IntFilter<"FoodItem"> | number
    price?: IntFilter<"FoodItem"> | number
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    combo?: XOR<FoodComboScalarRelationFilter, FoodComboWhereInput>
  }, "id">

  export type FoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    booking_id?: SortOrder
    combo_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: FoodItemCountOrderByAggregateInput
    _avg?: FoodItemAvgOrderByAggregateInput
    _max?: FoodItemMaxOrderByAggregateInput
    _min?: FoodItemMinOrderByAggregateInput
    _sum?: FoodItemSumOrderByAggregateInput
  }

  export type FoodItemScalarWhereWithAggregatesInput = {
    AND?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    OR?: FoodItemScalarWhereWithAggregatesInput[]
    NOT?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodItem"> | string
    booking_id?: StringWithAggregatesFilter<"FoodItem"> | string
    combo_id?: StringWithAggregatesFilter<"FoodItem"> | string
    quantity?: IntWithAggregatesFilter<"FoodItem"> | number
    price?: IntWithAggregatesFilter<"FoodItem"> | number
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    discount_type?: EnumDiscountTypeFilter<"Voucher"> | $Enums.DiscountType
    discount_value?: IntFilter<"Voucher"> | number
    min_amount?: IntFilter<"Voucher"> | number
    max_discount?: IntNullableFilter<"Voucher"> | number | null
    usage_limit?: IntFilter<"Voucher"> | number
    used_count?: IntFilter<"Voucher"> | number
    expires_at?: DateTimeFilter<"Voucher"> | Date | string
    created_at?: DateTimeFilter<"Voucher"> | Date | string
    description?: StringNullableFilter<"Voucher"> | string | null
    is_active?: BoolFilter<"Voucher"> | boolean
    source?: StringFilter<"Voucher"> | string
    owner_user_id?: StringNullableFilter<"Voucher"> | string | null
    bookings?: BookingListRelationFilter
    point_redemptions?: PointRedemptionListRelationFilter
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    min_amount?: SortOrder
    max_discount?: SortOrderInput | SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    source?: SortOrder
    owner_user_id?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    point_redemptions?: PointRedemptionOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    _relevance?: VoucherOrderByRelevanceInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    discount_type?: EnumDiscountTypeFilter<"Voucher"> | $Enums.DiscountType
    discount_value?: IntFilter<"Voucher"> | number
    min_amount?: IntFilter<"Voucher"> | number
    max_discount?: IntNullableFilter<"Voucher"> | number | null
    usage_limit?: IntFilter<"Voucher"> | number
    used_count?: IntFilter<"Voucher"> | number
    expires_at?: DateTimeFilter<"Voucher"> | Date | string
    created_at?: DateTimeFilter<"Voucher"> | Date | string
    description?: StringNullableFilter<"Voucher"> | string | null
    is_active?: BoolFilter<"Voucher"> | boolean
    source?: StringFilter<"Voucher"> | string
    owner_user_id?: StringNullableFilter<"Voucher"> | string | null
    bookings?: BookingListRelationFilter
    point_redemptions?: PointRedemptionListRelationFilter
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "code">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    min_amount?: SortOrder
    max_discount?: SortOrderInput | SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    source?: SortOrder
    owner_user_id?: SortOrderInput | SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voucher"> | string
    code?: StringWithAggregatesFilter<"Voucher"> | string
    discount_type?: EnumDiscountTypeWithAggregatesFilter<"Voucher"> | $Enums.DiscountType
    discount_value?: IntWithAggregatesFilter<"Voucher"> | number
    min_amount?: IntWithAggregatesFilter<"Voucher"> | number
    max_discount?: IntNullableWithAggregatesFilter<"Voucher"> | number | null
    usage_limit?: IntWithAggregatesFilter<"Voucher"> | number
    used_count?: IntWithAggregatesFilter<"Voucher"> | number
    expires_at?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    is_active?: BoolWithAggregatesFilter<"Voucher"> | boolean
    source?: StringWithAggregatesFilter<"Voucher"> | string
    owner_user_id?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
  }

  export type PointRedemptionWhereInput = {
    AND?: PointRedemptionWhereInput | PointRedemptionWhereInput[]
    OR?: PointRedemptionWhereInput[]
    NOT?: PointRedemptionWhereInput | PointRedemptionWhereInput[]
    id?: StringFilter<"PointRedemption"> | string
    user_id?: StringFilter<"PointRedemption"> | string
    points_used?: IntFilter<"PointRedemption"> | number
    voucher_id?: StringFilter<"PointRedemption"> | string
    created_at?: DateTimeFilter<"PointRedemption"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }

  export type PointRedemptionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    points_used?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
    _relevance?: PointRedemptionOrderByRelevanceInput
  }

  export type PointRedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointRedemptionWhereInput | PointRedemptionWhereInput[]
    OR?: PointRedemptionWhereInput[]
    NOT?: PointRedemptionWhereInput | PointRedemptionWhereInput[]
    user_id?: StringFilter<"PointRedemption"> | string
    points_used?: IntFilter<"PointRedemption"> | number
    voucher_id?: StringFilter<"PointRedemption"> | string
    created_at?: DateTimeFilter<"PointRedemption"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }, "id">

  export type PointRedemptionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    points_used?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
    _count?: PointRedemptionCountOrderByAggregateInput
    _avg?: PointRedemptionAvgOrderByAggregateInput
    _max?: PointRedemptionMaxOrderByAggregateInput
    _min?: PointRedemptionMinOrderByAggregateInput
    _sum?: PointRedemptionSumOrderByAggregateInput
  }

  export type PointRedemptionScalarWhereWithAggregatesInput = {
    AND?: PointRedemptionScalarWhereWithAggregatesInput | PointRedemptionScalarWhereWithAggregatesInput[]
    OR?: PointRedemptionScalarWhereWithAggregatesInput[]
    NOT?: PointRedemptionScalarWhereWithAggregatesInput | PointRedemptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointRedemption"> | string
    user_id?: StringWithAggregatesFilter<"PointRedemption"> | string
    points_used?: IntWithAggregatesFilter<"PointRedemption"> | number
    voucher_id?: StringWithAggregatesFilter<"PointRedemption"> | string
    created_at?: DateTimeWithAggregatesFilter<"PointRedemption"> | Date | string
  }

  export type SupportTicketWhereInput = {
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    user_id?: StringFilter<"SupportTicket"> | string
    category?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    status?: StringFilter<"SupportTicket"> | string
    admin_reply?: StringNullableFilter<"SupportTicket"> | string | null
    replied_at?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    created_at?: DateTimeFilter<"SupportTicket"> | Date | string
    updated_at?: DateTimeFilter<"SupportTicket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SupportTicketOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    admin_reply?: SortOrderInput | SortOrder
    replied_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SupportTicketOrderByRelevanceInput
  }

  export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    user_id?: StringFilter<"SupportTicket"> | string
    category?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    status?: StringFilter<"SupportTicket"> | string
    admin_reply?: StringNullableFilter<"SupportTicket"> | string | null
    replied_at?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    created_at?: DateTimeFilter<"SupportTicket"> | Date | string
    updated_at?: DateTimeFilter<"SupportTicket"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SupportTicketOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    admin_reply?: SortOrderInput | SortOrder
    replied_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SupportTicketCountOrderByAggregateInput
    _max?: SupportTicketMaxOrderByAggregateInput
    _min?: SupportTicketMinOrderByAggregateInput
  }

  export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    OR?: SupportTicketScalarWhereWithAggregatesInput[]
    NOT?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportTicket"> | string
    user_id?: StringWithAggregatesFilter<"SupportTicket"> | string
    category?: StringWithAggregatesFilter<"SupportTicket"> | string
    subject?: StringWithAggregatesFilter<"SupportTicket"> | string
    message?: StringWithAggregatesFilter<"SupportTicket"> | string
    status?: StringWithAggregatesFilter<"SupportTicket"> | string
    admin_reply?: StringNullableWithAggregatesFilter<"SupportTicket"> | string | null
    replied_at?: DateTimeNullableWithAggregatesFilter<"SupportTicket"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogUncheckedCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketUncheckedCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUncheckedUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUncheckedUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoyaltyLogCreateInput = {
    id?: string
    points: number
    type: string
    description: string
    booking_id?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutLoyalty_logsInput
  }

  export type LoyaltyLogUncheckedCreateInput = {
    id?: string
    user_id: string
    points: number
    type: string
    description: string
    booking_id?: string | null
    created_at?: Date | string
  }

  export type LoyaltyLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoyalty_logsNestedInput
  }

  export type LoyaltyLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLogCreateManyInput = {
    id?: string
    user_id: string
    points: number
    type: string
    description: string
    booking_id?: string | null
    created_at?: Date | string
  }

  export type LoyaltyLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    id?: string
    tmdb_id: number
    title: string
    original_title: string
    overview: string
    poster_url: string
    backdrop_url: string
    trailer_key?: string | null
    genres: string
    cast: string
    director: string
    duration: number
    rating: number
    language: string
    status: $Enums.MovieStatus
    release_date: Date | string
    showtimes?: ShowtimeCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    tmdb_id: number
    title: string
    original_title: string
    overview: string
    poster_url: string
    backdrop_url: string
    trailer_key?: string | null
    genres: string
    cast: string
    director: string
    duration: number
    rating: number
    language: string
    status: $Enums.MovieStatus
    release_date: Date | string
    showtimes?: ShowtimeUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdb_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    poster_url?: StringFieldUpdateOperationsInput | string
    backdrop_url?: StringFieldUpdateOperationsInput | string
    trailer_key?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    showtimes?: ShowtimeUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdb_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    poster_url?: StringFieldUpdateOperationsInput | string
    backdrop_url?: StringFieldUpdateOperationsInput | string
    trailer_key?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    showtimes?: ShowtimeUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: string
    tmdb_id: number
    title: string
    original_title: string
    overview: string
    poster_url: string
    backdrop_url: string
    trailer_key?: string | null
    genres: string
    cast: string
    director: string
    duration: number
    rating: number
    language: string
    status: $Enums.MovieStatus
    release_date: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdb_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    poster_url?: StringFieldUpdateOperationsInput | string
    backdrop_url?: StringFieldUpdateOperationsInput | string
    trailer_key?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdb_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    poster_url?: StringFieldUpdateOperationsInput | string
    backdrop_url?: StringFieldUpdateOperationsInput | string
    trailer_key?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CinemaCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    lat: number
    lng: number
    image_url?: string | null
    rooms?: RoomCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    lat: number
    lng: number
    image_url?: string | null
    rooms?: RoomUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    lat: number
    lng: number
    image_url?: string | null
  }

  export type CinemaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CinemaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    cinema: CinemaCreateNestedOneWithoutRoomsInput
    seats?: SeatCreateNestedManyWithoutRoomInput
    showtimes?: ShowtimeCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    cinema_id: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    seats?: SeatUncheckedCreateNestedManyWithoutRoomInput
    showtimes?: ShowtimeUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutRoomsNestedInput
    seats?: SeatUpdateManyWithoutRoomNestedInput
    showtimes?: ShowtimeUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cinema_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    seats?: SeatUncheckedUpdateManyWithoutRoomNestedInput
    showtimes?: ShowtimeUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    cinema_id: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cinema_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
  }

  export type SeatCreateInput = {
    id?: string
    row: string
    col: number
    type: $Enums.SeatType
    booking_items?: BookingItemCreateNestedManyWithoutSeatInput
    room: RoomCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateInput = {
    id?: string
    room_id: string
    row: string
    col: number
    type: $Enums.SeatType
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
    booking_items?: BookingItemUpdateManyWithoutSeatNestedInput
    room?: RoomUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
    booking_items?: BookingItemUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatCreateManyInput = {
    id?: string
    room_id: string
    row: string
    col: number
    type: $Enums.SeatType
  }

  export type SeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
  }

  export type ShowtimeCreateInput = {
    id?: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    bookings?: BookingCreateNestedManyWithoutShowtimeInput
    movie: MovieCreateNestedOneWithoutShowtimesInput
    room: RoomCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateInput = {
    id?: string
    movie_id: string
    room_id: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    bookings?: BookingUncheckedCreateNestedManyWithoutShowtimeInput
  }

  export type ShowtimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutShowtimeNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowtimesNestedInput
    room?: RoomUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutShowtimeNestedInput
  }

  export type ShowtimeCreateManyInput = {
    id?: string
    movie_id: string
    room_id: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
  }

  export type ShowtimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
  }

  export type ShowtimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    booking_items?: BookingItemCreateNestedManyWithoutBookingInput
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
    voucher?: VoucherCreateNestedOneWithoutBookingsInput
    food_items?: FoodItemCreateNestedManyWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    user_id: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
    food_items?: FoodItemUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    booking_items?: BookingItemUpdateManyWithoutBookingNestedInput
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    voucher?: VoucherUpdateOneWithoutBookingsNestedInput
    food_items?: FoodItemUpdateManyWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    booking_items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
    food_items?: FoodItemUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    user_id: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingItemCreateInput = {
    id?: string
    price: number
    showtime_id: string
    booking: BookingCreateNestedOneWithoutBooking_itemsInput
    seat: SeatCreateNestedOneWithoutBooking_itemsInput
  }

  export type BookingItemUncheckedCreateInput = {
    id?: string
    booking_id: string
    seat_id: string
    price: number
    showtime_id: string
  }

  export type BookingItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBooking_itemsNestedInput
    seat?: SeatUpdateOneRequiredWithoutBooking_itemsNestedInput
  }

  export type BookingItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    seat_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookingItemCreateManyInput = {
    id?: string
    booking_id: string
    seat_id: string
    price: number
    showtime_id: string
  }

  export type BookingItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookingItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    seat_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    method: $Enums.PaymentMethod
    amount: number
    status?: $Enums.PaymentStatus
    transaction_id?: string | null
    vnpay_data?: string | null
    created_at?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    booking_id: string
    method: $Enums.PaymentMethod
    amount: number
    status?: $Enums.PaymentStatus
    transaction_id?: string | null
    vnpay_data?: string | null
    created_at?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    vnpay_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    vnpay_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    booking_id: string
    method: $Enums.PaymentMethod
    amount: number
    status?: $Enums.PaymentStatus
    transaction_id?: string | null
    vnpay_data?: string | null
    created_at?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    vnpay_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    vnpay_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodComboCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    image_url: string
    food_items?: FoodItemCreateNestedManyWithoutComboInput
  }

  export type FoodComboUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    image_url: string
    food_items?: FoodItemUncheckedCreateNestedManyWithoutComboInput
  }

  export type FoodComboUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    food_items?: FoodItemUpdateManyWithoutComboNestedInput
  }

  export type FoodComboUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    food_items?: FoodItemUncheckedUpdateManyWithoutComboNestedInput
  }

  export type FoodComboCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    image_url: string
  }

  export type FoodComboUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type FoodComboUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type FoodItemCreateInput = {
    id?: string
    quantity: number
    price: number
    booking: BookingCreateNestedOneWithoutFood_itemsInput
    combo: FoodComboCreateNestedOneWithoutFood_itemsInput
  }

  export type FoodItemUncheckedCreateInput = {
    id?: string
    booking_id: string
    combo_id: string
    quantity: number
    price: number
  }

  export type FoodItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking?: BookingUpdateOneRequiredWithoutFood_itemsNestedInput
    combo?: FoodComboUpdateOneRequiredWithoutFood_itemsNestedInput
  }

  export type FoodItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    combo_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FoodItemCreateManyInput = {
    id?: string
    booking_id: string
    combo_id: string
    quantity: number
    price: number
  }

  export type FoodItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FoodItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    combo_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type VoucherCreateInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    bookings?: BookingCreateNestedManyWithoutVoucherInput
    point_redemptions?: PointRedemptionCreateNestedManyWithoutVoucherInput
    owner?: UserCreateNestedOneWithoutOwned_vouchersInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    owner_user_id?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutVoucherInput
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutVoucherNestedInput
    point_redemptions?: PointRedemptionUpdateManyWithoutVoucherNestedInput
    owner?: UserUpdateOneWithoutOwned_vouchersNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    owner_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutVoucherNestedInput
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherCreateManyInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    owner_user_id?: string | null
  }

  export type VoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    owner_user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PointRedemptionCreateInput = {
    id?: string
    points_used: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutPoint_redemptionsInput
    voucher: VoucherCreateNestedOneWithoutPoint_redemptionsInput
  }

  export type PointRedemptionUncheckedCreateInput = {
    id?: string
    user_id: string
    points_used: number
    voucher_id: string
    created_at?: Date | string
  }

  export type PointRedemptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoint_redemptionsNestedInput
    voucher?: VoucherUpdateOneRequiredWithoutPoint_redemptionsNestedInput
  }

  export type PointRedemptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    voucher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRedemptionCreateManyInput = {
    id?: string
    user_id: string
    points_used: number
    voucher_id: string
    created_at?: Date | string
  }

  export type PointRedemptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRedemptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    voucher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketCreateInput = {
    id?: string
    category: string
    subject: string
    message: string
    status?: string
    admin_reply?: string | null
    replied_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSupport_ticketsInput
  }

  export type SupportTicketUncheckedCreateInput = {
    id?: string
    user_id: string
    category: string
    subject: string
    message: string
    status?: string
    admin_reply?: string | null
    replied_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SupportTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    admin_reply?: NullableStringFieldUpdateOperationsInput | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupport_ticketsNestedInput
  }

  export type SupportTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    admin_reply?: NullableStringFieldUpdateOperationsInput | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketCreateManyInput = {
    id?: string
    user_id: string
    category: string
    subject: string
    message: string
    status?: string
    admin_reply?: string | null
    replied_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SupportTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    admin_reply?: NullableStringFieldUpdateOperationsInput | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    admin_reply?: NullableStringFieldUpdateOperationsInput | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type LoyaltyLogListRelationFilter = {
    every?: LoyaltyLogWhereInput
    some?: LoyaltyLogWhereInput
    none?: LoyaltyLogWhereInput
  }

  export type SupportTicketListRelationFilter = {
    every?: SupportTicketWhereInput
    some?: SupportTicketWhereInput
    none?: SupportTicketWhereInput
  }

  export type PointRedemptionListRelationFilter = {
    every?: PointRedemptionWhereInput
    some?: PointRedemptionWhereInput
    none?: PointRedemptionWhereInput
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoyaltyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointRedemptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    loyalty_tier?: SortOrder
    updated_at?: SortOrder
    date_of_birth?: SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrder
    ban_reason?: SortOrder
    is_banned?: SortOrder
    auth_provider?: SortOrder
    google_email?: SortOrder
    google_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    loyalty_points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    loyalty_tier?: SortOrder
    updated_at?: SortOrder
    date_of_birth?: SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrder
    ban_reason?: SortOrder
    is_banned?: SortOrder
    auth_provider?: SortOrder
    google_email?: SortOrder
    google_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    role?: SortOrder
    loyalty_points?: SortOrder
    created_at?: SortOrder
    loyalty_tier?: SortOrder
    updated_at?: SortOrder
    date_of_birth?: SortOrder
    is_verified?: SortOrder
    refresh_token?: SortOrder
    ban_reason?: SortOrder
    is_banned?: SortOrder
    auth_provider?: SortOrder
    google_email?: SortOrder
    google_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    loyalty_points?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LoyaltyLogOrderByRelevanceInput = {
    fields: LoyaltyLogOrderByRelevanceFieldEnum | LoyaltyLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoyaltyLogCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    type?: SortOrder
    description?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
  }

  export type LoyaltyLogAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type LoyaltyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    type?: SortOrder
    description?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
  }

  export type LoyaltyLogMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points?: SortOrder
    type?: SortOrder
    description?: SortOrder
    booking_id?: SortOrder
    created_at?: SortOrder
  }

  export type LoyaltyLogSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumMovieStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovieStatus[]
    notIn?: $Enums.MovieStatus[]
    not?: NestedEnumMovieStatusFilter<$PrismaModel> | $Enums.MovieStatus
  }

  export type ShowtimeListRelationFilter = {
    every?: ShowtimeWhereInput
    some?: ShowtimeWhereInput
    none?: ShowtimeWhereInput
  }

  export type ShowtimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelevanceInput = {
    fields: MovieOrderByRelevanceFieldEnum | MovieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    overview?: SortOrder
    poster_url?: SortOrder
    backdrop_url?: SortOrder
    trailer_key?: SortOrder
    genres?: SortOrder
    cast?: SortOrder
    director?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    language?: SortOrder
    status?: SortOrder
    release_date?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    tmdb_id?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    overview?: SortOrder
    poster_url?: SortOrder
    backdrop_url?: SortOrder
    trailer_key?: SortOrder
    genres?: SortOrder
    cast?: SortOrder
    director?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    language?: SortOrder
    status?: SortOrder
    release_date?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    tmdb_id?: SortOrder
    title?: SortOrder
    original_title?: SortOrder
    overview?: SortOrder
    poster_url?: SortOrder
    backdrop_url?: SortOrder
    trailer_key?: SortOrder
    genres?: SortOrder
    cast?: SortOrder
    director?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
    language?: SortOrder
    status?: SortOrder
    release_date?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    tmdb_id?: SortOrder
    duration?: SortOrder
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumMovieStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovieStatus[]
    notIn?: $Enums.MovieStatus[]
    not?: NestedEnumMovieStatusWithAggregatesFilter<$PrismaModel> | $Enums.MovieStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovieStatusFilter<$PrismaModel>
    _max?: NestedEnumMovieStatusFilter<$PrismaModel>
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CinemaOrderByRelevanceInput = {
    fields: CinemaOrderByRelevanceFieldEnum | CinemaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CinemaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    image_url?: SortOrder
  }

  export type CinemaAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type CinemaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    image_url?: SortOrder
  }

  export type CinemaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    image_url?: SortOrder
  }

  export type CinemaSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type EnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[]
    notIn?: $Enums.RoomType[]
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type CinemaScalarRelationFilter = {
    is?: CinemaWhereInput
    isNot?: CinemaWhereInput
  }

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    cinema_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    total_rows?: SortOrder
    total_cols?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    total_rows?: SortOrder
    total_cols?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    cinema_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    total_rows?: SortOrder
    total_cols?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    cinema_id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    total_rows?: SortOrder
    total_cols?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    total_rows?: SortOrder
    total_cols?: SortOrder
  }

  export type EnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[]
    notIn?: $Enums.RoomType[]
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type EnumSeatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatType | EnumSeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeatType[]
    notIn?: $Enums.SeatType[]
    not?: NestedEnumSeatTypeFilter<$PrismaModel> | $Enums.SeatType
  }

  export type BookingItemListRelationFilter = {
    every?: BookingItemWhereInput
    some?: BookingItemWhereInput
    none?: BookingItemWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type BookingItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatOrderByRelevanceInput = {
    fields: SeatOrderByRelevanceFieldEnum | SeatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeatRoom_idRowColCompoundUniqueInput = {
    room_id: string
    row: string
    col: number
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    type?: SortOrder
  }

  export type SeatAvgOrderByAggregateInput = {
    col?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    type?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    row?: SortOrder
    col?: SortOrder
    type?: SortOrder
  }

  export type SeatSumOrderByAggregateInput = {
    col?: SortOrder
  }

  export type EnumSeatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatType | EnumSeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeatType[]
    notIn?: $Enums.SeatType[]
    not?: NestedEnumSeatTypeWithAggregatesFilter<$PrismaModel> | $Enums.SeatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeatTypeFilter<$PrismaModel>
    _max?: NestedEnumSeatTypeFilter<$PrismaModel>
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type ShowtimeOrderByRelevanceInput = {
    fields: ShowtimeOrderByRelevanceFieldEnum | ShowtimeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShowtimeCountOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    vip_price?: SortOrder
    couple_price?: SortOrder
    language?: SortOrder
    format?: SortOrder
  }

  export type ShowtimeAvgOrderByAggregateInput = {
    price?: SortOrder
    vip_price?: SortOrder
    couple_price?: SortOrder
  }

  export type ShowtimeMaxOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    vip_price?: SortOrder
    couple_price?: SortOrder
    language?: SortOrder
    format?: SortOrder
  }

  export type ShowtimeMinOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
    room_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    price?: SortOrder
    vip_price?: SortOrder
    couple_price?: SortOrder
    language?: SortOrder
    format?: SortOrder
  }

  export type ShowtimeSumOrderByAggregateInput = {
    price?: SortOrder
    vip_price?: SortOrder
    couple_price?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type ShowtimeScalarRelationFilter = {
    is?: ShowtimeWhereInput
    isNot?: ShowtimeWhereInput
  }

  export type VoucherNullableScalarRelationFilter = {
    is?: VoucherWhereInput | null
    isNot?: VoucherWhereInput | null
  }

  export type FoodItemListRelationFilter = {
    every?: FoodItemWhereInput
    some?: FoodItemWhereInput
    none?: FoodItemWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type FoodItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    showtime_id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    qr_code?: SortOrder
    qr_image_url?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    discount_amount?: SortOrder
    voucher_code?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    total_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    showtime_id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    qr_code?: SortOrder
    qr_image_url?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    discount_amount?: SortOrder
    voucher_code?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    showtime_id?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    qr_code?: SortOrder
    qr_image_url?: SortOrder
    paid_at?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    discount_amount?: SortOrder
    voucher_code?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    total_amount?: SortOrder
    discount_amount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type SeatScalarRelationFilter = {
    is?: SeatWhereInput
    isNot?: SeatWhereInput
  }

  export type BookingItemOrderByRelevanceInput = {
    fields: BookingItemOrderByRelevanceFieldEnum | BookingItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingItemBooking_idSeat_idCompoundUniqueInput = {
    booking_id: string
    seat_id: string
  }

  export type BookingItemCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    seat_id?: SortOrder
    price?: SortOrder
    showtime_id?: SortOrder
  }

  export type BookingItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BookingItemMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    seat_id?: SortOrder
    price?: SortOrder
    showtime_id?: SortOrder
  }

  export type BookingItemMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    seat_id?: SortOrder
    price?: SortOrder
    showtime_id?: SortOrder
  }

  export type BookingItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    vnpay_data?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    vnpay_data?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    transaction_id?: SortOrder
    vnpay_data?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type FoodComboOrderByRelevanceInput = {
    fields: FoodComboOrderByRelevanceFieldEnum | FoodComboOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodComboCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
  }

  export type FoodComboAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FoodComboMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
  }

  export type FoodComboMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image_url?: SortOrder
  }

  export type FoodComboSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FoodComboScalarRelationFilter = {
    is?: FoodComboWhereInput
    isNot?: FoodComboWhereInput
  }

  export type FoodItemOrderByRelevanceInput = {
    fields: FoodItemOrderByRelevanceFieldEnum | FoodItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    combo_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type FoodItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type FoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    combo_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type FoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    booking_id?: SortOrder
    combo_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type FoodItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type EnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VoucherOrderByRelevanceInput = {
    fields: VoucherOrderByRelevanceFieldEnum | VoucherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    min_amount?: SortOrder
    max_discount?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    source?: SortOrder
    owner_user_id?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    discount_value?: SortOrder
    min_amount?: SortOrder
    max_discount?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    min_amount?: SortOrder
    max_discount?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    source?: SortOrder
    owner_user_id?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount_type?: SortOrder
    discount_value?: SortOrder
    min_amount?: SortOrder
    max_discount?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    source?: SortOrder
    owner_user_id?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    discount_value?: SortOrder
    min_amount?: SortOrder
    max_discount?: SortOrder
    usage_limit?: SortOrder
    used_count?: SortOrder
  }

  export type EnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type VoucherScalarRelationFilter = {
    is?: VoucherWhereInput
    isNot?: VoucherWhereInput
  }

  export type PointRedemptionOrderByRelevanceInput = {
    fields: PointRedemptionOrderByRelevanceFieldEnum | PointRedemptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PointRedemptionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points_used?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
  }

  export type PointRedemptionAvgOrderByAggregateInput = {
    points_used?: SortOrder
  }

  export type PointRedemptionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points_used?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
  }

  export type PointRedemptionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    points_used?: SortOrder
    voucher_id?: SortOrder
    created_at?: SortOrder
  }

  export type PointRedemptionSumOrderByAggregateInput = {
    points_used?: SortOrder
  }

  export type SupportTicketOrderByRelevanceInput = {
    fields: SupportTicketOrderByRelevanceFieldEnum | SupportTicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SupportTicketCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    admin_reply?: SortOrder
    replied_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SupportTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    admin_reply?: SortOrder
    replied_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SupportTicketMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    admin_reply?: SortOrder
    replied_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LoyaltyLogCreateNestedManyWithoutUserInput = {
    create?: XOR<LoyaltyLogCreateWithoutUserInput, LoyaltyLogUncheckedCreateWithoutUserInput> | LoyaltyLogCreateWithoutUserInput[] | LoyaltyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLogCreateOrConnectWithoutUserInput | LoyaltyLogCreateOrConnectWithoutUserInput[]
    createMany?: LoyaltyLogCreateManyUserInputEnvelope
    connect?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
  }

  export type SupportTicketCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportTicketCreateWithoutUserInput, SupportTicketUncheckedCreateWithoutUserInput> | SupportTicketCreateWithoutUserInput[] | SupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutUserInput | SupportTicketCreateOrConnectWithoutUserInput[]
    createMany?: SupportTicketCreateManyUserInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type PointRedemptionCreateNestedManyWithoutUserInput = {
    create?: XOR<PointRedemptionCreateWithoutUserInput, PointRedemptionUncheckedCreateWithoutUserInput> | PointRedemptionCreateWithoutUserInput[] | PointRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutUserInput | PointRedemptionCreateOrConnectWithoutUserInput[]
    createMany?: PointRedemptionCreateManyUserInputEnvelope
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VoucherCreateWithoutOwnerInput, VoucherUncheckedCreateWithoutOwnerInput> | VoucherCreateWithoutOwnerInput[] | VoucherUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOwnerInput | VoucherCreateOrConnectWithoutOwnerInput[]
    createMany?: VoucherCreateManyOwnerInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type LoyaltyLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoyaltyLogCreateWithoutUserInput, LoyaltyLogUncheckedCreateWithoutUserInput> | LoyaltyLogCreateWithoutUserInput[] | LoyaltyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLogCreateOrConnectWithoutUserInput | LoyaltyLogCreateOrConnectWithoutUserInput[]
    createMany?: LoyaltyLogCreateManyUserInputEnvelope
    connect?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
  }

  export type SupportTicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportTicketCreateWithoutUserInput, SupportTicketUncheckedCreateWithoutUserInput> | SupportTicketCreateWithoutUserInput[] | SupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutUserInput | SupportTicketCreateOrConnectWithoutUserInput[]
    createMany?: SupportTicketCreateManyUserInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type PointRedemptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointRedemptionCreateWithoutUserInput, PointRedemptionUncheckedCreateWithoutUserInput> | PointRedemptionCreateWithoutUserInput[] | PointRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutUserInput | PointRedemptionCreateOrConnectWithoutUserInput[]
    createMany?: PointRedemptionCreateManyUserInputEnvelope
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VoucherCreateWithoutOwnerInput, VoucherUncheckedCreateWithoutOwnerInput> | VoucherCreateWithoutOwnerInput[] | VoucherUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOwnerInput | VoucherCreateOrConnectWithoutOwnerInput[]
    createMany?: VoucherCreateManyOwnerInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type LoyaltyLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoyaltyLogCreateWithoutUserInput, LoyaltyLogUncheckedCreateWithoutUserInput> | LoyaltyLogCreateWithoutUserInput[] | LoyaltyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLogCreateOrConnectWithoutUserInput | LoyaltyLogCreateOrConnectWithoutUserInput[]
    upsert?: LoyaltyLogUpsertWithWhereUniqueWithoutUserInput | LoyaltyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoyaltyLogCreateManyUserInputEnvelope
    set?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    disconnect?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    delete?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    connect?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    update?: LoyaltyLogUpdateWithWhereUniqueWithoutUserInput | LoyaltyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoyaltyLogUpdateManyWithWhereWithoutUserInput | LoyaltyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoyaltyLogScalarWhereInput | LoyaltyLogScalarWhereInput[]
  }

  export type SupportTicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportTicketCreateWithoutUserInput, SupportTicketUncheckedCreateWithoutUserInput> | SupportTicketCreateWithoutUserInput[] | SupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutUserInput | SupportTicketCreateOrConnectWithoutUserInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutUserInput | SupportTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportTicketCreateManyUserInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutUserInput | SupportTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutUserInput | SupportTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type PointRedemptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointRedemptionCreateWithoutUserInput, PointRedemptionUncheckedCreateWithoutUserInput> | PointRedemptionCreateWithoutUserInput[] | PointRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutUserInput | PointRedemptionCreateOrConnectWithoutUserInput[]
    upsert?: PointRedemptionUpsertWithWhereUniqueWithoutUserInput | PointRedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointRedemptionCreateManyUserInputEnvelope
    set?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    disconnect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    delete?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    update?: PointRedemptionUpdateWithWhereUniqueWithoutUserInput | PointRedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointRedemptionUpdateManyWithWhereWithoutUserInput | PointRedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointRedemptionScalarWhereInput | PointRedemptionScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VoucherCreateWithoutOwnerInput, VoucherUncheckedCreateWithoutOwnerInput> | VoucherCreateWithoutOwnerInput[] | VoucherUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOwnerInput | VoucherCreateOrConnectWithoutOwnerInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutOwnerInput | VoucherUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VoucherCreateManyOwnerInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutOwnerInput | VoucherUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutOwnerInput | VoucherUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type LoyaltyLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoyaltyLogCreateWithoutUserInput, LoyaltyLogUncheckedCreateWithoutUserInput> | LoyaltyLogCreateWithoutUserInput[] | LoyaltyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoyaltyLogCreateOrConnectWithoutUserInput | LoyaltyLogCreateOrConnectWithoutUserInput[]
    upsert?: LoyaltyLogUpsertWithWhereUniqueWithoutUserInput | LoyaltyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoyaltyLogCreateManyUserInputEnvelope
    set?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    disconnect?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    delete?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    connect?: LoyaltyLogWhereUniqueInput | LoyaltyLogWhereUniqueInput[]
    update?: LoyaltyLogUpdateWithWhereUniqueWithoutUserInput | LoyaltyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoyaltyLogUpdateManyWithWhereWithoutUserInput | LoyaltyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoyaltyLogScalarWhereInput | LoyaltyLogScalarWhereInput[]
  }

  export type SupportTicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportTicketCreateWithoutUserInput, SupportTicketUncheckedCreateWithoutUserInput> | SupportTicketCreateWithoutUserInput[] | SupportTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutUserInput | SupportTicketCreateOrConnectWithoutUserInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutUserInput | SupportTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportTicketCreateManyUserInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutUserInput | SupportTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutUserInput | SupportTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type PointRedemptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointRedemptionCreateWithoutUserInput, PointRedemptionUncheckedCreateWithoutUserInput> | PointRedemptionCreateWithoutUserInput[] | PointRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutUserInput | PointRedemptionCreateOrConnectWithoutUserInput[]
    upsert?: PointRedemptionUpsertWithWhereUniqueWithoutUserInput | PointRedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointRedemptionCreateManyUserInputEnvelope
    set?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    disconnect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    delete?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    update?: PointRedemptionUpdateWithWhereUniqueWithoutUserInput | PointRedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointRedemptionUpdateManyWithWhereWithoutUserInput | PointRedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointRedemptionScalarWhereInput | PointRedemptionScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VoucherCreateWithoutOwnerInput, VoucherUncheckedCreateWithoutOwnerInput> | VoucherCreateWithoutOwnerInput[] | VoucherUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOwnerInput | VoucherCreateOrConnectWithoutOwnerInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutOwnerInput | VoucherUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VoucherCreateManyOwnerInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutOwnerInput | VoucherUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutOwnerInput | VoucherUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLoyalty_logsInput = {
    create?: XOR<UserCreateWithoutLoyalty_logsInput, UserUncheckedCreateWithoutLoyalty_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoyalty_logsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLoyalty_logsNestedInput = {
    create?: XOR<UserCreateWithoutLoyalty_logsInput, UserUncheckedCreateWithoutLoyalty_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoyalty_logsInput
    upsert?: UserUpsertWithoutLoyalty_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoyalty_logsInput, UserUpdateWithoutLoyalty_logsInput>, UserUncheckedUpdateWithoutLoyalty_logsInput>
  }

  export type ShowtimeCreateNestedManyWithoutMovieInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type ShowtimeUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMovieStatusFieldUpdateOperationsInput = {
    set?: $Enums.MovieStatus
  }

  export type ShowtimeUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutMovieInput | ShowtimeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutMovieInput | ShowtimeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutMovieInput | ShowtimeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type ShowtimeUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput> | ShowtimeCreateWithoutMovieInput[] | ShowtimeUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutMovieInput | ShowtimeCreateOrConnectWithoutMovieInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutMovieInput | ShowtimeUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ShowtimeCreateManyMovieInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutMovieInput | ShowtimeUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutMovieInput | ShowtimeUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutCinemaInput = {
    create?: XOR<RoomCreateWithoutCinemaInput, RoomUncheckedCreateWithoutCinemaInput> | RoomCreateWithoutCinemaInput[] | RoomUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCinemaInput | RoomCreateOrConnectWithoutCinemaInput[]
    createMany?: RoomCreateManyCinemaInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<RoomCreateWithoutCinemaInput, RoomUncheckedCreateWithoutCinemaInput> | RoomCreateWithoutCinemaInput[] | RoomUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCinemaInput | RoomCreateOrConnectWithoutCinemaInput[]
    createMany?: RoomCreateManyCinemaInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<RoomCreateWithoutCinemaInput, RoomUncheckedCreateWithoutCinemaInput> | RoomCreateWithoutCinemaInput[] | RoomUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCinemaInput | RoomCreateOrConnectWithoutCinemaInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCinemaInput | RoomUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: RoomCreateManyCinemaInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCinemaInput | RoomUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCinemaInput | RoomUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<RoomCreateWithoutCinemaInput, RoomUncheckedCreateWithoutCinemaInput> | RoomCreateWithoutCinemaInput[] | RoomUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutCinemaInput | RoomCreateOrConnectWithoutCinemaInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutCinemaInput | RoomUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: RoomCreateManyCinemaInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutCinemaInput | RoomUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutCinemaInput | RoomUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type CinemaCreateNestedOneWithoutRoomsInput = {
    create?: XOR<CinemaCreateWithoutRoomsInput, CinemaUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutRoomsInput
    connect?: CinemaWhereUniqueInput
  }

  export type SeatCreateNestedManyWithoutRoomInput = {
    create?: XOR<SeatCreateWithoutRoomInput, SeatUncheckedCreateWithoutRoomInput> | SeatCreateWithoutRoomInput[] | SeatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutRoomInput | SeatCreateOrConnectWithoutRoomInput[]
    createMany?: SeatCreateManyRoomInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ShowtimeCreateNestedManyWithoutRoomInput = {
    create?: XOR<ShowtimeCreateWithoutRoomInput, ShowtimeUncheckedCreateWithoutRoomInput> | ShowtimeCreateWithoutRoomInput[] | ShowtimeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutRoomInput | ShowtimeCreateOrConnectWithoutRoomInput[]
    createMany?: ShowtimeCreateManyRoomInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<SeatCreateWithoutRoomInput, SeatUncheckedCreateWithoutRoomInput> | SeatCreateWithoutRoomInput[] | SeatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutRoomInput | SeatCreateOrConnectWithoutRoomInput[]
    createMany?: SeatCreateManyRoomInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ShowtimeUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ShowtimeCreateWithoutRoomInput, ShowtimeUncheckedCreateWithoutRoomInput> | ShowtimeCreateWithoutRoomInput[] | ShowtimeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutRoomInput | ShowtimeCreateOrConnectWithoutRoomInput[]
    createMany?: ShowtimeCreateManyRoomInputEnvelope
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
  }

  export type EnumRoomTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoomType
  }

  export type CinemaUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<CinemaCreateWithoutRoomsInput, CinemaUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutRoomsInput
    upsert?: CinemaUpsertWithoutRoomsInput
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutRoomsInput, CinemaUpdateWithoutRoomsInput>, CinemaUncheckedUpdateWithoutRoomsInput>
  }

  export type SeatUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SeatCreateWithoutRoomInput, SeatUncheckedCreateWithoutRoomInput> | SeatCreateWithoutRoomInput[] | SeatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutRoomInput | SeatCreateOrConnectWithoutRoomInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutRoomInput | SeatUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SeatCreateManyRoomInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutRoomInput | SeatUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutRoomInput | SeatUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ShowtimeUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ShowtimeCreateWithoutRoomInput, ShowtimeUncheckedCreateWithoutRoomInput> | ShowtimeCreateWithoutRoomInput[] | ShowtimeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutRoomInput | ShowtimeCreateOrConnectWithoutRoomInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutRoomInput | ShowtimeUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ShowtimeCreateManyRoomInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutRoomInput | ShowtimeUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutRoomInput | ShowtimeUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<SeatCreateWithoutRoomInput, SeatUncheckedCreateWithoutRoomInput> | SeatCreateWithoutRoomInput[] | SeatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutRoomInput | SeatCreateOrConnectWithoutRoomInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutRoomInput | SeatUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: SeatCreateManyRoomInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutRoomInput | SeatUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutRoomInput | SeatUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ShowtimeUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ShowtimeCreateWithoutRoomInput, ShowtimeUncheckedCreateWithoutRoomInput> | ShowtimeCreateWithoutRoomInput[] | ShowtimeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShowtimeCreateOrConnectWithoutRoomInput | ShowtimeCreateOrConnectWithoutRoomInput[]
    upsert?: ShowtimeUpsertWithWhereUniqueWithoutRoomInput | ShowtimeUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ShowtimeCreateManyRoomInputEnvelope
    set?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    disconnect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    delete?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    connect?: ShowtimeWhereUniqueInput | ShowtimeWhereUniqueInput[]
    update?: ShowtimeUpdateWithWhereUniqueWithoutRoomInput | ShowtimeUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ShowtimeUpdateManyWithWhereWithoutRoomInput | ShowtimeUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
  }

  export type BookingItemCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingItemCreateWithoutSeatInput, BookingItemUncheckedCreateWithoutSeatInput> | BookingItemCreateWithoutSeatInput[] | BookingItemUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutSeatInput | BookingItemCreateOrConnectWithoutSeatInput[]
    createMany?: BookingItemCreateManySeatInputEnvelope
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
  }

  export type RoomCreateNestedOneWithoutSeatsInput = {
    create?: XOR<RoomCreateWithoutSeatsInput, RoomUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSeatsInput
    connect?: RoomWhereUniqueInput
  }

  export type BookingItemUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<BookingItemCreateWithoutSeatInput, BookingItemUncheckedCreateWithoutSeatInput> | BookingItemCreateWithoutSeatInput[] | BookingItemUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutSeatInput | BookingItemCreateOrConnectWithoutSeatInput[]
    createMany?: BookingItemCreateManySeatInputEnvelope
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
  }

  export type EnumSeatTypeFieldUpdateOperationsInput = {
    set?: $Enums.SeatType
  }

  export type BookingItemUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingItemCreateWithoutSeatInput, BookingItemUncheckedCreateWithoutSeatInput> | BookingItemCreateWithoutSeatInput[] | BookingItemUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutSeatInput | BookingItemCreateOrConnectWithoutSeatInput[]
    upsert?: BookingItemUpsertWithWhereUniqueWithoutSeatInput | BookingItemUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingItemCreateManySeatInputEnvelope
    set?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    disconnect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    delete?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    update?: BookingItemUpdateWithWhereUniqueWithoutSeatInput | BookingItemUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingItemUpdateManyWithWhereWithoutSeatInput | BookingItemUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
  }

  export type RoomUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<RoomCreateWithoutSeatsInput, RoomUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutSeatsInput
    upsert?: RoomUpsertWithoutSeatsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutSeatsInput, RoomUpdateWithoutSeatsInput>, RoomUncheckedUpdateWithoutSeatsInput>
  }

  export type BookingItemUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<BookingItemCreateWithoutSeatInput, BookingItemUncheckedCreateWithoutSeatInput> | BookingItemCreateWithoutSeatInput[] | BookingItemUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutSeatInput | BookingItemCreateOrConnectWithoutSeatInput[]
    upsert?: BookingItemUpsertWithWhereUniqueWithoutSeatInput | BookingItemUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: BookingItemCreateManySeatInputEnvelope
    set?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    disconnect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    delete?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    update?: BookingItemUpdateWithWhereUniqueWithoutSeatInput | BookingItemUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: BookingItemUpdateManyWithWhereWithoutSeatInput | BookingItemUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutShowtimeInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type MovieCreateNestedOneWithoutShowtimesInput = {
    create?: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowtimesInput
    connect?: MovieWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutShowtimesInput = {
    create?: XOR<RoomCreateWithoutShowtimesInput, RoomUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutShowtimesInput
    connect?: RoomWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutShowtimeInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutShowtimeNestedInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShowtimeInput | BookingUpsertWithWhereUniqueWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShowtimeInput | BookingUpdateWithWhereUniqueWithoutShowtimeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShowtimeInput | BookingUpdateManyWithWhereWithoutShowtimeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type MovieUpdateOneRequiredWithoutShowtimesNestedInput = {
    create?: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowtimesInput
    upsert?: MovieUpsertWithoutShowtimesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutShowtimesInput, MovieUpdateWithoutShowtimesInput>, MovieUncheckedUpdateWithoutShowtimesInput>
  }

  export type RoomUpdateOneRequiredWithoutShowtimesNestedInput = {
    create?: XOR<RoomCreateWithoutShowtimesInput, RoomUncheckedCreateWithoutShowtimesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutShowtimesInput
    upsert?: RoomUpsertWithoutShowtimesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutShowtimesInput, RoomUpdateWithoutShowtimesInput>, RoomUncheckedUpdateWithoutShowtimesInput>
  }

  export type BookingUncheckedUpdateManyWithoutShowtimeNestedInput = {
    create?: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput> | BookingCreateWithoutShowtimeInput[] | BookingUncheckedCreateWithoutShowtimeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShowtimeInput | BookingCreateOrConnectWithoutShowtimeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShowtimeInput | BookingUpsertWithWhereUniqueWithoutShowtimeInput[]
    createMany?: BookingCreateManyShowtimeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShowtimeInput | BookingUpdateWithWhereUniqueWithoutShowtimeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShowtimeInput | BookingUpdateManyWithWhereWithoutShowtimeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingItemCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
  }

  export type ShowtimeCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShowtimeCreateOrConnectWithoutBookingsInput
    connect?: ShowtimeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutBookingsInput = {
    create?: XOR<VoucherCreateWithoutBookingsInput, VoucherUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutBookingsInput
    connect?: VoucherWhereUniqueInput
  }

  export type FoodItemCreateNestedManyWithoutBookingInput = {
    create?: XOR<FoodItemCreateWithoutBookingInput, FoodItemUncheckedCreateWithoutBookingInput> | FoodItemCreateWithoutBookingInput[] | FoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutBookingInput | FoodItemCreateOrConnectWithoutBookingInput[]
    createMany?: FoodItemCreateManyBookingInputEnvelope
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type BookingItemUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
  }

  export type FoodItemUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<FoodItemCreateWithoutBookingInput, FoodItemUncheckedCreateWithoutBookingInput> | FoodItemCreateWithoutBookingInput[] | FoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutBookingInput | FoodItemCreateOrConnectWithoutBookingInput[]
    createMany?: FoodItemCreateManyBookingInputEnvelope
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type BookingItemUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    upsert?: BookingItemUpsertWithWhereUniqueWithoutBookingInput | BookingItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    set?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    disconnect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    delete?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    update?: BookingItemUpdateWithWhereUniqueWithoutBookingInput | BookingItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingItemUpdateManyWithWhereWithoutBookingInput | BookingItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
  }

  export type ShowtimeUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShowtimeCreateOrConnectWithoutBookingsInput
    upsert?: ShowtimeUpsertWithoutBookingsInput
    connect?: ShowtimeWhereUniqueInput
    update?: XOR<XOR<ShowtimeUpdateToOneWithWhereWithoutBookingsInput, ShowtimeUpdateWithoutBookingsInput>, ShowtimeUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type VoucherUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<VoucherCreateWithoutBookingsInput, VoucherUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutBookingsInput
    upsert?: VoucherUpsertWithoutBookingsInput
    disconnect?: VoucherWhereInput | boolean
    delete?: VoucherWhereInput | boolean
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutBookingsInput, VoucherUpdateWithoutBookingsInput>, VoucherUncheckedUpdateWithoutBookingsInput>
  }

  export type FoodItemUpdateManyWithoutBookingNestedInput = {
    create?: XOR<FoodItemCreateWithoutBookingInput, FoodItemUncheckedCreateWithoutBookingInput> | FoodItemCreateWithoutBookingInput[] | FoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutBookingInput | FoodItemCreateOrConnectWithoutBookingInput[]
    upsert?: FoodItemUpsertWithWhereUniqueWithoutBookingInput | FoodItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: FoodItemCreateManyBookingInputEnvelope
    set?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    disconnect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    delete?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    update?: FoodItemUpdateWithWhereUniqueWithoutBookingInput | FoodItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: FoodItemUpdateManyWithWhereWithoutBookingInput | FoodItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: FoodItemScalarWhereInput | FoodItemScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type BookingItemUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput> | BookingItemCreateWithoutBookingInput[] | BookingItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput | BookingItemCreateOrConnectWithoutBookingInput[]
    upsert?: BookingItemUpsertWithWhereUniqueWithoutBookingInput | BookingItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingItemCreateManyBookingInputEnvelope
    set?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    disconnect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    delete?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    connect?: BookingItemWhereUniqueInput | BookingItemWhereUniqueInput[]
    update?: BookingItemUpdateWithWhereUniqueWithoutBookingInput | BookingItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingItemUpdateManyWithWhereWithoutBookingInput | BookingItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
  }

  export type FoodItemUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<FoodItemCreateWithoutBookingInput, FoodItemUncheckedCreateWithoutBookingInput> | FoodItemCreateWithoutBookingInput[] | FoodItemUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutBookingInput | FoodItemCreateOrConnectWithoutBookingInput[]
    upsert?: FoodItemUpsertWithWhereUniqueWithoutBookingInput | FoodItemUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: FoodItemCreateManyBookingInputEnvelope
    set?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    disconnect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    delete?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    update?: FoodItemUpdateWithWhereUniqueWithoutBookingInput | FoodItemUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: FoodItemUpdateManyWithWhereWithoutBookingInput | FoodItemUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: FoodItemScalarWhereInput | FoodItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutBooking_itemsInput = {
    create?: XOR<BookingCreateWithoutBooking_itemsInput, BookingUncheckedCreateWithoutBooking_itemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBooking_itemsInput
    connect?: BookingWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutBooking_itemsInput = {
    create?: XOR<SeatCreateWithoutBooking_itemsInput, SeatUncheckedCreateWithoutBooking_itemsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBooking_itemsInput
    connect?: SeatWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutBooking_itemsNestedInput = {
    create?: XOR<BookingCreateWithoutBooking_itemsInput, BookingUncheckedCreateWithoutBooking_itemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBooking_itemsInput
    upsert?: BookingUpsertWithoutBooking_itemsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutBooking_itemsInput, BookingUpdateWithoutBooking_itemsInput>, BookingUncheckedUpdateWithoutBooking_itemsInput>
  }

  export type SeatUpdateOneRequiredWithoutBooking_itemsNestedInput = {
    create?: XOR<SeatCreateWithoutBooking_itemsInput, SeatUncheckedCreateWithoutBooking_itemsInput>
    connectOrCreate?: SeatCreateOrConnectWithoutBooking_itemsInput
    upsert?: SeatUpsertWithoutBooking_itemsInput
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutBooking_itemsInput, SeatUpdateWithoutBooking_itemsInput>, SeatUncheckedUpdateWithoutBooking_itemsInput>
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type FoodItemCreateNestedManyWithoutComboInput = {
    create?: XOR<FoodItemCreateWithoutComboInput, FoodItemUncheckedCreateWithoutComboInput> | FoodItemCreateWithoutComboInput[] | FoodItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutComboInput | FoodItemCreateOrConnectWithoutComboInput[]
    createMany?: FoodItemCreateManyComboInputEnvelope
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
  }

  export type FoodItemUncheckedCreateNestedManyWithoutComboInput = {
    create?: XOR<FoodItemCreateWithoutComboInput, FoodItemUncheckedCreateWithoutComboInput> | FoodItemCreateWithoutComboInput[] | FoodItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutComboInput | FoodItemCreateOrConnectWithoutComboInput[]
    createMany?: FoodItemCreateManyComboInputEnvelope
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
  }

  export type FoodItemUpdateManyWithoutComboNestedInput = {
    create?: XOR<FoodItemCreateWithoutComboInput, FoodItemUncheckedCreateWithoutComboInput> | FoodItemCreateWithoutComboInput[] | FoodItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutComboInput | FoodItemCreateOrConnectWithoutComboInput[]
    upsert?: FoodItemUpsertWithWhereUniqueWithoutComboInput | FoodItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: FoodItemCreateManyComboInputEnvelope
    set?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    disconnect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    delete?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    update?: FoodItemUpdateWithWhereUniqueWithoutComboInput | FoodItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: FoodItemUpdateManyWithWhereWithoutComboInput | FoodItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: FoodItemScalarWhereInput | FoodItemScalarWhereInput[]
  }

  export type FoodItemUncheckedUpdateManyWithoutComboNestedInput = {
    create?: XOR<FoodItemCreateWithoutComboInput, FoodItemUncheckedCreateWithoutComboInput> | FoodItemCreateWithoutComboInput[] | FoodItemUncheckedCreateWithoutComboInput[]
    connectOrCreate?: FoodItemCreateOrConnectWithoutComboInput | FoodItemCreateOrConnectWithoutComboInput[]
    upsert?: FoodItemUpsertWithWhereUniqueWithoutComboInput | FoodItemUpsertWithWhereUniqueWithoutComboInput[]
    createMany?: FoodItemCreateManyComboInputEnvelope
    set?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    disconnect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    delete?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    connect?: FoodItemWhereUniqueInput | FoodItemWhereUniqueInput[]
    update?: FoodItemUpdateWithWhereUniqueWithoutComboInput | FoodItemUpdateWithWhereUniqueWithoutComboInput[]
    updateMany?: FoodItemUpdateManyWithWhereWithoutComboInput | FoodItemUpdateManyWithWhereWithoutComboInput[]
    deleteMany?: FoodItemScalarWhereInput | FoodItemScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutFood_itemsInput = {
    create?: XOR<BookingCreateWithoutFood_itemsInput, BookingUncheckedCreateWithoutFood_itemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutFood_itemsInput
    connect?: BookingWhereUniqueInput
  }

  export type FoodComboCreateNestedOneWithoutFood_itemsInput = {
    create?: XOR<FoodComboCreateWithoutFood_itemsInput, FoodComboUncheckedCreateWithoutFood_itemsInput>
    connectOrCreate?: FoodComboCreateOrConnectWithoutFood_itemsInput
    connect?: FoodComboWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutFood_itemsNestedInput = {
    create?: XOR<BookingCreateWithoutFood_itemsInput, BookingUncheckedCreateWithoutFood_itemsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutFood_itemsInput
    upsert?: BookingUpsertWithoutFood_itemsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutFood_itemsInput, BookingUpdateWithoutFood_itemsInput>, BookingUncheckedUpdateWithoutFood_itemsInput>
  }

  export type FoodComboUpdateOneRequiredWithoutFood_itemsNestedInput = {
    create?: XOR<FoodComboCreateWithoutFood_itemsInput, FoodComboUncheckedCreateWithoutFood_itemsInput>
    connectOrCreate?: FoodComboCreateOrConnectWithoutFood_itemsInput
    upsert?: FoodComboUpsertWithoutFood_itemsInput
    connect?: FoodComboWhereUniqueInput
    update?: XOR<XOR<FoodComboUpdateToOneWithWhereWithoutFood_itemsInput, FoodComboUpdateWithoutFood_itemsInput>, FoodComboUncheckedUpdateWithoutFood_itemsInput>
  }

  export type BookingCreateNestedManyWithoutVoucherInput = {
    create?: XOR<BookingCreateWithoutVoucherInput, BookingUncheckedCreateWithoutVoucherInput> | BookingCreateWithoutVoucherInput[] | BookingUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVoucherInput | BookingCreateOrConnectWithoutVoucherInput[]
    createMany?: BookingCreateManyVoucherInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PointRedemptionCreateNestedManyWithoutVoucherInput = {
    create?: XOR<PointRedemptionCreateWithoutVoucherInput, PointRedemptionUncheckedCreateWithoutVoucherInput> | PointRedemptionCreateWithoutVoucherInput[] | PointRedemptionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutVoucherInput | PointRedemptionCreateOrConnectWithoutVoucherInput[]
    createMany?: PointRedemptionCreateManyVoucherInputEnvelope
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOwned_vouchersInput = {
    create?: XOR<UserCreateWithoutOwned_vouchersInput, UserUncheckedCreateWithoutOwned_vouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwned_vouchersInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<BookingCreateWithoutVoucherInput, BookingUncheckedCreateWithoutVoucherInput> | BookingCreateWithoutVoucherInput[] | BookingUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVoucherInput | BookingCreateOrConnectWithoutVoucherInput[]
    createMany?: BookingCreateManyVoucherInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PointRedemptionUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<PointRedemptionCreateWithoutVoucherInput, PointRedemptionUncheckedCreateWithoutVoucherInput> | PointRedemptionCreateWithoutVoucherInput[] | PointRedemptionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutVoucherInput | PointRedemptionCreateOrConnectWithoutVoucherInput[]
    createMany?: PointRedemptionCreateManyVoucherInputEnvelope
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
  }

  export type EnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<BookingCreateWithoutVoucherInput, BookingUncheckedCreateWithoutVoucherInput> | BookingCreateWithoutVoucherInput[] | BookingUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVoucherInput | BookingCreateOrConnectWithoutVoucherInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVoucherInput | BookingUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: BookingCreateManyVoucherInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVoucherInput | BookingUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVoucherInput | BookingUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PointRedemptionUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<PointRedemptionCreateWithoutVoucherInput, PointRedemptionUncheckedCreateWithoutVoucherInput> | PointRedemptionCreateWithoutVoucherInput[] | PointRedemptionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutVoucherInput | PointRedemptionCreateOrConnectWithoutVoucherInput[]
    upsert?: PointRedemptionUpsertWithWhereUniqueWithoutVoucherInput | PointRedemptionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: PointRedemptionCreateManyVoucherInputEnvelope
    set?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    disconnect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    delete?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    update?: PointRedemptionUpdateWithWhereUniqueWithoutVoucherInput | PointRedemptionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: PointRedemptionUpdateManyWithWhereWithoutVoucherInput | PointRedemptionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: PointRedemptionScalarWhereInput | PointRedemptionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutOwned_vouchersNestedInput = {
    create?: XOR<UserCreateWithoutOwned_vouchersInput, UserUncheckedCreateWithoutOwned_vouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwned_vouchersInput
    upsert?: UserUpsertWithoutOwned_vouchersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwned_vouchersInput, UserUpdateWithoutOwned_vouchersInput>, UserUncheckedUpdateWithoutOwned_vouchersInput>
  }

  export type BookingUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<BookingCreateWithoutVoucherInput, BookingUncheckedCreateWithoutVoucherInput> | BookingCreateWithoutVoucherInput[] | BookingUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutVoucherInput | BookingCreateOrConnectWithoutVoucherInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutVoucherInput | BookingUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: BookingCreateManyVoucherInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutVoucherInput | BookingUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutVoucherInput | BookingUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PointRedemptionUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<PointRedemptionCreateWithoutVoucherInput, PointRedemptionUncheckedCreateWithoutVoucherInput> | PointRedemptionCreateWithoutVoucherInput[] | PointRedemptionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: PointRedemptionCreateOrConnectWithoutVoucherInput | PointRedemptionCreateOrConnectWithoutVoucherInput[]
    upsert?: PointRedemptionUpsertWithWhereUniqueWithoutVoucherInput | PointRedemptionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: PointRedemptionCreateManyVoucherInputEnvelope
    set?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    disconnect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    delete?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    connect?: PointRedemptionWhereUniqueInput | PointRedemptionWhereUniqueInput[]
    update?: PointRedemptionUpdateWithWhereUniqueWithoutVoucherInput | PointRedemptionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: PointRedemptionUpdateManyWithWhereWithoutVoucherInput | PointRedemptionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: PointRedemptionScalarWhereInput | PointRedemptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPoint_redemptionsInput = {
    create?: XOR<UserCreateWithoutPoint_redemptionsInput, UserUncheckedCreateWithoutPoint_redemptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoint_redemptionsInput
    connect?: UserWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutPoint_redemptionsInput = {
    create?: XOR<VoucherCreateWithoutPoint_redemptionsInput, VoucherUncheckedCreateWithoutPoint_redemptionsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutPoint_redemptionsInput
    connect?: VoucherWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPoint_redemptionsNestedInput = {
    create?: XOR<UserCreateWithoutPoint_redemptionsInput, UserUncheckedCreateWithoutPoint_redemptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPoint_redemptionsInput
    upsert?: UserUpsertWithoutPoint_redemptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPoint_redemptionsInput, UserUpdateWithoutPoint_redemptionsInput>, UserUncheckedUpdateWithoutPoint_redemptionsInput>
  }

  export type VoucherUpdateOneRequiredWithoutPoint_redemptionsNestedInput = {
    create?: XOR<VoucherCreateWithoutPoint_redemptionsInput, VoucherUncheckedCreateWithoutPoint_redemptionsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutPoint_redemptionsInput
    upsert?: VoucherUpsertWithoutPoint_redemptionsInput
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutPoint_redemptionsInput, VoucherUpdateWithoutPoint_redemptionsInput>, VoucherUncheckedUpdateWithoutPoint_redemptionsInput>
  }

  export type UserCreateNestedOneWithoutSupport_ticketsInput = {
    create?: XOR<UserCreateWithoutSupport_ticketsInput, UserUncheckedCreateWithoutSupport_ticketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupport_ticketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSupport_ticketsNestedInput = {
    create?: XOR<UserCreateWithoutSupport_ticketsInput, UserUncheckedCreateWithoutSupport_ticketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupport_ticketsInput
    upsert?: UserUpsertWithoutSupport_ticketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupport_ticketsInput, UserUpdateWithoutSupport_ticketsInput>, UserUncheckedUpdateWithoutSupport_ticketsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMovieStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovieStatus[]
    notIn?: $Enums.MovieStatus[]
    not?: NestedEnumMovieStatusFilter<$PrismaModel> | $Enums.MovieStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMovieStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovieStatus[]
    notIn?: $Enums.MovieStatus[]
    not?: NestedEnumMovieStatusWithAggregatesFilter<$PrismaModel> | $Enums.MovieStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovieStatusFilter<$PrismaModel>
    _max?: NestedEnumMovieStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[]
    notIn?: $Enums.RoomType[]
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[]
    notIn?: $Enums.RoomType[]
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type NestedEnumSeatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatType | EnumSeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeatType[]
    notIn?: $Enums.SeatType[]
    not?: NestedEnumSeatTypeFilter<$PrismaModel> | $Enums.SeatType
  }

  export type NestedEnumSeatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatType | EnumSeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SeatType[]
    notIn?: $Enums.SeatType[]
    not?: NestedEnumSeatTypeWithAggregatesFilter<$PrismaModel> | $Enums.SeatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeatTypeFilter<$PrismaModel>
    _max?: NestedEnumSeatTypeFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[]
    notIn?: $Enums.DiscountType[]
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    booking_items?: BookingItemCreateNestedManyWithoutBookingInput
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    voucher?: VoucherCreateNestedOneWithoutBookingsInput
    food_items?: FoodItemCreateNestedManyWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
    food_items?: FoodItemUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoyaltyLogCreateWithoutUserInput = {
    id?: string
    points: number
    type: string
    description: string
    booking_id?: string | null
    created_at?: Date | string
  }

  export type LoyaltyLogUncheckedCreateWithoutUserInput = {
    id?: string
    points: number
    type: string
    description: string
    booking_id?: string | null
    created_at?: Date | string
  }

  export type LoyaltyLogCreateOrConnectWithoutUserInput = {
    where: LoyaltyLogWhereUniqueInput
    create: XOR<LoyaltyLogCreateWithoutUserInput, LoyaltyLogUncheckedCreateWithoutUserInput>
  }

  export type LoyaltyLogCreateManyUserInputEnvelope = {
    data: LoyaltyLogCreateManyUserInput | LoyaltyLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SupportTicketCreateWithoutUserInput = {
    id?: string
    category: string
    subject: string
    message: string
    status?: string
    admin_reply?: string | null
    replied_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SupportTicketUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    subject: string
    message: string
    status?: string
    admin_reply?: string | null
    replied_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SupportTicketCreateOrConnectWithoutUserInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutUserInput, SupportTicketUncheckedCreateWithoutUserInput>
  }

  export type SupportTicketCreateManyUserInputEnvelope = {
    data: SupportTicketCreateManyUserInput | SupportTicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointRedemptionCreateWithoutUserInput = {
    id?: string
    points_used: number
    created_at?: Date | string
    voucher: VoucherCreateNestedOneWithoutPoint_redemptionsInput
  }

  export type PointRedemptionUncheckedCreateWithoutUserInput = {
    id?: string
    points_used: number
    voucher_id: string
    created_at?: Date | string
  }

  export type PointRedemptionCreateOrConnectWithoutUserInput = {
    where: PointRedemptionWhereUniqueInput
    create: XOR<PointRedemptionCreateWithoutUserInput, PointRedemptionUncheckedCreateWithoutUserInput>
  }

  export type PointRedemptionCreateManyUserInputEnvelope = {
    data: PointRedemptionCreateManyUserInput | PointRedemptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutOwnerInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    bookings?: BookingCreateNestedManyWithoutVoucherInput
    point_redemptions?: PointRedemptionCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutOwnerInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    bookings?: BookingUncheckedCreateNestedManyWithoutVoucherInput
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutOwnerInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutOwnerInput, VoucherUncheckedCreateWithoutOwnerInput>
  }

  export type VoucherCreateManyOwnerInputEnvelope = {
    data: VoucherCreateManyOwnerInput | VoucherCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    user_id?: StringFilter<"Booking"> | string
    showtime_id?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    total_amount?: IntFilter<"Booking"> | number
    qr_code?: StringFilter<"Booking"> | string
    qr_image_url?: StringNullableFilter<"Booking"> | string | null
    paid_at?: DateTimeNullableFilter<"Booking"> | Date | string | null
    created_at?: DateTimeFilter<"Booking"> | Date | string
    expires_at?: DateTimeFilter<"Booking"> | Date | string
    discount_amount?: IntFilter<"Booking"> | number
    voucher_code?: StringNullableFilter<"Booking"> | string | null
  }

  export type LoyaltyLogUpsertWithWhereUniqueWithoutUserInput = {
    where: LoyaltyLogWhereUniqueInput
    update: XOR<LoyaltyLogUpdateWithoutUserInput, LoyaltyLogUncheckedUpdateWithoutUserInput>
    create: XOR<LoyaltyLogCreateWithoutUserInput, LoyaltyLogUncheckedCreateWithoutUserInput>
  }

  export type LoyaltyLogUpdateWithWhereUniqueWithoutUserInput = {
    where: LoyaltyLogWhereUniqueInput
    data: XOR<LoyaltyLogUpdateWithoutUserInput, LoyaltyLogUncheckedUpdateWithoutUserInput>
  }

  export type LoyaltyLogUpdateManyWithWhereWithoutUserInput = {
    where: LoyaltyLogScalarWhereInput
    data: XOR<LoyaltyLogUpdateManyMutationInput, LoyaltyLogUncheckedUpdateManyWithoutUserInput>
  }

  export type LoyaltyLogScalarWhereInput = {
    AND?: LoyaltyLogScalarWhereInput | LoyaltyLogScalarWhereInput[]
    OR?: LoyaltyLogScalarWhereInput[]
    NOT?: LoyaltyLogScalarWhereInput | LoyaltyLogScalarWhereInput[]
    id?: StringFilter<"LoyaltyLog"> | string
    user_id?: StringFilter<"LoyaltyLog"> | string
    points?: IntFilter<"LoyaltyLog"> | number
    type?: StringFilter<"LoyaltyLog"> | string
    description?: StringFilter<"LoyaltyLog"> | string
    booking_id?: StringNullableFilter<"LoyaltyLog"> | string | null
    created_at?: DateTimeFilter<"LoyaltyLog"> | Date | string
  }

  export type SupportTicketUpsertWithWhereUniqueWithoutUserInput = {
    where: SupportTicketWhereUniqueInput
    update: XOR<SupportTicketUpdateWithoutUserInput, SupportTicketUncheckedUpdateWithoutUserInput>
    create: XOR<SupportTicketCreateWithoutUserInput, SupportTicketUncheckedCreateWithoutUserInput>
  }

  export type SupportTicketUpdateWithWhereUniqueWithoutUserInput = {
    where: SupportTicketWhereUniqueInput
    data: XOR<SupportTicketUpdateWithoutUserInput, SupportTicketUncheckedUpdateWithoutUserInput>
  }

  export type SupportTicketUpdateManyWithWhereWithoutUserInput = {
    where: SupportTicketScalarWhereInput
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyWithoutUserInput>
  }

  export type SupportTicketScalarWhereInput = {
    AND?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    OR?: SupportTicketScalarWhereInput[]
    NOT?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    user_id?: StringFilter<"SupportTicket"> | string
    category?: StringFilter<"SupportTicket"> | string
    subject?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    status?: StringFilter<"SupportTicket"> | string
    admin_reply?: StringNullableFilter<"SupportTicket"> | string | null
    replied_at?: DateTimeNullableFilter<"SupportTicket"> | Date | string | null
    created_at?: DateTimeFilter<"SupportTicket"> | Date | string
    updated_at?: DateTimeFilter<"SupportTicket"> | Date | string
  }

  export type PointRedemptionUpsertWithWhereUniqueWithoutUserInput = {
    where: PointRedemptionWhereUniqueInput
    update: XOR<PointRedemptionUpdateWithoutUserInput, PointRedemptionUncheckedUpdateWithoutUserInput>
    create: XOR<PointRedemptionCreateWithoutUserInput, PointRedemptionUncheckedCreateWithoutUserInput>
  }

  export type PointRedemptionUpdateWithWhereUniqueWithoutUserInput = {
    where: PointRedemptionWhereUniqueInput
    data: XOR<PointRedemptionUpdateWithoutUserInput, PointRedemptionUncheckedUpdateWithoutUserInput>
  }

  export type PointRedemptionUpdateManyWithWhereWithoutUserInput = {
    where: PointRedemptionScalarWhereInput
    data: XOR<PointRedemptionUpdateManyMutationInput, PointRedemptionUncheckedUpdateManyWithoutUserInput>
  }

  export type PointRedemptionScalarWhereInput = {
    AND?: PointRedemptionScalarWhereInput | PointRedemptionScalarWhereInput[]
    OR?: PointRedemptionScalarWhereInput[]
    NOT?: PointRedemptionScalarWhereInput | PointRedemptionScalarWhereInput[]
    id?: StringFilter<"PointRedemption"> | string
    user_id?: StringFilter<"PointRedemption"> | string
    points_used?: IntFilter<"PointRedemption"> | number
    voucher_id?: StringFilter<"PointRedemption"> | string
    created_at?: DateTimeFilter<"PointRedemption"> | Date | string
  }

  export type VoucherUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutOwnerInput, VoucherUncheckedUpdateWithoutOwnerInput>
    create: XOR<VoucherCreateWithoutOwnerInput, VoucherUncheckedCreateWithoutOwnerInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutOwnerInput, VoucherUncheckedUpdateWithoutOwnerInput>
  }

  export type VoucherUpdateManyWithWhereWithoutOwnerInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    discount_type?: EnumDiscountTypeFilter<"Voucher"> | $Enums.DiscountType
    discount_value?: IntFilter<"Voucher"> | number
    min_amount?: IntFilter<"Voucher"> | number
    max_discount?: IntNullableFilter<"Voucher"> | number | null
    usage_limit?: IntFilter<"Voucher"> | number
    used_count?: IntFilter<"Voucher"> | number
    expires_at?: DateTimeFilter<"Voucher"> | Date | string
    created_at?: DateTimeFilter<"Voucher"> | Date | string
    description?: StringNullableFilter<"Voucher"> | string | null
    is_active?: BoolFilter<"Voucher"> | boolean
    source?: StringFilter<"Voucher"> | string
    owner_user_id?: StringNullableFilter<"Voucher"> | string | null
  }

  export type UserCreateWithoutLoyalty_logsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutLoyalty_logsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketUncheckedCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutLoyalty_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoyalty_logsInput, UserUncheckedCreateWithoutLoyalty_logsInput>
  }

  export type UserUpsertWithoutLoyalty_logsInput = {
    update: XOR<UserUpdateWithoutLoyalty_logsInput, UserUncheckedUpdateWithoutLoyalty_logsInput>
    create: XOR<UserCreateWithoutLoyalty_logsInput, UserUncheckedCreateWithoutLoyalty_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoyalty_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoyalty_logsInput, UserUncheckedUpdateWithoutLoyalty_logsInput>
  }

  export type UserUpdateWithoutLoyalty_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutLoyalty_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUncheckedUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ShowtimeCreateWithoutMovieInput = {
    id?: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    bookings?: BookingCreateNestedManyWithoutShowtimeInput
    room: RoomCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateWithoutMovieInput = {
    id?: string
    room_id: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    bookings?: BookingUncheckedCreateNestedManyWithoutShowtimeInput
  }

  export type ShowtimeCreateOrConnectWithoutMovieInput = {
    where: ShowtimeWhereUniqueInput
    create: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput>
  }

  export type ShowtimeCreateManyMovieInputEnvelope = {
    data: ShowtimeCreateManyMovieInput | ShowtimeCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type ShowtimeUpsertWithWhereUniqueWithoutMovieInput = {
    where: ShowtimeWhereUniqueInput
    update: XOR<ShowtimeUpdateWithoutMovieInput, ShowtimeUncheckedUpdateWithoutMovieInput>
    create: XOR<ShowtimeCreateWithoutMovieInput, ShowtimeUncheckedCreateWithoutMovieInput>
  }

  export type ShowtimeUpdateWithWhereUniqueWithoutMovieInput = {
    where: ShowtimeWhereUniqueInput
    data: XOR<ShowtimeUpdateWithoutMovieInput, ShowtimeUncheckedUpdateWithoutMovieInput>
  }

  export type ShowtimeUpdateManyWithWhereWithoutMovieInput = {
    where: ShowtimeScalarWhereInput
    data: XOR<ShowtimeUpdateManyMutationInput, ShowtimeUncheckedUpdateManyWithoutMovieInput>
  }

  export type ShowtimeScalarWhereInput = {
    AND?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
    OR?: ShowtimeScalarWhereInput[]
    NOT?: ShowtimeScalarWhereInput | ShowtimeScalarWhereInput[]
    id?: StringFilter<"Showtime"> | string
    movie_id?: StringFilter<"Showtime"> | string
    room_id?: StringFilter<"Showtime"> | string
    start_time?: DateTimeFilter<"Showtime"> | Date | string
    end_time?: DateTimeFilter<"Showtime"> | Date | string
    price?: IntFilter<"Showtime"> | number
    vip_price?: IntFilter<"Showtime"> | number
    couple_price?: IntFilter<"Showtime"> | number
    language?: StringFilter<"Showtime"> | string
    format?: StringFilter<"Showtime"> | string
  }

  export type RoomCreateWithoutCinemaInput = {
    id?: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    seats?: SeatCreateNestedManyWithoutRoomInput
    showtimes?: ShowtimeCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutCinemaInput = {
    id?: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    seats?: SeatUncheckedCreateNestedManyWithoutRoomInput
    showtimes?: ShowtimeUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutCinemaInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutCinemaInput, RoomUncheckedCreateWithoutCinemaInput>
  }

  export type RoomCreateManyCinemaInputEnvelope = {
    data: RoomCreateManyCinemaInput | RoomCreateManyCinemaInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutCinemaInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutCinemaInput, RoomUncheckedUpdateWithoutCinemaInput>
    create: XOR<RoomCreateWithoutCinemaInput, RoomUncheckedCreateWithoutCinemaInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutCinemaInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutCinemaInput, RoomUncheckedUpdateWithoutCinemaInput>
  }

  export type RoomUpdateManyWithWhereWithoutCinemaInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutCinemaInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    cinema_id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    total_rows?: IntFilter<"Room"> | number
    total_cols?: IntFilter<"Room"> | number
  }

  export type CinemaCreateWithoutRoomsInput = {
    id?: string
    name: string
    address: string
    city: string
    lat: number
    lng: number
    image_url?: string | null
  }

  export type CinemaUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    address: string
    city: string
    lat: number
    lng: number
    image_url?: string | null
  }

  export type CinemaCreateOrConnectWithoutRoomsInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutRoomsInput, CinemaUncheckedCreateWithoutRoomsInput>
  }

  export type SeatCreateWithoutRoomInput = {
    id?: string
    row: string
    col: number
    type: $Enums.SeatType
    booking_items?: BookingItemCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutRoomInput = {
    id?: string
    row: string
    col: number
    type: $Enums.SeatType
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutRoomInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutRoomInput, SeatUncheckedCreateWithoutRoomInput>
  }

  export type SeatCreateManyRoomInputEnvelope = {
    data: SeatCreateManyRoomInput | SeatCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ShowtimeCreateWithoutRoomInput = {
    id?: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    bookings?: BookingCreateNestedManyWithoutShowtimeInput
    movie: MovieCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateWithoutRoomInput = {
    id?: string
    movie_id: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    bookings?: BookingUncheckedCreateNestedManyWithoutShowtimeInput
  }

  export type ShowtimeCreateOrConnectWithoutRoomInput = {
    where: ShowtimeWhereUniqueInput
    create: XOR<ShowtimeCreateWithoutRoomInput, ShowtimeUncheckedCreateWithoutRoomInput>
  }

  export type ShowtimeCreateManyRoomInputEnvelope = {
    data: ShowtimeCreateManyRoomInput | ShowtimeCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type CinemaUpsertWithoutRoomsInput = {
    update: XOR<CinemaUpdateWithoutRoomsInput, CinemaUncheckedUpdateWithoutRoomsInput>
    create: XOR<CinemaCreateWithoutRoomsInput, CinemaUncheckedCreateWithoutRoomsInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutRoomsInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutRoomsInput, CinemaUncheckedUpdateWithoutRoomsInput>
  }

  export type CinemaUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CinemaUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatUpsertWithWhereUniqueWithoutRoomInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutRoomInput, SeatUncheckedUpdateWithoutRoomInput>
    create: XOR<SeatCreateWithoutRoomInput, SeatUncheckedCreateWithoutRoomInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutRoomInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutRoomInput, SeatUncheckedUpdateWithoutRoomInput>
  }

  export type SeatUpdateManyWithWhereWithoutRoomInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutRoomInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: StringFilter<"Seat"> | string
    room_id?: StringFilter<"Seat"> | string
    row?: StringFilter<"Seat"> | string
    col?: IntFilter<"Seat"> | number
    type?: EnumSeatTypeFilter<"Seat"> | $Enums.SeatType
  }

  export type ShowtimeUpsertWithWhereUniqueWithoutRoomInput = {
    where: ShowtimeWhereUniqueInput
    update: XOR<ShowtimeUpdateWithoutRoomInput, ShowtimeUncheckedUpdateWithoutRoomInput>
    create: XOR<ShowtimeCreateWithoutRoomInput, ShowtimeUncheckedCreateWithoutRoomInput>
  }

  export type ShowtimeUpdateWithWhereUniqueWithoutRoomInput = {
    where: ShowtimeWhereUniqueInput
    data: XOR<ShowtimeUpdateWithoutRoomInput, ShowtimeUncheckedUpdateWithoutRoomInput>
  }

  export type ShowtimeUpdateManyWithWhereWithoutRoomInput = {
    where: ShowtimeScalarWhereInput
    data: XOR<ShowtimeUpdateManyMutationInput, ShowtimeUncheckedUpdateManyWithoutRoomInput>
  }

  export type BookingItemCreateWithoutSeatInput = {
    id?: string
    price: number
    showtime_id: string
    booking: BookingCreateNestedOneWithoutBooking_itemsInput
  }

  export type BookingItemUncheckedCreateWithoutSeatInput = {
    id?: string
    booking_id: string
    price: number
    showtime_id: string
  }

  export type BookingItemCreateOrConnectWithoutSeatInput = {
    where: BookingItemWhereUniqueInput
    create: XOR<BookingItemCreateWithoutSeatInput, BookingItemUncheckedCreateWithoutSeatInput>
  }

  export type BookingItemCreateManySeatInputEnvelope = {
    data: BookingItemCreateManySeatInput | BookingItemCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutSeatsInput = {
    id?: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    cinema: CinemaCreateNestedOneWithoutRoomsInput
    showtimes?: ShowtimeCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutSeatsInput = {
    id?: string
    cinema_id: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    showtimes?: ShowtimeUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutSeatsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutSeatsInput, RoomUncheckedCreateWithoutSeatsInput>
  }

  export type BookingItemUpsertWithWhereUniqueWithoutSeatInput = {
    where: BookingItemWhereUniqueInput
    update: XOR<BookingItemUpdateWithoutSeatInput, BookingItemUncheckedUpdateWithoutSeatInput>
    create: XOR<BookingItemCreateWithoutSeatInput, BookingItemUncheckedCreateWithoutSeatInput>
  }

  export type BookingItemUpdateWithWhereUniqueWithoutSeatInput = {
    where: BookingItemWhereUniqueInput
    data: XOR<BookingItemUpdateWithoutSeatInput, BookingItemUncheckedUpdateWithoutSeatInput>
  }

  export type BookingItemUpdateManyWithWhereWithoutSeatInput = {
    where: BookingItemScalarWhereInput
    data: XOR<BookingItemUpdateManyMutationInput, BookingItemUncheckedUpdateManyWithoutSeatInput>
  }

  export type BookingItemScalarWhereInput = {
    AND?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
    OR?: BookingItemScalarWhereInput[]
    NOT?: BookingItemScalarWhereInput | BookingItemScalarWhereInput[]
    id?: StringFilter<"BookingItem"> | string
    booking_id?: StringFilter<"BookingItem"> | string
    seat_id?: StringFilter<"BookingItem"> | string
    price?: IntFilter<"BookingItem"> | number
    showtime_id?: StringFilter<"BookingItem"> | string
  }

  export type RoomUpsertWithoutSeatsInput = {
    update: XOR<RoomUpdateWithoutSeatsInput, RoomUncheckedUpdateWithoutSeatsInput>
    create: XOR<RoomCreateWithoutSeatsInput, RoomUncheckedCreateWithoutSeatsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutSeatsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutSeatsInput, RoomUncheckedUpdateWithoutSeatsInput>
  }

  export type RoomUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutRoomsNestedInput
    showtimes?: ShowtimeUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cinema_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    showtimes?: ShowtimeUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type BookingCreateWithoutShowtimeInput = {
    id?: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    booking_items?: BookingItemCreateNestedManyWithoutBookingInput
    user: UserCreateNestedOneWithoutBookingsInput
    voucher?: VoucherCreateNestedOneWithoutBookingsInput
    food_items?: FoodItemCreateNestedManyWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutShowtimeInput = {
    id?: string
    user_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
    food_items?: FoodItemUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutShowtimeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput>
  }

  export type BookingCreateManyShowtimeInputEnvelope = {
    data: BookingCreateManyShowtimeInput | BookingCreateManyShowtimeInput[]
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutShowtimesInput = {
    id?: string
    tmdb_id: number
    title: string
    original_title: string
    overview: string
    poster_url: string
    backdrop_url: string
    trailer_key?: string | null
    genres: string
    cast: string
    director: string
    duration: number
    rating: number
    language: string
    status: $Enums.MovieStatus
    release_date: Date | string
  }

  export type MovieUncheckedCreateWithoutShowtimesInput = {
    id?: string
    tmdb_id: number
    title: string
    original_title: string
    overview: string
    poster_url: string
    backdrop_url: string
    trailer_key?: string | null
    genres: string
    cast: string
    director: string
    duration: number
    rating: number
    language: string
    status: $Enums.MovieStatus
    release_date: Date | string
  }

  export type MovieCreateOrConnectWithoutShowtimesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
  }

  export type RoomCreateWithoutShowtimesInput = {
    id?: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    cinema: CinemaCreateNestedOneWithoutRoomsInput
    seats?: SeatCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutShowtimesInput = {
    id?: string
    cinema_id: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
    seats?: SeatUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutShowtimesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutShowtimesInput, RoomUncheckedCreateWithoutShowtimesInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutShowtimeInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutShowtimeInput, BookingUncheckedUpdateWithoutShowtimeInput>
    create: XOR<BookingCreateWithoutShowtimeInput, BookingUncheckedCreateWithoutShowtimeInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutShowtimeInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutShowtimeInput, BookingUncheckedUpdateWithoutShowtimeInput>
  }

  export type BookingUpdateManyWithWhereWithoutShowtimeInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutShowtimeInput>
  }

  export type MovieUpsertWithoutShowtimesInput = {
    update: XOR<MovieUpdateWithoutShowtimesInput, MovieUncheckedUpdateWithoutShowtimesInput>
    create: XOR<MovieCreateWithoutShowtimesInput, MovieUncheckedCreateWithoutShowtimesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutShowtimesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutShowtimesInput, MovieUncheckedUpdateWithoutShowtimesInput>
  }

  export type MovieUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdb_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    poster_url?: StringFieldUpdateOperationsInput | string
    backdrop_url?: StringFieldUpdateOperationsInput | string
    trailer_key?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdb_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    original_title?: StringFieldUpdateOperationsInput | string
    overview?: StringFieldUpdateOperationsInput | string
    poster_url?: StringFieldUpdateOperationsInput | string
    backdrop_url?: StringFieldUpdateOperationsInput | string
    trailer_key?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    status?: EnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpsertWithoutShowtimesInput = {
    update: XOR<RoomUpdateWithoutShowtimesInput, RoomUncheckedUpdateWithoutShowtimesInput>
    create: XOR<RoomCreateWithoutShowtimesInput, RoomUncheckedCreateWithoutShowtimesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutShowtimesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutShowtimesInput, RoomUncheckedUpdateWithoutShowtimesInput>
  }

  export type RoomUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutRoomsNestedInput
    seats?: SeatUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutShowtimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cinema_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    seats?: SeatUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type BookingItemCreateWithoutBookingInput = {
    id?: string
    price: number
    showtime_id: string
    seat: SeatCreateNestedOneWithoutBooking_itemsInput
  }

  export type BookingItemUncheckedCreateWithoutBookingInput = {
    id?: string
    seat_id: string
    price: number
    showtime_id: string
  }

  export type BookingItemCreateOrConnectWithoutBookingInput = {
    where: BookingItemWhereUniqueInput
    create: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput>
  }

  export type BookingItemCreateManyBookingInputEnvelope = {
    data: BookingItemCreateManyBookingInput | BookingItemCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type ShowtimeCreateWithoutBookingsInput = {
    id?: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
    movie: MovieCreateNestedOneWithoutShowtimesInput
    room: RoomCreateNestedOneWithoutShowtimesInput
  }

  export type ShowtimeUncheckedCreateWithoutBookingsInput = {
    id?: string
    movie_id: string
    room_id: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
  }

  export type ShowtimeCreateOrConnectWithoutBookingsInput = {
    where: ShowtimeWhereUniqueInput
    create: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    loyalty_logs?: LoyaltyLogCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    loyalty_logs?: LoyaltyLogUncheckedCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketUncheckedCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type VoucherCreateWithoutBookingsInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    point_redemptions?: PointRedemptionCreateNestedManyWithoutVoucherInput
    owner?: UserCreateNestedOneWithoutOwned_vouchersInput
  }

  export type VoucherUncheckedCreateWithoutBookingsInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    owner_user_id?: string | null
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutBookingsInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutBookingsInput, VoucherUncheckedCreateWithoutBookingsInput>
  }

  export type FoodItemCreateWithoutBookingInput = {
    id?: string
    quantity: number
    price: number
    combo: FoodComboCreateNestedOneWithoutFood_itemsInput
  }

  export type FoodItemUncheckedCreateWithoutBookingInput = {
    id?: string
    combo_id: string
    quantity: number
    price: number
  }

  export type FoodItemCreateOrConnectWithoutBookingInput = {
    where: FoodItemWhereUniqueInput
    create: XOR<FoodItemCreateWithoutBookingInput, FoodItemUncheckedCreateWithoutBookingInput>
  }

  export type FoodItemCreateManyBookingInputEnvelope = {
    data: FoodItemCreateManyBookingInput | FoodItemCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    method: $Enums.PaymentMethod
    amount: number
    status?: $Enums.PaymentStatus
    transaction_id?: string | null
    vnpay_data?: string | null
    created_at?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    method: $Enums.PaymentMethod
    amount: number
    status?: $Enums.PaymentStatus
    transaction_id?: string | null
    vnpay_data?: string | null
    created_at?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type BookingItemUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingItemWhereUniqueInput
    update: XOR<BookingItemUpdateWithoutBookingInput, BookingItemUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingItemCreateWithoutBookingInput, BookingItemUncheckedCreateWithoutBookingInput>
  }

  export type BookingItemUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingItemWhereUniqueInput
    data: XOR<BookingItemUpdateWithoutBookingInput, BookingItemUncheckedUpdateWithoutBookingInput>
  }

  export type BookingItemUpdateManyWithWhereWithoutBookingInput = {
    where: BookingItemScalarWhereInput
    data: XOR<BookingItemUpdateManyMutationInput, BookingItemUncheckedUpdateManyWithoutBookingInput>
  }

  export type ShowtimeUpsertWithoutBookingsInput = {
    update: XOR<ShowtimeUpdateWithoutBookingsInput, ShowtimeUncheckedUpdateWithoutBookingsInput>
    create: XOR<ShowtimeCreateWithoutBookingsInput, ShowtimeUncheckedCreateWithoutBookingsInput>
    where?: ShowtimeWhereInput
  }

  export type ShowtimeUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ShowtimeWhereInput
    data: XOR<ShowtimeUpdateWithoutBookingsInput, ShowtimeUncheckedUpdateWithoutBookingsInput>
  }

  export type ShowtimeUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    movie?: MovieUpdateOneRequiredWithoutShowtimesNestedInput
    room?: RoomUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    loyalty_logs?: LoyaltyLogUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    loyalty_logs?: LoyaltyLogUncheckedUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUncheckedUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type VoucherUpsertWithoutBookingsInput = {
    update: XOR<VoucherUpdateWithoutBookingsInput, VoucherUncheckedUpdateWithoutBookingsInput>
    create: XOR<VoucherCreateWithoutBookingsInput, VoucherUncheckedCreateWithoutBookingsInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutBookingsInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutBookingsInput, VoucherUncheckedUpdateWithoutBookingsInput>
  }

  export type VoucherUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    point_redemptions?: PointRedemptionUpdateManyWithoutVoucherNestedInput
    owner?: UserUpdateOneWithoutOwned_vouchersNestedInput
  }

  export type VoucherUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    owner_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type FoodItemUpsertWithWhereUniqueWithoutBookingInput = {
    where: FoodItemWhereUniqueInput
    update: XOR<FoodItemUpdateWithoutBookingInput, FoodItemUncheckedUpdateWithoutBookingInput>
    create: XOR<FoodItemCreateWithoutBookingInput, FoodItemUncheckedCreateWithoutBookingInput>
  }

  export type FoodItemUpdateWithWhereUniqueWithoutBookingInput = {
    where: FoodItemWhereUniqueInput
    data: XOR<FoodItemUpdateWithoutBookingInput, FoodItemUncheckedUpdateWithoutBookingInput>
  }

  export type FoodItemUpdateManyWithWhereWithoutBookingInput = {
    where: FoodItemScalarWhereInput
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyWithoutBookingInput>
  }

  export type FoodItemScalarWhereInput = {
    AND?: FoodItemScalarWhereInput | FoodItemScalarWhereInput[]
    OR?: FoodItemScalarWhereInput[]
    NOT?: FoodItemScalarWhereInput | FoodItemScalarWhereInput[]
    id?: StringFilter<"FoodItem"> | string
    booking_id?: StringFilter<"FoodItem"> | string
    combo_id?: StringFilter<"FoodItem"> | string
    quantity?: IntFilter<"FoodItem"> | number
    price?: IntFilter<"FoodItem"> | number
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    vnpay_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    vnpay_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutBooking_itemsInput = {
    id?: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
    voucher?: VoucherCreateNestedOneWithoutBookingsInput
    food_items?: FoodItemCreateNestedManyWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBooking_itemsInput = {
    id?: string
    user_id: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
    food_items?: FoodItemUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBooking_itemsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBooking_itemsInput, BookingUncheckedCreateWithoutBooking_itemsInput>
  }

  export type SeatCreateWithoutBooking_itemsInput = {
    id?: string
    row: string
    col: number
    type: $Enums.SeatType
    room: RoomCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutBooking_itemsInput = {
    id?: string
    room_id: string
    row: string
    col: number
    type: $Enums.SeatType
  }

  export type SeatCreateOrConnectWithoutBooking_itemsInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutBooking_itemsInput, SeatUncheckedCreateWithoutBooking_itemsInput>
  }

  export type BookingUpsertWithoutBooking_itemsInput = {
    update: XOR<BookingUpdateWithoutBooking_itemsInput, BookingUncheckedUpdateWithoutBooking_itemsInput>
    create: XOR<BookingCreateWithoutBooking_itemsInput, BookingUncheckedCreateWithoutBooking_itemsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutBooking_itemsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutBooking_itemsInput, BookingUncheckedUpdateWithoutBooking_itemsInput>
  }

  export type BookingUpdateWithoutBooking_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    voucher?: VoucherUpdateOneWithoutBookingsNestedInput
    food_items?: FoodItemUpdateManyWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBooking_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    food_items?: FoodItemUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type SeatUpsertWithoutBooking_itemsInput = {
    update: XOR<SeatUpdateWithoutBooking_itemsInput, SeatUncheckedUpdateWithoutBooking_itemsInput>
    create: XOR<SeatCreateWithoutBooking_itemsInput, SeatUncheckedCreateWithoutBooking_itemsInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutBooking_itemsInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutBooking_itemsInput, SeatUncheckedUpdateWithoutBooking_itemsInput>
  }

  export type SeatUpdateWithoutBooking_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
    room?: RoomUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutBooking_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
  }

  export type BookingCreateWithoutPaymentInput = {
    id?: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    booking_items?: BookingItemCreateNestedManyWithoutBookingInput
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
    voucher?: VoucherCreateNestedOneWithoutBookingsInput
    food_items?: FoodItemCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    id?: string
    user_id: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
    food_items?: FoodItemUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    booking_items?: BookingItemUpdateManyWithoutBookingNestedInput
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    voucher?: VoucherUpdateOneWithoutBookingsNestedInput
    food_items?: FoodItemUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    booking_items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
    food_items?: FoodItemUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type FoodItemCreateWithoutComboInput = {
    id?: string
    quantity: number
    price: number
    booking: BookingCreateNestedOneWithoutFood_itemsInput
  }

  export type FoodItemUncheckedCreateWithoutComboInput = {
    id?: string
    booking_id: string
    quantity: number
    price: number
  }

  export type FoodItemCreateOrConnectWithoutComboInput = {
    where: FoodItemWhereUniqueInput
    create: XOR<FoodItemCreateWithoutComboInput, FoodItemUncheckedCreateWithoutComboInput>
  }

  export type FoodItemCreateManyComboInputEnvelope = {
    data: FoodItemCreateManyComboInput | FoodItemCreateManyComboInput[]
    skipDuplicates?: boolean
  }

  export type FoodItemUpsertWithWhereUniqueWithoutComboInput = {
    where: FoodItemWhereUniqueInput
    update: XOR<FoodItemUpdateWithoutComboInput, FoodItemUncheckedUpdateWithoutComboInput>
    create: XOR<FoodItemCreateWithoutComboInput, FoodItemUncheckedCreateWithoutComboInput>
  }

  export type FoodItemUpdateWithWhereUniqueWithoutComboInput = {
    where: FoodItemWhereUniqueInput
    data: XOR<FoodItemUpdateWithoutComboInput, FoodItemUncheckedUpdateWithoutComboInput>
  }

  export type FoodItemUpdateManyWithWhereWithoutComboInput = {
    where: FoodItemScalarWhereInput
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyWithoutComboInput>
  }

  export type BookingCreateWithoutFood_itemsInput = {
    id?: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    booking_items?: BookingItemCreateNestedManyWithoutBookingInput
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
    voucher?: VoucherCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutFood_itemsInput = {
    id?: string
    user_id: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutFood_itemsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutFood_itemsInput, BookingUncheckedCreateWithoutFood_itemsInput>
  }

  export type FoodComboCreateWithoutFood_itemsInput = {
    id?: string
    name: string
    description: string
    price: number
    image_url: string
  }

  export type FoodComboUncheckedCreateWithoutFood_itemsInput = {
    id?: string
    name: string
    description: string
    price: number
    image_url: string
  }

  export type FoodComboCreateOrConnectWithoutFood_itemsInput = {
    where: FoodComboWhereUniqueInput
    create: XOR<FoodComboCreateWithoutFood_itemsInput, FoodComboUncheckedCreateWithoutFood_itemsInput>
  }

  export type BookingUpsertWithoutFood_itemsInput = {
    update: XOR<BookingUpdateWithoutFood_itemsInput, BookingUncheckedUpdateWithoutFood_itemsInput>
    create: XOR<BookingCreateWithoutFood_itemsInput, BookingUncheckedCreateWithoutFood_itemsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutFood_itemsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutFood_itemsInput, BookingUncheckedUpdateWithoutFood_itemsInput>
  }

  export type BookingUpdateWithoutFood_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    booking_items?: BookingItemUpdateManyWithoutBookingNestedInput
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    voucher?: VoucherUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutFood_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    booking_items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type FoodComboUpsertWithoutFood_itemsInput = {
    update: XOR<FoodComboUpdateWithoutFood_itemsInput, FoodComboUncheckedUpdateWithoutFood_itemsInput>
    create: XOR<FoodComboCreateWithoutFood_itemsInput, FoodComboUncheckedCreateWithoutFood_itemsInput>
    where?: FoodComboWhereInput
  }

  export type FoodComboUpdateToOneWithWhereWithoutFood_itemsInput = {
    where?: FoodComboWhereInput
    data: XOR<FoodComboUpdateWithoutFood_itemsInput, FoodComboUncheckedUpdateWithoutFood_itemsInput>
  }

  export type FoodComboUpdateWithoutFood_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type FoodComboUncheckedUpdateWithoutFood_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateWithoutVoucherInput = {
    id?: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    booking_items?: BookingItemCreateNestedManyWithoutBookingInput
    showtime: ShowtimeCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
    food_items?: FoodItemCreateNestedManyWithoutBookingInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutVoucherInput = {
    id?: string
    user_id: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    booking_items?: BookingItemUncheckedCreateNestedManyWithoutBookingInput
    food_items?: FoodItemUncheckedCreateNestedManyWithoutBookingInput
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutVoucherInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutVoucherInput, BookingUncheckedCreateWithoutVoucherInput>
  }

  export type BookingCreateManyVoucherInputEnvelope = {
    data: BookingCreateManyVoucherInput | BookingCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type PointRedemptionCreateWithoutVoucherInput = {
    id?: string
    points_used: number
    created_at?: Date | string
    user: UserCreateNestedOneWithoutPoint_redemptionsInput
  }

  export type PointRedemptionUncheckedCreateWithoutVoucherInput = {
    id?: string
    user_id: string
    points_used: number
    created_at?: Date | string
  }

  export type PointRedemptionCreateOrConnectWithoutVoucherInput = {
    where: PointRedemptionWhereUniqueInput
    create: XOR<PointRedemptionCreateWithoutVoucherInput, PointRedemptionUncheckedCreateWithoutVoucherInput>
  }

  export type PointRedemptionCreateManyVoucherInputEnvelope = {
    data: PointRedemptionCreateManyVoucherInput | PointRedemptionCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOwned_vouchersInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwned_vouchersInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogUncheckedCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketUncheckedCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwned_vouchersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwned_vouchersInput, UserUncheckedCreateWithoutOwned_vouchersInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutVoucherInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutVoucherInput, BookingUncheckedUpdateWithoutVoucherInput>
    create: XOR<BookingCreateWithoutVoucherInput, BookingUncheckedCreateWithoutVoucherInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutVoucherInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutVoucherInput, BookingUncheckedUpdateWithoutVoucherInput>
  }

  export type BookingUpdateManyWithWhereWithoutVoucherInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutVoucherInput>
  }

  export type PointRedemptionUpsertWithWhereUniqueWithoutVoucherInput = {
    where: PointRedemptionWhereUniqueInput
    update: XOR<PointRedemptionUpdateWithoutVoucherInput, PointRedemptionUncheckedUpdateWithoutVoucherInput>
    create: XOR<PointRedemptionCreateWithoutVoucherInput, PointRedemptionUncheckedCreateWithoutVoucherInput>
  }

  export type PointRedemptionUpdateWithWhereUniqueWithoutVoucherInput = {
    where: PointRedemptionWhereUniqueInput
    data: XOR<PointRedemptionUpdateWithoutVoucherInput, PointRedemptionUncheckedUpdateWithoutVoucherInput>
  }

  export type PointRedemptionUpdateManyWithWhereWithoutVoucherInput = {
    where: PointRedemptionScalarWhereInput
    data: XOR<PointRedemptionUpdateManyMutationInput, PointRedemptionUncheckedUpdateManyWithoutVoucherInput>
  }

  export type UserUpsertWithoutOwned_vouchersInput = {
    update: XOR<UserUpdateWithoutOwned_vouchersInput, UserUncheckedUpdateWithoutOwned_vouchersInput>
    create: XOR<UserCreateWithoutOwned_vouchersInput, UserUncheckedCreateWithoutOwned_vouchersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwned_vouchersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwned_vouchersInput, UserUncheckedUpdateWithoutOwned_vouchersInput>
  }

  export type UserUpdateWithoutOwned_vouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwned_vouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUncheckedUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUncheckedUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPoint_redemptionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutPoint_redemptionsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogUncheckedCreateNestedManyWithoutUserInput
    support_tickets?: SupportTicketUncheckedCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPoint_redemptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPoint_redemptionsInput, UserUncheckedCreateWithoutPoint_redemptionsInput>
  }

  export type VoucherCreateWithoutPoint_redemptionsInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    bookings?: BookingCreateNestedManyWithoutVoucherInput
    owner?: UserCreateNestedOneWithoutOwned_vouchersInput
  }

  export type VoucherUncheckedCreateWithoutPoint_redemptionsInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
    owner_user_id?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutPoint_redemptionsInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutPoint_redemptionsInput, VoucherUncheckedCreateWithoutPoint_redemptionsInput>
  }

  export type UserUpsertWithoutPoint_redemptionsInput = {
    update: XOR<UserUpdateWithoutPoint_redemptionsInput, UserUncheckedUpdateWithoutPoint_redemptionsInput>
    create: XOR<UserCreateWithoutPoint_redemptionsInput, UserUncheckedCreateWithoutPoint_redemptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPoint_redemptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPoint_redemptionsInput, UserUncheckedUpdateWithoutPoint_redemptionsInput>
  }

  export type UserUpdateWithoutPoint_redemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPoint_redemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUncheckedUpdateManyWithoutUserNestedInput
    support_tickets?: SupportTicketUncheckedUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type VoucherUpsertWithoutPoint_redemptionsInput = {
    update: XOR<VoucherUpdateWithoutPoint_redemptionsInput, VoucherUncheckedUpdateWithoutPoint_redemptionsInput>
    create: XOR<VoucherCreateWithoutPoint_redemptionsInput, VoucherUncheckedCreateWithoutPoint_redemptionsInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutPoint_redemptionsInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutPoint_redemptionsInput, VoucherUncheckedUpdateWithoutPoint_redemptionsInput>
  }

  export type VoucherUpdateWithoutPoint_redemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutVoucherNestedInput
    owner?: UserUpdateOneWithoutOwned_vouchersNestedInput
  }

  export type VoucherUncheckedUpdateWithoutPoint_redemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    owner_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type UserCreateWithoutSupport_ticketsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSupport_ticketsInput = {
    id?: string
    email: string
    phone?: string | null
    password_hash?: string | null
    name: string
    avatar_url?: string | null
    role?: $Enums.Role
    loyalty_points?: number
    created_at?: Date | string
    loyalty_tier?: string
    updated_at?: Date | string
    date_of_birth?: Date | string | null
    is_verified?: boolean
    refresh_token?: string | null
    ban_reason?: string | null
    is_banned?: boolean
    auth_provider?: string
    google_email?: string | null
    google_id?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    loyalty_logs?: LoyaltyLogUncheckedCreateNestedManyWithoutUserInput
    point_redemptions?: PointRedemptionUncheckedCreateNestedManyWithoutUserInput
    owned_vouchers?: VoucherUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSupport_ticketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupport_ticketsInput, UserUncheckedCreateWithoutSupport_ticketsInput>
  }

  export type UserUpsertWithoutSupport_ticketsInput = {
    update: XOR<UserUpdateWithoutSupport_ticketsInput, UserUncheckedUpdateWithoutSupport_ticketsInput>
    create: XOR<UserCreateWithoutSupport_ticketsInput, UserUncheckedCreateWithoutSupport_ticketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupport_ticketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupport_ticketsInput, UserUncheckedUpdateWithoutSupport_ticketsInput>
  }

  export type UserUpdateWithoutSupport_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSupport_ticketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    loyalty_points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loyalty_tier?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    ban_reason?: NullableStringFieldUpdateOperationsInput | string | null
    is_banned?: BoolFieldUpdateOperationsInput | boolean
    auth_provider?: StringFieldUpdateOperationsInput | string
    google_email?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    loyalty_logs?: LoyaltyLogUncheckedUpdateManyWithoutUserNestedInput
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutUserNestedInput
    owned_vouchers?: VoucherUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BookingCreateManyUserInput = {
    id?: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
  }

  export type LoyaltyLogCreateManyUserInput = {
    id?: string
    points: number
    type: string
    description: string
    booking_id?: string | null
    created_at?: Date | string
  }

  export type SupportTicketCreateManyUserInput = {
    id?: string
    category: string
    subject: string
    message: string
    status?: string
    admin_reply?: string | null
    replied_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PointRedemptionCreateManyUserInput = {
    id?: string
    points_used: number
    voucher_id: string
    created_at?: Date | string
  }

  export type VoucherCreateManyOwnerInput = {
    id?: string
    code: string
    discount_type: $Enums.DiscountType
    discount_value: number
    min_amount?: number
    max_discount?: number | null
    usage_limit: number
    used_count?: number
    expires_at: Date | string
    created_at?: Date | string
    description?: string | null
    is_active?: boolean
    source?: string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    booking_items?: BookingItemUpdateManyWithoutBookingNestedInput
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    voucher?: VoucherUpdateOneWithoutBookingsNestedInput
    food_items?: FoodItemUpdateManyWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    booking_items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
    food_items?: FoodItemUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoyaltyLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoyaltyLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    booking_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    admin_reply?: NullableStringFieldUpdateOperationsInput | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    admin_reply?: NullableStringFieldUpdateOperationsInput | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    admin_reply?: NullableStringFieldUpdateOperationsInput | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRedemptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher?: VoucherUpdateOneRequiredWithoutPoint_redemptionsNestedInput
  }

  export type PointRedemptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    voucher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRedemptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    voucher_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutVoucherNestedInput
    point_redemptions?: PointRedemptionUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutVoucherNestedInput
    point_redemptions?: PointRedemptionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discount_type?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discount_value?: IntFieldUpdateOperationsInput | number
    min_amount?: IntFieldUpdateOperationsInput | number
    max_discount?: NullableIntFieldUpdateOperationsInput | number | null
    usage_limit?: IntFieldUpdateOperationsInput | number
    used_count?: IntFieldUpdateOperationsInput | number
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    source?: StringFieldUpdateOperationsInput | string
  }

  export type ShowtimeCreateManyMovieInput = {
    id?: string
    room_id: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
  }

  export type ShowtimeUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutShowtimeNestedInput
    room?: RoomUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutShowtimeNestedInput
  }

  export type ShowtimeUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateManyCinemaInput = {
    id?: string
    name: string
    type: $Enums.RoomType
    total_rows: number
    total_cols: number
  }

  export type RoomUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    seats?: SeatUpdateManyWithoutRoomNestedInput
    showtimes?: ShowtimeUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
    seats?: SeatUncheckedUpdateManyWithoutRoomNestedInput
    showtimes?: ShowtimeUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    total_rows?: IntFieldUpdateOperationsInput | number
    total_cols?: IntFieldUpdateOperationsInput | number
  }

  export type SeatCreateManyRoomInput = {
    id?: string
    row: string
    col: number
    type: $Enums.SeatType
  }

  export type ShowtimeCreateManyRoomInput = {
    id?: string
    movie_id: string
    start_time: Date | string
    end_time: Date | string
    price: number
    vip_price: number
    couple_price: number
    language: string
    format: string
  }

  export type SeatUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
    booking_items?: BookingItemUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
    booking_items?: BookingItemUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    row?: StringFieldUpdateOperationsInput | string
    col?: IntFieldUpdateOperationsInput | number
    type?: EnumSeatTypeFieldUpdateOperationsInput | $Enums.SeatType
  }

  export type ShowtimeUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUpdateManyWithoutShowtimeNestedInput
    movie?: MovieUpdateOneRequiredWithoutShowtimesNestedInput
  }

  export type ShowtimeUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutShowtimeNestedInput
  }

  export type ShowtimeUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    movie_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    vip_price?: IntFieldUpdateOperationsInput | number
    couple_price?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
  }

  export type BookingItemCreateManySeatInput = {
    id?: string
    booking_id: string
    price: number
    showtime_id: string
  }

  export type BookingItemUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutBooking_itemsNestedInput
  }

  export type BookingItemUncheckedUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookingItemUncheckedUpdateManyWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyShowtimeInput = {
    id?: string
    user_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
    voucher_code?: string | null
  }

  export type BookingUpdateWithoutShowtimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    booking_items?: BookingItemUpdateManyWithoutBookingNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    voucher?: VoucherUpdateOneWithoutBookingsNestedInput
    food_items?: FoodItemUpdateManyWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutShowtimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
    booking_items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
    food_items?: FoodItemUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutShowtimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    voucher_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingItemCreateManyBookingInput = {
    id?: string
    seat_id: string
    price: number
    showtime_id: string
  }

  export type FoodItemCreateManyBookingInput = {
    id?: string
    combo_id: string
    quantity: number
    price: number
  }

  export type BookingItemUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
    seat?: SeatUpdateOneRequiredWithoutBooking_itemsNestedInput
  }

  export type BookingItemUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
  }

  export type BookingItemUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    seat_id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    showtime_id?: StringFieldUpdateOperationsInput | string
  }

  export type FoodItemUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    combo?: FoodComboUpdateOneRequiredWithoutFood_itemsNestedInput
  }

  export type FoodItemUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    combo_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FoodItemUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    combo_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FoodItemCreateManyComboInput = {
    id?: string
    booking_id: string
    quantity: number
    price: number
  }

  export type FoodItemUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    booking?: BookingUpdateOneRequiredWithoutFood_itemsNestedInput
  }

  export type FoodItemUncheckedUpdateWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type FoodItemUncheckedUpdateManyWithoutComboInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type BookingCreateManyVoucherInput = {
    id?: string
    user_id: string
    showtime_id: string
    status?: $Enums.BookingStatus
    total_amount: number
    qr_code: string
    qr_image_url?: string | null
    paid_at?: Date | string | null
    created_at?: Date | string
    expires_at: Date | string
    discount_amount?: number
  }

  export type PointRedemptionCreateManyVoucherInput = {
    id?: string
    user_id: string
    points_used: number
    created_at?: Date | string
  }

  export type BookingUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    booking_items?: BookingItemUpdateManyWithoutBookingNestedInput
    showtime?: ShowtimeUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    food_items?: FoodItemUpdateManyWithoutBookingNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
    booking_items?: BookingItemUncheckedUpdateManyWithoutBookingNestedInput
    food_items?: FoodItemUncheckedUpdateManyWithoutBookingNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    showtime_id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    total_amount?: IntFieldUpdateOperationsInput | number
    qr_code?: StringFieldUpdateOperationsInput | string
    qr_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_amount?: IntFieldUpdateOperationsInput | number
  }

  export type PointRedemptionUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPoint_redemptionsNestedInput
  }

  export type PointRedemptionUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRedemptionUncheckedUpdateManyWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points_used?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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