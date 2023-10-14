public class SortMe{
    public static void main(String[] args){

        int []items = {10,9,2,7,4,1,8,1,3};
        int c;
        int []sort = items;
        for(int i = 0; i < items.length; i++){
            for(int j = i + 1; j < items.length; j++){
                if(items[i] < items[j]){
                    c = items[j];
                    items[j] = items[i];
                    items[i] = c;

                }
            }
        }
        for(int k = 0; k < sort.length; k++){
         System.out.printf("%d ", items[k]); 
        }
        
    }
}
