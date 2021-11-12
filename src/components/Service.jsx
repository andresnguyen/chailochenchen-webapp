import React from "react";
import PropTypes from "prop-types";
import customer from "../assets/images/customer-service.png";
import delivery from "../assets/images/delivery.png";
import commit from "../assets/images/commit.png";
import Grid from "./Grid";

const service = [
  {
    image: customer,
    title: "ĐẶT HÀNG",
    description:
      "Bạn cần sản phẩm gấp liên hệ mình ngay qua ZALO : 0379.031.479",
  },
  {
    image: delivery,
    title: "GIAO HÀNG",
    rawHTML: true,
    description: `
            <div class="container-desc">Nếu bạn ở TP.HCM: Nhận hàng thanh toán</div>
            <div class="container-desc">Nếu bạn ở tỉnh:</div>
            <div class="list-desc">+Giao hàng nhà xe:</div>
            <div class="item-desc">Mình gửi hàng ra đến nhà xe xác nhận, bạn vui lòng thanh toán chuyển khoản 100% giúp mình nhé</div>
            <div class="list-desc">+Giao hàng ship COD tận nhà:</div>
            <div class="item-desc">Bạn chuyển cọc giúp mình phí cước mình sẽ gửi hàng cho bạn ạ</div>
        `,
  },
  {
    image: commit,
    title: "ĐỔI TRẢ SẢN PHẨM NẾU LỖI",
    description:
      "Khi bạn nhận hàng có bất kì lỗi gì từ nhà sản xuất bên mình sẽ hoàn đổi trả cho bạn yên tâm nhé",
  },
];

function Service(props) {
  return (
    <div className="service-container">
      <Grid col={3} smCol={1} gap={30}>
        {service.map((item) => (
          <div className="service">
            <div className="service__image">
              <img src={item.image} alt="" />
            </div>

            <div className="service__content">
              <div className="service__title">{item.title}</div>
              <div className="service__description">
                  {!item.rawHTML && item.description}
                  {item.rawHTML && <div dangerouslySetInnerHTML={{__html: item.description }} />}
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}

Service.propTypes = {};

export default Service;
