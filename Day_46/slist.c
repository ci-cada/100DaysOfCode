#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *next;
};

void add(struct node *head, int data);

int main(){
    struct node *head = NULL;
    head = malloc(sizeof(link));

    head->next = NULL;
    head->data = 10;

    struct node *ptr = head;
    add(ptr, 30);
    add(ptr, 40);
}

void add(struct node *head, int data)
{
    struct node *temp = NULL;
    temp = malloc(sizeof(struct node))
    temp->data = data;
    temp->link = NULL;

    if(head->link != NULL){
        head = head->link 
    }
    head -> link = temp;
}