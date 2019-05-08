function solution(relation) {
  //set the variables
  var answer = 0;
  var parse = [];
  var att = [];
  var dic = {};

  for (i = 0; i < relation[0].length; i++) {
    //grouping per column
    for (a in relation) {
      parse.push(relation[a][i]);
    }
    att.push(parse);
    parse = [];

    //checking duplicate item in each column
    att[i].forEach(item => {
      if (!dic[item]) {
        dic[item] = 0;
      }
      dic[item] += 1;
    });

    //if duplicate item found, the column remove and if no duplicate found answer add 1
    if (Object.keys(dic).length == relation.length) {
      delete att[i];
      answer += 1;
    }
    dic = {};
  }
  //fix att array to attyx (if you delete item in array it will return to undefined item)
  attyx = [];
  for (items in att) {
    if (att[items] != undefined) {
      attyx.push(att[items]);
    }
  }

  //create 2 column combination for the rest column if any
  att = [];
  col = {};
  for (i = 0; i < attyx.length - 1; i++) {
    for (j = 1; j <= attyx.length - (i + 1); j++) {
      for (item in attyx[i]) {
        att.push(attyx[i][item] + attyx[i + j][item]);
      }
      //check if any duplicate in the column combination
      att.forEach(item => {
        if (!dic[item]) {
          dic[item] = 0;
        }
        dic[item] += 1;
      });

      //if no duplicate found, then answer add 1
      if (Object.keys(dic).length == relation.length) {
        answer += 1;
      }
      att = [];
      dic = {};
    }
  }

  return answer;
}
