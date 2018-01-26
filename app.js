document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event) {
  const number = document.querySelector('#number').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      const jokes = response.value;
      const jokeList = document.querySelector('.jokes');
      let output = '';
      jokes.forEach(joke => {
        output += `<li>${joke.joke} </li>`;
      });
      jokeList.innerHTML = output;
    }
  };
  xhr.send();
  event.preventDefault();
}
