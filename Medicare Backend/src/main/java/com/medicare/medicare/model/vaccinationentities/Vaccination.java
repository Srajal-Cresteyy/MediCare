package com.medicare.medicare.model.vaccinationentities;

import com.medicare.medicare.model.patiententities.Patient;
import com.medicare.medicare.model.staffentities.Staff;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "Vaccination")
@NoArgsConstructor
public class Vaccination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int vaccinationID;

    @OneToMany
    private List<Patient> patientsGiven;

    @Column(name = "Vaccination_Name")
    private String vaccinationName;

    @Column(name = "No_Of_Doses")
    private Long numberOFDoses;

    @Column(name = "Vaccination_Date")
    private LocalDate vaccinationDate;

    @ManyToOne
    private Staff administeredBy;
}
