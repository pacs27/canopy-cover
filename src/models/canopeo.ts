import sharp from 'sharp';
import { CanopeoInput, CanopeoOutput, RunCanopeoInput } from './types';

export default function makeCanopeo() {
  return function Canopeo({
    imagePath,
    param1,
    param2,
    param3,
  }: CanopeoInput): CanopeoOutput {
    return Object.freeze({
      getCanopyCover: () =>
        runCanopeoModel({ imagePath, param1, param2, param3 }),
    });
  };
}

function runCanopeoModel({
  imagePath,
  param1,
  param2,
  param3,
}: RunCanopeoInput): Promise<number> {
  return sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then((data: { data: Buffer; info: sharp.OutputInfo }) => {
      const totalNumberPixels = data.info.width * data.info.height;
      let canopyCoverCount = 0;
      let offset, redPixel, greenPixel, bluePixel;
      // Fill Array Pixels
      for (var y = 0; y < data.info.height; y++) {
        for (var x = 0; x < data.info.width; x++) {
          offset = data.info.channels * (data.info.width * y + x);
          redPixel = data.data[offset];
          greenPixel = data.data[offset + 1];
          bluePixel = data.data[offset + 2];
          if (
            redPixel / greenPixel < param1 &&
            bluePixel / greenPixel < param2 &&
            2 * greenPixel - redPixel - bluePixel >= param3
          ) {
            canopyCoverCount = canopyCoverCount + 1;
          }
        }
      }
      const canopyCover = canopyCoverCount / totalNumberPixels;
      return canopyCover;
    });
}
