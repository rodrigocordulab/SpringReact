package com.devestudo.dsvendas.repositories;

import com.devestudo.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
