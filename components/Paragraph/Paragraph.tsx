import style from './Paragraph.module.scss';
import type { I_Paragraph } from './Paragraph.types'
import useDragStartHandler from '../../hooks/useDragStart';

const Paragraph: I_Paragraph = ({ title, size = 'md', center, draggable, children, ...other }) => {

  const dragStartHandler = useDragStartHandler(draggable, 'paragraph');

  return (
    <p
      className={`${style.paragraph} ${center ? style.paragraph_center : ''} ${draggable ? style.paragraph_draggable : ''} ${style[`paragraph_${size}`]}`}
      draggable
      onDragStart={dragStartHandler}
      {...other}
    >
      {
        children ?? (title || "Header")
      }
    </p>
  )
}

export default Paragraph;