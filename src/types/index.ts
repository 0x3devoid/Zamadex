import type { Route } from 'next'

export interface NavItem {
  href: Route;
  label: string;
}

export interface LiquidityPool {
  name: string;
  apy: string;
  liquidity: string;
}

export interface LiquidityData {
  totalLiquidity: string;
  pools: LiquidityPool[];
}

export interface Asset {
  symbol: string;
  amount: string;
  value: string;
  change: string;
}

export interface PortfolioData {
  totalValue: string;
  change24h: string;
  assets: Asset[];
}

export interface LayoutProps {
  children: React.ReactNode;
}

// export interface NavbarProps {}
