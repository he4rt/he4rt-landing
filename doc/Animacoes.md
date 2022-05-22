## Anima&ccedil;&otilde;es🤹🏼‍♀️ 

Todas as configura&ccedil;&otilde;es de anima&ccedil;&otilde;es se encontram no arquivo `assets/js/ScrollReveal.js`, padronizamos as anima&ccedil;&otilde;es para que todos possam usar o mesmo padr&atilde;o, separamos em **3**, sendo de **1** o mais r&aacute;pido e **3** o mais lento.

Um breve review da estrutura da anima&ccedil;&atilde;o com ScrollReveal:
```javascript
ScrollReveal().reveal('aqui vai a classe ou id (classe ex: .left id: #left', {origin: 'de onde vem (left right top bottom)', distance: 'controla a distância que os elementos se movem quando revelados.', duration: a duração do efeito, delay: e o delay de quando se passar em "cima" });
```
Anima&ccedil;&otilde;es do Header:<br/><br/>
Por conta de querermos uma melhor experi&ecirc;ncia para o usu&aacute;rio decidimos criar as anima&ccedil;&otilde;es do Header Separada das demais, visto que seriam "lentas" demais para o usu&aacute;rio ver, causando uma falsa impress&atilde;o que estaria travando.

```javascript
ScrollReveal().reveal('.scroll-header-left-1', {origin: 'left', distance: '40px', duration: 1000, delay: 0});
ScrollReveal().reveal('.scroll-header-left-2', {origin: 'left', distance: '40px', duration: 1000, delay: 150});
ScrollReveal().reveal('.scroll-header-left-3', {origin: 'left', distance: '40px', duration: 1000, delay: 300});
ScrollReveal().reveal('.scroll-header-right-1', {origin: 'right', distance: '40px', duration: 1000, delay: 150});
```

Anima&ccedil;&otilde;es vindo da esquerda:
```javascript
ScrollReveal().reveal('.scroll-left-1', {origin: 'left', distance: '40px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.scroll-left-2', {origin: 'left', distance: '40px', duration: 1000, delay: 800 });
ScrollReveal().reveal('.scroll-left-3', {origin: 'left', distance: '40px', duration: 1000, delay: 1000 });
```

Anima&ccedil;&atilde;es vindo da direta:
```javascript
ScrollReveal().reveal('.scroll-right-1', {origin: 'right', distance: '40px', duration: 1000, delay: 500 });
```
Anima&ccedil;&otilde;es vindo de baixo:
```javascript
ScrollReveal().reveal('.scroll-bottom-1', {origin: 'bottom', distance: '40px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.scroll-bottom-2', {origin: 'bottom', distance: '40px', duration: 1000, delay: 800 });
ScrollReveal().reveal('.scroll-bottom-3', {origin: 'bottom', distance: '40px', duration: 1000, delay: 1000 });
```
* [Voltar](./Padroes.md)