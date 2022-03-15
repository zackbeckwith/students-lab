import Score from "./Score";

const Student = (props) => {
  return (
    <>
      <h3>Student Name: {props.student.name} </h3>
      <p>Student Bio: {props.student.bio}</p>
      {props.student.scores.map(score => <Score key={score} score={score} />)}
    </>
  )
}
 
export default Student;