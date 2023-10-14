#include "main.h"

struct node *addlast(struct node *head, int data){
    struct node *temp, *tp;

    temp = malloc(sizeof(struct node));
    temp->prev = NULL;
    temp->data = data;
    temp-next = NULL;

    tp = head;
    while(tp->nex != NULL)
        tp = tp->next;
    tp->next = temp;
    temp->prev = tp;

    return head;
}

