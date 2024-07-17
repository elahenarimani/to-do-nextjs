import { TiDelete } from "react-icons/ti";
interface ITodoRender {
  text: string;
  status: boolean;
  id: number;
  habdleDeletButton : Function
}
export default function ToDoRender({ text, status, id ,habdleDeletButton }: ITodoRender){
    // const [todo, setTodo] = useState<IDetailData[]>([]);
    // setTodo(data)
    // function habdleDeletButton(removeId: number) {
    //     setTodo(
    //        todo.filter((item: any) => {
    //          return item.id !== removeId;
    //        }));
    //      }
  return (
    <div className="w-full flex justify-center items-center ">
      <div className=" flex justify-between items-center border-b-2 border-gray-300 border-solid pr-[30px] pl-[30px] ">
        <p className="w-[400px]     mt-[30px]">
          {text}
        </p>
        <button className="w-[30px] h-[30px] mt-[30px] " onClick={() => habdleDeletButton(id)}>
          <TiDelete className="w-full h-full text-gray-400" />
        </button>
      </div>
    </div>
  );
}
