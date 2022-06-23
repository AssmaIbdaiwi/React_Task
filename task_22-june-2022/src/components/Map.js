import React from "react";

export default function Map() {
    const Fruits = [
        { id: 1, name: "Apple", color: "Yellow" },
        { id: 2, name: "Strawberry", color: "Red" },
        { id: 3, name: "Kiwi", color: "Green" }
    ];

    return (
        <>
            <h1>Mapping</h1>
            

              
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                               { Fruits.map( (Fruit) => (
                                    <tr>
                                        {/* <div key={Fruit.id}> */}
                                            <td> {Fruit.id}</td>
                                            {/* <div key={Fruit.name}> */}
                                                <td> {Fruit.name}</td>
                                                {/* <div key={Fruit.color}> */}
                                                    <td> {Fruit.color}</td>
                                                </tr>
                                                   ))}
                                            </tbody>
                                        </table>

                     
      
                       </>
    );
}
