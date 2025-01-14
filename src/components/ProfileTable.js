import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Profiler } from "react";

function ProfileTable({ profiles, set }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Github Profile Link</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile,index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{profile.name}</td>
              <td>{profile.desc}</td>
              <td>
                <a href={profile.link} target="_" variant="primary">
                  <Button>Github Profile</Button>
                </a>
              </td>
              <td>
                  <Button
                  onClick={()=>{
                    fetch('http://localhost:8000/profile/' +profile.id)
                    .then((res) => {
                      return res.json();
                    })
                    .then((res) => {
                      set(res)
                    })
                    .catch((error) => {console.log(error)})
                  }}>Edit</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ProfileTable;