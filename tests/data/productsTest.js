import {Product, Clothing, Appliance} from '../../data/products.js';

describe('Product', () => {
  let product;

  beforeEach(() => {
    product = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });

  it('has the correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  })

  it('gets the stars url', () => {
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('does not display any extra info', () => {
    expect(product.extraInfoHTML()).toEqual('');
  });
});

describe('Clothing', () => {
  let clothing;

  beforeEach(() => {
    clothing = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });
  });

  it('has the correct clothing', () => {
    expect(clothing.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
  });

  it('has sizeChartLink', () => {
    expect(clothing.sizeChartLink).toEqual('images/clothing-size-chart.png');
  });
});

describe('Appliance', () => {
  let appliance;

  beforeEach(() => {
    appliance = new Appliance({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: 'appliance',
      instructionsLink: 'images/appliance-instructions.png',
      warrantyLink: 'images/appliance-warranty.png'
    });
  });

  it('has the correct image', () => {
    expect(appliance.image).toEqual('images/products/black-2-slot-toaster.jpg');
  });

  it('has instructions and warranty links', () => {
    expect(appliance.instructionsLink).toEqual('images/appliance-instructions.png');
    expect(appliance.warrantyLink).toEqual('images/appliance-warranty.png');
  })
})