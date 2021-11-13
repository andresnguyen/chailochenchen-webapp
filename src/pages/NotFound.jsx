import React from "react";
import PropTypes from "prop-types";
import img from '../assets/images/not-found.png'
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="not-found">
      <main>
        <img src={img} alt="A Scarecrow" />
        <article>
          <h1>Bạn yêu ơi! Trang này không tồn tại :( </h1>
          <p>
            Bạn vui lòng chọn trang khác nha nha
          </p>
          <button style={{position: 'relative'}}>
            VỀ TRANG CHỦ NÈ
            <Link to="/" style={{position: 'absolute', left: 0, right:0, top: 0, bottom: 0}}/>
            </button>
        </article>
      </main>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
