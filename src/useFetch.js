import { useEffect, useState } from 'react';


function useRupan(url) {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
          const fetchData = async() =>{
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result)
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
          }
          fetchData();
    },[url])

    return{data,loading,error};
}

export default useRupan;