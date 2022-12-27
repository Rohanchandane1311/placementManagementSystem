package com.boot.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class ApplyJobEntity 
{
	  @Id
      @GeneratedValue(strategy = GenerationType.AUTO)
      private int applyJobId;
	
	  @Column(nullable=false)
      @NotEmpty(message ="Status can not be empty")
      @Size(min=2,max=10,message ="Status must be minimum 2 charachters and maximum 10")
      private String status;
     
      @ManyToOne
      @JoinColumn(name="Sid")
      private StudentEntity student;

      @ManyToOne
      @JoinColumn(name="Jid")
      private JobEntity job;

}
