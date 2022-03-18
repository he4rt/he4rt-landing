const swiperContainer = document.querySelector('.swiper-wrapper');
const forNoobs = [
    { img_url: 'https://yt3.ggpht.com/g8lfkmyHXwpjIBHoNgHgip2m4LSnR-8gsVa-1DG05JGVuTrIIjJ9x4tUNuYvDuH7OHyCHqnnwQ=s900-c-k-c0x00ffffff-no-rj', owner: 'Mc Poze do Rodo', role: 'Músico', name: 'Nice', category: 'Funk', content: 'Lorem ipsum meu deus do ceu mata o khazix pelo menos yoda', url: 'https://github.com/', alt: 'Alt do componente' },
    { img_url: 'https://yt3.ggpht.com/g8lfkmyHXwpjIBHoNgHgip2m4LSnR-8gsVa-1DG05JGVuTrIIjJ9x4tUNuYvDuH7OHyCHqnnwQ=s900-c-k-c0x00ffffff-no-rj', owner: 'Mc Poze do Rodo', role: 'Músico', name: 'Nice', category: 'Funk', content: 'Lorem ipsum meu deus do ceu mata o khazix pelo menos yodaqwdwjiqndjiqwndjqwndwiqndiqundwquindiquwdnuiqndiqhdhuqwdhuiqdhuiqhu', url: 'https://github.com/', alt: 'Alt do componente' },
    { img_url: 'https://yt3.ggpht.com/g8lfkmyHXwpjIBHoNgHgip2m4LSnR-8gsVa-1DG05JGVuTrIIjJ9x4tUNuYvDuH7OHyCHqnnwQ=s900-c-k-c0x00ffffff-no-rj', owner: 'Mc Poze do Rodo', role: 'Músico', name: 'Nice', category: 'Funk', content: 'Lorem ipsum meu deus do ceu mata o khazix pelo menos yoda', url: 'https://github.com/', alt: 'Alt do componente' }
]
forNoobs.forEach((forNoob) => {
    swiperContainer.insertAdjacentHTML('beforeend', `
    <div class="swiper-slide">
        <div class="flex flex-col rounded-lg w-44 md:w-72 drop-shadow-xl overflow-hidden">
            <div class="w-full bg-gradient-to-r from-purple-500 to-pink-700 flex items-center justify-between text-white p-4">
                <div class="flex items-center">
                    <div class="w-1/4 mw-35px mh-35px rounded-full overflow-hidden mr-4">
                        <img src="https://images2.fanpop.com/image/photos/11400000/Anime-girls-anime-stories-11411029-425-601.jpg" class="shadow-2xl drop-shadow" alt="${forNoob.alt}">
                    </div>
                    <div>
                        <h2 class="text-white font-bold font-spline">Mc Poze do Rodo</h2>
                        <p class="font-normal font-spline">Músico</p>
                    </div>
                </div>
                <i class="fa fa-arrow-right self-end pb-3 pr-2 text-lg"></i>
            </div>
            <div class="w-full bg-white p-5">
                <div class="flex flex-col border-b border-purple-100">
                    <p class="text-purple-500 font-bold font-spline">4Noobs 
                        <span class="text-gray-900">- </span>
                        <span class="text-gray-900 font-normal font-spline">Nice</span>
                    </p>
                    <p class="font-spline text-gray-500 pb-1.5 text-sm">Funk</p>
                </div>
                <p class="text-gray-500 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quam labore! Rem aperiam illo quas assumenda</p>
                <button class="w-full py-2 my-3 text-purple-500 font-spline font-bold border border-purple-500 rounded-3xl hover:bg-purple-500 hover:text-white transition">Ver agora</button>
            </div>
        </div>
    </div>
    `)
})