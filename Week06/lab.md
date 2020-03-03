## Week 6 Lab - Due Monday 03/03/20 at 10AM
Complete all the problems below. 100 Points total. Please submit homework to CSNS.

- For FULL credit use proper ES6 syntax including using let/const properly.
- For FULL credit upload only a single javascript file and output all answers to the console.

---

#### 1. Update the wordCount() function from the file-read.js example.  (15pts)

Requirements:

- Update the **wordCount(files, callback)**
- The updated function should function read from files inside the lab folder.
- The updated function accepts an additional argument - a callback function
- It will callback after reading the file (you can callback with whatever data you need)

- Write a new function called **countKeywords(files, keywords)**
- It accepts the files array and the keywords array as arguments and calls the wordCount() method.
- It counts the number of times the keywords appear inside the all the files.
- It creates an object where the key is the keyword and the values it the count.
- It prints the object with the final keyword count across all files. DO **NOT** use a setTimeout().

```
    const files = ['small.txt', 'medium.txt', 'large.txt'];
    const keywords = ['javascript', 'node', 'programming', 'language'];
    countKeywords(files, keywords);

    EXAMPLE OUTPUT:
    {
        javascript: 25,
        language: 16,
        node: 11,
        programming: 12
    }

```


#### 2. Update the getTimes() function from the http-request.js (15 pts)
Requirements:

- Update the **getTimes(urls, callback)**
- The updated function accepts an additional argument - a callback function
- It will callback after reading the file (you can callback with whatever data you need)

- Write a new function called **bucketStatus(urls)**
- It accepts the urls array as an argument and calls the getTimes() method.
- It creates an object where the key is the statusCode and the value is an array of sites matching that status code.
- It prints the object ONLY when the entire websites array has been ordered by status. **DO NOT** use setTimeout()

```
    const websites = [
        'http://www.google.com/',
        'http://www.spotify.com/us/',
        'http://twitter.com/',
        'http://google.com/error',
        'http://reddit.com/',
        'http://google.com/error_again',
        'http://www.bing.com/'
    ];

    bucketStatus(websites);

    // Example Printout
    {
        '200': [
          { url: 'http://www.bing.com/', time: 142, status: 200 },
          { url: 'http://www.google.com/', time: 145, status: 200 }
        ],
        '301': [
          { url: 'http://reddit.com/', time: 98, status: 301 },
          { url: 'http://twitter.com/', time: 101, status: 301 },
          { url: 'http://www.spotify.com/us/', time: 116, status: 301 }
        ],
        '404': [
          { url: 'http://google.com/error', time: 82, status: 404 },
          { url: 'http://google.com/error_again', time: 91, status: 404 }
        ]
    }
```