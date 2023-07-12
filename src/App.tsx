import Sidebar from "./containers/Sidebar";
import Projetos from "./containers/Projetos";
import Sobre from "./containers/Sobre";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <div>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </div>
  );
}

export default App;
