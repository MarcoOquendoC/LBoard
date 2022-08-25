// import _ from 'lodash';
import './style.css';
import ui from './modules/ui.js';
import newGame from './modules/getNewGameId.js';

const loadLocal = localStorage.getItem('List');
if (loadLocal === null) {
  newGame.getFirstId();
}
const scoreData = [
  { id: 0, name: 'Marco', score: 100 },
  { id: 0, name: 'Marco', score: 100 },
  { id: 0, name: 'Marco', score: 100 },
  { id: 0, name: 'Marco', score: 100 },
  { id: 0, name: 'Marco', score: 100 },
  { id: 0, name: 'Marco', score: 100 },
];

ui.render(scoreData);