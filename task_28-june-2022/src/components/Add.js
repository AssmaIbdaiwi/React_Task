
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Data from "./Data";


class Add extends React.Component {    

    handleSave (e) {
        e.preventDefault();
        this.setState({
        Data: this.state.Data.push({

          Id:this.state.Id,
          Name:this.state.Name
   
      })
    })
    console.log(this.state);
    }
  


  render()  {
    return (
  <>

<div class="container">
<form>

<div class="form-group">
      <label for="ID">ID:</label>
      <input type="text" class="form-control" id="ID" placeholder="Enter ID" name="ID" onChange={e => this.setState({ Id: e.target.value })}/>
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name" onChange={e => this.setState({ Name: e.target.value })}/>
    </div>


    <Link to="/"><input type="button" value="Back to Home" class="btn btn-primary" /></Link>
 <input type="button" value="Save" class="btn btn-success" onClick={e =>this.handleSave(e)}/>
 <Outlet />
 </form>
 </div>                      
</>
  )
}
}
export default Add;