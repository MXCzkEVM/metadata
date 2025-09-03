export const moonchain = {
  id: 18686,
  name: 'Moonchain',
  nativeCurrency: { name: 'MXC', symbol: 'MXC', decimals: 18 },
  rpcUrls: { 'default': { http: ['https://rpc.mxc.com'] } },
  blockExplorers: { default: { name: 'Moonchain Explorer', url: 'https://explorer.moonchain.com' } },
  icon: 'https://raw.githubusercontent.com/MXCzkEVM/metadata/main/logo-circle.svg',
} as const;

export const moonchainGeneva = {
  id: 5167004,
  name: 'Moonchain Geneva',
  nativeCurrency: { name: 'MXC', symbol: 'MXC', decimals: 18 },
  rpcUrls: { 'default': { http: ['https://geneva-rpc.mxc.com'] } },
  blockExplorers: { default: { name: 'Moonchain Explorer', url: 'https://geneva-explorer.moonchain.com' } },
  icon: 'https://raw.githubusercontent.com/MXCzkEVM/metadata/main/logo-circle.svg',
} as const;

export const hardhatMoonchainGeneva = {
  name: 'Moonchain Geneva',
  currency: { decimals: 18, name: 'MXC Token', symbol: 'MXC' },
  explorer: { name: 'etherscan', url: 'https://geneva-explorer.moonchain.com' },
  icon: 'https://raw.githubusercontent.com/MXCzkEVM/metadata/main/logo-circle.svg',
  url: 'https://geneva-rpc.mxc.com',
  chainId: 5167004,
  type: 'http',
  chainType: 'l1',
  testnet: true,
} as const;

export const hardhatMoonchain = {
  name: 'Moonchain',
  currency: { decimals: 18, name: 'MXC Token', symbol: 'MXC' },
  explorer: { name: 'etherscan', url: 'https://explorer.moonchain.com' },
  icon: 'https://raw.githubusercontent.com/MXCzkEVM/metadata/main/logo-circle.svg',
  url: 'https://rpc.mxc.com',
  type: 'http',
  chainId: 18686,
  chainType: 'l1',
}