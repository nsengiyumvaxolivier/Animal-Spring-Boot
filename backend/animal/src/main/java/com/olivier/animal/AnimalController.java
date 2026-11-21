package com.olivier.animal;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;





@CrossOrigin(origins = {"http://localhost:5173","https://animal-spring-boot.vercel.app"})
@RestController 
public class AnimalController {
    private final AnimalService animalservice;
    public AnimalController(AnimalService animalservice){
        this.animalservice=animalservice;
    }
    //home Router.................................
    @GetMapping("/")
    public List<Animal> getanimals(){
        return animalservice.getanimals();
    }

    //insert router..........................

    @PostMapping("/add-animal")
    public String insert(@RequestBody Animal newAnimal) {
        Animal insert = animalservice.addanimal(newAnimal);
        return "Animal Added";
    }
    //delete.........................

    @DeleteMapping("/animal/{id}")
    public String delete(@PathVariable Long id){
        animalservice.deleteanimal(id);
        return "Animal Deleted";
    }

    //update.......................................

    @PutMapping("animal/{id}")
    public String update(@PathVariable Long id, @RequestBody Animal animal) {
        Animal update =animalservice.apudateAnimal(id, animal);
        return "Animal Updated";
        
    }
    
    //select singel Animal..................

    @GetMapping("/animal/{id}")
    public Animal getsingleanimal(@PathVariable Long id) {
        return animalservice.getsigeList(id);
        
    }
    
    
    
}
