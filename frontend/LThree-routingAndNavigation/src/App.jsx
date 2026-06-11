import { Footer, Header } from "./Components/Index"
import Allroutes from "./Components/Routes/Allroutes";
import { Homepage } from "./Pages/Index";




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
