import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'Groceries',
            imageUrl: 'https://i.ibb.co/PcpGfgf/supermarket-food.jpg',
            size: 'small',
            id: 1
          },
          {
            title: 'Fruits & Vegetables',
            imageUrl: 'https://i.ibb.co/sypyH33/fresh-vegetables-fruits-1308-31081.jpg',
            size: 'small',
            id: 10
          },
          {
            title: 'CANNED',
            imageUrl: 'https://i.ibb.co/mBdmPXj/canned-Food.jpg',
            size: 'small',
            id: 2
          },
          {
            title: 'DAIRY PRODUCTS',
            imageUrl: 'https://i.ibb.co/PMkq8hf/diary-products.jpg',
            size: 'small',
            id: 3
          },
          {
            title: 'Snack',
            imageUrl: 'https://i.ibb.co/Fsz3bSv/chips.jpg',
            size: 'small',
            id: 4
          },
          {
            title: 'Flours',
            imageUrl: 'https://i.ibb.co/GkmwV4h/Sacks-with-wheat-barley-grains-and-flour-seed-of-wheat-in-a-burlap-bag-with-wooden-scoop-isolated-on.jpg',
            size: 'small',
            id: 5
          },
          {
            title: 'Confectionery',
            imageUrl: 'https://i.ibb.co/zRR1NkQ/flat-style-confectionery-dessert-candy-shop-s-objects-kit-mockup-icon-set-sweet-products-tools-build.jpg',
            size: 'small',
            id: 6
          },
          {
            title: 'Drinkis',
            imageUrl: 'https://i.ibb.co/rw17wHR/various-drinks-metallic-cans-plastic-bottles-74855-7909.jpg',
            size: 'small',
            id: 7
          },
          {
            title: 'Meats and Sausage',
            imageUrl: 'https://i.ibb.co/kcVKR8w/shopping-basket-full-meat-raw-prepared-3446-400.jpg',
            size: 'small',
            id: 8
          },
          {
            title: 'Personal Hygiene',
            imageUrl: 'https://i.ibb.co/FKg9zLb/hygiene-accessories-flat-icons-set-1284-9067.jpg',
            size: 'small',
            id: 9
          },
          {
            title: 'Cleaning Products',
            imageUrl: 'https://i.ibb.co/TrPnSt0/detergent-bottles-shelf-with-bathroom-toilet-mirror-cleaners-with-wall-tiles-vector-illustration-128.jpg',
            size: 'small',
            id: 10
          },
          {
            title: 'Domestic Use',
            imageUrl: 'https://i.ibb.co/6sQSBft/cleaning-service.jpg',
            size: 'small',
            id: 10
          },
          {
            title: 'Others',
            imageUrl: 'https://i.ibb.co/72ZMv7d/mobile.jpg',
            size: 'small',
            id: 10
          }
        ]
      };
    }
  
    render() {
      return (
        <div className='directory-menu'>
          {this.state.sections.map(({ title, imageUrl, id, size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))}
        </div>
      );
    }
  }
  
  export default Directory;
  