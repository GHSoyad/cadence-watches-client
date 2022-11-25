import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import AddProduct from "../../Pages/Dashboard/SellerDashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/SharedDashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'category/:id',
                loader: ({ params }) => {
                    return params.id;
                },
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/add-product',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            }
        ]
    }
])

export default router;