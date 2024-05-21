import PropTypes from 'prop-types'
import { FaArrowRight } from "react-icons/fa";

const OrderCard = ({ date,totalPrice, totalProducts,}) => {
    OrderCard.propTypes = {
        date: PropTypes.node.isRequired,
        totalPrice: PropTypes.node.isRequired,
        totalProducts: PropTypes.node.isRequired,
    }



    return (
        <div className='flex justify-between items-center mb-3 border border-black'>
            <p>
                <span>{ date}</span>
                <span>{totalProducts}</span>
                <span>{ totalPrice}</span>
            </p>
            <FaArrowRight />
        </div>
    )
}
export {OrderCard}