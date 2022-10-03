/**
 * this is the bluedprint of the product
 * where we use the products info
 * when we create the class instance the constructor method called it's self automatically
 * and return the products info
 */
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
/**
 * this the single product item class
 * where we render the single product
 * it has a the product
 * it has a render method to return the single product
 */
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  //the method create the single product
  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `<div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.price}</h3>
              <h3>${this.product.rating} ✰</h3>
              <p>${this.product.descriptions}</p>
              <button>Add to Cart</button>
          </div>
      </div>`;

    return prodEl; //return the value
  }
}
/**
 * this is the product list class
 * where we listed (set) and showed all products info
 * a renden method create all the elements
 * and append all elements
 */
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
    new Product(
      'Mobile',
      'https://imageio.forbes.com/specials-images/imageserve/6210dd57fca999e115f400e1/Apple--iPhone--new-iPhone--new-iPhone--iPhone-14--iPhone-14-Pro--iPhone-13--iPhone-13/960x0.jpg',
      'A brand new Mobiles 2023',
      49.99,
      4.6
    ),
  ];

  render() {
    const renderHook = document.getElementById('app');
    const prodlist = document.createElement('ul');
    prodlist.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodlist.append(prodEl);
    }
    renderHook.append(prodlist);
  }

  constructor() {}
}

const productList = new ProductList();
productList.render();
