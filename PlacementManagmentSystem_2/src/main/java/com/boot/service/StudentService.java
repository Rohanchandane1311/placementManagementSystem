package com.boot.service;

import java.util.List;

import com.boot.entity.StudentEntity;
import com.boot.payload.StudentDTO;

public interface StudentService 
{
	 public StudentDTO addstudent(StudentDTO student);
	  
	  public List<StudentDTO> getAllstudentList();
	  
	  public StudentDTO getStudentById(int studentId);
	  
	  public void deleteStudentById(int studentId);
	  
	  public StudentDTO updateStudentByID(StudentDTO student, int studentId);
	  
	  public StudentEntity checkLogin(String studentEmail,String studentPassword);
}
