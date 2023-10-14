#include "main.h"

struct node *reverse(struct node* head){
    struct node *p1, *p2;
    p1 = head;
    p2 = p1->next;

    p1 -> next = NULL;
    p1 ->prev = p2;

    while (p2 != NULL){
        p1 -> prev = p2 -> next;
        p2 -> next = p1;
        p1 = p2;
        p2 = p2->prev;
    }
    head = p1;
    return head;
}