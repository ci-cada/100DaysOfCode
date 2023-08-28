#include "main.h"

struct node *addmid(struct node *head, int data, int pos){
    struct node *new,*temp, *temp2;

    new = add(new, data);

    while(pos != 1){
        temp = temp->next
        pos++;
    }
    if (temp->next == NULL)
        temp->next = new;
        new->prev = temp;
        
    else{
        temp2 = temp->next;
        temp->next = new;
        temp2->prev = new;
        new->next = temp2;
        new->prev = temp;
    }
    return head;
}