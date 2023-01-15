package restController;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import entities.Category;
import entities.Item;
import lombok.RequiredArgsConstructor;

import repositories.AccountRepository;
import repositories.CategoryRepository;
import repositories.NFTRepository;

import services.AccountService;
import services.NFTService;
import services.NFTServiceImpl;



@RequestMapping("product/nft")

@RequiredArgsConstructor

@RestController
@CrossOrigin(origins = "*")
public class NFTRestController {

	@Autowired
	private NFTService productService ;
	 

	@Autowired
	private NFTRepository prodRepo ;
	

	
	

	@GetMapping("/getProduct/{id}")
	public Item getProduct(@PathVariable("id") String id) {
		Item p=prodRepo.findById(id).get();
		return p;
	}
	
	

	@Autowired
	AccountService a;
	@Autowired
	CategoryRepository pp;
    @CrossOrigin(origins = "*")
	@PostMapping("/NFT/{title}/{account}/{price}/{images}/{Categorie}")
	public String create( @PathVariable("title") String title,@PathVariable("account") String account ,@PathVariable("price") double price ,boolean solde,@PathVariable("images") String images ,@PathVariable("Categorie") String categorie,HttpServletRequest request){
		System.out.println("creating an nft !");
		List<Category> ii=pp.findAll();
		Category y=new Category();
		
		for(int i=0;i<ii.size();i++) {
			if(ii.get(i).getId().equals(categorie)) {
				System.out.println("verified");
				y=ii.get(i);
			}
		}
		String username=a.generateAccount(account);
		username="haha";
		
		
//		String id=userfeign.getUserId(request.getHeader("Authorization"));
//(String id, String title, double price, boolean solde, String account, String image,
		Item nfts = new Item(
				title,
				price,
				 solde,
				 username,
				images,
				 y
				 );

prodRepo.save(nfts);
		return "Your nft is minted !";

		
		
	}
	
	//retourner la liste de tous les produits
	@GetMapping("/allProducts")
    public List<Item> getAllproducts(){
        return (productService.getAllProducts() );
    }
	
	NFTServiceImpl p; 
	@GetMapping("/ProductByUsername")
	public List<Item> getProductByUsername(@RequestParam("account") String Account){
		return p.getProductByUsername(Account);
	}
	
	
	
	@PostMapping("/delete/{id}")
	public String delete(@PathVariable("id") String id) {
		Item p= prodRepo.findById(id).get();
		
		prodRepo.delete(p);
		return "product deleted successfully!";
	}
	
	@PostMapping("/solde/{id}")
	public Item solde(@PathVariable("id") String id) {
		Item p= prodRepo.findById(id).get();
		p.setSolde(true);
	return 	prodRepo.save(p);
		
	}
	
	

	@GetMapping("/isSold")
	public List<Item> isSold(){
		return prodRepo.findBySold(true);
	}
	@Autowired 
	NFTServiceImpl o;
	@GetMapping("/getByCat/{cat}")
	public List<Item> getBycat(@PathVariable("cat") String cat){
		System.out.println("category"+cat);
		List <Item> result=new ArrayList<Item>();
//		result=prodRepo.findProdByCat(cat);
		List <Item> u=o.getAllProducts();
		for(int i=0;i<u.size();i++) {
			if(u.get(i).getCategory().getId().equals(cat)) {
				result.add(u.get(i));
			}
		
		}
		return result;
	}
	
}
