const productList = {
  products: [
    {
      title: 'A T-Shirt',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0642/0427/5966/products/product-image-2002241604_800x.jpg',
      price: 19.99,
      descriptions: 'A brand new world cup t-shirt 2022',
      rating: 4.5,
    },
    {
      title: 'A Watch',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0258/7862/6349/products/Z33Smartwatch_2_533x.jpg',
      price: 99.99,
      descriptions: 'A brand new smart watch 2022',
      rating: 4.7,
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>${prod.price}</h3>
                <p>${prod.descriptions}</p>
                <button>Add to Cart</button>
            </div>
        </div>`;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
