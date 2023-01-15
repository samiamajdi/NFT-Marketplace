package services;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entities.Account;
import repositories.AccountRepository;

@Service
public class AccountService {
	@Autowired
	AccountRepository a;
	
	public String generateAccount(String accountId) {
		System.out.println("wussup");
		Account aa;
		List <Account> alist;
		if(a.existsById(accountId)) {
			alist=a.findAll();
			for(int i=0;i<alist.size();i++) {
				if(alist.get(i).getAccount()==accountId) {
					return  alist.get(i).getUsername();
				}
			}
		}
		int result = new Random().nextInt(1000000) + 1;
		String username="username"+result;
		 aa=new Account(accountId,username);
		a.save(aa);
		System.out.println("name"+aa.getAccount());
		return aa.getAccount(); 
	}
	
	

}
