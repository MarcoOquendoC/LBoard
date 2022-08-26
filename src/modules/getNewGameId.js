const newGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'SirenomanGame',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  const getId = data.result.split(' ')[3];
  localStorage.setItem('List', getId);
};

export default newGame;
