//#region index.d.ts
declare const moonchain: {
  readonly id: 18686;
  readonly name: "Moonchain";
  readonly nativeCurrency: {
    readonly name: "MXC";
    readonly symbol: "MXC";
    readonly decimals: 18;
  };
  readonly rpcUrls: {
    readonly default: {
      readonly http: readonly ["https://rpc.mxc.com"];
    };
  };
};
declare const moonchainGeneva: {
  readonly id: 5167004;
  readonly name: "Moonchain Geneva";
  readonly nativeCurrency: {
    readonly name: "MXC";
    readonly symbol: "MXC";
    readonly decimals: 18;
  };
  readonly rpcUrls: {
    readonly default: {
      readonly http: readonly ["https://geneva-rpc.moonchain.com"];
    };
  };
}; //#endregion
export { moonchain, moonchainGeneva };