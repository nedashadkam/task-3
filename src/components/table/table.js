import React from "react";

const Table = (props) => {

  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <table className="text-[11px]"> 
        <thead className="bg-black text-gray-300 w-full" >
          <tr className="grid grid-cols-12  w-full">
            <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >#</td>
            {
                props.tHeadData?.map((item,index)=>{
                    return (
                        <td key={index} className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >{item.title}</td>
                    )
                })
            }
            <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >عملیات</td>
          </tr>
        </thead>
        <tbody className="bg-white taxt-black w-full ">
            {
                props.tBodyData?.map((item,index) => {
                    return (
                        <tr key={item.id} className="grid grid-cols-12 w-full">
                           <td className="border-b-white border-b-0  flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >{item.id}</td>
                           <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" > {item.registrationDate}</td>
                           <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >{item.message}</td>
                           <td style={item.priority==='آنی' ? {backgroundColor:'#ef4a4a'} : (item.priority==='فوری' ? {backgroundColor:'#ffff3e'} : {backgroundColor:'rgb(67 221 67)'})} className="flex justify-center items-center p-[10px] border-solid border-[1px]" >{item.priority}</td>
                           <td style={item.latestStatus==='اقدام نشده'? {color:'#ef4a4a'} : {color:'rgb(67 221 67)'}} className=" flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >{item.latestStatus}</td>
                           <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" > {item.reporter}</td>
                           <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" > {item.reporterPhoneNumber}</td>
                           <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >{item.requestType} </td>
                           <td className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >{item.trackingCode} </td>
                           <td style={item.timeRemaining==='تمام شده'?{color:'#ef4a4a'}:{color:'rgb(67 221 67)'}} className="flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" >{item.timeRemaining}</td>
                           <td className=" flex justify-center items-center p-[10px] border-gray-300 border-solid border-[1px]" > 
                            <span style={item.dangerous?{backgroundColor:'rgb(67 221 67)'}:{backgroundColor:'#ef4a4a'}} className="inline-block w-4 h-4 rounded-full bg-red-700"></span>
                           </td>
                           <td className="flex justify-around items-center p-[10px] border-gray-300 border-solid border-[1px] border-b-0" >
                            <span onClick={()=>{props.deletItem(item.id)}} className="material-icons text-[20px] cursor-pointer ">delete</span>
                            <span className="material-icons text-[20px] cursor-pointer ">edit_square</span>
                           </td>
                       </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};
export default Table;
