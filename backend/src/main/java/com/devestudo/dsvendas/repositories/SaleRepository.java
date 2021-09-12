package com.devestudo.dsvendas.repositories;

import com.devestudo.dsvendas.dto.SaleSuccessDTO;
import com.devestudo.dsvendas.dto.SaleSumDTO;
import com.devestudo.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT new com.devestudo.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
     + " FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSumDTO> amountGroupBySeller();

    @Query("SELECT new com.devestudo.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
            + " FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSuccessDTO> successGroupedBySeller();
}
