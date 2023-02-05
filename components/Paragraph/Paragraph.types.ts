import type { FunctionComponent, PropsWithChildren } from 'react'

interface I_ParagraphProps extends PropsWithChildren {
  title?: string;
  center?: boolean | undefined;
  size?: 'sm' | 'md' | 'lg';
  draggable?: boolean | undefined;
}

export interface I_ParagraphTransferData {
  type: 'text/json',
  source: 'paragraph',
  data: string
}

export type I_Paragraph = FunctionComponent<I_ParagraphProps>;