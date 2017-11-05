package com.furnitureSale.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="wishlist")
public class Wishlist {

	@Id
	@GeneratedValue
	@Column(name = "wishlist_id ")
	private int wishlist_id ;
	
	
    @Column(name = "product_id")
    private int product_id ;
	
	
	
    @Column(name = "cust_id")
    private int cust_id ;



	public int getWishlist_id() {
		return wishlist_id;
	}



	public void setWishlist_id(int wishlist_id) {
		this.wishlist_id = wishlist_id;
	}



	public int getProduct_id() {
		return product_id;
	}



	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}


	public int getCust_id() {
		return cust_id;
	}


	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}


	
}
