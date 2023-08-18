#include<stdio.h>
#include<stdlib.h>
//creating a self referencial structure
struct node{
    int cont;
    struct node *link;// the pointer to the address of another node
};
//in single linked lists only one of the pointer is allowed

int main(void){
    struct node *first = NULL;//pointer to struct node
    // Allocate the memory of the node structure, creates a node
    first = (struct node *)malloc(sizeof(struct node));
    
    first->cont = 67;
    first->link = NULL;
    printf("%d", first->cont);
}