//* dark mode */
const sunIcons = document.querySelectorAll(".light");
const moonIcons = document.querySelectorAll(".dark");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

const iconToggle = () => {
  moonIcons.forEach((moonIcon) => moonIcon.classList.toggle("hidden"));
  sunIcons.forEach((sunIcon) => sunIcon.classList.toggle("hidden"));
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sunIcons.forEach((sunIcon) => sunIcon.classList.remove("hidden"));
    return;
  }
  moonIcons.forEach((moonIcon) => moonIcon.classList.remove("hidden"));
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sunIcons.forEach((sunIcon) =>
  sunIcon.addEventListener("click", () => {
    themeSwitch();
  })
);

moonIcons.forEach((moonIcon) =>
  moonIcon.addEventListener("click", () => {
    themeSwitch();
  })
);

themeCheck();
//* api */
const swiperContainer = document.querySelector(".swiper-wrapper");
const discordMembers = document.querySelector('[data-js="discord-value"]');
const twitterFollowers = document.querySelector('[data-js="twitter-value"]');
const instagramFollowers = document.querySelector(
  '[data-js="instagram-value"]'
);
const githubFollowers = document.querySelector('[data-js="github-value"]');

const fetchData = async function () {
  try {
    const res = await axios.get(
      "https://raw.githubusercontent.com/he4rt/4noobs/master/.github/config.json"
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

const setSwiperItems = async function (data) {
  const forNoobs = data.courses;

  forNoobs
    .sort(() => 0.5 - Math.random())
    .forEach((forNoob) => {
      swiperContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="swiper-slide">
            <div class="flex rounded-lg flex-col w-44 sm:w-52 md:w-60 lg:w-64 overflow-hidden drop-shadow-xl h-80 lg:h-96">
                <div class="w-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-between text-white p-4">
                    <div class="flex items-center">
                        <div class="max-w-[35px] lg:max-w-[45px] max-h-[35px] lg:max-h-[45px] rounded-full overflow-hidden mr-1 lg:mr-4">
                            <img src="${forNoob.author.avatar_url}" class="shadow-2xl drop-shadow" alt="${forNoob.alt}">
                        </div>
                        <div>
                            <h2 class="text-xs author-4noobs-clamp md:text-sm text-white dark:text-gray-998 font-bold">${forNoob.author.name}</h2>
                            <p class="text-xs md:text-sm">${forNoob.author.username}</p>
                        </div>
                    </div>
                    <i class="fa fa-arrow-right self-end pb-3 pr-2 text-lg"></i>
                </div>
                <div class="flex flex-col justify-between w-full h-full bg-white dark:bg-gray-997 p-5">
                    <div class="flex flex-col">
                        <div class="flex flex-col border-b border-purple-100 dark:border-purple-700">
                        <p class="name-4noobs text-sm text-purple-500 font-bold"> ${forNoob.name}</p>
                            <p class="text-xs text-gray-500 dark:text-gray-998 pb-1.5">${forNoob.category}</p>
                        </div>
                        <p class="text-xs lg:text-sm text-gray-500 dark:text-gray-998 mt-4 Desc-4noobs-clamp">${forNoob.description}</p>
                    </div>
                    <a rel="noopener" href="${forNoob.url}" target="_blank" class="text-xs md:text-sm w-full py-2 my-3 text-purple-500 text-center font-bold border dark:text-purple-700 border-purple-500 dark:border-purple-700 rounded-3xl hover:bg-purple-500 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition">Ver agora</a>
                </div>
            </div>
        </div>
        `
      );
    });
};

const setSocials = async function (data) {
  const socials = data.socials;

  instagramFollowers.textContent = `+ ${socials.instagram} Mil seguidores`;
  twitterFollowers.textContent = `+ ${socials.twitter} Mil seguidores`;
  githubFollowers.textContent = `+ ${socials.github} Mil seguidores`;
  discordMembers.textContent = `+ ${socials.discord} Mil Membros`;
};

const initializeApp = (async function () {
  const data = await fetchData();

  if (!data) return;
  setSwiperItems(data);
  setSocials(data);
})();
