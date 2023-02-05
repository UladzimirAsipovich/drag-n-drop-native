import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import MetaHead from '../components/MetaHead/MetaHead';
import WorkArea from '../components/WorkArea/WorkArea';
import Sidebar from '../components/Sidebar/Sidebar';
import NextLink from '../components/NextLink/NextLink';


const Index: NextPage = () => (
  <main className='content'>
    <MetaHead title={'Vladimir Osipovich'} />
    <Header title='Simple Editor' center element='h1' />
    <section className='simple-editor'>
      <div className="simple-editor__wrapper">
        <Sidebar />
        <WorkArea />
      </div>
    </section>
  </main>
);

export default Index;