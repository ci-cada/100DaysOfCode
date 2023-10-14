#include<stdio.h>
#include<stdlib.h>
//creating a self referencial structure
struct node {
    int data;
    struct node *link;
    
};
void count_of_nodes(struct node *head);
int main(){
    struct node *head = malloc(sizeof(struct node));
    head->data = 45;
    head->link = NULL;
    
    struct node *current = malloc(sizeof(struct node));
    current->data = 78;
    current->link = NULL;
    head->link = current;//point to the address of the first node
    current = malloc(sizeof(struct node));
    current->data = 99;
    current->link = NULL;
    head->link->link = current;
    
    count_of_nodes(head);
}

void count_of_nodes(struct node *head){
    int count = 0;
    if (head == NULL){
        printf("Empty List");
    }
    struct node *ptr = NULL;
    ptr = head;
    while (ptr != NULL){
        ptr = ptr->link;
        count++;
    }
    printf("%d", count);
    
}