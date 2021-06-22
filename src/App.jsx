import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>


            </div>
        </BrowserRouter>

    )
}

export default App;