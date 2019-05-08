function solution(N, users) {
  // set the variables
  var answer = [];
  var x = 0; //stage level
  var usr = 0; //number of users in or up of current stage
  var f = 0; //number of users in current stage

  //count the failure rate
  while (x < N) {
    x++;
    for (var j in users) {
      //count number of users in or up of current stage
      if (users[j] >= x) {
        usr++;
      }

      //count number of users in current stage
      if (users[j] == x) {
        f++;
      }
    }
    //add the result to answer
    answer.push([x, f / usr]);
    u = 0;
    f = 0;
  }

  //sorting answer by the failure rate descending
  answer.sort((stage, Rate) => Rate[1] - stage[1]);

  //pick the stage only
  for (a in answer) {
    answer[a] = answer[a][0];
  }

  //return the answer
  return answer;
}
