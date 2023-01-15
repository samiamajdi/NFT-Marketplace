package services;

import java.util.List;

import entities.Category;

public interface CategoryService {
	
	//returner tous les produits de la BD
			List<Category> getAllCategories();
			Category getCategory(String catId);
			
}
