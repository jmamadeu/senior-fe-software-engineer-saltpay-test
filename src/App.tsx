import 'react-loading-skeleton/dist/skeleton.css';
import { Header } from "./components/header/header";
import { Router } from "./routes/router";

function App() {
  return (
    <div>
      <Header />

      <Router />
    </div>
  );
}

export default App;
