const swiperContainer = document.querySelector('.swiper-wrapper');
const discordMembers = document.querySelector('[data-js="discord-value"]');
const twitterFollowers = document.querySelector('[data-js="twitter-value"]');
const instagramFollowers = document.querySelector('[data-js="instagram-value"]');
const githubFollowers = document.querySelector('[data-js="github-value"]');

const fetchData = async function() {
    try {
        const res = await axios.get('https://raw.githubusercontent.com/he4rt/4noobs/master/.github/config.json');
        if (res.status === 200) {
            return res.data;
        }
    } catch(err) {
        console.error(err)
        return null;
    }
}

const setSwiperItems = async function(data) {
    const forNoobs = data.courses;

    forNoobs.forEach((forNoob) => {
        swiperContainer.insertAdjacentHTML('beforeend', `
        <div class="swiper-slide">
            <div class="flex flex-col rounded-lg w-44 md:w-72 drop-shadow-xl overflow-hidden h-96">
                <div class="w-full bg-gradient-to-r from-purple-500 to-pink-700 flex items-center justify-between text-white p-4">
                    <div class="flex items-center">
                        <div class="w-1/4 mw-35px mh-35px rounded-full overflow-hidden mr-4">
                            <img src="${forNoob.author.avatar_url}" class="shadow-2xl drop-shadow" alt="${forNoob.alt}">
                        </div>
                        <div>
                            <h2 class="text-white font-bold font-spline">${forNoob.author.name}</h2>
                            <p class="font-normal font-spline">${forNoob.author.username}</p>
                        </div>
                    </div>
                    <i class="fa fa-arrow-right self-end pb-3 pr-2 text-lg"></i>
                </div>
                <div class="flex flex-col justify-between w-full h-full bg-white p-5">
                    <div class="flex flex-col">
                        <div class="flex flex-col border-b border-purple-100">
                            <p class="text-purple-500 font-bold font-spline">4Noobs 
                                <span class="text-gray-900">- </span>
                                <span class="text-gray-900 font-normal font-spline">${forNoob.name}</span>
                            </p>
                            <p class="font-spline text-gray-500 pb-1.5 text-sm">${forNoob.category}</p>
                        </div>
                        <p class="text-gray-500 mt-4 line-clamp">${forNoob.description}</p>
                    </div>
                    <a href="${forNoob.url}" target="_blank" class="w-full py-2 my-3 text-purple-500 text-center font-spline font-bold border border-purple-500 rounded-3xl hover:bg-purple-500 hover:text-white transition">Ver agora</a>
                </div>
            </div>
        </div>
        `)
    });
}

const setSocials = async function(data) {
    const socials = data.socials;

    instagramFollowers.textContent = `+ ${socials.instagram} mil seguidores`;
    twitterFollowers.textContent = `+ ${socials.twitter} mil seguidores`;
    githubFollowers.textContent = `+ ${socials.github} mil seguidores`;
    discordMembers.textContent = `+ ${socials.discord} mil seguidores`;
}

const initializeApp = async function () {
    const data = await fetchData();

    if (!data) return;
    setSwiperItems(data);
    setSocials(data)
}();