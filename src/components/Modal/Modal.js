import React from 'react';

const Modal = () => {
    return (
        <div class="ui">
            <i class="close icon"></i>
            <div class="header">
            Profile Picture
            </div>
            <div class="image content">
                <div class="ui medium image">
                    <img alt="" src="/images/avatar/large/chris.jpg" />
                </div>
                <div class="description">
                    <div class="ui header">We've auto-chosen a profile image for you.</div>
                    <p>Lots of text here</p>
                    <p>Is it okay to use this photo?</p>
                </div>
            </div>
            <div class="actions">
                <div class="ui black deny button">
                    Nope
                </div>
                <div class="ui positive right labeled icon button">
                    Yep, that's me
                    <i class="checkmark icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Modal;
