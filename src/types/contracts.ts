export type RequestContracts = {
  keyword?: string;
  sort?: 'latest' | 'oldest' | 'riskDesc' | 'riskAsc';
};

export type Contract = {
  analyzedAt: string;
  contractId: number;
  riskCount: number;
  riskScore: number;
  title: string;
  uploadedAt: string;
};

export type ContractsSummary = {
  high: number;
  low: number;
  medium: number;
  total: number;
};

export type ResponseContracts = {
  contracts: Contract[];
  summary: ContractsSummary;
};
