import React from 'react'
import '../App.css'
import ujjal from './ujjal.jpg';
import { useState,useEffect} from 'react'

const Temppp=()=>
{ 
    const [City, setCity] = useState(null);
    const [Temp, setTemp] = useState(null);
    const [Data, setData] = useState("kolkata");
    const [Tempmax, setTempmax] = useState(null);
    const [Tempmin, setTempmin] = useState(null);
    const [Tempname, setTempname] = useState(null);
    const [Tempwind, setTempwind] = useState(null);

    useEffect(()=>{
        


        if(Data!=''){

         const fetchApi=async()=>
         {
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${Data}&APPID=51f1c8fb7657454e7fcf6cb9dae1bca3` 
            const response=await fetch(url);
            const resjson=await response.json();
            console.log(resjson);
            if(resjson.cod!='404'){
            //setCity(resjson.main);
            setTemp(resjson.main.temp);
            setTempmax(resjson.main.temp_max);
            setTempmin(resjson.main.temp_min);
            setTempname(resjson.sys.country);
            setTempwind(resjson.wind.speed);
            
            
            }
            else{
              
                setTemp("");
               
            }
         }
    
         fetchApi();
        }else{
            //setData("kolkata");
            setData("")
        }
        },[Data])



     const ujjal=(e)=>
     {
         setData(e.target.value);
         
     }
    
       return(<div >

                 <div className="temppp_body">
                   
                               <input type="search" placeholder="Search" value={Data}  onChange={ujjal}   className="temppp_input"/>
                 

                           <div className="tempypp_secend_body">
                                     
                                
                                  {(() => {
                                    if (Temp != "") {
                                      return (
                                         <React.Fragment>
                                        <h2 className="location">
                                  
                                        <i class="fas fa-street-view"></i> {Data}
                                         
                                        </h2>
      
                                        <h2  className="dgerr">

                                       <p>{Temp} </p>
                                      
                                      
                                       </h2>
                                       <p className="max"><b>Max Temp:{Tempmax} || min Temp:{Tempmin}</b></p>
                                       <p>wind speed:{Tempwind} || country:{Tempname}</p>

                                       <p id="min"></p>



                                       </React.Fragment>
                                      )
                                    }else{
                                        return (
                                            <React.Fragment>
                                           
         
                                           <h2  >
                                          <p className="data">404 not found! </p> 
                                          </h2>
                                          </React.Fragment>
                                         )

                                    } 

                                  })()}
                                   
                    
                            </div>

                 </div>

        </div> );
}
export default Temppp;