/*
 * Type def from from source code of koa.
 * this: https://github.com/koajs/koa/commit/08eb1a20c3975230aa1fe1c693b0cd1ac7a0752b
 * previous: https://github.com/koajs/koa/commit/fabf5864c6a5dca0782b867a263b1b0825a05bf9
 *
 * Changelog
 * breaking: remove unused app.name
 * breaking: ctx.throw([status], [msg], [properties]) (caused by http-errors (#957) )
**/
declare module 'koa' {
  import type {
    Koa2$JSON,
    Koa2$JSONObject,
    Koa2$JSONArray,
    Koa2$SimpleHeader,
    Koa2$RequestJSON,
    Koa2$RequestInspect,
    Koa2$Request,
    Koa2$ResponseJSON,
    Koa2$ResponseInspect,
    Koa2$Response,
    Koa2$CookiesSetOptions,
    Koa2$Cookies,
    Koa2$ContextJSON,
    Koa2$Context,
    Koa2$Middleware,
    Koa2$ApplicationJSON,
  } from '@flow-typed/base-koa';
  import typeof { Koa2$Application } from '@flow-typed/base-koa';

  declare type JSON = Koa2$JSON;
  declare type JSONObject = Koa2$JSONObject;
  declare type JSONArray = Koa2$JSONArray;
  declare type SimpleHeader = Koa2$SimpleHeader;
  declare type RequestJSON = Koa2$RequestJSON;
  declare type RequestInspect = Koa2$RequestInspect;
  declare type Request = Koa2$Request;
  declare type ResponseJSON = Koa2$ResponseJSON;
  declare type ResponseInspect = Koa2$ResponseInspect;
  declare type Response = Koa2$Response;
  declare type ContextJSON = Koa2$ContextJSON;
  declare type CookiesSetOptions = Koa2$CookiesSetOptions;
  declare type Cookies = Koa2$Cookies;
  declare type Context = Koa2$Context;
  declare type Middleware = Koa2$Middleware;
  declare type ApplicationJSON = Koa2$ApplicationJSON;

  declare module.exports: Koa2$Application;
}
