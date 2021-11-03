// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

// Print some output to the terminal (aka. "Console");
console.log("All Pace Names");

// Iterate over each "name" in the "names" list
for (const name of names) {
  console.log(name);
}

// When you don't pass an argument to WriteLine, it simply outputs a blank line.
//  Here we use that to add a little space around the output.
console.log();

// Filter the list to create a new list that only has 
//  place names that start with the word "The".

const theNames = names.filter(n => n.startsWith("The")) 

console.log("'The' Place Names");
for (const name of theNames)
{
    console.log(name);
}