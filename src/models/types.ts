export interface CanopeoInput {
  imagePath: string;
  param1: number;
  param2: number;
  param3: number;
}

export interface RunCanopeoInput extends CanopeoInput {}

export interface CanopeoOutput {
  getCanopyCover: () => Promise<number>;
}
