interface propt{
    Data:any,
    ToDisplay:any
    setData:React.Dispatch<any>
}
function RegisterStatus({Data,ToDisplay,setData}:propt){

    function UpdateStatus(event:MouseEvent){  
       const update=Data.map((item)=>item.id==ToDisplay.id?item.status=event.target.value:item) 
       setData(Data) 
       console.log(Data)
       localStorage.setItem("data",JSON.stringify(Data))
      
    }
    return <div>
    <button type="button" onClick={(e)=>UpdateStatus(e)} value={"Accepted"}>Accept</button>
    <button type="button" onClick={(e)=>UpdateStatus(e)} value={"Rejected"}>Reject</button>
    </div>
}
export default RegisterStatus