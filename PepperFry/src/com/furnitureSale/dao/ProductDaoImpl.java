package com.furnitureSale.dao;

import java.util.List;

import com.furnitureSale.model.CategoryTable;
import com.furnitureSale.model.ProductTable;
import com.furnitureSale.util.HibernateUtil;

public class ProductDaoImpl implements ProductDao {
	HibernateUtil hibernateUtil = new HibernateUtil();
	@Override
	public  List<ProductTable> getProductTable() {
		hibernateUtil.openCurrentSession();
		
		List<ProductTable> category_records =(List<ProductTable>)hibernateUtil.getCurrentSession().createQuery("from ProductTable").list();
		
		hibernateUtil.closeCurrentSession();
		return category_records;
	
	}
	
}
