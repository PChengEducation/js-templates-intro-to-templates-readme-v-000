function addCommnet(){
  var bodyText = "This research is bold and important!";
  var commenter = "Definitely not a woodchuck looking to eat the wood";
  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment){
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("p");
  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);
  return bodyDiv;
}

function createCommenterLabel(commenter){
  var commenterDiv = document.createElement("div");
  var commenterLable = document.createElement("p");
  commenterLabel.innerHTML = "posted by:&nbsp;";
  var commenterName = document.createElement("span");
  commenterName.innerHTML = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);
  return commenterLabel;
}

function postNewComment(body, commenter){
  var commentersDiv = document.getElementById("comments");
  var newCommentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
  newCommentDiv.appendChild(commenter);
  commentsDiv.appenChild(newCommentDiv);
}