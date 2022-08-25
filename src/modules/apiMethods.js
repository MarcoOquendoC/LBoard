const SirenomanGame = {
  url: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  id: 'Wixx5eHz4Mwu4bDNa1Gl',
  idUrl: `${SirenomanGame.url}${SirenomanGame.id}/scores/`,
  response: '',
  async addScore(name, score) {
    const response = await fetch(SirenomanGame.idUrl, {
      method: 'POST',
      body: JSON.stringify({
        'name': name,
        'score': score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    SirenomanGame.response = response;
  }
}

export default SirenomanGame;
