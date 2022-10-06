// This is a twitter character counter
var post = prompt("type your post here");
const max = 140;
const postLength = post.length;
var left = max - postLength;
var slicedPost = post.slice(0,140);

if (left<0) {
    alert ("You exceeded the maximum number of characters (140)." + "Your post will be: " + "'" + slicedPost +  "'"  + " You have " + left + " characters remaining (out of 140).");

} else { alert("This is your post: " + "'" + post +  "'"  + " The post has " + postLength + " characters." + " You have " + left + " characters remaining (out of 140).");
       }
