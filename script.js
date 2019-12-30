let heroes = [
    {
        name: 'SVEN',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/sven_full.png?v=5582916?v=5582916',
        bio: "Sven is the bastard son of a Vigil Knight, born of a Pallid Meranth, raised in the Shadeshore Ruins. With his father executed for violating the Vigil Codex, and his mother shunned by her wild race, Sven believes that honor is to be found in no social order, but only in himself. After tending his mother through a lingering death, he offered himself as a novice to the Vigil Knights, never revealing his identity."
    },
    {
        name: 'TINY',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/tiny_full.png?v=5582916?v=5582916',
        bio: "Coming to life as a chunk of stone, Tiny's origins are a mystery on which he continually speculates. He is a Stone Giant now, but what did he used to be? A splinter broken from a Golem's heel? A shard swept from a gargoyle-sculptor's workshop? A fragment of the Oracular Visage of Garthos? A deep curiosity drives him, and he travels the world tirelessly seeking his origins, his parentage, his people."
    },
    {
        name: 'BREWMASTER',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/brewmaster_full.png?v=5582916?v=5582916',
        bio: "Deep in the Wailing Mountains, in a valley beneath the Ruined City, the ancient Order of the Oyo has for centuries practiced its rites of holy reverie, communing with the spirit realm in grand festivals of drink. Born to a mother's flesh by a Celestial father, the youth known as Mangix was the first to grow up with the talents of both lineages."
    },
    {
        name: 'PHOENIX',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/phoenix_full.png?v=5582916?v=5582916',
        bio: "Alone across an untouched darkness gleamed the Keeper's first sun, a singular point of conscious light fated to spread warmth into the empty void. Through aeons beyond count, this blinding beacon set to coalescing its incalculable energy before bursting forth the cataclysmic flare of supernova. "
    },
    {
        name: 'PUDGE',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/pudge_full.png?v=5582916?v=5582916',
        bio: "In the Fields of Endless Carnage, far to the south of Quoidge, a corpulent figure works tirelessly through the night--dismembering, disembowelling, piling up the limbs and viscera of the fallen that the battlefield might be clear by dawn. In this cursed realm, nothing can decay or decompose; no corpse may ever return to the earth from which it sprang, no matter how deep you dig the grave. "
    },
    {
        name: 'NIGHT STALKER',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/night_stalker_full.png?v=5582916?v=5582916',
        bio: "Of the Night Stalker, there is no history, only stories. There are ancient tales woven into the lore of every race and every culture, of an impossible time before sunlight and daytime, when night reigned alone and the world was covered with the creatures of darkness--creatures like Balanar the Night Stalker."
    },
    {
        name: 'ABADDON',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/abaddon_full.png?v=5582916?v=5582916',
        bio: "The Font of Avernus is the source of a family's strength, a crack in primal stones from which vapors of prophetic power have issued for generations. Each newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism they are given an innate connection to the mystic energies of the land. "
    },
    {
        name: 'MIRANA',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/mirana_full.png?v=5582916?v=5582916',
        bio: "Born to a royal family, a blood princess next in line for the Solar Throne, Mirana willingly surrendered any claim to mundane land or titles when she dedicated herself completely to the service of Selemene, Goddess of the Moon. Known ever since as Princess of the Moon, Mirana."
    },
    {
        name: 'SNIPER',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/sniper_full.png?v=5582916?v=5582916',
        bio: "Kardel Sharpeye was born deep in the mountains of Knollen where, since time immemorial, Keen Folk have survived by hunting the strange, cliff-dwelling steepstalkers above their village, shooting them from a distance and collecting the carcasses where they fell. "
    },
    {
        name: 'RAZOR',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/razor_full.png?v=5582916?v=5582916',
        bio: "Among the emblematic powers that populate the Underscape, Razor the Lightning Revenant is one of the most feared. With his whip of lightning, he patrols the Narrow Maze, that treacherous webwork of passages by which the souls of the dead are sorted according to their own innate intelligence, cunning and persistence. "
    },
    {
        name: 'TERRORBLADE',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/terrorblade_full.png?v=5582916?v=5582916',
        bio: "Terrorblade is the demon marauder--an outlaw hellion whom even other demons fear. A cosmic iconoclast, he stole from the Demon Lords, ignored the codified rites that should have bound his behavior, and broke every law of the seven Infernal Regions. For his crimes, he was taught this lesson: even Hell has a hell."
    },
    {
        name: 'CRYSTAL MAIDEN',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_full.png?v=5582916?v=5582916',
        bio: "Born in a temperate realm, raised with her fiery older sister Lina, Rylai the Crystal Maiden soon found that her innate elemental affinity to ice created trouble for all those around her. Wellsprings and mountain rivers froze in moments if she stopped to rest nearby; ripening crops were bitten by frost, and fruiting orchards turned to mazes of ice and came crashing down, spoiled. "
    },
    {
        name: 'ZEUS',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/zuus_full.png?v=5582916?v=5582916',
        bio: "Lord of Heaven, father of gods, Zeus treats all the Heroes as if they are his rambunctious, rebellious children. After being caught unnumbered times in the midst of trysts with countless mortal women, his divine wife finally gave him an ultimatum: 'If you love mortals so much, go and become one. If you can prove yourself faithful, then return to me as my immortal husband."
    },
    {
        name: 'OGRE MAGI',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/ogre_magi_full.png?v=5582916?v=5582916',
        bio: "The ordinary ogre is the creature for whom the phrase 'As dumb as a bag of rock hammers' was coined. In his natural state, an ogre is supremely incapable of doing or deciding anything. Clothed in dirt, he sometimes finds himself accidentally draped in animal skins after eating lanekill. Not an especially social creature, he is most often found affectionately consorting with the boulders or tree-stumps he has mistaken for kin."
    },
    {
        name: 'TECHIES',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/techies_full.png?v=5582916?v=5582916',
        bio: "In the storied saga of Dredger's Bight, no business has ever been more reviled than Techies Demolitions. Then again, Dredger's Bight no longer exists. Nor does Toterin. Or even Trapper Town. In fact, if one were to track the history of Techies Demolitions they might notice that shortly after Techies appear, towns tend to disappear."
    },
    {
        name: 'ENIGMA',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/enigma_full.png?v=5582916?v=5582916',
        bio: "Nothing is known of Enigma's background. There are only stories and legends, most of them apocryphal, passed down through the ages. In truth, Enigma is a mystery for whom the only true biography is description: he is a universal force, a consumer of worlds. He is a being of the void, at times corporeal, other times ethereal. A beast between the planes."
    },
    {
        name: 'NECROPHOS',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/necrolyte_full.png?v=5582916?v=5582916',
        bio: "In a time of great plague, an obscure monk of dark inclinations, one Rotund'jere, found himself promoted to the rank of Cardinal by the swift death of all his superiors. While others of the order went out to succor the ill, the newly ordained cardinal secluded himself within the Cathedral of Rumusque, busily scheming to acquire the property of dying nobles, promising them spiritual rewards if they signed over their terrestrial domains. "
    },
    {
        name: 'DARK SEER',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/dark_seer_full.png?v=5582916?v=5582916',
        bio: "Fast when he needs to be, and a cunning strategist, Ish'Kafel the Dark Seer requires no edged weapons to vanquish his enemies, relying instead on the strength of his powerful mind. His talent lies in his ability to maneuver the fight to his advantage. Hailing from a place he calls 'The Land behind the wall,' Dark Seer remains an outsider here--a warrior from a realm beyond the veil of this reality."
    },
    {
        name: 'ANCIENT APPARITION',
        img: 'http://cdn.dota2.com/apps/dota2/images/heroes/ancient_apparition_full.png?v=5582916?v=5582916',
        bio: "Kaldr, the Ancient Apparition, is an image projected from outside time. He springs from the cold, infinite void that both predates the universe and awaits its end. Kaldr is, Kaldr was, Kaldr shall be...and what we perceive, powerful as it appears to us, is but the faintest faded echo of the true, eternal Kaldr. Some believe that as the cosmos ages and approaches its final moments, the brightness and power of Kaldr will also intensify."
    }
];

const heroesElem = document.querySelector('.heroes');
const paginationElem = document.querySelector('.page-numbers');

let currentPage = 1;
let cards = 4;

function displayList(heroes, container, cardsPerPage, page) {
    container.innerHTML = '';
    page--;

    let start = cardsPerPage * page;
    let end = start + cardsPerPage;

    let paginatedItems = heroes.slice(start, end);

    paginatedItems.forEach(hero => {

        let heroElem = document.createElement('div');
        heroElem.classList.add('hero');

        heroElem.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.img}" />
            <p>${hero.bio}</p>
        `;

        container.appendChild(heroElem);
    });
}

function setupPagination(heroes, container, cardsPerPage) {
    container.innerHTML = '';

    let pageCount = Math.ceil(heroes.length / cardsPerPage);
    
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationBtn(i, heroes);

        container.appendChild(btn);
    }
}

function paginationBtn(page, heroes) {
    let btn = document.createElement('button');
    btn.innerText = page;

    if (currentPage == page) {
        btn.classList.add('active');
    }

    btn.addEventListener('click', function() {
        currentPage = page;

        displayList(heroes, heroesElem, cards, currentPage);

        let currentBtn = document.querySelector('.page-numbers button.active');
        currentBtn.classList.remove('active');

        btn.classList.add('active');
    });

    return btn;
}

displayList(heroes, heroesElem, cards, currentPage);
setupPagination(heroes, paginationElem, cards);