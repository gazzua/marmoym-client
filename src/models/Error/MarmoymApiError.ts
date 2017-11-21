import ErrorBase from './ErrorBase';

class MarmoymApiError extends ErrorBase {
  public constructor(param: MarmoymApiError) {
    super(param);
  }
}

export default MarmoymApiError;
