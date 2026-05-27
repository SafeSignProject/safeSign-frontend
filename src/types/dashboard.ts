export type RecentContract = {
  analyzedAt: string;
  contractId: number;
  riskCount: number;
  riskScore: number;
  title: string;
};

export type DashboardSummary = {
  monthlyAnalyses: number;
  riskyContracts: number;
  totalContracts: number;
};

export type DashboardUser = {
  name: string;
  userId: number;
};

export type ResponseDashboard = {
  recentContracts: RecentContract[];
  summary: DashboardSummary;
  user: DashboardUser;
};
