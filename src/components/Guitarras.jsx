import React, { Component } from "react"


class Guitarras extends Component {
    render() {
        return (
            <section id="guitarras" className="guitarras contenedor">
                <h2>Nuestra guitarras</h2>
                {
                    this.props.guitarras.map((guitarra) => {
                        return (
                            <article className="guitarra">
                                <img className="derecha" src={guitarra.image} alt={guitarra.alt} width="350" />
                                <div className="contenedor-guitarra-a">
                                    <h3 className="title-b">{guitarra.name}</h3>
                                    <ol>
                                        {
                                            guitarra.features.map((feature) => {
                                                return (
                                                    <li>{feature}</li>
                                                )
                                            })
                                        }
                                    </ol>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        )
    }

}

export default Guitarras;