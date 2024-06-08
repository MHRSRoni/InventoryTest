export default function ProductForm({ productData, setProductData, onSubmit, onCancel }) {

   return (
      <div className="flex flex-col gap-4 px-12 py-8 border border-gray-300 rounded-xl">
         <label className="flex flex-col gap-1 text-gray-800">
            Product Name
            <input
               name="name"
               value={productData.name}
               onChange={setProductData}
               placeholder="Laptop"
               type="text"
               className="px-6 py-2 border rounded-md"
            />
         </label>

         <label className="flex flex-col gap-1 text-gray-800">
            Product Description
            <textarea
               placeholder="this is the latest laptop of HP in 2024.............."
               type="text"
               value={productData.description}
               onChange={setProductData}
               name="description"
               rows="5"
               className="px-6 py-2 border rounded-md"
            />
         </label>
         <div className="flex gap-4">
            <label className="flex flex-col gap-1 text-gray-800">
               Product Price
               <input
                  name="price"
                  value={productData.price}
                  onChange={setProductData}
                  placeholder="XXXXXX"
                  type="text"
                  className="px-6 py-2 border rounded-md"
               />
            </label>
            <label className="flex flex-col gap-1 text-gray-800">
               Discount Price
               <input
                  placeholder="XXXXXX"
                  name="discountPrice"
                  value={productData.discountPrice}
                  onChange={setProductData}
                  type="text"
                  className="px-6 py-2 border rounded-md"
               />
            </label>
         </div>
         <div className="flex flex-col gap-4 mt-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md flex-1" onClick={onSubmit}>
               Submit
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md flex-1" onClick={onCancel}>
               Cancel
            </button>
         </div>
      </div>
   );
}
