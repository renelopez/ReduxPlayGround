export default {
  books:[
    {
      title:'Orly Chan',
      price:200
    },
    {
      title:'Satan',
      price:150
    },
    {
      title:'Harry Potter',
      price:200
    }
  ],
  feedbacks:[
    {
      id:1,
      name:'Vesta Developer for Telcel',
      position:'.Net Developer',
      recruiter:'Jennifer Mugford',
      candidate:'Oscar Perez',
      reviewer:'Rene Lopez',
      customer:'Vesta',
      type:'Phone Interview',
      score:'9.0',
      comments:'It was good, I liked it.',
      creationDate:new Date().toLocaleDateString()
    },
    {
      id:2,
      name:'FMI Developer for Pharma',
      position:'Java Developer',
      recruiter:'Karla Montoya',
      candidate:'Negrito Medina',
      reviewer:'Joe Zepeda',
      type:'Practice Interview',
      customer:'Foundation Medicine',
      score:'7.0',
      comments:'Great but needs more.',
      creationDate:new Date().toLocaleDateString()
    },
    {
      id:3,
      name:'Java Bofi for Backend',
      position:'Java Developer',
      recruiter:'Francisca Molina',
      customer:'Bank Of Internet',
      type:'Practice Interview',
      candidate:'Jimena Sanchez',
      reviewer:'Francisco Lopez',
      score:'10.0',
      comments:'Awesome, I liked it.',
      creationDate:new Date().toLocaleDateString()
    }
  ],
  positions:[
    {
      id:1,
      name:'.Net Developer Senior',
      hardSkills:['Angular','MVC','Continuous Integration'],
      softSkills:['TeamWork','Hardworker','Perseverant'],
      yearsOfExperience:4
    },
    {
      id:2,
      name:'Java Developer Senior',
      hardSkills:['Struts','Spring','JBoss'],
      softSkills:['Respectful','Decision Driven','Self Confidence'],
      yearsOfExperience:2
    },
    {
      id:3,
      name:'Front End Developer',
      hardSkills:['Angular 2','Webpack','SASS'],
      softSkills:['TeamWork','Mentor','Entrepeneur'],
      yearsOfExperience:2
    }
  ]
}