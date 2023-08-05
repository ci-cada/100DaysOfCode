# Day 21 of 100 Days of Code 

## Mongo DB

### Mongo DB

MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document.

### Database

Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

### Collection

Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose.

### Document

A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.

The following is a sample document of a blog site 

```Shell
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by: 'Jusssie',
   url: 'http://www.cicada.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100, 
   comments: [	
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0 
      },
      {
         user:'user2',
         message: 'My second comments',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}
```

### Data model 

It has two types of data model 
- Embeded Data Model
- Normalized Data Model 

These are used based on ones requirement

#### Embedded Data Model 

In this model the data is embeded in a single document and is also known as de-normalized data model 

Provided we have student details in seperate documents you can have them all in one as follows 

```Shell
{
_id:,
stu_id: "100200"
Student_Personal_info:{
    First_name: "Juma",
    Second_name: "Khalima",
    Date_of_Birth: "12-12-1999"
},
Contact:{
    e-mail: "juma.234@gmail.com",
    phone: "0744555898"
},
Adreess:{
    city: "Nairobi",
    area: "Utalii"
}

}
```

#### Normalized Data Model 
In this model the sub documents in the document abov ecan be written differently in a normalized mode.

**Student**
```Shell
{
_id: <ObjectId101>,
stu_id: "100200"
}
```
**Personal Info**
```Shell
{
    First_name: "Juma",
    Second_name: "Khalima",
    Date_of_Birth: "12-12-1999"
}
```
**Contact Info**
```Shell
{
    e-mail: "juma.234@gmail.com",
    phone: "0744555898"
}
```
**Adress**
```Shell
{
    city: "Nairobi",
    area: "Utalii"
}
```

### Considerations while designing Schema in MongoDB

- Design your schema according to user requirements.

- Combine objects into one document if you will use them together. Otherwise separate them (but make sure there should not be need of joins).

- Duplicate the data (but limited) because disk space is cheap as compare to compute time.

- Do joins while write, not on read.

- Optimize your schema for most frequent use cases.

- Do complex aggregation in the schema.