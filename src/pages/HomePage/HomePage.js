import React from 'react';

import s from './HomePage.module.css';

const HomePage = () => (
  <div className={s.container}>
    <div className={s.titleContainer}>
      <h1 className={s.title}>
        <span className={s.titleText}> Phonebook</span>
      </h1>
      <span className={s.titleDesc}>
        Надежный помощник в сборе и хранении ваших
        контактов. Зарегистрируйтесь и убедитесь в этом!
      </span>
    </div>
  </div>
);

export default HomePage;
