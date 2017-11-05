package com.furnitureSale.service;

import java.util.List;

import com.furnitureSale.dao.ProductDao;
import com.furnitureSale.dao.ProductDaoImpl;
import com.furnitureSale.model.ProductTable;

public class ProductServiceImpl implements ProductService {
	ProductDao productdao = new ProductDaoImpl();
	@Override
	public List<ProductTable> getProductTable() {
		return productdao.getProductTable();
	}

}
