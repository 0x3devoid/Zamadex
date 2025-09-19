'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { LiquidityData, LiquidityPool } from '@/types'

interface LoadingSpinnerProps {
  message: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => (
  <div className="text-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
    <p className="mt-4 text-gray-600">{message}</p>
  </div>
)

const LiquidityPage: React.FC = () => {
  const [data, setData] = useState<LiquidityData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true)
        setError(null)
        
        // Simulate API call with potential error
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const liquidityData: LiquidityData = {
          totalLiquidity: '$1,234,567',
          pools: [
            { name: 'ETH/USDC', apy: '12.5%', liquidity: '$456,789' },
            { name: 'BTC/ETH', apy: '8.9%', liquidity: '$321,456' },
            { name: 'USDT/DAI', apy: '5.2%', liquidity: '$456,322' }
          ]
        }
        
        setData(liquidityData)
      } catch (err) {
        setError('Failed to load liquidity data')
        console.error('Error fetching liquidity data:', err)
      } finally {
        setLoading(false)
      }
    }

    // fetchData()
  }, [])

  const handleBack = (): void => {
    router.back()
  }

  if (loading) {
    return <LoadingSpinner message="Loading liquidity data..." />
  }

  if (error) {
    return (
      <div className="text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-red-800 font-semibold mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return <div className="text-center text-gray-600">No data available</div>
  }

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Liquidity Pools</h1>
        <button 
          onClick={handleBack}
          className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
          type="button"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Total Liquidity</h2>
        <p className="text-3xl font-bold text-gray-800">{data.totalLiquidity}</p>
      </div>

      <div className="grid gap-4">
        {data.pools.map((pool: LiquidityPool, index: number) => (
          <div 
            key={`${pool.name}-${index}`} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{pool.name}</h3>
                <p className="text-gray-600">Liquidity: {pool.liquidity}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">APY</p>
                <p className="text-xl font-bold text-green-500">{pool.apy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiquidityPage