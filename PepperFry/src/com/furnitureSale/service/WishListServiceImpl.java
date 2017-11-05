package com.furnitureSale.service;

import java.util.List;

import com.furnitureSale.dao.WishListDao;
import com.furnitureSale.dao.WishListDaoImpl;
import com.furnitureSale.model.Wishlist;

public class WishListServiceImpl implements WishListService {
	WishListDao wishlistdao = new WishListDaoImpl();
	
	
	@Override
	public String getWishlist(Wishlist wishList) {
		return wishlistdao.getWishlist(wishList);
	}

}
