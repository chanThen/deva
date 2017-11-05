package com.furnitureSale.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.furnitureSale.model.Wishlist;
import com.furnitureSale.service.WishListService;
import com.furnitureSale.service.WishListServiceImpl;


@Path("/wish")

public class WishListController {

	WishListService wishlistservice = new WishListServiceImpl();

	@Path("/getwishlist")
	@POST
	@Produces("application/json")
	public String getWishlist(@QueryParam("cust_id") int custId,
			@QueryParam("product_id")int productId)
	{
		Wishlist wishList = new Wishlist();
		
		wishList.setCust_id(custId);
		wishList.setProduct_id(productId);
		return wishlistservice.getWishlist(wishList);
	}
}
