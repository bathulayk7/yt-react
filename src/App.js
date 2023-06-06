import "./App.css";
import MultiSelectCompReact from "./components/dropdwonMultiSelect/MultiSelectCompReact";
// import MultiSelectReact from "./components/dropdwonMultiSelect/MultiSelectReact";
// import SelectArrayOfObjects from "./components/dropDownSelect/SelectArrayOfObjects";

const App = () => {
  return(
  <div className="App">
    {/* <SelectArrayOfObjects hasValue="" initial="Country..." labelText="Select the Country" /> */}
    {/* <MultiSelectReact/> */}
    <MultiSelectCompReact/>
  </div>
  )
};
export default App;
