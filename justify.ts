function justify(words: string[], maxWidth: number): string[] {

    let index: number = 0
    let count: number = 0
    let line_length: number = 0
    let pushing1: boolean = false
    let pushing2: boolean = false
    const space: string = " "

    let answer: string[] = []
    let lines_array = []

    while (index < words.length){
        if (line_length + words[index].length == maxWidth){
            line_length += words[index].length
            index ++
            count ++
            pushing1 = true
            line_length = 0
        } else if(line_length + words[index].length + 1 <= maxWidth){
            line_length += (words[index].length + 1)
            index ++
            count ++ 
        } else{
            line_length = 0
            pushing1 = true
        }

        if ((index == words.length) || (pushing1) || (pushing2)){
            let appending_array: string[] = []
            //console.log(index, count, pushing1, pushing2)
            for(let i:number = index-count; i < index; i++){
                appending_array.push(words[i])
            }
            count = 0
            pushing1 = false
            pushing2 = false
            lines_array.push(appending_array)
        }

    }

    for(let line of lines_array){
        let length_of_words_in_line: number = 0
        let words_amount: number = line.length
        for(let word of line){
            length_of_words_in_line += word.length
        }

        let num_of_spaces: number = maxWidth - length_of_words_in_line
        let row: string = ""

        let array_of_spaces = []

        let base_spaces_amount: number = Math.floor(num_of_spaces/(words_amount-1))
        num_of_spaces = num_of_spaces % (words_amount-1);
        //console.log("num of spaces", num_of_spaces)
        for(let i:number = words_amount-2; i >= 0; i--){
            //console.log(base_spaces_amount, num_of_spaces)
            array_of_spaces[i] = base_spaces_amount
            if (num_of_spaces >= 1){
                array_of_spaces[i] ++;
                num_of_spaces--;
            }
        }

        //console.log("Array of spaces for line ", line, array_of_spaces)

        if(words_amount == 1){
            row += (Array(maxWidth-line[0].length+1).join(space) + line[0])

        }else if(line == lines_array[lines_array.length-1]){
            for(let i: number = 0; i < line.length; i++){
                row += (" ")
                row += (line[i])
            }
            row = Array(maxWidth-row.length+1).join(space) + row

        }else{
            let j: number = 0
            for(let i: number = 0; i < line.length; i++){
                row += (line[i])
                try{
                    row += (Array(array_of_spaces[j]+1).join(space))
                }catch{};
                j++;
                //console.log((line[i]), array_of_spaces[j-1])
            }

        }

        answer.push(row)
    }
    

    //console.log("Array of words:  ", lines_array)


    return answer
}

let words =  ["This", "is", "an", "example", "of", "text", "justification."]
let maxWidth = 16

let answer = justify(words, maxWidth);

console.log(answer)