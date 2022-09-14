// import the NodeJS modules
const fs = require('fs');               // module for file I/O
const readline = require("readline");   // module for reading line-by-line from file

//Defect class to hold the information from the three csv's
class Defect {
    constructor(bug_id, component, status, resolution, summary, changed, severity, number_comments, os, assignee_id,reporter_id,open_date,closed_date,fixed_by_username, fixed_by_realname){
        this.bug_id= bug_id,
        this.component= component,
        this.status= status,
        this.resolution= resolution,
        this.summary= summary,
        this.changed= changed,
        this.severity= severity,
        this.number_comments= number_comments,
        this.os= os,
        this.assignee_id= assignee_id,
        this.reporter_id= reporter_id,
        this.open_date= open_date,
        this.closed_date= closed_date,
        this.fixed_by_username= fixed_by_username,
        this.fixed_by_realname= fixed_by_realname,
        this.blocks= [],
        this.depends= []
    }
}

function loadObjects(){
    // create input streams
    let defectsCSV = fs.readFileSync("defects.csv","utf8");        
    let dependsCSV = fs.readFileSync("defect_depends.csv","utf8");
    let blocksCSV = fs.readFileSync("defect_blocks.csv","utf8");
    let developersCSV = fs.readFileSync("developers.csv","utf8");


    //create array to hold defects
    //create dictionary to reference developer names
    var defects = []
    var developers = {}

    //reads in developers
    developersCSV.split("\r\n").forEach(row =>{
        row = row.split(',')
        developers[row[1]] = row[0]
    });

    // Reads defects CSV line-by-line
    defectsCSV.split("\r\n").forEach(row =>{
        bug = row.split(",")
        //creates a new Defect object for each line in the csv
        bug = new Defect(
            bug[0],
            bug[1],
            bug[2],
            bug[3],
            bug[4],
            bug[5],
            bug[6],
            bug[7],
            bug[8],
            bug[9],
            bug[10],
            bug[11],
            bug[12],
            bug[13],
            developers[bug[13]]
        )
        defects.push(bug)
    });



    dependsCSV.split("\r\n").forEach(row =>{
        row = row.split(',')
        //adds realtions to the defects for depends
        var defect = defects.findIndex((defect) => defect.bug_id == row[0])
        if(defects[defect]){
           defects[defect].depends.push(row[1])
        }
    });

    blocksCSV.split("\r\n").forEach(row =>{
        row = row.split(',')
        //adds relations to the defects for blocks
        var defect = defects.findIndex((defect) => defect.bug_id == row[0])
        if(defects[defect]){
           defects[defect].blocks.push(row[1])
        }
    });
    return defects;
}


function query1(defects){
    //filters the defects array to resolved and fixed bugs
    //returns the length of the filtered array
    return defects.filter(defect => defect.status == 'RESOLVED' && defect.resolution == 'FIXED').length;    
}

function query2(defects){
    //searches the summary of each defect for buildbot returns length of filtered array
    return defects.filter(defect => defect.summary.search(/buildbot/i) > -1).length;    
}

function query3(defects){
    //filters for not resolved defects and returns the percentage
    return Number(((defects.filter(defect => defect.status != 'RESOLVED').length/defects.length) * 100).toFixed(2));    
}

function query4(defects){
    //keeps track of component frequency by going through each defect and adding
    //the component to a dictionary where frequency is kept track of
    var freq = {}
    for(let i = 0; i < defects.length; i++){
        if(freq[defects[i].component]) {
            freq[defects[i].component]++
        }
        else {
            freq[defects[i].component] = 1
        }
    }

    maxval = 0
    maxcomp = ''
    //searches freq dictionary for max value
    for(var key in freq) {
        if(freq[key] > maxval) {
            maxval = freq[key]
            maxcomp = key
        }
    }
    return maxcomp;    
}

function query5(defects){
    //keeps track of the frequencies of the usernames who fixed documentation defects
    var freq = {}
    for(let i = 0; i < defects.length; i++){
        if(defects[i].status === "RESOLVED" && defects[i].resolution === "FIXED" && defects[i].component === "Documentation") {
            if(freq[defects[i].fixed_by_username]) {
                freq[defects[i].fixed_by_username]++
            }
            else {
                freq[defects[i].fixed_by_username] = 1
            }
        }
    }

    maxval = 0
    secval = 0
    maxcomp = ''
    seccomp = ''
    //finds the most frequent and second most frequent usernames in freq
    for(var key in freq) {
        if(freq[key] > maxval) {
            secval = maxval
            seccomp = maxcomp
            maxval = freq[key]
            maxcomp = key
        }
        else if(freq[key] > secval){
            secval = freq[key]
            seccomp = key
        }
    }
    return [maxcomp, seccomp];    
}

function query6(defects){
    //for each defect, does a bredth first search of the graph that can be made
    //from the defects depends attributes and looks for loops in the graph 
    for(let i = 0; i < defects.length; i++){
        let queue = [defects[i]]
        let visited = new Set()
        while(queue.length > 0){
            let d = queue.shift()
            if(visited.has(d)){
                return true;
            }
            visited.add(d)
            if(!d){
                continue;
            }
            for(let j = 0; j < d.depends.length; j++){
                let defect = defects.findIndex((defect) => defect.bug_id == d.depends[j])
                queue.push(defects[defect])
            }
        }
    }
    return false;    
}


let defects = loadObjects();
console.log(query1(defects));
console.log(query2(defects));
console.log(query3(defects));
console.log(query4(defects));
console.log(query5(defects));
console.log(query6(defects));



