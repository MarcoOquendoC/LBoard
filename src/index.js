// import _ from 'lodash';
import './style.css';
import ui from './modules/ui.js';
import SirenomanGame from './modules/apiMethods.js';

const manageData = async () => {
  const data = await SirenomanGame.getScores();
  const x = [...data];
  x.sort((a, b) => b.score - a.score);
  const topTen = x.slice(0, 10);
  ui.render(topTen);
};

manageData();

const form = document.getElementById('form');
form.addEventListener('submit', () => {
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  SirenomanGame.addScore(user, score).then(manageData);
  form.reset();
});

const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
  manageData();
});