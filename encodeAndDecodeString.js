class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
      let res= '';
      for (let s of strs) {
          res += s.length + '#' + s;
      }
      return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = []
    let i = 0
    while (i < str.length) {
      let j = i
      while (str[j] !== '#') j++
      let length = parseInt(str.slice(i, j))
      res.push(str.slice(j + 1, j + 1 + length))
      i = j + 1 + length
    }
    return res
  }
}

const solution = new Solution()
console.log(solution.encode(["lint", "code", "love", "you"]))
console.log(solution.decode("4#lint4#code4#love3#you"))
