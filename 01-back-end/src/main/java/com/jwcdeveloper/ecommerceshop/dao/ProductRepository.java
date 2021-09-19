package com.jwcdeveloper.ecommerceshop.dao;

import com.jwcdeveloper.ecommerceshop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
