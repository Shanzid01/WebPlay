function bodyLoaded(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var word = url.searchParams.get("w");
    var out_length=url.searchParams.get("l");
    if(word && out_length){
        document.getElementById("value_in").value=word;
        document.getElementById("output_len").value=out_length;
        search(word, out_length);
    }
}
function initvars(){
    var query_in=document.getElementById("value_in").value.toLowerCase();
    var out_len=Number(document.getElementById("output_len").value);
    search(query_in, out_len);
}
function validate(inp, out_len){
    if(inp.length==0 || out_len<=0){
        return false;
    }
    if(out_len>inp.length){
        M.toast({html: 'Output cannot be longer than input!'});
        document.getElementById("output_len").focus();
        return false;
    }
    return true;
}
async function search(in_array, out_len){
    if(!validate(in_array, out_len)){return;}
    inputstate(true);
    var finds=[];
main: for(var i in all_data){
        var word=all_data[i][0]==null? "": all_data[i][0].toLowerCase();
        if(word.length!=out_len){continue;}
        var word_split=word.split('');
        var in_temp=in_array.split('');
        for(var j in word_split){
            var character=word_split[j];
            var char_index=in_temp.indexOf(character);
            if(char_index<0){continue main;}
            in_temp[char_index]="";
        }
        finds.push(word);
    }
    inputstate(false);
    showResults(finds);
}
function showResults(results){
    var output_paragraph=document.getElementById("results");
    output_paragraph.innerHTML="";
    if(results.length==0){
        output_paragraph.innerHTML="No results found";
        return;
    }
    for(var i in results){
        var word=results[i];
        output_paragraph.innerHTML+="<h5>"+word+"</h5>";
    }
}
function inputstate(state){
    var inputs = document.getElementsByTagName("INPUT");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = state;
    }
}