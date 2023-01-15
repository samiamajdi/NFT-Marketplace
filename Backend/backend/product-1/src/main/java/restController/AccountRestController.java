package restController;
import org.json.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import services.AccountService;

@RequestMapping("product/username")

@RequiredArgsConstructor

@RestController
@CrossOrigin(origins = "*")
public class AccountRestController {
	
	public AccountRestController() {
		super();
		System.out.println("hello world");
	}
	@Autowired
	private AccountService as ;
	@GetMapping("/getUsername/{account}")
	public String getUsernameByAccount(@PathVariable("account") String account ) {
		
		return  as.generateAccount(account);
		
	}
	

} 
