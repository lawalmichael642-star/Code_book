import { Footer, Header } from "./Components/Index"
import { Homepage } from "./Pages/Index";



const App = () => {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <Homepage/>
      <Footer />
    </div>
  );
}

export default App
