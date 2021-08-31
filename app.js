//Let's play a game
//Hope you might played this game with your friends
//The game is about, a group of friends should start counting a number from 1 to 100
//If the number is multiple of 3, we should say as "Fizz"
//If the number is multiple of 5, we should say as "Buzz"

//To play this game, let's go with control statements

for(var i=1; i<=100; i++){
    if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    else{ // else part is optional
        continue
    }
}

//Let's find whether the number is palindrome or not

var number, temp, rem, final

number = 121
temp = number;
while(number>0)
{
    rem = number%10;
    number = parseInt(number/10);
    final = final*10+rem;
}
if(final==temp)
{
    console.log("The number is Palindrome");
}
else
{
    console.log("The number is not palindrome");
}