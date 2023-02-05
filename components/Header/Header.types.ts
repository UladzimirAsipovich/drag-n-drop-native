import type { FunctionComponent, PropsWithChildren } from 'react'

interface I_HeaderProps extends PropsWithChildren {
  title?: string;
  center?: boolean | undefined;
  size?: 'sm' | 'md' | 'lg';
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'
}

export type I_Header = FunctionComponent<I_HeaderProps>;