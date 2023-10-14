#include <stdio.h>

// Function to check if a number is prime using recursion
int isPrime(int num, int divisor) {
    // Base cases
    if (num <= 1) {
        return 0;  // Not prime
    }
    if (divisor == 1) {
        return 1;  // Prime
    }
    
    // Recursive case
    if (num % divisor == 0) {
        return 0;  // Not prime
    } else {
        return isPrime(num, divisor - 1);
    }
}

// Wrapper function to call isPrime with a single argument
int checkPrime(int num) {
    return isPrime(num, num / 2);
}

int main() {
    int num;

    printf("Enter a positive integer: ");
    scanf("%d", &num);

    if (checkPrime(num)) {
        printf("%d is a prime number.\n", num);
    } else {
        printf("%d is not a prime number.\n", num);
    }

    return 0;
}

