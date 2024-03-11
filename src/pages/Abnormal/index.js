import { jsx as _jsx } from "react/jsx-runtime";
import './index.scss';
function Abnormal(props) {
    const { type } = props;
    return (_jsx("div", { className: "Abnormal", children: type }));
}
export default Abnormal;
