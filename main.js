const CHART = document.getElementById("lineChart");
console.log(Chart.defaults.scale.ticks);
Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART,{
    type:'radar',
    data :{
        labels:['Algorithms', 'Foundation','Syntactical Efficiency', 'Logical',
        'Debugging','coding Efficiency'],
        datasets:[
            {
                label:'Skill Set',
                backgroundColor: '#8533F0',
                borderColor:'#8533F0',
                borderWidth:4,
                data:[10,20,55,30,50,60]
            }
        ]
    }
});