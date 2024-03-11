import {lazy} from "react";
import './index.scss'

const Header = lazy(() => import('@/pages/Home/Header'))
const Banner = lazy(() => import('@/pages/Home/Banner'))
const Game = lazy(() => import('@/pages/Home/Game'))
const MachineDialog = lazy(() => import('@/pages/Home/MachineDialog'))

function Home() {

    return (
        <div className="Home img-bg">
            <Header />
            <div className="home-container">
                <Banner />
                <Game />
            </div>
            <MachineDialog />
        </div>
    );
}

export default Home;