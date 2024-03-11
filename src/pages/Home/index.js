import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import './index.scss';
const Header = lazy(() => import('@/pages/Home/Header'));
const Banner = lazy(() => import('@/pages/Home/Banner'));
const Game = lazy(() => import('@/pages/Home/Game'));
const MachineDialog = lazy(() => import('@/pages/Home/MachineDialog'));
function Home() {
    return (_jsxs("div", { className: "Home img-bg", children: [_jsx(Header, {}), _jsxs("div", { className: "home-container", children: [_jsx(Banner, {}), _jsx(Game, {})] }), _jsx(MachineDialog, {})] }));
}
export default Home;
