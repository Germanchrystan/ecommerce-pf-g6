import React from 'react';
import { Link } from 'react-router-dom';
import "./catalogo.css"

export default function Catalogo(props){
    return (
        <div class="grid sm:grid-cols-3 sm:grid-rows-5 gap-4 grid-cols-1 justify-center justify-items-center content-center items-center">
            {
                props.productos.map((producto)=>{
                    return (
                        <Link style={{textDecoration:"none",outline:"none"}} to={`/product/${producto.id}`}>
                            <div className="card">
                                <img src={producto.url} style={{height:"300px"}}/>
                                <div className="bg-gray-200" style={{height:"1px"}}></div>
                                <div className="p-4">
                                    <p className="text-black">{producto.name}</p>
                                    <p className="text-blue-300">${producto.price}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}

