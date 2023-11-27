import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function RecGameCard({name, image, description, id}: any) {
    const detailHandler = (e: any) => {
        e.preventDefault();
        // redirect to detail page
        window.location.href = `/info/${id}`;
    }
    return (
        <MDBCard style={{textAlign: "center"}}>
              <MDBCardImage
                src={image}
                alt='...'
                position='top'
                className='img-fluid'
                //style={{ width: '100%', height: '240px' }}
              />
              <MDBCardBody>
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBCardText>
                  {description}
                </MDBCardText>
                <MDBBtn tag={Link} onClick={detailHandler}>Detail</MDBBtn>
              </MDBCardBody>
            </MDBCard>
    )
}