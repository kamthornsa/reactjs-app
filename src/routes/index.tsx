import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import LoginPage from "../pages/Login";
// import Logout from "../pages/Logout";
import { ProtectedRoute } from "./ProtectedRoute";
import RegisterPage from "../pages/Register";
import Logout from "../pages/Logout";
import ProfilePage from "../pages/Profile";
import HomePage from "../pages/HomeUser";
import { HeaderComponent } from '../components/HeaderComponent';
import { HomeComponent }  from '../components/HomeComponent';
import { ContactComponent } from "../components/ContactComponent";
import ContactPage from "../pages/Contact";
import  HeaderPage  from '../pages/Header';
import  ServiceStudentPage  from "../pages/ServiceStudent";
import  HeaderStudentPage  from "../pages/HeaderStudent";
import  FormEditNamePage  from "../pages/FormEditName";
import  FormEducationBreakPage  from "../pages/FormEducationBreak";
import  FormRepetitionOrReplacementPage  from "../pages/FormROR";
import  PDFformtest  from "../pages/PDFFormtest";
import  DateTest  from "../testFinal/Date";
import  InterfaceTest  from "../testFinal/Interface";
import  BMITest  from "../testFinal/BMI";
import  NumberTest  from "../testFinal/Number";
import  UserTest  from "../testFinal/User";

const Routes = () => {
  const { token, role } = useAuth();

  // Define routes accessible only to authenticated users
  const routesForStudent = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <HeaderStudentPage />,
    
        },
        {
          path: "/myform",
          element: <div> Form</div>,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
        {
          path: "/services",
          element: <ServiceStudentPage />,
        },
        {
          path: "/formEditName",
          element: <FormEditNamePage />,
        },
        {
          path: "/formEducationBreak",
          element: <FormEducationBreakPage />,
        },
        {
          path: "/formROR",
          element: <FormRepetitionOrReplacementPage />,
        },
        {
          path: "/pdfTest",
          element: <PDFformtest />,
        },
        {
          path: "/testDate",
          element: <DateTest />,
        },
        {
          path: "/interface",
          element: <InterfaceTest />,
        },
        {
          path: "/BMI",
          element: <BMITest />,
        },
        {
          path: "/number",
          element: <NumberTest />,
        },
        {
          path: "/user",
          element: <UserTest />,
        }
      ],
    },
  ];
  const routesForAdmin = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <div>Admin Home Page</div>,
        },
        {
          path: "/admin",
          element: <div>Admin Profile</div>,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];
  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <HeaderPage />,

    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...(token && role === "student" ? routesForStudent : []), // Conditionally include user routes
    ...(token && role === "admin" ? routesForAdmin : []), //
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
