import ReactDOM from 'react-dom/client';
import {RecoilRoot} from "recoil";
import {RouterProvider} from "react-router-dom";
import router from "@/router";
import '@/utils/entry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
);

