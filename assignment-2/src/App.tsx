import "./App.css";
import ContentArea from "./components/ContentArea/";
import Navbar from "./components/Navbar";
import PageTabs from "./components/PageTabs";

function App() {
  return (
    <>
      <div className="mx-auto relative">
        <Navbar />
        <PageTabs />
        <ContentArea />
      </div>
    </>
  );
}

export default App;
