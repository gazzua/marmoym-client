import { ThemedStyledFunction } from 'styled-components';


// @see https://github.com/styled-components/styled-components/issues/630#issuecomment-317277803
// export const withProps = <U>() =>
// <P, T, O>(
//     fn: ThemedStyledFunction<P, T, O>
// ): 
export const withProps = <U>() => {
  return function<P, T, O>(fn: ThemedStyledFunction<P, T, O>): ThemedStyledFunction<P & U, T, O & U> {
    return fn;
  }
}