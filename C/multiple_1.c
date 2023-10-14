#include<stdio.h>
#include<stdlib.h>
//creating a self referencial structure
struct node {
    int data;
    struct node *link;
    
};
int main(){
    struct node *head = malloc(sizeof(struct node));
    head->data = 45;
    head->link = NULL
    
    struct node *current = malloc(sizeof(struct node));
    current->data = 78;
    current->link = NULL;
    head->link = current;//point to the address of the first node
    
    struct node *current2 = malloc(sizeof(struct node));
    current2->data = 99;
    current2->link = NULL;
    current->link = current2;//point to address of the second node
    
    return 0;
}