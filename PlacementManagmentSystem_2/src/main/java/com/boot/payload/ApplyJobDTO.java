package com.boot.payload;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ApplyJobDTO 
{
   private int applyJobId;
   
   private String status;
   
   private StudentDTO student;
   
   private JobDTO job;
}
