export interface RecentContract {
  analyzedAt: string;
  contractId: number;
  riskCount: number;
  riskScore: number;
  title: string;
}

export interface DashboardSummary {
  monthlyAnalyses: number;
  riskyContracts: number;
  totalContracts: number;
}

export interface DashboardUser {
  name: string;
  userId: number;
}

export interface ResponseDashboard {
  recentContracts: RecentContract[];
  summary: DashboardSummary;
  user: DashboardUser;
}
