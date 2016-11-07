
//===================================================================================
// NOTE: Class names etc has been named by biological naming convensions
//===================================================================================
//
// Biological naming convension:
//
//          5'  ACTGGACTACTGGACTGACT  3'  // Coding stand
//          3'  TGACCTGATGACCTGACTGA  5'  // Template stand
//                   -------->            // RNA polymerase movement on the template strand (aka. "downstream" relative to both DNA and mRNA)
//                        |
//                   starting base in this particular setup (the JSON-data)

//     CODON   |    DNA    | mRNA | 
// --------------------------------
//             | code| tmpl|
// --------------------------------         
// Start codon | ATG | TAC | AUG  |
// Stop codon  | TGA | ACT | UGA  |
// Stop codon  | TAA | ATT | UAA  |
// Stop codon  | TAG | ATC | UAG  |


// var dna = 'ACTGGACTACTGGACTGACT';  // codingStrand

// background-color: #454E4F

// TYPES OG MUTATIONS:
// http://evolution.berkeley.edu/evolibrary/article/mutations_03 

// mRNA
// http://www.ucl.ac.uk/~sjjgsca/translation.html
// https://en.wikipedia.org/wiki/Messenger_RNA
// https://en.wikipedia.org/wiki/Five-prime_cap
// https://en.wikipedia.org/wiki/Five_prime_untranslated_region

// Aminosyre polaritet ift protein foldning:
// http://www.bioinf.man.ac.uk/dbbrowser/ember/prototype/CHAPTER02/INFORMATION.shtml

// TTTATGCTGATGAGGTGACTTTGAACC
// AAATACGACTACTCCACTGAAACTTGG
// UUUAUGCUGAUGAGGUGACUUUGAACC

var bioObj = {
        
        dna : { 
            A : {name:"Adenin", class:"adenin DNA", src: {codingStrand: 'ao.png', templateStrand: 'an.png'} },
            C : {name:"Cytosin",class:"cytosin DNA", src: {codingStrand: 'co.png', templateStrand: 'cn.png'} },
            G : {name:"Guanin", class:"guanin DNA", src: {codingStrand: 'go.png', templateStrand: 'gn.png'} },
            T : {name:"Thymin", class:"thymin DNA", src: {codingStrand: 'to.png', templateStrand: 'tn.png'} }
        },
        mRNA : { 
            A : {name:"Adenin", class:"adenin mRNA", src:"am.png"},
            C : {name:"Cytosin",class:"cytosin mRNA", src:"cm.png"},
            G : {name:"Guanin", class:"guanin mRNA", src:"gm.png"},
            U : {name:"Uracil", class:"uracil mRNA", src:"um.png"}
        },
        tRNA : { 
            U : {
                U: {
                    U: {name: "Fenylalanin", sym: "Phe", symShort: "F"},
                    C: {name: "Fenylalanin", sym: "Phe", symShort: "F"},
                    A: {name: "Leucin", sym: "Leu", symShort: "L"},
                    G: {name: "Leucin", sym: "Leu", symShort: "L"}
                },
                C: {
                    U: {name: "Serin", sym: "Ser", symShort: "S"},
                    C: {name: "Serin", sym: "Ser", symShort: "S"},
                    A: {name: "Serin", sym: "Ser", symShort: "S"},
                    G: {name: "Serin", sym: "Ser", symShort: "S"}
                },
                A: {
                    U: {name: "Tyrosin", sym: "Tyr", symShort: "Y"},
                    C: {name: "Tyrosin", sym: "Tyr", symShort: "Y"},
                    A: {name: "", codonAction: "STOP"},
                    G: {name: "", codonAction: "STOP"}
                },
                G: {
                    U: {name: "Cystein", sym: "Cys", symShort: "C"},
                    C: {name: "Cystein", sym: "Cys", symShort: "C"},
                    A: {name: "", codonAction: "STOP"},
                    G: {name: "Tryptofan", sym: "Trp", symShort: "W"}
                }
            },
            C : {
                U: {
                    U: {name: "Leucin", sym: "Leu", symShort: "L"},
                    C: {name: "Leucin", sym: "Leu", symShort: "L"},
                    A: {name: "Leucin", sym: "Leu", symShort: "L"},
                    G: {name: "Leucin", sym: "Leu", symShort: "L"}
                },
                C: {
                    U: {name: "Prolin", sym: "Pro", symShort: "P"},
                    C: {name: "Prolin", sym: "Pro", symShort: "P"},
                    A: {name: "Prolin", sym: "Pro", symShort: "P"},
                    G: {name: "Prolin", sym: "Pro", symShort: "P"}
                },
                A: {
                    U: {name: "Histidin", sym: "His", symShort: "H"},
                    C: {name: "Histidin", sym: "His", symShort: "H"},
                    A: {name: "Glutamin", sym: "Gln", symShort: "Q"},
                    G: {name: "Glutamin", sym: "Gln", symShort: "Q"}
                },
                G: {
                    U: {name: "Arginin", sym: "Arg", symShort: "R"},
                    C: {name: "Arginin", sym: "Arg", symShort: "R"},
                    A: {name: "Arginin", sym: "Arg", symShort: "R"},
                    G: {name: "Arginin", sym: "Arg", symShort: "R"}
                }
            },
            A : {
                U: {
                    U: {name: "Isoleucin", sym: "Ile", symShort: "I"},
                    C: {name: "Isoleucin", sym: "Ile", symShort: "I"},
                    A: {name: "Isoleucin", sym: "Ile", symShort: "I"},
                    G: {name: "Methionin", sym: "Met", symShort: "M", codonAction: "START"}
                },
                C: {
                    U: {name: "Threonin", sym: "Thr", symShort: "T"},
                    C: {name: "Threonin", sym: "Thr", symShort: "T"},
                    A: {name: "Threonin", sym: "Thr", symShort: "T"},
                    G: {name: "Threonin", sym: "Thr", symShort: "T"}
                },
                A: {
                    U: {name: "Aspargin", sym: "Asn", symShort: "N"},
                    C: {name: "Aspargin", sym: "Asn", symShort: "N"},
                    A: {name: "Lysin", sym: "Lys", symShort: "K"},
                    G: {name: "Lysin", sym: "Lys", symShort: "K"}
                },
                G: {
                    U: {name: "Serin", sym: "Ser", symShort: "S"},
                    C: {name: "Serin", sym: "Ser", symShort: "S"},
                    A: {name: "Arginin", sym: "Arg", symShort: "R"},
                    G: {name: "Arginin", sym: "Arg", symShort: "R"}
                }
            },
            G : {
                U: {
                    U: {name: "Valin", sym: "Val", symShort: "V"},
                    C: {name: "Valin", sym: "Val", symShort: "V"},
                    A: {name: "Valin", sym: "Val", symShort: "V"},
                    G: {name: "Valin", sym: "Val", symShort: "V"}
                },
                C: {
                    U: {name: "Alanin", sym: "Ala", symShort: "A"},
                    C: {name: "Alanin", sym: "Ala", symShort: "A"},
                    A: {name: "Alanin", sym: "Ala", symShort: "A"},
                    G: {name: "Alanin", sym: "Ala", symShort: "A"}
                },
                A: {
                    U: {name: "Asparginsyre", sym: "Asp", symShort: "D"},
                    C: {name: "Asparginsyre", sym: "Asp", symShort: "D"},
                    A: {name: "Glutaminsyre", sym: "Glu", symShort: "E"},
                    G: {name: "Glutaminsyre", sym: "Glu", symShort: "E"}
                },
                G: {
                    U: {name: "Glycin", sym: "Gly", symShort: "G"},
                    C: {name: "Glycin", sym: "Gly", symShort: "G"},
                    A: {name: "Glycin", sym: "Gly", symShort: "G"},
                    G: {name: "Glycin", sym: "Gly", symShort: "G"}
                }
            } 
        }
}

var dObj = {

};


function complementaryDnaBase(base){
    var compBase = {"A":"T", "T":"A", "G":"C", "C":"G" };
    return compBase[base];
}

function complementaryDnaStrand(dnaStr){
    return dnaStr.replace(/A/g, 'M').replace(/T/g, 'A').replace(/M/g, 'T').replace(/C/g, 'K').replace(/G/g, 'C').replace(/K/g, 'G');
}
console.log('complementaryDnaStrand("AAATACGACTACTCCACTGAAACTTGG"): ' + complementaryDnaStrand('AAATACGACTACTCCACTGAAACTTGG'));


function DNAtomRNA(base){
    var compBase = {"A":"U", "T":"A", "G":"C", "C":"G" };
    return compBase[base];
}

function DNAstrTomRNAstr(dnaStr){
    return dnaStr.replace(/A/g, 'U').replace(/T/g, 'A').replace(/C/g, 'K').replace(/G/g, 'C').replace(/K/g, 'G');  // .replace(/&#39;/g, "'")  //g
}
console.log('DNAstrTomRNAstr("ACTGGACTACTGGACTGACT"): ' + DNAstrTomRNAstr('ACTGGACTACTGGACTGACT'));


function mRNAstrToDNAstr(codon){
    return codon.replace(/A/g, 'T').replace(/U/g, 'A').replace(/C/g, 'K').replace(/G/g, 'C').replace(/K/g, 'G');  // .replace(/&#39;/g, "'")  //g
}
console.log('mRNAstrToDNAstr("AUGCUGAUGAGGUGACUUUGAACC"): ' + mRNAstrToDNAstr('AUGCUGAUGAGGUGACUUUGAACC'));


function DNAtoProtein(dna){

    console.log('DNAtoProtein - dna:  ' + dna);

    var mRNA = DNAstrTomRNAstr(dna);
    console.log('DNAtoProtein - mRNA 1: ' + mRNA);

    var mRNA_raw = mRNA;

    var index = mRNA.indexOf('AUG');                // Start codon "AUG" (in mRNA) <===> TAC (in DNA)
    var mRNA_before = (index !== -1)? mRNA.slice(0,index) : '';          // Copy the mRNA sequence before the start codon.
    var mRNA_gene = '';
    var mRNA_after = '';                            // The mRNA sequence after the stop codon (if any).
    mRNA = (index !== -1)? mRNA.slice(index) : '';  // Return all the mRNA after (and including) the first start-codon "AUG". 
    console.log('DNAtoProtein - mRNA 2: ' + mRNA);


    var mRNA_gene_raw = '';


    var pObj = {    // pObj = "protein object"
        mRNA: mRNA,
        mRNA_html: '',
        mRNA_html_extended: '',
        dna_templateStr_html: '',
        codon: null,
        name: '',
        sym: '',
        symShort: ''
    }

    var mRNA = mRNA.split('');

    var codonArr = [];

    var numOfCodons = Math.floor(mRNA.length/3);
    var count = 0;
    for (var i = 0; i < numOfCodons; i++) {
        var condon = [];
        for (var k = 0; k < 3; k++) {
            condon.push(mRNA[count]);
            ++count;
        }
        codonArr.push(condon);
    };
    console.log('DNAtoProtein - codonArr: ' + JSON.stringify(codonArr));
    pObj.codon = codonArr;

    var hasStartCodon = false;
    var hasStopCodon = false;
    var namesHasBeenTrimmed = false;

    for (var n in codonArr){
        var codonArrLength = codonArr.length;
        console.log('DNAtoProtein - n: ' + n + ', codonArrLength: ' + codonArrLength);
        var ca = codonArr[n];
        if (typeof(bioObj.tRNA[ca[0]][ca[1]][ca[2]])!=='undefined'){

            var codon = ca[0]+ca[1]+ca[2];

            // pObj.mRNA_html += '<span class="'+((('AUG'.indexOf(codon)!==-1) && (!hasStartCodon))?'start':bioObj.tRNA[ca[0]][ca[1]][ca[2]].name.toLowerCase())+((('UGA_UAA_UAG'.indexOf(codon)!==-1) && (!hasStopCodon))?'stop':'')+'">'+codon+'</span>';

            pObj.mRNA_html += '<span class="'+((('AUG'.indexOf(codon)!==-1) && (!hasStartCodon))?'start':bioObj.tRNA[ca[0]][ca[1]][ca[2]].name.toLowerCase())+((('UGA_UAA_UAG'.indexOf(codon)!==-1) && (!hasStopCodon))?'stop':'')+'">'+codon+'</span>';

            pObj.dna_templateStr_html += '<span class="'+((('AUG'.indexOf(codon)!==-1) && (!hasStartCodon))?'start':bioObj.tRNA[ca[0]][ca[1]][ca[2]].name.toLowerCase())+((('UGA_UAA_UAG'.indexOf(codon)!==-1) && (!hasStopCodon))?'stop':'')+'">'+ mRNAstrToDNAstr(codon) +'</span>';
            
            if (!hasStopCodon){
                mRNA_gene_raw += codon;
            }

            if ((typeof(bioObj.tRNA[ca[0]][ca[1]][ca[2]].codonAction)!=='undefined') && (bioObj.tRNA[ca[0]][ca[1]][ca[2]].codonAction.toLowerCase() == 'stop')){
                console.log('DNAtoProtein - ERROR - Codon nr '+n+' er et "' +bioObj.tRNA[ca[0]][ca[1]][ca[2]].codonAction+ '" codon. Proteinet bliver ikke derfor ikke længere end '+n+' codons!');

                hasStopCodon = true;

                // // pObj.name = ((pObj.name[pObj.name.length - 1]==', ')? pObj.name.slice(0,-1): pObj.name);  // Trim away unwanted space in the end of the string.
                // pObj.name = ((pObj.name.lastIndexOf(', ') == pObj.name.length-2)? pObj.name.slice(0,-2): pObj.name);  // Trim away unwanted space in the end of the string.
                // pObj.sym = ((pObj.sym[pObj.sym.length - 1]=='-')? pObj.sym.slice(0,-1): pObj.sym);       // Trim away unwanted "-" in the end of the string.

                // var bool = (pObj.name.lastIndexOf(', ') == pObj.name.length-2)? true : false;
                // console.log('DNAtoProtein - lastIndexOf: '+pObj.name.lastIndexOf(', ') + ', pObj.name: ' + pObj.name + ', bool: ' + bool);

                // pObj.name = pObj.name.slice(0,-2);  // Trim away unwanted space in the end of the string.
                // pObj.sym = pObj.sym.slice(0,-1);   

                // break;
            } 

            // IMPORTANT: Having two start-condons in a mRNA is not considered a problem, as the first start-codon (along with other factors) will make sure that the ribosome attach here, and not at the second start-codon, which will just "count" as the amino acid Methionine - see: http://www.protocol-online.org/biology-forums/posts/18826.html 
            // if (bioObj.tRNA[ca[0]][ca[1]][ca[2]].codonAction.toLowerCase() == 'start'){
            //     console.log('mRNAtoProtein - ERROR - Codon nr '+n+' er et "' +bioObj.tRNA[ca[0]][ca[1]][ca[2]].codonAction+ '" codon. Proteinet bliver ikke derfor ikke det du regner med!');
            // }

            if ((typeof(bioObj.tRNA[ca[0]][ca[1]][ca[2]].codonAction)!=='undefined') && (bioObj.tRNA[ca[0]][ca[1]][ca[2]].codonAction.toLowerCase() == 'start')){
                hasStartCodon = true;
            }

            if ((hasStartCodon) && (!hasStopCodon)) { // These are placed here, so the stop-codon is NOT added:
                // pObj.name += bioObj.tRNA[ca[0]][ca[1]][ca[2]].name+((codonArrLength > parseInt(n)+1)?',_':'');
                // pObj.sym += bioObj.tRNA[ca[0]][ca[1]][ca[2]].sym+((codonArrLength > parseInt(n)+1)?'-':'');
                pObj.name += bioObj.tRNA[ca[0]][ca[1]][ca[2]].name+', ';
                pObj.sym += bioObj.tRNA[ca[0]][ca[1]][ca[2]].sym+'-';
                pObj.symShort += bioObj.tRNA[ca[0]][ca[1]][ca[2]].symShort;
            }

            if ((hasStartCodon) && (hasStopCodon) && (!namesHasBeenTrimmed)){
                pObj.name = pObj.name.slice(0,-2);  // Trim away unwanted space in the end of the string.
                pObj.sym = pObj.sym.slice(0,-1);  
                namesHasBeenTrimmed = true;

                break; // Break is needed here for: (1) pObj.dna_templateStr_html to ONLY bed the gene, and (2) for pObj.name and pObj.sym to be correctly trimmed.
            }

            
        } else {
            console.log('DNAtoProtein - ERROR - Codon nr '+n+', som er : "' + ca[0]+ca[1]+ca[2]+ '" eksistere ikke!');
        }
    }
    console.log('DNAtoProtein - pObj: ' + JSON.stringify(pObj));

    var m = pObj.mRNA_html;
    console.log('DNAtoProtein - m: ' + m);

    pObj.userMsg = ((!hasStartCodon)?'<span class="redMsg">Intet start codon er fundet!</span>':'') + ((hasStartCodon && !hasStopCodon)?'<span class="redMsg">Frameshift til stop codon uden den angivne sekvens!</span>':''); 
    console.log('DNAtoProtein - userMsg: ' + pObj.userMsg);

    if (hasStartCodon && hasStopCodon){
        mRNA_gene =  m.slice(m.indexOf('<span class="start">'), m.indexOf('<span class="stop">')+19+3+7);
        console.log('DNAtoProtein - mRNA_gene 1: ' + mRNA_gene); 
    } 
    if (hasStartCodon && !hasStopCodon){
        mRNA_gene =  m.slice(m.indexOf('<span class="start">')); 
        console.log('DNAtoProtein - mRNA_gene 2: ' + mRNA_gene);
    } 
    if (!hasStartCodon && !hasStopCodon){
        // mRNA_gene = mRNA_raw; 
        mRNA_gene = ''; 
        console.log('DNAtoProtein - mRNA_gene 2: ' + mRNA_gene);
    } 

    console.log('DNAtoProtein - mRNA_raw: ' + mRNA_raw);
    console.log('DNAtoProtein - mRNA_gene_raw: ' + mRNA_gene_raw);

    // if (hasStopCodon){
    //     // mRNA_after = m.slice(m.indexOf('<span class="stop">')+19+3+7); // '<span class="stop">'  // NEW 9:05
    //     mRNA_before = mRNA_raw.slice(0, mRNA_raw.indexOf(mRNA_gene_raw)); // '<span class="stop">'  // NEW 9:05
    //     console.log('DNAtoProtein - mRNA_before: ' + mRNA_before);
    // }

    if (hasStopCodon){
        // mRNA_after = m.slice(m.indexOf('<span class="stop">')+19+3+7); // '<span class="stop">'  // NEW 9:05
        mRNA_after = mRNA_raw.slice(mRNA_raw.indexOf(mRNA_gene_raw) + mRNA_gene_raw.length); // '<span class="stop">'  // NEW 9:05
        console.log('DNAtoProtein - mRNA_after: ' + mRNA_after);
    }
    // mRNA_after = mRNA_raw.slice(mRNA_raw.indexOf(stopCodon)+3); //
    // console.log('mRNA_after: ' + mRNA_after); 

    console.log('DNAtoProtein - XXX - mRNA_before: ' + mRNA_before);
    console.log('DNAtoProtein - XXX - mRNA_gene: ' + mRNA_gene);
    console.log('DNAtoProtein - XXX - mRNA_after: ' + mRNA_after);

    // var mRNA_html_noMsg = mRNA_before + pObj.mRNA_html + mRNA_after; // Add the mRNA sequence before the start codon and after the stop codon.
    var mRNA_html_noMsg = mRNA_before + mRNA_gene + mRNA_after; // Add the mRNA sequence before the start codon and after the stop codon.
    console.log('DNAtoProtein - mRNA_html_noMsg: ' + mRNA_html_noMsg);

    pObj.dna_templateStr_html = mRNAstrToDNAstr(mRNA_before) + pObj.dna_templateStr_html + mRNAstrToDNAstr(mRNA_after);

    // pObj.mRNA_html = mRNA_html_noMsg + pObj.userMsg; // Add the mRNA sequence before the start codon and after the stop codon.
    pObj.mRNA_html = mRNA_html_noMsg; // Add the mRNA sequence before the start codon and after the stop codon.
    console.log('DNAtoProtein - mRNA_html: ' + pObj.mRNA_html);
    
    // pObj.mRNA_html_extended = ((hasStartCodon)?'<span class="UTR5" data-toggle="tooltip" title="UTR5" data-placement="top">'+mRNA_before+'</span>':mRNA_html_noMsg) + m.slice(0, m.lastIndexOf("</span>")) + '<span class="UTR3" data-toggle="tooltip" title="UTR3" data-placement="top">'+mRNA_after+'</span>' + ((hasStartCodon && hasStopCodon)?'<span class="polyA" data-toggle="tooltip" title="poly-A hale" data-placement="top">AAAAAAAAAAAAAAA</span>':'') + pObj.userMsg;
    // pObj.mRNA_html_extended = ((hasStartCodon)?'<span class="UTR5" data-toggle="tooltip" title="UTR5" data-placement="top">'+mRNA_before+'</span>':mRNA_html_noMsg) + mRNA_gene + '<span class="UTR3" data-toggle="tooltip" title="UTR3" data-placement="top">'+mRNA_after+'</span>' + ((hasStartCodon && hasStopCodon)?'<span class="polyA" data-toggle="tooltip" title="poly-A hale" data-placement="top">AAAAAAAAAAAAAAA</span>':'') + pObj.userMsg;
    pObj.mRNA_html_extended = ((hasStartCodon)? '<b>5′-cap-</b>'+'<span class="UTR5" data-toggle="tooltip" title="5′UTR (UnTranslated Region), ofte mellem 100 og flere 1000 basebar lang i eukaryoter" data-placement="top">'+mRNA_before+'</span>':mRNA_html_noMsg) + mRNA_gene + '<span class="UTR3" data-toggle="tooltip" title="3′UTR (UnTranslated Region), ofte mellem 60 og flere 1000 basebar lang i eukaryoter - for mennesker i gennemsnit ca 800 basepar lang" data-placement="top">'+mRNA_after+'</span>' + ((hasStartCodon && hasStopCodon)?'<span class="polyA" data-toggle="tooltip" title="poly-A hale" data-placement="top">AAAAAAAAAAAAAAA</span>':'') + pObj.userMsg;
    console.log('DNAtoProtein - mRNA_html_extended: ' + pObj.mRNA_html_extended);

    return pObj;

    // AAATAGCGACTAGCTCCACTGAAACTTGG
}
console.log('DNAtoProtein: ' + JSON.stringify(DNAtoProtein('TACCATCATACTCAT')));  // Nr 3 codon = Stop-codon 
console.log('DNAtoProtein: ' + JSON.stringify(DNAtoProtein('TACCATCATTACCAT')));  // Nr 3 codon = start-codon


// https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
// input.focus();
// input.setSelectionRange(2,5);


function initQuiz(){

    for (var n in jsonData.quiz){
        jsonData.quiz[n].completed = false;
    }
    console.log('initQuiz - jsonData: ' + JSON.stringify(jsonData));
}


function updateQuestionAndCounter(){
    $('#question').html('<span id="questionCounter">'+String(dObj.questionNo+1)+'/'+dObj.questionCounter+'</span>'+jsonData.quiz[dObj.questionNo].question);
}




function checkForPointMutation(){
    var answerDnaSquence = $('#input').val();
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    if (answerDnaSquence.length == codingStrand.length) {
        var answerDnaSquenceArr = answerDnaSquence.split('');
        var codingStrandArr = codingStrand.split('');
        var mArr = [];
        for (var n in answerDnaSquence){
            if (answerDnaSquenceArr[n] != codingStrandArr[n]){
                mArr.push(n);
            }
        }
        if (mArr.length == 0){
            console.log('checkForPointMutation - DNA har ikke ændret sig - ingen punktmutation er lavet!');
        }
        if (mArr.length == 1){
            console.log('checkForPointMutation - punktmutation er lavet!');
            var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
            var pObj = DNAtoProtein(dna_templateStr);
            console.log('checkForPointMutation - correctAminoAcid: ' + jsonData.quiz[dObj.questionNo].mutation.to);
            if (pObj.name.indexOf(jsonData.quiz[dObj.questionNo].mutation.to)!==-1) {
                var HTML = '';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');
            } else {
                console.log('checkForPointMutation - punktmutation er lavet, men det er ikke den rigtige aminosyre!');
                var HTML = '';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'</p>');
            }
        }
        if (mArr.length > 1){
            console.log('checkForPointMutation - flere punktmutationer er lavet!');
        }
    } else {
        console.log('checkForPointMutation - DNA har ændret længde - dette er ikke en punktmutation!');
    }
}


function poseQuestion(){
    updateQuestionAndCounter();

    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    var dna_templateStr = complementaryDnaStrand(codingStrand);
    
    $('#input').val(codingStrand);
    var pObj = DNAtoProtein(dna_templateStr);
    $('#userMsg').html(pObj.userMsg);
    // $('#dna_templateStrand').html(dna_templateStr);
    $('#dna_templateStrand').html(pObj.dna_templateStr_html);
    $('#mRNA').html(pObj.mRNA_html);
    $('#mRNA_extended').html(pObj.mRNA_html_extended);
    $('#protein_name').text(pObj.name);
    $('#protein_sym').text(pObj.sym);
    $('#protein_symShort').text(pObj.symShort);
}


function checkAnswer(){
    if (($('#UserMsgBox .label-danger').length) > 0) { dObj.isAnswerCorrect = false; }
    if (($('#UserMsgBox .label-success').length) > 0) { dObj.isAnswerCorrect = true; }
    console.log('UserMsgBox - CLICKED - isAnswerCorrect: ' + dObj.isAnswerCorrect);

    dObj.questionNo += (dObj.isAnswerCorrect)? 1 : 0;
    poseQuestion();
    dObj.isAnswerCorrect = null;
}


$( document ).on('click', "#checkAnswer", function(event){
    checkForPointMutation();
});

// #UserMsgBox .label-danger
// #UserMsgBox .label-success

$( document ).on('click', "#UserMsgBox", function(event){
    window.UserMsgBox_id_pressed = true;
    checkAnswer();
});


$( document ).on('click', ".MsgBox_bgr", function(event){
    if ((typeof(UserMsgBox_id_pressed)==='undefined') || (UserMsgBox_id_pressed == false)){  // If UserMsgBox then this also runs, which makes dObj.questionNo count twice! This prevents that.
        checkAnswer();
    }
    UserMsgBox_id_pressed = false;
});


$( document ).on('keyup', "#input", function(event){
    var Tdna = $(this).val().trim();
    var dna = Tdna.match(/[acgtACGT]/g).join().replace(/,/g,''); // Only allow DNA bases letters in normal or capital form.
    var charDiff = Tdna.length - dna.length;
    var pos =  $(this).caret();  // Get the position of the caret to where the user altered a letter. SEE:  https://github.com/accursoft/caret
    console.log('keyup - input - match - dna: ' + dna  + ', pos: ' + pos + ', charDiff: ' + charDiff);
    dna = dna.toUpperCase();    // Alter all DNA bases letters to capital form.
    $(this).val(dna);   // Alter the value in the text field
    $(this).caret(pos - charDiff); // Set the position of the caret to where the user altered a letter. SEE:  https://github.com/accursoft/caret
    console.log('keyup - input - dna: ' + dna);
    if (dna.length > 0){
        var dna_templateStr = complementaryDnaStrand(dna);
        var pObj = DNAtoProtein(dna_templateStr);
        $('#userMsg').html(pObj.userMsg);
        // $('#dna_templateStrand').html(dna_templateStr);   
        $('#dna_templateStrand').html(pObj.dna_templateStr_html);   
        $('#mRNA').html(pObj.mRNA_html);
        $('#mRNA_extended').html(pObj.mRNA_html_extended);
        $('#protein_name').text(pObj.name);
        $('#protein_sym').text(pObj.sym);
        $('#protein_symShort').text(pObj.symShort);
    }
});


$( document ).on('click', ".sideToggleBar", function(event){
    var JQthis = this;
    $(this).next().slideToggle( "slow", function() {
        $('.sideToggleIcon',JQthis).toggleClass( 'glyphicon-chevron-down glyphicon-chevron-right' );
    });
});

//=======================================================================================
//                  Run code
//=======================================================================================


$(window).on('resize', function() {
    
});

// $(document).ready(function() {

//     var dna_templateStr = complementaryDnaStrand(jsonData.codingStrand.toUpperCase());
    
//     $('#header').prepend(jsonData.header);
//     $('#instruction').prepend(instruction(jsonData.instruction));  
//     $('#explanation').prepend(explanation(jsonData.explanation));

//     $('#input').val(jsonData.codingStrand.toUpperCase());
//     var pObj = DNAtoProtein(dna_templateStr);
//     $('#userMsg').html(pObj.userMsg);
//     // $('#dna_templateStrand').html(dna_templateStr);
//     $('#dna_templateStrand').html(pObj.dna_templateStr_html);
//     $('#mRNA').html(pObj.mRNA_html);
//     $('#mRNA_extended').html(pObj.mRNA_html_extended);
//     $('#protein_name').text(pObj.name);
//     $('#protein_sym').text(pObj.sym);
//     $('#protein_symShort').text(pObj.symShort);
// });


$(document).ready(function() {

    $('#header').prepend(jsonData.header);
    $('#instruction').prepend(instruction(jsonData.instruction));  
    // $('#explanation').prepend(explanation(jsonData.explanation));

    dObj.questionCounter = jsonData.quiz.length; // Set the length of the quiz.
    dObj.questionNo = 0;  // Set the first quiz
    dObj.isAnswerCorrect = null;

    initQuiz();

    poseQuestion();
});

