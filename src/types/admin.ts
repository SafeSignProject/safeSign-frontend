export interface AdminDashboardSummary {
  totalUserCount: number;
  userIncreaseFromYesterday: number;
  totalAnalysisCompletedCount: number;
  todayContractCount: number;
  todayContractIncreaseRate: number;
}

export interface AdminRecentUser {
  userId: number;
  name: string;
  email: string;
  providerType: string;
  initial: string;
}

export interface AdminRecentAnalysisLog {
  analysisId: number;
  fileName: string;
  status: string;
  userName: string;
  userCode: string;
  relativeTime: string;
}

export interface ResponseAdminDashboard {
  summary: AdminDashboardSummary;
  recentUsers: AdminRecentUser[];
  recentAnalysisLogs: AdminRecentAnalysisLog[];
}
