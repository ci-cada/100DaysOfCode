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