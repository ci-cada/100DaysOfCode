#include <iostream>

int main(){
    
    int i;
    std::cout << "Enter the marks: ";
    std::cin >> i;

    if (i >= 0 && i <= 39){
        std::cout << "For Marks" << i << "is" << "Super Fail\n";
    }
    else if ( i >= 40 && i <= 49){
        std::cout << "For Marks" << i << "is" << "Tried\n";
    }
    else if ( i >= 50 && i <= 59){
        std::cout << "For Marks" << i << "is" << "D\n";
    }
    else if ( i >= 60 && i <= 69){
        std::cout << "For Marks" << i << "is" << "C\n";
    }
    else if ( i >= 70 && i <= 79){
        std::cout << "For Marks" << i << "is" << "B\n";
    }
    else if ( i >= 80 && i <= 100){
        std::cout << "For Marks" << i << "is" << "A\n";
    }
    else{
        std::cout << "Mark's invalid";
    }
}
