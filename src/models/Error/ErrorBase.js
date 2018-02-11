class ErrorBase {
  /**
   * ...
   */
  code;

  /**
   * ...
   */
  msg;

  constructor(param) {
    this.code = param.code;
    this.msg = param.msg ? param.msg : '';
  }
}

export default ErrorBase;
