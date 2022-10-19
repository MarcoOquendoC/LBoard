// import _ from 'lodash';
import './style.css';
import ui from './modules/ui.js';
import SirenomanGame from './modules/apiMethods.js';

const manageData = async () => {
  const data = await SirenomanGame.getScores();
  data.sort((a, b) => b.score - a.score);
  const topTen = data.slice(0, 100);
  ui.render(topTen);
};

manageData();

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  if (user.length <= 15 && score < 1000) {
    SirenomanGame.addScore(user, score).then(manageData);
    form.reset();
  } else if (score < 1000) {
    alert('Please enter a valid score and Stop messing with the application`s code');
  } else if (user.length <= 15) {
    alert('Please enter a valid name and Stop messing with the application`s code');
  } else {
    alert('Stop messing with the application`s code');
  }
});

const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
  manageData();
});
