import { useState } from 'react';


const Title = (props) => {



    let [title, setTitle] = useState("Javascript");
    let data;

    const doSomething = (data) => {
        console.log("hello " + data);
        console.log(props.name);
    };

    const readValue = (value) => {

        data = value;

    }




    return (
        <div>
            <input type="text" placeholder="Enter Title"
                onChange={(event) => {

                    readValue(event.target.value);


                }}
            />
            <h1>{title}</h1>
            <h1>{props.name}</h1>
            <h1>{props.users}</h1>
            <button onClick={() => {
                doSomething("Saurabh");
            }}>Click</button>

            <button onClick={() => {
                setTitle(data);
            }}>Change Title</button>
        </div>
    )
}

export default Title;