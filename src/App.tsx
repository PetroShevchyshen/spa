import { Header } from "./components/Header/Header";
import { Main } from "./sections/Main/Main";

function App() {
  return (
    <main className="bg-main-bg min-h-screen w-screen px-[100px] space-y-14">
      <Header />
      <Main />
    </main>
  );
}

export default App;
