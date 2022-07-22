import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import LocationFilter from '../components/LocationFilter';
import StoreList from '../components/StoreList';

function Reservation() {
  return (
    <>
      <LocationFilter></LocationFilter>
      <StoreList></StoreList>
    </>
  );
}

export default Reservation;