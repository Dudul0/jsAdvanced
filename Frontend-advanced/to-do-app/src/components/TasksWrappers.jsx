import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Task from './Task.jsx'
function OrderingExample() {
  return (
    <Container>
      {/* <Row>
        <Col xs>First, but unordered</Col>
        <Col xs={{ order: 5 }}>Second, but last</Col>
        <Col xs={{ order: 0 }}>Third, but second</Col>
      </Row> */}
      <section className='w-full my-5 d-flex  flex-wrap justify-content-between aligm-items-center'>
        <Task/>
      </section>
    </Container>
  );
}

export default OrderingExample;