function add(str1, str2) {
  // 实现该函数
  const maxLen = Math.max(str1.length, str2.length);
  const _str1 = str1.padStart(maxLen, "0");
  const _str2 = str2.padStart(maxLen, "0");
  let isCarry = 0;
  const ret = [];
  for (let i = maxLen - 1; i >= 0; i--) {
    const sum = parseInt(_str1[i]) + parseInt(_str2[i]) + isCarry;
    const remainder = sum - 10;
    if (remainder < 0) {
      ret.push(sum);
      isCarry = 0;
    } else {
      ret.push(remainder);
      isCarry = 1;
    }
  }
  if (isCarry === 1) {
    return "1" + ret.reverse().join("");
  } else {
    return ret.reverse().join("");
  }
  
}

module.exports = add