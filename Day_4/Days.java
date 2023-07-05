import java.util.*;
public class Days{
    public static void main(String []args){
        Scanner input = new Scanner(System.in);
        int []year;
        int leap[] = {0,31,29,31,30,31,30,31,31,30,31,30,31};
        int normal[] = {0,31,28,31,30,31,30,31,31,30,31,30,31};
        System.out.print("Enter the  year: ");
        int selection = input.nextInt();
        if(selection % 4 == 0){
            year = leap;
        }else{
            year = normal;
        }
        Sytem.out.print("Enter the month number: ");
        int number = input.nextInt();
        for(int i = 1 ; i < year.length; i++){
            if(i == number){
                System.out.print("Number of days = " + year[i]);
            }
        }
    }

}