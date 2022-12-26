import { Route, Routes } from "react-router-dom";
import { CreateUserFormLayout } from "./layouts/CreateUserFormLayout";
import { UserInfo } from "./pages/Form/UserInfo";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<CreateUserFormLayout />}>
        <Route path="/" element={<UserInfo />} />
        {/* <Route path="address" element={<Home />} />
        <Route path="about" element={<History />} />
        <Route path="success" element={<History />} /> */}
      </Route>
    </Routes>
  );
}
