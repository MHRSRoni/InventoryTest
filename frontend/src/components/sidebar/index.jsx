import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();
   return (
      <ul className="space-y-2 font-semibold mx-2">
         <li
            className={`hover:bg-slate-50 py-2 px-8 cursor-pointer ${window.location.href.includes('create') ? 'bg-slate-400 ' : ''}`}
            onClick={() => navigate('/create')}
         >
            Create Product
         </li>
         <li
            className={`hover:bg-slate-50 py-2 px-8 cursor-pointer ${window.location.href.includes('read') ? 'bg-slate-400 ' : ''}`}
            onClick={() => navigate('/read')}
         >
            Read Product
         </li>
      </ul>
   );
}
