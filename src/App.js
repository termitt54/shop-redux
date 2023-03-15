import React, {useState} from 'react';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './styles/index.scss'
import './styles/btn.scss'

function App() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className="conteiner">
      <Header setSidebar={setSidebar}/>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
