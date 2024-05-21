import { IoIosCloseCircle } from "react-icons/io";
import PropTypes from 'prop-types';

const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
    let renderIoIosCloseCircle;
    if (handleDelete) {
        renderIoIosCloseCircle =
            <IoIosCloseCircle size={18}
                className='cursor-pointer'
                onClick={() => handleDelete(id)}
            />;
    }

    return (
        <div className='flex justify-between items-center mx-2 my-1 bg-customYellow rounded-2xl p-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-xs font-light '>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                {renderIoIosCloseCircle}
            </div>
        </div>
    );
};

OrderCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleDelete: PropTypes.func,
};

export { OrderCard };
