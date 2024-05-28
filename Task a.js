import java.util.ArrayList;
import java.util.List;

class Country {
    String name;
    String continent;

    public Country(String name, String continent) {
        this.name = name;
        this.continent = continent;
    }
}

public class AsiaCountriesFilter {
    public static void main(String[] args) {
      
        List<Country> countries = new ArrayList<>();
        countries.add(new Country("India", "Asia"));
        countries.add(new Country("China", "Asia"));
        countries.add(new Country("Japan", "Asia"));
       

    
        List<Country> asiaCountries = new ArrayList<>();
        for (Country country : countries) {
            if ("Asia".equals(country.continent)) {
                asiaCountries.add(country);
            }
        }

       
        for (Country country : asiaCountries) {
            System.out.println("Name: " + country.name);
         
        }
    }
}
