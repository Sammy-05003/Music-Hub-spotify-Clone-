import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>
        <Player />
      </div>
    </Router>
  );
}

export default App;