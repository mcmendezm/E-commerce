import PropTypes from 'prop-types'
import { FaChevronRight } from "react-icons/fa6";

const OrdersCard = ({ date,totalPrice, totalProducts,}) => {
    OrdersCard.propTypes = {
        date: PropTypes.node.isRequired,
        totalPrice: PropTypes.node.isRequired,
        totalProducts: PropTypes.node.isRequired,
    }
    return (
        <div className='flex justify-between items-center mb-3 border border-black w-80 p-4 '>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col font-orbitron text-xs'>
                    <span className='font-light'>{ date}</span>
                    <span className='font-light'>Products: {totalProducts}</span>
                </p>
                <p className='flex justify-end items-center gap-2'>
                    <span className='font-orbitron font-medium text-xl'>${totalPrice}</span>
                    <FaChevronRight className='cursor-pointer' />
                </p>
            </div>
        </div>
    )
}
export {OrdersCard}