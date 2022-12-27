import { ApplyJob } from "./apply-job";

export class Student {
    
    studentId:number;
	  
    studentName:string;
	
    studentEmail:string;
	  
    studentAge:number;
	
	studentPassword:string; 
	
	studentClass:string;

    studentCGPA:string;
     
    //private List<ApplyJobDTO> studentList=new ArrayList<>();

    studentList:ApplyJob[];

}
