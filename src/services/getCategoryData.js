import stock from '../data/stock';

export default function getItemData(category){

    return new Promise((resolve) => {
        setTimeout(() => {
            const requestedItems = stock.filter(item => item.category === category)
            resolve(requestedItems);
        }, 100);
    })
}