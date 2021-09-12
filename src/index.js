import React, {useState} from 'react'; 
import ReactDOM from 'react-dom'; 
import SideBar from './sidebar';
import TopBar from './topbar'; 
import Page from './pagesample';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const NotFound = () => <div>Not found</div>

const App = () => {

    const pages = [

    <Link to="/page1">Page1</Link>, 
    <Link to="/page2">Page2</Link>

    ]; 

    const [icon, setIcon] = useState("fas fa-angle-double-right"); 
    const [shownStatus, setShownStatus] = useState("sidebar hidden"); 

     const onIconClick = () => {
        (icon === "fas fa-angle-double-right") ? 
            setIcon("fas fa-angle-down") : 
            setIcon("fas fa-angle-double-right"); 

        (shownStatus === "sidebar shown") ? 
            setShownStatus("sidebar hidden") : 
            setShownStatus("sidebar shown"); 

    }

/*     return(
        <div>
            <TopBar iconHandler={onIconClick} icon={icon}/>
            <SideBar class={shownStatus} data={pages}/>
            <div><h3>App</h3></div>
        </div>
    ) */

    return(
        <BrowserRouter>
        <div>
            <TopBar iconHandler={onIconClick} icon={icon}/>
            <SideBar closeHandler={onIconClick} class={shownStatus} data={pages}/>
            <Switch>
              {/* <Route exact path="/"><App/></Route> */}
              <Route exact path="/page1"><Page name="Page1" /></Route> 
              <Route exact path="/page2"><Page name="Page2" /></Route> 
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    )

}


ReactDOM.render(

<App/>, 
document.getElementById('root')

)




