import java.io.*;
public class findSum{
public static void main(String args[]){
int sum=0;
int x,c=1;
while (c<=5){
try{
BufferedReader s =new BufferedReader(new InputStreamReader(System.in));
System.out.println("enter the x value");
x=Integer.parseInt(s.readLine());
sum=sum+x;
c++;
}
catch(IOException e){ }
}
System.out.println("The sum is"+sum);
}
}