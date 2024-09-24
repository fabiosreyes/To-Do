import React, {FC, InputHTMLAttributes} from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "string";
    placeholder: "string";
    onChange: () => void
}

const Input: FC<inputProps> = (props) => {
    return( 
        <>
            <input
                type={props.type}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </>
    )
}

export default Input