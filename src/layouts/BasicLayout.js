import React from 'react'
import Menu from "../componets/Menu";

export default function (props) {
    const {children, menuColor}= props;
    return (
        <>
        <Menu menuColor={menuColor}/>
            {children}
        </>
        
    )
}
