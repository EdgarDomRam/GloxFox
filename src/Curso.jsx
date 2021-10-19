import React from "react";
import PropTypes from 'prop-types';
//const persona = {"nombre":"Edgar","apellido:":"Domínguez"}
//const curso ={"nombre":"React desde cero", "price":"120mxn"}
//const Curso =props=>(
const Curso =  ({ nombre, image, price, profesor }) => (
    <>

        <article class="card">
            <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={image} alt="" />
            </div>
            <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 class="t5 s-mb-2 s-center">
                    {nombre}
                </h3>
                <div class="s-mb-2 s-main-center">
                    <div class="card__teacher s-cross-center">
                        <span class="small">{profesor}</span>
                    </div>
                </div>
                <div class="s-main-center">
                    <a class="button--ghost-alert button--tiny" href="www.curso.com">{price}</a>
                </div>
            </div>
        </article>


    </>
)

Curso.propTypes = {
    nombre: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string,
    location: PropTypes.string,
}

Curso.defaultProps = {
    nombre: "no se encontro titulo",
    image: "",
    price: "--",
    profesor: "",
    location: "online",
}
export default Curso;