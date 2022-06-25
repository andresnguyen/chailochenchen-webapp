const category = [
  {
      display: "Chai nhựa",
      category: "chai-nhua"
  },
  {
      display: "Ly nhựa",
      category: "hop-dung-sua-chua"
  },
  {
      display: "Hũ nhựa",
      category: "hu-dung-lam-banh-flan"
  },
  {
      display: "Túi, ống, hút, muỗng",
      category: "hop-muong-ong-hut"
  },
]

export const mainNav = [
    {
      display: "Trang chủ",
      path: "/",
    },
    {
      display: "Sản phẩm",
      path: "/accessories",
      children: category,
    },
    {
      display: "Thanh toán",
      path: "/payment",
    },
    {
      display: "Liên hệ",
      path: "/about",
    },
  ];

export default category