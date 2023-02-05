import type { FunctionComponent, PropsWithChildren } from 'react'
import type { ImageProps } from 'next/image';

interface I_PictureProps extends PropsWithChildren, ImageProps {
  caption?: string;
  draggable?: boolean | undefined;
}

export interface I_PictureTransferData {
  type: 'text/json',
  source: 'picture',
  data: string
}

export type I_Picture = FunctionComponent<I_PictureProps>;