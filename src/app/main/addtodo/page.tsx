"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import TodorenderPage from "../../components/todorender/page";
import { json } from "stream/consumers";
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
  const [inpval, setInpval] = useState<string | number>("");
  useEffect(() => {
    axios
      .get("https://602bf8bf30ba7200172227a8.mockapi.io/todo")
      .then((result) => setTodo(result.data))
      .catch((err) => console.log(err));
  }, []);

  function habdleDeletButton(removeId: number) {
    setTodo(
      todo.filter((item: any) => {
        return item.id !== removeId;
      })
    );
  }
  function postNewTodo() {
    const newTodo = {
      text: inpval,
      is_done: true,
    };
    fetch("https://602bf8bf30ba7200172227a8.mockapi.io/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((data: any) => data.json())
      .then((result) => {
        setTodo(result);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }
  return (
    <div>
      <div className=" flex justify-center pt-[50px]">
        <div className="w-[500px]  h-[50px] border-2 border-gray-300 border-solid rounded-[5px] flex justify-between items-center pr-[20px] pl-[20px]">
          <input
            value={inpval}
            onChange={(e: any) => setInpval(e.target.value)}
            placeholder="لطفا تو دو را وارد کنید..."
            className="bg-blue-500 w-10/12 h-[30px] outline-none"
          ></input>
          <button className="w-[30px] h-[30px] " onClick={() => postNewTodo()}>
            <IoIosAddCircle className="w-full h-full text-gray-300" />
          </button>
        </div>
      </div>

      {todo.map((item: any) => {
        return (
          <TodorenderPage
            key={item.id}
            text={item.text}
            status={item.is_done}
            id={item.id}
            habdleDeletButton={habdleDeletButton}
          />
        );
      })}
    </div>
  );
}
