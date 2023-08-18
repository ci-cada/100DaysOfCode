#include <stdio.h>
#include <stdlib.h>

struct node{
    int data;
    struct node *link;
};

void print_list(struct node *head);
int main (){
    struct node *head = malloc(sizeof(struct node));
    head -> data = 10;
    head -> link = NULL;

    struct node *current = malloc(sizeof(struct node));
    current -> data = 89;
    current -> link = NULL;
    head -> link = current;

    current = malloc(sizeof(struct node));
    current -> data = 90;
    current -> link = NULL;
    head -> link -> link = current;

    print_list(head);
}
void print_list(struct node *head){
    if (head == NULL){
        printf("The list is empty 🤒");
    }
    struct node *ptr = NULL;
    ptr = head;
    while (ptr != NULL){

        printf("%d", ptr -> data);//prints the data contained in the address of the ptr
        ptr = ptr -> link // this moves to the next address after the one currently
    }
}