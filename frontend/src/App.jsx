// import React from 'react';
// import Card from './components/Card';
// import './App.css';

// const cardsData=[
//   {id: 1, title:"Art of eye contact",author:"yashuuu",genre:"romantic",publisheddate:"2025-03-24"}
// ];

// function App(){
//   return(
//     <div className='app'>
//       <h1>full stack</h1>
//       <div className='card-container'>
//         {cardsData.map(card=>(
//           <Card key={card.id} card={card}/>
//         ))}
//       </div>
//     </div>
    
//   );
// }

// export default App;

import React from 'react';
import Card from './components/Card';
import './app.css';

const cardsData=[
  {id: 1, title:"Art of Eye Contact",author:"YAshuuu",genre:"Romantic",publisheddate:"2025-03-24"}

];

function App(){
  return(
    <div className='app'>
      <h1>Full stack</h1>
      <div className='card-container'>
        {cardsData.map(card=>(
          <Card key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;