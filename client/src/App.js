import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Registration from "./pages/Auth/Registration.jsx";
import Authorization from "./pages/Auth/Authorization.jsx";
import { useContext, useEffect } from "react";
import { Context } from "./index.js";
import { observer } from "mobx-react-lite";
import TextArea from "./pages/TextArea.jsx"
import Subscribe from "./pages/Subscribe.jsx";
import Profile from "./pages/profile.jsx";
import Setings from "./pages/setings.jsx";
import SelectionQuets from "./pages/SelectQuets.jsx";
import Stages from "./pages/Stages.jsx";

function App() {
  const {store} = useContext(Context)

  useEffect(()=>{ 
    if(localStorage.getItem('token')){ 
      store.checkAuth()
    }
  },[])
  if(!store.isAuth){ 
    return( 
      <div> 
        <Routes> 
          <Route path="/" element={<Main/>}/>
          <Route path="/Auth/Registration.jsx" element={<Registration/>}></Route>
          <Route path="/Auth/Authorization.jsx" element={<Authorization/>}></Route>
        </Routes>
    </div>
    )
  }
  return (
      <div className="App">
      <Routes>
        <Route path="/" element={<SelectionQuets/>}/> 
        <Route path="/pages/textArea.jsx" element={<TextArea/>}/> 
        <Route path="/pages/subscribe.jsx" element={<Subscribe/>}/>
        <Route path="/pages/profile.jsx" element={<Profile/>}/>
        <Route path="/pages/setings.jsx" element={<Setings/>}/>
        <Route path="/pages/SelectQuets.jsx" element={<SelectionQuets/>}/>
        <Route path="/pages/Stages.jsx" element={<Stages/>}/>
      </Routes>
      </div>
  );
}

export default observer(App);
