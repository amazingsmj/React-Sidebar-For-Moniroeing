import { Menu, MenuButton } from '@headlessui/react';
import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Ersa from "../../assets/744311.png";

function Header() {
  const navigate = useNavigate()
  
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200'>
        <div className='relative'>
          <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 left-3 -translate-y-1/2'/>
            <input type='text' 
                   placeholder='Search...' 
                   className='text-sm focus:outline-none active:outline-none h-10 pl-11 pr-4 w-[24rem] border border-gray-300 rounded-lg px-4'
                   
            />
        </div>

        {/*  Message, Alert,....etc  */}
        
        <div className='flex items-center gap-2 mr-2'>
          {/*
        <Popover className="relative">
					{({ open }) => (
						<>
							<PopoverButton
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineChatAlt fontSize={24} /> 
							</PopoverButton>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Messages</strong>
										<div className="mt-2 py-1 text-sm">This is messages panel.</div>
									</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>

        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-black data-[hover]:text-sky-blue data-[focus]:outline-1 data-[focus]:outline-white">
            Solutions
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-black/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-sky-blue/10" href="#">
                <p className="font-semibold text-black">Insights</p>
                <p className="text-black/50">Measure actions your users take</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-sky-blue/10" href="#">
                <p className="font-semibold text-black">Automations</p>
                <p className="text-black/50">Create your own targeted content</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-sky-blue/10" href="#">
                <p className="font-semibold text-black">Reports</p>
                <p className="text-black/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-sky-blue/10" href="#">
                <p className="font-semibold text-black">Documentation</p>
                <p className="text-black/50">Start integrating products and tools</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>

        
        <Popover className="relative">
					{({ open }) => (
						<>
							<PopoverButton
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineBell fontSize={24} /> 
							</PopoverButton>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Notifications</strong>
										<div className="mt-2 py-1 text-sm">This is notification panel.</div>
									</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
        */}
        
        {/* Menu Section */}
        <Menu as="div" className="relative">
					<div>
						<MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<div
								className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
								style={{ backgroundImage: `url(${Ersa})` }}
							>
							</div>
						</MenuButton>
					</div>

					
				</Menu>
            
        </div>
    </div>
  )
}

export default Header;