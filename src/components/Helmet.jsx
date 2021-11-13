import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Helmet = props => {

    const isLoading = useSelector(state => state.product.isLoading)

    if(isLoading) {
        document.title =  (props.title || 'Không tồn tại sản phẩm') + ' - ChaiLoChenChen'
    } else {
        document.title =  'Sản phẩm - ChaiLoChenChen'
    }

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        document.title =  props.title + ' - ChaiLoChenChen'
    }, [props.title])

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
