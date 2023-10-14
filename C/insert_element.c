#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *link;
};
void print_list(struct node *head);
void add_end(struct node *head, int data);
int main(){
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

    add_end(head, 76);
    print_list(head);
}

void add_end (struct node *head, int data){
    struct node *ptr, *temp;
    ptr = head;
    temp = malloc(sizeof(struct node));

    temp -> data = data;
    temp -> link = NULL;
    
    while  (ptr -> link != NULL){// this is like this instead of the ptr since, 
    //we do not want to change the last address of the code.
        ptr = ptr -> link;
    }
    ptr -> link = temp;

}

void print_list(struct node *head){
    if (head == NULL){
        printf("The list is empty 🤒");
    }
    struct node *ptr = NULL;
    ptr = head;
    while (ptr != NULL){

        printf("%d, ", ptr -> data);//prints the data contained in the address of the ptr
        ptr = ptr -> link;// this moves to the next address after the one currently
    }
}