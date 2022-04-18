import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services] = useServices();
    return (
        <div id='services'>
            <h2 className='services-title'>Services<small className='title-desc'>I Provide A Comfortable Pricing Plan For Our Clients</small></h2>
            <Container>
                <CardGroup className='cardGroup'>
                    {services.map(service => <Service service={service} key={service.id}></Service>)}
                </CardGroup>
            </Container>
        </div>
    );
};

export default Services;