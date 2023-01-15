package repositories;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import entities.Item;
import feign.Param;

@Repository
public interface NFTRepository extends MongoRepository<Item, String> {

	

//	@Query(value = "SELECT u FROM product u WHERE u.account IN :account")
//	List<Item> findProdByUser(@Param("account") Collection<String> account);
	@Query(value = "SELECT u FROM nft u WHERE u.category.id=:id")
	List<Item> findProdByCat(@Param("id") String account);

	List<Item> findAllByAccount(String id);
	
	 @Query("{'solde' : true}")
		 List<Item> findBySold(Boolean solde);
		
}

		
		
