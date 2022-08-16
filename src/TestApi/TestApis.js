import React ,{useEffect ,useState } from 'react'
import "../App.css"
export default function TestApis() {
    const [Users , setUsers] = useState([]);
    const [searchUsers , userId] = useState([]);
    // const userId = null;


    const getUser = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${searchUsers}`);
        // const response = await fetch(` https://covidtracker1920.netlify.app/country`);

       
        setUsers( await response.json())
    }
    
    useEffect(() => {
        getUser();
      });  
    return (
    <div>

        


      <h1>Chalegi API</h1>
      <input type="text" className='SearchFeild' placeholder='Search Your Result' onChange={(event) =>{userId(event.target.value)

      }}  />
        {
            Users.map((curElemt) => {
                return (
                    <div>

                        <table>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                        <tr>
                            <td>{curElemt.userId}</td>
                            <td>{curElemt.id}</td>
                            <td>{curElemt.title}</td>
                        </tr>
                        </table>
                    </div>
                )
            })
        }
         
    </div>
  )
}

