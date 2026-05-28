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

export interface AdminAnalysisStats {
  ocrSuccessRate: number;
  averageAnalysisTimeSeconds: number;
  totalAnalysisCount: number;
}

export interface AdminAnalysisLog {
  analysisId: number;
  fileName: string;
  status: string;
  userName: string;
  userCode: string;
  analyzedAt: string;
  ocrTimeSeconds: number;
  analysisTimeSeconds: number;
  riskScore: number;
  issueCount: number;
}

export interface ResponseAdminAnalysisLogs {
  stats: AdminAnalysisStats;
  logs: AdminAnalysisLog[];
}

export interface AdminAnalysisIssue {
  title: string;
  description: string;
  riskType: string;
}

export interface ResponseAdminAnalysisDetail {
  analysisId: number;
  fileName: string;
  analyzedAt: string;
  totalTimeSeconds: number;
  riskScore: number;
  issueCount: number;
  issues: AdminAnalysisIssue[];
}

export interface AdminUser {
  userId: number;
  email: string;
  name: string;
  providerType: string;
  role: string;
  createdAt: string;
}

export interface MappedAdminUser {
  id: string;
  name: string;
  email: string;
  joinedAt: string;
  provider: string;
  role: string;
  rawId: number;
}

export interface AdminUserAnalysisHistory {
  analyzedAt: string;
  fileName: string;
  status: string;
  riskScore: number;
}

export interface ResponseAdminUserAnalysisHistory {
  userId: number;
  name: string;
  totalAnalysisCount: number;
  histories: AdminUserAnalysisHistory[];
}

export interface ResponseAdminDeleteUser {
  userId: number;
  name: string;
  message: string;
}
