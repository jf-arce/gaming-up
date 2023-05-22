import stock from '../data/stock';

export default function getData(){
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(stock);
        }, 200);
    })
}






