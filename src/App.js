import "./App.css";
// import Profile from './Use_hooks/Props_practices/Profile';
// import InputDataField from './Use_hooks/Use_State/use_statehook'
// import { Top } from './Use_hooks/Use_Effect/UseEffectCount';

// import NumberCalculator from './PracticeProjects/Calculator/NumberComponenet';
// import ButtonAppBar from './PracticeProjects/NavBars/header'
// import FoodApp from "./PracticeProjects/FoodApp/FoodApp";
// import Profile from "./PracticeProjects/FoodApp/Profile"
// import FoodHome from "./PracticeProjects/FoodApp/FoodHome"
// import RecipePapers from "./PracticeProjects/FoodApp/RecipeBook"
// import AddRecipe from "./PracticeProjects/FoodApp/AddRecipe"
import Home from './PracticeProjects/SideNavBars/Home'
import Page2 from './PracticeProjects/SideNavBars/Page2'
import Form1 from './PracticeProjects/Forms_practice/Form1'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Form from './PracticeProjects/Forms_practice/Forms'
import Layout from './PracticeProjects/Layout'
import Practice from './PracticeProjects/SideNavBars/Components/AppComponents/Department/Practice'
import Roles from './PracticeProjects/SideNavBars/Components/AppComponents/Department/Role'
import Location from './PracticeProjects/SideNavBars/Components/AppComponents/Department/Location'
import Department from './PracticeProjects/SideNavBars/Components/AppComponents/Department/Department'
// routering createBrowserRouter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="Home" element={<Home />} />
      <Route path="Dashboard" element={<Page2 />} />
      <Route path="Department/Practice" element={<Practice />} />
      <Route path="Department/Roles" element={<Roles />} />
      <Route path="Department/Location" element={<Location />} />
      <Route path="Department/Department" element={<Department />} />
      {/* <Route path="Profile" element={<Profile />} />
      <Route path="RecipePapers" element={<RecipePapers />} />
      <Route path="AddRecipe" element={<AddRecipe />} /> */}
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);
  //   [
  //   {
  //     path: "/",
  //     element: <FoodApp />,
  //     // errorElement: <ErrorPage />,
  //     // children: [
  //     //   {
  //     //     path: "users/",
  //     //     element: <Users />,
  //     //   },
  //     // ],
  //   }
  // ]


function App() {
  return (
    <div className="App">
      {/* <Profile /> */}
      {/* <InputDataField /> */}
      {/* <Top></Top> */}
      {/* <NumberCalculator></NumberCalculator> */}
      {/* <ValidatingForm></ValidatingForm> */}
      {/* <ButtonAppBar></ButtonAppBar> */}

      {/* rotering  */}
      <RouterProvider router={router} />
      {/* <Form></Form> */}
      {/* <Layout></Layout> */}
      {/* <Form1/> */}
    </div>
  );
}

export default App;
