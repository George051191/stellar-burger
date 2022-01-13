export const uid = () => { return Date.now() * Math.random() }

export function calculateCost(elements, bunPrice = 0) {
    return (2 * bunPrice) + elements.reduce((res, item) => {
        return res + item.price
    }, 0)
}