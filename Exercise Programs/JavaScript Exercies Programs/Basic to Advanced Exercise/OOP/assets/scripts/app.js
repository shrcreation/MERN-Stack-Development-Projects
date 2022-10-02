class Product {
  //   title = 'DEFAULT';
  //   imageUrl;
  //   descriptions;
  //   price;
  //   rating;

  constructor(title, image, desc, price, rating) {
    this.title = title;
    this.imageUrl = image;
    this.descriptions = desc;
    this.price = price;
    this.rating = rating;
  }
}



class ProductList {
  products = [
    new Product(
      'T-Shirt',
      'https://cdn.shopify.com/s/files/1/0642/0427/5966/products/product-image-2002241604_800x.jpg',
      'A brand new world cup t-shirt 2022',
      21.99,
      4.5
    ),
    new Product(
      'Watch',
      'https://cdn.shopify.com/s/files/1/0258/7862/6349/products/Z33Smartwatch_2_533x.jpg',
      'A brand new smart watch 2022',
      110.99,
      4.7
    ),
  ];

  render() {
    const renderHook = document.getElementById('app');
    const prodlist = document.createElement('ul');
    prodlist.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `<div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>${prod.price}</h3>
                <h3>${prod.rating} ✰</h3>
                <p>${prod.descriptions}</p>
                <button>Add to Cart</button>
            </div>
        </div>`;
      prodlist.append(prodEl);
    }
    renderHook.append(prodlist);
  }

  constructor() {}
}

const productItem = new ProductList();
productItem.render();
