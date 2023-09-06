# Day 55 of 100 Days of Code 😱

# HASH TABLES C 
Following the upcoming project on Hassh Tables I decided to do a little bit of research on C Hash Tables.


## Overview
HashTable is a datastructure in which insertion and search operations are very fast irrespective of size of the hashtable. It is nearly a constant or O(1). Hash Table uses array as a storage medium and uses hash technique to generate index where an element is to be inserted or to be located from.

## Hashing
Hashing is a technique to convert a range of key values into a range of indexes of an array. We're going to use modulo operator to get a range of key values. Consider an example of hashtable of size 20, and following items are to be stored. Item are in (key,value) format.
```
(1,20)

(2,70)

(42,80)

(4,25)

(12,44)

(14,32)

(17,11)

(13,78)

(37,98)
```
```
Sr.No.	Key	Hash	        Array Index
1	       1	    1 % 20 = 1	    1
2	       2	    2 % 20 = 2	    2
3	       42	42 % 20 = 2	    2
4	       4	    4 % 20 = 4	    4
5	       12	12 % 20 = 12	12
6	       14	14 % 20 = 14	14
7	       17	17 % 20 = 17	17
8	       13	13 % 20 = 13	13
9	       37	37 % 20 = 17	17
```
## Linear Probing
As we can see, it may happen that the hashing technique used create already used index of the array. In such case, we can search the next empty location in the array by looking into the next cell until we found an empty cell. This technique is called linear probing.
```
Sr.No.	Key	    Hash	       Array Index	After Linear Probing, Array Index
1	       1	    1 % 20 = 1	      1	              1
2	       2	    2 % 20 = 2	      2	              2
3	       42	42 % 20 = 2	      2	              3
4	       4	    4 % 20 = 4	      4	              4
5	       12	12 % 20 = 12	  12	              12
6	       14	14 % 20 = 14	  14	              14
7	       17	17 % 20 = 17	  17	              17
8	       13	13 % 20 = 13	  13	              13
9	       37	37 % 20 = 17	  17	              18
```
## Basic Operations
Following are basic primary operations of a hashtable which are following.

- Search − search an element in a hashtable.

- Insert − insert an element in a hashtable.

- delete − delete an element from a hashtable.

## DataItem
Define a data item having some data, and key based on which search is to be conducted in hashtable.
```c
struct DataItem {
   int data;   
   int key;
};
```
## Hash Method
Define a hashing method to compute the hash code of the key of the data item.
```c
int hashCode(int key){
   return key % SIZE;
}
```
Search Operation
Whenever an element is to be searched. Compute the hash code of the key passed and locate the element using that hashcode as index in the array. Use linear probing to get element ahead if element not found at computed hash code.
```c
struct DataItem *search(int key){               
   //get the hash 
   int hashIndex = hashCode(key);        
   
   //move in array until an empty 
   while(hashArray[hashIndex] !=NULL){
      if(hashArray[hashIndex]->key == key)
         return hashArray[hashIndex]; 
      //go to next cell
      ++hashIndex;
      //wrap around the table
      hashIndex %= SIZE;
   }
   return NULL;        
}
```
## Insert Operation
Whenever an element is to be inserted. Compute the hash code of the key passed and locate the index using that hashcode as index in the array. Use linear probing for empty location if an element is found at computed hash code.
```c
void insert(int key,int data){
   struct DataItem *item = (struct DataItem*) malloc(sizeof(struct DataItem));
   item->data = data;  
   item->key = key;     

   //get the hash 
   int hashIndex = hashCode(key);

   //move in array until an empty or deleted cell
   while(hashArray[hashIndex] !=NULL &&
      hashArray[hashIndex]->key != -1){
      //go to next cell
      ++hashIndex;
      //wrap around the table
      hashIndex %= SIZE;
   }
   hashArray[hashIndex] = item;        
}
```
## Delete Operation
Whenever an element is to be deleted. Compute the hash code of the key passed and locate the index using that hashcode as index in the array. Use linear probing to get element ahead if an element is not found at computed hash code. When found, store a dummy item there to keep performance of hashtable intact.
```c
struct DataItem* delete(struct DataItem* item){
   int key = item->key;

   //get the hash 
   int hashIndex = hashCode(key);

   //move in array until an empty 
   while(hashArray[hashIndex] !=NULL){
      if(hashArray[hashIndex]->key == key){
         struct DataItem* temp = hashArray[hashIndex]; 
         
         //assign a dummy item at deleted position
         hashArray[hashIndex] = dummyItem; 
         return temp;
      }               
      //go to next cell
      ++hashIndex;
      //wrap around the table
      hashIndex %= SIZE;
   }
   return NULL;        
}
```
### Example
```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

#define SIZE 20

struct DataItem {
   int data;   
   int key;
};

struct DataItem* hashArray[SIZE]; 
struct DataItem* dummyItem;
struct DataItem* item;

int hashCode(int key){
   return key % SIZE;
}

struct DataItem *search(int key){               
   //get the hash
   int hashIndex = hashCode(key);        
   
   //move in array until an empty 
   while(hashArray[hashIndex] !=NULL){
      if(hashArray[hashIndex]->key == key)
         return hashArray[hashIndex]; 
      //go to next cell
      ++hashIndex;
      //wrap around the table
      hashIndex %= SIZE;
   }        
   return NULL;        
}

void insert(int key,int data){
   struct DataItem *item = (struct DataItem*) malloc(sizeof(struct DataItem));
   item->data = data;  
   item->key = key;     

   //get the hash 
   int hashIndex = hashCode(key);

   //move in array until an empty or deleted cell
   while(hashArray[hashIndex] !=NULL &&
      hashArray[hashIndex]->key != -1){
      //go to next cell
      ++hashIndex;
      //wrap around the table
      hashIndex %= SIZE;
   }
   hashArray[hashIndex] = item;        
}
struct DataItem* delete(struct DataItem* item){
   int key = item->key;

   //get the hash 
   int hashIndex = hashCode(key);

   //move in array until an empty 
   while(hashArray[hashIndex] !=NULL){
      if(hashArray[hashIndex]->key == key){
         struct DataItem* temp = hashArray[hashIndex]; 
         //assign a dummy item at deleted position
         hashArray[hashIndex] = dummyItem; 
         return temp;
      }
      //go to next cell
      ++hashIndex;
      //wrap around the table
      hashIndex %= SIZE;
   }
   return NULL;        
}
void display(){
   int i=0;
   for(i=0; i<SIZE; i++) {
      if(hashArray[i] != NULL)
         printf(" (%d,%d)",hashArray[i]->key,hashArray[i]->data);
      else
         printf(" ~~ ");
   }
   printf("\n");
}
int main(){
   dummyItem = (struct DataItem*) malloc(sizeof(struct DataItem));
   dummyItem->data = -1;  
   dummyItem->key = -1; 

   insert(1, 20);
   insert(2, 70);
   insert(42, 80);
   insert(4, 25);
   insert(12, 44);
   insert(14, 32);
   insert(17, 11);
   insert(13, 78);
   insert(37, 97);

   display();
   item = search(37);

   if(item != NULL){
      printf("Element found: %d\n", item->data);
   } else {
      printf("Element not found\n");
   }

   delete(item);
   item = search(37);

   if(item != NULL){
      printf("Element found: %d\n", item->data);
   } else {
      printf("Element not found\n");
   }
}
```
