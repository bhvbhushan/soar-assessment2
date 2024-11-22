import { CSSProperties } from 'react';

export type dimension = number | string;
export type color = CSSProperties['color'];
export type chartDataObjectType = {
  [key: string]: (string | number | null)[];
};
