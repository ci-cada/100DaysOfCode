#include "main.h"

struct node *add(struct node *head, int data){
    struct node *tmp = malloc(sizeof(struct node));
    temp->prev = NULL;
    temp->data = data;
    temp->next = NULL;
    head = temp;
    return head;
}