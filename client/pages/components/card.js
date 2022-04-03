
export default function Card(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <div>
                {props.description}
            </div>

            <style jsx>
                {` 
                    div {
                        margin: 0.3rem 0;
                    }
                `}
            </style>
        </div>
    )
}