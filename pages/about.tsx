import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import MetaHead from '../components/MetaHead/MetaHead';
import Paragraph from '../components/Paragraph/Paragraph';

const About: NextPage = () => (
  <main className='content'>
    <MetaHead title={'About Vladimir Osipovich'} />

    <section className='about'>
      <div className="about__hero">
        <div className="about__hero__wrapper">
          <Header title='Привет! Меня зовут Владимир Осипович!' element='h1' />
          <Paragraph>
            Я постоянно учусь и занимаюсь саморазвитием. Имею два высших технических
            образования. Могу принимать разумные и взвешенные решения в резко
            меняющейся обстановке. Стараюсь логически мыслить, умею отстаивать своё
            мнение и при этом спокойно воспринимать конструктивную критику. Умею
            ладить с группой людей. В среднесрочной перспективе (1-3 мес.) полностью
            готов к переезду. Все работы в портфолио (дизайн, вёрстка, программная
            разработка, поисковая оптимизация и все другие сопутствующие работы)
            делал сам (один) с самого начала (с нуля), включая серверную часть и
            административную панель.
          </Paragraph>
        </div>
      </div>
      <div className="content-section">
        <Header title='Профессиональные качества' element='h2' />
        <ul>
          <li>HTML, CSS (SASS, SCSS), schema.org;</li>
          <li>JS (“Vanilla”, React, NextJS, Node, ExpressJS, Webpack);</li>
          <li>DB (MySQL, Firestore, ORM Sequelize);</li>
        </ul>
      </div>
      <div className="content-section">
        <Header title='Личностные качества' element='h2' />
        <ul>
          <li>Самоорганизован, не требую контроля со стороны руководства;</li>
          <li>Исполнительный, дисциплинированный, работоспособный;</li>
          <li>
            Не имею вредных привычек (курение), спиртное как у медианы здорового
            большинства — редко, в хорошей компании и по праздникам.
          </li>
        </ul>
      </div>
      <div className="content-section">
        <Header title='Социальные сети' element='h2' />
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/vladimirosipovich/" target='_blank'>LinkedIn</a> - LinkedIn Page;
          </li>
        </ul>
      </div>
      <div className="content-section">
        <Header title='Опыт работы 3+ лет' element='h2' />
        <ul>
          <li>
            <a href="https://tpmbarbershop.by/" target='_blank'>The Prankster Monkey’s Barbershop</a>
            - Дизайн и разработка сайта. Полностью написан на Next.js + TypeScript,
            включая серверную часть (проверка формы и отправка электронного письма
            на почту для обратной связи), выложен не на хостинг от Vercel;
          </li>
          <li>
            <a href="https://3dmasterhand.by/" target='_blank'>3D Master Hand</a> - Дизайн и
            разработка сайта. Клиентский рендеринг – React, SCSS, Bootstrap;
          </li>
          <li>
            <a href="https://healthylife.by/" target='_blank'>Healthylife</a> - Дизайн и разработка
            интернет-магазина. Серверный рендеринг – ExpressJS, PUG, React
            (административная панель), SCSS, Bulma. СУБД MySQL;
          </li>
          <li>
            <a href="https://camonasia.com/" target='_blank'>Camonasia</a> - Дизайн и разработка
            сайта. Серверный рендеринг – ExpressJS, PUG, SCSS, Bulma. СУБД MySQL; В
            настоящий момент сайт находится в процессе редизайна и переписывается
            под Next.js.
          </li>
        </ul>
      </div>
      <hr />
      <div className="content-section">
        <Header title='Спасибо что прочитали до конца! Я был бы очень рад присоединиться к вашей команде!' element='h2' center size='lg' />
      </div>
    </section>
  </main>
);

export default About;