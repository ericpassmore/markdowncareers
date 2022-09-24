# Markdown Careers
*For companies, fun job board sourcing job descriptions from github markdown.* We do everything in github, so why do do job descriptions as well.

## Getting Started

Create a github repository holding job descriptions in markdown. Put all of your job descriptions in a folder named either **job descriptions** or **positions**. You can have as many sub directories as you want the directory structure will be ignored. 

Run the following commands 
```
npm run build
npm run serve 
```

Go to the site and enter your 
- username
- password
- github owner/repository

Hit submit, and it should build the site. 

## Job Description Meta-data

Write YAML at the beginging of the file. At this time there are only three accepted meta-data params
- Title of Job Description
- Department 
- Location 

## Super Simple Website

There are only two types of pages. Dashboard, showing the job descriptions. Job Description page showing the position. 

## Suggested Content 

If you want to play around the general format of a job descriptions is 
- About the organization
- About the team
- Job Duties/Responsibilities 
- Nice to have requirements
- Benifits
- Legal Policy Statments (example non-discrimination or privacy)
