import './App.css';
import Investor from './Components/Home/InvestorPage';
import Ideapage from './Components/idea/Ideapage'
import ideaItems from './Components/ideaShort/data'
function App() {
  return (
    <div className="App">
      {/* <Investor /> */}
      <Ideapage ideaItems={ideaItems} />
    </div>
  );
}

export default App;
