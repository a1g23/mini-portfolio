import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './projectinfo'
import projectinfo from './projectinfo';

function App() {
  return (
    <div>
      <Header />
      <div>
        {projectinfo.map(el => <Main name={el.name} github={el.github} link={el.link}/>)}
      </div>
      <Footer/>
    </div>

  )
}

export default App;
