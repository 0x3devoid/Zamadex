'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { PortfolioData, Asset } from '@/types'

interface LoadingSpinnerProps {
  message: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => (
  <div className="text-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
    <p className="mt-4 text-gray-600">{message}</p>
  </div>
)

const PortfolioPage: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchPortfolio = async (): Promise<void> => {
      try {
        setLoading(true)
        setError(null)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 300))
        
        const portfolioData: PortfolioData = {
          totalValue: '$2,456,789',
          change24h: '+5.67%',
          assets: [
            { symbol: 'ETH', amount: '125.5', value: '$234,567', change: '+3.2%' },
            { symbol: 'BTC', amount: '8.2', value: '$456,789', change: '+1.8%' },
            { symbol: 'USDC', amount: '50,000', value: '$50,000', change: '0.0%' }
          ]
        }
        
        setPortfolio(portfolioData)
      } catch (err) {
        setError('Failed to load portfolio data')
        console.error('Error fetching portfolio data:', err)
      } finally {
        setLoading(false)
      }
    }

    // fetchPortfolio()
  }, [])

  const handleBack = (): void => {
    router.back()
  }

  const getChangeColor = (change: string): string => {
    if (change.startsWith('+')) return 'text-green-500'
    if (change.startsWith('-')) return 'text-red-500'
    return 'text-gray-500'
  }

  if (loading) {
    return <LoadingSpinner message="Loading portfolio..." />
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

  if (!portfolio) {
    return <div className="text-center text-gray-600">No portfolio data available</div>
  }

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Portfolio</h1>
        <button 
          onClick={handleBack}
          className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
          type="button"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Portfolio Value</h2>
            <p className="text-3xl font-bold text-gray-800">{portfolio.totalValue}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">24h Change</p>
            <p className={`text-xl font-bold ${getChangeColor(portfolio.change24h)}`}>
              {portfolio.change24h}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {portfolio.assets.map((asset: Asset, index: number) => (
          <div 
            key={`${asset.symbol}-${index}`} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{asset.symbol}</h3>
                <p className="text-gray-600">{asset.amount} {asset.symbol}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">{asset.value}</p>
                <p className={`text-sm font-medium ${getChangeColor(asset.change)}`}>
                  {asset.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioPage