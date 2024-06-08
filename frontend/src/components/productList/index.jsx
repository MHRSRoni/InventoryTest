export default function ProductList({list}){
    console.log(list)
    return (
        <ul className="flex flex-col ">
            <li className="border w-full flex py-2 px-2 peer-first:border-t  peer-[&:not(:first-child)]li:border-t-0">
                <div className="w-1/6">Id</div>
                <div className="w-1/6 flex-1">Name</div>
                <div  className="w-1/6">Price</div>
                <div  className="w-1/6">Discount Price</div>
                <div  className="w-1/6">Action</div>
            </li>
            <li className="border w-full flex py-2 px-2">
                <div className="w-1/6">1</div>
                <div className="w-1/6 flex-1">Laptop</div>
                <div  className="w-1/6">75000</div>
                <div  className="w-1/6">70000</div>
                <div  className="w-1/6 flex items-center gap-2">
                    <button className="px-2 py-1 bg-blue-600 rounded-md text-white">Edit</button>
                    <button className="px-2 py-1 bg-red-600 rounded-md text-white">Delete</button>
                </div>
            </li>
            
        </ul>
    );
}