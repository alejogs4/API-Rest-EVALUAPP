CREATE DATABASE evaluaciones;
DROP DATABASE IF EXISTS evaluaciones;
use evaluaciones;

CREATE TABLE teachers (
  id varchar(50),
  nombre varchar(100) NOT NULL,
  username varchar(100) NOT NULL,
  pass varchar(100) NOT NULL,
  CONSTRAINT pk_teachers PRIMARY KEY(id)
);

CREATE TABLE tests (
  id smallserial,
  title varchar(100) NOT NULL,
  value_test integer NOT NULL,
  test_type varchar(5) NOT NULL,
  id_teacher varchar(50),
  CONSTRAINT pk_tests PRIMARY KEY(id),
  CONSTRAINT fk_tests_teachers FOREIGN KEY(id_teacher) REFERENCES teachers(id)
);

CREATE TABLE questions (
  id smallserial,
  question text NOT NULL,
  answer text NOT NULL,
  id_test smallserial,
  is_correct boolean NOT NULL,
  CONSTRAINT pk_questions PRIMARY KEY(id),
  CONSTRAINT fk_questions_tests FOREIGN KEY(id_test) REFERENCES tests(id)
);

CREATE TABLE students (
  id varchar(50),
  username varchar(100) NOT NULL,
  pass varchar(100) NOT NULL,
  CONSTRAINT pk_students PRIMARY KEY(id)
);

CREATE TABLE notes (
  id_test smallserial,
  id_student varchar(50),
  value_test float NOT NULL,
  CONSTRAINT fk_notes_tests FOREIGN KEY(id_test) REFERENCES tests(id),
  CONSTRAINT fk_notes_students FOREIGN KEY(id_student) REFERENCES students(id)
);

