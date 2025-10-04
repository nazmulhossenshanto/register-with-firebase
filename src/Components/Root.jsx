import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayouts></RootLayouts>,
        children: [
            {
                path: 'login',
                element: <h1>Login</h1>
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
        ]
    }
]);
export default router;