package com.boot.payload;

import java.util.ArrayList;
import java.util.List;

import com.boot.entity.ApplyJobEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor

public class StudentDTO 
{
	private int studentId;
	  
    private String studentName;

    private String studentEmail;

    private int studentAge;

    private String studentPassword;

    private String studentClass;
    
    private String studentCGPA;
    
    @JsonIgnore
    private List<ApplyJobDTO> studentList=new ArrayList<>();


     

}
