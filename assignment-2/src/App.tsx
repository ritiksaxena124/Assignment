import "./App.css";
import ContentArea from "./components/ContentArea/";
import Navbar from "./components/Navbar";
import PageTabs from "./components/PageTabs";

function App() {
  return (
    <>
      <Navbar />
      <PageTabs />
      <ContentArea />
    </>
  );
}

export default App;
