import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

function useProduct(props) {
    const products = useSelector(state => state.product.products)
    const isLoading = useSelector(state => state.product.isLoading)

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

    const getProductById = (id) => {
        const product = products.find((e) => e._id === id)
        return product
    };

    if(isLoading) return []
    if(products.length === 0) return []
    return [getAllProducts, getProducts, getProductsBySlug, getProductById]

}


useProduct.propTypes = {

}

export default useProduct

