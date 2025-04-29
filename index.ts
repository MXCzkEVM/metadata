export const moonchain = {
  id: 18686,
  name: 'Moonchain',
  nativeCurrency: { name: 'MXC', symbol: 'MXC', decimals: 18 },
  rpcUrls: { 'default': { http: ['https://rpc.mxc.com'] } },
  blockExplorers: { default: { name: 'Moonchain Explorer', url: 'https://explorer.moonchain.com' } }
} as const;

export const moonchainGeneva = {
  id: 5167004,
  name: 'Moonchain Geneva',
  nativeCurrency: { name: 'MXC', symbol: 'MXC', decimals: 18 },
  rpcUrls: { 'default': { http: ['https://geneva-rpc.moonchain.com'] } },
  blockExplorers: { default: { name: 'Moonchain Explorer', url: 'https://geneva-explorer.moonchain.com' } }
} as const;