const SHOP_DATA = {
  groceries: {
    id: 1,
    title: 'Groceries',
    routeName: 'groceries',
    items: [
      {
        id: 1,
        name: 'Olive Oil',
        imageUrl: 'https://i.ibb.co/r29kg9r/olive-oil.jpg',
        price: 3
      },
      {
        id: 2,
        name: 'Vegetable Oil',
        imageUrl: 'https://i.ibb.co/djZCwS4/123-oil.webp',
        price: 1.5
      },
      {
        id: 3,
        name: 'Botanera',
        imageUrl: 'https://i.ibb.co/wwc9ydN/botanera.jpg',
        price: 2
      },
      {
        id: 4,
        name: 'Catsup',
        imageUrl: 'https://i.ibb.co/bBh4Ly6/catsup.jpg',
        price: 1.4
      },
      {
        id: 5,
        name: 'Mayonesa',
        imageUrl: 'https://i.ibb.co/CnxGVby/mayonesa.webp',
        price: 3
      },
      {
        id: 6,
        name: 'Chocolate Abuelita',
        imageUrl: 'https://i.ibb.co/09kGgm9/chocolate-Abuelita.jpg',
        price: 3.5
      },
      {
        id: 7,
        name: 'Mole',
        imageUrl: 'https://i.ibb.co/09zZf1h/mole.jpg',
        price: 2.5
      },
      {
        id: 8,
        name: 'Nesquik',
        imageUrl: 'https://i.ibb.co/4m5kd8S/neskuik.jpg',
        price: 2
      },
      {
        id: 9,
        name: 'La Fina',
        imageUrl: 'https://i.ibb.co/fXRHQs1/laFina.webp',
        price: 4
      }
    ]
  },
  fruitsvegetables: {
    id: 2,
    title: 'Fruits & Vegetables',
    routeName: 'fruitsvegetables',
    items: [
      {
        id: 10,
        name: 'Chiles Marron',
        imageUrl: 'https://i.ibb.co/zn6v15Z/chilesmarron.jpg',
        price: 5
      },
      {
        id: 11,
        name: 'Sweet Potatoes',
        imageUrl: 'https://i.ibb.co/rsVMmzy/sweetpotatoes.jpg',
        price: 2.5
      },
      {
        id: 12,
        name: 'Onion',
        imageUrl: 'https://i.ibb.co/fYhhn7M/onio.jpg',
        price: 1.75
      },
      {
        id: 13,
        name: 'Brocoli',
        imageUrl: 'https://i.ibb.co/271jjss/brocoli.jpg',
        price: 3
      },
      {
        id: 14,
        name: 'Cauliflower',
        imageUrl: 'https://i.ibb.co/Lz4CwFR/coliflor.png',
        price: 4
      },
      {
        id: 15,
        name: 'Spinach',
        imageUrl: 'https://i.ibb.co/rK9kvQ7/spinach.webp',
        price: 4.5
      },
      {
        id: 16,
        name: 'Red Apples',
        imageUrl: 'https://i.ibb.co/PM3nkKg/apples.jpg.png',
        price: 2.5
      },
      {
        id: 17,
        name: 'Green Apples',
        imageUrl: 'https://i.ibb.co/h9VLXDM/greenaples.jpg',
        price: 2.5
      }
    ]
  },
  canned: {
    id: 3,
    title: 'Canned',
    routeName: 'canned',
    items: [
      {
        id: 18,
        name: 'Black beans',
        imageUrl: 'https://i.ibb.co/CKbWz0Q/beans.jpg',
        price: 1.25
      },
      {
        id: 19,
        name: 'Corn',
        imageUrl: 'https://i.ibb.co/09SJngR/corn.jpg',
        price: 2
      },
      {
        id: 20,
        name: 'Tuna',
        imageUrl: 'https://i.ibb.co/Xzkfp5C/tuna.jpg',
        price: 1.5
      },
      {
        id: 21,
        name: 'Mix Vegetables',
        imageUrl: 'https://i.ibb.co/HNCnPC9/mixvegetables.jpg',
        price: 1.75
      },
      {
        id: 22,
        name: 'Jalapenos',
        imageUrl: 'https://i.ibb.co/1T0zZw7/jalapenos.jpg',
        price: 2.5
      }
    ]
  },
  dairyproducts: {
    id: 4,
    title: 'Dairy Products',
    routeName: 'dairyproducts',
    items: [
      {
        id: 23,
        name: 'Condensed Milk',
        imageUrl: 'https://i.ibb.co/2q2Mjx8/condensedmilk.jpg',
        price: 1.9
      },
      {
        id: 24,
        name: 'Milk',
        imageUrl: 'https://i.ibb.co/TczwQHm/Lactose-FRee.jpg',
        price: 1.25
      },
      {
        id: 25,
        name: 'Nido Milk',
        imageUrl: 'https://i.ibb.co/TcnWhRs/nido.jpg',
        price: 6
      },
      {
        id: 26,
        name: 'Margarine',
        imageUrl: 'https://i.ibb.co/dbrdsGW/margarine.png',
        price: 1.5
      },
      {
        id: 27,
        name: 'Yoghurt',
        imageUrl: 'https://i.ibb.co/HKw0B71/yoghurt.jpg',
        price: .75
      },
      {
        id: 28,
        name: 'American Cheese',
        imageUrl: 'https://i.ibb.co/bsTdNn1/cheese.jpg',
        price: 1.5
      },
      {
        id: 29,
        name: 'Carnation Milk',
        imageUrl: 'https://i.ibb.co/dBFtppw/carnationpolvo.jpg',
        price: 2
      }
    ]
  },
  snacks: {
    id: 5,
    title: 'Snacks',
    routeName: 'snacks',
    items: [
      {
        id: 30,
        name: 'Cheetos',
        imageUrl: 'https://i.ibb.co/sKpzjJh/cheetos.jpg',
        price: 1
      },
      {
        id: 31,
        name: 'Doritos',
        imageUrl: 'https://i.ibb.co/2ShzfGm/doritos.jpg',
        price: 1
      },
      {
        id: 32,
        name: 'Ruffles',
        imageUrl: 'https://i.ibb.co/w6vWpJw/ruffles.jpg',
        price: 1
      },
      {
        id: 33,
        name: 'Sabritas',
        imageUrl: 'https://i.ibb.co/7jdYGnT/sabritas.jpg',
        price: 1
      },
      {
        id: 34,
        name: 'Adobadas',
        imageUrl: 'https://i.ibb.co/xgFjxxF/Adobadas.jpg',
        price: 1
      },
      {
        id: 35,
        name: 'Japoneses',
        imageUrl: 'https://i.ibb.co/k6kkf16/japoneses.jpg',
        price: 1
      }
    ]
  },
  flours: {
    id: 6,
    title: 'Flours',
    routeName: 'flours',
    items: [
      {
        id: 36,
        name: 'Pan Molido',
        imageUrl: 'https://i.ibb.co/G7cx1W0/panmolido.jpg',
        price: 2
      },
      {
        id: 37,
        name: 'Doraditas',
        imageUrl: 'https://i.ibb.co/f4SJ2QZ/Doraditas.jpg',
        price: 2
      },
      {
        id: 38,
        name: 'Mantecadas',
        imageUrl: 'https://i.ibb.co/Vgry48L/mantecadas.jpg',
        price: 2
      },
      {
        id: 39,
        name: 'Bimbunuelos',
        imageUrl: 'https://i.ibb.co/1dZtz03/bimbunuelos.jpg',
        price: 2
      },
      {
        id: 40,
        name: 'Pan tostado',
        imageUrl: 'https://i.ibb.co/mG6j8t0/Tostado.png',
        price: 2
      },
      {
        id: 41,
        name: 'Tortillinas',
        imageUrl: 'https://i.ibb.co/ZH4VYGC/tortillinas.jpg',
        price: 2
      }
    ]
  },
  confectionery: {
    id: 7,
    title: 'Confectionery',
    routeName: 'confectionery',
    items: [
      {
        id: 42,
        name: 'Panditas',
        imageUrl: 'https://i.ibb.co/V9dM7rr/panditas.jpg',
        price: 1
      },
      {
        id: 43,
        name: 'skittles',
        imageUrl: 'https://i.ibb.co/nn2HVHL/skittles.jpg',
        price: 2.3
      },
      {
        id: 44,
        name: 'Duvalin',
        imageUrl: 'https://i.ibb.co/hY4FPnY/duvalin.jpg',
        price: 1
      },
      {
        id: 45,
        name: 'Paleta Payaso',
        imageUrl: 'https://i.ibb.co/PZvwqqL/paleta.jpg',
        price: 2
      },
      {
        id: 46,
        name: 'Pulparindo',
        imageUrl: 'https://i.ibb.co/4fRp0H5/pulparindo.jpg',
        price: 3
      },
      {
        id: 47,
        name: 'Mazapan',
        imageUrl: 'https://i.ibb.co/565bfkY/mazapan.jpg',
        price: 2.5
      }
    ]
  },
  drinks:{
    id: 8,
    title: 'Drinks',
    routeName: 'drinks',
    items: [
      {
        id: 48,
        name: 'Coca Cola',
        imageUrl: 'https://i.ibb.co/rsJtFt1/cocacola.webp',
        price: 2.5
      },
      {
        id: 49,
        name: 'Fanta',
        imageUrl: 'https://i.ibb.co/c1FbNdT/fanta.jpg',
        price: 2.5
      },
      {
        id: 50,
        name: 'Jarrito',
        imageUrl: 'https://i.ibb.co/NTg66PH/jarritos.jpg',
        price: 2.5
      },
      {
        id: 51,
        name: 'Pepsi Cola',
        imageUrl: 'https://i.ibb.co/pr40mXG/pepsi.webp',
        price: 2.5
      },
      {
        id: 52,
        name: 'Sprite',
        imageUrl: 'https://i.ibb.co/x1z5Dwf/sprite.webp',
        price: 2.5
      },
      {
        id: 53,
        name: 'Mundet',
        imageUrl: 'https://i.ibb.co/fM0YKQH/mundet-500-1.jpg',
        price: 2.5
      }
    ]
  },
  meatsandsausage: {
    id: 9,
    title: 'Meats & Sausage',
    routeName: 'meatsandsausage',
    items: [
      {
        id: 54,
        name: 'Hot Dog',
        imageUrl: 'https://i.ibb.co/HKRVbjY/salchicha.jpg',
        price: 4
      },
      {
        id: 55,
        name: 'Bacon',
        imageUrl: 'https://i.ibb.co/7NsnB0p/tocino.jpg',
        price: 3.5
      },
      {
        id: 56,
        name: 'Turkey Ham',
        imageUrl: 'https://i.ibb.co/0FP0yLd/jamon.jpg',
        price: 4
      },
      {
        id: 57,
        name: 'Ham',
        imageUrl: 'https://i.ibb.co/ZVVhFbn/ham.jpg',
        price: 4
      },
      {
        id: 58,
        name: 'Mortadela',
        imageUrl: 'https://i.ibb.co/H4d1qV2/mortadela.jpg',
        price: 5
      },
      {
        id: 59,
        name: 'Salame',
        imageUrl: 'https://i.ibb.co/vPhqFCf/Salame.jpg',
        price: 7
      }
    ]
  },
  personalhygiene: {
    id: 10,
    title: 'Personal Hygiene',
    routeName: 'personalhygiene',
    items: [
      {
        id: 60,
        name: 'Baby Oil',
        imageUrl: 'https://i.ibb.co/KGzWVDb/babyoil.jpg',
        price: 3
      },
      {
        id: 61,
        name: 'Cotton',
        imageUrl: 'https://i.ibb.co/4T6z8qQ/algodon.jpg',
        price: 4
      },
      {
        id: 62,
        name: 'Toallitas',
        imageUrl: 'https://i.ibb.co/2jgGQ6g/toallitas.jpg',
        price: 6
      },
      {
        id: 63,
        name: 'Saba',
        imageUrl: 'https://i.ibb.co/R94hHnb/sava.jpg',
        price: 3.5
      },
      {
        id: 64,
        name: 'Suave',
        imageUrl: 'https://i.ibb.co/dtYqNsR/suave.jpg',
        price: 5
      },
      {
        id: 65,
        name: 'Cepillo de dientes',
        imageUrl: 'https://i.ibb.co/m4LMVrF/cepillo.png',
        price: 2
      }
    ]
  },
  cleaningproducts: {
    id: 11,
    title: 'Cleaning Products',
    routeName: 'cleaningproducts',
    items: [
      {
        id: 66,
        name: 'Javon Liquido',
        imageUrl: 'https://i.ibb.co/Br7s24Q/javon-Liquido.jpg',
        price: 5
      },
      {
        id: 67,
        name: 'Clorox',
        imageUrl: 'https://i.ibb.co/y84s23H/clorox.jpg',
        price: 4
      },
      {
        id: 68,
        name: 'Lysol',
        imageUrl: 'https://i.ibb.co/dGJQV40/lysol.jpg',
        price: 5
      },
      {
        id: 69,
        name: 'downy',
        imageUrl: 'https://i.ibb.co/gvgLj82/downy.jpg',
        price: 4.5
      },
      {
        id: 70,
        name: 'Axion',
        imageUrl: 'https://i.ibb.co/XD3msVh/axion.webp',
        price: 4
      },
      {
        id: 71,
        name: 'Bicarbonato',
        imageUrl: 'https://i.ibb.co/D7hx21h/bicarbonato.jpg',
        price: 3
      }
    ]
  },
  domesticuse: {
    id: 12,
    title: 'Domestic Use',
    routeName: 'domesticuse',
    items: [
      {
        id: 72,
        name: 'Vasos de Plastico',
        imageUrl: 'https://i.ibb.co/cFDS3zn/vasos.jpg',
        price: 4
      },
      {
        id: 73,
        name: 'Popotes',
        imageUrl: 'https://i.ibb.co/vBB7Vj7/popotes.jpg',
        price: 5
      },
      {
        id: 74,
        name: 'Platos Desechables',
        imageUrl: 'https://i.ibb.co/tJBDGCF/plasticplates.jpg',
        price: 4
      },
      {
        id: 75,
        name: 'Rope',
        imageUrl: 'https://i.ibb.co/8D9xJKD/rope.jpg',
        price: 3
      },
      {
        id: 76,
        name: 'Mata Moscas',
        imageUrl: 'https://i.ibb.co/PNN7v86/flyswatter.jpg',
        price: 2
      },
      {
        id: 77,
        name: 'Rcogedor',
        imageUrl: 'https://i.ibb.co/DtjcgLx/recogedor.png',
        price: 3
      }
    ]
  },
  others: {
    id: 13,
    title: 'Others',
    routeName: 'others',
    items: [
      {
        id: 78,
        name: 'Phone Cards',
        imageUrl: 'https://i.ibb.co/sFWDvFp/Cards.png',
        price: 10 
      },
      {
        id: 79,
        name: 'Movil Recharges',
        imageUrl: 'https://i.ibb.co/qRDNCTw/recharges.jpg',
        price: 20
      },
      {
        id: 80,
        name: 'Ice',
        imageUrl: 'https://i.ibb.co/nzLy2Sd/ice.webp',
        price: 4
      },
      {
        id: 81,
        name: 'Marlboro',
        imageUrl: 'https://i.ibb.co/3CSDQ8Y/marlboro.jpg',
        price: 9
      }
    ]
  }
};

export default SHOP_DATA;