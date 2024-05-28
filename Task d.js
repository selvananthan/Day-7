import java.util.ArrayList;
import java.util.List;

class Country {
    String name;
    long population;

    public Country(String name, long population) {
        this.name = name;
        this.population = population;
    }
}

public class TotalPopulationUsingLocalData {
    public static void main(String[] args) {
        List<Country> countries = new ArrayList<>();
        countries.add(new Country("India", 1380004385));
        countries.add(new Country("China", 1439323776));
        countries.add(new Country("USA", 331002651));
      

        long totalPopulation = countries.stream()
                .mapToLong(Country::getPopulation)
                .reduce(0, Long::sum);

        System.out.println("Total population: " + totalPopulation);
    }
}
