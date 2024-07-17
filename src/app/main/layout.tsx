interface Iprops{
    children :React.ReactNode;
}
export default function mainLayout({children}:Iprops){
    return(
        <div >
            {children}
        </div>
    )
}