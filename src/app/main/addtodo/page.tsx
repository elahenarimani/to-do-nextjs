
"use client"
import axios from "axios"
import { useState , useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import ToDoRender from "../../../components/todorender/todorender";
import { json } from "stream/consumers";
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://602bf8bf30ba7200172227a8.mockapi.io/todo"
//     );
//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// }
interface IDetailData {
  text: string;
  status: boolean;
  id: number;
}
interface Idata {
  deta: IDetailData[];
  setData: Function;
}

  interface IDetailData {
      text: string;
      status: boolean;
      id: number;
    }
    export default function AddTodoPage() {
    const [todo, setTodo] = useState<IDetailData[]>([]);
    const [inpval , setInpval] = useState<string|number>("")
   useEffect(() => {
    axios.get("https://602bf8bf30ba7200172227a8.mockapi.io/todo")
    .then(result => setTodo(result.data))
    .catch(err => console.log(err))
   },[]) 
    // const [todo, setTodo] = useState<IDetailData[]>([]);
    // setTodo(data)
    function habdleDeletButton(removeId: number) {
        setTodo(
           todo.filter((item: any) => {
             return item.id !== removeId;
           }));
         }
     function postNewTodo(){
        const newTodo = {
            text:inpval
        }
        fetch("https://602bf8bf30ba7200172227a8.mockapi.io/todo",{
             method: "POST",
             body : JSON.stringify(newTodo)
        })
        .then((data:any) => data.json())
       
     }
  return (
    <div>
      <div className=" flex justify-center pt-[50px]">
        <div className="w-[500px]  h-[50px] border-2 border-gray-300 border-solid rounded-[5px] flex justify-between items-center pr-[20px] pl-[20px]">
          <input
            value={inpval}
            onChange={(e:any) => setInpval(e.target.value)}
            placeholder="لطفا تو دو را وارد کنید..."
            className="bg-blue-500 w-10/12 h-[30px] outline-none"
          ></input>
          <button className="w-[30px] h-[30px] ">
            <IoIosAddCircle className="w-full h-full text-gray-300" />
          </button>
        </div>
      </div>

      {todo.map((item: any) => {
        return (
          <ToDoRender
            key={item.id}
            text={item.text}
            status={item.is_done}
            id={item.id}
            habdleDeletButton ={habdleDeletButton}
          />
        );
      })}
    </div>
  );
}
