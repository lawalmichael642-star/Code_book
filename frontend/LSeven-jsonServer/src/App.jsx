import { Footer, Header } from "./Components/Index"
import {Allroutes} from "./Routes/Allroutes";




const App = () => {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App
