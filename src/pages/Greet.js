import { useRef, useState } from "react";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import Output from "../components/Output.js";
export const Greet = () => {
    const firstName = useRef("");
    const middleName = useRef("");
    const lastName = useRef("");
    const fullName = useRef("");
    const [state, setState] = useState("");

    const getFirstName = (e) => {
        firstName.current = e.target.value;
        setState(state + 1);
    }
    const getMiddleName = (e) => {
        middleName.current = e.target.value;
        setState(state + 1);
    }
    const getLastName = (e) => {
        lastName.current = e.target.value;
        setState(state + 1);
    }

    const getFullName = () => {
        if (firstName.current !== "") {
            fullName.current = capitalize(firstName.current) + " ";
        }
        if (middleName.current !== "") {
            fullName.current += (capitalize(middleName.current) + " ");
        }
        if (lastName.current !== "") {
            fullName.current += (capitalize(lastName.current) + " ");
        }
    };

    const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    const validateButton = (e) => {
        if (e.target.innerText === "Greet") {
            getFullName();
            setState(state + 1);
        }
        else {
            firstName.current = "";
            middleName.current = "";
            lastName.current = "";
            fullName.current = "";
            setState(state + 1);
        }
    }

    const keyHandler = (e) => {
        if (e.key === "Enter") {
            getFullName();
            setState(state + 1);
        }
    }
    return (
        <>
            <div className="body">
                <h2>Welcome To Greet Application</h2>
                <div className="input">
                    <Input
                        type="text"
                        label="first Name"
                        // class = ""
                        getContent={getFirstName}
                        val={firstName.current}
                        keyHandler={keyHandler}
                    />
                    <Input
                        type="text"
                        label="middle Name"
                        getContent={getMiddleName}
                        val={middleName.current}
                        keyHandler={keyHandler}
                    />
                    <Input
                        type="text"
                        label="last Name"
                        getContent={getLastName}
                        val={lastName.current}
                        keyHandler={keyHandler}
                    />
                </div>
                <div className="btn-container">
                    <Button className="btn" label="Greet" handleEvent={validateButton} />
                    <Button className="btn" label="Clear All" handleEvent={validateButton} />
                </div>
                <div className="output-area">
                    <Output fullName={fullName.current} />
                </div>
            </div>
        </>
    );
}
export default Greet;