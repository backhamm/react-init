import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const App = lazy(() => import('@/pages'));
const Home = lazy(() => import('@/pages/Home'));
const Abnormal = lazy(() => import('@/pages/Abnormal'));
export default createBrowserRouter([
    {
        path: '/playGamePCK',
        element: _jsx(App, {}),
        children: [
            {
                path: '',
                element: _jsx(Home, {}),
            },
            {
                path: '401',
                element: _jsx(Abnormal, { type: 401 }),
            }
        ]
    },
]);
