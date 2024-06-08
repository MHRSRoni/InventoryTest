import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import MainContainerLayout from '../MainContainerLayout';
export default function DashBoardLayout() {
   return (
      <MainContainerLayout>
         <div className="flex">
            <div className="max-w-[400px] min-w-[200px] w-[300px] border-r border-gray-300 min-h-screen flex flex-col">
               <h1 className="text-3xl font-bold text-center my-12">
                  Inventory
               </h1>
               <Sidebar />
            </div>
            <div className="flex-1">
               <Outlet />
            </div>
         </div>
      </MainContainerLayout>
   );
}
