const INITIAL_STATE = {
    sections: [
      {
        title: 'groceries',
        imageUrl: 'https://i.ibb.co/PcpGfgf/supermarket-food.jpg',
        size: 'large',
        id: 1,
        linkUrl: 'shop/groceries'
      },
      {
        title: 'Fruits & Vegetables',
        imageUrl: 'https://i.ibb.co/sypyH33/fresh-vegetables-fruits-1308-31081.jpg',
        size: 'large',
        id: 2,
        linkUrl: 'shop/fruitsvegetables'
      },
      {
        title: 'CANNED',
        imageUrl: 'https://i.ibb.co/mBdmPXj/canned-Food.jpg',
        size: 'large',
        id: 3,
        linkUrl: 'shop/canned'
      },
      {
        title: 'Dairy Products',
        imageUrl: 'https://i.ibb.co/PMkq8hf/diary-products.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/dairyproducts'
      },
      {
        title: 'Snacks',
        imageUrl: 'https://i.ibb.co/Fsz3bSv/chips.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/snacks'
      },
      {
        title: 'Flours',
        imageUrl: 'https://i.ibb.co/GkmwV4h/Sacks-with-wheat-barley-grains-and-flour-seed-of-wheat-in-a-burlap-bag-with-wooden-scoop-isolated-on.jpg',
        size: 'large',
        id: 6,
        linkUrl: 'shop/flours'
      },
      {
        title: 'Confectionery',
        imageUrl: 'https://i.ibb.co/zRR1NkQ/flat-style-confectionery-dessert-candy-shop-s-objects-kit-mockup-icon-set-sweet-products-tools-build.jpg',
        size: 'large',
        id: 7,
        linkUrl: 'shop/confectionery'
      },
      {
        title: 'Drinkis',
        imageUrl: 'https://i.ibb.co/rw17wHR/various-drinks-metallic-cans-plastic-bottles-74855-7909.jpg',
        size: 'large',
        id: 8,
        linkUrl: 'shop/drinks'
      },
      {
        title: 'Meats & Sausage',
        imageUrl: 'https://i.ibb.co/kcVKR8w/shopping-basket-full-meat-raw-prepared-3446-400.jpg',
        size: 'large',
        id: 9,
        linkUrl: 'shop/meatsandsausage'
      },
      {
        title: 'Personal Hygiene',
        imageUrl: 'https://i.ibb.co/FKg9zLb/hygiene-accessories-flat-icons-set-1284-9067.jpg',
        size: 'large',
        id: 10,
        linkUrl: 'shop/personalhygiene'
      },
      {
        title: 'Cleaning Products',
        imageUrl: 'https://i.ibb.co/TrPnSt0/detergent-bottles-shelf-with-bathroom-toilet-mirror-cleaners-with-wall-tiles-vector-illustration-128.jpg',
        size: 'large',
        id: 11,
        linkUrl: 'shop/cleaningproducts'
      },
      {
        title: 'Domestic Use',
        imageUrl: 'https://i.ibb.co/6sQSBft/cleaning-service.jpg',
        size: 'large',
        id: 12,
        linkUrl: 'shop/domesticuse'
      },
      {
        title: 'Others',
        imageUrl: 'https://i.ibb.co/72ZMv7d/mobile.jpg',
        size: 'large',
        id: 13,
        linkUrl: 'shop/others'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;