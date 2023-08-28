import React from "react";
import './css/styles.css';
import fundoImagem from "./../../assets/img/fundo.jpeg";

export const Conteudo = () => {
    return (
        <section id="fundo_conteudo" className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Da desorganização para a tranquilidade
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    O Tarefa Descomplica oferece a confiança de que tudo está organizado e programado 
                    para que você possa progredir nas coisas que são importantes para você.
                </p>
            </div>
        </section>
    )
}
