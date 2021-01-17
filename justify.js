function justify(words, maxWidth) {
    var index = 0;
    var count = 0;
    var line_length = 0;
    var pushing1 = false;
    var pushing2 = false;
    var space = " ";
    var answer = [];
    var lines_array = [];
    while (index < words.length) {
        if (line_length + words[index].length == maxWidth) {
            line_length += words[index].length;
            index++;
            count++;
            pushing1 = true;
            line_length = 0;
        }
        else if (line_length + words[index].length + 1 <= maxWidth) {
            line_length += (words[index].length + 1);
            index++;
            count++;
        }
        else {
            line_length = 0;
            pushing1 = true;
        }
        if ((index == words.length) || (pushing1) || (pushing2)) {
            var appending_array = [];
            //console.log(index, count, pushing1, pushing2)
            for (var i = index - count; i < index; i++) {
                appending_array.push(words[i]);
            }
            count = 0;
            pushing1 = false;
            pushing2 = false;
            lines_array.push(appending_array);
        }
    }
    for (var _i = 0, lines_array_1 = lines_array; _i < lines_array_1.length; _i++) {
        var line = lines_array_1[_i];
        var length_of_words_in_line = 0;
        var words_amount = line.length;
        for (var _a = 0, line_1 = line; _a < line_1.length; _a++) {
            var word = line_1[_a];
            length_of_words_in_line += word.length;
        }
        var num_of_spaces = maxWidth - length_of_words_in_line;
        var row = "";
        var array_of_spaces = [];
        var base_spaces_amount = Math.floor(num_of_spaces / (words_amount - 1));
        num_of_spaces = num_of_spaces % (words_amount - 1);
        //console.log("num of spaces", num_of_spaces)
        for (var i = words_amount - 2; i >= 0; i--) {
            //console.log(base_spaces_amount, num_of_spaces)
            array_of_spaces[i] = base_spaces_amount;
            if (num_of_spaces >= 1) {
                array_of_spaces[i]++;
                num_of_spaces--;
            }
        }
        //console.log("Array of spaces for line ", line, array_of_spaces)
        if (words_amount == 1) {
            row += (Array(maxWidth - line[0].length + 1).join(space) + line[0]);
        }
        else if (line == lines_array[lines_array.length - 1]) {
            for (var i = 0; i < line.length; i++) {
                row += (" ");
                row += (line[i]);
            }
            row = Array(maxWidth - row.length + 1).join(space) + row;
        }
        else {
            var j = 0;
            for (var i = 0; i < line.length; i++) {
                row += (line[i]);
                try {
                    row += (Array(array_of_spaces[j] + 1).join(space));
                }
                catch (_b) { }
                ;
                j++;
                //console.log((line[i]), array_of_spaces[j-1])
            }
        }
        answer.push(row);
    }
    //console.log("Array of words:  ", lines_array)
    return answer;
}
var words = ["This", "is", "an", "example", "of", "text", "justification."];
var maxWidth = 16;
var answer = justify(words, maxWidth);
console.log(answer);
