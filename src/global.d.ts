// import {LoDashStatic} from 'lodash';

// we must force tsc to interpret this file as a module, resolves
// "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."
// error
export {}

// define all global variable here
declare global {
  var zz: any;
  var _: any;
}