package com.olivier.animal;

import jakarta.persistence.*;


@Entity 
public class Animal {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;
    private String type;

    //Emputy constructor...............

    public Animal(){

    }

    // valued constructor..........

    public Animal(Long id,String name,String type){
        this.id=id;
        this.name=name;
        this.type=type;
    }

    // setter function....................
    public void setId(Long id){this.id=id;}
    public void setName(String name){this.name=name;}
    public void setType(String type){this.type=type;}
    

    //getter functions.............................

    public Long getId(){return id;}
    public String getName(){return name;}
    public String getType(){return type;}
    
}
