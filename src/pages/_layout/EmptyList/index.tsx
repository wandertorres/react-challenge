import React from "react";
import { Link } from "react-router-dom";
import imageEmpty from "../../../assets/images/image-empty.svg";

type emptyListType = {
    listTitle?: string,
    linkTitle: string,
    path: string,
}

export const EmptyList = ({ ...props }: emptyListType) => {

    return(
        <div className="emptyList flex flex--column flex--align--center">
            <h2>{ props.listTitle }</h2>
            <img className="image" src={ imageEmpty } alt="Imagem para listas vazias" />
            <Link className="link" to={ props.path }>{ props.linkTitle }</Link>
        </div>
    );
}
