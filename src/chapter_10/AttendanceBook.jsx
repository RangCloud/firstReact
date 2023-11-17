import React from 'react';

const students = [
    { name : 'inje', },
    { name : 'Steve', },
    { name : 'Bill', },
    { name : 'Jeff', },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student) => {
                return <li>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;