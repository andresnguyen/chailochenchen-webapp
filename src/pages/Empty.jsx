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
          <h1>Sản phẩm bị rỗng ấy bạn :( </h1>
          <p>
            Bạn vui lòng xóa bộ lọc thử nha ^ ^
          </p>
          <button onClick={props.clearFilter || null}>
            XÓA BỘ LỌC
            </button>
        </article>
      </main>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
