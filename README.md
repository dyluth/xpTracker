# xpTracker

# what i did:
followed part 1 & 2 of: https://www.ibm.com/developerworks/library/wa-get-started-with-loopback-neward-1/index.html

## create the model
used `lb` to create the player, character, score, and event objects
also created the relationship between them:
character belongs to a player
score belongs to a character and an event

note: there is no key validation with the relationships that the thing you are pointing to is an actual object.
we will have to do that ourselves in our own code.

## configured a datasource
(if you select the right things in the lb interface this will be done for you)
configured it to use memory database and to persist to a file - had to change the files manually:
server/datasources.json:
```
{
  "memory-1": {
    "name": "memory-1",
    "localStorage": "",
    "file": "/Users/cam/roc_code/xpTracker/persist",
    "connector": "memory"
  }
}
```

and server/model-config.json - to tell each model where it is stored (in this case, my memory store)
```
"player": {
  "dataSource": "memory-1",
  "public": true
},
```
this is quite good as we could store different things in different memory stores, and in theory just run the queries that we need and loopback should manage the datasources for us without us needing to worry about where the data actually is, or in which type of repository (memory, db, object store etc)

tested the model with `node .` and created & deleted the objects

## created a simple Angilar UI
based on:
* https://www.codetutorial.io/loopback-and-angularjs-first-tutorial/


following:
* http://loopback.io/doc/en/lb2/AngularJS-JavaScript-SDK.html
