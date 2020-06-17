import React, {useState} from 'react'
import {Card, CardTitle, CardImg, CardBody, Button, Modal} from 'reactstrap'
const BookCard = ({ thumbnail }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return <Card style={ {width: '233px' } } className = 'm-auto'>
        <CardImg top atyle = {{width: '100%', height: '233px' }} src={thumbnail} alt = 'card image'/>
    </Card>
};


export default BookCard