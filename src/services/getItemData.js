import stock from '../data/stock';

export default function getItemData(id){

    return new Promise((resolve) => {
        setTimeout(() => {
            const requestedItem = stock.find(item => item.id === parseInt(id))
            resolve(requestedItem);
        }, 100);
    })
}