import React from "react";

type snackType = {
    messsage: string;
    type: string
}

export const SnackBar = ({ ...props }: snackType) => {

    return <span className={"flex flex--justify--center flex--align--center " +props.type }>
        { props.messsage }
    </span>
}
