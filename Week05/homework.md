## Week 5 Homework - Due 03/05/20 at 11:59pm on CSNS
Complete all the problems below. 50 Points total. Please submit homework to CSNS.

- For FULL credit use proper ES6 syntax including using let/const properly.
- For FULL credit upload only a single javascript file and output all answers to the console.

---

#### 1. Using callbacks syntax write a set of functions that checks and makes a list of websites running. (20)
Requirements:

**checkResponseTime(website, callaback)** <br/>
This function accepts a website object. 
- It uses a setTimeout() to mock checking a website's responseTime associated to it.
- If it does have a responseTime then it callsback after the responseTime for each website object.
- If it does not have a responseTime then it callsbacks immediately (0ms) with an error.

**websiteResponseTimes(websites)** <br/>
This function accepts an array of objects.  
- It prints the results **ONLY** when the entire websites array has been iterated. 
- It should print each the working array and the error array separately.
- Do NOT use setTimeout() for printing.

```
    const websites = [
        {
            site: 'yahoo.com',
            responseTime: 50,
            unit: 'ms'
        },
        {
            site: 'google.com',
            responseTime: 10,
            unit: 'ms'
        },
        {
            site: 'reddit.com',
            responseTime: null,
            unit: 'ms'
        },
        {
            site: 'slack.com',
            responseTime: 80,
            unit: 'ms'
        },
        {
            site: 'github.com',
            responseTime: 30,
            unit: 'ms'
        }
    ];
    websiteResponseTimes(websites);

    // Expected Output:
    Responses:  [
        { site: 'google.com', responseTime: 10 },
        { site: 'github.com', responseTime: 30 },
        { site: 'yahoo.com', responseTime: 50 },
        { site: 'slack.com', responseTime: 80 }
    ]
    No Response: [ 'reddit.com' ]
```


#### 2. Using Promises syntax write a set of functions that performs operations the given db. (20)
Requirements:
- Use Promises syntax with .then() and .catch() syntax
- Create a Promise with setTimeout() of 10ms in bucketTwitters() function.

**bucketTwitters(account)** <br/>
This function accepts an account object.
- If the account has a twitter handle then it is considered found
- If the account does not have twitter handle it is considered missing
- Use resolve/reject to handle the cases listed above

**loopAccountsPromises(database)** <br/>
This function accepts an array of objects to be evaluated.
- It prints an object with the keys 'found' and 'missing' which contain the array of found and missing twitter accounts.
- It **ONLY** console.logs when **all** accounts been processed.
- Do NOT use setTimeout() for console.log.

```
    const database = [
        {
            id: 1,
            entry: 'Space X',
            twitter: '@spacex'
        },
        {
            id: 2,
            entry: 'NASA',
            twitter: null
        },
        {
            id: 3,
            entry: 'Apple',
            twitter: '@apple'
        },
        {
            id: 4,
            entry: 'Microsoft',
            twitter: '@microsoft'
        },
        {
            id: 5,
            entry: 'Reddit',
            twitter: null
        }
    ];
    loopAccountsPromises(database);

    // Expected Output:
    {
        found: [
            { id: 1, entry: 'Space X', twitter: '@spacex' },
            { id: 3, entry: 'Apple', twitter: '@apple' },
            { id: 4, entry: 'Microsoft', twitter: '@microsoft' }
        ],
        missing: [
            { id: 2, entry: 'NASA', twitter: null },
            { id: 5, entry: 'Reddit', twitter: null }
        ]
    }
```


#### 3. Using async/await syntax and bucketTwitters() function from Problem #2 that performs operations the given db. (10)
Requirements:
- Use async/await syntax with try/catch
- Use the same database provides from Problem #2
- Use the **same** Promise function (bucketTwitters()) created from Problem #2.

- bucketTwitters(account) - Use the Same Function Created for Problem #2

- loopAccountsAsync(database)
This function accepts an array of objects to be evaluated.
- It prints an object with the keys 'found' and 'missing' which contain the array of found and missing twitter accounts.
- It **ONLY** console.logs when **all** accounts been processed.
- Do NOT use setTimeout() for console.log.

```
    loopAccountsAsync(database);
    // Expected Output:
    {
        found: [
            { id: 1, entry: 'Space X', twitter: '@spacex' },
            { id: 3, entry: 'Apple', twitter: '@apple' },
            { id: 4, entry: 'Microsoft', twitter: '@microsoft' }
        ],
        missing: [
            { id: 2, entry: 'NASA', twitter: null },
            { id: 5, entry: 'Reddit', twitter: null }
        ]
    }
```

