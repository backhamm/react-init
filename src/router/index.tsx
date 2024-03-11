import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";

const App = lazy(() => import('@/pages'))
const Home = lazy(() => import('@/pages/Home'))
const Abnormal = lazy(() => import('@/pages/Abnormal'))

export default createBrowserRouter([
    {
        path: '/playGamePCK',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: '401',
                element: <Abnormal type={401} />,
            }
        ]
    },
])