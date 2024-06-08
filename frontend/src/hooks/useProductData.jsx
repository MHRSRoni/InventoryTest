import { readProduct } from "../api/product";
import useProductState from "./useProductState";

export default function useProductData(){
    const [productData, setProductData] = useProductState([]);
    
    useEffect(()=>{
        const getData = async ()=>{
            const res = await readProduct()
            console.log(res)
            setProductData(res.data)
        }
        getData()
    })

    return [productData, setProductData]
}