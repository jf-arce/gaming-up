import { useEffect, useState } from 'react';

function usePromise(url,i){
    const [data, setdata] = useState([]);

    useEffect(()=>{
        new Promise((resolve) => {
            if(i>=0){
                setTimeout(() => {
                    resolve(setdata(url[i]));
                }, 500);
            }else{
                setTimeout(() => {
                    resolve(setdata(url));
                }, 500);
            }
        })
    },[])
    
    return data;
}

export default usePromise



