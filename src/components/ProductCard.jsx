import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = ({ data }) => {

    const dispatch = useDispatch()

    return (
        <div className="product-card">
            <Link to={`/catalog/${data.slug}`}>
                <div className="product-card__image">
                    <img src={data.imageSrc} alt="" />
                    {/* <img src={data.img02} alt="" /> */}
                </div>
                <h3 className="product-card__name">{data.name}</h3>
                {/* <div className="product-card__price">
                    {numberWithCommas(data.price)}
                    <span className="product-card__price__old">
                        <del>{numberWithCommas(399000)}</del>
                    </span>
                </div> */}
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => dispatch(set(data.slug))}
                >
                    Xem chi tiết
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
