def Prime(n):
    '''The function takes multiple test cases as input, 
    checks if each number is prime, and prints the result for each test case. 
    It uses a basic primality test to determine whether a number is prime or not. 
    Keep in mind that this method is efficient for smaller numbers, 
    but for significantly large numbers, more sophisticated prime-checking algorithms may be required.'''
    if n == 1:
        return f"Not prime"
    for i in range(2, int(n**0.5) + 1):
        '''The function starts a loop that iterates from i=2 up to the square root of n (inclusive). 
        It's an optimization to check only up to the square root of n because any factor larger than the square root, 
        would have a corresponding factor smaller than the square root.'''
        if n % i == 0:
            return f"Not prime"
    return f"Prime"
for _ in range(int(input())):
    n = int(input())
    print(Prime(n))