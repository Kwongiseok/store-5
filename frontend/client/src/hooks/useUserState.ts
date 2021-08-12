import React, { useReducer } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userState } from '@src/recoil/userState';
import { User } from '@src/types/User';
import { AuthAPI } from '@src/apis/authAPI';

const useUserState = () => {
  const [userRecoil, setUserRecoil] = useRecoilState<User>(userState);
  const userDispatch = async (action: { type: string }) => {
    switch (action.type) {
      case 'CHECK':
        const { isLoggedIn, name } = await AuthAPI.getCheckLoggedIn();
        setUserRecoil({ isLoggedIn, name });
        break;
      case 'LOGOUT':
        if (!userRecoil.isLoggedIn) return;
        const res = await AuthAPI.logout();
        if (res) {
          useResetRecoilState(userState);
        }
        break;
      default:
        return;
    }
  };
  return [userRecoil, userDispatch] as const;
};

export default useUserState;
