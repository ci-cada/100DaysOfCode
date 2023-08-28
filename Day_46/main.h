#ifdef _MAIN_H_
#define _MAIN_H_
#include <stdio.h>
#include <stdlib.h>

struct node{
    struct node *prev;
    int data;
    struct node *next;
};

struct node *reverse(struct node* head)
struct node *dellast(struct node *head);
struct node *delFirst(struct node *head);
void print (struct node* head);
struct node *add(struct node *head, int data);
struct node *addTop(struct node *head, int data);
struct node *addlast(struct node *head, int data);
struct node *delTop(struct node *head, int data);
struct node *delLast(struct node *head, int data);
struct node *addmid(struct node *head, int data, int pos);

#endif