interface Iprops{
    children :React.ReactNode;
}
export default function MainLayout({children}:Iprops){
    return(
        <div >
            {children}
        </div>
    )
}