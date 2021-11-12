import React from "react";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import paymentImg from "../assets/images/payment.jpg";
import Service from "../components/Service";

const Payment = () => {
  return (
    <Helmet title="Thanh toán - Chailo Chenchen">
      <div className="payment">
        <Grid col={2} gap={40} smCol={1}>
          <div className="payment__image">
            <img src={paymentImg} />
          </div>
          <div className="payment__text">
            Quý khách chuyển khoản vui lòng theo thông tin trên ảnh, vui lòng
            chụp lại màn hình để gửi kiểm chứng Hoặc khách hàng có thể thanh
            toán trực tiếp tại cửa hàng ạ
          </div>
        </Grid>
      </div>
    </Helmet>
  );
};

export default Payment;
