import './App.css';
import { render } from "react-dom";
import Home from './components/Home';
import TabsComp from "./Tabs";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SinglePage from './components/SinglePage';
import Checkout from './components/Checkout';
import { useState } from 'react';
import SearchDetails from './components/SearchDetails';
import SearchPageFooter from './components/SearchPageFooter';
import React from 'react';
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  );
}


function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<>  <Home toggle={open} setToggle={setOpen} /> <TabsComp toggle={open} setToggle={setOpen} />  <SearchPageFooter /> </>} />
            <Route path="/:id" element={<>  <Home /> <SinglePage /> </>} />
            <Route path="/checkout/:id/:days" exact element={<> <Home />  <Checkout /> </>} />
            <Route path="/location/:loc" exact element={<>  <Home /> <SearchDetails /> </>} />
          </Routes>
        </BrowserRouter>
      </main>



    </div>
  );
}

export default App;







