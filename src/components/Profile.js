import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Profile ({name,location}){
    return(
        // <div>
        //     <p>Name :{name}</p>
        //     <p>Location :{location}</p>
        // </div>
        <Card style={{ width: '18rem'}} className='col-md-4'>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/182938196?v=4" />
        <Card.Body>
          <Card.Title> <h2>Saad</h2></Card.Title>
          <Card.Text>
            I am studying in BCA...
          </Card.Text>
          <a variant="primary" href='https://github.com/shk-Sam' target='_blank'>
            <Button> Open Profile</Button>
          </a>
        </Card.Body>
      </Card>
    );
}
export default Profile;