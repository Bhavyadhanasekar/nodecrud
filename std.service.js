const db=require('../db')

module.exports.getAllstudents = async ()=>{
    const [rows]=  await db.query("SELECT * FROM stddetails.students;")
    //.catch(err => console.log(err))
    return rows;
}

module.exports.getstudentsById = async (id)=>{
    const [rows]=  await db.query("SELECT * FROM stddetails.students where id = " + id)
    //.catch(err => console.log(err))
    return rows;
}

module.exports.DeletestudentsBYID = async(id)=>{
    const [rows]= await db.query("DELETE  FROM stddetails.students where id = "+ id)
    return rows;
}

module.exports.addoreditstudents = async(obj,emp_id=0)=>{
    const [data]= await db.query("call new_procedure (?,?,?,?)",
    [std_id,obj.std_name, obj.std_course, obj.std_fee])
    return data;
}

