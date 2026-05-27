export type RecentContract = {
  contractId: number;
  title: string;
  analyzedAt: string;
  riskScore: number;
  riskCount: number;
};

export type ResponseDashboard = {
  user: {
    userId: number;
    name: string;
  };
  summary: {
    totalContracts: number;
    riskyContracts: number;
    monthlyAnalyses: number;
  };
  recentContracts: RecentContract[];
};

export type RequestContractsParams = {
  title: string;
  uploadType: 'PDF' | 'IMAGE';
};

export type ResponseUploadContracts = {
  contractId: number;
  title: string;
  uploadType: 'PDF' | 'IMAGE';
  pageCount: number;
  status: string;
  uploadedAt: string;
};

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

export type ResponseContracts = {
  contracts: Contract[];
  summary: {
    high: number;
    low: number;
    medium: number;
    total: number;
  };
};
