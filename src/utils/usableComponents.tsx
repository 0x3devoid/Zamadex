import {  Wallet, ChevronRightIcon } from 'lucide-react'
import { useWallet } from '@/context/walletContext'

export const ConnectWalletButton: React.FC = () => {
  const { isConnected, connectWallet, address } = useWallet();

  return (

    <button onClick={connectWallet} className='bg-[#000] flex justify-between space-x-3 font-[Roboto] border border-[#111010] text-white cursor-pointer font-bold py-2 px-4 rounded-2xl hover:bg-[#333] hover:border-[#333] transition-colors'>
      <Wallet className="w-4 h-4" />
      <p className='text-sm '>{isConnected ? formatAddress(address ? address : "Reconnect wallet") : "Connect"}</p>
      <ChevronRightIcon className="w-5 h-5 text-gray-600" />
    </button>
  );

};

export const formatAddress = (addr: string) => {
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
}