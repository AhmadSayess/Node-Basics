
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var task= ["pizza","shawerma","tawouk"]

function onDataReceived(text) {
  text = text.trim();
  
  if (text === 'quit') {
    quit();
  }
  else if (text === 'exit'){
    exit();
  }
  else if(text.split(" ").shift() === 'hello'){
    hello(text);
  }
  else if(text === 'help'){
    help();
  }
  else if (text.trim().split(" ")[0] === 'add'){
    add(text);
  }
  else if(text === 'remove'){
    remove();
  }
  else if(text === 'list'){
    list();
  }
  else if(text ==='remove 1')
  remove1();
  
  else if(text==='remove 2')
  remove2()
  
  else{
    unknownCommand(text);

  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text + "!")
}

/**list possible commands 
 * @returns {void}
*/
function help(){
  console.log('the possible commands\nquit\nexit\nhelp\nhello\nhello:hello prints hello alone once you add something with it it will add it too')
}
function list(){
  task.forEach((element ,index) => {
    console.log(`${index +1}-${element}`)
  });
}

function add(text){
  let inpt = text.split(" ");
  task.push(inpt[1])
}
function remove(text){
  console.log(task.pop());
}
function remove1(text){
  console.log(task.shift());
  }
function remove2(text){
  console.log(task.splice(1,1));
    }
/**
 * Exits the application
 *
 * @returns {void}
 */
function exit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Ahmad sayess")
