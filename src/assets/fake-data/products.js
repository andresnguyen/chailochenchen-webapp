const product_image_1 = require("../images/new-products/1.jpg").default;
const product_image_2 = require("../images/new-products/2.jpg").default;
const product_image_3 = require("../images/new-products/3.jpg").default;
const product_image_4 = require("../images/new-products/4.jpg").default;
const product_image_5 = require("../images/new-products/5.jpg").default;
const product_image_6 = require("../images/new-products/6.jpg").default;
const product_image_7 = require("../images/new-products/7.jpg").default;
const product_image_8 = require("../images/new-products/8.jpg").default;
const product_image_9 = require("../images/new-products/9.jpg").default;
const product_image_10 = require("../images/new-products/10.jpg").default;
const product_image_11 = require("../images/new-products/11.jpg").default;
const product_image_12 = require("../images/new-products/12.jpg").default;
const product_image_13 = require("../images/new-products/13.jpg").default;
const product_image_14 = require("../images/new-products/14.jpg").default;
const product_image_15 = require("../images/new-products/15.jpg").default;
const product_image_16 = require("../images/new-products/16.jpg").default;
const product_image_17 = require("../images/new-products/17.jpg").default;
const product_image_18 = require("../images/new-products/18.jpg").default;
const product_image_19 = require("../images/new-products/19.jpg").default;
const product_image_20 = require("../images/new-products/20.jpg").default;
const product_image_21 = require("../images/new-products/21.jpg").default;
const product_image_22 = require("../images/new-products/22.jpg").default;
const product_image_23 = require("../images/new-products/23.jpg").default;
const product_image_24 = require("../images/new-products/24.jpg").default;
const product_image_25 = require("../images/new-products/25.jpg").default;

const products = [
  {
    id: 1,
    name: "Chai cổ rộng lùn 330ml",
    imageSrc: product_image_1,
    category: "chai-nhua",
  },
  {
    id: 2,
    name: "Hủ nhựa sữa chua 90ml",
    imageSrc: product_image_2,
    category: "hop-dung-sua-chua",
  },
  {
    id: 3,
    name: "Chai 330ml tròn cổ rộng",
    imageSrc: product_image_3,
    category: "chai-nhua",
  },
  {
    id: 4,
    name: "Chai tròn 330ml",
    imageSrc: product_image_4,
    category: "chai-nhua",
  },
  {
    id: 5,
    name: "Chai dẹp ngang nắp nhôm 330ml",
    imageSrc: product_image_5,
    category: "chai-nhua",
  },
  {
    id: 6,
    name: "Chai dẹp vuông 330ml",
    imageSrc: product_image_6,
    category: "chai-nhua",
  },
  {
    id: 7,
    name: "Chai 500ml tròn cao",
    imageSrc: product_image_7,
    category: "chai-nhua",
  },
  {
    id: 8,
    name: "Chai nhựa bóng đèn 330ml",
    imageSrc: product_image_8,
    category: "chai-nhua",
  },
  {
    id: 9,
    name: "Chai nhựa gấu 700ml",

    imageSrc: product_image_9,
    category: "chai-nhua",
  },
  {
    id: 10,
    name: "Chai cổ rộng 500ml",
    imageSrc: product_image_10,
    category: "chai-nhua",
  },
  {
    id: 11,
    name: "Chai 500ml tròn lùn",
    imageSrc: product_image_11,
    category: "chai-nhua",
  },
  {
    id: 12,
    name: "Chai nhựa tam giác",
    imageSrc: product_image_12,
    category: "chai-nhua",
  },
  {
    id: 13,
    name: "Chai cổ rộng 1000ml",
    imageSrc: product_image_13,
    category: "chai-nhua",
  },
  {
    id: 14,
    name: "Chai vuông 330ml",
    imageSrc: product_image_14,
    category: "chai-nhua",
  },
  {
    id: 15,
    name: "Chai tròn 100ml",
    imageSrc: product_image_15,
    category: "chai-nhua",
  },
  {
    id: 16,
    name: "Chai tròn 1000ml",
    imageSrc: product_image_16,
    category: "chai-nhua",
  },
  {
    id: 17,
    name: "Chai tròn 1000ml",
    imageSrc: product_image_17,
    category: "chai-nhua",
  },
  {
    id: 18,
    name: "Hủ nhựa sữa chua 160ml",
    imageSrc: product_image_18,
    category: "hop-dung-sua-chua",
  },
  {
    id: 19,
    name: "Chai dẹp vuông nắp nhôm 500ml",
    imageSrc: product_image_19,
    category: "chai-nhua",
  },
  {
    id: 20,
    name: "Chai cổ rộng 1000ml",
    imageSrc: product_image_20,
    category: "chai-nhua",
  },
  {
    id: 21,
    name: "Hủ nhựa sữa chua 120ml",
    imageSrc: product_image_21,
    category: "hop-dung-sua-chua",
  },
  {
    id: 22,
    name: "Hủ nhựa sữa chua 120ml",
    imageSrc: product_image_21,
    category: "hop-dung-sua-chua",
  },
  {
    id: 23,
    name: "Hủ nhựa sữa chua 100ml",
    imageSrc: product_image_22,
    category: "hop-dung-sua-chua",
  },
  {
    id: 24,
    name: "Hủ nhựa sữa chua 160ml",
    imageSrc: product_image_23,
    category: "hop-dung-sua-chua",
  },
  {
    id: 25,
    name: "Ống hút bọc màng",
    imageSrc: product_image_24,
    category: "hop-muong-ong-hut",
  },
  {
    id: 26,
    name: "Hủ nhựa sữa chua",
    imageSrc: product_image_25,
    category: "hop-dung-sua-chua",
  },
  // 25 products
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductsBySlug = (slug, count) => {
  const productList = products.filter(product => product.category === slug);
  if(count) return productList.slice(0, count)
  return productList
};


const getProductById = (id) => products.find((e) => e.id == id);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductById(e.id);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  // console.log(res)
  // console.log('sorted')
  // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductById,
  getCartItemsInfo,
  getProductsBySlug
};

export default productData;
