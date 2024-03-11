import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import '@/utils/entry';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(RecoilRoot, { children: _jsx(RouterProvider, { router: router }) }));
