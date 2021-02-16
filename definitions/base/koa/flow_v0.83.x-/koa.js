declare module '@flow-typed/base-koa' {
  declare type Koa2$JSON = | string | number | boolean | null | void | Koa2$JSONObject | Koa2$JSONArray;

  declare type Koa2$JSONObject = { [key: string]: Koa2$JSON, ... };

  declare type Koa2$JSONArray = Array<Koa2$JSON>;

  declare type Koa2$SimpleHeader = {
    [key: string]: string,
    'set-cookie'?: Array<string>,
    ...
  };

  declare type Koa2$RequestJSON = {
    'method': string,
    'url': string,
    'header': Koa2$SimpleHeader,
    ...
  };

  declare type Koa2$RequestInspect = void | Koa2$RequestJSON;

  declare type Koa2$Request = {
    // props added by middlewares.
    [key: string]: mixed,
    app: Koa2$Application,
    req: http$IncomingMessage<>,
    res: http$ServerResponse,
    ctx: Koa2$Context,
    response: Koa2$Response,
    fresh: boolean,
    header: Koa2$SimpleHeader,
    // alias as header
    headers: Koa2$SimpleHeader,
    host: string,
    hostname: string,
    href: string,
    idempotent: boolean,
    ip: string,
    ips: string[],
    method: string,
    origin: string,
    originalUrl: string,
    path: string,
    protocol: string,
    // always string
    query: { [key: string]: string, ... },
    querystring: string,
    search: string,
    // Shorthand for ctx.protocol == "https" to check if a request was issued via TLS.
    secure: boolean,
    socket: net$Socket,
    stale: boolean,
    subdomains: string[],
    type: string,
    url: string,
    charset: string|void,
    length: number|void,
    //  Those functions comes from https://github.com/jshttp/accepts/blob/master/index.js
    //  request.js$L445
    //  https://github.com/jshttp/accepts/blob/master/test/type.js
    // return the old value.
    accepts: ((args: string[]) => string|false)&
    // ToDo: There is an issue https://github.com/facebook/flow/issues/3009
    // if you meet some error here, temporarily add an additional annotation
    // like: `request.accepts((['json', 'text']:Array<string>))` to fix it.
    ((arg: string, ...args: string[]) => string|false) &
    ( () => string[] ),
    //  https://github.com/jshttp/accepts/blob/master/index.js#L153
    //  https://github.com/jshttp/accepts/blob/master/test/charset.js
    acceptsCharsets: ( (args: string[]) => buffer$Encoding|false)&
    // ToDo: https://github.com/facebook/flow/issues/3009
    // if you meet some error here, see L70.
    ( (arg: string, ...args: string[]) => buffer$Encoding|false ) &
    ( () => string[] ),
    //  https://github.com/jshttp/accepts/blob/master/index.js#L119
    //  https://github.com/jshttp/accepts/blob/master/test/encoding.js
    acceptsEncodings: ( (args: string[]) => string|false)&
    // ToDo: https://github.com/facebook/flow/issues/3009
    // if you meet some error here, see L70.
    ( (arg: string, ...args: string[]) => string|false ) &
    ( () => string[] ),
    //  https://github.com/jshttp/accepts/blob/master/index.js#L185
    //  https://github.com/jshttp/accepts/blob/master/test/language.js
    acceptsLanguages: ( (args: string[]) => string|false) &
    // ToDo: https://github.com/facebook/flow/issues/3009
    // if you meet some error here, see L70.
    ( (arg: string, ...args: string[]) => string|false ) &
    ( () => string[] ),
    get: (field: string) => string,
    /* https://github.com/jshttp/type-is/blob/master/test/test.js
    * Check if the incoming request contains the "Content-Type"
    * header field, and it contains any of the give mime `type`s.
    * If there is no request body, `null` is returned.
    * If there is no content type, `false` is returned.
    * Otherwise, it returns the first `type` that matches.
    */
    // should return the mime type
    is: ( (args: string[]) => null|false|string)&
    ( (arg: string, ...args: string[]) => null|false|string ) &
    ( () => string ),
    toJSON: () => Koa2$RequestJSON,
    inspect: () => Koa2$RequestInspect,
    ...
  };

  declare type Koa2$ResponseJSON = {
    'status': mixed,
    'message': mixed,
    'header': mixed,
    ...
  };

  declare type Koa2$ResponseInspect = {
    'status': mixed,
    'message': mixed,
    'header': mixed,
    'body': mixed,
    ...
  };

  declare type Koa2$Response = {
    // props added by middlewares.
    [key: string]: mixed,
    app: Koa2$Application,
    req: http$IncomingMessage<>,
    res: http$ServerResponse,
    ctx: Koa2$Context,
    request: Koa2$Request,
    // docs/api/response.md#L113.
    // JSON contains null
    body: string | Buffer | stream$Stream | Koa2$JSONObject | Koa2$ | null,
    etag: string,
    header: Koa2$SimpleHeader,
    // alias as header
    headers: Koa2$SimpleHeader,
    headerSent: boolean,
    // can be set with string|Date, but get with Date.
    // set lastModified(v: string|Date), // 0.36 doesn't support this.
    lastModified: Date,
    message: string,
    socket: net$Socket,
    status: number,
    type: string,
    writable: boolean,
    // charset: string,  // doesn't find in response.js
    length: number|void,
    append: (field: string, val: string | string[]) => void,
    attachment: (filename?: string) => void,
    get: (field: string) => string,
    // https://github.com/jshttp/type-is/blob/master/test/test.js
    // https://github.com/koajs/koa/blob/v2.x/lib/response.js#L382
    // should return the mime type
    is: ( (arg: string[]) => false|string) &
    ( (arg: string, ...args: string[]) => false|string ) &
    ( () => string ),
    redirect: (url: string, alt?: string) => void,
    remove: (field: string) => void,
    // https://github.com/koajs/koa/blob/v2.x/lib/response.js#L418
    set: ((field: string, val: string | string[]) => void)&
      ((field: { [key: string]: string | string[], ... }) => void),
    vary: (field: string) => void,
    // https://github.com/koajs/koa/blob/v2.x/lib/response.js#L519
    toJSON(): Koa2$ResponseJSON,
    inspect(): Koa2$ResponseInspect,
    ...
  }

  // https://github.com/pillarjs/cookies
  declare type Koa2$CookiesSetOptions = {
    // domain of the cookie (no default).
    domain?: string,
    // milliseconds from Date.now() for expiry
    maxAge?: number,
    //cookie's expiration date (expires at the end of session by default).
    expires?: Date,
    //  the path of the cookie (/ by default).
    path?: string,
    // false by default for HTTP, true by default for HTTPS
    secure?: boolean,
    //  a boolean indicating whether the cookie is only to be sent over HTTP(S),
    httpOnly?: boolean,
    // and not made available to client JavaScript (true by default).
    // whether the cookie is to be signed (false by default)
    signed?: boolean,
    //  whether to overwrite previously set cookies of the same name (false by default).
    overwrite?: boolean,
    ...
  };

  declare type Cookies = {
    get: (name: string, options?: { signed: boolean, ... }) => string | void,
    set:
      & ((name: string, value: string, options?: Koa2$CookiesSetOptions) => Koa2$Context)
      // delete cookie (an outbound header with an expired date is used.)
      & ((name: string) => Koa2$Context),
    ...
  };

  declare type Koa2$ContextJSON = {
    request: Koa2$RequestJSON,
    response: Koa2$ResponseJSON,
    app: Koa2$ApplicationJSON,
    originalUrl: string,
    req: '<original node req>',
    res: '<original node res>',
    socket: '<original node socket>',
    ...
  };

  // The default props of context come from two files
  // `application.createContext` & `context.js`
  declare type Koa2$Context = {
    // props added by middlewares.
    [key: string]: any,
    accept: $PropertyType<Koa2$Request, 'accept'>,
    app: Koa2$Application,
    cookies: Koa2$Cookies,
    // koa-views props
    render: (root: string, opts?: { [key: string]: any, ... }) => Promise<void>,
    // ?
    name?: string,
    originalUrl: string,
    req: http$IncomingMessage<>,
    request: Koa2$Request,
    res: http$ServerResponse,
    // should not be used, allow bypassing koa application.js#L193
    respond?: boolean,
    response: Koa2$Response,
    state: { [string]: any, ... },
    // context.js#L55
    assert: (test: mixed, status: number, message?: string, opts?: mixed) => void,
    // context.js#L107
    // if (!(err instanceof Error)) err = new Error(`non-error thrown: ${err}`);
    onerror: (err?: mixed) => void,
    // context.md#L88
    throw: ( status: number, msg?: string, opts?: {...} ) => void,
    toJSON(): Koa2$ContextJSON,
    inspect(): Koa2$ContextJSON,
    // ToDo: add const for some props,
    // while the `const props` feature of Flow is landing in future
    // cherry pick from response
    attachment: $PropertyType<Koa2$Response, 'attachment'>,
    redirect: $PropertyType<Koa2$Response, 'redirect'>,
    remove: $PropertyType<Koa2$Response, 'remove'>,
    vary: $PropertyType<Koa2$Response, 'vary'>,
    set: $PropertyType<Koa2$Response, 'set'>,
    append: $PropertyType<Koa2$Response, 'append'>,
    flushHeaders: $PropertyType<Koa2$Response, 'flushHeaders'>,
    status: $PropertyType<Koa2$Response, 'status'>,
    message: $PropertyType<Koa2$Response, 'message'>,
    body: $PropertyType<Koa2$Response, 'body'>,
    length: $PropertyType<Koa2$Response, 'length'>,
    type: $PropertyType<Koa2$Response, 'type'>,
    lastModified: $PropertyType<Koa2$Response, 'lastModified'>,
    etag: $PropertyType<Koa2$Response, 'etag'>,
    headerSent: $PropertyType<Koa2$Response, 'headerSent'>,
    writable: $PropertyType<Koa2$Response, 'writable'>,
    // cherry pick from request
    acceptsLanguages: $PropertyType<Koa2$Request, 'acceptsLanguages'>,
    acceptsEncodings: $PropertyType<Koa2$Request, 'acceptsEncodings'>,
    acceptsCharsets: $PropertyType<Koa2$Request, 'acceptsCharsets'>,
    accepts: $PropertyType<Koa2$Request, 'accepts'>,
    get: $PropertyType<Koa2$Request, 'get'>,
    is: $PropertyType<Koa2$Request, 'is'>,
    querystring: $PropertyType<Koa2$Request, 'querystring'>,
    idempotent: $PropertyType<Koa2$Request, 'idempotent'>,
    socket: $PropertyType<Koa2$Request, 'socket'>,
    search: $PropertyType<Koa2$Request, 'search'>,
    method: $PropertyType<Koa2$Request, 'method'>,
    query: $PropertyType<Koa2$Request, 'query'>,
    path: $PropertyType<Koa2$Request, 'path'>,
    url: $PropertyType<Koa2$Request, 'url'>,
    origin: $PropertyType<Koa2$Request, 'origin'>,
    href: $PropertyType<Koa2$Request, 'href'>,
    subdomains: $PropertyType<Koa2$Request, 'subdomains'>,
    protocol: $PropertyType<Koa2$Request, 'protocol'>,
    host: $PropertyType<Koa2$Request, 'host'>,
    hostname: $PropertyType<Koa2$Request, 'hostname'>,
    header: $PropertyType<Koa2$Request, 'header'>,
    headers: $PropertyType<Koa2$Request, 'headers'>,
    secure: $PropertyType<Koa2$Request, 'secure'>,
    stale: $PropertyType<Koa2$Request, 'stale'>,
    fresh: $PropertyType<Koa2$Request, 'fresh'>,
    ips: $PropertyType<Koa2$Request, 'ips'>,
    ip: $PropertyType<Koa2$Request, 'ip'>,
    ...
  }

  declare type Koa2$Middleware = (
    ctx: Koa2$Context,
    next: () => Promise<void>,
  ) => Promise<void> | void;

  declare type Koa2$ApplicationJSON = {
    'subdomainOffset': mixed,
    'proxy': mixed,
    'env': string,
    ...
  };

  declare export class Koa2$Application extends events$EventEmitter {
    context: Koa2$Context,
    // request handler for node's native http server.
    callback: () => (req: http$IncomingMessage<>, res: http$ServerResponse) => void,
    env: string,
    keys?: Array<string> | Object, // https://github.com/crypto-utils/keygrip
    middleware: Array<Koa2$Middleware>,
    proxy: boolean, // when true proxy header fields will be trusted
    request: Koa2$Request,
    response: Koa2$Response,
    server: http$Server,
    subdomainOffset: number,

    listen: $PropertyType<http$Server, 'listen'>,
    toJSON(): Koa2$ApplicationJSON,
    inspect(): Koa2$ApplicationJSON,
    use(fn: Koa2$Middleware): this,
  }
}
