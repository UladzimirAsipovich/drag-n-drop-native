import Image from 'next/image'
import style from './Picture.module.scss';
import type { I_Picture } from './Picture.types';
import useDragStartHandler from '../../hooks/useDragStart';

const Picture: I_Picture = ({ caption, draggable, ...NextImageProps }) => {

  const dragStartHandler = useDragStartHandler(draggable, 'picture', NextImageProps.src as string);

  return (
    <figure
      className={`${style.picture}  ${draggable ? style.picture_draggable : ''}`}
      onDragStart={dragStartHandler}
      draggable
    >
      {caption ?? <figcaption className={style.picture__caption}>{caption}</figcaption>}
      <div>
        <Image {...NextImageProps} />
      </div>
    </figure>
  )
}

export default Picture;