import { Link } from "react-router-dom";


const HomeBody = () => (
  <>

   <img src='https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' width='300px'/>

   <img src='https://images.unsplash.com/photo-1556012018-50c5c0da73bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' width='300px'/>

   <img src='https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80' width='300px'/>
   
   <div>
    <Link to='/'>Register</Link>
   </div>
  </>
)

export default HomeBody;