import React from 'react';

export enum DeferredPromiseStatus {
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

export class DeferredPromise<T = any> {
  private readonly _promise: Promise<T>;
  public resolve: () => void = () => {};
  public reject: (arg: Error) => void = () => {};
  public readonly then: <TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined
  ) => Promise<T | TResult>;
  public readonly catch: <TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined
  ) => Promise<T | TResult>;
  public readonly finally: (onfinally?: (() => void) | null | undefined) => Promise<void | T>;

  public status: DeferredPromiseStatus;

  public [Symbol.toStringTag] = 'Promise';

  constructor() {
    this._promise = new Promise<T>((resolve, reject) => {
      // assign the resolve and reject functions to `this`
      // making them usable on the class instance
      this.resolve = () => {
        this.status = DeferredPromiseStatus.resolved;
        resolve();
      };
      this.reject = (arg: Error) => {
        this.status = DeferredPromiseStatus.rejected;
        reject(arg);
      };
    });
    // bind `then` and `catch` to implement the same interface as Promise
    this.then = this._promise.then.bind(this._promise);
    this.catch = this._promise.catch.bind(this._promise);
    this.finally = this._promise.catch.bind(this._promise);
    this.status = DeferredPromiseStatus.pending;
  }
}

const _loadComponentAfterDataLoaded = <T extends any>(
  component: React.ComponentType<T>,
  checkDataLoaded: Promise<T>
): Promise<{ default: React.ComponentType<T> }> => {
  return new Promise((resolve, reject) => {
    try {
      checkDataLoaded.then(() => {
        resolve({ default: component });
      });
    } catch (e) {
      reject(e);
    }
  });
};

export const lazyLoadWithDataCheck = <T extends any>(
  pathFromSrc: string
): [React.LazyExoticComponent<React.ComponentType<T>>, DeferredPromise] => {
  const checkData = new DeferredPromise();

  return [
    React.lazy<React.ComponentType<T>>(async () => {
      const exports = await import(/*webpackChunkName: "[request]"*/ `../../src/${pathFromSrc}`);
      return _loadComponentAfterDataLoaded(exports.default, checkData);
    }),
    checkData,
  ];
};

export const lazyLoad = <T extends any>(pathFromSrc: string) => {
  return React.lazy<React.ComponentType<T>>(() => import(/*webpackChunkName: "[request]"*/ `../../src/${pathFromSrc}`));
};
