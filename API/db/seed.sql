-- DROP DATABASE IF EXISTS doctor;
-- CREATE DATABASE doctor;
-- \c doctor


-- CREATE TABLE patient(
--      patientID  varchar(50) not null primary key ,
--       pname varchar(50) not null, 
--       age float(5),
--       gender varchar(10), 
--       address varchar(70), 
--       phone varchar(15), 
--       pimage varchar(50),
--       );

-- CREATE TABLE doctor(
--   doctorID varchar(20) not null primary key,
--   dname varchar(50) not null,
--   address varchar(70), 
--   phoneno varchar(15), 
--   gender varchar(10), 
--   password varchar(15),
--   dimage varchar(50),
--   );

--   CREATE TABLE appointment(
--     patientID varchar(20) not null,
--     doctorID varchar(20)not null,
--     app_no varchar(20) not null,
--     date date,
--     time time,
--     primary key(doctorID, app_no), 
--     foreign key(patientID) references patient(patientID),
--     foreign key(doctorID) references doctor(doctorID));

--     INSERT INTO patient (pname ,age ,gender,address , phone , pimage ) VALUES
-- ('mmm', 20, 'female', 'saudi arabia', '123','');
--    INSERT INTO doctor (dname ,address, phoneno ,gender,password , dimage ) VALUES
-- ('mmm', 'saudi arabia', '123', 'female', '123123','');