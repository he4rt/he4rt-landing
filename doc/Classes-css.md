## Padr&otilde;es criados no css (parecidos com tailwind cuidado!)🚨🧙‍♂️🚨
Algumas classes que criamos que n&atilde;o s&atilde;o do tailwind, mas s&atilde;o muito parecidas com a escrita, cuidado!

## Dark-mode 🌑

```css
/* É chamada no main.js para trocar o ícone assim
que clicado nele (fazendo ele sumir)*/
.display-none {
  @apply hidden;
}

/* Faz a transição do dark-mode pro light mais suave*/
* {
  transition: background-color .3s ease;
  -webkit-transition: background-color .3s ease;
  -moz-transition: background-color .3s ease;
  -ms-transition: background-color .3s ease;
  -o-transition: background-color .3s ease;
}
```

## Tamanho das Sections👷🏻‍♂️👷🏻‍♀️
O tamanho m&aacute;ximo das **sections** ser&aacute; representado pela classe com o valor do mesmo abaixo.

```css
/* Máxima Largura da section*/
.content__max-width {
  max-width: 1120px;
}

/* Máxima altura da section*/
.header__max-height {
  max-height: 800px;
}
```

## Customiza&ccedil;&otilde;es do Slider (swiper, cards ou como desejar)🎥📹
O Slider em alguns aspectos não podemos definir pelo tailwind por isso usamos as seguintes classes:

```css
/* Container geral da biblioteca swiper */
.swiper {
  width: 100%;
  padding: 2rem 0.5rem;
  z-index: 40;
}

/* Container do slider */
.swiper-slide {
  width: 200px;
}

/* Onde englobamos todos os slides */
.swiper-wrapper {
  display: flex;
  align-items: center;
}

/* Seta a largura e altura Máxima do avatar do autor do 4noobs no swiper/slider (tem um media querie do mesmo) */
.mw-25{
max-width: 25px;
}

.mh-25{
max-height: 25px;
}

/* Define que invés do nome do repositório quebrar adiciona (...) automaticamente*/
.name-4noobs{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* Adiciona (...) ao nome do autor a partir de um tamanho x pelo (-webkit-line-clamp: 1;) */
.author-4noobs-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Adiciona (...) a descrição do 4noobs a partir de um tamanho x */
.Desc-4noobs-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

/* Botão de próximo */
.swiper-button-prev {
  top: 95%;
  left: 80%;
}

/* Botão de slide anterior */
.swiper-button-next {
  top: 95%;
  left: 90%;
}

/*Seta o tamanho dos botões do slide e cor */
:root {
  --swiper-navigation-size: 15px;
  --swiper-theme-color: #782BF1;
}
```

## Customiza&ccedil;&otilde;es da section 4noobs📚 📕
A section **4noobs** tivemos que adicion&aacute;-lo um background diferente das demais section e por isso usamos as seguintes classes:
```css
/* Adiciona a imagem de background e seleciona para ela cobrir */
.for-noobs-section__bg {
  background-image: url('/images/sectionBgImage.svg');
  background-size: cover;
}

/* Adiciona o Degradê ao background sobrepondo a imagem para criar um efeito legal */
.for-noobs-section__bg:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #111827 50%, rgba(17, 24, 39, .65) 100%);
  z-index: 20;
}
```
## Customiza&ccedil;&otilde;es da section "o que encontrarei na he4rt"🫂🥷
Aqui no css temos apenas os &iacute;cones que cont&eacute;m alguns detalhes:
```css
/* Usada na última section para adicionar as separações roxas */
.border-r-1 {
  border-right-width: 1px;
}

/* Aplica position relative aos icones */
.icon__bg-rounded {
  position: relative;
}

/* Aplica o efeito da cor do icone */
.icon__bg-rounded::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transform: scale(2);
  border-radius: 50%;
  background-color: rgba(120, 43, 241, 0.1);
}
```
## Customiza&ccedil;&otilde;es do Footer🚦 🚥
No Footer temos algums icones onde achamos legal adicionar alguns pequenos efeitos como hover:
```css
/* Adiciona um efeito ao passar o mouse por cima no icone */
.footer__icons:hover {
  filter: drop-shadow(0px 0px 15px #782BF1);
}

/* Troca a cor do icone ao passar o mouse por cima */
.footer__icons:hover path {
  transition: all .5s ease;
  fill: #782BF1;
}

```

 * [Voltar](./Padroes.md)