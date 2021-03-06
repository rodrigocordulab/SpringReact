package com.devestudo.dsvendas.service;

import com.devestudo.dsvendas.dto.SaleDTO;
import com.devestudo.dsvendas.dto.SaleSuccessDTO;
import com.devestudo.dsvendas.dto.SaleSumDTO;
import com.devestudo.dsvendas.entities.Sale;
import com.devestudo.dsvendas.repositories.SaleRepository;
import com.devestudo.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable) {
        sellerRepository.findAll();
        Page<Sale> result = repository.findAll(pageable);
        return result.map(SaleDTO::new);
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupBySeller(){
        return repository.amountGroupBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupedBySeller(){
        return repository.successGroupedBySeller();
    }
}
