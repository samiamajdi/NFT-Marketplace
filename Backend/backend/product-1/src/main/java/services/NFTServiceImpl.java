package services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entities.Item;
import repositories.AccountRepository;
import repositories.NFTRepository;

@Service
public class NFTServiceImpl implements NFTService {
	

	
	@Autowired
	private NFTRepository prodRepo;
	@Autowired
	private AccountService a;

	
	//return un produit par son ID
	@Override
	public Item findProductById(String prodId) {
		
		Item p= prodRepo.findById(prodId).get();
		return p;
	}
	
public List<Item> getProductByUsername(String account){
	
	List <Item> o=prodRepo.findAll();
	List <Item> oo=new ArrayList<Item> ();
	String username=a.generateAccount(account);
	for(int i=0;i<o.size();i++) {
		if(o.get(i).getAccount()==username) {
			oo.add(o.get(i));
		}
	}
	
	
	return oo;
	
	
}
	
	//returner tous les produits de la BD
	@Override
	public List<Item> getAllProducts() {
		
		// TODO Auto-generated method stub
		return prodRepo.findAll();
	}
	

	@Override
	public List<Item> getSoldProd(){
		return prodRepo.findBySold(true);
	
	}
	

	

}
