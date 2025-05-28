let hd=document.querySelector('.HD');
let sd=document.querySelector('.SD');
let main_grid=document.querySelector('.main-grid');

function main_grid_reset(){
    main_grid.innerHTML='';
}



function sd_grid(){
    main_grid_reset();
    for(let i=0; i<20; i++){
        let row=document.createElement('div');
        row.setAttribute("style", "display: flex");
        for(let j=0; j<20; j++){
            let cell=document.createElement('div');
            cell.className="cell";
            cell.setAttribute("style", "background-color: white; border: 1px solid black; height: 15px; width: 15px;");
            cell.addEventListener("mouseover", ()=>{
                let n=Math.random();
                n*=7;
                if(n<1){
                    cell.setAttribute("style", "background-color: violet; border: 1px solid black; height: 15px; width: 15px;");
                }
                else if(n<2){
                    cell.setAttribute("style", "background-color: indigo; border: 1px solid black; height: 15px; width: 15px;");
                }
                else if(n<3){
                    cell.setAttribute("style", "background-color: aquamarine; border: 1px solid black; height: 15px; width: 15px;");
                }

                else if(n<4){
                    cell.setAttribute("style", "background-color: lightgreen; border: 1px solid black; height: 15px; width: 15px;");
                }

                else if(n<5){
                    cell.setAttribute("style", "background-color: yellow; border: 1px solid black; height: 15px; width: 15px;");
                }

                else if(n<6){
                    cell.setAttribute("style", "background-color: orange; border: 1px solid black; height: 15px; width: 15px;");
                }

                else if(n<7){
                    cell.setAttribute("style", "background-color: red; border: 1px solid black; height: 15px; width: 15px;");
                }


            });
            row.appendChild(cell);
        }
        main_grid.appendChild(row);
    }
    
}



function hd_grid(){
    main_grid_reset();
    for(let i=0; i<100; i++){
        let row=document.createElement('div');
        row.setAttribute("style", "display: flex");
        for(let j=0; j<100; j++){
            let cell=document.createElement('div');
            cell.className="cell";
            cell.setAttribute("style", "background-color: white;  height: 5px; width: 5px;");

            cell.addEventListener("mouseover", ()=>{
                let n=Math.random();
                n*=7;
                if(n<1){
                    cell.setAttribute("style", "background-color: violet;  height: 5px; width: 5px;");
                }
                else if(n<2){
                    cell.setAttribute("style", "background-color: indigo;  height: 5px; width: 5px;");
                }
                else if(n<3){
                    cell.setAttribute("style", "background-color: aquamarine;  height: 5px; width: 5px;");
                }

                else if(n<4){
                    cell.setAttribute("style", "background-color: lightgreen;  height: 5px; width: 5px;");
                }

                else if(n<5){
                    cell.setAttribute("style", "background-color: yellow;  height: 5px; width: 5px;");
                }

                else if(n<6){
                    cell.setAttribute("style", "background-color: orange;  height: 5px; width: 5px;");
                }

                else if(n<7){
                    cell.setAttribute("style", "background-color: red;  height: 5px; width: 5px;");
                }


            });
            row.appendChild(cell);
        }
        main_grid.appendChild(row);
    }
    
}





hd.addEventListener("click", ()=>{
    hd_grid();
});

sd.addEventListener("click", ()=>{
    sd_grid();

})

