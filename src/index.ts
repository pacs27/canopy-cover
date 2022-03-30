// export const sum = (a: number, b: number) => {
//   if ('development' === process.env.NODE_ENV) {
//     console.log('boop');
//   }
//   return a + b;
// };

import makeCanopeo from './models/canopeo';

export const canopeo = makeCanopeo();
export const canopyCover = { canopeo };
export default canopyCover;
