
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import SortingVisualizerBody from "./SortingVisualizer2.0/SortingVisualizerBody"
import Navbar from "./SortingVisualizer2.0/Navbar"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SortingVisualizerBody/>
    </div>
  );
}

export default App;
