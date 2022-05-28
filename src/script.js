const fetchMessage = document.querySelector('#fetch');
const message = document.querySelector('.message');
const messageID = document.querySelector('.message-id');

function getMessage() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res.slip;
    })
    .then((slip) => {
      message.textContent = `"${slip.advice}"`;
      messageID.textContent = `ADVICE  #${slip.id}`;
    })
    .finally(() => {
      fetchMessage.disabled = true;
      setTimeout(() => (fetchMessage.disabled = false), 2000);
    });
}

fetchMessage.addEventListener('click', getMessage);
