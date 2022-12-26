import { Route, Routes } from "react-router-dom";
import { CreateUserFormLayout } from "./layouts/CreateUserFormLayout";
import { UserInfo } from "./pages/Form/UserInfo";
import { UserAddress } from "./pages/Form/UserAddress";
import { UserAbout } from "./pages/Form/UserAbout";
import { UserCreated } from "./pages/Form/UserCreated";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CreateUserFormLayout />}>
        <Route path="/" element={<UserInfo />} />
        <Route path="address" element={<UserAddress />} />
        <Route path="about" element={<UserAbout />} />
      </Route>
      <Route path="/success" element={<UserCreated />} />
    </Routes>
  );
}
