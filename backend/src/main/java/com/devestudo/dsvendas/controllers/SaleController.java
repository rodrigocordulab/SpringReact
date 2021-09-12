package com.devestudo.dsvendas.controllers;

import com.devestudo.dsvendas.dto.SaleDTO;
import com.devestudo.dsvendas.dto.SaleSuccessDTO;
import com.devestudo.dsvendas.dto.SaleSumDTO;
import com.devestudo.dsvendas.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

    @Autowired
    private SaleService services;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
        Page<SaleDTO> list = services.findAll(pageable);
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/amount-by-seller")
    public ResponseEntity<List<SaleSumDTO>> amounGroupedBySeller(){
        List<SaleSumDTO> list = services.amountGroupBySeller();
        return ResponseEntity.ok(list);
    }

    @GetMapping(value = "/success-by-seller")
    public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller(){
        List<SaleSuccessDTO> list = services.successGroupedBySeller();
        return ResponseEntity.ok(list);
    }
}
