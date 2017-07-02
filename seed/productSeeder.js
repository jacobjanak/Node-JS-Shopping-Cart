var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://downloads.2kgames.com/2k/staging/datastore/1643-nba2k17_kobegold_fob_esrb.jpg',
    title: 'NBA 2K17 - Legend Edition',
    price: 80
  }),
  new Product({
    imagePath: 'https://images.greenmangaming.com/155195425e95426ea94910f5e7b11c9d/78b61c6b7bc0415d90a752c01665a461.jpg',
    title: 'Morrowind Online',
    price: 30
  }),
  new Product({
    imagePath: 'http://images-eds.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcRWAO9fIEHfP2JgHNXxYKbL8hw8SsHT9BpeqdxYuutDOvj0LKFpcP7_tdU6ziG.FGMrVWet9W4aELyhWhOS0aQGgw_xODBNMfLZYX753FJeuB_WApcd45.KoUg0GUevhXAYUx6xeWOOnMkcNMOORkK9A3fcBZ_4VMKc.3A6Fv1hM-&format=png&h=294&w=215',
    title: 'Neverwinter',
    price: 40
  }),
  new Product({
    imagePath: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/8503641/madden_nfl_18_goat_edition_cover_xbox_one_793.jpg',
    title: 'Madden 18',
    price: 70
  }),
  new Product({
    imagePath: 'https://i5.walmartimages.com/asr/eb5c9be3-245c-48a7-8d9b-09e4322c5a3d_1.1008c2a30e69613c77fac0ac3ead3037.jpeg',
    title: 'Need For Speed',
    price: 60
  }),
  new Product({
    imagePath: 'http://vignette2.wikia.nocookie.net/starwars/images/f/fb/Battlefront_2015_Cover.jpg/revision/latest?cb=20150525181629',
    title: 'Star Wars Battlefront',
    price: 50
  })
];

for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, res) {
    if (i === products.length - 1) {
      mongoose.disconnect();
    }
  });
}
