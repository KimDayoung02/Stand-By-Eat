import LocationFilter from '../components/LocationFilter';
import StoreList from '../components/StoreList';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import 'react-day-picker/dist/style.css';

function Reservation() {
  let navigate = useNavigate();
  let { location } = useParams();
  // console.log(id);
  return (
    <>
      <LocationFilter />
      <Button variant="light" type="button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          size="3x"
          style={{ opacity: '0.7' }}
        />
      </Button>
      <StoreList region={location} />
    </>
  );
}

export default Reservation;
