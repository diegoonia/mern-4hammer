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
                <hr/>
                <p className="ml-3">Copyright 4Hammer - Muebles de calidad - 2019. Todos los derechos reservados.</p>

                <a href="https://wa.me/5491130959578" class="fa fa-wsp-btn btn-floating fa-2x fa-btn fa-whatsapp fixed-bottom float-right mb-3 ml-3"></a>
            </div>
        )
    }
}

export default Footer;



