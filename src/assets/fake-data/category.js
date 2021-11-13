const category = [
    {
        display: "Chai nhựa",
        category: "chai-nhua"
    },
    {
        display: "Hộp đựng sữa chua",
        category: "hop-dung-sua-chua"
    },
    {
        display: "Hũ đựng làm bánh flan",
        category: "hu-dung-lam-banh-flan"
    },
    {
        display: "Hộp, muỗng, uống hút",
        category: "hop-muong-ong-hut"
    },
    {
        display: "Túi nylong",
        category: "tui-nylong"
    },
    {
        display: "Nguyên liệu",
        category: "nguyen-lieu"
    }
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