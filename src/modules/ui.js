const ui = {
  render(scoreData) {
    const scores = document.getElementById('scores');

    for (let i = 0; i < scoreData.length; i += 1) {
      const name = document.createElement('td');
      name.textContent = scoreData[i].name;
      name.classList.add('name');

      const score = document.createElement('td');
      score.textContent = scoreData[i].score;
      score.classList.add('score');

      const line = document.createElement('tr');
      line.appendChild(name);
      line.appendChild(score);

      scores.appendChild(line);
    }
  },
};

export default ui;