## Animações🤹🏼‍♀️ 

Todas as configurações de animações estão no arquivo `assets/js/ScrollReveal.js`, padronizamos as animações para que todos possam usar o mesmo padrão, separamos em 3, sendo de 1 o mais rapido e 3 o mais lento.

Um breve reviu da estrutura da animação
```javascript
ScrollReveal().reveal('aqui vai a classe ou id (classe ex: .left id: #left', {origin: 'de onde vem (left right top bottom)', distance: 'controla a distância que os elementos se movem quando revelados.', duration: a duração do efeito, delay: e o delay de quando se passar em "cima" });
```
Animações vindo da esquerda:
```javascript
ScrollReveal().reveal('.scroll-left-1', {origin: 'left', distance: '40px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.scroll-left-2', {origin: 'left', distance: '40px', duration: 1000, delay: 800 });
ScrollReveal().reveal('.scroll-left-3', {origin: 'left', distance: '40px', duration: 1000, delay: 1000 });
```

Animação vindo da Direta:
```javascript
ScrollReveal().reveal('.scroll-right-1', {origin: 'right', distance: '40px', duration: 1000, delay: 500 });
```
Animações vindo de baixo:
```javascript
ScrollReveal().reveal('.scroll-bottom-1', {origin: 'bottom', distance: '40px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.scroll-bottom-2', {origin: 'bottom', distance: '40px', duration: 1000, delay: 800 });
ScrollReveal().reveal('.scroll-bottom-3', {origin: 'bottom', distance: '40px', duration: 1000, delay: 1000 });
```
* [voltar](./Padroes.md)