package com.medicare.medicare.model.financeentities;

import com.medicare.medicare.model.patiententities.DepartmentFacilityMapping;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "")
public class Expenses {
    @Id
    @Column(name = "Expense_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long expenseID;

    @Column(name = "Description")
    private String expenseDescription;

    @Column(name = "Date_Of_Expense")
    private LocalDate dateOfExpense;

    @ManyToOne
    private DepartmentFacilityMapping departmentFacilityMapping;
}
