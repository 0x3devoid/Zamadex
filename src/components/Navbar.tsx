'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavItem } from '../types'
import Image from 'next/image'
import { ArrowLeftRight, Droplets, Wallet } from 'lucide-react'
import { ConnectWalletButton } from '@/utils/usableComponents'




const Navbar: React.FC = () => {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { href: '/', label: 'Swap' },
    { href: '/liquidity', label: 'Liquidity' },
    { href: '/portfolio', label: 'Portfolio' }
  ]



  const isActive = (href: string): boolean => pathname === href

  return (
    <nav className="sm:p-5 p-3">
      <div className="flex items-center justify-between">

        <div className='flex items-center gap-5'>
          <Link
            href="/"

          >
            <Image src="/images/zamalogo.avif" alt="ZamaDex Logo" width={50} height={40} />
          </Link>

          <div className='hidden font-[Roboto] sm:flex border border-[#fff] py-2 px-6 rounded-lg bg-white shadow space-x-6'>
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className={` ${isActive(item.href)
                  ? 'font-extrabold text-black'
                  : 'font-semibold text-gray-500 hover:text-black transition-colors duration-300'
                  }`}
              >
                {item.label}
              </Link>
            ))}

          </div>


        </div>

        <div>
         

          <ConnectWalletButton/>
        </div>

      </div>

      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white z-40 shadow-md border-t border-gray-300">
        <div className="flex justify-around items-center py-2 border-t border-gray-300 ">

          <Link
            href="/liquidity"
            className={`flex flex-col items-center space-y-1 ${isActive("/liquidity")
                ? "text-[#f8a007] font-extrabold"
                : "text-gray-500 font-extrabold hover:text-black transition-colors duration-300"
              }`}
          >
            <Droplets className="w-4 h-4" />
            <span className="text-xs">Liquidity</span>
          </Link>

          <Link
            href="/"
            className={`flex flex-col items-center space-y-1 ${isActive("/")
                ? "text-[#f8a007] font-extrabold"
                : "text-gray-500 font-extrabold hover:text-black transition-colors duration-300"
              }`}
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span className="text-xs">Swap</span>
          </Link>

          <Link
            href="/portfolio"
            className={`flex flex-col items-center  space-y-1 ${isActive("/portfolio")
                ? "text-[#f8a007] font-extrabold "
                : "text-gray-500 font-extrabold hover:text-black transition-colors duration-300"
              }`}
          >
            <Wallet className="w-4 h-4" />
            <span className="text-xs">Portfolio</span>
          </Link>

        </div>
      </div>

    </nav>
  )
}

export default Navbar