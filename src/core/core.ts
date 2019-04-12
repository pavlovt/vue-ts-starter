import { truncate } from "fs";
import router from "vue-router";

export interface ICore {
  /**
   * Go to another route
   * @param path path to go to
   * @param params query or other params
   */
  goto(path: string, params?: any);
  empty(val: any);
  saveLocal(prop: string, val: any);
  getLocal(prop: string);
  removeLocal(prop: string);
  /**
   * Truncate text
   */
  truncate(string: string, cut: number);
}

/**
 * Contains common methods
 */
class Core {
  /**
   * Go to other page without reloading the site
   * @param {string} path   Path to go to
   * @param {object} params Params that are needed by the path
   */
  goto(path, params: any = {}, query: any = {}) {
    vm.$router.push({ path, params, query });
  }

  // return true if the value is [], {}, "", null, undefined
  empty(val) {
    return _.isEmpty(val) && !_.isNumber(val) && !_.isDate(val);
  }

  saveLocal(prop, val) {
    val = !_.isString(val) ? JSON.stringify(val) : val;
    localStorage.setItem(prop, val);
  }

  getLocal(prop: string) {
    let res: any;
    // maybe it is json?
    try {
      res = JSON.parse(localStorage.getItem(prop) as any);
    } catch (err) {
      res = localStorage.getItem(prop);
    }

    return res;
  }

  removeLocal(prop) {
    localStorage.removeItem(prop);
  }

  // truncate the string and given length (cut) adding ... if truncate
  truncate(string, cut) {
    cut = cut || 30;
    if (string !== undefined && string.length > cut) {
      let newString = string.slice(0, cut) + "...";
      return newString;
    } else {
      return string;
    }
  }

  // check if the current user has at least one of this roles
  hasRole(roles) {
    roles = _.isString(roles) ? [roles] : roles;

    return !_.isEmpty(_.intersection(conf.user.roles, roles));
  }
}

export default new Core();
