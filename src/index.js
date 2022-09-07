// import _ from 'lodash';
import './style.css';
import ui from './modules/ui.js';
import SirenomanGame from './modules/apiMethods.js';

const manageData = async () => {
  const data = await SirenomanGame.getScores();
  const x = data.filter(x => { 0 <= x.score && x.score <= 100 });
  x.sort((a, b) => b.score - a.score);
  const topTen = x.slice(0, 10);
  ui.render(topTen);
};

manageData();

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  if (user.length <= 15 && score.length <= 3) {
    SirenomanGame.addScore(user, score).then(manageData);
  }
  form.reset();
});

const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
  manageData();
});
