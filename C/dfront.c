#include <stdio.h>
#include <stdlib.h>
#include "main.h"

struct node *addTop(struct node *head, int data){
    struct node *temp = NULL;
    temp = malloc(sizeof(struct node));

    temp->prev = NULL; //sets the previous link to null as the first node of a d list
    temp->data = data;//give the data
    temp->next = NULL;//set the next to null
    temp->next = head;// asssigns the address of the first node to the address of next node
    head->prev = temp;//sets the address of the previous link of the first node to the new one
    head = temp;// assigns the head val the temp, new element
    return head;
}