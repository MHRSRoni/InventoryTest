import ProductForm from '../../components/productForm';
import useProductState from '../../hooks/useProductState';
import PageLayout from '../../layout/pageLayout';

export default function ProductCreatePage() {
    const initialState = {
        name: '',
        description: '',
        price: '',
        discoutPrice: ''
    }
    const [productData, setProductData] = useProductState(initialState);
   return (
      <PageLayout>
         <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-semibold my-12">Create Product</h2>
            <div className="flex justify-center items-center mb-12">
                <ProductForm productData={productData} setProductData={setProductData} onSubmit={() => {}} onCancel={() => {}}/>
            </div>
         </div>
      </PageLayout>
   );
}
