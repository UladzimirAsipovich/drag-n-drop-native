import { useState } from 'react';
import type { FunctionComponent } from 'react';
import NextLink from '../NextLink/NextLink';
import style from './Navigate.module.scss';
import type { T_Links } from './Navigate.types';
import { useRouter } from 'next/router';

const Navigate: FunctionComponent = () => {

  const [Links] = useState<T_Links>([
    {
      name: 'Home',
      url: '/'
    }, {
      name: 'About',
      url: '/about'
    }
  ])

  const router = useRouter();

  return (
    <nav className={style.navigate}>
      <ul className={style.navigate__list}>
        {
          Links.map((Link, ind) => (
            <li className={style.navigate__item} key={Link.url + ind}>
              <NextLink href={Link.url} passHref>
                <a className={`${style.navigate__link} ${router.pathname === Link.url ? style.active : ''}`}>{Link.name}</a>
              </NextLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Navigate;