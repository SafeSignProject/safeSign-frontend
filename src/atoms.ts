import { atom } from 'jotai';

export const contractsKeywordAtom = atom('');
export const contractsSortAtom = atom('최신순');
export const resetContractsAtom = atom(null, (_, set) => {
  set(contractsKeywordAtom, '');
  set(contractsSortAtom, '최신순');
});

export interface AnalysisFilterState {
  period: string;
  status: string;
}

export const adminAnalysisKeywordAtom = atom('');

export const analysisFilterAtom = atom<AnalysisFilterState>({
  period: '전체기간',
  status: '전체',
});
