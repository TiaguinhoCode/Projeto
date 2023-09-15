import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import ManuelGomes from './../../../assets/maxresdefault.jpg'

const Teste = () => {
    return (
        <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
        >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <div className="tools">
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                        <button onClick={() => resetTransform()}>x</button>
                    </div>
                    <TransformComponent>
                        <img src={ManuelGomes} alt="manuel gomes" />
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    )
}

export default Teste