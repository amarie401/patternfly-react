import { SFC, HTMLProps, ReactNode } from 'react';

export interface ModalBoxBodyProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  id: string;
}

declare const ModalBoxBody: SFC<ModalBoxBodyProps>;

export default ModalBoxBody;
