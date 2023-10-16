let search = document.body.querySelector("input");

let icon = document.body.querySelector(".search-icon");
let first=false;



search.addEventListener("keydown",(event)=>{

    if(event.code=="Enter"){
        let errr=document.body.querySelector(".error");
        errr.classList.add("errr");
        

            let word = search.value;
        

        let name = document.body.querySelector(".value");
        name.classList.remove("first");
        name = name.firstElementChild;
        name = name.firstElementChild;
        name.innerHTML = word.toUpperCase();
        let defi=document.querySelector(".defination");
        defi.innerHTML="";
    
    
    
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                let meanings = response[0].meanings;
                // console.log(meanings);
                let partofspeech = meanings[0].partOfSpeech;
                // let defination = meanings[0].definitions[0].definition;
                // console.log(defination);
                // let def = document.querySelector(".noun-def");
                // def.innerHTML = defination;
                // if (meanings.length >= 2) {
                    console.log(meanings);
                  
                    for(let i=0;i<meanings.length;i++){
                    //    console.log(meanings[i]);
                        let adddef=document.querySelector(".defination");
                        let line=document.createElement("hr");
                        adddef.append(line);
                        let div=document.createElement('h4');
                        div.className="part";
                        div.innerHTML=`${meanings[i].partOfSpeech}`;
                        let defsize=meanings[i].definitions.length;
                        // console.log(defsize);
                        adddef.append(div);
                        let x=0;
                        for(let j=0;j<defsize;j++){
                            
                            if(x==2){
                              break;
                            }
    
                            let def=document.createElement("span");
                            def.className="def";
                            def.innerHTML=": "+meanings[i].definitions[j].definition;
                            adddef.append(def);
                            x++;
                            // console.log(meanings[i]);
                        }
                         line=document.createElement("br");
                        adddef.append(line);
    
    
                        if(meanings[i].antonyms.length>0){
                            let ant=document.createElement("h5");
                            ant.innerHTML="antonyms";
                            adddef.append(ant);
                        }
                       for(let j=0;j<meanings[i].antonyms.length;j++){
                        let btn=document.createElement("button");
                        btn.classList="btn";
                        btn.classList.add("btn-secondary");
                        btn.innerHTML=`${meanings[i].antonyms[j]}`;
                        adddef.append(btn);
                       }
    
    
                       if(meanings[i].synonyms.length>0){
                        let ant=document.createElement("h5");
                        ant.innerHTML="synonyms";
                        adddef.append(ant);
                    }
                   for(let j=0;j<meanings[i].synonyms.length;j++){
                    let btn=document.createElement("button");
                    btn.classList="btn";
                    btn.classList.add("btn-secondary");
                    btn.innerHTML=`${meanings[i].synonyms[j]}`;
                    adddef.append(btn);
                   }
                       
                    }
                // }
               
                // console.log(partofspeech);
                // console.log(meanings.length);
            })
            .catch((error) => {
                let name = document.body.querySelector(".value");
        name.classList.add("first");
             let errr=document.body.querySelector(".error");
             errr.classList.remove("errr");
                   
            })
    
    }
})

icon.addEventListener("click", () => {
    

        let word = search.value;
        let errr=document.body.querySelector(".error");
        errr.classList.add("errr");

    let name = document.body.querySelector(".value");
    name.classList.remove("first");
    name = name.firstElementChild;
    name = name.firstElementChild;
    name.innerHTML = word.toUpperCase();
    let defi=document.querySelector(".defination");
    defi.innerHTML="";



    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            let meanings = response[0].meanings;
            // console.log(meanings);
            let partofspeech = meanings[0].partOfSpeech;
            // let defination = meanings[0].definitions[0].definition;
            // console.log(defination);
            // let def = document.querySelector(".noun-def");
            // def.innerHTML = defination;
            // if (meanings.length >= 2) {
              
                for(let i=0;i<meanings.length;i++){
                //    console.log(meanings[i]);
                    let adddef=document.querySelector(".defination");
                    let line=document.createElement("hr");
                    adddef.append(line);
                    let div=document.createElement('h4');
                    div.className="part";
                    div.innerHTML=`${meanings[i].partOfSpeech}`;
                    let defsize=meanings[i].definitions.length;
                    // console.log(defsize);
                    adddef.append(div);
                    let x=0;
                    for(let j=0;j<defsize;j++){
                        
                        if(x==2){
                          break;
                        }

                        let def=document.createElement("span");
                        def.className="def";
                        def.innerHTML=": "+meanings[i].definitions[j].definition;
                        adddef.append(def);
                        x++;
                        // console.log(meanings[i]);
                    }
                     line=document.createElement("br");
                    adddef.append(line);


                    if(meanings[i].antonyms.length>0){
                        let ant=document.createElement("h5");
                        ant.innerHTML="antonyms";
                        adddef.append(ant);
                    }
                   for(let j=0;j<meanings[i].antonyms.length;j++){
                    let btn=document.createElement("button");
                    btn.classList="btn";
                    btn.classList.add("btn-secondary");
                    btn.innerHTML=`${meanings[i].antonyms[j]}`;
                    adddef.append(btn);
                   }


                   if(meanings[i].synonyms.length>0){
                    let ant=document.createElement("h5");
                    ant.innerHTML="synonyms";
                    adddef.append(ant);
                }
               for(let j=0;j<meanings[i].synonyms.length;j++){
                let btn=document.createElement("button");
                btn.classList="btn";
                btn.classList.add("btn-secondary");
                btn.innerHTML=`${meanings[i].synonyms[j]}`;
                adddef.append(btn);
               }
                   
                }
            // }
           
            // console.log(partofspeech);
            // console.log(meanings.length);
        })
        .catch((error) => {
            let name = document.body.querySelector(".value");
            name.classList.add("first");
                 let errr=document.body.querySelector(".error");
                 errr.classList.remove("errr");
        })


})