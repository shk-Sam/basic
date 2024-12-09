import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Profile ({profile}){
    return(
        // <div>
        //     <p>Name :{name}</p>
        //     <p>Location :{location}</p>
        // </div>
        <Card style={{ width: '18rem'}} className='col-md-4'>
        <Card.Img variant="top" src={profile.img} />
        <Card.Body>
          <Card.Title> <h2>{profile.name}</h2></Card.Title>
          <Card.Text>
            {profile.desc}
          </Card.Text>
          <a variant="primary" href={profile.link} target='_blank'>
            <Button>{profile.btn}</Button>
          </a>
        </Card.Body>
      </Card>
    );
}
export default Profile;