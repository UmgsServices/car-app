
interface propt{
   ChangeMode(event: MouseEvent): void
   Data:any
}
function ViewMode({ChangeMode,Data}:propt){
   

return<div>
    <button type="button" onClick={(e)=>ChangeMode(e)} value={""}>ALL{"("+Data.filter((e:any)=>e.status.includes("")).length+")"}</button>
    <button type="button" onClick={(e)=>ChangeMode(e)} value={"Active"}>Active{"("+Data.filter((e:any)=>e.status.includes("Active")).length+")"}</button>
    <button type="button" onClick={(e)=>ChangeMode(e)} value={"Pending"}>Pending{"("+Data.filter((e:any)=>e.status.includes("Pending")).length+")"}</button>
<button type="button" onClick={(e)=>ChangeMode(e)} value={"Rejected"}>Rejected{"("+Data.filter((e:any)=>e.status.includes("Rejected")).length+")"}</button>
</div>
}
export default ViewMode