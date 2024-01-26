
type parameter={
    text:string;
    bg:string;
    count:number
}
const Header=({text,bg,count}:parameter)=>{
    return( 
    <div className={`${bg} flex items-center h-12 pl-4`}>
    {text} 
    <div className='ml-2 bg-blue-200 w-5 h-5 text-black rounded-full flex items-center justify-center'>
        {count}
        </div>
    </div>
)}

export default Header;