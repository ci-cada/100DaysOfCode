#include "main.h"

struct node *delFirst(struct node *head){
    struct node *tmp = head;
    head = head->next;
    free(tmp);
    head->prev = NULL;

    return head;
}