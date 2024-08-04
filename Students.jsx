function Student(props){
return(
    <>
   <div className="names">
    <p> Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Profession: {props.is}</p>
   </div>
    </>
)
}
export default Student