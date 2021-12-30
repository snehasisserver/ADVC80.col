var participants = [];
function submit(){
    var display_participants = [];
   // var name1 = document.getElementById("name_of_student_1").value;
 //   var name2 = document.getElementById("name_of_student_2").value;
   // var name3 = document.getElementById("name_of_student_3").value;
    //var name4 = document.getElementById("name_of_student_4").value;

   // participants.push(name1);
    //participants.push(name2);
    /*participants.push(name3);
    participants.push(name4);*/

    for (var i = 1;i<=4;i++){
        var name_participants = document.getElementById("name_of_student_"+i).value;
        console.log(name_participants);
participants.push(name_participants);
    }

    console.log(participants);

var length_of_participants=participants.length;
console.log(length_of_participants);

for(var k=0;k<length_of_participants;k++){
display_participants.push("<h4> NAME - "+participants[k]+"</h4>");
console.log(display_participants);

}

    document.getElementById("display_name_with_commas").innerHTML=display_participants;

var remove_comas=display_participants.join(" ");
console.log(remove_comas);
    document.getElementById("display_name_without_commas").innerHTML=remove_comas;
    document.getElementById("submit_bu").style.display="none";
    document.getElementById("sort_bu").style.display="inline-block";
}
function sorting(){
    participants.sort();
    document.getElementById("display_name").innerHTML=participants;
    console.log(participants);
}
