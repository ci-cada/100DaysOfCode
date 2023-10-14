#include <stdio.h>

int main (void){
    int store, a, b;

    int arr[10];

    for (int i = 0; i < 10 ; i++){
        printf("Enter the value of element %d: ", i);
        scanf("%d", &arr[i]);
    }
    for (a = 0; a < 10 ; a++){

        for (b = a + 1; b < 10; b++){

            if (arr[a] < arr[b]){
                store = arr[b];
                arr[a] = arr[b];
                arr[b] = store;
            }
        }
    }
    for (int k = 0; k < 10 ; k++){
        print("%d ", arr[k]);
    }
}