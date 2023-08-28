#include <stdio.h>
#include "main.h"

int main(){

    struct node *head = NULL, *ptr;
    head = malloc(sizeof(struct node));

    head->next = NULL;
    head->data = 10;
    head->prev = NULL;

    addTop(head, 30);
    addmid(head,60,3);
    print(head);
}