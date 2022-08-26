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
      {atividades.map(ativ => (
        <div key={ativ.id} className="card mb-2 shadow-sm">
        <div className="card-body">
           <div className="d-flex justify-content-between">
            <h5 className='card-title'>
            <span className="badge bg-secondary me-1">{ativ.id}</span>
                          - titulo
            </h5>
            <h6>
              Prioridade: 
              <span className='ms-1 text-black'>
              <i className="me-1 fa-solid fa-face-smile"></i>
              normal
              </span>
            </h6>
            </div>
          <p className="card-text">{ativ.descricao}</p>
        </div>
        </div>      
   
      ))}              
        
    </div>
    </>
  );
}

export default App;
