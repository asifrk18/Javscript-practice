import { useState, useEffect } from "react";
import "./index.css"

function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
        console.log("ok")
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}  className="container">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default User;


