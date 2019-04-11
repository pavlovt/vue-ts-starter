import alertify from "alertifyjs";

export interface INotify {
  info(msg: string);
  error(msg: string);
  confirm(msg: string, okFn: Function, cancelFn?: Function, title?: string);
}

class Notify {
  alertify = alertify;
  constructor() {
    alertify.set("notifier", "position", "bottom-right");
    alertify.set("notifier", "delay", 10);
    alertify.defaults.glossary.title = "";
  }

  info(msg) {
    alertify.success(msg);
  }

  error(msg) {
    alertify.error(msg);
  }

  confirm(msg, okFn, cancelFn = null, title = "") {
    // confirm dialog
    alertify.defaults.glossary.title = title;
    alertify.confirm(msg, okFn, cancelFn);
  }
}

export default new Notify();
