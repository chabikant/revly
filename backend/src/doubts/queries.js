const getDoubtsUser = "select * from users";
const getDoubtsUserById = "select * from users where user_id = $1";
const checkEmailExists = "select u from users where u.email= $1";

module.exports = {
    getDoubtsUser,
    getDoubtsUserById,
    checkEmailExists
}