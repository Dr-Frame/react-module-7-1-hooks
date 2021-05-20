import React, { useState, useEffect, memo } from 'react';
//TODO:  memo() оборачиваем нашу функцию чтобы не біло ре рендера страницы когда стейт изменился на прошлое значение

function Counter() {
  //при вызове вернет масив, где 0 елемент ссылка на состояние
  // второй елемент это апдейтер(как сетстейт)

  //в отличии от класа, полностью меняет стейт
  // например, біло а:10, b:20 мы обновили только а:15 и стейт новый будет только а:15
  // хуки не сливают стейт
  //TODO: Если у нас сложный стейт, для каждого свойства пишем свою useState

  const [counterA, setCounterA] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const [counterB, setCounterB] = useState(0);

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  //TODO: useEffect() альтернатива сomponentDidMount(), DidUpdate(), WillUnmount()
  // Вызывается всегда когда:
  // Первый рендер
  // Каждый рендер
  // Каждый рендер при изменении какого-то пропса или стейта
  // последний рендер

  //просто вызов функции:
  //всегда вызывается когда useEffect(() => {console.log('heloo')})
  // 1-аргумент: колбек функция

  // если нужно задать условие при котором useEffect должен срабатывать
  // 2-аргумент: массив зависимостей
  // еффект дидМаунт. useEffect(() => {console.log('heloo')}, []);
  // еффект дидМаунт+дидАпдейт  на свойство(если изменилось-обновить).  useEffect(() => {console.log('значение каунтерА: ${counterA}')}, [counterA]);

  // еффект вилАнмаунт(). Логика перед каждым юзЕфект очищаем. Это доп функция которая пишется внутри useEffect().
  // useEffect(() => { console.log('counterA') return () => { } }, [counterA]);

  //TODO: можно создавать сколько угодно useEffect. Желательно в каждом ОДНА операция
  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули counterA {counterA} раз
      </button>

      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}

export default memo(Counter);

// export default class Counter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `Кликнули ${totalClicks} раз`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `Кликнули ${totalClicks} раз`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           style={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           style={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }
