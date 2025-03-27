// Realistic but illustrative statistics for the Megapayer ecosystem
// Current data as of 2025

interface EcosystemStats {
  blockchain: {
    validators: number;
    totalStaked: number; // In millions
    blockHeight: number;
    transactionsPerSecond: number;
    activeWallets: number;
  };
  social: {
    activeUsers: number;
    contentPieces: number;
    verifiedCreators: number;
  };
  p2p: {
    activeTrades: number;
    tradingVolume24h: number; // In millions
    successRate: number; // Percentage
  };
  dex: {
    totalValueLocked: number; // In millions
    tradingVolume24h: number; // In millions
    activeChains: number;
  };
  wallet: {
    downloads: number;
    activeUsers: number;
    supportedChains: number;
  };
  stablecoin: {
    marketCap: number; // In millions
    circulating: number; // In millions
    supportedExchanges: number;
  };
}

// This is a placeholder implementation that returns dummy data for demo purposes
// In a real application, this would connect to an API to fetch actual metrics

export async function getEcosystemStats() {
  // In a real implementation, this would fetch data from an API
  return {
    blockchain: {
      validators: 'coming soon',
      totalStaked: 'in development',
      transactionsPerSecond: 'in testing'
    },
    social: {
      activeUsers: 'in development', 
      contentPieces: 'coming soon',
      verifiedCreators: 'in testing'
    },
    p2p: {
      activeTrades: 'coming soon',
      tradingVolume24h: 'in development',
      successRate: 'in testing'
    },
    dex: {
      totalValueLocked: 'coming soon',
      tradingVolume24h: 'in development',
      activeChains: 'in testing'
    },
    wallet: {
      downloads: 'coming soon',
      activeUsers: 'in development',
      supportedChains: 'in testing'
    },
    stablecoin: {
      marketCap: 'coming soon',
      circulating: 'in development',
      supportedExchanges: 'in testing'
    }
  };
}

export function formatStat(value: string | number, type: 'number' | 'currency' | 'percentage') {
  if (typeof value === 'string') {
    return value;
  }

  try {
    switch (type) {
      case 'number':
        return new Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 1
        }).format(value);
      
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          notation: 'compact',
          maximumFractionDigits: 1
        }).format(value);
      
      case 'percentage':
        return new Intl.NumberFormat('en-US', {
          style: 'percent',
          maximumFractionDigits: 1
        }).format(value / 100);
      
      default:
        return String(value);
    }
  } catch (error) {
    console.error('Error formatting stat:', error);
    return String(value);
  }
}
