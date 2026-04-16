import { atom } from 'jotai';

export const contractsKeywordAtom = atom('');
export const contractsSortAtom = atom('최신순');
export const resetContractsAtom = atom(null, (_, set) => {
  set(contractsKeywordAtom, '');
  set(contractsSortAtom, '최신순');
});
