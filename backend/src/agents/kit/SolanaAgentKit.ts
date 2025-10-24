export interface DeployTokenResult {
  mint: string;
  signature: string;
}

export class SolanaAgentKit {
  private readonly rpcUrl: string;
  private readonly privateKey: string;

  constructor(options: { rpcUrl: string; privateKey: string }) {
    this.rpcUrl = options.rpcUrl;
    this.privateKey = options.privateKey;
  }

  async deployToken(
    name: string,
    symbol: string,
    decimals: number,
    totalSupply: number
  ): Promise<DeployTokenResult> {
    const mint = `MOCK_MINT_${Math.random().toString(36).slice(2)}`;
    const signature = `MOCK_SIGNATURE_${Math.random().toString(36).slice(2)}`;
    return { mint, signature };
  }
}

