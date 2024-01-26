// the component function
const Header = (props) => {

    return (
    <div className="nav-container"> 
        <h1>Alex Greenberg's Portfolio</h1>
        <div className="links-container">
            <a href="https://github.com/a1g23">
                <button>GitHub</button>
            </a>
            <a href="https://www.linkedin.com/in/alex-greenberg567/">
                <button>LinkedIn</button>
            </a>
        </div>
    </div>
    )
}

// export the component
export default Header
