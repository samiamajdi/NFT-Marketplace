package repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import entities.Account;
import entities.Category;
@Repository
public interface AccountRepository extends MongoRepository<Account, String> {

}
