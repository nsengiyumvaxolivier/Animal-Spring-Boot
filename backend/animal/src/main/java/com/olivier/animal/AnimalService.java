package com.olivier.animal;

import java.util.List;

import org.springframework.stereotype.Service;

@Service 
public class AnimalService {

    
    private final AnimalRepository animalrepository;

    public AnimalService(AnimalRepository animalRepository){
        this.animalrepository= animalRepository;
        
    }
    //select.......................................
    public List<Animal> getanimals(){
        return animalrepository.findAll();
    }
    //insert...........................................

    public Animal addanimal(Animal animal){
        
        return animalrepository.save(animal);
    }
    //delete function...............................

    public void deleteanimal(Long id){
        animalrepository.deleteById(id);
    }

    //update.......................................
    public Animal apudateAnimal(Long id,Animal newData){
       //chech if the row exist.........
       Animal animal = animalrepository.findById(id).orElseThrow(() -> new RuntimeException("This Animal with this id "+id+" Not exist"));

       animal.setName(newData.getName());
       animal.setType(newData.getType());

       return animalrepository.save(animal);
}

//select single Animals...................................

public Animal getsigeList(Long id){
    return animalrepository.findById(id).orElseThrow(() -> new RuntimeException("Animal Not Exist"));
    

}
    
}
