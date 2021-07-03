import "./styles.css";
import Search from "./Search";
import City from "./City";
import DateStatus from "./DateSatus";
import Icon from "./Icon";
import Temperature from "./Temperature";
import WheatherData from "./WheatherData";

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <Search />
        </div>
        <City />
        <div className="row">
          <div className="col-6">
            <DateStatus />
            <Icon />
          </div>
          <div className="col-6">
            <Temperature />
            <WheatherData />
          </div>
        </div>
      </div>
    </div>
  );
}
