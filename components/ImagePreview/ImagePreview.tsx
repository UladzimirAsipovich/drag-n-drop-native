import { useCallback, useState } from 'react';
import type { FunctionComponent, DragEventHandler } from 'react';
import { I_PictureTransferData } from '../Picture/Picture.types';
import style from './ImagePreview.module.scss';
import Picture from '../Picture/Picture';

const ImagePreview: FunctionComponent = () => {

  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [imgCaption, setImgCaption] = useState<string>('Перетащите сюда изображение');
  const [dropping, setDropping] = useState<boolean>(false);

  const onDropImgPreviewHandler = useCallback<DragEventHandler<HTMLDivElement>>((e) => {
    try {
      const SRC: I_PictureTransferData = JSON.parse(e.dataTransfer.getData('text/plain'));
      if (SRC.source !== 'picture') {
        throw 'Поддерживаются только форматы изображений!'
      }
      e.preventDefault();
      setDropping(false);
      setImgSrc(SRC.data);
      setImgCaption('Что бы скачать файл - нажмите на изображение');
    } catch (err) {
      setImgCaption(err as string);
      setDropping(false);
      console.error(err);
    }
  }, []);

  return (
    <div
      className={`${style.image__preview} ${dropping ? style.image__preview_dropping : ''} `}
      onDragEnter={() => setDropping(true)}
      onDragLeave={() => setDropping(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDropImgPreviewHandler}
    >
      <p className={style.image__preview__caption}>{imgCaption}</p>
      {
        imgSrc && (
          <a href={imgSrc} download>
            <Picture src={imgSrc} alt="Picture Preview" layout='responsive' width={512} height={512} />
          </a>
        )
      }
    </div>
  );
}

export default ImagePreview;