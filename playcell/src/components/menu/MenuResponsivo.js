import React, { useState } from 'react';

function MenuResponsivo() {
    /* Se eu clika no botão ele vai troca foto se não ele volta pro estado normal */
    const [fecha, setFecha] = useState("close-outline");
     
    

    
    return(
        <button id="menu" onClick={MenuResponsivo} className="text-5xl cursor-pointer ml-auto md:hidden">
            <ion-icon name={fecha}></ion-icon>
        </button>
    );
}

export default MenuResponsivo