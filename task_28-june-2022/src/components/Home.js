import React from "react";
import { Outlet, Link } from "react-router-dom";
import Data from "./Data";




class Home extends React.Component {

  render() {
    return (
      <>


        <form>
          <Link to="/Add"> <input type="button" value="Add" class="btn btn-success" />  </Link>
        </form>
        <div class="container">
          <table class="table table-striped" >
            <thead class="table">
              <tr style={{ color: 'red' }}>
                <th scope="col" >ID</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>


            </thead>
            <tbody>
            {Data.map ((Data) => (
                 <>
              <tr>


                <td >{Data.Id}</td>
                <td >{Data.Name}</td>

                <td>
                  <form>
                    <input type="button" value="Edit" class="btn btn-primary" />
                    <input type="button" value="Delete" class="btn btn-danger" />
                  </form>
                </td>
        
              </tr>
        </> 
                ))}
            </tbody>


          </table>
        </div>
      </>
    )
  }
}
<Outlet />
export default Home;