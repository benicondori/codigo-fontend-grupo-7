let ctx=document.getElementById("miTabla").getContext("2d");
let tabla=new Chart(ctx,{
    type: "line",
    data: {
        labels: ["Enero", "febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
        datasets: [
            {
            label: "Mi primera tabla",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 45, 20, 30, 45]
        }
    ],
    },

    // Configuration options go here
    options: {}
});
