
import GlobalState from "./context/GlobalState";
import { GlobalStyled } from "./estilo_global/GlobalStyled";
import { Router } from "./Router";

function App() {
  return (
    <div>
      <GlobalStyled />
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
