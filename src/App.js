import { Provider } from "react-redux";
import store from "./app/store";
import "./App.css";
import Main from "./views/main";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
