
// the component function
const Main = (props) => {

    return (
    <div className="main-container"> 
        <h1>{props.name}</h1>
        <h3>{props.github}</h3>
        <h3>{props.link}</h3>
    </div>
    )
}

// export the component
export default Main
