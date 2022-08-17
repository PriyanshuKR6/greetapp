const Input = (props) => {
    return (
        <>
    <label htmlFor={props.label}>{props.label}</label>
    <input
    type = "text"
    value={props.val}
    onChange={props.getContent}
    onKeyUp = {props.keyHandler}
    id = {props.label}
    placeholder = "Enter First Name"></input>
    </>
    );
}

export default Input;