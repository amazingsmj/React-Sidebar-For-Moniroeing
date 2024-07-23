import classNames from 'classnames';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FcBrokenLink } from "react-icons/fc";
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`flex flex-col ${isOpen ? 'w-60' : 'w-20'} p-3 bg-neutral-900 text-white transition-width duration-300`}>
      <div className='flex items-center gap-2 px-1 py-3'>
        <Link to='/'><FcBrokenLink fontSize={30} /></Link>
        {isOpen && <span className='text-neutral-100 text-lg'><Link to='/' className='text-white'>Monitoring</Link></span>}
        <div className="ml-auto bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
      {/* Section 1 */}
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} isOpen={isOpen} />
        ))}
      </div>
      {/* Section 2 */}
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
          <SidebarLink key={item.key} item={item} isOpen={isOpen} />
        ))}
        <div className={classNames('text-red-500 cursor-pointer', linkClass)}>
          <span className='text-xl'>
            <HiOutlineLogout />
          </span>
          {isOpen && <Link to='/' className='text-red-500'>LogOut</Link>}
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar;

function SidebarLink({ item, isOpen }) {
  const { pathname } = useLocation();

  return (
    <Link to={item.path} className={classNames(
      pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
      linkClass
    )}>
      <span className='text-xl'>{item.icon}</span>
      {isOpen && item.label}
    </Link>
  )
}
