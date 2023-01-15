package entities;

import java.util.List;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="nfts")
public class Item {
	
	
	public Item() {
		super();
	}











	@Id
	private String id;
	
	
	
	private String title ;
	
	private double price ;
	
	private boolean solde;
	
	private String account;
	
	private String image;
	

	
	@DBRef
	private Category category;







	



	@Override
	public String toString() {
		return "nft [id=" + id + ", title=" + title + ", price=" + price + ", solde=" + solde + ", account=" + account
				+ ", image=" + image + ", category=" + category + "]";
	}











	public Item( String title, double price, boolean solde, String account, String image,
			entities.Category category) {
		super();
		
		this.title = title;
		this.price = price;
		this.solde = solde;
		this.account = account;
		this.image = image;
		this.category = category;
	}











	public String getId() {
		return id;
	}











	public void setId(String id) {
		this.id = id;
	}











	public String getTitle() {
		return title;
	}











	public void setTitle(String title) {
		this.title = title;
	}











	public double getPrice() {
		return price;
	}











	public void setPrice(double price) {
		this.price = price;
	}











	public boolean isSolde() {
		return solde;
	}











	public void setSolde(boolean solde) {
		this.solde = solde;
	}











	public String getAccount() {
		return account;
	}











	public void setAccount(String account) {
		this.account = account;
	}











	public String getImage() {
		return image;
	}











	public void setImage(String image) {
		this.image = image;
	}











	public Category getCategory() {
		return category;
	}











	public void setCategory(Category category) {
		this.category = category;
	}
	












	
	
	



	


	

}
