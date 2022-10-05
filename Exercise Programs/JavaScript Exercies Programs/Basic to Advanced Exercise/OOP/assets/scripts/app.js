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
 * it has the product params
 * it has a render() method to return the single product
 */

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClass) {
      rootElement.className = cssClass;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  /**
   * @param {any[]} value
   */
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (preValue, currItem) => preValue + currItem.price,
      0
    );

    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updateItems = [...this.items];
    updateItems.push(product);
    this.cartItems = updateItems;
  }

  orderProducts() {
    console.log('Order is processing....');
    console.log(this.items);
  }

  render() {
    // const cartEl = document.createElement('section');
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    const orderBtn = cartEl.querySelector('button');
    orderBtn.addEventListener('click', () => this.orderProducts());
    this.totalOutput = cartEl.querySelector('h2');
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  //the method create the single product
  render() {
    // const prodEl = document.createElement('li');
    const prodEl = this.createRootElement('li', 'product-item');
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
    const addCartBtn = prodEl.querySelector('button');
    // addCartBtn.addEventListener('click', () => {
    //   console.log('Order is processing...');
    // });
    addCartBtn.addEventListener('click', this.addToCart.bind(this));
  }
}
/**
 * this is the product list class
 * where we listed (set) and showed all products info
 * a render() method create all the elements
 * and append all elements
 */
class ProductList extends Component {
  #products = [];//private property

  constructor(renderHookId) {
    super(renderHookId,false);
    this.render();
    this.#fetchProducts();
  } //default constructor

  #fetchProducts() {
    this.#products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, 'prod-list');
    }
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
