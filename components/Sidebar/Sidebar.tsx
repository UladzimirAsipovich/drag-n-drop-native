import Header from '../Header/Header';
import { FunctionComponent, useState } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Picture from '../Picture/Picture';
import style from './Sidebar.module.scss'

const Sidebar: FunctionComponent = () => {

  const [dragging, setDragging] = useState<boolean>(false);

  return (
    <div className={`${style.sidebar} ${dragging ? style.sidebar_dragging : ''}`} onDragStart={() => { setDragging(true) }} onDragEnd={() => { setDragging(false) }}>
      <Header title='Sidebar' center size='sm' />
      <div className="sidebar__content">
        <Paragraph title='Simple Text' draggable />

        <Picture
          src="/img/meta-logo.webp"
          alt="Picture of the author"
          layout='responsive'
          width={512}
          height={512} draggable
        />
      </div>
    </div>
  );
}

export default Sidebar;