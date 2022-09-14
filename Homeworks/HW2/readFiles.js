// import the NodeJS modules
const fs = require('fs');               // module for file I/O
const readline = require("readline");   // module for reading line-by-line from file

// create input streams
let defectsCSV = fs.readFileSync("defects.csv","utf8");        
let dependsCSV = fs.readFileSync("defect_depends.csv","utf8");
let blocksCSV = fs.readFileSync("defect_blocks.csv","utf8");
let developersCSV = fs.readFileSync("developers.csv","utf8");

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

var defects = []
var developers = {}

developersCSV.split("\r\n").forEach(row =>{
    row = row.split(',')
    developers[row[1]] = row[0]
});

// Reads defects CSV line-by-line
defectsCSV.split("\r\n").forEach(row =>{
    bug = row.split(",")
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
    if(defects[Number(row[0])]){
        defects[Number(row[0])].depends.push(row[1])
    }
});

blocksCSV.split("\r\n").forEach(row =>{
    row = row.split(',')
    if(defects[Number(row[0])]){
        defects[Number(row[0])].blocks.push(row[1])
    }
});
console.log(defects[4458])


