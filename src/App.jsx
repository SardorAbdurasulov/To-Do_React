import FormInput from "./components/forminput"
import List from "./components/list"
import Footer from "./components/Footer";
import { Provider } from "./components/Provider";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
    <Provider>
    <h1>
      To Do List
    </h1>
    <FormInput/>
    <List/>
    <Footer/>
    </Provider>
    </div>
    </>
  )
}

export default App;
