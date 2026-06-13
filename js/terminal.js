
const input=document.getElementById('cmd');
const out=document.getElementById('output');

const cmds={
help:'about, skills, projects, experience, certifications, contact, resume, clear',
about:'Roehan Ranganathan | Cyber Security Student | SRM IST',
skills:'Python, JS, SQL, PostgreSQL, AWS, OCI, Tableau, KNIME',
projects:'Stock Portfolio, AI Face Recognition, Flappy Bird',
experience:'Larsen & Toubro Intern',
certifications:'AWS, OCI, NPTEL DBMS, Celonis',
contact:'Email: rangaroehan@gmail.com',
resume:'Add your PDF as resume.pdf in root folder',
clear:'__clear__'
};

input.addEventListener('keydown',e=>{
if(e.key==='Enter'){
let c=input.value.trim().toLowerCase();
if(cmds[c]==='__clear__'){out.innerHTML='';}
else out.innerHTML += '<br>> '+c+'<br>'+(cmds[c]||'Unknown command');
input.value='';
}
});
