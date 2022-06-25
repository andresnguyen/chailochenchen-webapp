const category = [
    {
        display: "Chai nhựa",
        category: "chai-nhua"
    },
    {
        display: "Ly nhựa",
        category: "ly-nhua"
    },
    {
        display: "Hũ nhựa",
        category: "hu-nhua"
    },
    {
        display: "Túi, ống, hút, muỗng",
        category: "tui-ong-hut-muong"
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