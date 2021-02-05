import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './App.css';
// import Bootstrap from 'react-bootstrap'


function App() {

  const state = useSelector((state) => state.reducer);
  const nome = useSelector((state) => state.reducer2);
  const dispatch = useDispatch();


  return (
    <div>
      <div class="container-fluid">
      <div className="box1">
        <h1>ANOTE QUANTOS ACERTOS TEVE AQUI</h1>
        <h1 className="estado"> 
          {state}
        </h1>
        <input type="button btn btn-lg "class="cont1" value="Aumentar" onClick={() => dispatch({ type: 'AUMENTAR' })}/>
         
      
        <input type="button btn btn-lg" class="cont2" value="Reduzir" onClick={() => dispatch({ type: 'REDUZIR' })}/>
      
      
      </div>
      </div>
      <div class="container-fluid">
        <h1 class="box2">
          {nome}
        </h1>
        <ul class=" btn">
        <input type="button btn btn-lg btn-block" class="btn1" value="Kimimaro"  onClick={() => dispatch({ type: 'KIMIMARO'})}/>
        
        <input type="button btn btn-lg btn-block" class="btn2" value="Tsunade" onClick={() => dispatch({ type: 'TSUNADE'})}/>
        
        <input type="button btn btn-lg btn-block" class="btn3" value="Jiraya" onClick={() => dispatch({ type: 'JIRAYA'})}/>
       
        <input type="button btn btn-lg btn-block" class="btn4" value="Sakura" onClick={() => dispatch({ type: 'SAKURA'})}/>
       
        <input type="button btn btn-lg btn-block"class="btn5"  value="Hinata" onClick={() => dispatch({ type: 'HINATA'})}/>
        </ul>
       </div>
    </div>
    
  );
}



export default App;
