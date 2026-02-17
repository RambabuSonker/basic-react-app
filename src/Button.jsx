function handleClick(event){
        console.log("Hello");
        console.log(event);
}
function handleMouseOver(){
        console.log("Bye");
}

function handleDblClick (){
        console.log("you double clicked")
}

export default function Button(){
        return(
                <div>
                        <button onClick={handleClick}>Click me!</button>
                        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptates recusandae iure architecto sequi rem alias tempora magnam qui veritatis deserunt quos, voluptatem quod culpa blanditiis veniam est minima tenetur.</p>
                        <button onDoubleClick={handleDblClick}>Double click me</button>
                </div>
        );
}