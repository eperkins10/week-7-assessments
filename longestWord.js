function longestWordLength(string) {
    let words = string.split(" ")
    let maxLength = 0

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length
        }
    }
    return maxLength
}

console.log(longestWordLength("hello big boy daddy smack ethanperkins"))