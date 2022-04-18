import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Service.css";

const Service = ({ service }) => {
    const navigate = useNavigate();
    const {name, price, image, description } = service;
    return (
        <Card className='single-service'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title id='name'>{name}</Card.Title>
                <Card.Text className='price'><b>Price : {price}</b></Card.Text>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <div className='btn-get-started'>
                <button className='order-now' onClick={() => {navigate("/checkout")}}>Get Started</button>
            </div>
        </Card>
    );
};

export default Service;