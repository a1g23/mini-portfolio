
// the component function
const Main = (props) => {

    return (
    <div className="main-container"> 
        <h1>{props.name}</h1>

        <div className="main-links">
            <a href={props.github}>
                <button>GitHub</button>
            </a>
            <a href={props.link}>
                <button>Link to App</button>
            </a>
        </div>
    </div>
    )
}

// export the component
export default Main
