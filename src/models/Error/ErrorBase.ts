class ErrorBase {
  /**
   * ...
   */
  public code: number;

  /**
   * ...
   */
  public msg?: string;

  constructor(param: ErrorBase) {
    this.code = param.code;
    this.msg = param.msg ? param.msg : '';
  }
}

export default ErrorBase;
