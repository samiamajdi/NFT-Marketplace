package services;

import java.util.List;
import java.util.Optional;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import entities.Item;


@FeignClient(name = "PRODUCT1-SERVICE")
public interface NFTService {


	//returner un produit par son ID
	Item findProductById(String prodId);

	//returner tous les produits de la BD
		List<Item> getAllProducts();

		

		List<Item> getSoldProd();




	
	
	
	




}


