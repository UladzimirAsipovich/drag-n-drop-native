import { useCallback, useState } from 'react';
import type { FunctionComponent, DragEventHandler } from 'react';
import type { I_ParagraphTransferData } from '../Paragraph/Paragraph.types';
import type { I_PictureTransferData } from '../Picture/Picture.types';
import style from './TextArea.module.scss';

const TextArea: FunctionComponent = () => {

  const [textPlaceholder, setTextPlaceholder] = useState<string>('Сюда можно перетаскивать текст')
  const [text, setText] = useState<string>('');
  const [dropping, setDropping] = useState<boolean>(false);

  const onDropTextareaHandler = useCallback<DragEventHandler<HTMLTextAreaElement>>((e) => {
    try {
      const SRC: I_PictureTransferData | I_ParagraphTransferData = JSON.parse(e.dataTransfer.getData('text/plain'));
      if (SRC.source === 'picture') {
        throw 'Поддерживаются только текстовые форматы данных!'
      }
      e.preventDefault();
      setDropping(false);
      setText(SRC.data);
    } catch (err) {
      setTextPlaceholder(err as string);
      console.error(err);
      setDropping(false);
    }
  }, []);

  return (
    <textarea
      className={`${style.textarea} ${dropping ? style.textarea_dropping : ''} `}
      name="textArea"
      id="textArea"
      defaultValue={text}
      placeholder={textPlaceholder}
      onDragEnter={() => setDropping(true)}
      onDragLeave={() => setDropping(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDropTextareaHandler}
    />
  );
}

export default TextArea;