import Header from '../Header/Header';
import type { FunctionComponent } from 'react';
import style from './WorkArea.module.scss';
import ImagePreview from '../ImagePreview/ImagePreview';
import TextArea from '../TextArea/TextAra';

const WorkArea: FunctionComponent = () => {

  return (
    <div className={style.workArea}>
      <Header title='Work Area' center size='sm' />
      <div>
        <TextArea />
        <ImagePreview />
      </div>
    </div>
  );
}

export default WorkArea;