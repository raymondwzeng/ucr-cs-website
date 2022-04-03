
export default function Card(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <div>
                {props.description}
            </div>
        </div>
    )
}