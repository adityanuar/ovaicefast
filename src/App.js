import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div className="p-4">
    <section className="flex flex-col items-center justify-between md:flex-row">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <img src={logo} alt="Logo"></img>
        <div className="flex flex-col items-center justify-center md:flex-row ml-4">
          <select className="p-2 rounded-l-xl">
            <option>All categories</option>
            <option>Luxury</option>
          </select>
          <input type={"search"} placeholder='Try typing "spinach"'></input>
        </div>
      </div>
      <nav>
        <ul className="flex flex-col items-left justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <li>Explore</li>
          <li>Rents</li>
          <li>Sales</li>
          <li>How it work</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </section>
  </div>;
}

export default App;
