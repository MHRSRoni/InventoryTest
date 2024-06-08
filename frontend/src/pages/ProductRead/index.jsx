import ProductList from "../../components/productList";
import useProductState from "../../hooks/useProductState";
import PageLayout from "../../layout/pageLayout";

export default function ProductReadPage(){
    const [productData, setProductData] = useProductState([]);
    return (
        <PageLayout>
            <h1 className="text-4xl font-semibold my-12">Read Product</h1>
            <div>
                <ProductList list={productData}/>
            </div>
        </PageLayout>
    );
}