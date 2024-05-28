import java.util.ArrayList;
import java.util.List;

class Country {
    String name;
    String capital;
    String flag;

    public Country(String name, String capital, String flag) {
        this.name = name;
        this.capital = capital;
        this.flag = flag;
    }
}

public class CountryDetailsPrinter {
    public static void main(String[] args) {
     
        List<Country> countries = new ArrayList<>();
        countries.add(new Country("India", "New Delhi", "🇮🇳"));
        countries.add(new Country("China", "Beijing", "🇨🇳"));
        countries.add(new Country("Japan", "Tokyo", "🇯🇵"));
     

 
        countries.forEach(country -> {
            System.out.println("Name: " + country.name);
            System.out.println("Capital: " + country.capital);
            System.out.println("Flag: " + country.flag);
            System.out.println();
        });
    }
}
