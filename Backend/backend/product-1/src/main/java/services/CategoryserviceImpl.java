package services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entities.Category;

import repositories.CategoryRepository;


@Service
public class CategoryserviceImpl implements CategoryService{
	
	@Autowired
	private CategoryRepository catRepo;
	
	//returner tous les produits de la BD
	   @Override
		public List<Category> getAllCategories() {
			// TODO Auto-generated method stub
			return catRepo.findAll();
		}
		@Override
		public Category getCategory(String catId) {
			return catRepo.findById(catId).get();
		}
		
		
}
