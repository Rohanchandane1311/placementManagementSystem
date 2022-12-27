package com.boot.exception;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException 
{
	@ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> resourceNotFoundException(ResourceNotFoundException ex)
    {
    	String message = ex.getMessage();
    	
    	ApiResponse response = new ApiResponse();
    	response.setMessage(message);
    	response.setStatus(false);
    	return new ResponseEntity<ApiResponse>(response,HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(ConstraintViolationException.class)
	   public ResponseEntity<Set<String>>   handleConstraintException(ConstraintViolationException ex)
	   {
		   
		      Set<String> set= new HashSet();// here set is used to receive all type of exception
		      ex.getConstraintViolations().stream().map(error->set.add(error.getMessage())).collect(Collectors.toSet());
		      
		      
		   
		   return new ResponseEntity<Set<String>>(set,HttpStatus.BAD_REQUEST);
	   }

}
