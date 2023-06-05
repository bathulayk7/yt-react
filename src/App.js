import "./App.css";
import MultiSelectReact from "./components/dropdwonMultiSelect/MultiSelectReact";
// import SelectArrayOfObjects from "./components/dropDownSelect/SelectArrayOfObjects";

const App = () => {
  return(
  <div className="App">
    {/* <SelectArrayOfObjects hasValue="" initial="Country..." labelText="Select the Country" /> */}
    <MultiSelectReact/>
  </div>
  )
};
export default App;
