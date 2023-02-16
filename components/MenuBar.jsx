import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  BookOpenIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  DuplicateIcon,
  HeartIcon,
  PencilAltIcon,
  UserGroupIcon,
  UserAddIcon,
  ViewListIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import LogoNeu from '../public/LogoNeu.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <div
      id="topBorder"
      className='fixed top-0 z-10 hidden lg:mx-auto lg:flex lg:h-[120px] lg:w-full lg:items-center lg:justify-between lg:rounded-lg lg:bg-[url("/Wood3.svg")] lg:bg-cover lg:bg-no-repeat lg:text-white lg:text[2.0rem]'
    >
      <Link href="/">
        <div className="h-12 w-12 ">
          <LogoNeu />
        </div>
      </Link>

      <ul className="flex items-center justify-evenly">
        <li className="flex items-center gap-x-1">
          <Menu as="div" className="relative inline-block">
            <Link href="/" className="text-slg">
              <div className="flex items-center">
                <Image
                  src="/Bulleye.svg"
                  height={30}
                  width={30}
                  alt="bullauge"
                  className="scale-125 transform"
                />

                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-black uppercase text-gray-50 shadow-sm hover:bg-yellow-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-100 lg:text-[.85rem] 2xl:text-[1.0rem]">
                    Home
                  </Menu.Button>
                </div>
              </div>
            </Link>
          </Menu>
        </li>
        <li className="flex items-center">
          <div className="h-8 w-8 ">
            <Image
              src="/Bulleye.svg"
              height={30}
              width={30}
              alt="bullauge"
              className="scale-125 transform "
            />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-black uppercase text-gray-50 shadow-sm hover:bg-yellow-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-100 2xl:text-[1.33rem]">
                Über uns
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-yellow-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="geschichte"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <BookOpenIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Geschichte
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="team"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <UserGroupIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Unser Team
                      </Link>
                    )}
                  </Menu.Item>{' '}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="Test"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Test
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="impressum"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Impressum
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="flex items-center gap-x-2 p-4">
          <div className="h-8 w-8 ">
            <Image
              src="/Bulleye.svg"
              height={30}
              width={30}
              alt="bullauge"
              className="scale-125 transform "
            />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-black uppercase text-gray-50 shadow-sm hover:bg-yellow-600 focus:outline-none
 focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-100 2xl:text-[1.33rem]"
              >
                Drinks & Snacks
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-yellow-600 shadow-lg focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="biere"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Biere & Softgetränke
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="weine"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Weine
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="kurze"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Kurze & Longdrinks
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="snacks"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        KleinerImbiss Snack
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="flex items-center gap-x-2 p-4">
          <div className="h-8 w-8 ">
            <Image
              src="/Bulleye.svg"
              height={30}
              width={30}
              alt="bullauge"
              className="scale-125 transform "
            />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-black uppercase text-gray-50 shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-100 2xl:text-[1.33rem]">
                Sportarena
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-yellow-600
 shadow-lg focus:outline-none"
              >
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="scfreiburg"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        SC Freiburg Info
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="bundesliga"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Tabelle Bundesliga
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1"></div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="flex items-center gap-x-2 p-4">
          <Menu as="div" className="relative inline-block text-left">
            <Link href="events" className="events">
              <div className="flex items-center gap-x-1">
                <Image
                  src="/Bulleye.svg"
                  height={30}
                  width={30}
                  alt="bullauge"
                  className="sca
                    zzhover:transform "
                />

                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-black uppercase text-gray-50 shadow-sm hover:bg-yellow-600 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-100 2xl:text-[1.33rem]">
                    Events
                  </Menu.Button>
                </div>
              </div>
            </Link>
          </Menu>
        </li>

        <li className="flex items-center gap-x-2 p-4">
          <div className="h-8 w-8 ">
            <Image
              src="/Bulleye.svg"
              height={30}
              width={30}
              alt="bullauge"
              className="scale-125 transform "
            />
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 font-black uppercase text-gray-50 shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-100 2xl:text-[1.33rem]">
                Wohin?
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-yellow-600 shadow-lg focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="lageplan"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Lageplan & Infos
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="openstreet"
                        className={classNames(
                          active
                            ? 'bg-yellow-700 text-gray-100'
                            : 'text-gray-50',
                          'group flex items-center px-4 py-2 text-[1rem]',
                        )}
                      >
                        <ViewListIcon
                          className="mr-3 h-5 w-5 text-gray-100 group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                        Karte in Openstreet
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1"></div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
