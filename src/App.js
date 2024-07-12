import './App.css';
import CurrencyConverter from './Component/CurrencyConverter/CurrencyConverter';
import DropDownmen from './Component/Dropdown/DropDownmen';
import Counter from './Component/Hooks/counter';
import Slidermen from './Component/Slider/Slidermen';

function App() {
  return (
<>
<div className="app">
  <CurrencyConverter/>
  <DropDownmen/>
  <Slidermen/>
  <Counter/>
</div>
</>
  );
}

export default App;
