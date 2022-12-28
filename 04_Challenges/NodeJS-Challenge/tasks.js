
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
function onDataReceived(text) {
  text = text.replace("\n", " ");
  text = text.trim();
  text = text.split(" ");
  if (text[0] === 'quit'|| text[0] === 'exit') {
    quit();
  }
  else if(text[0] === 'hello'){
    hello(text[1]);
  }
  else if(text[0] === 'help'){
    help();
  }
  else if(text[0] === 'list'){
    list();
  }
  else if(text[0] === 'add'){
    text.shift();
    add(text.join(" "));
  }
  else if (text[0] === "remove") {
    remove(text);
  }
  else{
    unknownCommand(text[0]);
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
function hello(x){
  if(x == null){
    console.log('hello!');
  } else{
    console.log('hello ' + x + '!');
  }
}

// This function lists all the possible commands
function help(){
  console.log('hello: says hello!')
  console.log('hello x: says hello x!')
  console.log('exit/quit: quits the application')
  console.log('list: lists the tasks')
  console.log('add: adds a task to the list')
  console.log('remove: removes the last task from the list')
  console.log('remove x: removes x task from the list')
}
var tasks = ["solve the challenge", "commit the code"];

function list(){
  for(i = 0; i < tasks.length; i++){
    console.log(i + 1 + "- " + tasks[i]);
  }
}
function add(x){
  if(x === ""){
    console.log("error!");
  } else {
    tasks.push(x)
    for(i = 0; i < tasks.length; i++){
      console.log(i + 1 + "- " + tasks[i]);
    }
  
  }
}
function remove(x) {
  if (x === "remove") {
    tasks.pop();
  } else if (x === "remove 1"){
    tasks.splice(0, 1);
  } else if (x <= 0 || x > tasks.length){
    console.log('does not exist');
  } else {
    tasks.splice(1, 1);
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Rana Ghraizi")
