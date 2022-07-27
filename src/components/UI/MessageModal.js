import { Button } from '@mui/material';
import React from 'react';

import Card from './Card';
import "./MessageModal.css";
import { FaPhotoVideo } from "react-icons/fa";
const MessageModal =({title,message,onConfirm}) =>{
    return (
        <div>
            
            <div className="modal-backdrop" onClick={onConfirm} />
                <Card className="modal" >
                    <header className="modal-header">
                        <h2>{title}</h2>
                        <hr />
                    </header>
                    <FaPhotoVideo className="modal-photo-video" />
                    <div className="modal-content">
                       <p>{message}</p>
                    </div>
                    <footer className="actions">
                        <Button onClick={onConfirm}>Select From Computer</Button>
                    </footer>

                </Card>
                        
            
        </div>
    )
}

export default MessageModal;