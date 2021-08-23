import React from 'react';

const Modal = () => {
    return (
        <div className="ui">
            <i className="close icon"></i>
            <div className="header">
            Profile Picture
            </div>
            <div className="image content">
                <div className="ui medium image">
                    <img alt="" src="/images/avatar/large/chris.jpg" />
                </div>
                <div className="description">
                    <div className="ui header">We've auto-chosen a profile image for you.</div>
                    <p>Lots of text here</p>
                    <p>Is it okay to use this photo?</p>
                </div>
            </div>
            <div className="actions">
                <div className="ui black deny button">
                    Nope
                </div>
                <div className="ui positive right labeled icon button">
                    Yep, that's me
                    <i className="checkmark icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Modal;
