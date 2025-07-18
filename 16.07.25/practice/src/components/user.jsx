const User = (props)=>{
    const{user}=props;
    return(
        <div>
            <h4>{user?.name}</h4>
            <h4>{user?.age}</h4>
            <h4>{user?.gender}</h4>
        </div>
    )
}
export default User