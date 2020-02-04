## Week 2 Assignment
 Lab Section - Due Monday 02/04/20 at 7:59am <br/>
 Homework Section - Due Monday 02/10/20 at 11:59pm <br/>

Complete the problems below. 100 Points total. Please submit lab to CSNS.

- For FULL credit use proper ES6 syntax including using let/const properly.
- For FULL credit upload only a single javascript file and output all answers to the console.
- For Full credit do not use Regex.

<hr/>

## LAB - Due 2/04 at 7:59am
#### 1.  Write a function called removeLetters. (10 pts)
- The removeLetters function accepts two string arguments.
- The first argument is a phrase and the second is a letter.
- This function removes letter in the phrase and returns a string of the cleaned phrase.

      const phrase = 'helxlo x worxxld';
      const letter = 'x';
      removeLetters(pharse, letter);

      EXPECTED OUTPUT (string):  'hello world'



#### 2.  Write a function called flattenArray. (10 pts)
- The flattenArray function accepts a nested array as an argument.
- This function will turn the nested array of arrays and return the flat array.
- **DO NOT** use the method Array.flat().

      const nested = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];
      flattenArray(nested);

      EXPECTED OUTPUT (array): [1, 2, 3, 4, 5, 6, 7, 8, 9]


#### 3.  Write a function called adjustName. (10 pts)
- The adjustName function accepts an object as an argument.
- This function will remove the key 'name' and add two new keys 'firstName' and 'lastName' and return the object.
- It will set the values of 'firstName' and 'lastName' correctly based on the values in the 'name' array.
- You may assume that the first item in the 'name' array is the first name and that the last item is the last name.
- Consider some people have multiple middle names so the last item in the array **MUST** be accessed dynamically.
- **NO** For..In iteration is needed.  Please do not use.


      const dc = {
          name: ['Bruce', 'Wayne'],
          hero: 'Batman'
      };
      const marvel = {
          name: ['Peter', 'Benjamin', 'Parker'],
          hero: 'SpiderMan'
      };
      adjustName(dc);
      EXPECTED OUTPUT (object):
      { hero: 'Batman', firstName: 'Bruce', lastName: 'Wayne' }

      adjustName(marvel);
      EXPECTED OUTPUT (object):
      { hero: 'SpiderMan', firstName: 'Peter', lastName: 'Parker' }

<hr/>

## HOMEWORK - Due 2/10 at 11:59pm

#### 4. Write a function called countingLetters. (15 pts)
- The countingLetters function accepts a string and array arguments.
- The goal of the function is to count the occurance of letter in the sentence.
- The return should be an object with the key as the lowercase letter and the count as the value.
- The function should not include counts with anything from the punctions array.
- There should not be duplicate letters in the object including counts for capital letters vs lowercase letters
- (T and t) should just be t.

        const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
        const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];
        countingLetters(quote, punctions);

        EXPECTED OUTPUT (object):
        { t: 6,h: 1,e: 10,g: 5,r: 5,a: 3, s: 3,l: 7,o: 2,y: 2,i: 10,n: 8,v: 3,f: 2,b: 1,u: 1,m: 1,w: 1 }



#### 5.Write a Function called compareArrays. (15 pts)
- The function takes two arrays as arguments.
- The function compares the contents of each array to determine if they are equal and return a boolean.
- For arrays to be equal they should contain the same element at the same index.
- **DO NOT** us JSON.stringify()

      const a1 = [1, 2, 3]
      const a2 = [1, 2, 3]
      compareArray(a1, a2)
      EXPECTED OUTPUT (boolean): true

      const b1 = [1, 2, 3]
      const b2 = ['1', '2', '3']
      compareArray(b1, b2);
      EXPECTED OUTPUT (boolean): false
      
      const c1 = [1, 2, 3, 4]
      const c2 = [1, 2, 3]
      compareArray(c1, c2);
      EXPECTED OUTPUT (boolean): false
      
      const d1 = [1, 2, 3]
      const d2 = [3, 2, 1]
      compareArray(d1, d2)
      EXPECTED OUTPUT (boolean): false



#### 6.Write a Function called convertToObject. (20 pts)
- The function takes a 2D array as an argument and returns an object.
- Each nested array contains the key, value pair that should be added to the object.
- The first item in the nested array always the key and the second is the value.

      const game_array = [
          [ 'developer', 'Respawn' ],
          [ 'producer', 'EA' ],
          [ 'game', 'Star Wars Jedi: Fallen Order' ],
          [ 'year', 2019 ]
      ]
      convertToObject(game_array);

      EXPECTED OUTPUT (object):
      { developer: 'Respawn', 'producer': 'EA', game: 'Star Wars Jedi: Fallen Order', year: 2019 }


#### 7. Write a function called buildObject. (20 pts)
- The function takes a 2D array of objects and returns a nested object with a start key of 1.
- Each item in the nested array contains an object with the key 'property' and the value 'assign'
- These property and assigns are used to build key/value pairs in the return object.

      const products = [[{
          property: 'product',
          assign: 'PS4'
      }, {
          property: 'company',
          assign: 'Sony'
      }, {
          property: 'release',
          assign: '2013'
      }],
      [{
          property: 'product',
          assign: 'Xbox One X'
      }, {
          property: 'company',
          assign: 'Microsoft'
      }, {
          property: 'release',
          assign: '2016'
      }],
       [{
          property: 'product',
          assign: 'Switch'
      }, {
          property: 'company',
          assign: 'Nintendo'
      }, {
          property: 'release',
          assign: '2017'
      }]]

      buildObject(products);

      EXPECTED OUTPUT (object):
      {
        '1': { product: 'PS4', company: 'Sony', release: '2013' },
        '2': { product: 'Xbox One X', company: 'Microsoft', release: '2016' },
        '3': { product: 'Switch', company: 'Nintendo', release: '2017' }
      }

