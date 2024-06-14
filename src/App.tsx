import "./App.css";
import Carousel from "./Components/Carousel/carousel";
import Footer from "./Components/Footer/footer";
import GridGames from "./Components/Grid-Games/gridGames";
import Header from "./Components/Header/header";
import Information from "./Components/Information/information";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Carousel></Carousel>
        <Information></Information>
        <GridGames></GridGames>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
