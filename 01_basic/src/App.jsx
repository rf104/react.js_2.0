import Rf from './rf'

function App() {
  
  const userName = 'Aref'
  return (
    <>


      <Rf/>

      {/*  here {userName} is evaluated expression. here we can not put any if/else codition. Can put only evaluated JS */}
      <h1>
        My name is {userName}
      </h1>



      {/* <div>
        <h1>
          Hello World,Aref
        </h1>
      </div> */}
    </>
  )
}

export default App
