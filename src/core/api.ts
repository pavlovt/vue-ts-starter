import axios from "axios";
import { puts } from "util";

export interface IApi {
  get(url: string, query?: any, headers?: any, options?: any);
  post(url: string, data?, headers?: any, options?: any);
  put(url: string, data: any, headers?: any, options?: any);
  patch(url: string, data: any, headers?: any, options?: any);
  delete(url: string, headers?: any, options?: any);
}

class Api implements IApi {
  defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  ws: any;

  private send(method, url, data, headers, options) {
    // set default options
    options = _.assign({ error: true, getAll: false, ajax: {} }, options || {});

    data = data || {};
    headers = headers ? headers : {};
    headers = _.assign({}, this.defaultHeaders, headers);

    if (conf.user.access_token) {
      headers.Authorization = "Bearer " + conf.user.access_token;
    }

    return axios({
      url: this.url(url),
      method,
      headers,
      data,
      ...options.ajax
    }).then(
      res => {
        // res contains {data, status, headers, config, request}
        // https://github.com/axios/axios#response-schema
        // usually we need only the data from the server
        // but in some case we may need also the other props and then we provide getAll: true
        return _.get(options, "getAll") ? res : res.data;
      },
      err => {
        // in this case use the default error handler
        if (_.get(options, "error")) {
          this.handleErrors(err);
        }
      }
    );
  }

  private url(url: string) {
    return conf.server + url;
  }

  get(url: string, query?: any, headers?: any, options?: any) {
    return this.send("get", url, query, headers, options);
  }

  post(url: string, data?, headers?: any, options?: any) {
    return this.send("post", url, data, headers, options);
  }

  put(url: string, data: any, headers?: any, options?: any) {
    return this.send("put", url, data, headers, options);
  }

  patch(url: string, data: any, headers?: any, options?: any) {
    return this.send("patch", url, data, headers, options);
  }

  delete(url: string, headers?: any, options?: any) {
    return this.send("delete", url, {}, headers, options);
  }

  // default error handler
  private handleErrors(err: any) {
    // set the default error message if the server is not providing one
    const msg = _.get(err, "response.message") || "Server error";

    if (err.response.status !== 401) {
      msg.error(msg);
    } else {
      // the session has expired - logout the user
      core.removeLocal("user");
      conf.user = {};
      // conf.cache = {};
      core.goto("/public");
      msg.error("Your session has expired");
    }
  }
}

export default new Api();
