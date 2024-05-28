import java.util.ArrayList;
import java.util.List;

class Country {
    String name;
    String continent;
    int population;

    public Country(String name, String continent, int population) {
        this.name = name;
        this.continent = continent;
        this.population = population;
    }
}

public class PopulationFilterExample {
    public static void main(String[] args) {
       
        List<Country> countries = new ArrayList<>();
        countries.add(new Country("India", "Asia", 240123));
        countries.add(new Country("China", "Asia", 270123));
        countries.add(new Country("Nepal", "Asia", 100123));
        

     
        List<Country> smallPopulationCountries = new ArrayList<>();
        for (Country country : countries) {
            if (country.population < 200000) {
                smallPopulationCountries.add(country);
            }
        }

 
        for (Country country : smallPopulationCountries) {
            System.out.println("Name: " + country.name);
        
        }
    }
}
