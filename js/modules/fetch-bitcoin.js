export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(".btc-preco");
      const bitcoin = (1000 / json.BRL.sell).toFixed(3);
      btcPreco.innerText = bitcoin;
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
