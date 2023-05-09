import "./App.css";
import Buttons from "./components/buttons/Buttons";
import Documents from "./components/documents/Documents";
import settingsIcon from "./icons/settings.svg";
import logoutIcon from "./icons/logout.svg";
import HeaderDropdown from "./components/headerDropdown/HeaderDropdown";
function App() {
  return (
    <div className="App">
    {/* <div className="container"> */}
      <div className="headerWrapper">
        <div className="dropDown"><HeaderDropdown/></div>
        <div className="headerbuttons">
          <Buttons className="btnSetting" color="#373636" name=" Setting" hoverColor="#8D55C8" icon={settingsIcon} />
          <Buttons className="btnLogout" color="#373636" name="Logout" hoverColor="#8D55C8" icon={logoutIcon} />
        </div>
      </div>
      <div className="header">
        <h1>Welcome Tim</h1>
        <p>
          In the collection below you can find and download all available
          documents for your client.
        </p>
      </div>
      <Documents />
      </div>
    // </div>
  );
}

export default App;
