package com.furnitureSale.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.furnitureSale.model.ProductTable;
import com.furnitureSale.service.ProductService;
import com.furnitureSale.service.ProductServiceImpl;

@Path("/Product")
public class ProductController {
	ProductService productservice = new ProductServiceImpl();

	@Path("/getAllProduct")
	@GET
	@Produces("application/json")
	public List<ProductTable> getProductTable()
	{
		return productservice.getProductTable();
	}
}
