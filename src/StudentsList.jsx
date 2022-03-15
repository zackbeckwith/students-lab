import Student from "./Student";


const StudentsList = (props) => {
  return (  
    <>
      {props.students.map(student =>
        <Student key={student.name} student={student}/>
      )}
    </>
  );
}
export default StudentsList;