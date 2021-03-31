import './App.css';

import ProfilPhoto from './Components/Profile/ProfilPhoto';
import FullName from './Components/Profile/FullName';
import Adresse from './Components/Profile/Address';

function App() {
  return (
    <div className="App">


  <ProfilPhoto/>
  <div className="Personal-info">   
  <FullName/>
  <Adresse/>
  </div>
    </div>
  );
}

export default App;
