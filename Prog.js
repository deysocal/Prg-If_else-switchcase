/*
********************If else Statement**********************
*/

let basefare=2000;

if (basefare > 2000){

    console.log("This is AC 1st class ticket");
}

else if (basefare==2000){

    console.log("This is AC 2 tier ticket");
}

else 
{

    console.log("This is AC 3tier or General Class ticket");
}

/*
********************Switch Case**********************
*/

let age=2

switch(age){

    case 1:
        console.log("You are in your Early 30s");
        break;

    case 2:
        console.log("You are in your mid 30s");
        break;   

    case 3:
        console.log("You are in your late 30s");
        break;

    default:
        console.log("You are not in 30s");
        break; 
}