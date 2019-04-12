// import {LoDashStatic} from 'lodash';
import { Conf } from "./core/conf";
import { INotify } from "./core/notify";
import { ICore } from "./core/core";
import { IApi } from "./core/api";

// we must force tsc to interpret this file as a module, resolves
// "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."
// error
export {};

// define all global variables here
declare global {
  // global vue instance of the app
  var vm: any;
  var _: any;
  var conf: Conf;
  var msg: INotify;
  var core: ICore;
  var api: IApi;
}
