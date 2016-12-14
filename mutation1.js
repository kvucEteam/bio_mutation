
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

// Læserammen: nævenelse af basepar eller neukleotider i forbindelse med læserammen:
// http://www.biotechacademy.dk/Undervisningsprojekter/Gymnasiale-projekter/Bioinfo/1-Teori2/1-Codons

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
                    U: {name: "Asparagin", sym: "Asn", symShort: "N"},
                    C: {name: "Asparagin", sym: "Asn", symShort: "N"},
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
                    U: {name: "Asparaginsyre", sym: "Asp", symShort: "D"},
                    C: {name: "Asparaginsyre", sym: "Asp", symShort: "D"},
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


function tryAgainAndgoToNextQuestionBtns() {
    var preStr = '';
    var btnHtml = (dObj.questionNo+1 < jsonData.quiz.length)? preStr+'<br><span class="btn btn-info">Prøv igen</span> <span class="tryAgainAndgoToNextQuestionBtns btn btn-info">Spring opgaven over</span>' : '' ;
    console.log('tryAgainAndgoToNextQuestionBtns - btnHtml: ' + btnHtml);
    return btnHtml;
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


function mRNAstrToDNAcodeStr(codon){
    return codon.replace(/U/g, 'T'); 
}
console.log('mRNAstrToDNAcodeStr("AUGCUGAUGAGGUGACUUUGAACC"): ' + mRNAstrToDNAcodeStr('AUGCUGAUGAGGUGACUUUGAACC'));


function mRNAstrToDNAtmplStr(codon){
    return codon.replace(/A/g, 'T').replace(/U/g, 'A').replace(/C/g, 'K').replace(/G/g, 'C').replace(/K/g, 'G');  // .replace(/&#39;/g, "'")  //g
}
console.log('mRNAstrToDNAtmplStr("AUGCUGAUGAGGUGACUUUGAACC"): ' + mRNAstrToDNAtmplStr('AUGCUGAUGAGGUGACUUUGAACC'));


function DNAtoProtein(dna){

    console.log('DNAtoProtein - dna:  ' + dna);

    var mRNA = DNAstrTomRNAstr(dna);
    console.log('DNAtoProtein - mRNA 1: ' + mRNA);

    var mRNA_raw = mRNA;

    var index = mRNA.indexOf('AUG');                // Start codon "AUG" (in mRNA) <===> TAC (in DNA)
    window.mRNA_before = (index !== -1)? mRNA.slice(0,index) : '';          // Copy the mRNA sequence before the start codon.
    var mRNA_gene = '';
    var mRNA_after = '';                            // The mRNA sequence after the stop codon (if any).
    mRNA = (index !== -1)? mRNA.slice(index) : '';  // Return all the mRNA after (and including) the first start-codon "AUG". 
    console.log('DNAtoProtein - mRNA 2: ' + mRNA);


    window.mRNA_gene_raw = '';


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

    window.hasStartCodon = false;
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

            pObj.dna_templateStr_html += '<span class="'+((('AUG'.indexOf(codon)!==-1) && (!hasStartCodon))?'start':bioObj.tRNA[ca[0]][ca[1]][ca[2]].name.toLowerCase())+((('UGA_UAA_UAG'.indexOf(codon)!==-1) && (!hasStopCodon))?'stop':'')+'">'+ mRNAstrToDNAtmplStr(codon) +'</span>';
            
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
                // pObj.sym += bioObj.tRNA[ca[0]][ca[1]][ca[2]].sym+'-';
                pObj.sym += '<span class="aminoAcid '+((('AUG'.indexOf(codon)!==-1) && (!hasStartCodon))?'start':bioObj.tRNA[ca[0]][ca[1]][ca[2]].name.toLowerCase())+((('UGA_UAA_UAG'.indexOf(codon)!==-1) && (!hasStopCodon))?'stop':'')+'">' + bioObj.tRNA[ca[0]][ca[1]][ca[2]].sym + '</span>'+'-';
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

    pObj.userMsg = ((!hasStartCodon)?'<span class="redMsg">Intet start codon er fundet!</span>':'') + ((hasStartCodon && !hasStopCodon)?'<span class="redMsg">Frameshift til stop codon uden for den angivne sekvens!</span>':''); 
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

    pObj.dna_templateStr_html = mRNAstrToDNAtmplStr(mRNA_before) + pObj.dna_templateStr_html + mRNAstrToDNAtmplStr(mRNA_after);

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
    console.log('updateQuestionAndCounter - dObj.questionNo: ' + dObj.questionNo + ', jsonData.quiz['+dObj.questionNo+']: ' + JSON.stringify(jsonData.quiz[dObj.questionNo]));
    $('#question').html('<span id="goToPreviousQuestionBtn" class="btn btn-info vuc-primary"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> </span> <span id="goToNextQuestionBtn" class="btn btn-info vuc-primary"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> </span> <h3 id="questionCounter">'+String(dObj.questionNo+1)+'/'+dObj.questionCounter+':</h3> <h3 class="questionText">'+jsonData.quiz[dObj.questionNo].question + '</h3>');
}


function findStrDiff(strA, strB){

    var strAarr = strA.split('');
    var strBarr = strB.split('');
    console.log('findStrDiff: \nstrAarr: ' + strAarr + '\nstrBarr: ' + strBarr);

    var shortStrArr = (strAarr.length >= strBarr.length)? strBarr : strAarr;
    var mArr = [];
    for (var n in shortStrArr){
        if (strAarr[n] != strBarr[n]){
            mArr.push(n);
        }
    }
    return mArr;
}


function checkMutation(){

    switch (jsonData.quiz[dObj.questionNo].mutationType) {
        case "pointMutation":
            console.log('checkMutation - pointMutation');
            checkForPointMutation();
            break;
        case "silentMutation":
            console.log('checkMutation - silentMutation');
            checkForSilentMutation();
            break;
        case "frameshiftMutation":
            console.log('checkMutation - frameshiftMutation');
            if (typeof(jsonData.quiz[dObj.questionNo].subType)!=='undefined'){
                if (jsonData.quiz[dObj.questionNo].subType == 'insertion') {
                    checkForFrameshiftMutation('insertion');
                }
                if (jsonData.quiz[dObj.questionNo].subType == 'deletion') {
                    checkForFrameshiftMutation('deletion');
                }
            } else {
                checkForFrameshiftMutation();
            }
            break;
        case "pointStopMutation":
            console.log('checkMutation - pointStopMutation');
            checkForPointStopMutation();
            break;
        case "insertedStopCodon":
            console.log('checkMutation - insertedStopCodon');
            checkForInsertedStopCodon(jsonData.quiz[dObj.questionNo].codonLength);
            break;
        case "insertedRestrictionEnzyme":
            console.log('checkMutation - insertedRestrictionEnzyme');
            checkForInsertedRestrictionEnzyme(jsonData.quiz[dObj.questionNo].restrictionEnzyme);
            break;
        case "madeAminoacidSequence":
            console.log('checkMutation - madeAminoacidSequence');
            checkForMadeAminoacidSequence(jsonData.quiz[dObj.questionNo].aminoacidSequence);  
            break;
        default:
            alert('Invalid "mutationType" in jsonData');
    }
}


function makeQuizes(){

    if (typeof(jsonData.quiz[dObj.questionNo].mutationGenerationType)!=='undefined'){

        switch (jsonData.quiz[dObj.questionNo].mutationGenerationType) {

            case "randomPointMutationQuestions":
                console.log('makeQuizes - randomPointMutationQuestions');
                generateRandomPointMutationQuestions(true);  
                console.log('makeQuizes - randomPointMutationQuestions - jsonData.quiz: ' + JSON.stringify(jsonData.quiz));
                break;
            default:
                alert('Invalid "mutationGenerationType" in jsonData');
        }
    }
}

// TTTATGCTGATGTGGTGACTTTGAACC


function textNumber(num){
    var numArr = ['nul','en','to','tre','fire','fem','seks','syv','otte','ni','ti'];
    return (num < numArr.length)? numArr[num] : num;
}
console.log('textNumber(9): ' + textNumber(9));
console.log('textNumber(10): ' + textNumber(10));
console.log('textNumber(11): ' + textNumber(11));
console.log('textNumber(13): ' + textNumber(13));



// Svar på checkForMadeAminoacidSequence:
// ATGAGCTTATTAAGCTTAATCCGCAAATTAATATATTGA

function checkForMadeAminoacidSequence(aminoacidSequence){
    var answerDnaSquence = $('#input').val().replace(/ /g, '');
    var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
    var pObj = DNAtoProtein(dna_templateStr);

    var generalErrorMsg = 'Læs opgaveteksten, og brug "Den genetiske kode" til at danne den ønskede aminosyrerækkefølge.' + tryAgainAndgoToNextQuestionBtns();

    if (answerDnaSquence.length == 0) {
        var HTML = 'Der er ikke indtastet en DNA-sekvens!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    } else {
        console.log('checkForMadeAminoacidSequence - pObj.sym: ' + pObj.sym);
        if (pObj.sym.length > 0) {
            var answerAminoSequence = pObj.sym.match(/>(\w+)</g).join('-').replace(/>/g, '').replace(/</g, '');
            console.log('checkForMadeAminoacidSequence - pObj.sym: ' + pObj.sym + ', answerAminoSequence: ' + answerAminoSequence);
            if (answerAminoSequence == aminoacidSequence) {
                var HTML = '';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');

                setAnswerMem(true, HTML);
            } else {
                var HTML = 'Den indtastede DNA-sekvens giver ikke den rigtige aminosyrerækkefølge!';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
            }
        }
    }
}


function checkForInsertedRestrictionEnzyme(restrictionEnzyme){
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    var dna_templateStr = complementaryDnaStrand(codingStrand);
    var pObj_old = DNAtoProtein(dna_templateStr);

    var answerDnaSquence = $('#input').val().replace(/ /g, '');
    var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
    var pObj = DNAtoProtein(dna_templateStr);

    var answerDnaSquenceArr = answerDnaSquence.split('');
    var codingStrandArr = codingStrand.split('');
    var mArr = [];
    for (var n in answerDnaSquence){
        if (answerDnaSquenceArr[n] != codingStrandArr[n]){
            mArr.push(n);
        }
    }

    var generalErrorMsg = 'Brug "den genetiske kode" til finde ud af hvilke stille mutationer du kan lave for at opnå DNA-sekvensen '+restrictionEnzyme + '. En stille mutation ændrer ikke på aminosyrerækkefølgen.' + tryAgainAndgoToNextQuestionBtns() ;

    if (mArr.length > 0){
        if (pObj.name == pObj_old.name){
            if (answerDnaSquence.indexOf(restrictionEnzyme)!==-1){
                var HTML = '';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');

                setAnswerMem(true, HTML);
            } else {
                var HTML = 'Sekvensen '+restrictionEnzyme+' er ikke lavet!';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
            }
        } else {
            var HTML = 'Du har ændret i aminosyrerækkefølgen, men den skal bevares!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
    } else {
        var HTML = 'Ingen ændringer i DNA er foretaget!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    }
}


function checkForInsertedStopCodon(codonLength){
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    var dna_templateStr = complementaryDnaStrand(codingStrand);
    var pObj_old = DNAtoProtein(dna_templateStr);

    var answerDnaSquence = $('#input').val().replace(/ /g, '');
    var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
    var pObj = DNAtoProtein(dna_templateStr);

    var generalErrorMsg = 'Indsæt et stop codon efter '+codonLength+' codons. Se i "den genetiske kode" hvordan man laver et stop codon.' + tryAgainAndgoToNextQuestionBtns();

    if (pObj_old.name.split(', ').length > pObj.name.split(', ').length ) {

        if (pObj.name.split(', ').length < codonLength){
            var HTML = 'Du har indsat et stop codon, men antallet af aminosyrer er kun '+textNumber(pObj.name.split(', ').length)+', som er for kort.';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }

        if (pObj.name.split(', ').length == codonLength){
            var HTML = '';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');

            setAnswerMem(true, HTML);
        }

        if (pObj.name.split(', ').length > codonLength){
            var HTML = 'Du har indsat et stop codon, men antallet af aminosyrer er '+textNumber(pObj.name.split(', ').length)+', som er for mange.';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
    } else {
        var HTML = 'Du har ikke ændret på længden af proteinet - dvs du har ikke indsat et nyt stop-codon!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    }
}


function checkForPointStopMutation(){
    var answerDnaSquence = $('#input').val().replace(/ /g, '');
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();

    var dna_templateStr = complementaryDnaStrand(codingStrand);
    var pObj_old = DNAtoProtein(dna_templateStr);

    var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
    var pObj = DNAtoProtein(dna_templateStr);

    console.log('checkForPointStopMutation - pObj.userMsg: ' + pObj.userMsg);

    var generalErrorMsg = 'Du skal lave en punktmutation som skaber et stop codon. Brug "Den genetiske kode" til af finde ud af hvordan et stop codon ser ud. Gennemgå derefter DNA sekvensen i læserammen og find ud af hvor du kan ændre et codon til et stop codon.' + tryAgainAndgoToNextQuestionBtns();

    var diff = answerDnaSquence.length - codingStrand.length;

    if (diff == 0) {
        var numOfChangedBases = findStrDiff(answerDnaSquence, codingStrand).length;
        if (numOfChangedBases == 0){
            console.log('checkForPointStopMutation - ingen punktmutation er fortaget!');
            var HTML = 'DNA har ikke ændret nukleotider!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
        if (numOfChangedBases == 1){
            console.log('checkForPointStopMutation - pObj_old.name: ' + pObj_old.name + ', pObj.name: ' + pObj.name);
            if (pObj_old.name.split(', ').length != pObj.name.split(', ').length) {
                console.log('checkForFrameshiftMutation - insertion - OK');
                var HTML = '';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');
                pObj.userMsg = '';

                setAnswerMem(true, HTML);
            } else {
                console.log('checkForPointStopMutation - ingen punktmutation som føre til et stop codon er fortaget! (kun en alm punktmutation er fortaget.)');
                var HTML = 'Der er ikke tilføjet en punktmutation som føre til et nyt stop codon!';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
            }
        }
        if (numOfChangedBases > 1){
            console.log('checkForPointStopMutation - ingen punktmutation er fortaget!');
            var HTML = 'DNA har ændret flere nukleotider - du skal kun ændre et nukleotid!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
    }

    if (diff > 0) {
        console.log('checkForPointStopMutation - insertion');
        var HTML = 'DNA har ændret længde - du skal foretage en punktmutation ved at ændre et nukleotid!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    }

    if (diff < 0) {
        console.log('checkForPointStopMutation - deletion');
        var HTML = 'DNA har ændret længde - du skal foretage en punktmutation ved at ændre et nukleotid!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    }
}


// Thid function type takes 3 arguments 
//      no arguments (eg. typeof(subType) === 'undefined')  <==>  both insertion and deletion frameshift
//      subType = 'insertion'  <==>  insertion frameshift
//      subType = 'deletion'  <==>  deletion frameshift
function checkForFrameshiftMutation(subType){

    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    var dna_templateStr = complementaryDnaStrand(codingStrand);
    var pObj_old = DNAtoProtein(dna_templateStr);

    var answerDnaSquence = $('#input').val().replace(/ /g, '');
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();

    var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
    var pObj = DNAtoProtein(dna_templateStr);

    console.log('checkForFrameshiftMutation - pObj.userMsg: ' + pObj.userMsg);

    var generalErrorMsg = 'Ved "insertion" forstås at et ekstra nukleotid indsættes i læserammen. Ved "deletion" forstås at et nukleotid fjernes fra læserammen.' + tryAgainAndgoToNextQuestionBtns();

    var diff = answerDnaSquence.length - codingStrand.length;

    if (diff == 0) {
        console.log('checkForFrameshiftMutation - ingen insertion eller deletion fortaget!');
        var HTML = 'DNA har ikke ændret længde - dette er ikke "insertion" eller "deletion" mutation!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    }

    if (diff > 0) {
        console.log('checkForFrameshiftMutation - insertion');
        if ((typeof(subType)==='undefined') || subType == 'insertion') {
            if (diff == 1) {
                console.log('checkForFrameshiftMutation - insertion');
                // if (pObj.userMsg.length > 0) {
                if (pObj_old.name != pObj.name) {
                    console.log('checkForFrameshiftMutation - insertion - OK');
                    var HTML = '';
                    UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');
                    pObj.userMsg = '';

                    setAnswerMem(true, HTML);
                } else {
                    console.log('checkForFrameshiftMutation - insertion - IKKE OK: insertion uden for læserammen.');
                    var HTML = 'DNA har fået indsat et nukleotid, dvs en insertion mutation - men dette er sket uden for læserammen!';
                    UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                    setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
                }
            }

            if (diff > 1) {
                console.log('checkForFrameshiftMutation - insertion - IKKE OK: for mange insertions!');
                var HTML = 'DNA har fået indsat flere nukleotid - du skal kun fortage en "insertion" eller "deletion" mutation!';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
            }
        } else {  // ... else (subType = defined AND subType != insertion)  ==>  subType = insertion.   Because: negation of "A OR B" becomes "~A AND ~B"
            var HTML = 'Opgaven var at ændre læserammen via "deletion", men du har ændret læserammen via "insertion"!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
    }

    if (diff < 0) {
        console.log('checkForFrameshiftMutation - deletion');
        if ((typeof(subType)==='undefined') || subType == 'deletion') {
            if (diff == -1) {
                console.log('checkForFrameshiftMutation - deletion');
                // if (pObj.userMsg.length > 0) {
                if (pObj_old.name != pObj.name) {
                    console.log('checkForFrameshiftMutation - deletion - OK');
                    var HTML = '';
                    UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');
                    pObj.userMsg = '';

                    setAnswerMem(true, HTML);
                } else {
                    console.log('checkForFrameshiftMutation - deletion - IKKE OK: insertion uden for læserammen.');
                    var HTML = 'DNA har fået fjernet et nukleotid, dvs en deletion mutation - men dette er sket uden for læserammen!';
                    UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                    setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
                }
            }

            if (diff < -1) {
                console.log('checkForFrameshiftMutation - deletion - IKKE OK: for mange deletions!');
                var HTML = 'DNA har fået fjernet flere nukleotider - du skal kun fortage en "insertion" eller "deletion" mutation!';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
            }
        } else {  // ... else (subType = defined AND subType != deletion)  ==>  subType = deletion.   Because: negation of "A OR B" becomes "~A AND ~B"
            var HTML = 'Opgaven var at lave frameshift via "insertion", men du har lavet frameshift via "deletion"!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
    }
}


function checkForSilentMutation(){
    var answerDnaSquence = $('#input').val().replace(/ /g, '');
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();

    var dna_templateStr = complementaryDnaStrand(codingStrand);
    var pObj_old = DNAtoProtein(dna_templateStr);

    var generalErrorMsg = 'Vælg et tilfældigt codon. Brug derefter "Den genetiske kode" til at finde ud af hvilke nukleotider der kan ændres uden at ændre aminosyren.' + tryAgainAndgoToNextQuestionBtns();
    if (answerDnaSquence.length == codingStrand.length) {
        console.log('checkForPointMutation - DNA har ikke ændret længde - OK');
        var answerDnaSquenceArr = answerDnaSquence.split('');
        var codingStrandArr = codingStrand.split('');
        var mArr = [];
        for (var n in answerDnaSquence){
            if (answerDnaSquenceArr[n] != codingStrandArr[n]){
                mArr.push(n);
            }
        }
        if (mArr.length == 0){
            console.log('checkForSilentMutation - DNA har ikke ændret sig - ingen punktmutation er lavet!');
            var HTML = 'DNA har ikke ændret sig - ingen punktmutation er lavet!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
        if (mArr.length == 1){
            console.log('checkForSilentMutation - punktmutation er lavet!');
            var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
            var pObj = DNAtoProtein(dna_templateStr);
            console.log('checkForSilentMutation - pObj_old.name: ' + pObj_old.name + ', pObj.name: ' + pObj.name);
            if (pObj_old.name == pObj.name) {
                
                var HTML = '';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');

                setAnswerMem(true, HTML);
                
                // if (typeof(jsonData.quiz[dObj.questionNo].mutation)!=='undefined') {  // Only IF the "from" AND "to" properties are defined, then specific feedback is given...
                //     var checkObj = checkAminoacidSequence();
                //     if (checkObj.correctPointMutation) {
                //         var HTML = '';
                //         UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');
                //     } else {
                //         console.log('checkForPointMutation - punktmutation er lavet, men det er ikke den rigtige aminosyre!');
                        
                //         checkObj.errMsg = 'Du har lavet en stille mutation, men det er ikke i det rigtige codon.';
                //         UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+checkObj.errMsg+'<br>'+generalErrorMsg+'</p>');
                //     }
                // } else {
                //     var HTML = '';
                //     UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');
                // }

            } else {
                console.log('checkForSilentMutation - punktmutation er lavet, men det er ikke den rigtige aminosyre!');
                var HTML = 'Du har ændret en aminosyre, så det er ikke en stille mutation.';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

                setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
            }
        }
        if (mArr.length > 1){
            console.log('checkForSilentMutation - flere punktmutationer er lavet!');
            var HTML = 'Flere punktmutationer er lavet - du skal kun lave en!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
    } else {
        console.log('checkForSilentMutation - DNA har ændret længde');
        var HTML = 'DNA har ændret længde - du skal lave en stille mutation som ikke ændrer længden!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    }
}


function checkForPointMutation(){
    var answerDnaSquence = $('#input').val().replace(/ /g, '');
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    var generalErrorMsg = 'Brug "aminosyresekvensen" forneden til at lokalisere hvor '+jsonData.quiz[dObj.questionNo].mutation.from.toLowerCase()+' er. Brug derefter "Den genetiske kode" til at finde ud af hvilket nukleotid der skal ændres for at opnå '+jsonData.quiz[dObj.questionNo].mutation.to.toLowerCase()+'.' + tryAgainAndgoToNextQuestionBtns();
    if (answerDnaSquence.length == codingStrand.length) {
        console.log('checkForPointMutation - DNA har ikke ændret længde - OK');
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
            var HTML = 'DNA har ikke ændret sig - ingen punktmutation er lavet!';
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

            setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
        }
        // if (mArr.length == 1){                                                   // <-------- 16-11-2016 commented out - Teachers wish to check for one or two point mutations instead of only one
        //     console.log('checkForPointMutation - punktmutation er lavet!');
        //     var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
        //     var pObj = DNAtoProtein(dna_templateStr);
        //     console.log('checkForPointMutation - correctAminoAcid: ' + jsonData.quiz[dObj.questionNo].mutation.to);
        //     if (pObj.name.indexOf(jsonData.quiz[dObj.questionNo].mutation.to)!==-1) {
        //         var HTML = '';
        //         UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');
        //     } else {
        //         console.log('checkForPointMutation - punktmutation er lavet, men det er ikke den rigtige aminosyre!');
        //         var HTML = 'En punktmutation er lavet, men det er ikke den rigtige aminosyre!';
        //         UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');
        //     }
        // }
        // if (mArr.length > 1){
        //     console.log('checkForPointMutation - flere punktmutationer er lavet!');
        //     var HTML = 'Flere punktmutationer er lavet - du skal kun lave en!';
        //     UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');
        // }
        if ((mArr.length == 1) || (mArr.length == 2)){                              // <-------- 16-11-2016 added - Teachers wish to check for one or two point mutations instead of only one
            console.log('checkForPointMutation - punktmutation er lavet!');
            var dna_templateStr = complementaryDnaStrand(answerDnaSquence);
            var pObj = DNAtoProtein(dna_templateStr);
            console.log('checkForPointMutation - correctAminoAcid: ' + jsonData.quiz[dObj.questionNo].mutation.to);
            // if ((pObj.name.indexOf(jsonData.quiz[dObj.questionNo].mutation.from)===-1) && (pObj.name.indexOf(jsonData.quiz[dObj.questionNo].mutation.to)!==-1)) {
            var checkObj = checkAminoacidSequence();
            if (checkObj.correctPointMutation) {
                var HTML = '';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+HTML+'</p>');

                setAnswerMem(true, HTML);
            } else {
                console.log('checkForPointMutation - punktmutation er lavet, men det er ikke den rigtige aminosyre!');
                
                // var HTML = 'Punktmutation er lavet, men substitution af nukleotider er ikke lavet på den rigtige aminosyre!';
                UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+checkObj.errMsg+'<br>'+generalErrorMsg+'</p>');

                setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
            }
        }
        
    } else {
        console.log('checkForPointMutation - DNA har ændret længde!');
        var HTML = 'DNAet har ændret længde. Du skal lave en punktmutation (substitution/udskiftning af nukleotider) som ikke ændrer længden på DNAet!';
        UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+HTML+'<br>'+generalErrorMsg+'</p>');

        setAnswerMem(false, HTML+'<br>'+generalErrorMsg);
    }
}


function checkAminoacidSequence(){
    
    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    var dna_templateStr = complementaryDnaStrand(codingStrand);
    var pObj_old = DNAtoProtein(dna_templateStr);

    console.log('checkAminoacidSequence - pObj_old: ' + JSON.stringify(pObj_old));

    // pObj_old_name = pObj_old.name;

    var pName_old = pObj_old.name.split(', ');

    var pName_new = $('#protein_name').text().split(', ');
    console.log('checkAminoacidSequence - pName_new: ' + JSON.stringify(pName_new));

    var errMsg = '';
    var correctPointMutation = false;
    for (var n in pName_new) {
        console.log('checkAminoacidSequence - pName_old[n]: ' + pName_old[n] + ', pName_new[n]: ' + pName_new[n]);
        if ((pName_old[n] == jsonData.quiz[dObj.questionNo].mutation.from) && (pName_new[n] == jsonData.quiz[dObj.questionNo].mutation.to)) {
            correctPointMutation = true;
        }

        if ((pName_old[n] == jsonData.quiz[dObj.questionNo].mutation.from) && (pName_new[n] != jsonData.quiz[dObj.questionNo].mutation.to)) {
            errMsg = 'Du har lavet en punktmutation i det rigtige codon, men det er ikke den ønskede aminosyre.'
        }

        if ((pName_old[n] != jsonData.quiz[dObj.questionNo].mutation.from) && (pName_new[n] == jsonData.quiz[dObj.questionNo].mutation.to)) {
            errMsg = 'Du har lavet en punktmutation i det forkerte codon (men har dog opnået den ønskede aminosyre).'
        }
    }
    console.log('checkAminoacidSequence - correctPointMutation: ' + correctPointMutation);

    // return correctPointMutation;
    return {correctPointMutation: correctPointMutation, errMsg: errMsg};
}



function poseQuestion(){
    updateQuestionAndCounter();

    var codingStrand = jsonData.quiz[dObj.questionNo].codingStrand.toUpperCase();
    var dna_templateStr = complementaryDnaStrand(codingStrand);
    
    $('#input').val(codingStrand);
    var pObj = DNAtoProtein(dna_templateStr);
    pObj.dna_templateStr_html = pObj.dna_templateStr_html + getDnaResidue(codingStrand, pObj.dna_templateStr_html);  // This adds the dnaResidue to the templae string.
    $('#userMsg').html(pObj.userMsg);
    // $('#dna_templateStrand').html(dna_templateStr);
    $('#dna_templateStrand').html(pObj.dna_templateStr_html);
    $('#mRNA').html(pObj.mRNA_html);
    $('#mRNA_extended').html(pObj.mRNA_html_extended);
    $('#protein_name').text(pObj.name);
    $('#protein_sym').html(pObj.sym);
    $('#protein_symShort').text(pObj.symShort);

    // $('.bioHolder, #input, #question').hide().fadeIn('slow');  
    $('#quizWrap').hide().fadeIn('slow');

    animateChanges();

    addSeparationSpaces();

}


function checkAnswer(){
    if (($('#UserMsgBox .label-danger').length) > 0) { dObj.isAnswerCorrect = false; }
    if (($('#UserMsgBox .label-success').length) > 0) { dObj.isAnswerCorrect = true; }
    console.log('UserMsgBox - CLICKED - isAnswerCorrect: ' + dObj.isAnswerCorrect);

    dObj.questionNo += (dObj.isAnswerCorrect)? 1 : 0;
    if (dObj.questionNo < dObj.questionCounter){
        poseQuestion();
    } else {
        var HTML = 'Du har svaret på alle opgaverne. <br> <span id="tryAgain" class="btn btn-info">Klik her for at prøve igen</span>';
        UserMsgBox("body", '<h3><span class="label label-success">Tillykke!</span></h3><p>'+HTML+'</p>');
    }
    dObj.isAnswerCorrect = null;
}


// This function returns the diffrence (if any) between the codingStrand and templateStrand
function getDnaResidue(codingStrand, templateStrand){
    var TcodingStrand = complementaryDnaStrand(removeHtmlTags(templateStrand));
    console.log('getDnaResidue - codingStrand : ' + codingStrand);
    console.log('getDnaResidue - TcodingStrand: ' + TcodingStrand);
    var dnaResidue = '';
    if (codingStrand.length > TcodingStrand.length) {
        dnaResidue = codingStrand.substr(TcodingStrand.length, codingStrand.length - TcodingStrand.length);
    }
    dnaResidue = complementaryDnaStrand(dnaResidue);
    console.log('getDnaResidue - dnaResidue: ' + dnaResidue);
    return dnaResidue;
}
// console.log('getDnaResidue: ' + getDnaResidue('CTTTGAACC', 'GAAACTTG'));



function removeHtmlTags(str){
    var start = str.indexOf('<');
    var end;
    while(start !== -1){
        end = str.indexOf('>');
        str = str.replace(str.substring(start, end+1), '');
        start = str.indexOf('<');
    }
    return str;
}
console.log('removeHtmlTags: ' + removeHtmlTags('AAA<span class="start">TAC</span><span class="leucin">GAC</span><span class="methionin">TAC</span><span class="arginin">TCC</span><span class="stop">ACT</span>GAAACTTGG') );
// AAATACGACTACTCCACTGAAACTTGG
// AAATACGACTACTCCACTGAAACTTGG
// AAATACGACTACTCCACTGAAACTTGG



$( document ).on('click', ".tryAgainAndgoToNextQuestionBtns", function(event){
    dObj.questionNo += 1;
    if (dObj.questionNo < dObj.questionCounter){ 
        poseQuestion();
    }
});


$( document ).on('click', "#tryAgain", function(event){
     location.reload(); 
});


$( document ).on('click', "#checkAnswer", function(event){
    // checkForPointMutation();
    checkMutation();
});

// #UserMsgBox .label-danger
// #UserMsgBox .label-success

$( document ).on('click', "#UserMsgBox", function(event){
    window.UserMsgBox_id_pressed = true;
    checkAnswer();
});


$( document ).on('click', ".MsgBox_bgr", function(event){
    if ((typeof(UserMsgBox_id_pressed)==='undefined') || (UserMsgBox_id_pressed == false)){  // If UserMsgBox then this also runs, which makes dObj.questionNo count twice! This prevents that.
        console.log('MsgBox_bgr - CLICKED - FIRED!');
        checkAnswer();
    }
    UserMsgBox_id_pressed = false;
});


$( document ).on('click', ".sideToggleBar", function(event){
    var JQthis = this;
    $(this).next().slideToggle( "slow", function() {
        $('.sideToggleIcon',JQthis).toggleClass( 'glyphicon-chevron-down glyphicon-chevron-right' );
    });
});


$( document ).on('click', "#goToNextQuestionBtn", function(event){
    // console.log('glyphicon-chevron-left - CLICKED - jsonData: ' + JSON.stringify(jsonData));
    console.log('glyphicon-chevron-left - CLICKED - dObj.questionNo: ' + dObj.questionNo + ', jsonData.quiz['+dObj.questionNo+']: ' + JSON.stringify(jsonData.quiz[dObj.questionNo]));
    if (dObj.questionNo+1 < jsonData.quiz.length){
        dObj.questionNo += 1;
        poseQuestion();
        getAnswerMem();
    }
});


$( document ).on('click', "#goToPreviousQuestionBtn", function(event){
    // console.log('glyphicon-chevron-left - CLICKED - jsonData: ' + JSON.stringify(jsonData));
    console.log('glyphicon-chevron-left - CLICKED - dObj.questionNo: ' + dObj.questionNo + ', jsonData.quiz['+dObj.questionNo+']: ' + JSON.stringify(jsonData.quiz[dObj.questionNo]));
    if (0 <= dObj.questionNo-1){
        dObj.questionNo -= 1;
        poseQuestion();
        getAnswerMem();
    }
});



// $( document ).on('keyup', "#input", function(event){
//     var Tdna = $(this).val().trim();
//     var dna = Tdna.match(/[acgtACGT]/g).join().replace(/,/g,''); // Only allow DNA bases letters in normal or capital form.
//     var charDiff = Tdna.length - dna.length;
//     var pos =  $(this).caret();  // Get the position of the caret to where the user altered a letter. SEE:  https://github.com/accursoft/caret
//     console.log('keyup - input - match - dna: ' + dna  + ', pos: ' + pos + ', charDiff: ' + charDiff);
//     dna = dna.toUpperCase();    // Alter all DNA bases letters to capital form.
//     $(this).val(dna);   // Alter the value in the text field
//     $(this).caret(pos - charDiff); // Set the position of the caret to where the user altered a letter. SEE:  https://github.com/accursoft/caret
//     console.log('keyup - input - dna: ' + dna);
//     if (dna.length > 0){
//         var dna_templateStr = complementaryDnaStrand(dna);
//         var pObj = DNAtoProtein(dna_templateStr);
//         pObj.dna_templateStr_html = pObj.dna_templateStr_html + getDnaResidue(dna, pObj.dna_templateStr_html);  // This adds the dnaResidue to the templae string.
//         // $('#userMsg').html(pObj.userMsg);
//         // $('#dna_templateStrand').html(dna_templateStr);   
//         $('#dna_templateStrand').html(pObj.dna_templateStr_html);   
//         $('#mRNA').html(pObj.mRNA_html);
//         $('#mRNA_extended').html(pObj.mRNA_html_extended);
//         $('#protein_name').text(pObj.name);
//         $('#protein_sym').text(pObj.sym);
//         $('#protein_symShort').text(pObj.symShort);
//     }
// });


function addSeparationSpaces() {    // MARK 2-12-2016

    var dna = $('#input').val().trim();
    console.log('addSeparationSpaces - hasStartCodon: ' + hasStartCodon + ', mRNA_gene_raw: ' + mRNA_gene_raw);

    var dnaCodeStr = mRNAstrToDNAcodeStr(mRNA_gene_raw);
    console.log('addSeparationSpaces - dnaCodeStr: ' + dnaCodeStr);

    var index = dna.indexOf(dnaCodeStr);
    var dnaBefore = (index!==-1)? dna.substring(0, index) : '';
    var dnaAfter = (index!==-1)? dna.substr(index + dnaCodeStr.length) : '';

    // var spacedDnaCodeStr = dnaBefore + ' ';
    var spacedDnaCodeStr = dnaBefore + ((dnaBefore.length > 0)? ' ' : '');
    var l = dnaCodeStr.length;
    var pos = 0;
    while(pos+3 <= l){
        spacedDnaCodeStr += dnaCodeStr.substr(pos, 3)+' ';
        pos += 3;
    }
    spacedDnaCodeStr += dnaAfter;
    console.log('addSeparationSpaces - spacedDnaCodeStr: ' + spacedDnaCodeStr);

    console.log('addSeparationSpaces - dnaBefore: ' + dnaBefore + ', dnaAfter: ' + dnaAfter);

    $('#input').val(spacedDnaCodeStr);

    var dna_templateStrand = $('#dna_templateStrand').html().replace('<', ' <').replace(/></g, '> <');  // Replace the first "<" with " <" AND replace all "><" with "> <".
    index = dna_templateStrand.lastIndexOf('>');
    dna_templateStrand = (index!==-1)? dna_templateStrand.substring(0, index+1)+' '+dna_templateStrand.substr(index+1) : dna_templateStrand ;  // Replace the last ">" (if it exist) with "> ".
    $('#dna_templateStrand').html(dna_templateStrand);

    var mRNA = $('#mRNA').html().replace('<', ' <').replace(/></g, '> <');  // Replace the first "<" with " <" AND replace all "><" with "> <".
    index = mRNA.lastIndexOf('>');
    mRNA = (index!==-1)? mRNA.substring(0, index+1)+' '+mRNA.substr(index+1) : mRNA ;  // Replace the last ">" (if it exist) with "> ".
    $('#mRNA').html(mRNA);
}


// RESOURSE: https://api.jquery.com/event.which/
function ajustCaretPosition(pos, event) {
    dna = $('#input').val().trim();
    var charBeforeCaret = dna.substr(pos-1,1);
    var charAfterCaret = dna.substr(pos+1,1);
    var oneSpaceExist = (dna.split(' ').length == 2)? true : false ;

    // event.which == 8  : backspace
    // event.which == 32 : space
    // event.which == 37 : left
    // event.which == 39 : right
    // event.which == 65 : a
    // event.which == 67 : c
    // event.which == 71 : g
    // event.which == 84 : t

    var posAjust = ((charBeforeCaret == ' ') && (event.which != 32) && (event.which != 8) && (event.which != 37) && (event.which != 39))? 1 : 0;  // If the user has just typed A, C, G or T and the caret has moved passed a codon-space, then prevent ajustment of caret. 
    if ((charBeforeCaret == ' ') && (event.which != 32) && (event.which != 8) && (event.which != 37) && (event.which != 39)) {console.log('ajustCaretPosition - A')}

    posAjust = ((event.which == 65) || (event.which == 67) || (event.which == 71) || (event.which == 84)) ? posAjust : posAjust - 1 ;  // Move the caret back if A, C, G or T has not been entered.
    if ((event.which == 65) || (event.which == 67) || (event.which == 71) || (event.which == 84)) {console.log('ajustCaretPosition - B')}

    posAjust = ((event.which == 37) || (event.which == 39) || (event.which == 8)) ? posAjust+1 : posAjust ; // Do not ajust position if backspace, left og right is entered. 
    if ((event.which == 37) || (event.which == 39) || (event.which == 8)) {console.log('ajustCaretPosition - C')}

    posAjust = (oneSpaceExist) ? posAjust+1 : posAjust ;  // If the user starts from a clean input-field AND enters DNA bases BEFORE the start codon (then oneSpaceExist is true), then add one to the caret position.
    if ((event.which == 37) || (event.which == 39) || (event.which == 8)) {console.log('ajustCaretPosition - D')}

    posAjust = ((event.which == 8) && (charBeforeCaret == ' ')) ? posAjust-1 : posAjust ;  // If the user presses backspace AND there is a codon-space before the caret, then prevent ajustment of caret.
    if ((event.which == 8) && (charBeforeCaret == ' ')) {console.log('ajustCaretPosition - E')}

    posAjust = ((oneSpaceExist) && (event.which == 8)) ? posAjust-1 : posAjust ;  // This corrects the error in consol.log "D" above.
    if ((oneSpaceExist) && (event.which == 8)) {console.log('ajustCaretPosition - G')}
    
    console.log('ajustCaretPosition - posAjust: ' + posAjust);
    return posAjust;
}


function addAligmentSpaces(){
    var spaces = (mRNA_before.length > 0)? '&nbsp;' : '';
    for (var i = 0; i < mRNA_before.length; i++) {
        spaces += '&nbsp;';
    };
    console.log('addAligmentSpaces - spaces: _' + spaces + '_');
    return spaces;
}  


function align_protein_sym(){
    if ($('.start').length > 0){
        var posParent = $('.start').parent().offset();
        var posChild = $('.start').offset();
        var diff = posChild.left - posParent.left - 3;
        console.log('align_protein_sym - posParent: ' + posParent + ', posChild: ' + posChild + ', diff: ' + diff);
        $('#protein_sym .methionin:first').css({'margin-left' : diff});
    }
}


function animateChanges() {
    var aminoSequence = $('#protein_sym').html();
    console.log('animateChanges - aminoSequence: ' + aminoSequence);

    if (typeof(aminoSequenceMem)==='undefined') {
        window.aminoSequenceMem = '';
    }
    
    if (aminoSequence != aminoSequenceMem) {

        var aminoSequenceMemArr = aminoSequenceMem.split('-'); // REAL
        // var aminoSequenceMemArr = aminoSequence.split('-'); // TEST
        // var aminoSequenceMemArr = aminoSequenceMem.split('<span class="hyphen">-</span>'); // REAL
        // var aminoSequenceMemArr = aminoSequence.split('<span class="hyphen">-</span>');       // TEST
        console.log('animateChanges - aminoSequenceMemArr: ' + aminoSequenceMemArr);

        $( "#protein_sym .aminoAcid" ).each(function( index, element ) {
            var aminoAcid = $(element)[0].outerHTML;
            // if ((typeof(aminoAcidArr[index])!=='undefined') && (aminoAcidArr != aminoAcidArr[index])) {
            console.log('animateChanges - aminoAcid: ' + aminoAcid + ', aminoSequenceMemArr['+index+']: ' + aminoSequenceMemArr[index] + ', bool: ' + ((aminoAcid != aminoSequenceMemArr[index])?true:false) );
            
            // if ((typeof(aminoSequenceMemArr[index])!=='undefined') && (aminoAcid != aminoSequenceMemArr[index])) {
            if ((aminoAcid != aminoSequenceMemArr[index])) {

                $(element).after(aminoAcid);
                $(element).next().hide().fadeIn('slow');
                $(element).remove();
                console.log('animateChanges XXX - aminoAcid: ' + aminoAcid + ', aminoSequenceMemArr['+index+']: ' + aminoSequenceMemArr[index] + ', bool: ' + ((aminoAcid != aminoSequenceMemArr[index])?true:false) );
            }
        });

        aminoSequenceMem = aminoSequence;
    }
}


$( document ).on('keyup', "#input", function(event){    
    var Tdna = $(this).val().trim();
    if (Tdna.length > 0){    // <-------  Added 1-12-2016
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
            pObj.dna_templateStr_html = pObj.dna_templateStr_html + getDnaResidue(dna, pObj.dna_templateStr_html);  // This adds the dnaResidue to the templae string.
            // $('#userMsg').html(pObj.userMsg);
            // $('#dna_templateStrand').html(dna_templateStr);   
            $('#dna_templateStrand').html(pObj.dna_templateStr_html);   
            $('#mRNA').html(pObj.mRNA_html);
            $('#mRNA_extended').html(pObj.mRNA_html_extended);
            $('#protein_name').text(pObj.name);
            // $('#protein_sym').text(pObj.sym);
            $('#protein_sym').html(pObj.sym);
            $('#protein_symShort').text(pObj.symShort);

            animateChanges();

            // Below is functionality regarding "spaces" between codons AND ajustment og caret-position:
            addSeparationSpaces();
            var ajust = ajustCaretPosition(pos, event);
            $(this).caret(pos + ajust);

            align_protein_sym();
        }
    } else {
        $('#dna_templateStrand').text(' ');  // <-------  Added 1-12-2016 : If the input field is empty, delete the content in all placeholders.
        $('#mRNA').text(' ');
        $('#protein_sym').text(' ');
        $('#protein_name').text(' ');
    }
});


function shuffelArray(ItemArray) {
    var NumOfItems = ItemArray.length;
    var NewArray = ItemArray.slice(); // Copy the array...
    var Item2;
    var TempItem1;
    var TempItem2;
    for (var Item1 = 0; Item1 < NumOfItems; Item1++) {
        Item2 = Math.floor(Math.random() * NumOfItems);
        TempItem1 = NewArray[Item1];
        TempItem2 = NewArray[Item2];
        NewArray[Item2] = TempItem1;
        NewArray[Item1] = TempItem2;
    }
    return NewArray;
}


function returnAllAminoAcids(){
    var aminoObj = {};
    for (var i in bioObj.tRNA){
        for (var j in bioObj.tRNA[i]){
            for (var k in bioObj.tRNA[i][j]){
                if (bioObj.tRNA[i][j][k].codonAction != "STOP") {
                    console.log('returnAllAminoAcids - bioObj.tRNA['+i+']['+j+']['+k+'].name: '+bioObj.tRNA[i][j][k].name+', aminoObj: ' + JSON.stringify(aminoObj));
                    if (typeof(aminoObj[bioObj.tRNA[i][j][k].name]) === 'undefined'){
                        aminoObj[bioObj.tRNA[i][j][k].name] = {sym: bioObj.tRNA[i][j][k].sym, codon: []};
                    } 
                    aminoObj[bioObj.tRNA[i][j][k].name].codon.push(i+j+k);
                }
            }
        }
    }
    console.log('returnAllAminoAcids - aminoObj: ' + JSON.stringify(aminoObj));
    return aminoObj;
}


function generateRandomPointMutationQuestions(random){

    // var codingStrand = $('#input').val().replace(/ /g, '');
    var codingStrand = jsonData.quiz[0].codingStrand;
    var dna_templateStr = complementaryDnaStrand(codingStrand);
    var pObj = DNAtoProtein(dna_templateStr);

    console.log('generateRandomPointMutationQuestions - codingStrand: ' + codingStrand);
    // var codonArr = pObj.codon;
    var codonArr = pObj.codon.slice(); // Copy the array...
    if (codonArr.length > 2){
        codonArr.shift();  // Remove the first aminoacid, which is Methionin (the "start-codon")
        codonArr.pop();  // Remove the last aminoacid, which is the "stop-codon"
        console.log('generateRandomPointMutationQuestions - codonArr: ' + JSON.stringify(codonArr));
        if (random === true){
            codonArr = shuffelArray(codonArr);
        }
        var quizArr = [];
        console.log('generateRandomPointMutationQuestions - codonArr.length: ' + codonArr.length);
        for (var n in codonArr) {
            var codon = codonArr[n];  // Remove the first aminoacid
            console.log('generateRandomPointMutationQuestions - n: ' + n + ', codon: ' + JSON.stringify(codon) + ', codonArr: ' + JSON.stringify(codonArr));
            var Mcodon = pointMutation(codon); // Mcodon = mutated codon.
            quizArr.push(questionTempl(codingStrand, bioObj.tRNA[codon[0]][codon[1]][codon[2]].name, bioObj.tRNA[Mcodon[0]][Mcodon[1]][Mcodon[2]].name));
            // codonArr.shift();  // Remove the first aminoacid
        }
        jsonData.quiz = quizArr;
    } 

    function pointMutation(codon){
        var base = ['A','C','G','U']; 
        var c1 = codon;
        var count = 0;
        do {
            var c2 = c1.slice(); // Copy the array...
            var ni = Math.round(Math.random()*2); // Nucleotide index number
            var nt = Math.round(Math.random()*3); // Nucleotide base
            c2[ni] = base[nt];
            console.log('pointMutation - count: ' + count + ', c1: ' + c1 + ', c2: ' + c2);
            if (count > 20) {
                break;
            }
            ++count;
            // console.log('pointMutation - count: ' + count + ',bioObj.tRNA[c1[0]][c1[1]][c1[2]].name: ' + bioObj.tRNA[c1[0]][c1[1]][c1[2]].name + ', bioObj.tRNA[c2[0]][c2[1]][c2[2]].name: ' + bioObj.tRNA[c2[0]][c2[1]][c2[2]].name);
        } while((bioObj.tRNA[c2[0]][c2[1]][c2[2]].codonAction == 'STOP') || (bioObj.tRNA[c2[0]][c2[1]][c2[2]].name == bioObj.tRNA[c1[0]][c1[1]][c1[2]].name));
        console.log('pointMutation - count: ' + count + ',bioObj.tRNA[c1[0]][c1[1]][c1[2]].name: ' + bioObj.tRNA[c1[0]][c1[1]][c1[2]].name + ', bioObj.tRNA[c2[0]][c2[1]][c2[2]].name: ' + bioObj.tRNA[c2[0]][c2[1]][c2[2]].name);
        
        return c2;
    }

    function questionTempl(codingStrand, from, to){
        var qObj = {
            "mutationType" : "pointMutation",
            "codingStrand": codingStrand,
            "question": "Lav en punktmutation som ændrer aminosyren "+from.toLowerCase()+" til "+to.toLowerCase(),
            "mutation":{"from": from, "to": to}
        }
        return qObj;
    }
}



function initAnswerMem(){
    for (var n in jsonData.quiz) {
        jsonData.quiz[n].answerMem = {answered: null, msg: null}; // answered = "null" if not answered, "true" if answered correct, "false" if answered wrong. The property msg = the message to the student.
    }
    console.log('initAnswerMem - jsonData.quiz: ' + JSON.stringify(jsonData.quiz));
}


function setAnswerMem(answerBool, msg){
    jsonData.quiz[dObj.questionNo].answerMem = {answered: answerBool, msg: msg};
    console.log('setAnswerMem - jsonData.quiz: ' + JSON.stringify(jsonData.quiz));
}


function getAnswerMem(){
    console.log('getAnswerMem - dObj.questionNo: ' + dObj.questionNo + ', jsonData.quiz: ' + JSON.stringify(jsonData.quiz));

    // if ((0 >= dObj.questionNo-1) && (dObj.questionNo+1 < jsonData.quiz.length)){
    if ((0 <= dObj.questionNo) && (dObj.questionNo < jsonData.quiz.length)){
        console.log('getAnswerMem - INTERVAL OK');

        if (jsonData.quiz[dObj.questionNo].answerMem.answered === true){
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-success">Korrekt!</span></h3><p>'+jsonData.quiz[dObj.questionNo].answerMem.msg+'</p>');
            dObj.questionNo -= 1;  // This is to compensate for the ajustment done else 
        }

        if (jsonData.quiz[dObj.questionNo].answerMem.answered === false){
            UserMsgBox("body", '<h3>Du har svaret <span class="label label-danger">Forkert!</span></h3><p>'+jsonData.quiz[dObj.questionNo].answerMem.msg+'</p>');
        }
    }

}


//=======================================================================================
//                  Run code
//=======================================================================================


$(window).on('resize', function() {
    
});


$(document).ready(function() {

    $('#header').prepend(jsonData.header);
    $('#instruction').prepend(instruction(jsonData.instruction));  
    // $('#explanation').prepend(explanation(jsonData.explanation));

    dObj.questionNo = 0;  // Set the first quiz
    dObj.isAnswerCorrect = null;

    makeQuizes();  // This makes random quizes if they are present.

    dObj.questionCounter = jsonData.quiz.length; // Set the length of the quiz.

    initQuiz();

    poseQuestion();

    align_protein_sym();

    initAnswerMem();

});

