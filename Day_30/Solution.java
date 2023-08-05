import java.util.*;
import java.io.*;
import java.math.*;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
        int curr = a;
        for (int j = 0; j <= n - 1; j++){
            curr += (int)Math.pow(2, j) * b;
            System.out.print(curr + " ");
            }
            System.out.println();
        }      
        in.close();
    }

}