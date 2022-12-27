import { ApplyJob } from "./apply-job";
import { Company } from "./company";

export class Job {


    jobId:number;
    
    jobName:string;
    
    jobDescription:string;
    
    jobSalary:number;
    
    
    //private List<ApplyJobDTO> jobList=new ArrayList<>();
    
    jobList:ApplyJob[];
    
    company:Company;

    //private CompanyDTO company;
}
