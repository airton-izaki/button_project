import React from 'react'

const Events = () => {

      // Função para exibir alerta
      const showAlert = (message) =>
      {
         alert(message);
      };

      // Função para handle do evento click
      const handleClick = (e) =>
      {
          console.log (e);
          showAlert("Evento com função");
      };

      // Função para testar a chamada de nomes
     const callNames = () => 
     {
          showAlert("Testando nomes...");
     };


  return (
    <div>
      
      <div  style={{padding: '10px'}}>
          <button style={{ width: '200px'}} onClick={() => showAlert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
               Clique Aqui
          </button>
      </div>
   
     
     <div style={{padding: '10px'}}>
          <button style={{ width: '200px'}} onClick = {handleClick}>
               Clique com Função
          </button>
     </div>
     
        
     <div style={{padding: '10px'}}>
          <button style={{ width: '200px'}} onClick = {callNames}>
                Clique com Função
          </button>
     </div>

    </div>
  )
}

export default Events

