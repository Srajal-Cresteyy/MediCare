package com.medicare.medicare.model.staffentities;

import com.medicare.medicare.utility.enums.Present;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "Hospital_Staff_Schedule_HMS")
public class StaffSchedule {
    @Id
    @Column(name = "Staff_Schedule_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int scheduleID;

    @ManyToOne
    private Staff staff;

    @Column(name = "Work_Date")
    private LocalDate workDate;

    @Column(name = "Presence")
    private Present present;
}