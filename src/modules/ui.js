const ui = {
  render(scoreData) {
    const scores = document.getElementById('scores');
    scores.innerHTML = '';
    for (let i = 0; i < scoreData.length; i += 1) {
      const user = document.createElement('td');
      user.textContent = scoreData[i].user;
      user.classList.add('user');

      const score = document.createElement('td');
      score.textContent = scoreData[i].score;
      score.classList.add('score');

      const line = document.createElement('tr');
      line.appendChild(user);
      line.appendChild(score);

      scores.appendChild(line);
    }
  },
};

export default ui;