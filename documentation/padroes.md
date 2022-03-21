#
<h1 align="center"> 🛠Padrões do projeto🛠 </h1>

Fala Minha querida desenvolvedora ou meu desenvolvedor beleza?😎 👩‍💻 🧑‍💻<br> ficamos muitos agradecidos por ter interesse em ajudar a comunidade **Open-Source** nesse projeto🎆🤓🎆.

Bem vamos lá o projeto segue todo este padrão do figma onde nossos queridos [NexTurHe4rt](https://twitter.com/NexturHe4rt) e  [7K](https://twitter.com/setekpro) fizeram no [figma](https://www.figma.com/file/49ZMlS0hGlkOLssyboLg0P/He4rt-Devs?node-id=0%3A1) 👈 basta clicar ali que vc vai para la. <br>

Usamos Basicamente as etilizaçoes do [Tailwindcss](https://tailwindcss.com/) neste projeto para que todos consigam usar o mesmo sem se perder muito! <br>

Mas temos aqui um facil overview dos estilos do projeto:

## Padrã de cores

| Cor               | Hexadecimal                                                |   
| ----------------- | ---------------------------------------------------------------- |
| Destaque          | ![#782BF1](https://via.placeholder.com/10/782BF1?text=+) #782BF1 text-purple-500 |
| Texto Principal   | ![#424141](https://via.placeholder.com/10/424141?text=+) #424141 text-gray-900 |
| Texto Secundario  | ![#4D4C4F](https://via.placeholder.com/10/4D4C4F?text=+) #4D4C4F text-gray-500|

## Tamanhos de textos


| Mobile 0px-640px  | Tamanho     |   
| ----------------- | ----------- |
| Principal         | 20px text-xl|
| Secundário        | 14px text-sm|

| Tablet 640px-1024px| Tamanho        |   
| ----------------- | --------------- |
| Principal         | 24px md:text-2xl|
| Secundário        | 20px md:text-xl |

| Pc 1024px         | Tamanho         |   
| ----------------- | --------------- |
| Principal         | 36px lg:text-4xl|
| Secundário        | 20px lg:text-xl |

### 🚧LEMBRE-SE nem sempre o padrão acima será o correto,olhe sempre no figma pois algumas partes como slider não tem como seguir este padrão, indicamos sempre se basear por lá!!🚧

## Tamanho das Sections👷🏻‍♂️👷🏻‍♀️
O tamanho máximo das **sections** será representado pela classe com o valor do mesmo abaixo.

```bash
content__max-width: 1120px;
```

## Animações🤹🏼‍♀️ 

Todas as configurações de animações estão no arquivo `assets/js/ScrollReveal.js`, padronizamos as animações para que todos possam usar o mesmo padrão, separamos em 3, sendo de 1 o mais rapido e 3 o mais lento.

Animações vindo da esquerda:
```bash
ScrollReveal().reveal('.scroll-left-1', {origin: 'left', distance: '40px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.scroll-left-2', {origin: 'left', distance: '40px', duration: 1000, delay: 800 });
ScrollReveal().reveal('.scroll-left-3', {origin: 'left', distance: '40px', duration: 1000, delay: 1000 });
```

Animação vindo da Direta:
```bash
ScrollReveal().reveal('.scroll-right-1', {origin: 'right', distance: '40px', duration: 1000, delay: 500 });
```
Animações vindo de baixo:
```bash
ScrollReveal().reveal('.scroll-bottom-1', {origin: 'bottom', distance: '40px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.scroll-bottom-2', {origin: 'bottom', distance: '40px', duration: 1000, delay: 800 });
ScrollReveal().reveal('.scroll-bottom-3', {origin: 'bottom', distance: '40px', duration: 1000, delay: 1000 });
```

## Api que estamos consumindo  🧙🏽

Estamos apenas consumindo uma api feita pelo nosso querido [Gustavohe4rt](https://twitter.com/kjkGustavo), Estamos consumindo Apenas para gerar os dados dos cards do 4noobs e para gerar os numeros de seguidores nas redes sociais.
[link do famoso json da api](
https://raw.githubusercontent.com/he4rt/4noobs/master/.github/config.json)