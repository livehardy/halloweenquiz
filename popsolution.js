//change 5 to the total number of questions
var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Spooktacular!"
compliments[1]="Hair Raising!"
compliments[2]="Spell Binding!"
compliments[3]="Magical!"
compliments[4]="Gourd job!"
compliments[5]="Candy Corn Correct!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Fill in the blank. Casper the friendly _____."
choice1[1]="Goblin"
choice1[2]="Werewolf"
choice1[3]="Ghost"
choice1[4]="Scarecrow"

question[2]="What famous saying is said from house to house to ask for candy?"
choice2[1]="Candy, please!"
choice2[2]="Boo to you!"
choice2[3]="Happy Halloween"
choice2[4]="Trick or treat!"

question[3]="What is a group of witches called?"
choice3[1]="Coven"
choice3[2]="Squad"
choice3[3]="Gang"
choice3[4]="Cult"

question[4]="For Halloween we carve pumpkins, also know as _____."
choice4[1]="Spooky Pumpkins"
choice4[2]="Jack-O-Lanterns"
choice4[3]="Pumpkin Faces"
choice4[4]="Pumpkin Art"

question[5]="What colors are most commmonly associated with Halloween?"
choice5[1]="Red and Purple"
choice5[2]="Green and Blue"
choice5[3]="Orange and Black"
choice5[4]="Black and Pink"

solution[1]="c"
solution[2]="d"
solution[3]="a"
solution[4]="b"
solution[5]="c"

