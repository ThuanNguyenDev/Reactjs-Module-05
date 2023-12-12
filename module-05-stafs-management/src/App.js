import logo from './logo.svg';
import './App.css';
import StaffCreate from './components/StaffCreate';
import StaffDetail from './components/StaffDetail';
import StaffEdit from './components/StaffEdit';
import StaffList from './components/StaffList';
import StaffRemove from './components/StaffRemove';
import {Route , Routes} from 'react-router-dom'

function App() {
  return (
 <>
 <Routes>
  <Route path="/staffs" element={<StaffList/>} />
  <Route path="/staffs/:id" element={<StaffDetail/>} />
  <Route path="/staffs/edit/:id" element={<StaffEdit/>} />
  {/* <Route path="/staffs/remove/:id" element={<StaffRemove/>} /> */}
  <Route path="/staffs/add" element={<StaffCreate/>} />

 </Routes>
 </>
  );
}

export default App;
