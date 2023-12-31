import { bib } from "./bib.js";

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length === 0) {
    return;
  }
  console.log(localStorage.listajogos);
  bib.jogos = JSON.parse(localStorage.listajogos);
  console.log(bib);
  for (let i = 0; i < bib.jogos.length; i++) {
    let unidade = document.createElement('div');
    construir(unidade, bib.jogos[i].nome, bib.jogos[i].desenvolvedora, bib.jogos[i].capa, bib.jogos[i].link);
    if (bib.jogos[i].fav) {
        unidade.querySelector('#heart').src = "imagens/heart.png";
    }
    if (bib.jogos[i].stars) {
      let star = unidade.querySelectorAll('.star');
      for (let x = 0; x < 5; x++) {
        if (x >= bib.jogos[i].stars) {
          star[x].src = "imagens/star0.png";
        }
        else {
          star[x].src = "imagens/star.png";
        }
      }
    }
    if (bib.jogos[i].status) {
    unidade.querySelector('select').selectedIndex = bib.jogos[i].status;
    }
    document.querySelector('.lista').appendChild(unidade);
    clique(unidade);
  }
})

const form = document.forms[0];
const lista = document.querySelector('.lista');
let unid;
  function clique (unid) {
  unid = document.querySelectorAll('.unidade');
  unid.forEach((card, posi) => {
    card.onclick = e => {
      if (e.target.id === 'heart') {
        toggleFavorito(e.target, posi);
        localStorage.listajogos = JSON.stringify(bib.jogos);
        console.log(localStorage.listajogos);
      } else
        if (e.target.classList.contains('star')) {
          let id = Number(e.target.id.replace('star', ''));
          bib.jogos[posi].stars = id;
          toggleEstrela(e.target.parentElement, id, posi);
          localStorage.listajogos = JSON.stringify(bib.jogos);
          console.log(localStorage.listajogos);
        }
    };
    card.querySelector('select').addEventListener('change', () => {
      bib.jogos[posi].status = card.querySelector('select').selectedIndex;
      localStorage.listajogos = JSON.stringify(bib.jogos);
      console.log(localStorage.listajogos);
    });
  });
    localStorage.listajogos = JSON.stringify(bib.jogos);
    console.log(localStorage.listajogos);
  }

function toggleFavorito(heart, jogo) {
  if (heart.getAttribute('src') == "imagens/heart0.png") {
    heart.src = "imagens/heart.png";
    bib.jogos[jogo].fav = true;
  }
  else if (heart.getAttribute('src') == "imagens/heart.png") {
    heart.src = "imagens/heart0.png";
    bib.jogos[jogo].fav = false;
  }
}

function toggleEstrela(star, qnt) {
  star = star.querySelectorAll('.star');
  for (let x = 0; x < 5; x++) {
    if (x >= qnt) {
      star[x].src = "imagens/star0.png";
    }
    else {
        star[x].src = "imagens/star.png";
      }
    }
  }
function construir (unidade, nome, desenvolvedora, capa, link) {
  unidade.classList.add('unidade');
  unidade.innerHTML = `
    <img id='heart' src="imagens/heart0.png" alt="heart"">
    <img class='capa' src="${capa}" alt="capa">
    <div id='sexo'>
      <a class="nome" href="${link}" target="_blank"><h1>${nome}</h1></a>
      <p class='desenvolvedora'>Desenvolvedora: ${desenvolvedora}</p>
      <section class = 'stars'>
      <img id= 'star1' class= 'star' src="imagens/star0.png" alt="star">
      <img id= 'star2' class= 'star' src="imagens/star0.png" alt="star">
      <img id= 'star3' class= 'star' src="imagens/star0.png" alt="star">
      <img id= 'star4' class= 'star' src="imagens/star0.png" alt="star">
      <img id= 'star5' class= 'star' src="imagens/star0.png" alt="star">
      </section>
      <select name="status" class="status">
        <option value="0">Jogado</option>
        <option value="1">Jogando</option>
        <option value="2">Na Lista</option>
      </select>
    </div>`;
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let unidade = document.createElement('div');
  construir(unidade, form.nome.value, form.desenvolvedora.value, form.capa.value, form.link.value);
  bib.jogos.push({
    nome: form.nome.value,
    desenvolvedora: form.desenvolvedora.value,
    capa: form.capa.value,
    link: form.link.value,
    fav: false,
    stars: 0,
    status: 0
  })
  lista.appendChild(unidade);
  clique(unid);
});

document.querySelector('#corpo').onclick = (e) => {
  if (e.target.id === 'folha' || e.target.id === 'reset') {
    if (confirm('Deseja Limpar a Lista?')) {
      localStorage.clear();
      bib.jogos = [];
      location.reload();
    }
  }
}
