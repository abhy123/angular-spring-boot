package com.example.demo.search;

import com.example.demo.employee.Employee;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({ "/providers" })
public class ProviderController {
    List<Provider> providers = getProviderList();

    private List<Provider> getProviderList() {
        List<Provider> prov = new ArrayList<>();
        Provider p1 = new Provider(1, "Allan", "Smith", "MD", "Gregory");
        Provider p2 = new Provider(2, "Akey", "Donald", "PA", "Gloom");
        Provider p3 = new Provider(3, "Nick", "Jon", "MD", "Bloom");
        Provider p4 = new Provider(4, "Rick", "Kin", "MD", "Hash");
        Provider p5 = new Provider(5, "Asmit", "Ram", "MD", "Ping");
        Provider p6 = new Provider(6, "Allingto", "Donigo", "MD", "Quit");
        Provider p7 = new Provider(7, "Allamtin", "Rock", "MD", "Ron");
        prov.add(p1);
        prov.add(p2);
        prov.add(p3);
        prov.add(p4);
        prov.add(p5);
        prov.add(p6);
        prov.add(p7);
        return prov;
    }

    @GetMapping(path = { "/{q}" })
    public List<Provider> delete(@PathVariable("q") String q) {
        return providers.stream()
                .filter(p -> p.getFirstName().toUpperCase().startsWith(q.toUpperCase()))
                .collect(Collectors.toList());
    }
}
