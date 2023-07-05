import java.io.*;
public class DoWhile{
public static void main(String args[]){
int sum=0;
int x,c=1;
do {
try{
BufferedReader s =new BufferedReader(new InputStreamReader(System.in));
System.out.println("enter the x value");
x=Integer.parseInt(s.readLine());
sum=sum+x;
c++;
}
catch(IOException e){}
} while(c<=5); System.out.println("The
sum is"+sum);
}