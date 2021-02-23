const Navigation = ({onRouteChange,isSignedIn})=>{
    if(isSignedIn){
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={()=>onRouteChange('signout')} className='f3 dim black underline link pa3 pointer'> SignOut </p>
            </nav>
            );
    }else{
        return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signin')} className='f3 dim black underline link pa3 pointer'> SignIn </p>
            <p onClick={()=>onRouteChange('register')} className='f3 dim black underline link pa3 pointer'> Register </p>

         </nav>
        );
    }
   
  
}
export default Navigation;