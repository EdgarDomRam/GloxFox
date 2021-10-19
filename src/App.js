//import logo from './logo.svg';
//import './App.css';
import "./styles/style.scss"
import Curso from './Curso'
import Banner from './Banner'
import Formulario from "./Formulario"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


// const cursos =[

//   {


//   }
// ]

const App = () =>
  <>
    <Router>
      <Switch>
    {/* <Banner/>
    <div className="ed-grid m-grid-3">

      <Curso 
      nombre="Curso de Desarrollo Web desde Cero"
      image = "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1566492620/content-items/003/212/919/2-original.png?1566492620"
      price = "1200mxn"
      profesor = "Samuel López"
      location="Online"
      />

      <Curso 
      nombre="Curso de C++"
      image = "https://i.ytimg.com/vi/dJzLmjSJc2c/maxresdefault.jpg"
      price = "900mxn"
      profesor = "Irene Aguilar"
      location="Online"
      />

      <Curso 
      nombre="Curso de Servidores Web"
      image = "https://concepto.de/wp-content/uploads/2019/04/servidor-web-e1555874258468.jpg"
      price = "1400mxn"
      profesor = "Jair Vázquez"
      location="Online"
      />
      
    </div>
    <Formulario/> */}

    <Route path="/" exact component={Banner}/>
    <Route path="/cursos" exact component={Curso}/>
    <Route path="/formulario" exact component={Formulario}/>
    <Route component ={()=>(
      <div className="ed grid">
      <h1>Error 404</h1>
      <span>Web Page not found!!</span>
      </div>
    )}/>
    </Switch>
    </Router>
  
  </>


export default App;
