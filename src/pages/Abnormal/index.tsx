import './index.scss'

function Abnormal(props) {
    const {type} = props

    return (
        <div className="Abnormal">
            {type}
        </div>
    )
}

export default Abnormal