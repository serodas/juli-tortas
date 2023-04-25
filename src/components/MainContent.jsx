import React from 'react';
import '@styles/mainContent.scss';

const MainContent = () => {
    return (
        <section className="main-content">
            <p>Juli</p>
            <h1>Tortas</h1>
            <span>¡Hola! Soy José Julian un apasionado de la repostería y me encanta preparar tortas
                personalizadas con mucha creatividad en Pereira. He hecho tortas para todo tipo de ocasiones:
                cumpleaños, baby shower, aniversarios, graduaciones y más.
                Algunos de mis trabajos fueron los siguientes:
                <ul>
                    <li>Una torta de vainilla con rosas para un cumpleaños</li>
                    <li>Una torta de semillas de amapola con una máquina de coser, tijeras y metro para una modista.</li>
                    <li>Una torta de Frozen con una figura de Elsa, un muñeco comestible de Olaf, y copos de nieve de azúcar.</li>
                </ul>
                Si quieres sorprender a tus seres queridos con una torta única y deliciosa, ¡contáctame! y te haré una cotización. Solo whatsapp 317 510 9818.
            </span>
        </section>
    );
}

export default MainContent;