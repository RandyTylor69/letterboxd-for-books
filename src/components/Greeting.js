export default function Greeting(props){
    return(
        <h2 className="greeting">Good day, {<span className="greet-name">{props.userName}</span>}. Here are some of your recent reads.</h2>
    )
}