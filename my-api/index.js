var express = require('express');
var app = express();

const stores = [
   {
      id: 1,
      name: 'Adudas Shop',
      photo_url:
         'https://logowik.com/content/uploads/images/adidas-old8715.jpg',
         address:"Erbil - Azadi Street",
         time:'10:00 AM - 10:00 PM'
   },
   {
      id: 2,
      name: 'DeFacto',
      photo_url:
         'https://logowik.com/content/uploads/images/793_defacto.jpg',
         address:"Erbil - Famlly mall",
         time:'10:00 AM - 06:00 PM'
   },
   {
      id: 3,
      name: 'Levis',
      photo_url:
         'https://logowik.com/content/uploads/images/603_levis1.jpg',
         address:"Erbil - Tablo mall",
         time:'10:00 AM - 11:00 PM'
   },
   {
      id: 4,
      name: 'Lacoste',
      photo_url:
         'https://logowik.com/content/uploads/images/522_lacoste.jpg',
         address:"Erbil - Ankawa",
         time:'10:00 AM - 08:00 PM'

   }
   , {
      id: 5,
      name: 'LC',
      photo_url:
         'http://expobel.by/uploads/1bb0ae9ab862cfedf8b65f8a836b15396d10d6ec.jpeg',
         address:"Suleymanyah - Baxtyare",
         time:'10:00 AM - 12:00 AM'
   }
   , {
      id: 6,
      name: 'TOMMY',
      photo_url:
         'https://logowik.com/content/uploads/images/671_tommyhilfiger.jpg',
         address:"Sulaymanah - azadi Steet",
         time:'10:00 AM - 05:00 PM'
   }
];
const items = {
   1: [
      {
         id: 1,
         category:"Shoses",
         ProductName: 'RUNFALCON SHOES ',
         price: 50000 ,
         photo_url:
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg'
      },
      {
         id: 2,
         category:"Shoses",
         ProductName: 'RUNFALCON SHOES - Black          ',
         price: 6500 ,
         photo_url:
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f77bea97de7548068afca9ae0164d5d6_9366/Runfalcon_Shoes_Black_G28970_01_standard.jpg'
      },
      {
         id: 3,
         category:"Shoses",
         ProductName: 'OUTLET - GRAY ',
         price: 90000 ,
         photo_url:
            'https://st-adidas-egy.mncdn.com/content/images/thumbs/0103760_runfalcon-shoes_fw5160_side-lateral-center-view.jpeg'
      },  
      {
         id: 4,
         category:"Shirt",
         ProductName: 'White Shirt - Human made  ',
         price: 59000 ,
         photo_url:
            'https://media2.fenom.com/63026/adidas-3-pack-t-shirt-human-made-white.jpg'
      },  
   ],
   2: [
      {
         id: 10,
         category:"Jacket",
         ProductName: ' Men Leather Jackets - Brown ',
         price: 24000 ,
         photo_url:
            'https://dfcdn.defacto.com.tr/7/L2455AZ_19WN_BN323_01_03.jpg'
      },
      {
         id: 20,
         category:"Shirt",
         ProductName: 'Slim Fit Crew Neck Printed T-Shirt',
         price: 6000 ,
         photo_url:
            'https://dfcdn.defacto.com.tr/7/U0305AZ_21SM_ER105_01_01.jpg'
      },
      {
         id: 30,
         category:"Shose",
         ProductName: 'Lace-Up Sneaker Sport Shoes',
         price: 90000 ,
         photo_url:
            'https://dfcdn.defacto.com.tr/7/U5002AZ_21SP_NV44_01_04.jpg'
      },
      {
         id: 40,
         category:"Shose",
         ProductName: 'Lace-Up Sneaker Sport Shoes - White',
         price: 9600 ,
         photo_url:
            'https://dfcdn.defacto.com.tr/7/U5002AZ_21SP_WT41_01_03.jpg'
      },
     
   ],
   3: [
      {
         id: 21,
         category:"Jeans",
         ProductName: '  501 Original-Fit Ripped Jeans ',
         price: 142000 ,
         photo_url:
            'https://slimages.macys.com/is/image/MCY/products/8/optimized/16479578_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp'
      },
      {
         id: 20,
         category:"Jeans",
         ProductName: 'Mens 502™ All Season Tech Jeans',
         price: 6000 ,
         photo_url:
            'https://slimages.macys.com/is/image/MCY/products/7/optimized/13039957_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'
      },
      {
         id: 30,
         category:"Jeans",
         ProductName: 'Mens 502™ Taper Jean',
         price: 90000 ,
         photo_url:
            'https://slimages.macys.com/is/image/MCY/products/8/optimized/3864038_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'
      },
      {
         id: 25,
         category:"Jeans",
         ProductName: ' Mens 505 Regular-Fit Non-Stretch Jeans',
         price: 20000 ,
         photo_url:
            'https://slimages.macys.com/is/image/MCY/products/5/optimized/9830625_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$'
      },
      {
         id: 25,
         category:"Jeans",
         ProductName: ' Levi’s® Flex Mens 505 Regular Fit Jeans',
         price: 240000 ,
         photo_url:
            'https://slimages.macys.com/is/image/MCY/products/4/optimized/8576104_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp'
      },
     
   ],
   4: [
      {
         id: 10,
         category:"Jeans",
         ProductName: ' Mens Slim Fit Stretch Denim 5-Pocket Jeans',
         price: 200000 ,
         photo_url:
            'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw028a522e/HH7510_ML4_20.jpg?imwidth=915&impolicy=product'
      },
      {
         id: 20,
         category:"Shirt",
         ProductName: 'Lacoste PH4012 - Black',
         price: 6000 ,
         photo_url:
            'https://photos6.spartoo.dk/photos/160/16026878/16026878_500_A.jpg'
      },
      {
         id: 30,
         category:"Shirt",
         ProductName: 'Lacoste PH4012 - White',
         price: 9000 ,
         photo_url:
            'https://photos6.spartoo.dk/photos/160/16026876/16026876_500_A.jpg'
      },
      {
         id: 30,
         category:"Shirt",
         ProductName: 'Lacoste PH4012 - Green',
         price: 9000 ,
         photo_url:
            'https://photos6.spartoo.dk/photos/160/16026887/16026887_500_A.jpg'
      },
   ],
   5: [
      {
         id: 10,
         category:"Jeans",
         ProductName: ' Women  Stretch Denim  Jeans',
         price: 200000 ,
         photo_url:
            'https://www.lcw.com/en-IE/p/jean-9WJ133Z8-507'
      },
      {
         id: 20,
         category:"Jeans",
         ProductName: 'Lacoste  - Black',
         price: 6000 ,
         photo_url:
            'https://lcw.akinoncdn.com/products/2020/10/03/1769606/269f1ce5-b5e7-42b3-96f6-a1c9efaf2ca2_size561x730.jpg'
      }
   
     
   ],
   6: [
      {
         id: 10,
         category:"Shirt",
         ProductName: '  Shirt  - White',
         price: 200000 ,
         photo_url:
            'https://tommy-europe.scene7.com/is/image/TommyEurope/KG0KG03705_123_main?$main$'
      },
      {
         id: 20,
         category:"Shirt",
         ProductName: 'Shirt   - Black',
         price: 6000 ,
         photo_url:
            'https://tommy-europe.scene7.com/is/image/TommyEurope/KG0KG03706_420_main?$main$'
      }
   
     
   ]
};

// This responds with "Hello World" on the homepage
app.get('/stores', function (req, res) {
   res.json(stores)
})
app.get('/stores/:store_id/items', function (req, res) {
   res.json(items[req.params.store_id])
})

var server = app.listen(8080, function () {
   const host = '127.0.0.1';
   //var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})