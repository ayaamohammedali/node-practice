// npm i mysql2
// create database , tables

import mysql2 from 'mysql2'

// creat connection between nodejs and mysql 

export const pool = mysql2.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'sql_ass'
})