import "./App.css";
import TreeView from "./components/treeview/TreeView";
import treeViewData from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="treeview-container">
<input type="text" id="name" name="name">
<button type="button" onclick="alert('search!')">assets list</button
<div styles={{ height: '500px', overflowY: 'scroll' }} >
        <TreeView data={treeViewData} />
</div>
      </div>
    </div>
  );
}

export default App;
