import { FileText, TriangleAlert, TrendingUp, Sparkles, Zap, Award } from 'lucide-react';

export const STATISTICS_ITEM = [
  {
    title: '전체 계약서',
    value: '12',
    desc: '총 분석 완료',
    Icon: FileText,
    SubIcon: Sparkles,
  },
  {
    title: '위험 계약서',
    value: '3',
    desc: '주의 필요',
    Icon: TriangleAlert,
    SubIcon: Zap,
  },
  {
    title: '이번 달 분석',
    value: '5',
    desc: '활발한 활동 중',
    Icon: TrendingUp,
    SubIcon: Award,
  },
];

export const CONTRACTS_ITEM = [
  {
    id: 1,
    title: '주택임대차계약서.pdf',
    date: '2026-03-15',
    riskCount: 3,
    score: 75,
  },
  {
    id: 2,
    title: '프리랜서용역계약서.pdf',
    date: '2026-03-15',
    riskCount: 2,
    score: 45,
  },
  {
    id: 3,
    title: '업무위탁계약서.pdf',
    date: '2026-03-05',
    riskCount: 0,
    score: 15,
  },
  {
    id: 4,
    title: '근로계약서.pdf',
    date: '2026-02-28',
    riskCount: 2,
    score: 52,
  },
  {
    id: 5,
    title: '상가임대차계약서.pdf',
    date: '2026-02-20',
    riskCount: 4,
    score: 68,
  },
];
