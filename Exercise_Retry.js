/**
 * Example :: Retry
 *
 * Say you have a function primitiveMultiply that, in 50 percent of cases,
 multiplies two numbers, and in the other 50 percent, raises an exception
 of type MultiplicatorUnitFailure . Write a function that wraps this clunky
 function and just keeps trying until a call succeeds, after which it returns
 the result.
 Make sure you handle only the exceptions you are trying to handle.
 */


/**
 * MultiplicatorUnitFailure exception
 * @constructor
 */
function MultiplicatorUnitFailure () {}

/**
 *
 * @param a
 * @param b
 * @returns {number} if doesn't fail
 */
function primitiveMultiply(a,b) {
    if(Math.random() < 0.5)
        return a*b;
    else
        throw new MultiplicatorUnitFailure();
}

/**
 *
 * @param num1
 * @param num2
 * @returns {number} else try again while enters return parameter;
 */
function funcWrapper(num1,num2) {
   while (true) {
       try {
           return primitiveMultiply(num1, num2);
       } catch (err) {
           if (!err instanceof MultiplicatorUnitFailure)
               throw new err;
       }
   }
}

console.log(funcWrapper(3,12));
