import { useEffect, useState } from "react";

export default function Users() {
  const [user, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data);
    }
    getData()
});
  return (
    <> 
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
  {user.map((users) => (
    <tr>
      <th scope="row">{users.id}</th>
      <td>{users.name}</td>
      <td>{users.username}</td>
      <td>{users.email}</td>
    </tr>
  ))}
 
  </tbody>
</table>






    </>
  );




}