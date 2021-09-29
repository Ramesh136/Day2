import './App.css';
const Countries = () => {


    const list = new Array('INDIA','USA','UK', 'CHINA','NEPAL');





    return (
        <div>
            <h1 id = 'main'>Countries</h1>


            {
                list.map((country, index) => (
                    <div key={index} id = 'nav'>
                        <h1 >{index+1}:{country}</h1>
                       
                        
                    </div>
                )

                )
            }


        </div>
    )


}

export default Countries;


