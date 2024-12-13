import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx"; 
import CoreConcepts from "./components/Concept/CoreConcepts.jsx";
function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
