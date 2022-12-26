import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
  user: User;
  handleSetUserInfo: (userInfo: UserInfo) => void;
  handleSetUserAddress: (userAddress: UserAddress) => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  userInfo?: UserInfo;
  userAddress?: UserAddress;
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

export const UserFormContext = createContext({} as AuthContextData);

export function UserFormProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [userAddress, setUserAddress] = useState<UserAddress>(
    {} as UserAddress
  );

  function handleSetUserInfo(userInfoData: UserInfo) {
    setUserInfo(userInfoData);
    setUser({ userInfo: userInfoData });
  }

  function handleSetUserAddress(userAddressData: UserAddress) {
    setUserAddress(userAddressData);
    setUser({ ...user, userAddress: userAddressData });
  }

  return (
    <UserFormContext.Provider
      value={{ user, handleSetUserInfo, handleSetUserAddress }}
    >
      {children}
    </UserFormContext.Provider>
  );
}
