import './App.scss'
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer   />
    </>
  );
}

export default App;
