import React from "react";

const Menu = () => {

    const nav = [
        {
        url: '/',
        text: 'Accueil'
        },
        {
            url: '/zoo-et-les-habitats',
            text: 'Le Zoo et ces habitats'
        },
        {
            url: '/zoo-et-ses-services',
            text: 'Le Zoo et ses services'
        },
        {
            url: '/contact',
            text: 'Nous contacter'
        }
    ];

    return(
        <div className="flex flex-col h-28">
            <div className="flex justify-end">
               <a  className="border-2 border-amber-500 rounded-lg px-3 py-1 text-white text-xs" href="/espace-partenaires" >Espace partenaires</a>
            </div>
            <nav className="flex justify-around items-center h-full">
                <ul role="list" className="flex space-x-14 text-lg font-semibold text-white tracking-wide transform transition-all ease-in-out delay-100 duration-200 ">
                    {nav.map(({url, text}, k) => {
                        return (
                            <li className="group cursor-pointer">
                                <a href={url}>{text}</a>
                                <hr className="block h-2 border-0 w-0 group-hover:bg-yellow-500 group-hover:w-full transform transition-all ease-in-out delay-100 duration-200"/>
                            </li>
                        )
                    })}
                </ul>
            </nav>
     </div>

    )
};

export default Menu