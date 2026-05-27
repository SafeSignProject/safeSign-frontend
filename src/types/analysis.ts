export type Clause = {
  title: string;
  content: string;
  orderNo: number;
};

export type ResponseContractOCR = {
  contractId: number;
  clauseCount: number;
  message: string;
  lines: string[];
  clauses: Clause[];
  header: {
    address: string;
    landCategory: string;
    landArea: string;
    buildingStructure: string;
    buildingUsage: string;
    buildingArea: string;
    leasedPart: string;
    leasedArea: string;
    deposit: string;
    contractAmount: string;
    middlePayment: string;
    balance: string;
    monthlyRent: string;
  };
};

export type ResponseContractAnalysis = {
  contractId: number;
  status: string;
  message: string;
};

export type ResponseContractAnalysisStatus = {
  contractId: number;
  status: string;
  message: string;
  analyzedAt: string;
};

export interface RelatedLaw {
  lawName: string;
  article: string;
}

export interface ClauseAnalysis {
  articleNo: string;
  title: string;
  clauseType: string;
  content: string;
  riskTypes: string[];
  riskScore: number;
  relatedClauses: string[];
  reason: string;
  relatedLaws: RelatedLaw[];
}

export interface RecommendedSpecialClause {
  title: string;
  content: string;
}

export interface ResponseContractAnalysisResult {
  contractId: number;
  analyzedAt: string;
  overallAnalysis: {
    overallRiskScore: number;
    riskTypes: string[];
    summary: string;
  };
  recommendedSpecialClauses: RecommendedSpecialClause[];
  clauseAnalyses: ClauseAnalysis[];
}
