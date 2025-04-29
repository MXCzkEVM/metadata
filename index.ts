export const moonchain = {
  id: 18686,
  name: 'Moonchain',
  nativeCurrency: { name: 'MXC', symbol: 'MXC', decimals: 18 },
  rpcUrls: { 'default': { http: [ 'https://rpc.mxc.com' ] } },
} as const;

export const moonchainGeneva = {
  id: 5167004,
  name: 'Moonchain Geneva',
  nativeCurrency: { name: 'MXC', symbol: 'MXC', decimals: 18 },
  rpcUrls: {
    'default': { http: [ 'https://geneva-rpc.moonchain.com' ] },
  },
} as const;