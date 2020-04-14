var margin={left:45,right:20,top:25, bottom:145};
var width=550,
    height=400,
    gridSize=50;

var fulldata=[
  {
    "region": "Акмолинская",
    "name": "Ергалиев Жабал Ергалиевич",
    "effective_year": "2011—2017",
    "comment": "Избран от Акмолинской области в 2011 году",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Север"
  },
  {
    "region": "Акмолинская",
    "name": "Акимов Рашит Каиржанович",
    "effective_year": "2014—",
    "comment": "Избран от Акмолинской области в 2014 году[12]",
    "participant": 19,
    "initiator": 1,
    "id": "/ru-RU/blog/52/biography",
    "photo": "/storage/6b8b15b655b340eca2a6cbb6eac03d48.jpg",
    "position": "Секретарь Комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Север"
  },
  {
    "region": "Акмолинская",
    "name": "Адильбеков Даурен Зекенович",
    "effective_year": "2017—",
    "comment": "Избран от Акмолинской области в 2017 году[6]",
    "participant": 7,
    "initiator": 6,
    "id": "/ru-RU/blog/32/biography",
    "photo": "/storage/f792f97d80504b4e8640f3dcc03e1d91.jpg",
    "position": "Секретарь Комитета по экономической политике, инновационному развитию и предпринимательству",
    "y": "Север"
  },
  {
    "region": "Актюбинская",
    "name": "Джумагазиев Мухтар Сабирович",
    "effective_year": "2017—",
    "comment": "Избран от Актюбинской области в 2017 году[6]",
    "participant": 21,
    "initiator": 5,
    "id": "/ru-RU/blog/269/biography",
    "photo": "/storage/c1e080adb7a74df1a4b569f6182acd76.png",
    "position": "Член комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Запад"
  },
  {
    "region": "Актюбинская",
    "name": "Сагиндыков Елеусин Наурызбаевич",
    "effective_year": "2002—2004, 2011—2017",
    "comment": "Избран от Актюбинской области в 2011 году[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Запад"
  },
  {
    "region": "Актюбинская",
    "name": "Тагимов Марат Мурзагалиевич",
    "effective_year": "2014—",
    "comment": "Избран от Актюбинской области в 2014 году[28]",
    "participant": 32,
    "initiator": 6,
    "id": "/ru-RU/blog/788/biography",
    "photo": "/storage/2d6aba40bc12452686c1d53e2326e9f5.jpg",
    "position": "Член комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Запад"
  },
  {
    "region": "Алматиская",
    "name": "Кылышбаев Нурлан Наурызович",
    "effective_year": "2016—",
    "comment": "Избран от Алматинской области в 2016 и 2017 годах[6]",
    "participant": 20,
    "initiator": 3,
    "id": "/ru-RU/blog/533/biography",
    "photo": "/storage/a5dbc8a3e8e4457695ff8b7d8d6b63e4.jpg",
    "position": "Член комитета по финансам и бюджету",
    "y": "Юг"
  },
  {
    "region": "Алматиская",
    "name": "Мусаханов Ансар Турсунканович",
    "effective_year": "2014—",
    "comment": "Избран от Алматинской области в 2014 году[12]",
    "participant": 18,
    "initiator": 6,
    "id": "/ru-RU/blog/586/biography",
    "photo": "/storage/250af9277f9c45bf9fe70f739c3fa383.jpg",
    "position": "Член комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Юг"
  },
  {
    "region": "Алматы",
    "name": "Мукашев Тулеубек Тулеуович",
    "effective_year": "2014—",
    "comment": "Избран от города Алматы в 2014 году[12]",
    "participant": 25,
    "initiator": 6,
    "id": "/ru-RU/blog/580/biography",
    "photo": "/storage/00a835a5320a46cea52b5f3c911f415f.jpg",
    "position": "Секретарь Комитета по международным отношениям, обороне и безопасности",
    "y": "Юг"
  },
  {
    "region": "Алматы",
    "name": "Бижанов Ахан Хусаинович",
    "effective_year": "2005—2017",
    "comment": "Избран от города Алматы в 2005 и 2011 годах[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Юг"
  },
  {
    "region": "Алматы",
    "name": "Нукетаева Динар Жусупалиевна",
    "effective_year": "2017—",
    "comment": "Избрана от города Алматы в 2017 году[6]",
    "participant": 26,
    "initiator": 6,
    "id": "/ru-RU/blog/617/biography",
    "photo": "/storage/b954c69f8b7f4ed18aa6002fbc4e3eae.jpg",
    "position": "Член комитета по социально-культурному развитию и науке",
    "y": "Юг"
  },
  {
    "region": "Астана",
    "name": "Джаксыбеков Серик Рыскельдинович",
    "effective_year": "2014—",
    "comment": "Избран от города Астаны (сейчас — Нур-Султан) в 2014 году[12]",
    "participant": 23,
    "initiator": 2,
    "id": "/ru-RU/blog/254/biography",
    "photo": "/storage/bbb78c7734904e2da4e63b43df9f82d3.jpg",
    "position": "Председатель комитета по экономической политике, инновационному развитию и предпринимательству",
    "y": "Север"
  },
  {
    "region": "Астана",
    "name": "Редкокашин Владимир Николаевич",
    "effective_year": "2011—2017",
    "comment": "Избран от города Астаны (сейчас — Нур-Султан) в 2011 году[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Север"
  },
  {
    "region": "Астана",
    "name": "Мамытбеков Едил Куламкадырович",
    "effective_year": "2017—",
    "comment": "Избран от города Астаны (сейчас — Нур-Султан) в 2017 году[6]",
    "participant": 25,
    "initiator": 11,
    "id": "/ru-RU/blog/552/biography",
    "photo": "/storage/66827ead2bf5475ab3632a0e8ba3ee97.jpg",
    "position": "Член комитета по экономической политике, инновационному развитию и предпринимательству",
    "y": "Север"
  },
  {
    "region": "Атырауская",
    "name": "Дюсембаев Гумар Ислямович",
    "effective_year": "2017—",
    "comment": "Избран от Атырауской области в 2017 году[6]",
    "participant": 0,
    "initiator": 0,
    "id": "/ru-RU/blog/929/biography",
    "photo": "/storage/ea19e3946b5f48709aff1469b442b058.jpg",
    "position": "Член комитета по финансам и бюджету",
    "y": "Запад"
  },
  {
    "region": "Атырауская",
    "name": "Енсегенов Сарсенбай Курманулы",
    "effective_year": "2008—",
    "comment": "Избран от Атырауской области в 2008 и 2014 годах[12]",
    "participant": 37,
    "initiator": 20,
    "id": "/ru-RU/blog/303/biography",
    "photo": "/storage/01867f8763954a3ab514316b40866ffd.jpg",
    "position": "Член комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Запад"
  },
  {
    "region": "Атырауская",
    "name": "Ищанов Кайрат Кыдрбаевич",
    "effective_year": "2005—2017",
    "comment": "Избран от Атырауской области в 2005 и 2011 годах[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Запад"
  },
  {
    "region": "ВКО",
    "name": "Абайдильдин Талгатбек Жамшитович",
    "effective_year": "2005—2017",
    "comment": "Избран от Восточно-Казахстанской области в 2005 и 2011 годах[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Восток"
  },
  {
    "region": "ВКО",
    "name": "Мусин Дуйсенгазы Магауянович",
    "effective_year": "2017—",
    "comment": "Избран от Восточно-Казахстанской области в 2017 году[6]",
    "participant": 18,
    "initiator": 6,
    "id": "/ru-RU/blog/588/biography",
    "photo": "/storage/13309eedd5244c27a3c81e4460ad1d12.jpg",
    "position": "Член комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Восток"
  },
  {
    "region": "ВКО",
    "name": "Плотников Сергей Викторович",
    "effective_year": "2008—",
    "comment": "Избран от Восточно-Казахстанской области в 2008 и 2014 годах[12]",
    "participant": 18,
    "initiator": 4,
    "id": "/ru-RU/blog/671/biography",
    "photo": "/storage/d7683f7ec8ff468a88fa75f066194ea2.jpg",
    "position": "Член комитета по финансам и бюджету",
    "y": "Восток"
  },
  {
    "region": "Жамбылская",
    "name": "Жолдасбаев Муратбай Сматаевич",
    "effective_year": "2014—",
    "comment": "Избран от Жамбылской области в 2014 году[12]",
    "participant": 31,
    "initiator": 3,
    "id": "/ru-RU/blog/343/biography",
    "photo": "/storage/9e4ad35ac4a146c596a14eac2d2db800.jpg",
    "position": "Член комитета по экономической политике, инновационному развитию и предпринимательству",
    "y": "Юг"
  },
  {
    "region": "Жамбылская",
    "name": "Астаев Ертаргын Какимбекович",
    "effective_year": "2011—2017",
    "comment": "Избран от Жамбылской области в 2011 году[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Юг"
  },
  {
    "region": "Жамбылская",
    "name": "Нуралиев Абдалы Токбергенович",
    "effective_year": "2017—",
    "comment": "Избран от Жамбылской области в 2017 году[6]",
    "participant": 17,
    "initiator": 7,
    "id": "/ru-RU/blog/618/biography",
    "photo": "/storage/301dadb794cf4d02b5a41b9ebe33b9d2.jpg",
    "position": "Член комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Юг"
  },
  {
    "region": "ЗКО",
    "name": "Ахметов Рашит Сайранович",
    "effective_year": "1999—2017",
    "comment": "Избран от Западно-Казахстанской области в 2005 и 2011 годах[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Запад"
  },
  {
    "region": "ЗКО",
    "name": "Мукаев Ербулат Рахметович",
    "effective_year": "2008—",
    "comment": "Избран от Западно-Казахстанской области в 2008 и 2014 годах[12]",
    "participant": 22,
    "initiator": 4,
    "id": "/ru-RU/blog/572/biography",
    "photo": "/storage/fff9c80c1e16458db9cc1cec6cc10446.jpg",
    "position": "Секретарь Комитета по финансам и бюджету",
    "y": "Запад"
  },
  {
    "region": "ЗКО",
    "name": "Турегалиев Нариман",
    "effective_year": "2017—",
    "comment": "Избран от Западно-Казахстанской области в 2017 году[6]",
    "participant": 26,
    "initiator": 12,
    "id": "/ru-RU/blog/820/biography",
    "photo": "/storage/3ded861bc406403db5f7c022600b1803.jpg",
    "position": "Член комитета по социально-культурному развитию и науке",
    "y": "Запад"
  },
  {
    "region": "Карагандинская",
    "name": "Ершов Сергей Михайлович",
    "effective_year": "2014—",
    "comment": "Избран от Карагандинской области в 2014 году[12]",
    "participant": 21,
    "initiator": 2,
    "id": "/ru-RU/blog/316/biography",
    "photo": "/storage/f675fb1ba80d4f868d7047b17b19c04c.jpg",
    "position": "Член комитета по социально-культурному развитию и науке",
    "y": "Север"
  },
  {
    "region": "Карагандинская",
    "name": "Акылбай Серик Байсеитулы",
    "effective_year": "2005—2017",
    "comment": "Избран от Карагандинской области в 2005 и 2011 годах[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Север"
  },
  {
    "region": "Карагандинская",
    "name": "Абдикеров Рыскали Калиакбарович",
    "effective_year": "2017—",
    "comment": "Избран от Карагандинской области в 2017 году[6]",
    "participant": 34,
    "initiator": 8,
    "id": "/ru-RU/blog/5/biography",
    "photo": "/storage/512d00f602fe4f3c961457d30250d28a.jpg",
    "position": "Член комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Север"
  },
  {
    "region": "Костанайская",
    "name": "Бектурганов Серик Чингисович",
    "effective_year": "2014—",
    "comment": "Избран от Костанайской области в 2014 году[12]",
    "participant": 17,
    "initiator": 1,
    "id": "/ru-RU/blog/177/biography",
    "photo": "/storage/2ec410b092334fceba5398ed959af59a.jpg",
    "position": "Секретарь Комитета по социально-культурному развитию и науке",
    "y": "Север"
  },
  {
    "region": "Костанайская",
    "name": "Нургалиев Женис Мирасович",
    "effective_year": "2010—",
    "comment": "Избран от Костанайской области в 2010 и 2017 годах[6]",
    "participant": 17,
    "initiator": 0,
    "id": "/ru-RU/blog/623/biography",
    "photo": "/storage/6c322320ca0c400c985ec8b2405a587a.png",
    "position": "Член комитета по финансам и бюджету",
    "y": "Север"
  },
  {
    "region": "Кызылординская",
    "name": "Бактиярулы Мурат",
    "effective_year": "2011—",
    "comment": "Избран от Кызылординской области в 2011 и 2017 годах[6]",
    "participant": 21,
    "initiator": 10,
    "id": "/ru-RU/blog/144/biography",
    "photo": "/storage/ea5b7139bea84a75bbe53837202d23a0.png",
    "position": "Председатель комитета по социально-культурному развитию и науке",
    "y": "Юг"
  },
  {
    "region": "Кызылординская",
    "name": "Еламанов Бекмырза Кайыпулы",
    "effective_year": "2014—",
    "comment": "Избран от Кызылординской области в 2014 году",
    "participant": 21,
    "initiator": 4,
    "id": "/ru-RU/blog/295/biography",
    "photo": "/storage/89134bd542ef49e0a06e52d21dce1b34.jpg",
    "position": "Член комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Юг"
  },
  {
    "region": "Мангистауская",
    "name": "Бортник Михаил Михайлович",
    "effective_year": "2008—",
    "comment": "Избран от Мангистауской области в 2008 и 2014 годах[12]",
    "participant": 31,
    "initiator": 7,
    "id": "/ru-RU/blog/208/biography",
    "photo": "/storage/123b04f1a77c42afac484d91202dacf7.jpg",
    "position": "Член комитета по экономической политике, инновационному развитию и предпринимательству",
    "y": "Запад"
  },
  {
    "region": "Мангистауская",
    "name": "Чельпеков Бактыбай Акбердыевич",
    "effective_year": "2011—",
    "comment": "Избран от Мангистауской области в 2011 и 2017 годах[6]",
    "participant": 11,
    "initiator": 2,
    "id": "/ru-RU/blog/878/biography",
    "photo": "/storage/61b7607414694c3f84a051d9a0653d43.jpg",
    "position": "Член комитета по финансам и бюджету",
    "y": "Запад"
  },
  {
    "region": "Павлодарская",
    "name": "Кузеков Асхат Сайпиевич",
    "effective_year": "2011—2017",
    "comment": "Избран от Павлодарской области в 2011 году[5]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Север"
  },
  {
    "region": "Павлодарская",
    "name": "Нурсипатов Нуржан Нурланбекович",
    "effective_year": "2017—",
    "comment": "Избран от Павлодарской области в 2017 году[6]",
    "participant": 20,
    "initiator": 10,
    "id": "/ru-RU/blog/635/biography",
    "photo": "/storage/4093dabb64d247a9b28fb27dd3e0345d.jpg",
    "position": "Член комитета по международным отношениям, обороне и безопасности",
    "y": "Север"
  },
  {
    "region": "Павлодарская",
    "name": "Кубенов Манат Шарапиденович",
    "effective_year": "2014—",
    "comment": "Избран от Павлодарской области в 2014 году[12]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Север"
  },
  {
    "region": "СКО",
    "name": "Перепечина Ольга Валентиновна",
    "effective_year": "2014—",
    "comment": "Избрана от Северо-Казахстанской области в 2014 году[12]",
    "participant": 10,
    "initiator": 6,
    "id": "/ru-RU/blog/663/biography",
    "photo": "/storage/c41f403d1b3f421a997b4ee29035329e.jpg",
    "position": "Председатель комитета по финансам и бюджету",
    "y": "Север"
  },
  {
    "region": "СКО",
    "name": "Султанов Ерик Хамзинович",
    "effective_year": "2017—",
    "comment": "Избран от Северо-Казахстанской области в 2017 году[6]",
    "participant": 26,
    "initiator": 4,
    "id": "/ru-RU/blog/770/biography",
    "photo": "/storage/48bc251ba4304e768ef227df74cb8c12.jpg",
    "position": "Член комитета по экономической политике, инновационному развитию и предпринимательству",
    "y": "Север"
  },
  {
    "region": "СКО",
    "name": "Билялов Серик Султангазинович",
    "effective_year": "2013—",
    "comment": "Избран от Северо-Казахстанской области в 2013[16] и 2014 годах",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Север"
  },
  {
    "region": "Указ",
    "name": "Сулеймен Ляззат Жанылыскызы",
    "effective_year": "2019—",
    "comment": "Назначена указом президента[24]",
    "participant": 1,
    "initiator": 0,
    "id": "/ru-RU/blog/933/biography",
    "photo": "/storage/40983dd8a212491293a6d1b98732ae88.jpg",
    "position": "Член комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Адырбеков Икрам Адырбекович",
    "effective_year": "2011—2017",
    "comment": "Назначен указом президента в 2011 году[8]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Айтпаева Сауле Муханбедиановна",
    "effective_year": "2017—",
    "comment": "Назначена указом президента в 2017 году[11]",
    "participant": 21,
    "initiator": 12,
    "id": "/ru-RU/blog/50/biography",
    "photo": "/storage/bce276dd89444d3991cca93c740e141f.jpg",
    "position": "Член комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Бобров Владимир Яковлевич",
    "effective_year": "2012—2016",
    "comment": "Назначен указом президента[17]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Ким Георгий Владимирович",
    "effective_year": "2013—2019",
    "comment": "Назначен указом президента[10]",
    "participant": 25,
    "initiator": 3,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Абыкаев Нуртай Абыкаевич",
    "effective_year": "2004—2007, 2015—2017",
    "comment": "Назначен указом президента 25 декабря 2015 года[7]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Громов Сергей Николаевич",
    "effective_year": "2013—2019",
    "comment": "Назначен указом президента[10]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Киинов Ляззат Кетебаевич",
    "effective_year": "2013—2017",
    "comment": "Назначен указом президента[10]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Кул-Мухаммед Мухтар Абрарулы",
    "effective_year": "1999—2001, 2018—",
    "comment": "Назначен указом президента в 2018[23] и 2019 годах[24]",
    "participant": 16,
    "initiator": 0,
    "id": "/ru-RU/blog/520/biography",
    "photo": "/storage/ee3177a9076b4b5b8867be703c0ea464.jpg",
    "position": "Председатель комитета по международным отношениям, обороне и безопасности",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Айтимова Бырганым Сариевна",
    "effective_year": "1996, 2013—2019",
    "comment": "Назначена указом президента в 2013 году[10]",
    "participant": 21,
    "initiator": 12,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Бекназаров Бектас Абдыханович",
    "effective_year": "2014—",
    "comment": "Назначен указом президента 11 августа 2014 года[14]",
    "participant": 1,
    "initiator": 0,
    "id": "/ru-RU/blog/170/biography",
    "photo": "/storage/f55b4a42e3e5441690abc5c76f6e16dc.jpg",
    "position": "Заместитель Председателя Сената Парламента Республики Казахстан",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Жумагулов Бакытжан Турсынович",
    "effective_year": "2017—",
    "comment": "Назначен указом президента[11]",
    "participant": 22,
    "initiator": 1,
    "id": "/ru-RU/blog/356/biography",
    "photo": "/storage/1b978ea5d42642e385ba1a5ecc1ef6df.jpg",
    "position": "Член комитета по социально-культурному развитию и науке",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Жусип Нурторе Байтелесович",
    "effective_year": "2019—",
    "comment": "Назначен указом президента в 2019 году[18]",
    "participant": 0,
    "initiator": 0,
    "id": "/ru-RU/blog/932/biography",
    "photo": "/storage/3a995501143f49be8ebe811ddfe90050.jpg",
    "position": "Член комитета по социально-культурному развитию и науке",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Лукин Андрей Иванович",
    "effective_year": "2019—",
    "comment": "Назначен указом президента[24]",
    "participant": 1,
    "initiator": 1,
    "id": "/ru-RU/blog/936/biography",
    "photo": "/storage/537dfc554d7a4fd28c7f5870ad605021.jpg",
    "position": "Член комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Куставлетов Дулат Рашитович",
    "effective_year": "2013—2019",
    "comment": "Назначен указом президента[10]",
    "participant": 22,
    "initiator": 8,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Полторабатько Людмила Григорьевна",
    "effective_year": "2011—2017",
    "comment": "Назначена указом президента[26]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Мусабаев Талгат Амангельдиевич",
    "effective_year": "2017—",
    "comment": "Назначен указом президента[11]",
    "participant": 24,
    "initiator": 4,
    "id": "/ru-RU/blog/584/biography",
    "photo": "/storage/23ddcaace56a4c4cb042a8647d4643ae.jpg",
    "position": "Член комитета по международным отношениям, обороне и безопасности",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Шакиров Аскар Оразалиевич",
    "effective_year": "2019—",
    "comment": "Назначен указом президента в 2019 году[18]",
    "participant": 0,
    "initiator": 0,
    "id": "/ru-RU/blog/935/biography",
    "photo": "/storage/ed139ce300004573808cbd7f80ef5401.jpg",
    "position": "Заместитель Председателя Сената Парламента Республики Казахстан",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Алтынбаев Мухтар Капашевич",
    "effective_year": "2010—2017",
    "comment": "Назначен указом президента 8 апреля 2010 года[13]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Назарбаева Дарига Нурсултановна",
    "effective_year": "2017—",
    "comment": "Назначена указом президента в 2017 и 2019 годах[24]. С 20 марта 2019 года — председатель сената[25]",
    "participant": 18,
    "initiator": 6,
    "id": "/ru-RU/blog/601/biography",
    "photo": "/storage/815b85acf71f43e891c50a86825c8e5c.jpg",
    "position": "Председатель Сената Парламента Республики Казахстан",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Сафинов Канатбек Бейсенбекович",
    "effective_year": "2019—",
    "comment": "Назначен указом президента[24]",
    "participant": 0,
    "initiator": 0,
    "id": "/ru-RU/blog/934/biography",
    "photo": "/storage/f86121d4d6bf4b5c8ed47544fbd1687c.jpg",
    "position": "Секретарь комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Бейсенбаев Аскар Асанович",
    "effective_year": "2013—2019",
    "comment": "Назначен указом президента в 2013 году[10]",
    "participant": 37,
    "initiator": 2,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Нуржигитова Дана Омирбаевна",
    "effective_year": "2019—",
    "comment": "Назначена указом президента[24]",
    "participant": 3,
    "initiator": 0,
    "id": "/ru-RU/blog/930/biography",
    "photo": "/storage/071046aa572b4ce0bd8862401cd31880.jpg",
    "position": "Член комитета по международным отношениям, обороне и безопасности",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Токаев Касым-Жомарт Кемелевич",
    "effective_year": "2007—2011, 2013—2019",
    "comment": "Назначен указом президента. С 11 января 2007 по 15 апреля 2011 года и с 16 октября 2013 по 20 марта 2019 года — председатель сената[29]. 20 марта 2019 года вступил в должность президента Казахстана как председатель сената парламента после отставки Нурсултана Назарбаева[30]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Оразалин Нурлан Мыркасымович",
    "effective_year": "2013—2016",
    "comment": "Назначен указом президента[10]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Волков Владимир Васильевич",
    "effective_year": "2017—",
    "comment": "Назначен указом президента 13 июля 2017 года[11]",
    "participant": 20,
    "initiator": 19,
    "id": "/ru-RU/blog/232/biography",
    "photo": "/storage/39d42742b32d4206ad846b72a6012516.jpg",
    "position": "Председатель комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Калетаев Дархан Аманович",
    "effective_year": "2016—2018",
    "comment": "Назначен указом президента[19]. 4 апреля 2018 года был назначен министром по делам религий и гражданского общества[20]",
    "participant": 11,
    "initiator": 1,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Кожамжаров Кайрат Пернешович",
    "effective_year": "2019—",
    "comment": "Назначен указом президента[22]",
    "participant": 4,
    "initiator": 2,
    "id": "/ru-RU/blog/926/biography",
    "photo": "/storage/b5ca62aab9f44865951661f08db3eb9c.jpg",
    "position": "Член комитета по международным отношениям, обороне и безопасности",
    "y": "Указ"
  },
  {
    "region": "Указ",
    "name": "Тусупбеков Рашид Толеутаевич",
    "effective_year": "2015—2019",
    "comment": "Назначен указом президента[31]",
    "participant": 27,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Указ"
  },
  {
    "region": "Шымкент",
    "name": "Капбарова Айгуль Жарылкасыновна",
    "effective_year": "2019—",
    "comment": "Избрана от города Шымкента в 2019 году[21]",
    "participant": 0,
    "initiator": 0,
    "id": "/ru-RU/blog/937/biography",
    "photo": "/storage/96d360a14d6543438a80595b6f2e16f1.jpg",
    "position": "Член комитета по социально-культурному развитию и науке",
    "y": "Юг"
  },
  {
    "region": "Шымкент",
    "name": "Бекназаров Нурлан Кудиярович",
    "effective_year": "2018—",
    "comment": "Избран от города Шымкента в 2018 году[15]",
    "participant": 6,
    "initiator": 0,
    "id": "/ru-RU/blog/921/biography",
    "photo": "/storage/b5ab522a76c04845a83b6788b5f3e948.jpg",
    "position": "Член комитета по конституционному законодательству, судебной системе и правоохранительным органам",
    "y": "Юг"
  },
  {
    "region": "Шымкент",
    "name": "Сатыбалды Дархан Амангельдиевич",
    "effective_year": "2018—2019",
    "comment": "Избран от города Шымкента в 2018 году[15]. 18 марта 2019 года был назначен чрезвычайным и полномочным послом в Узбекистане[27]",
    "participant": 7,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Юг"
  },
  {
    "region": "ЮКО",
    "name": "Куртаев Алимжан Сейтжанович",
    "effective_year": "2017—",
    "comment": "Избран от Южно-Казахстанской (сейчас — Туркестанской) области в 2017 году[6]",
    "participant": 21,
    "initiator": 10,
    "id": "/ru-RU/blog/524/biography",
    "photo": "/storage/ab6054d39b5e4309b053c397aaae6038.jpg",
    "position": "Член комитета по экономической политике, инновационному развитию и предпринимательству",
    "y": "Юг"
  },
  {
    "region": "ЮКО",
    "name": "Бектаев Али Абдикаримович",
    "effective_year": "2014—",
    "comment": "Избран от Южно-Казахстанской (сейчас — Туркестанской) области в 2014 году[12]",
    "participant": 13,
    "initiator": 11,
    "id": "/ru-RU/blog/172/biography",
    "photo": "/storage/252f0eb5a1e6493e95be4cc6e1344394.jpg",
    "position": "Председатель комитета по аграрным вопросам, природопользованию и развитию сельских территорий",
    "y": "Юг"
  },
  {
    "region": "ЮКО",
    "name": "Айтаханов Куаныш Айтаханулы",
    "effective_year": "2005—2017",
    "comment": "Избран от Южно-Казахстанской (сейчас — Туркестанской) области в 2005 и 2011 годах[9]",
    "participant": 0,
    "initiator": 0,
    "id": null,
    "photo": null,
    "position": null,
    "y": "Юг"
  }
]



var svg = d3.select("#chart").append("svg")
            .attr("viewBox","0 0 "+(width+margin.left+margin.right)+" "+(height+margin.top+margin.bottom)+"")
            .attr("fill","#eee")
            //.attr("width", width+margin.left+margin.right)
            //.attr("height",height+margin.bottom+margin.top)

var color = d3.scaleOrdinal().domain(d3.map(fulldata, d=>d.y).keys()).range(["#D73027", "#3182bd", "#c51b8a","#91CF60", "#1A9850"])




var regions=svg.append("g")
               .attr("transform","translate("+width/2+","+(470)+")")



 

var draw=function(id){
    var data = id!=null?fulldata.filter(d=>d.y==id):fulldata;
  svg.select(".scatter").remove()
  var g = svg.append("g").attr("class","scatter")
       .attr("transform","translate("+margin.left+","+margin.top+")")


    var x = d3.scaleLinear().domain([0,d3.max(data,d=>d.initiator)]).range([0,width])

    var xAxis = d3.axisBottom(x)

    g.append("g")
     .attr("transform","translate(0,"+height+")")
     .call(xAxis)


     var y = d3.scaleLinear().domain([0, d3.max(data, d=>d.participant)]).range([height,0])
     var yAxis = d3.axisLeft(y)

     g.append("g")
      .call(yAxis)
      .append("text")
      .attr("x")

    var tooltip = d3.select("body").append("div").attr("class","tooltip")

    var circles = g.selectAll("circle")
                   .data(data)
                   .enter()
                   .append("circle")
                   .attr("cx", d=>x(d.initiator))
                   .attr("cy", d=>y(d.participant))
                   .attr("r", "10px")
                   .attr("fill",d=>color(d.y))
                   .on("mouseover",function(d){
                     
                     tooltip.style("display","inline")
                            .attr("opacity",1)
                            .style("background-color",color(d.y))
                            .style("opacity",0.8)
                            .style("left", (d3.event.pageX) + "px") 
                            .style("top", (d3.event.pageY) + "px")
                            var path="http://senate.parlam.kz/"+d.photo;
                            var str=`<img src="${path}" alt="Smiley face">
                              <div class="person">
                                <div class="metrics">
                                <div class="val"><span>Инициатив</span><br>${d.initiator}</div>

                                <div class="val"><span>Участий</span><br>${d.participant}</div>  
                                </div>
                                <div class="name">${d.name}</div>
                            <div class="region">${d.region}</div>
                              </div>`
                      tooltip.html(str)
                        
                        
                        
                })
                .on("mouseout",function(d){
                    
                      d3.select(".tooltip").attr("opacity",0)
                    });


    g.append("text")
     .attr("transform","translate("+width/2+","+(height+30)+")")
     .text("Инициативность")

     g.append("text")
      .attr("transform","translate("+(-30)+","+(height/2)+") rotate(-90)")
      .text("Вовлеченность")


     var line = d3.line().x(d=>d3.median(data, d=>d.initiator)).y(d=>0)

     g.append("line")
      .attr("x1",x(d3.mean(data, d=>d.initiator)))
      .attr("x2",x(d3.mean(data, d=>d.initiator)))
      .attr("y1",0)
      .attr("y2", height)
      .attr("stroke","#ccc")

   g.append("text")
    .attr("x",x(d3.mean(data, d=>d.initiator)))
    .attr("y",0)
    .attr("class","avg_labels")
    .text("Cреднее значение: "+Math.round(100*d3.mean(data, d=>d.initiator))/100)
  
 g.append("text")
    .attr("x",width-70)
    .attr("y",y(d3.mean(data, d=>d.participant))+10)
    .attr("class","avg_labels")
    .text("Cреднее значение: "+Math.round(100*d3.mean(data, d=>d.participant))/100)
  

      g.append("line")
      .attr("y1",y(d3.mean(data, d=>d.participant)))
      .attr("y2",y(d3.mean(data, d=>d.participant)))
      .attr("x1",0)
      .attr("x2", width)
      .attr("stroke","#ccc")
}

 regions.selectAll("rect")
        .data(d3.map(fulldata, d=>d.y).keys())
        .enter()
        .append("rect")
        .attr("id",d=>d)
        .attr("width", 30)
        .attr("height", 30)
        .attr("x",(d,i)=>32*i)
        .attr("fill",d=>color(d))
        .on("click", function(d){

      var clicked=d3.select(this).classed("clicked")
      d3.selectAll("rect").classed("clicked",false)
      
      console.log(clicked)
            var id=d3.select(this).attr("id")
      d3.select(this).classed("clicked",!clicked)
            clicked?draw():draw(id)
        })

regions.selectAll("text")
       .data(d3.map(fulldata, d=>d.y).keys())
        .enter()
        .append("text")
        .attr("class","labels")
        .attr("text-anchor","middle")
        .attr("x",(d,i)=>16+32*i)
        .attr("y",50)
        .text(d=>d)


draw()

