package com.example.demo.employee;

public class EmployeeProfile {

    String dob;
    String department;
    String role;
    String address;
    int zipCode;
    String empId;

    public EmployeeProfile(String dob, String department, String role, String address, int zipCode) {
        this.dob = dob;
        this.department = department;
        this.role = role;
        this.address = address;
        this.zipCode = zipCode;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }
}
