import { atom } from 'recoil'

export const tweetListAtom = atom({
  key: 'tweetsState',
  default: [],
});
