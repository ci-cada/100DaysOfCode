# Day 22 of 100 Days of Programming 

## MongoDB Operations 

In Mongo db unlike in SQl where we use _create_ to create a new database in MongoDb we use the keyword _use_ this creates a new database if one doesn't exist and if one does then it returns the existing database.

**The syntax is as follows for performing various actions**
- To use or create a new database

```Shell
>use ITStudents
switched to db ITStudents
```
- To confirm the current working database use

```Shell
>db 
ItStudents
```
- Checking the databse list one uses the command show dbs
```Shell 
>show dbs
local     0.78125GB
test      0.23012GB
```

The database you have created will not be available unless it contains some data in it

- To drop a database 

```Shell
db.dropDatabase()

```
*example*
If one has teh following databases in the system
```Shell 
>show dbs
local      0.78125GB
ITStudents 0.23012GB
test       0.23012GB
```
if one wants to drop the database _ITStudents_, then the syntax will be as follows

```Shell
>use ITStudents
switched to db ITStudents
>db.dropDatabase()
>{ "dropped" : "ITStudents", "ok" : 1 }

```

To confirm use the syntax to view all the databases 
```Shell 
>show dbs
local      0.78125GB
test       0.23012GB
```

- To create a collection 
```Shell
db.createCollection(name, options)
```
In the command above the _name_ is the name of the collection and the _OPtions_ is the document and is used to specify configuration of collection.

Options param is optional hence only the name of the collection is needed.
The following are the list of options applicable;-

- capped of type Boolean: (Optional) If true, enables a capped collection. Capped collection is a fixed size collection that automatically overwrites its oldest entries when it reaches its maximum size. If you specify true, you need to specify size parameter also.
- AutoIndexId of type Boolean: (Optional) If true, automatically create index on _id field.s Default value is false.
- Size	of type number: (Optional) Specifies a maximum size in bytes for a capped collection. If capped is true, then you need to specify this field also.
- Max similar type to that of Size: (Optional) Specifies the maximum number of documents allowed in the capped collection.

**Example**

Creating a collection 
```Shell
>use test
switched to db test
>db.createCollection("mycollection")
{ "ok" : 1 }
```
confirming the created collection using the _show collections_

```Shell
>show collections
mycollection
system.indexes
```
An example with few important options

```Sh> db.createCollection("mycol", { capped : true, autoIndexID : true, size : 6142800, max : 10000 } ){
"ok" : 0,
"errmsg" : "BSON field 'create.autoIndexID' is an unknown field.",
"code" : 40415,
"codeName" : "Location40415"
}
```

Otherwise, MongoDB creates a collection the moment you insert a document

- To drop a colection 
```Shell
db.Coll_name.drop()
```

used as follows 
```Shell
>use test
switched to db test
>show collections
mycol
mycollection
system.indexes
```
Now to drop it 
```Shell
>db.mycollection.drop()
true
```
To confirm the deletion 
```Shell
>show collections
mycol
system.indexes
```