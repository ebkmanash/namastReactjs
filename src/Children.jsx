const Children=(props)=>{
    return(<div>
        name:{props.name}
        age:{props.age}
    </div>)
}

Children.defaultProps={
    name:'unknown',
    age:'unknown'
}
export default Children;
