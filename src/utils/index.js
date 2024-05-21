/**
 * This funtion calculates total price of new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Toral price
 */
export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
} 