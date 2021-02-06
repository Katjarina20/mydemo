// в дочерних файлах ты часто импортируешь React. Если в файле напрямую ты не обращаешься к нему, то лучше не импортировать
// кроме классовых компонент, ибо там идёт наследование от React.Component
// также и со стилями и с родительскими коммпонентами, их достаточно вызвать один раз сверху, а к дочерним файлам они и так подтягиваться будут

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));
