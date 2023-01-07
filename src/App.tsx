import "./App.css";
// import { Application } from "./composables/application/application";
// import { Skills } from "./composables/skills/skills";
import { Counter } from "./composables/counter/counter";
import { AppProviders } from "./providers/app-provider";
import { MuiMode } from './composables/mui-mode/mui-mode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        Learn React
        {/* <Application />
      <Skills/> */}
        <Counter />
        <MuiMode/>
      </div>
    </AppProviders>
  );
}

export default App;
