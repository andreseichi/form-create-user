import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
  userInfo: UserInfo;
  handleSetUserInfo: (userInfo: UserInfo) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  userInfo: UserInfo;
};

type UserInfo = {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  birthDate: string;
};

export const UserFormContext = createContext({} as AuthContextData);

export function UserFormProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);

  function handleSetUserInfo(userInfoData: UserInfo) {
    setUserInfo(userInfoData);
    setUser({ userInfo: userInfoData });
  }

  return (
    <UserFormContext.Provider value={{ userInfo, handleSetUserInfo }}>
      {children}
    </UserFormContext.Provider>
  );
}
