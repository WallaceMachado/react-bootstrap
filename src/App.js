import { useState } from 'react';
import './App.css';

let initalAtividades = [
  {
    id: 1,
    descricao: "Primeira Atividade"
  },
  {
    id: 2,
    descricao: "Segunda Atividade"
  }
]

function App() {
  const [atividades, setAtividades]= useState(initalAtividades)


  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    }
    setAtividades([...atividades, {...atividade}]);
  }
  

  // se fosse usar html puro não funciona pq apagina não atualiza sozinha, por isso vamos usar o hooks
  // function addAtividade(e) {
  //   e.preventDefault();

  //   const atividade = {
  //     id: document.getElementById('id').value,
  //     descricao: document.getElementById('descricao').value,
  //   }
  //   atividades.push(atividade);
  //   console.log(atividades)
  // }
  return (
    <>
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Id</label>
        <input type="text" className="form-control" id='id'/>
      </div>
      <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Descrição</label>
          <input type="text" className="form-control" id="descricao"/>
      </div>  
      <div className="col-12">
        <button className="btn btn-outline-secondary" onClick={addAtividade}>+ Atividade</button>
      </div>      
    </form>
    <div className="mt-3">
       <ul className='list-group'>
        {atividades.map(ativ => (
          <li key={ativ.id} className='list-group-item'>{ativ.id} - {ativ.descricao}</li>  
        ))}                
       </ul>    
    </div>
    </>
  );
}

export default App;
