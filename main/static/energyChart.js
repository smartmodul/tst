class energyChart{constructor(a,b,c){this.label=b,this.dim=c,this.title=a}getConfig(k){for(var c=Chart.helpers.color,d=[],l=[],e=[],f=[],g=0,b="#fff",h="#ff0000",i="#ff0000",j="#000",a="#00BFEC";g<k;)d.push(g++),l.push(0),f.push(0),e.push(0);return{type:"bar",data:{datasets:[{label:"\u2193"+this.label,color:b,backgroundColor:[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],borderColor:j,borderWidth:1,hoverBackgroundColor:c(h).alpha(.5).rgbString(),hoverBorderColor:b,hoverborderWidth:2,fill:!0,order:0,data:f},{label:"\u2191"+this.label,color:b,backgroundColor:"#d7b410",borderColor:j,borderWidth:1,hoverBackgroundColor:c(h).alpha(.5).rgbString(),hoverBorderColor:b,hoverborderWidth:2,fill:!0,order:0,data:e},{type:"line",yAxesGroup:"2",label:"Eavg. ["+this.dim+"]",backgroundColor:c(i).alpha(1).rgbString(),borderColor:i,borderWidth:1,fill:!1,order:1,data:[0]},],labels:d},options:{maintainAspectRatio:!1,elements:{point:{radius:.5}},legend:{position:"bottom",labels:{fontColor:b,fontSize:14}},scales:{xAxes:[{stacked:!0,ticks:{fontColor:b,fontSize:13,beginAtZero:!0},gridLines:{display:!1}}],yAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:this.dim,fontColor:b},gridLines:{zeroLineColor:b,zeroLineWidth:.2,color:b,lineWidth:.2},ticks:{color:b,fontColor:b,fontSize:14,beginAtZero:!0}}]},tooltips:{mode:"nearest",intersect:!1},hover:{mode:"nearest",intersect:!1}}}}}