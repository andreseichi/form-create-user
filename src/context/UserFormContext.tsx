import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();

  function handleSetUserInfo(userInfoData: UserInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfoData));

    setUserInfo(userInfoData);
    setUser({ userInfo: userInfoData });
  }

  function handleSetUserAddress(userAddressData: UserAddress) {
    localStorage.setItem("userAddress", JSON.stringify(userAddressData));

    setUserAddress(userAddressData);
    setUser({ ...user, userAddress: userAddressData });
  }

  function handleSetUserAbout(userAboutData: UserAbout) {
    localStorage.setItem("userAbout", JSON.stringify(userAboutData));

    setUserAbout(userAboutData);
    setUser({ ...user, userAbout: userAboutData });
  }

  function resetUser() {
    setUser({} as User);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userAddress");
    localStorage.removeItem("userAbout");
  }

  useEffect(() => {
    if (location.pathname === "/") {
      const userInfoStorage = localStorage.getItem("userInfo");
      if (userInfoStorage) {
        const userInfoParsed = JSON.parse(userInfoStorage);
        setUserInfo(userInfoParsed);
        setUser({ userInfo: userInfoParsed });
      }
    } else if (location.pathname === "/address") {
      const userAddressStorage = localStorage.getItem("userAddress");
      if (userAddressStorage) {
        const userAddressParsed = JSON.parse(userAddressStorage);
        setUserAddress(userAddressParsed);
        setUser({ ...user, userAddress: userAddressParsed });
      }
    } else {
      const userAboutStorage = localStorage.getItem("userAbout");
      if (userAboutStorage) {
        const userAboutParsed = JSON.parse(userAboutStorage);
        setUserAbout(userAboutParsed);
        setUser({ ...user, userAbout: userAboutParsed });
      }
    }
  }, [location]);

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
