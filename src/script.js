const fetchMessage = document.querySelector('#fetch');
const message = document.querySelector('.message');
const messageID = document.querySelector('.message-id');

function getMessage() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json.slip;
    })
    .then((slip) => {
      message.textContent = `"${slip.advice}"`;
      messageID.textContent = `ADVICE  #${slip.id}`;
    })
    .catch((error) => {
      message.textContent = `Unable to fetch quote, check internet connection`;
      setTimeout(
        () =>
          (message.textContent = `Click the die for the advice that you seek...`),
        4000
      );
      console.error(error);
    })
    .finally(() => {
      fetchMessage.disabled = true;
      setTimeout(() => (fetchMessage.disabled = false), 2000);
    });
}

fetchMessage.addEventListener('click', getMessage);
