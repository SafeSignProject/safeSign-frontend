import { FileText, FileCheck, UsersRound } from 'lucide-react';

export const dashboardStats = [
  {
    title: '전체 가입자 수',
    value: '3,847',
    unit: '명',
    desc: '어제 대비 12명 증가',
    icon: <UsersRound size={20} />,
    isUp: true,
  },
  {
    title: '누적 분석 완료 건수',
    value: '12,845',
    unit: '건',
    desc: '안정적으로 분석 중',
    icon: <FileCheck size={20} />,
    isUp: false,
  },
  {
    title: '오늘 등록된 계약서',
    value: '142',
    unit: '건',
    desc: '평균 대비 5% 증가',
    icon: <FileText size={20} />,
    isUp: true,
  },
];

export const recentUsers = [
  {
    name: '홍길동',
    email: 'hong@safe.com',
    provider: 'Email',
  },
  {
    name: '김철수',
    email: 'chul@kakao.com',
    provider: 'Kakao',
  },
  {
    name: '박지민',
    email: 'jimin@gmail.com',
    provider: 'Google',
  },
];

export const analysisLogs = [
  {
    title: '주택임대차계약서.pdf',
    desc: '김철수 (U001) · 방금 전',
    isSuccess: true,
  },
  {
    title: '상가입대차계약서.pdf',
    desc: '이영희 (U023) · 10분 전',
    isSuccess: true,
  },
  {
    title: '프리랜서계약서.jpg',
    desc: '박민수 (U045) · 45분 전',
    isSuccess: false,
  },
];
