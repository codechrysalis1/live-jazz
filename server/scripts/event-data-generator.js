/* eslint-disable no-console */

const fs = require('fs');

const rndLat = () => (Math.random() * (35.704248 - 35.661167)) + 35.661167;
const rndLng = () => (Math.random() * (139.769388 - 139.716144)) + 139.716144;
const rndInt = num => Math.floor(Math.random() * num);

const events = [
  'ヴォーカル・セッション',
  'ビューティフルナイト',
  'スプレンディッドナイト',
  'スタイリッシュナイト',
  'オトナのジャズナイト',
  'SPセッション',
  'コケティッシュナイト',
  'ハートウォーミングナイト',
  'ゴージャスナイト',
  'スタンダードナイト',
];

const artists = [
  'ジョー蒲池',
  'KAORU',
  '宮崎カポネ信義',
  '田中利由子',
  '遠藤さや',
  '谷口雅彦',
  '水野由紀',
  '中野幸代',
  '一泉ナオ子',
  '八木秀樹',
];

const venues = [
  { lat: rndLat(), lng: rndLng(), name: '杜のうた' },
  { lat: rndLat(), lng: rndLng(), name: 'ジャズピアノクラブJOE' },
  { lat: rndLat(), lng: rndLng(), name: 'Blue Note Tokyo' },
  { lat: rndLat(), lng: rndLng(), name: '六本木サテンドール' },
  { lat: rndLat(), lng: rndLng(), name: 'Billboard Live TOKYO' },
  { lat: rndLat(), lng: rndLng(), name: 'Red Pepper' },
  { lat: rndLat(), lng: rndLng(), name: '9th Chord' },
  { lat: rndLat(), lng: rndLng(), name: '橋の下' },
  { lat: rndLat(), lng: rndLng(), name: 'チャーリーズ・クラブ' },
  { lat: rndLat(), lng: rndLng(), name: 'november eleventh' },
];


const list = [];
let index = 0;

events.forEach((event) => {
  artists.forEach((artist) => {
    venues.forEach((venue) => {
      index += 1;
      let start = new Date(2017, 8 + rndInt(2), 1 + rndInt(31), 17 + rndInt(3), rndInt(2) * 30);
      let end = new Date(2017, start.getMonth(), start.getDate(), 20 + rndInt(3), rndInt(2) * 30);
      start = Date.parse(start);
      end = Date.parse(end);
      list.push({
        id: index,
        event,
        artist,
        venue: venue.name,
        lat: venue.lat,
        lng: venue.lng,
        price: (rndInt(7) * 500) + 2000,
        start,
        end,
      });
    });
  });
});

fs.writeFileSync('../../src/data/events.json', JSON.stringify(list));
console.log('All done!');
process.exit();
