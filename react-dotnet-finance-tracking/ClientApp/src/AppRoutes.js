import { Home } from "./components/Home";
import { ShowData } from "./components/ShowData";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/show-data',
    element: <ShowData />
  }
];

export default AppRoutes;
