import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {FullInput} from "./components/FullInput";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState("");

    console.log(title)

    function addMessage(messageTitle: string) {
        const newMassage = [...message];
        newMassage.unshift({message: messageTitle});
        setMessage(newMassage);
    }

    function callBackButtonHandler() {
        addMessage(title);
        setTitle("");
    }

    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button title={"+"} callback={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
