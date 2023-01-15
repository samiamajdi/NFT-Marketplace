package restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import entities.Category;
import lombok.RequiredArgsConstructor;
import repositories.CategoryRepository;

import services.CategoryService;

@RequestMapping("/product/category")

@RequiredArgsConstructor

@RestController
@CrossOrigin(origins = "*")
public class CategoryRestController {
	
	@Autowired
	public CategoryService catService;
	
	@Autowired
	public CategoryRepository catRepository;
	
	@GetMapping("/getAll")
	public List<Category> listCategory() {
		return (catService.getAllCategories() );
		
	}
	
	@GetMapping("/get/{id}")
	public Category getCategory(@PathVariable("id") String id) {
		return (catService.getCategory(id) );
		
	}
	
	
     @PostMapping("/create")
     public String addCategory(@RequestParam("label") String label) {
    	 System.out.println("trying to create "+label);
    	 Category c= new Category(label);
    	 catRepository.save(c);
    	 return "category registered successfully!";
     }
     @PostMapping("/update/{id}")
     public Category updateCategory(@PathVariable("id") String id,String label) {
    	 Category c=catRepository.findById(id).get();
    	 c.setLabel(label);
    	 catRepository.save(c);
    	 System.out.println("category updated successfully!");
    	 return c;
    	 
     }
     
     @PostMapping("/delete/{id}")
     public String deleteCategory(@PathVariable("id") String id) {
    	 Category c=catRepository.findById(id).get();
    	 catRepository.delete(c);
    	 return "category deleted successfully!";
     }


}
