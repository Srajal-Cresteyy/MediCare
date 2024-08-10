package com.medicare.medicare.model.reportentities;

import com.medicare.medicare.model.staffentities.Staff;
import jakarta.persistence.*;

import java.time.LocalDate;

public class Reports {
    @Id
    @Column(name = "Report_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reportID;

    @Column(name = "Report_Type")
    private String reportType;

    @ManyToOne
    private Staff generatedByStaff;

    @Column(name = "Date_of_Report_Generation")
    private LocalDate generationDate;

    @Column(name = "Report_Link")
    private String reportLink;

}
