import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
  user: User;
  handleSetUserInfo: (userInfo: UserInfo) => void;
  handleSetUserAddress: (userAddress: UserAddress) => void;
  handleSetUserAbout: (userAbout: UserAbout) => void;
  resetUser: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  userInfo?: UserInfo;
  userAddress?: UserAddress;
  userAbout?: UserAbout;
};

type UserInfo = {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  birthDate: string;
};

type UserAddress = {
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  reference: string;
};

type UserAbout = {
  about: string;
};

export const UserFormContext = createContext({} as AuthContextData);

export function UserFormProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [userAddress, setUserAddress] = useState<UserAddress>(
    {} as UserAddress
  );
  const [userAbout, setUserAbout] = useState<UserAbout>({} as UserAbout);

  function handleSetUserInfo(userInfoData: UserInfo) {
    setUserInfo(userInfoData);
    setUser({ userInfo: userInfoData });
  }

  function handleSetUserAddress(userAddressData: UserAddress) {
    setUserAddress(userAddressData);
    setUser({ ...user, userAddress: userAddressData });
  }

  function handleSetUserAbout(userAboutData: UserAbout) {
    setUserAbout(userAboutData);
    setUser({ ...user, userAbout: userAboutData });
  }

  function resetUser() {
    setUser({} as User);
  }

  return (
    <UserFormContext.Provider
      value={{
        user,
        handleSetUserInfo,
        handleSetUserAddress,
        handleSetUserAbout,
        resetUser,
      }}
    >
      {children}
    </UserFormContext.Provider>
  );
}
