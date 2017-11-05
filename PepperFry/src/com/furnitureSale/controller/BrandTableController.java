package com.furnitureSale.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.furnitureSale.model.BrandTable;
import com.furnitureSale.service.BrandTableService;
import com.furnitureSale.service.BrandTableServiceImpl;

@Path("/brands")

public class BrandTableController {

	BrandTableService brandtableservice = new BrandTableServiceImpl();

	@Path("/getAllBrandTable")
	@GET
	@Produces("application/json")
	public List<BrandTable> getBrandTable()
	{
		return brandtableservice.getBrandTable();
	}
}
