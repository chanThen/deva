package com.furnitureSale.dao;

import java.util.List;

import com.furnitureSale.model.BrandTable;
import com.furnitureSale.util.HibernateUtil;

public class BrandTableDaoImpl implements BrandTableDao {
	
	HibernateUtil hibernateUtil = new HibernateUtil();
	@Override
	public List<BrandTable> getBrandTable() {
		hibernateUtil.openCurrentSession();
		
		List<BrandTable> category_records =(List<BrandTable>)hibernateUtil.getCurrentSession().createQuery("from BrandTable").list();
		
		hibernateUtil.closeCurrentSession();
		return category_records;
	
	}

}
