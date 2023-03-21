// import _ from 'lodash';
import './style.css';
import ui from './modules/ui.js';
import SirenomanGame from './modules/apiMethods.js';

const manageData = async () => {
  const data = await SirenomanGame.getScores();
  const topTen = data.slice(0, 100);
  ui.render(topTen);
};

manageData();

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  if (user.length <= 15 && score < 1000 && score > 1) {
    SirenomanGame.addScore(user, score).then(manageData);
    form.reset();
  } else if (score > 1000) {
    alert('Please enter a valid score in the range 1..1000');
  } else if (user.length <= 15) {
    alert('Please enter a valid name');
  } else {
    alert('Please enter a valid score in the range 1..1000 and a valid name');
  }
});

const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
  manageData();
});
