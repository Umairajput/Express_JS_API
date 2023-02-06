const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.json({
        "status": "ok",
        "totalResults": 17253,
        "articles": [
        {
        "source": {
        "id": null,
        "name": "Ixbt.com"
        },
        "author": "jin@ixbt.com (Jin)",
        "title": "«Очень сложный автомобиль, так как он не похож ни на один другой», — появилась демонстрация работы задних поворотных колёс Tesla Cybertruck",
        "description": "Автомобильное издание Electrek опубликовало новый видеоролик, в котором нам демонстрируют функцию подруливания задними колесами, реализованную в Tesla Cybertruck. Управление задними колесами быстро становится довольно популярной функцией для современных элект…",
        "url": "https://www.ixbt.com/news/2023/02/06/ochen-slozhnyj-avtomobil-tak-kak-on-ne-pohozh-ni-na-odin-drugoj--pojavilas-demonstracija-raboty-zadnih-povorotnyh.html",
        "urlToImage": "https://www.ixbt.com/img/n1/news/2023/1/1/Снимок%20экрана%202023-02-06%20114939_large.png",
        "publishedAt": "2023-02-06T09:47:00Z",
        "content": "Electrek , , Tesla Cybertruck.\r\n .   , , . .\r\n : « , , , , Cybertruck ».\r\n Tesla : « , ».\r\nTesla , Cybertruck , 2024 .\r\n , Cybertruck Beta. -, ."
        },
        {
        "source": {
        "id": null,
        "name": "Seeking Alpha"
        },
        "author": null,
        "title": "After recent cuts, Tesla lifts Model Y prices in the U.S.",
        "description": null,
        "url": "https://seekingalpha.com/news/3932167-tesla-model-y-prices-inched-higher-in-the-us?utm_source=feed_news_all&utm_medium=referral",
        "urlToImage": null,
        "publishedAt": "2023-02-06T09:46:08Z",
        "content": "Warning\r\nThis website has been reported for potential phishing.Phishing is when a site attempts to steal sensitive information by falsely presenting as a safe source."
        },
        {
        "source": {
        "id": "lenta",
        "name": "Lenta"
        },
        "author": "Татьяна Романова",
        "title": "Speedrun откроет третьи Фиджитал Игры в Казани",
        "description": "В Казани стартуют Фиджитал Игры 3 по киберспортивным дисциплинам. С 5 по 11 февраля пройдут соревнования по скоростному прохождению игр (Speedrun), турниры по Dota 2, MLBB, CS:GO и Warface в сочетании с лазертагом. 11 февраля состоятся шоу-матчи по лазертагу …",
        "url": "https://lenta.ru/news/2023/02/06/fgtl/",
        "urlToImage": "https://icdn.lenta.ru/images/2023/02/06/12/20230206124624793/share_54ba0d32e3f7e38a39beebac3c6e11c2.jpeg",
        "publishedAt": "2023-02-06T09:45:00Z",
        "content": "3 . 5 11 (Speedrun), Dota 2, MLBB, CS:GO Warface . 11 - « » .\r\n 130 10 : , , , , , , , , .\r\n , 6 , Speedrun , . 5 7 -. 4 : King of Milfs, speed, Cheaters Tesla Squad.\r\n Nuke73 , Blame , insanebb Dail… [+317 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "Carl Zeiss Meditec downgraded to Hold from Buy at Berenberg",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656984/CZMWY-Carl-Zeiss-Meditec-downgraded-to-Hold-from-Buy-at-Berenberg",
        "urlToImage": "https://thefly.com/images/meta/streetresearch_downgrade.jpg",
        "publishedAt": "2023-02-06T09:34:09Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Www.is.fi"
        },
        "author": "Tommi Lempinen",
        "title": "IS pyysi tekoälyltä listaa autoista, joita voisi myydä nyt ostohintaa kalliimmalla – tässä tulos",
        "description": "Kysyimme myös halvoista ja luotettavista käyttöautoista niin bensiini-, diesel- kuin sähkövaihtoehtoinakin.",
        "url": "https://www.is.fi/autot/art-2000009374119.html",
        "urlToImage": "https://is.mediadelivery.fi/img/some/default/f6c94b9288d8f4b5777ad6ff5e93bd40.jpg",
        "publishedAt": "2023-02-06T09:34:00Z",
        "content": "Kysyimme myös halvoista ja luotettavista käyttöautoista niin bensiini-, diesel- kuin sähkövaihtoehtoinakin.Voiko tekoälyä käyttää apuna käytetyn auton valinnassa? Kyllä voi, mutta aivan sokeasti teko… [+3138 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "Banca Mediolanum initiated with a Buy at Jefferies",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656983/BNCDY-Banca-Mediolanum-initiated-with-a-Buy-at-Jefferies",
        "urlToImage": "https://thefly.com/images/meta/streetresearch_initiate.jpg",
        "publishedAt": "2023-02-06T09:33:02Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "CaixaBank upgraded to Outperform from Market Perform at Keefe Bruyette",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656982/CAIXY-CaixaBank-upgraded-to-Outperform-from-Market-Perform-at-Keefe-Bruyette",
        "urlToImage": "https://thefly.com/images/meta/streetresearch_upgrade.jpg",
        "publishedAt": "2023-02-06T09:30:44Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "Rexford Industrial initiated with an Outperform at BMO Capital",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656981/REXR-Rexford-Industrial-initiated-with-an-Outperform-at-BMO-Capital",
        "urlToImage": "https://thefly.com/images/meta/streetresearch_initiate.jpg",
        "publishedAt": "2023-02-06T09:29:35Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "STAG Industrial initiated with an Outperform at BMO Capital",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656980/STAG-STAG-Industrial-initiated-with-an-Outperform-at-BMO-Capital",
        "urlToImage": "https://thefly.com/images/meta/streetresearch_initiate.jpg",
        "publishedAt": "2023-02-06T09:28:04Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "Qualitas upgraded to Conviction Buy from Buy at Goldman Sachs",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656979/QUCOF-Qualitas-upgraded-to-Conviction-Buy-from-Buy-at-Goldman-Sachs",
        "urlToImage": "https://thefly.com/images/meta/streetresearch_upgrade.jpg",
        "publishedAt": "2023-02-06T09:26:59Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ixbt.com"
        },
        "author": "jin@ixbt.com (Jin)",
        "title": "Новейшую версию Tesla Cybertruck показали на фото и видео",
        "description": "Новейший прототип Tesla Cybertruck был замечен перед началом производства электрического пикапа на дороге общего пользования в Пало-Альто, США. Видео можно посмотреть здесь. В целом для автомобиля, который, как ожидается, будет запущен в производство всего че…",
        "url": "https://www.ixbt.com/news/2023/02/06/novejshuju-versiju-tesla-cybertruck-zametili-na-doroge-obshego-polzovanija.html",
        "urlToImage": "https://www.ixbt.com/img/n1/news/2023/1/1/admin.png",
        "publishedAt": "2023-02-06T09:26:00Z",
        "content": "Tesla Cybertruck -, . .\r\n , , , , Tesla Cybertruck .\r\n 2022 , - Tesla , , Tesla Cybertruck.\r\n , Giga Texas: , , , . -, .\r\n, -, . , Cybertruck . Tesla Cybertruck , , . . .\r\n , Tesla Tesla Cybertruck ,… [+30 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Www.nu.nl"
        },
        "author": "onze techredactie",
        "title": "Twitter balanceert niet langer op de rand van de afgrond",
        "description": "Het directe gevaar van een faillissement van Twitter is afgewend, meldt de nieuwe Twitter-eigenaar Elon Musk. Onder zijn leiding is in de afgelopen maanden ongeveer de helft van het personeel ontslagen. Ook heeft het bedrijf veel kostenbesparingen doorgevoerd.",
        "url": "https://www.nu.nl/tech/6250046/twitter-balanceert-niet-langer-op-de-rand-van-de-afgrond.html",
        "urlToImage": "https://media.nu.nl/m/jg0x2q5ahlcm_wd1280/twitter-balanceert-niet-langer-op-de-rand-van-de-afgrond.jpg",
        "publishedAt": "2023-02-06T09:20:27Z",
        "content": "Het directe gevaar van een faillissement van Twitter is afgewend, meldt de nieuwe Twitter-eigenaar Elon Musk. Onder zijn leiding is in de afgelopen maanden ongeveer de helft van het personeel ontslag… [+1025 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "cnbc.com",
        "title": "Tesla or Ford? Analysts name their favorite stock as the EV race heats up",
        "description": "The past month has been an eventful one for Tesla and Ford . Electric vehicle maker Tesla made waves as it slashed prices in a bid to stoke demand . Soon after, automaker Ford — which also now makes EVs — followed suit by cutting prices across its Mustang Mac…",
        "url": "https://biztoc.com/x/1db7e798fc6bce19",
        "urlToImage": "https://c.biztoc.com/p/1db7e798fc6bce19/og.webp",
        "publishedAt": "2023-02-06T09:10:05Z",
        "content": "The past month has been an eventful one for Tesla and Ford . Electric vehicle maker Tesla made waves as it slashed prices in a bid to stoke demand . Soon after, automaker Ford which also now makes EV… [+290 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Computerworld.dk"
        },
        "author": "Alexander Haslund",
        "title": "Twitter var tæt på konkurs ifølge Elon Musk",
        "description": "Elon Musk fortæller, at Twitter var tæt på at gå konkurs, men at selskabet nu er tæt på at løbe rundt.",
        "url": "https://www.computerworld.dk/art/281606/twitter-var-taet-paa-konkurs-ifoelge-elon-musk",
        "urlToImage": "https://www.computerworld.dk/fil/208208?width=600&height=315&focus=1",
        "publishedAt": "2023-02-06T09:07:00Z",
        "content": "(Foto: U.S. AIR FORCE ACADEMY)Elon Musk fortæller, at Twitter var tæt på at gå konkurs, men at selskabet nu er tæt på at løbe rundt.Annonceindlæg fra Computerworld it-jobbankEr du som andre it-profes… [+1043 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Genbeta.com"
        },
        "author": "Bárbara Bécares",
        "title": "Elon Musk tiene un nuevo plan para ganar dinero con Twitter: cobrar 1.000 dólares por un verificado dorado",
        "description": "Desde que Elon Musk entrase en Twitter, muchos son los cambios por los que ha pasado esta red social. Una de las prioridades del magnate de Tesla era hacer más dinero con la red social y, para ello, vio viable cobrar por el check de verificación azul y recort…",
        "url": "https://www.genbeta.com/actualidad/elon-musk-tiene-nuevo-plan-para-ganar-dinero-twitter-cobrar-1-000-dolares-verificado-dorado",
        "urlToImage": "https://i.blogs.es/4c0498/1366_2000-6-/840_560.jpeg",
        "publishedAt": "2023-02-06T08:57:51Z",
        "content": "Desde que Elon Musk entrase en Twitter, muchos son los cambios por los que ha pasado esta red social. Una de las prioridades del magnate de Tesla era hacer más dinero con la red social y, para ello, … [+4050 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Presse-citron"
        },
        "author": "RPB",
        "title": "Starship : Elon Musk promet un test en orbite dans quelques semaines",
        "description": "Elon Musk fait toutefois régulièrement la même promesse depuis... 2021.",
        "url": "https://www.presse-citron.net/starship-elon-musk-promet-un-test-en-orbite-dans-quelques-semaines/",
        "urlToImage": "https://www.presse-citron.net/app/uploads/2021/09/spacex-starship.jpg",
        "publishedAt": "2023-02-06T08:46:05Z",
        "content": "<ul><li>Elon Musk a assuré au cours du weekend que le premier vol orbital de Starship pourrait avoir lieu en mars</li><li>Le lancement reste conditionné à la réussite de tests au sol</li><li>Toutefoi… [+2351 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Www.is.fi"
        },
        "author": "Reuters",
        "title": "Uusi valtio pyrkii sähköauto­teollisuuden isoksi peluriksi – edellytykset löytyvät maaperästä",
        "description": "Indonesialla on suuret edellytykset nousta sähköajoneuvoteollisuuden merkittäväksi toimijaksi.",
        "url": "https://www.is.fi/autot/art-2000009374012.html",
        "urlToImage": "https://is.mediadelivery.fi/img/some/default/05ea9b529fff619ad47d9f5ec9b30bd2.jpg",
        "publishedAt": "2023-02-06T08:33:00Z",
        "content": "Indonesialla on suuret edellytykset nousta sähköajoneuvoteollisuuden merkittäväksi toimijaksi.Maata on siunattu maailman suurimmilla nikkelivaroilla, mutta myös nikkelimalmin vientikiellolla. \r\nKansa… [+2963 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hibridosyelectricos.com"
        },
        "author": "Alberto Pérez",
        "title": "Esta bicicleta eléctrica 'camperizada' será el placer de los más aventureros",
        "description": "La empresa SpaceCamper ha presentado su particular bicicleta eléctrica para los clientes más entusiastas por la camperización. Sus capacidades son muchas, ya que sobre ella podrán circular, trabajar o, incluso, acampar.",
        "url": "https://www.hibridosyelectricos.com/articulo/bicicletas-electrica/bicicleta-electrica-camperizada-spacecamper/20230202102239067875.html",
        "urlToImage": "https://www.hibridosyelectricos.com/media/hibridos/images/2023/02/02/2023020210334552830.jpg",
        "publishedAt": "2023-02-06T08:30:00Z",
        "content": "Quizás el concepto suene algo extraño: una bicicleta eléctrica camperizada. Pero sí, SpaceCamper ha demostrado que este proyecto es viable. La empresa alemana ha creado una bicicleta eléctrica en que… [+3157 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Internet"
        },
        "author": "info@thehackernews.com (The Hacker News)",
        "title": "FormBook Malware Spreads via Malvertising Using MalVirt Loader to Evade Detection",
        "description": "An ongoing malvertising campaign is being used to distribute virtualized .NET loaders that are designed to deploy the FormBook information-stealing malware.\n\"The loaders, dubbed MalVirt, use obfuscated virtualization for anti-analysis and evasion along with t…",
        "url": "https://thehackernews.com/2023/02/formbook-malware-spreads-via.html",
        "urlToImage": "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEgGRnPtCcucSTY5Mfwo59bTX-LiM8-_P6xL73ospfLTXM09McnG6rGb5nKK41wNyKkjlA9AYT8vVbbTmou6jG6Ukbdn9rMP6fEca25P3nx9BlSzGJvVpGkN-_iCJDRUjWB4syVSI58VZYBJWWV5ZdrTK65FOH1Ap-1qiRC2_B16-d7MVMTXeG3gA9DJ/s728-e365/malware.png",
        "publishedAt": "2023-02-06T08:11:00Z",
        "content": "An ongoing malvertising campaign is being used to distribute virtualized .NET loaders that are designed to deploy the FormBook information-stealing malware.\r\n\"The loaders, dubbed MalVirt, use obfusca… [+3550 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Tribune.fr"
        },
        "author": null,
        "title": "Les tweets d'Elon Musk sur une sortie de Tesla de la Bourse n'ont pas lésé les investisseurs, selon la justice californienne",
        "description": "Un jury californien a déclaré vendredi Elon Musk non coupable de fraude pour ses tweets affirmant en 2018 qu'il allait sortir Tesla de la Bourse.",
        "url": "https://www.latribune.fr/entreprises-finance/industrie/automobile/les-tweets-d-elon-musk-sur-une-sortie-de-tesla-de-la-bourse-n-ont-pas-lese-les-investisseurs-selon-la-justice-californienne-950701.html",
        "urlToImage": "https://static.latribune.fr/full_width/2111016/musk.jpg",
        "publishedAt": "2023-02-06T08:11:00Z",
        "content": "Elon Musk acquitté. Il n'est pas, selon un jury californien, coupable de fraude pour avoir tweeté en 2018 qu'il allait sortir Tesla de la Bourse. Il avait surpris les marchés le 7 août 2018 en affirm… [+5868 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ipadizate.com"
        },
        "author": "Sergio J. Ortiz",
        "title": "Elon Musk: la nueva verificación para empresas podría costar la friolera de 1.000 dólares",
        "description": "Twitter está pasando por su peor crisis económica de la historia y Elon Musk está buscando cualquier excusa para incrementar los beneficios financieros de la red social. Tras la gran polémica suscitada por Twitter Blue y otras tantas decisiones del magnate de…",
        "url": "https://ipadizate.com/redes-sociales/elon-musk-la-nueva-verificacion-para-empresas-podria-costar-la-friolera-de-1-000-dolares",
        "urlToImage": "https://ipadizate.com/hero/2023/02/1657325896_507763_1657326106_noticia_normal_recorte1.jpg?width=1200",
        "publishedAt": "2023-02-06T08:06:37Z",
        "content": "Elon Musk y su última polémica decisión sobre Twitter\r\nTwitter está pasando por su peor crisis económica de la historia y Elon Musk está buscando cualquier excusa para incrementar los beneficios fina… [+2526 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ausdroid"
        },
        "author": "Neerav Bhatt",
        "title": "Australian first look at MG4 & ZS EV long range at Fully Charged LIVE 11 & 12 March 2023",
        "description": "MG Motor Australia has confirmed they will be revealing their new ZS EV long range electric car (440km WLTP) alongside the first Australian public-preview of the award winning MG4, at Fully Charged LIVE Australia on the top deck (inside and outside) of the IC…",
        "url": "https://ausdroid.net/2023/02/06/australian-first-look-at-mg4-zs-ev-long-range-at-fully-charged-live-11-12-march-2023/",
        "urlToImage": "https://ausdroid.net/wp-content/uploads/2023/01/IMG20230112211445-scaled.jpg",
        "publishedAt": "2023-02-06T07:51:59Z",
        "content": "MG Motor Australia has confirmed they will be revealing their new ZS EV long range electric car (440km WLTP) alongside the first Australian public-preview of the award winning MG4, at Fully Charged L… [+3112 chars]"
        },
        {
        "source": {
        "id": "focus",
        "name": "Focus"
        },
        "author": "FOCUS online",
        "title": "Heizkosten - Soll ich jetzt schon Heizöl, Pellets oder Brennholz kaufen?",
        "description": "Der Winter ist noch nicht vorbei und die Temperaturen bleiben weiterhin niedrig. Viele Haushalte überlegen jetzt, wann sie Heizöl oder Brennholz bestellen sollen. Entweder um für den Rest des Winters gerüstet zu sein oder um für den nächsten Winter vorzusorge…",
        "url": "https://www.focus.de/finanzen/news/heizkosten-heizoel-pellets-oder-brennholz-ueberblick-ueber-die-aktuellen-preise_id_184829527.html",
        "urlToImage": "https://p6.focus.de/img/fotos/id_98030979/heizoel-72682473.jpg?im=Crop%3D%280%2C204%2C3489%2C1746%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=accd477c4a9af5b9ee56194b8a9cb57b2331cbc512496c4c2744edaf3d5c6fd1",
        "publishedAt": "2023-02-06T07:51:17Z",
        "content": "Der Winter ist noch nicht vorbei und die Temperaturen bleiben weiterhin niedrig. Viele Haushalte überlegen jetzt, wann sie Heizöl oder Brennholz bestellen sollen. Entweder um für den Rest des Winters… [+5873 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gazeta.ru"
        },
        "author": "Газета.Ru",
        "title": "Binance: курс биткоина потерял 2,6% или $1 тыс. и опустился ниже $23 тыс.",
        "description": "Биткоин подешевел в ночь на 6 февраля до отметки $22,7 тыс. по данным на 9:20 мск. Об этом свидетельствуют данные криптовалютной биржи Binance.\n\nЗа сутки первая криптовалюта подешевела на 2,6% или $1,3 тыс.\n\n2 февраля биткоин подорожал до ...",
        "url": "https://www.gazeta.ru/business/news/2023/02/06/19671841.shtml",
        "urlToImage": "https://img.gazeta.ru/files3/763/15711763/bitok-pic_32ratio_900x600-900x600-62217.jpg",
        "publishedAt": "2023-02-06T07:51:07Z",
        "content": "6   $22,7 .    9:20 . Binance.\r\n  2,6% $1,3 .\r\n2 $24,19 .,  15 .    2,8%.\r\n21  $23,19 .,   10%.\r\n - SkyBridge Capital ,    $50 .   - . , Tesla     (SEC),     $140 -     2022 ."
        },
        {
        "source": {
        "id": null,
        "name": "Mail.ru"
        },
        "author": "Павел Ёлшин",
        "title": "Раскрыты заработки «Теслы» на каждом проданном электромобиле",
        "description": "Какова маржа автопроизводителей на каждой выпущенной машине? Лидером по этому показателю оказалась Tesla. Toyota, VW и Hyundai сильно отстают. А Ford и «китайцы» работают «в минус»",
        "url": "https://auto.mail.ru/article/86434-raskryityi-zarabotki-teslyi-na-kazhdom-prodannom-e/",
        "urlToImage": "https://resizer.mail.ru/p/e1f68789-6090-5111-8fc7-c7a2a67f6e29/AQABK7jZ3aSxJ8-HieyKGombFPaUCDXL05nmPhVLCPj9idyHwRJUn8BHRGYCpGkXlcl8TeJZyS_zk_PGrQvh97JLcus.jpg",
        "publishedAt": "2023-02-06T07:38:06Z",
        "content": "«» : 2022 — $10 000. Toyota, VW Hyundai $1000 . 2023 Tesla — .\r\n1 (3 . 2022 )\r\n<table><tr><th></th><th> 1 </th><th> 1 </th></tr><tr><td>Tesla</td><td>$15 653</td><td>$9574</td></tr><tr><td>GM</td><td… [+1657 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digitimes"
        },
        "author": "DIGITIMES",
        "title": "BMW to invest EUR800 million in Mexico to ramp up EV battery production",
        "description": "BMW showed its EV ambition for the North American market. The premium automaker announced a EUR800 million (US$863.3 million) investment in Mexico, mainly to build an assembly center for high-voltage batteries. The new battery production will support its full…",
        "url": "https://www.digitimes.com/news/a20230206VL208/battery-bmw-mexico.html",
        "urlToImage": "https://img.digitimes.com/newsshow/20230206vl208_files/1_2b.jpg",
        "publishedAt": "2023-02-06T07:36:15Z",
        "content": "BMW will build a new battery assembly center at its plant in San Luis Potosi, Mexico. Credit: BMWBMW showed its EV ambition for the North American market. The premium automaker announced a EUR800 mil… [+2318 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tom's Guide"
        },
        "author": "Auriane Polge",
        "title": "Elon Musk veut envoyer Starship dans l’espace en mars",
        "description": "SpaceX prévoit d’organiser le premier vol orbital de Starship en mars. Elon Musk a confirmé que le vaisseau spatial ira dans l’espace le mois prochain si tous les tests restants se déroulent comme prévu.",
        "url": "https://www.tomsguide.fr/elon-musk-veut-envoyer-starship-dans-lespace-en-mars/",
        "urlToImage": "https://cms.galaxiemedia.fr/content/uploads/sites/2/2023/02/starship.png",
        "publishedAt": "2023-02-06T07:30:00Z",
        "content": "SpaceX prévoit dorganiser le premier vol orbital de Starship en mars. Elon Musk a confirmé que le vaisseau spatial ira dans lespace le mois prochain si tous les tests restants se déroulent comme prév… [+2151 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Mykysuce.sme.sk"
        },
        "author": "Radoslav Blažek",
        "title": "Firma ich absolventa montuje výrobné linky v USA pre automobilku Tesla",
        "description": "Rozhodnutie študovať IT smer je dnes rozhodne tou najlepšou voľbou. Potvrdzuje to v rozhovore aj Milan Valek, riaditeľ Strednej priemyselnej školy informačných technológií v Kysuckom Novom Meste.",
        "url": "https://mykysuce.sme.sk/c/23127160/firma-ich-absolventa-montuje-vyrobne-linky-v-usa-pre-automobilku-tesla.html",
        "urlToImage": "https://m.smedata.sk/api-media/media/image/sme/9/83/8367349/8367349_1200x.jpg?rev=3",
        "publishedAt": "2023-02-06T07:28:59Z",
        "content": "Rozhodnutie tudova IT smer je dnes rozhodne tou najlepou vobou. Potvrdzuje to v rozhovore aj Milan Valek, riadite Strednej priemyselnej koly informaných technológií v Kysuckom Novom Meste.Pán riadite… [+8835 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Haber7.com"
        },
        "author": "Emrullah Koçin",
        "title": "BMW'den 872 milyon dolar yatırım",
        "description": "Alman otomobil üreticisi BMW, Meksika'da elektrikli araçlar üretmek için 872 milyon dolar yatırım yapacak.",
        "url": "https://www.haber7.com/otomobil/haber/3299799-bmwden-872-milyon-dolar-yatirim",
        "urlToImage": "https://i12.haber7.net//haber/haber7/og_image/2022/42/bmwden_elektrikli_otomobiller_icin_dev_yatirim_1666251878_0599.jpg",
        "publishedAt": "2023-02-06T07:16:00Z",
        "content": "BMW AG, küresel üretim an güçlendirmeye yönelik daha geni bir çabann parças olarak, elektrikli araçlar üretmek için Meksika'daki San Luis Potosí tesisine 800 milyon euro (872 milyon dolar) yatrm yapa… [+1136 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Прототип Tesla Cybertruck ещё раз показал способность подруливать задними колёсами",
        "description": "Производители электрических внедорожников вдохновились идеей реализовать подруливание задними колёсами, поскольку для них она открывает возможность как сократить радиус разворота, так и смещаться в диагональном направлении. Первая возможность уже предусмотрен…",
        "url": "https://3dnews.ru/1081447/prototip-tesla-cybertruck-prodemonstriroval-sposobnost-podrulivat-zadnimi-kolyosami",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/02/06/1081447/cybertruck_01.jpg",
        "publishedAt": "2023-02-06T07:10:00Z",
        "content": ", , . Hummer EV Chevrolet Silverado EV, Tesla Cybertruck , .\r\n: Tokyotesla\r\nTesla Cybertruck , , . , . , , , , .\r\n, (Elon Musk) — « » , . . Tesla Cybertruck , , . Rivian, Mercedes-Benz G-Klasse."
        },
        {
        "source": {
        "id": null,
        "name": "Afpbb.com"
        },
        "author": null,
        "title": "テスラ中国、１月の販売台数は前年比１０・３％増",
        "description": "【2月6日 Xinhua News】米電気自動車（ＥＶ）大手テスラ（Tesla）の中国法人、テスラ中国はこのほど、１月の販売台数が約６万６千台となり、前年同期比で１０・３％、前月比で１８・４％いずれも増加したと明らかにした。",
        "url": "https://www.afpbb.com/articles/-/3449953",
        "urlToImage": "https://afpbb.ismcdn.jp/mwimgs/e/c/1000x/img_ec7dbf63d2ea2c8ff0765e5fef4898941207176.jpg",
        "publishedAt": "2023-02-06T07:07:00Z",
        "content": "26 Xinhua NewsEVTesla166103184\r\n124119\r\nCPCANEV85036(c)Xinhua News/AFPBB News"
        },
        {
        "source": {
        "id": null,
        "name": "CounterPunch"
        },
        "author": "Vicente Navarro",
        "title": "The Enormous Limitations of U.S. Liberal Democracy and Its Consequences: The Growth Of Fascism",
        "description": "In general, the U.S. democratic system has always been presented as one of the most advanced democratic systems in the world. Hence, many democratic countries readily accept the leadership of the U.S. government in international associations and alliances tha…",
        "url": "https://www.counterpunch.org/2023/02/06/the-enormous-limitations-of-u-s-liberal-democracy-and-its-consequences-the-growth-of-fascism/",
        "urlToImage": "https://www.counterpunch.org/wp-content/uploads/2023/02/50658159158_d43eb65d09_c.jpg",
        "publishedAt": "2023-02-06T07:05:36Z",
        "content": "Photograph Source: Anthony Crider – CC BY 2.0\r\nWhen it looked like ultra-right-wing forces, led by former President Trump, might win the elections to the U.S. Congress on November 8, there was alarm … [+18670 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Fabian Hoberg",
        "title": "Regeln bei der Akku-Garantie – So umgehen Sie die Fallstricke der E-Auto-Hersteller",
        "description": "Der Akku zählt zu teuersten Bauteilen im E-Auto. Hersteller geben sich bei ihren Garantieversprechen spendabel. Doch gegen deren Bedingungen kann man im Alltag schnell verstoßen. Vor allem beim Laden drohen bei der Gewährleistung zahlreiche Fallen.",
        "url": "https://www.welt.de/wirtschaft/webwelt/article243520601/Akku-Garantie-von-E-Autos-So-umgehen-Sie-die-Fallstricke-der-Hersteller.html",
        "urlToImage": "https://img.welt.de/img/bildergalerien/mobile243520595/3331352257-ci16x9-w1200/Geladene-Regelwerke-Fallstricke-bei-der-Akku-Garantie.jpg",
        "publishedAt": "2023-02-06T07:05:14Z",
        "content": "Acht Jahre oder 160.000 gefahrene Kilometer: Es gibt kaum ein Herstellerversprechen, das länger gelten soll, als die Garantie beim Antriebs-Akku von Elektroautos. Aber wird das Versprechen auch einge… [+5334 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Giga"
        },
        "author": "Felix Gräber",
        "title": "E-Auto-Schnäppchen bei VW? Chef gibt eine klare Antwort",
        "description": "Nachdem Tesla massiv die Preise für viele seiner Elektroautos runtergeschraubt hat, ist die Branche in Aufruhr. Erste Hersteller haben die Herausforderung zum Preiskampf angenommen und ihrerseits bessere Angebote für ihre Kunden gemacht. Doch VW-Chef Oliver B…",
        "url": "https://www.giga.de/news/e-auto-schnaeppchen-bei-vw-chef-gibt-eine-klare-antwort/",
        "urlToImage": "https://crops.giga.de/63/62/11/f369deeebe22912fb8721eff93_YyAzMTYxeDE2NTIrMTAxKzg1AnJlIDEyMDAgNjI3AzYyZjllZTlmN2U5.jpg",
        "publishedAt": "2023-02-06T07:02:32Z",
        "content": "Nachdem Tesla massiv die Preise für viele seiner Elektroautos runtergeschraubt hat, ist die Branche in Aufruhr. Erste Hersteller haben die Herausforderung zum Preiskampf angenommen und ihrerseits bes… [+2311 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Madshrimps.be"
        },
        "author": "Stefan Mileschin",
        "title": "Tesla raises Model Y pricing following federal tax credit change",
        "description": "Tesla has quietly raised the price of its best-selling Model Y crossover. As of Saturday, the automakers US website lists the Long Range and Performance models at $54,990 and $57,990, respectively. For the former, that represents a $2,000 increase from the a…",
        "url": "http://www.madshrimps.be/news/item/220183",
        "urlToImage": null,
        "publishedAt": "2023-02-06T07:02:06Z",
        "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Futura"
        },
        "author": "Emma Hollen, Responsable audio, journaliste scientifique",
        "title": "Le coût carbone des voitures autonomes ou le mirage écologique",
        "description": "C’est dans le film Minority Report que j’ai découvert pour la première fois le concept de véhicule autonome. Poursuivi par la division Précrime, Tom Cruise s’échappe à bord d’une voiture futuriste en forme d’obus, filant sur une route qui n’est pas sans rappe…",
        "url": "https://www.futura-sciences.com/planete/actualites/pollution-cout-carbone-voitures-autonomes-mirage-ecologique-103255/",
        "urlToImage": "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/a/5/7/a57e4acd2c_50198297_voiture-autonome.jpg",
        "publishedAt": "2023-02-06T07:01:55Z",
        "content": "Cest dans le film Minority Report que jai découvert pour la première fois le concept de véhicule autonome. Poursuivi par la division Précrime, Tom Cruise séchappe à bord dune voiture futuriste en for… [+9348 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Faz.net"
        },
        "author": "Marcus Theurer",
        "title": "Elektroautos: Die neue Batterie-Hoffnung kommt aus China",
        "description": "Werden Elektroautos unerschwinglich, weil die Rohstoffe für Batterien so teuer sind? Nicht unbedingt, der technische Fortschritt könnte das Problem lösen. Führend sind wieder mal Hersteller aus Fernost.",
        "url": "https://www.faz.net/aktuell/wirtschaft/elektroautos-die-neue-batterie-hoffnung-kommt-aus-china-18650936.html",
        "urlToImage": "https://media1.faz.net/ppmedia/aktuell/wirtschaft/488294273/1.8654589/facebook_teaser_fplus/knappe-batterierohstoffe.jpg",
        "publishedAt": "2023-02-06T07:00:31Z",
        "content": "Es war im Juli 2021, als Robin Zeng mit einer Überraschung aufwartete: In einer Online­videokonferenz berichtete der Gründer und Chef des weltgrößten Batteriezellenherstellers CATL von einem neuartig… [+728 chars]"
        },
        {
        "source": {
        "id": "il-sole-24-ore",
        "name": "Il Sole 24 Ore"
        },
        "author": "Luca Tremolada",
        "title": "In Italia nel 2021 erano (solo) 118mila le auto elettriche",
        "description": "A 12 anni all'entrata in vigore del divieto di vendere auto a motore termico all'interno dell'Unione europea, le auto elettriche, principali candidate a sostituire quelle a diesel e benzina, sono meno di una su cento. Ad essere precisi, sono lo 0,76% del parc…",
        "url": "https://www.infodata.ilsole24ore.com/2023/02/06/in-italia-nel-2021-erano-solo-118mila-le-auto-elettriche/",
        "urlToImage": "https://www.infodata.ilsole24ore.com/wp-content/uploads/sites/89/2023/02/Dashboard-3-2.jpg",
        "publishedAt": "2023-02-06T07:00:13Z",
        "content": "A 12 anni allentrata in vigore del divieto di vendere auto a motore termico allinterno dellUnione europea, le auto elettriche, principali candidate a sostituire quelle a diesel e benzina, sono meno d… [+2764 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vnexpress.net"
        },
        "author": "VnExpress",
        "title": "Elon Musk nói đã cứu Twitter khỏi phá sản",
        "description": "Elon Musk cho biết Twitter \"đang có xu hướng hòa vốn\" sau khi ông phải cứu công ty khỏi nguy cơ phá sản.",
        "url": "https://vnexpress.net/elon-musk-noi-da-cuu-twitter-khoi-pha-san-4567226.html",
        "urlToImage": "https://vcdn1-sohoa.vnecdn.net/2023/02/06/2018-11-09t002434z-523701124-r-7343-8112-1675656230.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=jPW8vOvCqppLOkDD4n76Ww",
        "publishedAt": "2023-02-06T07:00:00Z",
        "content": "Elon Musk cho bit Twitter \"ang có xu hng hòa vn\" sau khi ông phi cu công ty khi nguy c phá sn.\"Ba tháng qua là quãng thi gian vô cùng khó khn khi va phi cu Twitter khi phá sn, va phi hoàn thành các n… [+2109 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tech Times"
        },
        "author": "Teejay Boris",
        "title": "Tesla Model 3 Price Drops — Model S, X Pricing Unchanged?",
        "description": "While the Model Y is now more costly, the Model 3 just got cheaper.",
        "url": "https://www.techtimes.com/articles/287239/20230206/tesla-model-3-price-cheaper-model-s-model-x.htm",
        "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/420263/tesla-elon-musk.jpg",
        "publishedAt": "2023-02-06T07:00:00Z",
        "content": "Tesla Model 3 price goes down, making the top-selling electric vehicle (EV) much cheaper.\r\nOn the other hand, the Model Y just got more expensive. But how about the Model S and X EVs?\r\n(Photo : Justi… [+2664 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digiato.com"
        },
        "author": "ایمان صاحبی",
        "title": "ایلان ماسک: اسپیس‌ایکس برای پرتاب مداری استارشیپ در ماه آینده میلادی آماده می‌شود",
        "description": "ایلان ماسک می‌گوید اگر همه‌چیز خوب پیش برود، اسپیس‌ایکس در ماه مارس میلادی اولین پرتاب مداری استارشیپ را انجام می‌دهد.\nThe post ایلان ماسک: اسپیس‌ایکس برای پرتاب مداری استارشیپ در ماه آینده میلادی آماده می‌شود appeared first on دیجیاتو.",
        "url": "https://digiato.com/article/2023/02/06/spacex-attemp-for-starship-launch-next-month",
        "urlToImage": "https://digiato.com/wp-content/uploads/2023/02/86449a10-5997-11ed-b595-5e6acb86f63e.jpg",
        "publishedAt": "2023-02-06T07:00:00Z",
        "content": ". .\r\n Tesla East Bay Fremont . : « .»\r\n . « » . .\r\n. . 33 . 14 .\r\n . . . ."
        },
        {
        "source": {
        "id": null,
        "name": "Madshrimps.be"
        },
        "author": "Stefan Mileschin",
        "title": "Jury rules Elon Musk is not liable for shareholder losses after 'funding secured' twe",
        "description": "Elon Musk is off the hook for his 2018 tweets claiming he had funding secured to take Tesla private for $420 a share. A jury found that Musk was not liable for Tesla investors losses, following a weeks-long trial in San...",
        "url": "http://www.madshrimps.be/news/item/220179",
        "urlToImage": null,
        "publishedAt": "2023-02-06T06:59:16Z",
        "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Novate.ru"
        },
        "author": "//www.facebook.com/novate",
        "title": "Билл Гейтс призвал Илона Маска не летать на Марс",
        "description": "Основатель Microsoft и филантроп Билл Гейтс в недавнем интервью телекомпании CNBC призвал Илона Маска отказаться от идеи полёта на Марс и заявил, что куда более целесообразно делать вакцины.\n Подробнее..",
        "url": "https://novate.ru/news/8194/",
        "urlToImage": "https://novate.ru/media/moon112_s.jpg",
        "publishedAt": "2023-02-06T06:56:00Z",
        "content": "Microsoft CNBC , . , . « , », .\r\n , , . « », SpaceX. Microsoft , . « », .\r\n , . «, Tesla , », . , « ».\r\n Twitter , . Microsoft, Twitter , , .\r\n? :"
        },
        {
        "source": {
        "id": null,
        "name": "Biziday.ro"
        },
        "author": "BiancaSAM",
        "title": "Bill Gates critică planul lui Elon Musk, de a duce oameni pe Marte. Spune că sunt mulți bani, care ar fi fost cheltuiți mai eficient pentru dezvoltarea de vaccinuri.",
        "description": "Într-un interviu acordat pentru BBC, Bill Gates a adus o critică explicită modului în care Elon Musk, fondatorul Space X își folosește banii, investind miliarde în tehnologia care ar urma să ducă oameni pe Marte: “Din punctul meu de vedere, acesta nu este un …",
        "url": "https://www.biziday.ro/238924-2/",
        "urlToImage": "https://cdn.biziday.ro/wp-content/uploads/2022/05/dreamstime_m_179611563.jpg",
        "publishedAt": "2023-02-06T06:54:31Z",
        "content": "Într-un interviu acordat pentru BBC, Bill Gates a adus o critic explicit modului în care Elon Musk, fondatorul Space X îi folosete banii, investind miliarde în tehnologia care ar urma s duc oameni pe… [+903 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Madshrimps.be"
        },
        "author": "Stefan Mileschin",
        "title": "Tesla's five-seat Model Y and other EVs now qualify for the new $7,500 federal tax",
        "description": "Don't worry if the lack of a federal tax credit put you off from buying certain Tesla Model Y variants or other EVs � they might now qualify. The Treasury Department has revised its classification standard to treat more vehicles as SUVs rather than sedans, ra…",
        "url": "http://www.madshrimps.be/news/item/220170",
        "urlToImage": null,
        "publishedAt": "2023-02-06T06:48:47Z",
        "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "insideevs.com",
        "title": "US: Tesla Tweaked Model 3/Model Y Prices Again",
        "description": "Tesla recently once again adjusted its electric vehicle prices in the United States. This time, the changes concern the Model 3 and Model Y, while there are no changes to the Model S and Model X prices. Let's recall that Tesla applied a major price reduction …",
        "url": "https://biztoc.com/x/2087e463a65d84c7",
        "urlToImage": "https://c.biztoc.com/p/2087e463a65d84c7/og.webp",
        "publishedAt": "2023-02-06T06:48:06Z",
        "content": "Tesla recently once again adjusted its electric vehicle prices in the United States. This time, the changes concern the Model 3 and Model Y, while there are no changes to the Model S and Model X pric… [+284 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ixbt.com"
        },
        "author": "jin@ixbt.com (Jin)",
        "title": "Илон Маск заявил, что спас Twitter от банкротства",
        "description": "Илон Маск заявил, что он уже спас Twitter от банкротства, а теперь компания стремится к стадии безубыточности. Миллиардер написал в Twitter в воскресенье, что последние три месяца были «чрезвычайно тяжелыми». Ему приходилось совмещать спасение платформы социа…",
        "url": "https://www.ixbt.com/news/2023/02/06/ilon-mask-zajavil-chto-spas-twitter-ot-bankrotstva.html",
        "urlToImage": "https://www.ixbt.com/img/n1/news/2023/1/1/media.zenfs_large.png",
        "publishedAt": "2023-02-06T06:48:00Z",
        "content": ", Twitter , .\r\n Twitter , « ». Tesla SpaceX.\r\n« », — , , , Twitter, « ».\r\n Twitter 44 , 54,20 . , 200 , Bloomberg.\r\n Twitter."
        },
        {
        "source": {
        "id": null,
        "name": "Interfax.ru"
        },
        "author": null,
        "title": "Суд отказал группе акционеров Tesla в иске по поводу твитов Маска",
        "description": "Суд в Калифорнии отказал группе инвесторов в иске к генеральному директору Tesla Илону Маску по делу о нарушении им законодательства о рынке ценных бумаг в связи с твитами о выкупе акций компании.",
        "url": "https://www.interfax.ru/world/884752",
        "urlToImage": "https://www.interfax.ru/aspimg/884752.jpg",
        "publishedAt": "2023-02-06T06:46:00Z",
        "content": ". 6 . INTERFAX.RU - Tesla .\r\n, , . , , , .\r\n , . .\r\n 2018 , $420 \" \". .\r\n Tesla , , , , Tesla.\r\n\" \", - , , .\r\n , \" \". , , , SpaceX.\r\n Public Investment Fund (PIF) \" \" , . , , .\r\n , , Twitter (240 ) .… [+151 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "International Business Times"
        },
        "author": "Fransiska Nangoy, Gayatri Suroyo and Bernadette Christina",
        "title": "Like Musk, Nickel-rich Indonesia Has High Electric Vehicle ambitions",
        "description": "Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself indispensable for the electric vehicle industry, which uses the metal extensively.",
        "url": "https://www.ibtimes.com/like-musk-nickel-rich-indonesia-has-high-electric-vehicle-ambitions-3664736",
        "urlToImage": "https://d.ibtimes.com/en/full/4415999/wuling-air-ev-electric-car-shopping-mall-jakarta.jpg",
        "publishedAt": "2023-02-06T06:42:25Z",
        "content": "A salesman speaks about the Wuling Air EV electric car to visitors at a shopping mall in Jakarta, Indonesia, February 5, 2023. Reuters\r\nArmed with the world's largest reserves of nickel and a ban on … [+5167 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "tagesschau.de"
        },
        "author": "tagesschau",
        "title": "Marktbericht: DAX vor neuerlichem Rückschlag",
        "description": "Der DAX dürfte mit Verlusten in die neue Börsenwoche starten. Neu angefachte Zinsängste lassen die Anleger am deutschen Aktienmarkt vor Käufen zurückschrecken. Gewinnmitnahmen sind angesagt.",
        "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-dow-zinsen-tesla-bayer-nestle-101.html",
        "urlToImage": "https://www.tagesschau.de/multimedia/bilder/boerse-frankfurt-haendler-marktbericht-109~_v-original.jpg",
        "publishedAt": "2023-02-06T06:38:55Z",
        "content": "Der DAX dürfte mit Verlusten in die neue Börsenwoche starten. Neu angefachte Zinsängste lassen die Anleger am deutschen Aktienmarkt vor Käufen zurückschrecken. Gewinnmitnahmen sind angesagt. \r\nAm deu… [+5312 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "FX Empire"
        },
        "author": "Reuters",
        "title": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "description": "By Fransiska Nangoy, Gayatri Suroyo and Bernadette Christina",
        "url": "https://www.fxempire.com/news/article/like-musk-nickel-rich-indonesia-has-high-electric-vehicle-ambitions-1275457",
        "urlToImage": "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2023/02/tagreuters.com2023newsml_LYNXMPEJ1507O3.jpg",
        "publishedAt": "2023-02-06T06:38:11Z",
        "content": "In just three years, Indonesia has signed more than a dozen deals worth more than $15 billion for battery and electric vehicle production in the country with manufacturers including Hyundai Motor, LG… [+4909 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "cnbc.com",
        "title": "Tesla or Ford? Analysts name their favorite stock as the EV race heats up",
        "description": "The past month has been an eventful one for Tesla and Ford . Electric vehicle maker Tesla made waves as it slashed prices in a bid to stoke demand . Soon after, automaker Ford — which also now makes EVs — followed suit by cutting prices across its Mustang Mac…",
        "url": "https://biztoc.com/x/1326025ece50add3",
        "urlToImage": "https://c.biztoc.com/p/1326025ece50add3/og.webp",
        "publishedAt": "2023-02-06T06:38:11Z",
        "content": "The past month has been an eventful one for Tesla and Ford . Electric vehicle maker Tesla made waves as it slashed prices in a bid to stoke demand . Soon after, automaker Ford which also now makes EV… [+290 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "urielblanco",
        "title": "El Ford Mustang Mach-E tiene más de un kilómetro de cables que no necesita. Eso es un gran problema",
        "description": "Ford demostró esta semana que no va a ser tan fácil para los fabricantes de automóviles tradicionales alcanzar a Tesla en la carrera por fabricar el mejor vehículo eléctrico.",
        "url": "https://cnnespanol.cnn.com/2023/02/06/ford-mustang-mach-e-mas-de-un-kilometro-cables-no-necesita-gran-problema-trax/",
        "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2023/02/ford-mustang-mach-e-e1675633669550.jpg?quality=100&strip=info",
        "publishedAt": "2023-02-06T06:37:32Z",
        "content": "Baterías recicladas ayudarán a impulsar autos eléctricos 0:54\r\n(CNN) -- Ford demostró esta semana que no será tan fácil para los fabricantes de automóviles tradicionales alcanzar a Tesla en la carrer… [+6133 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "ndtv.com",
        "title": "Elon Musk On \"Tough\" Last 3 Months, Saving Twitter From Going Bankrupt",
        "description": "Twitter and Tesla CEO Elon Musk on Sunday said that the past three months have been \"extremely tough\" as he \"had to save Twitter from bankruptcy\" while also fulfilling his duties in Tesla and SpaceX. Taking to his official Twitter handle, Musk said that the m…",
        "url": "https://biztoc.com/x/9f19e47c0a1dda44",
        "urlToImage": "https://c.biztoc.com/p/9f19e47c0a1dda44/og.webp",
        "publishedAt": "2023-02-06T06:34:09Z",
        "content": "Twitter and Tesla CEO Elon Musk on Sunday said that the past three months have been \"extremely tough\" as he \"had to save Twitter from bankruptcy\" while also fulfilling his duties in Tesla and SpaceX.… [+270 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "yahoo.com",
        "title": "Ford vs. GM: A tale of two automakers",
        "description": "Shareholders at Ford and GM are watching their stocks move in opposite directions after the two auto giants reported their fourth-quarter and full-year 2022 earnings. While GM beat Wall Street’s expectations across the board, Ford stumbled to miss predictions…",
        "url": "https://biztoc.com/x/fa5b1109c8aee997",
        "urlToImage": "https://c.biztoc.com/p/fa5b1109c8aee997/og.webp",
        "publishedAt": "2023-02-06T06:34:09Z",
        "content": "Shareholders at Ford and GM are watching their stocks move in opposite directions after the two auto giants reported their fourth-quarter and full-year 2022 earnings.While GM beat Wall Streets expect… [+287 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "description": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "url": "https://www.investing.com/news/stock-market-news/like-musk-nickelrich-indonesia-has-high-electric-vehicleambitions-2995657",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEC0D0AP_L.jpg",
        "publishedAt": "2023-02-06T06:30:39Z",
        "content": "By Fransiska Nangoy, Gayatri Suroyo and Bernadette Christina\r\nJAKARTA (Reuters) - Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself i… [+5085 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Insurance Journal"
        },
        "author": "Admin",
        "title": "Tesla’s Elon Musk Found Not Liable in Trial Over 2018 ‘Funding Secured’ Tweets",
        "description": "A U.S. jury on Friday found Tesla Inc. CEO Elon Musk and his company were not liable for misleading investors when Musk tweeted in 2018 that he had “funding secured” to take the electric car company private. Plaintiffs had claimed …",
        "url": "https://www.insurancejournal.com/news/national/2023/02/06/706068.htm",
        "urlToImage": "https://www.insurancejournal.com/app/uploads/2022/12/Elon-Musk-doxxing-AP--580x387.jpg",
        "publishedAt": "2023-02-06T06:30:15Z",
        "content": "New You can now listen to Insurance Journal articles!A U.S. jury on Friday found Tesla Inc. CEO Elon Musk and his company were not liable for misleading investors when Musk tweeted in 2018 that he ha… [+3991 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "International Business Times"
        },
        "author": "Nica Osorio",
        "title": "Elon Musk's 420 News Seemingly Drives Dogecoin's Trading Volume To Surge",
        "description": "\"Thank goodness, the wisdom of the people has prevailed! I am deeply appreciative of the jury's unanimous finding of innocence in the Tesla 420 take-private case,\" Musk said in a tweet.",
        "url": "https://www.ibtimes.com/elon-musks-420-news-seemingly-drives-dogecoins-trading-volume-surge-3664718",
        "urlToImage": "https://d.ibtimes.com/en/full/3841275/illustration-shows-elon-musk-representations-cryptocurrency-dogecoin.jpg",
        "publishedAt": "2023-02-06T06:25:02Z",
        "content": "KEY POINTS\r\n<ul><li>DOGE climbed back to the top 10 list of crypto assets with the highest trading volume among Binance Smart Chain whales</li><li>It then surged 3.47% and traded at $0.9481 with a 24… [+3385 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Guest Contributor",
        "title": "Should You Buy A Used Tesla?",
        "description": "Used Tesla vehicles have dropped in price in recent months, causing many prospective buyers to consider buying one with a lower price tag and an older battery. There’s a lot to consider when looking at used Tesla vehicles, and one outlet recently looked at th…",
        "url": "https://cleantechnica.com/2023/02/06/should-you-buy-a-used-tesla-while/",
        "urlToImage": "https://cleantechnica.com/files/2019/12/Tesla-Model-3-Charging-White-Floating-Watercolor-Florida-CleanTechnica.jpg",
        "publishedAt": "2023-02-06T06:19:43Z",
        "content": "Used Tesla vehicles have dropped in price in recent months, causing many prospective buyers to consider buying one with a lower price tag and an older battery. Theres a lot to consider when looking a… [+2454 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Investments in Indonesia's nickel industry",
        "description": "Indonesia is courting Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> to invest in the country, which has become a <a href=\"/markets/commodities/like-musk-nickel-rich-indonesia-has-high-electric-vehicle-ambitions-2023…",
        "url": "https://www.reuters.com/markets/commodities/investments-indonesias-nickel-industry-2023-02-06/",
        "urlToImage": "https://www.reuters.com/resizer/wkAvQiavVscFjfQTFaVqTtuwbaU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6W7GVCRULFKDNDPQLWLVVDURGM.jpg",
        "publishedAt": "2023-02-06T06:17:45Z",
        "content": "JAKARTA, Feb 6 (Reuters) - Indonesia is courting Tesla Inc (TSLA.O) to invest in the country, which has become a key player in the electric vehicle industrythanks to its rich nickel reserves.\r\nIn jus… [+3657 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNA"
        },
        "author": null,
        "title": "Investments in Indonesia's nickel industry",
        "description": "JAKARTA : Indonesia is courting Tesla Inc to invest in the country, which has become a key player in the electric vehicle industrythanks to its rich nickel reserves. In just three years, Indonesia has signed more than a dozen deals worth more than $15 billion…",
        "url": "https://www.channelnewsasia.com/business/investments-indonesias-nickel-industry-3256741",
        "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--apw9yroo--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-02-06t062050z_2_lynxmpej1507q_rtroptp_3_indonesia-mining-environment.jpg?itok=1EmXrtuO",
        "publishedAt": "2023-02-06T06:17:20Z",
        "content": "JAKARTA : Indonesia is courting Tesla Inc to invest in the country, which has become a key player in the electric vehicle industrythanks to its rich nickel reserves. \r\nIn just three years, Indonesia … [+3322 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Christian Domke Seidel",
        "title": "Teslas Schlingerkurs in China: Harter Konkurrenzkampf drückt die Preise",
        "description": "Tesla hat in China zum zweiten Mal innerhalb von drei Monaten die Preise senken müssen. Auch das zeigt, wie stark der Druck auf dem chinesischen Markt zunimmt.",
        "url": "https://www.heise.de/hintergrund/Teslas-Schlingerkurs-in-China-Harter-Konkurrenzkampf-drueckt-die-Preise-7478320.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/9/7/9/4/44-656c20d9bad03d03.jpg",
        "publishedAt": "2023-02-06T06:17:00Z",
        "content": "Inhaltsverzeichnis\r\nFolge einer Serie, mit der heise/Autos auf den chinesischen Automarkt blickt. Dort laufen sich teils kräftig unterstützt von der sogenannten Kommunistischen Partei gerade chinesis… [+9364 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Christian Domke Seidel",
        "title": "Teslas Schlingerkurs in China: Harter Konkurrenzkampf drückt die Preise",
        "description": "Tesla hat in China zum zweiten Mal innerhalb von drei Monaten die Preise senken müssen. Auch das zeigt, wie stark der Druck auf dem chinesischen Markt zunimmt.",
        "url": "https://www.heise.de/hintergrund/Teslas-Schlingerkurs-in-China-Harter-Konkurrenzkampf-drueckt-die-Preise-7478320.html?wt_mc=rss.red.autos.autos.atom.beitrag.beitrag",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/9/7/9/4/44-656c20d9bad03d03.jpg",
        "publishedAt": "2023-02-06T06:17:00Z",
        "content": "Inhaltsverzeichnis\r\nFolge einer Serie, mit der heise/Autos auf den chinesischen Automarkt blickt. Dort laufen sich teils kräftig unterstützt von der sogenannten Kommunistischen Partei gerade chinesis… [+9364 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "description": "Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself indispensable for the electric vehicle industry, which uses the metal extensively.",
        "url": "https://www.reuters.com/markets/commodities/like-musk-nickel-rich-indonesia-has-high-electric-vehicle-ambitions-2023-02-06/",
        "urlToImage": "https://www.reuters.com/resizer/mApR27vI_AGpNzyysV0Xwcrj328=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FN7FF2RTUFLIBDGGTCZCD3W7CE.jpg",
        "publishedAt": "2023-02-06T06:14:18Z",
        "content": "JAKARTA, Feb 6 (Reuters) - Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself indispensable for the electric vehicle industry, which u… [+5307 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "description": "(marketscreener.com) Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself indispensable for the electric vehicle industry, which uses the metal extensively.https://www.marketscreener.com/quote/sto…",
        "url": "https://www.marketscreener.com/quote/stock/LG-CORP-6494958/news/Like-Musk-nickel-rich-Indonesia-has-high-electric-vehicle-ambitions-42905965/?utm_medium=RSS&utm_content=20230206",
        "urlToImage": "https://img.zonebourse.com/reuters/2023-02/2023-02-06T061351Z_1_LYNXMPEJ1507O_RTROPTP_3_INDONESIA-ELECTRIC.JPG",
        "publishedAt": "2023-02-06T06:13:51Z",
        "content": "In just three years, Indonesia has signed more than a dozen deals worth more than $15 billion for battery and electric vehicle production in the country with manufacturers including Hyundai Motor, LG… [+5021 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Fransiska Nangoy, Gayatri Suroyo and Bernadette Christina",
        "title": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "description": "Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself indispensable for the electric vehicle...",
        "url": "https://finance.yahoo.com/news/musk-nickel-rich-indonesia-high-061351131.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/b684220f162a37caf4f5bb72a71d888c",
        "publishedAt": "2023-02-06T06:13:51Z",
        "content": "By Fransiska Nangoy, Gayatri Suroyo and Bernadette Christina\r\nJAKARTA (Reuters) - Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself i… [+5225 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNA"
        },
        "author": null,
        "title": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "description": "JAKARTA : Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself indispensable for the electric vehicle industry, which uses the metal extensively.In just three years, Indonesia has signed more than…",
        "url": "https://www.channelnewsasia.com/business/musk-nickel-rich-indonesia-has-high-electric-vehicle-ambitions-3256746",
        "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--2Q8KWBB6--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-02-06t062639z_3_lynxmpej1507o_rtroptp_3_indonesia-electric.jpg?itok=o4mc3AFJ",
        "publishedAt": "2023-02-06T06:13:51Z",
        "content": "JAKARTA : Armed with the world's largest reserves of nickel and a ban on the export of nickel ore, Indonesia is making itself indispensable for the electric vehicle industry, which uses the metal ext… [+5023 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Patronlardunyasi.com"
        },
        "author": null,
        "title": "Elon Musk: Türkiye’ye Starlink uydularını gönderebiliriz",
        "description": "Elon Musk, Kahramanmaraş'ta meydana gelen 7,4'lük depremle ilgili \"Türk hükümeti onay verir vermez, SpaceX şirketimiz Starlink uydularımızı Türkiye'ye gönderebilir\" ifadelerini kullandı.",
        "url": "https://www.patronlardunyasi.com/haber/Elon-Musk-Turkiye-ye-Starlink-uydularini-gonderebiliriz/274670",
        "urlToImage": "http://www.patronlardunyasi.com/haber_resim/Dunyanin%2Den%2Dzengini%2DElon%2DMusk%2Din%2Dis%2Dgorusmelerinde%2Dne%2Dcok%2Dsordugu%2Dsoru%2D257067%2Ejpg",
        "publishedAt": "2023-02-06T06:09:12Z",
        "content": "Kahramanmara’ta meydana gelen ve 10 ehri vuran 7.4 büyüklüündeki depremde ilk belirlemelere göre 76 kii öldü, 440 kii yaraland ve yüzlerce bina ykld. Çok sayda vatanda enkaz altnda kald.\r\nTesla, Spac… [+484 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gazeta.ru"
        },
        "author": "Газета.Ru",
        "title": "Илон Маск описал свои последние три месяца фразой \"никому не пожелаю такой боли\"",
        "description": "Предприниматель Илон Маск пожаловался на тяжелые три месяца своей жизни в Twitter. Таким образом он отреагировал на материал Wall Street Journal, который называется \"Когда спит Илон Маск?\".\n\n\"Последние три месяца были ужасно ...",
        "url": "https://www.gazeta.ru/tech/news/2023/02/06/19670845.shtml",
        "urlToImage": "https://img.gazeta.ru/files3/456/14792456/upload-20220322_gaf_u55_211-pic_32ratio_900x600-900x600-24137.jpg",
        "publishedAt": "2023-02-06T06:06:59Z",
        "content": "Twitter.   Wall Street Journal, « ?».\r\n« , Twitter ,  Tesla SpaceX. .  Twitter ,   . !», —  .\r\n   ,  «  Tesla»   2008 , .\r\n «.Ru»  ,  Twitter     , ,     «».   6  , 100 . 3,5 . ."
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "Investments in Indonesia's nickel industry",
        "description": "(marketscreener.com) Indonesia is courting Tesla\nInc to invest in the country, which has become a key\nplayer in the electric vehicle industrythanks to its rich nickel\nreserves.\n In just three years, Indonesia has signed more than a dozen\ndeals worth more than…",
        "url": "https://www.marketscreener.com/news/latest/Investments-in-Indonesia-s-nickel-industry--42905967/?utm_medium=RSS&utm_content=20230206",
        "urlToImage": "https://img.zonebourse.com/reuters/2022-01/2022-01-28T091541Z_1_LYNXMPEI0R0BQ_RTROPTP_3_INDONESIA-COMMODITIES.JPG",
        "publishedAt": "2023-02-06T06:05:40Z",
        "content": "In just three years, Indonesia has signed more than a dozen deals worth more than $15 billion for battery materials and electric vehicle production with global manufacturers including Hyundai, LG and… [+3250 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "Like Musk, nickel-rich Indonesia has high electric vehicle ambitions",
        "description": "(marketscreener.com) Armed with the world's\nlargest reserves of nickel and a ban on the export of nickel\nore, Indonesia is making itself indispensable for the electric\nvehicle industry, which uses the metal extensively.\n In just three years, Indonesia has sig…",
        "url": "https://www.marketscreener.com/quote/stock/LG-CORP-6494958/news/Like-Musk-nickel-rich-Indonesia-has-high-electric-vehicle-ambitions-42905965/",
        "urlToImage": "https://img.zonebourse.com/reuters/2023-02/2023-02-06T061351Z_1_LYNXMPEJ1507O_RTROPTP_3_INDONESIA-ELECTRIC.JPG",
        "publishedAt": "2023-02-06T06:05:15Z",
        "content": "In just three years, Indonesia has signed more than a dozen deals worth more than $15 billion for battery and electric vehicle production in the country with manufacturers including Hyundai Motor, LG… [+5021 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "99bitcoins.com"
        },
        "author": "Robert McCracken",
        "title": "Russia Mobilizes DeFi | This Week in Crypto – Feb 6, 2023",
        "description": "The post Russia Mobilizes DeFi | This Week in Crypto – Feb 6, 2023 appeared first on 99 Bitcoins.\n﻿Twitter proceeds with payment platform initiatives, MetaMask unveils new privacy features and Cathie Wood stands …\n Russia Mobilizes DeFi | This Week in Cry…",
        "url": "https://99bitcoins.com/bitcoin-news-summary-feb-6-2023/",
        "urlToImage": null,
        "publishedAt": "2023-02-06T06:00:24Z",
        "content": "Twitter proceeds with payment platform initiatives, MetaMask unveils new privacy features and Cathie Wood stands by her ten-year bitcoin price target even in the midst of a bear market. These stories… [+3459 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Paul Karp",
        "title": "MP tells Australia’s parliament AI could be used for ‘mass destruction’ in speech part-written by ChatGPT",
        "description": "Julian Hill has called for an inquiry or white paper to look into the risks and benefits of artificial intelligence<ul><li>Follow our Australia news live blog for the latest updates</li><li>Get our morning and afternoon news emails, free app or daily news pod…",
        "url": "https://www.theguardian.com/australia-news/2023/feb/06/labor-mp-julian-hill-australia-parliament-speech-ai-part-written-by-chatgpt",
        "urlToImage": "https://i.guim.co.uk/img/media/b324d20b86c9bb52985eca642e9a2e8b881b2474/1429_202_3068_1841/master/3068.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=298a3520ba9e8c43ea50ae48243f890f",
        "publishedAt": "2023-02-06T05:46:00Z",
        "content": "The federal Labor MP Julian Hill has used what is believed to be the first Australian parliamentary speech part-written by ChatGPT to warn that artificial intelligence could be harnessed for mass des… [+4916 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "mobiFlip.de"
        },
        "author": "Oliver Schwuchow",
        "title": "Teuerer, als alle Modelle: Porsche plant ganz neues Elektroauto für 2027",
        "description": "Die SUVs sind mittlerweile auch bei den klassischen Sportwagenherstellern die Bestseller und der Macan und Cayenne dominieren die Verkaufscharts bei Porsche. Daher gibt es ab […]",
        "url": "https://www.mobiflip.de/shortnews/porsche-neu-elektro-auto-suv-2027/",
        "urlToImage": "https://i0.wp.com/www.mobiflip.de/wp-content/uploads/2021/07/porsche-taycan-detail-header.jpg?fit=1200%2C825&ssl=1",
        "publishedAt": "2023-02-06T05:40:35Z",
        "content": "Die SUVs sind mittlerweile auch bei den klassischen Sportwagenherstellern die Bestseller und der Macan und Cayenne dominieren die Verkaufscharts bei Porsche.\r\nDaher gibt es ab 2024 einen elektrischen… [+2519 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Fark.com"
        },
        "author": null,
        "title": "Ex-NFL star Vontae Davis arrested for DUI in Florida after 'crashing his Tesla into a pick-up truck that then hit a pedestrian who was rushed to hospital - before cops found him laying down SLEEPING at the side of the highway'. The Aristocrats [Fail]",
        "description": "Ex-NFL star Vontae Davis arrested for DUI in Florida after 'crashing his Tesla into a pick-up truck that then hit a pedestrian who was rushed to hospital - before cops found him laying down SLEEPING at the side of the highway'. The Aristocrats",
        "url": "https://www.fark.com/comments/12743102/Ex-NFL-star-Vontae-Davis-arrested-for-DUI-in-Florida-after-crashing-his-Tesla-into-a-pick-up-truck-that-then-hit-a-pedestrian-who-was-rushed-to-hospital-before-cops-found-him-laying-down-SLEEPING-at-side-of-highway-The-Aristocrats",
        "urlToImage": "https://usrimg-850.fark.net/h/hn/fark_hnrorhthAbYlUWaaEPN8acwMf2o.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1676264400&Signature=1fTNX80y52%2F4joroNKmh7I4mnR0%3D",
        "publishedAt": "2023-02-06T05:35:56Z",
        "content": "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Computerworld.dk"
        },
        "author": "Alexander Haslund",
        "title": "Morgen-briefing: It-sikkerhedsvirksomhed etablerer nordisk afdeling / Elon Musk frifindes i retssag / Dating.dk kæmper med dalende overskud",
        "description": "It-sikkerhedsvirksomhed etablerer nordisk afdeling. Elon Musk frifindes i retssag. Dating.dk kæmper med dalende overskud. Sag på vej mod Amazon. Printerleverandør vil skifte til elbiler. Dataetik på menuen i det nye digitaliseringsudvalg.",
        "url": "https://www.computerworld.dk/art/281602/morgen-briefing-it-sikkerhedsvirksomhed-etablerer-nordisk-afdeling-elon-musk-frifindes-i-retssag-dating-dk-kaemper-med-dalende-overskud",
        "urlToImage": "https://www.computerworld.dk/fil/194234?width=600&height=315&focus=1",
        "publishedAt": "2023-02-06T05:30:00Z",
        "content": "It-sikkerhedsvirksomhed etablerer nordisk afdeling. Elon Musk frifindes i retssag. Dating.dk kæmper med dalende overskud. Sag på vej mod Amazon. Printerleverandør vil skifte til elbiler. Dataetik på … [+5678 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Boston Herald"
        },
        "author": "Ashley Nunes",
        "title": "Nunes: EV prices drop – but that doesn’t help poor Americans",
        "description": "For all the talk about how the Inflation Reduction Act promotes climate equity, the legislation seems, at least where EVs are concerned, to perpetuate considerable inequity.",
        "url": "https://www.bostonherald.com/2023/02/06/nunes-ev-prices-drop-but-that-doesnt-help-poor-americans/",
        "urlToImage": "https://www.bostonherald.com/wp-content/uploads/2023/02/0206nunes.jpg?w=1024&h=692",
        "publishedAt": "2023-02-06T05:07:17Z",
        "content": "Grab the popcorn and settle in: The great electric vehicle price war is here. Weeks after Tesla slashed prices across its U.S. lineup, Ford is set to follow suit.\r\nLast week, the Michigan-based autom… [+3580 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vnexpress.net"
        },
        "author": "VnExpress",
        "title": "8 cách giúp người giàu càng giàu hơn",
        "description": "Đầu tư tập trung ở giai đoạn đầu, chỉ vay nợ để làm ăn và đầu tư vào mối quan hệ là cách giúp người giàu trở thành siêu giàu.",
        "url": "https://vnexpress.net/8-cach-giup-nguoi-giau-cang-giau-hon-4564772.html",
        "urlToImage": "https://vcdn1-kinhdoanh.vnecdn.net/2023/01/30/grant-cardone-net-worth-age-he-5328-9393-1675071676.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=KJCNywxUk-A97QgCRPkzRw",
        "publishedAt": "2023-02-06T05:03:25Z",
        "content": "u t tp trung giai on u, ch vay n làm n và u t vào mi quan h là cách giúp ngi giàu tr thành siêu giàu.Grant Cardone là Giám c iu hành ca Cardone Capital. Ông s hu và iu hành 7 công ty và qun lý danh m… [+3918 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Brett Schafer)",
        "title": "Why Lucid Group Popped 71% In January",
        "description": "Investors are buying the dip on this electric vehicle upstart. But can the company ever reach full profitability?",
        "url": "https://www.fool.com/investing/2023/02/06/why-lucid-group-popped-71-in-january/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/719519/electric-vehicles-2.jpg",
        "publishedAt": "2023-02-06T05:02:18Z",
        "content": "What happened\r\nShares of Lucid Group(LCID -3.73%) rose 71.2% in January, according to data from S&amp;P Global Market Intelligence. The luxury electric vehicle (EV) brand posted strong production gro… [+2707 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Giga"
        },
        "author": "Felix Gräber",
        "title": "Tesla altert schlecht: Aushängeschild kann nicht mehr mithalten",
        "description": "Technisch gelten die Elektroautos von Tesla oft als Speerspitze der Branche. Doch einer aktuellen Untersuchung zufolge, kann der E-Auto-Pionier gerade bei den früher hochgelobten Fahrassistenten nicht mehr mithalten. Die Konkurrenz zieht dem alten Platzhirsch…",
        "url": "https://www.giga.de/news/tesla-altert-schlecht-aushaengeschild-kann-nicht-mehr-mithalten/",
        "urlToImage": "https://crops.giga.de/05/60/35/2edff359b2eac09e1854754c56_YyA1NDAxeDI4MjIrMzQrNTc3AnJlIDEyMDAgNjI3AzAwMmY1MmNlNTU1.jpg",
        "publishedAt": "2023-02-06T05:01:47Z",
        "content": "Technisch gelten die Elektroautos von Tesla oft als Speerspitze der Branche. Doch einer aktuellen Untersuchung zufolge, kann der E-Auto-Pionier gerade bei den früher hochgelobten Fahrassistenten nich… [+2741 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Autobild.de"
        },
        "author": "Sebastian Friemel",
        "title": "Neue Elektroautos 2023 Diese Elektroauto-Neuheiten erwarten uns 2023",
        "description": "Hyundai Kona Electric, Opel Astra Electric, VW ID.3 Facelift, VW ID.7 und viele mehr: AUTO BILD zeigt alle neuen Elektroautos fürs Jahr 2023!",
        "url": "https://www.autobild.de/artikel/neue-elektroautos-2023-22358429.html",
        "urlToImage": "https://i.auto-bild.de/ir_img/3/1/8/2/2/6/7/b166979ebece17ad.jpg?impolicy=og_images",
        "publishedAt": "2023-02-06T05:00:00Z",
        "content": "Jetzt Tesla Model 3 und weitere Modelle flexibel im Abo\r\nProfitieren Sie von kurzen Lieferzeiten, der Möglichkeit zu pausieren und zahlreichen Modellen im Sixt+ Auto-Abo."
        },
        {
        "source": {
        "id": null,
        "name": "Autobild.de"
        },
        "author": "Jörg Maltzan",
        "title": "Auto-Abo für Fahranfänger Warum ein Auto-Abo für Fahranfänger interessant sein kann",
        "description": "2000 Euro und mehr für die Autoversicherung! Das ist für Führerscheinneulinge nichts Besonderes. Denn für Fahranfänger werden bei der Versicherung sehr hohe Prämien fällig. Eine interessante Alternative ist darum ein Auto-Abo. In der Monatsrate sind alle Kost…",
        "url": "https://www.autobild.de/artikel/auto-abo-fuer-fahranfaenger-22495633.html",
        "urlToImage": "https://i.auto-bild.de/ir_img/3/2/0/0/7/2/7/9f3f0bdb86bde905.jpg?impolicy=og_images",
        "publishedAt": "2023-02-06T05:00:00Z",
        "content": "Tesla Model 3 ab 629 pro Monat\r\nDas Auto-Abo von Sixt+: 12 Monate Mindestlaufzeit, 500 Kilometer pro Monat inklusive. Flexible Kilometerpakete optional. Jetzt informieren!"
        },
        {
        "source": {
        "id": null,
        "name": "Businessinsider.de"
        },
        "author": "Barbara Barkhausen",
        "title": "Nach Microsoft investiert auch Google mehrere hundert Millionen Dollar in ein KI-Startup",
        "description": "Die Google-Beteiligung an der Firma Anthropic ähnelt Microsofts Investment in ChatGPT-Macher OpenAI. Außerdem: Elon Musk triumphiert vor Gericht.",
        "url": "https://www.businessinsider.de/gruenderszene/business/google-investition-ki-startup/",
        "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2023/02/GettyImages-1246739608.jpg?ver=1675504080",
        "publishedAt": "2023-02-06T04:55:00Z",
        "content": "Die Google-Beteiligung an der Firma Anthropic ähnelt Microsofts Investment in ChatGPT-Macher OpenAI. Außerdem: Elon Musk triumphiert vor Gericht und Twitter macht neue Pläne.\r\nGuten Morgen! Auch währ… [+4902 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "Columbia Care management to meet with Cantor Fitzgerald",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656978/CCHWF-Columbia-Care-management-to-meet-with-Cantor-Fitzgerald",
        "urlToImage": "https://thefly.com/images/meta/converenceevents.jpg",
        "publishedAt": "2023-02-06T04:46:15Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gadgets360.com"
        },
        "author": "ANI",
        "title": "Elon Musk Says He Had to Save Twitter From Bankruptcy in Last 3 Months",
        "description": "Twitter and Tesla CEO Elon Musk on Sunday said that the past three months have been \"extremely tough\" as he \"had to save Twitter from bankruptcy\" while also fulfilling his duties in Tesla and SpaceX. Taking to his official Twitter handle, Musk said that the m…",
        "url": "https://www.gadgets360.com/apps/news/twitter-ceo-elon-musk-bankruptcy-extremely-tough-three-months-tesla-spacex-revenue-3756364",
        "urlToImage": "https://i.gadgets360cdn.com/large/Musk_twitter_reuters_large_1666930091840.jpg",
        "publishedAt": "2023-02-06T04:32:43Z",
        "content": "Twitter and Tesla CEO Elon Musk on Sunday said that the past three months have been \"extremely tough\" as he \"had to save Twitter from bankruptcy\" while also fulfilling his duties in Tesla and SpaceX.… [+2396 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo Australia"
        },
        "author": "Asha Barbaschow",
        "title": "9 Sci-Fi, Fantasy and Action Movies We Reckon Are Worth Watching on Paramount+",
        "description": "Looking for something to watch on Paramount+?\nThe post 9 Sci-Fi, Fantasy and Action Movies We Reckon Are Worth Watching on Paramount+ appeared first on Gizmodo Australia.\n\n  Related Stories\r\n<ul><li>The Easy Way to Set up a New MacBook Using Migration Assista…",
        "url": "https://www.gizmodo.com.au/2023/02/best-sci-fi-movies-paramount/",
        "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/02/06/gizmodo-10-1.png?quality=80&resize=1280,720",
        "publishedAt": "2023-02-06T04:29:24Z",
        "content": "Paramount+ is still finding its feet in Australia. While it doesn’t have a catalogue comparable to the likes of Disney+, Netflix or Amazon Prime Video, there are still a bunch of action, fantasy and … [+4494 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Overclockers.ru"
        },
        "author": "Алексей Сычёв",
        "title": "Прототип Tesla Cybertruck продемонстрировал способность подруливать задними колёсами",
        "description": "Это сокращает радиус разворота.",
        "url": "https://overclockers.ru/hardnews/show/123857/prototip-tesla-cybertruck-prodemonstriroval-sposobnost-podrulivat-zadnimi-kolesami",
        "urlToImage": "https://overclockers.ru/st/images/preview/dRczAgeIjfYIMjgr.jpg",
        "publishedAt": "2023-02-06T04:16:00Z",
        "content": ". , Tesla Cybertruck .\r\n , . (Elon Musk) , Cybertruck , .\r\n, , Tesla , . , , , -."
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "SEC Small Business Capital Formation Advisory Committee to hold a meeting",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656977/-SEC-Small-Business-Capital-Formation-Advisory-Committee-to-hold-a-meeting",
        "urlToImage": "https://thefly.com/images/meta/converenceevents.jpg",
        "publishedAt": "2023-02-06T04:14:27Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Haber7.com"
        },
        "author": "Bahadır ALEMDAR",
        "title": "Elon Musk'tan şiddetli deprem sonrası son dakika 'Türkiye' açıklaması: Anında göndeririz!",
        "description": "Son dakika... Türkiye'de meydana gelen peş peşe yıkıcı depremlerin ardından iletişim sıkıntısı yaşanmaması için Tesla ve SpaceX'in sahibi Elon Musk, bir Türk kullanıcı tarafından kendisine gelen kritik mesaja cevap verdi.",
        "url": "https://www.haber7.com/guncel/haber/3299753-elon-musktan-siddetli-deprem-sonrasi-son-dakika-turkiye-aciklamasi-aninda-gondeririz",
        "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2023/06/elon_musktan_siddetli_deprem_sonrasi_son_dakika_turkiye_aciklamasi_aninda_gondeririz_1675656962_5034.jpg",
        "publishedAt": "2023-02-06T04:14:00Z",
        "content": "Son dakikahaberi... Türkiye'nin dousunda meydana gelen pe pee ykc depremlerinden ardndan Elon Musk, Twitter hesab üzerinden kendine gelen \"Starlink uydularnz için yardm etme ansnz var m?\" mesajn gönd… [+263 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Thefly.com"
        },
        "author": null,
        "title": "House Energy & Commerce Committee to hold a joint subcommittee hearing",
        "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
        "url": "https://thefly.com/permalinks/entry.php/id3656976/-House-Energy-amp-Commerce-Committee-to-hold-a-joint-subcommittee-hearing",
        "urlToImage": "https://thefly.com/images/meta/converenceevents.jpg",
        "publishedAt": "2023-02-06T04:07:27Z",
        "content": "Catch up on the…\r\nCatch up on the weekend's top five stories with this list compiled by The Fly: 1. Public Storage (PSA) sent a letter to Mark G. Barberio, Life Storage's (LSI) Chairman, and Joseph V… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Anja Ettel, Holger Zschäpitz",
        "title": "Warnung vor der Gier-Raylle und fette Gewinne mit Schlankmachern",
        "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Anja Ettel und Holger Zschäpitz über neue Spannungen zwischen den Supermächten, Deutsche Post im Streik-Stress und verraten, welcher der beiden Hosts den Börsengang von Ionos gezeichnet …",
        "url": "https://www.welt.de/podcasts/alles-auf-aktien/article243617581/Boersen-Podcast-Warnung-vor-der-Gier-Raylle-und-fette-Gewinne-mit-Schlankmachern.html",
        "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile228293627/5361351857-ci16x9-w1200/DWO-Podcast-AllesaufAktien-Zschaepitz-Ettel.jpg",
        "publishedAt": "2023-02-06T04:05:44Z",
        "content": "Außerdem geht es um Porsche, Tesla, Leoni, Alphabet, Wal Disney, Carvana, AMC PRF, Coinbase, Peloton, Microstrategy, Virgin Galctic, Upstart, Beyond Meat, Palantir, GameSTop, Bad Bad &amp; Beyond, Ro… [+330 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Anja Ettel, Holger Zschäpitz",
        "title": "Warnung vor der Gier-Rallye und fette Gewinne mit Schlankmachern",
        "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Anja Ettel und Holger Zschäpitz über neue Spannungen zwischen den Supermächten, Deutsche Post im Streik-Stress und verraten, welcher der beiden Hosts den Börsengang von Ionos gezeichnet …",
        "url": "https://www.welt.de/podcasts/alles-auf-aktien/article243617581/Boersen-Podcast-Warnung-vor-der-Gier-Rallye-und-fette-Gewinne-mit-Schlankmachern.html",
        "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile228293627/5361351857-ci16x9-w1200/DWO-Podcast-AllesaufAktien-Zschaepitz-Ettel.jpg",
        "publishedAt": "2023-02-06T04:05:44Z",
        "content": "Außerdem geht es um Porsche, Tesla, Leoni, Alphabet, Wal Disney, Carvana, AMC PRF, Coinbase, Peloton, Microstrategy, Virgin Galctic, Upstart, Beyond Meat, Palantir, GameSTop, Bad Bad &amp; Beyond, Ro… [+330 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New Atlas"
        },
        "author": "Loz Blain",
        "title": "South Australia plans world's largest electrolyzer and H2 power plant",
        "description": "The state that built the world's first grid-level \"big battery\" is striking out on an even more ambitious green energy project: the world's biggest hydrogen power station, fed by an electrolysis facility 10 times larger than anything running today.Continue Re…",
        "url": "https://newatlas.com/energy/south-australia-hydrogen-power/",
        "urlToImage": "https://assets.newatlas.com/dims4/default/4192436/2147483647/strip/true/crop/2709x1422+0+305/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F12%2F57%2Fd68e8e084504b9bfedb3f811375c%2Fdepositphotos-5215842-xl.jpg&na.image_optimisation=0",
        "publishedAt": "2023-02-06T04:05:12Z",
        "content": "The state that built the world's first grid-level \"big battery\" is striking out on an even more ambitious green energy project: the world's biggest hydrogen power station, fed by an electrolysis faci… [+3896 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo Australia"
        },
        "author": "Asha Barbaschow",
        "title": "The Easy Way to Set up a New MacBook Using Migration Assistant",
        "description": "Looking to copy content from an old MacBook to a new one? \nThe post The Easy Way to Set up a New MacBook Using Migration Assistant appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>The Easy Way to Set up a New MacBook Using Migration Assistant -…",
        "url": "https://www.gizmodo.com.au/2023/02/macbook-migration-assistant-copy-old-to-new/",
        "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/02/06/gizmodo-9-1.png?quality=80&resize=1280,720",
        "publishedAt": "2023-02-06T03:57:11Z",
        "content": "I’m currently reviewing the new M2 MacBook Pro, and as I use the previous Pro (the 2021 14-inch model featuring the M1 Max chip) every day for work, I didn’t want to start right back at the beginning… [+4244 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Kocpc.com.tw"
        },
        "author": "ClaireC",
        "title": "馬斯克說計畫與 Twitter 創作者分享廣告收入，前提是你要先付錢",
        "description": "Twitter 自從被 Tesla 老闆馬斯克收購之後經常宣布出人意料的新方向。近日馬斯克宣布繼戶與創作者分享廣告收入，這些廣告將會以一個嵌入回覆的方式出現，雖然目前還沒有完整的分潤細節，唯一比較明確的是想要分錢之前，你必須先付錢成為訂閱用戶。\nThe post 馬斯克說計畫與 Twitter 創作者分享廣告收入，前提是你要先付錢 appeared first on 電腦王阿達.",
        "url": "https://www.kocpc.com.tw/archives/479268",
        "urlToImage": "https://www.kocpc.com.tw/wp-content/uploads/2022/07/1657349747-1a38ee093e7c9370884d632169c986fc.jpg",
        "publishedAt": "2023-02-06T03:54:13Z",
        "content": "Twitter Tesla \r\n Twitter 11 Twitter \r\nLets see what happens when Twitter offers good video with higher compensation for creators \r\n Elon Musk (@elonmusk) November 22, 2022\r\nTwitter API \r\nTwitter Blue… [+195 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Tesla Raised Prices. A Used One May Still Cost More",
        "description": "Tesla just raised the price of its Model Y, but used car buyers looking for an electric vehicle in 2023 could end up paying more than the price of a new EV if they are not careful. Fluctuating pricing and new tax credits are why. Online used car seller Carvan…",
        "url": "https://biztoc.com/x/a90ce420d782a77f",
        "urlToImage": "https://c.biztoc.com/p/a90ce420d782a77f/og.webp",
        "publishedAt": "2023-02-06T03:46:04Z",
        "content": "Tesla just raised the price of its Model Y, but used car buyers looking for an electric vehicle in 2023 could end up paying more than the price of a new EV if they are not careful. Fluctuating pricin… [+236 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hurriyet.com.tr"
        },
        "author": "Fulya Soybaş",
        "title": "Depremi HAARP mı tetikledi",
        "description": "İstanbul’da dün 03.15’te merkez üssü Kâğıthane olan 3.1 büyüklüğündeki deprem, çoğumuz tarafından hissedilmedi bile ancak Prof. Dr. Okan Tüysüz’ün katıldığı bir yayında ‘Bu bölgede aktif bir fay yok’ açıklaması, endişeden çok komplo teorilerini tetikledi. Teo…",
        "url": "https://www.hurriyet.com.tr/yazarlar/fulya-soybas/depremi-haarp-mi-tetikledi-42215518",
        "urlToImage": "https://i4.hurimg.com/i/hurriyet/75/1200x675/63c4e6bb4e3fe116ec5f319f.jpg",
        "publishedAt": "2023-02-06T03:28:00Z",
        "content": "p&gt;STANBULDA YIKICI DEPREM ÜRETECEK AKTF FAY YOK\r\nSTANBUL Teknik Üniversitesi Öretim Üyesi, Jeolog Prof. Dr. Okan Tüysüz, depremin hemen ardndan katld yaynda, Bu bölgede (Kâthane) aktif fay yok. O … [+5098 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Technews.tw"
        },
        "author": "Unwire HK",
        "title": "傳特斯拉亞洲再設生產基地，選址印尼將籌建多間廠房",
        "description": "特斯拉（Tesla）在美洲、歐洲和亞洲都有超級工廠，亞洲工廠在上海，消息指特斯拉計劃亞洲增加一座超級工廠，選址則在印尼，消息人士更透露特斯拉已快與政府簽約。選擇印尼的主要原因，據說是當地有豐富鎳礦，正是製造電動車電池的關鍵材料。 雖然簽約前仍有不少變數，但消息人士指特斯拉一旦確定印尼設廠，將興建多座...",
        "url": "https://technews.tw/2023/02/06/tesla-may-be-finalizing-plans-for-indonesia-plant/",
        "urlToImage": "https://img.technews.tw/wp-content/uploads/2023/02/04142510/An-aerial-view-of-the-Tesla-Gigafactory-near-Sparks-Nevada-U.S.-August-18-2018.-REUTERSBob-Strong-RTS1XUON-e1675491943870.jpg",
        "publishedAt": "2023-02-06T03:15:07Z",
        "content": "© 2013-2023 TechNews Inc. All rights reserved. | | | |"
        },
        {
        "source": {
        "id": null,
        "name": "Vnexpress.net"
        },
        "author": "VnExpress",
        "title": "Tesla Cybertruck bản thương mại lộ diện",
        "description": "Mỹ- Mẫu Cybertruck bản prototype với những tính năng nâng cấp bị bắt gặp chạy trên đường phố ở California.",
        "url": "https://vnexpress.net/tesla-cybertruck-ban-thuong-mai-lo-dien-4567157.html",
        "urlToImage": "https://i2-vnexpress.vnecdn.net/2023/02/06/TeslaCybertruck1-1675649807-3666-1675649946.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=jfZJYO3imLZpBrAhJdHp9Q",
        "publishedAt": "2023-02-06T03:03:35Z",
        "content": "MMu Cybertruck bn prototype vi nhng tính nng nâng cp b bt gp chy trên ng ph California.n lúc này, Tesla ch có 2-3 bn prototype (nguyên mu) ca xe bán ti in Cybertruck. Trong mt cuc hp báo cáo kt qu tà… [+1776 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Tesla Raised Prices. A Used One May Still Cost More",
        "description": "Tesla just raised the price of its Model Y, but used car buyers looking for an electric vehicle in 2023 could end up paying more than the price of a new EV if they are not careful. Fluctuating pricing and new tax credits are why. Online used car seller Carvan…",
        "url": "https://biztoc.com/x/e0dd9f0a1db621de",
        "urlToImage": "https://c.biztoc.com/p/e0dd9f0a1db621de/og.webp",
        "publishedAt": "2023-02-06T03:00:10Z",
        "content": "Tesla just raised the price of its Model Y, but used car buyers looking for an electric vehicle in 2023 could end up paying more than the price of a new EV if they are not careful. Fluctuating pricin… [+236 chars]"
        }
        ]
        })
}) 
// app.post("/news/api/data",(req,res)=>{
//     // const userName = req.body.name 
//     res.send("<h1>Done</h1>")
//     console.log(req.body)
// })
app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`)
})