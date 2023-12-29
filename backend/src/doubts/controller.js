const pool = require('../../db');
const queries = require("./queries");

const getDoubtsUser = (req,res)=>{
    pool.query(queries.getDoubtsUser,(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows); 
    })

};


const getDoubtsUserById = (req,res)=>{
    const id = parseInt(req.params.user_id);
    pool.query(queries.getDoubtsUserById,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows)
    })
}

const addUser = (req,res)=>{
    const {username, password_hash, email, user_role} = req.body;
    //check id email exist
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
            res.send('email is already exist');
        }
    })
}

module.exports = {
    getDoubtsUser,
    getDoubtsUserById,
    addUser
}