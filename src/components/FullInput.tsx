import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    addMessage: (message: string) => void,
}

export const FullInput = (props: InputPropsType) => {
    let [title, setTitle] = useState("");
    // console.log(title)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle("")
    }

    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button  onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};