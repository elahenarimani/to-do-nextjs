"use client";
function DeletePage(){
    function deletehandler() {
        fetch("https://602bf8bf30ba7200172227a8.mockapi.io/todo/0", {
          method: "DELETE"
      
        })
          .then((data: any) => data.json())
          .then((result) => {
            console.log(result)
          })
          .catch((error) => {
            console.error("error:", error);
          });
      }
    return(
        <button onClick={() => deletehandler()}>delete</button>
        
    )
}
export default DeletePage;