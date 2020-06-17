import React, {useState} from 'react'
import {Card, CardTitle, CardImg, CardBody, Button, Modal} from 'reactstrap'
const BookCard = ({ thumbnail, title, pageCount, language, description, authors, publisher, previewLink, infoLink }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return <Card style={ {width: '233px' } } className = 'm-auto'>
        <CardImg top atyle = {{width: '100%', height: '233px' }} src={thumbnail} alt = 'card image'/>
        <CardBody>
            <CardTitle className= 'card-title'>{title}</CardTitle>
            <Button onClick = {toggle}>More info</Button>
        </CardBody>
        <Modal isOpen={modal} toggle= {toggle}>
            <div className = "modal-header d-flex justify-content-center">
                <h5 className='modal-title text-center' id = 'exampleModalLabel'>{title}</h5>
                <button aria-label = 'Close' className= 'close' type='button' onClick= { toggle }>
                    <span aria-hidden={true}></span>
                </button>
            </div>
        </Modal>
    </Card>
};


export default BookCard