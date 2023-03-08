function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-img"><img src={props.avatar} />
                </div>
                <div className="card-header-txt">
                    <h2>{props.name}</h2>
                    <p>{props.grade}</p>
                </div>

            </div>
            <h1>{props.title}</h1>
            <p>{props.details}</p>

        </div>/*end card*/
    )
}
export default Card;