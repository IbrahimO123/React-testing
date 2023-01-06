import "./App.css";
import { Application } from "./composables/application/application";
import { Counter } from "./composables/counter/counter";
import { Skills } from "./composables/skills/skills";

function App() {
  return (
    <div className="App">
      Learn React
      <Application />
      <Skills/>
      <Counter/>
    </div>
  );
}

export default App;
