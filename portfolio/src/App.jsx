import { FrontPage } from "../Components/Front-Page";
import { Weather } from "../Components/Weather";


 function App(){
  return(<>
   <div className="Front-Page"> 
    <Weather></Weather> 
    <FrontPage></FrontPage>

  </div>
   
    </>
  )
 }


 export default App