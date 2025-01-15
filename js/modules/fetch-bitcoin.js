export default function initFetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      const bitcoin = (1000 / json.BRL.sell).toFixed(3);
      btcPreco.innerText = bitcoin;
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
