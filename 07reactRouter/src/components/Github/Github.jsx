import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="card w-96 glass">
      <figure>
        <img src={data.avatar_url} alt="Git picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Github followers: {data.followers}</h2>
        <p>{data.bio}</p>
        <div className="card-actions justify-end">
          <Link
            to={"https://github.com/hiteshchoudhary/chai-aur-react"}
            className="btn btn-primary"
          >
            Learn More!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  // console.log(response);
  return response.json();
};
