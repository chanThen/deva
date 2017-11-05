package com.furnitureSale.service;

import java.util.List;

import com.furnitureSale.dao.BrandTableDao;
import com.furnitureSale.dao.BrandTableDaoImpl;
import com.furnitureSale.model.BrandTable;

public class BrandTableServiceImpl implements BrandTableService {
	BrandTableDao brandtabledao = new BrandTableDaoImpl();

	@Override
	public List<BrandTable> getBrandTable() {
		return brandtabledao.getBrandTable();
	}	
	
}


