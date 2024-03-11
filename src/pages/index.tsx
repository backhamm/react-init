import {Outlet} from "react-router-dom";
import {useRecoilState} from "recoil";
import {isH5State} from "@/store/common.ts";
import {useEffect} from "react";

function App() {
    const [isH5, setIsH5] = useRecoilState(isH5State)

    useEffect(() => {
        const onResize = () => {
            const IsH5 = window.innerWidth < 1200
            if (IsH5 !== isH5) {
                setIsH5(IsH5)
                localStorage.setItem('isH5', String(IsH5))
                document.getElementsByTagName('html')[0].setAttribute('class', IsH5 ? 'H5' : 'PC')
            }
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [isH5])

    return (
        <div className="App">
            <Outlet />
        </div>
    );
}

export default App;