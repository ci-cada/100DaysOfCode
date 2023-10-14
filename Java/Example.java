public class Example{

    public static void main(String []args){
            int intValue = 42;
            double doubleValue = 3.14159;
            String stringValue = "Java";

// Basic usage
            System.out.println(String.format("Integer: %d", intValue)); // Output: "Integer: 42"
            System.out.println(String.format("Double: %.2f", doubleValue)); // Output: "Double: 3.14"
            System.out.println(String.format("String: %s", stringValue)); // Output: "String: Java"

// With flags and width
            System.out.println(String.format("Padded integer: %04d", intValue)); // Output: "Padded integer: 0042"
            System.out.println(String.format("Left-justified: %-10s", stringValue)); // Output: "Left-justified: Java      "

// Combining flags and width
            System.out.println(String.format("Formatted double: %+10.3f", doubleValue)); // Output: "Formatted double:    +3.142"

// Locale-specific grouping separator
            int largeNumber = 1000000;
            System.out.println(String.format("Large number: %,d", largeNumber)); // Output: "Large number: 1,000,000"
    }
}