package com.furnitureSale.dao;

import java.util.List;


import com.furnitureSale.model.Wishlist;
import com.furnitureSale.util.HibernateUtil;

public class WishListDaoImpl implements WishListDao{
HibernateUtil hibernateUtil = new HibernateUtil();
	

	@Override
	public String getWishlist(Wishlist wishList) {
		hibernateUtil.openCurrentSessionwithTransaction();
		
		hibernateUtil.getCurrentSession().save(wishList);
		
		hibernateUtil.closeCurrentSessionwithTransaction();
		return "Success";
	}

}
