import React, { useContext } from 'react';
import context from '../context/authContext';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: 24,
    margin: `0 20px 0 0`,
  },
};

export default function UserMenu() {
  //получаем данные с контекста
  const { name, logIn, logOut } = useContext(context);
  console.log(name);
  console.log(logIn);
  console.log(logOut);

  return (
    <div style={styles.container}>
      <>
        <p style={styles.tag}>{name}</p>
        <button type="button" onClick={logOut}>
          Выйти
        </button>
      </>

      <button type="button" onClick={logIn}>
        Войти
      </button>
    </div>
  );
}
