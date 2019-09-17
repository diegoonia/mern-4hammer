import React, { Component } from 'react';

class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="my-3 py-3">
                <div className="flex">
                    <h5 className="mb-3">SEGUINOS</h5>
                </div>
                <div className="flex">                
                    <a href="https://www.facebook.com/4H%C3%A4mmer-1773769162916411/" class="fa fa-2x fa-btn fa-facebook mr-2"></a>
                    <a href="https://www.instagram.com/4hammerdesign/" class="fa fa-2x fa-btn fa-instagram ml-2"></a>
                </div>

                <a href="https://wa.me/5491130959578" class="fa float-right btn-floating fixed-bottom fa-2x fa-btn fa-whatsapp mb-3 ml-3"></a>
            </div>
        )
    }
}

export default Footer;



