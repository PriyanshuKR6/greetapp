const Button = (props) => {
    return (
        <button className = {props.className}onClick={props.handleEvent}>{props.label}</button>
    );
}
export default Button;