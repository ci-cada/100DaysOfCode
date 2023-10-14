#include "main.h"

struct node *dellast(struct node *head){
    struct node *temp = head, *temp2;
    
    while(temp->next != NULL){
        temp = temp->next;
    }
    temp2 = temp->prev;
    temp2->next = NULL;
    free(temp);

    return head;
}