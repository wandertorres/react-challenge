import React from "react";

type snackType = {
    messsage: string;
    type: string
}

export const SnackBar = ({messsage, type}: snackType) => {

    return <span className={type}>{messsage}</span>
}
