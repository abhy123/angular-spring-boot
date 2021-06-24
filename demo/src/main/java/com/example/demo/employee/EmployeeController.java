package com.example.demo.employee;
import java.util.*;
import java.util.stream.Stream;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({ "/employees" })
public class EmployeeController {

    private List<Employee> employees = createList();
    private Map<String, EmployeeProfile> profileMap = createMap();
    private Map<String, Insurance> insuranceMap = createInsuranceMap();



    @GetMapping(produces = "application/json")
    public List<Employee> firstPage() {
        return employees;
    }

    @DeleteMapping(path = { "/{id}" })
    public Employee delete(@PathVariable("id") String id) {
        Employee deletedEmp = null;
        for (Employee emp : employees) {
            if (emp.getEmpId().equals(id)) {
                employees.remove(emp);
                deletedEmp = emp;
                break;
            }
        }
        return deletedEmp;
    }

    @PostMapping
    public Employee create(@RequestBody Employee user) {
        employees.add(user);
        System.out.println(employees);
        return user;
    }

    private Map<String, EmployeeProfile> createMap() {
        Map<String, EmployeeProfile> tempMap = new HashMap<>();
        EmployeeProfile p1 = new EmployeeProfile("01/01/1991", "Dev", "Quality Analyst",
                "Pune Wagholi", 411014);
        p1.setEmpId("1");
        tempMap.put("1", p1);
        return tempMap;
    }

    private Map<String, Insurance> createInsuranceMap() {
        Map<String, Insurance> tempMap = new HashMap<>();
        JsonArray insuranceMap = new JsonArray();
        JsonObject i = new JsonObject();
        i.addProperty("key", "Self");
        i.addProperty("value", true);
        insuranceMap.add(i);
        i = new JsonObject();
        i.addProperty("key", "Spouse");
        i.addProperty("value", true);
        insuranceMap.add(i);
        i = new JsonObject();
        i.addProperty("key", "Child");
        i.addProperty("value", true);
        insuranceMap.add(i);
        i = new JsonObject();
        i.addProperty("key", "Parents");
        i.addProperty("value", false);
        insuranceMap.add(i);

        Insurance ins = new Insurance("bcbs best cover", InsuranceCompany.BCBS.name(),
                InsuranceType.TERTIARY.name(),true
                , insuranceMap, 2, "No previous illnesses", null);
        tempMap.put("1", ins);
        return tempMap;
    }

    private static List<Employee> createList() {
        List<Employee> tempEmployees = new ArrayList<>();
        Employee emp1 = new Employee();
        emp1.setName("emp1");
        emp1.setDesignation("manager");
        emp1.setEmpId("1");
        emp1.setSalary(3000);



        Employee emp2 = new Employee();
        emp2.setName("emp2");
        emp2.setDesignation("developer");
        emp2.setEmpId("2");
        emp2.setSalary(3000);
        tempEmployees.add(emp1);
        tempEmployees.add(emp2);
        return tempEmployees;
    }

    @PostMapping(path = { "profile/{id}" })
    public EmployeeProfile create(@RequestBody EmployeeProfile user,@PathVariable("id") String id) {
        profileMap.put(id, user);
        return user;
    }

    @GetMapping(path = { "profile/{id}" }, produces = "application/json")
    public EmployeeProfile viewProfile(@PathVariable("id") String id) {
        return profileMap.get(id);
    }

    @PutMapping(path = { "profile/{id}" })
    public EmployeeProfile update(@RequestBody EmployeeProfile user,@PathVariable("id") String id) {
        profileMap.put(id, user);
        return user;
    }

    @PostMapping(path = { "insurance/{id}" })
    public Insurance addInsurance(@RequestBody Insurance insurance,
                                        @PathVariable("id") String id) {
        insuranceMap.put(id, insurance);
        return insurance;
    }

    @GetMapping(path = { "insurance/{id}" }, produces = "application/json")
    public Insurance viewInsurance(@PathVariable("id") String id) {
        return insuranceMap.get(id);
    }

    @PutMapping(path = { "insurance/{id}" })
    public Insurance update(@RequestBody Insurance insurance, @PathVariable("id") String id) {
        insuranceMap.put(id, insurance);
        return insurance;
    }

    @GetMapping(path = { "insurance/company/search/{q}" }, produces = "application/json")
    public List<String> insuranceCompanySearch(@PathVariable("q") String q) {
        List<String> list = new ArrayList<>();
        q = q.toUpperCase();
        for (int i = 0; i < InsuranceCompany.values().length; i++) {
            if (InsuranceCompany.values()[i].name().startsWith(q)){
                list.add(InsuranceCompany.values()[i].name());
            }
        }
        return list;
    }

    @GetMapping(path = { "insurance/types" }, produces = "application/json")
    public String[] insuranceTypes() {
        return Stream.of(InsuranceType.values()).map(InsuranceType::name).toArray(String[]::new);
    }
}