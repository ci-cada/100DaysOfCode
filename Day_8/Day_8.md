# Day 8 of 100 Days of Code

## Zero day Coding 

Been updating the README's of this challenge since I have not been posting any code on my profile

Took a test on C, To see if I remember anything in C following me recent Deferment in ALX softaware engineering program. 


Looking forward to the next day of Code.

```c 
#include <stdio.h>
int main(void)
{
    int a, b;
    char op;

    printf("Enter the first number: ");
    scanf("%d", &a);
    printf("Enter the Second number: ");
    scanf("%d", &b);

    printf("Choose operation: ");
    scanf("%s", op);

    switch(op){
        case 'add':
        printf("The sum of %d and %d  is %d: ", a,b, a+b);
        break;
        case 'div':
        printf("The divison of %d and %d  is %d: ",a,b, a/b);
        break;
        case 'mul':
        printf("The multiplication of %d and %d   is %d: ",a,b, a*b);
        break;
        case 'mod':
        printf("The reminder of %d and %d  is %d: ",a,b, a%b);
        break;

    }
}
```