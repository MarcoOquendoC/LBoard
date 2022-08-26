const SirenomanGame = {
  async addScore(user, score) {
    const idUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Wixx5eHz4Mwu4bDNa1Gl/scores/';
    const response = await fetch(idUrl, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  },
  async getScores() {
    const idUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Wixx5eHz4Mwu4bDNa1Gl/scores/';
    const response = await (await fetch(idUrl)).json();
    return response.result;
  },
};

export default SirenomanGame;
