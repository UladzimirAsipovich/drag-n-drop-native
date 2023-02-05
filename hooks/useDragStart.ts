import { DragEventHandler, useCallback } from 'react';
import { I_ParagraphTransferData } from '../components/Paragraph/Paragraph.types';
import { I_PictureTransferData } from '../components/Picture/Picture.types';

type T_typeofElement = I_ParagraphTransferData['source'] | I_PictureTransferData['source'];
type T_Element = T_typeofElement extends I_ParagraphTransferData['source'] ? HTMLParagraphElement : HTMLDivElement;
const useDragStartHandler = (isDraggable: boolean | undefined, typeofElement: T_typeofElement, nextImageSrc?: string) => {

  return useCallback<DragEventHandler<T_Element>>((e) => {
    if (!isDraggable) return;

    const TD: I_ParagraphTransferData | I_PictureTransferData = {
      type: "text/json",
      source: typeofElement,
      data: typeofElement === 'paragraph' ? e.currentTarget.innerText : nextImageSrc ? nextImageSrc : ''
    }

    e.dataTransfer.clearData();
    e.dataTransfer.effectAllowed = 'copyLink';
    e.dataTransfer.dropEffect = 'link';
    e.dataTransfer.setData('text/plain', JSON.stringify(TD));
  }, [isDraggable]);
}

export default useDragStartHandler;