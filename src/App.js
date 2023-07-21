import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Form from './form';
import AreaChart from './Areachart';
import ScatterPlot from './Scatterplot';
import Homepage from "./components/home/homepage";
import ExcelUploadPage from './ExcelUploadPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Form />}></Route>
        <Route path="/home" exact element={<Homepage/>}></Route> 
        <Route path="/Areachart" exact element={<AreaChart />}></Route>
        <Route path="/Scatterplot" exact element={<ScatterPlot />}></Route>
        <Route path="/ExcelUploadPage" exact element={<ExcelUploadPage/>}></Route> 
          </Routes>
      </BrowserRouter>
    </>
    );
  }
export default App;