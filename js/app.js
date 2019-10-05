document.addEventListener('DOMContentLoaded', () => {

    /** Handles Document Object Manipulation
    *
    *   @param {Array, DOMObject} takes an array and a HTML element
    *
    *   @returns {null}
    *
    */
    const DOM = (array, display) => {
        //Array Elements
        let id = array.length;
        let len = array.length - 1;
        let lastObj = array[len];

        //DOM ELements
        let node = document.createElement('li');
        let button = document.createElement('button');
        let textnode =
            document.createTextNode(`${lastObj.appliance}: ${lastObj.energy} `);

        //node.setAttribute('id', id);
        button.innerHTML = '&times;';
        button.setAttribute('class', 'remove');
        node.appendChild(textnode);
        node.appendChild(button);

        display.appendChild(node);
    }

    //Declaring DOM elements and variables
    const array = [];
    const appliance = document.querySelector('#appliance');
    const watts = document.querySelector('#watts');
    const time = document.querySelector('#hours');
    const numOfappliances = document.querySelector('#numberOfappliances');
    const watts_display = document.querySelector(".watts-display");

    /** An Onclick event handler responsible for the logic involved in 
    * the calculation
    *
    * @params {null}
    *
    * @returns {null}
    * 
    */
    add.addEventListener('click', (e) => {
    	e.preventDefault();
        if (appliance.value != '' && watts.value != '' && time.value != '' && numOfappliances.value != '') {
            let energyUtilized = watts.value * time.value * numOfappliances.value;
            array.push({ 'appliance': appliance.value, 'energy': energyUtilized });
            
            if (array && array.length > 0) {
            DOM(array, display);
            }
        } else {
            alert('Please input required values');
        }

        [appliance.value, watts.value, time.value, numOfappliances.value] =
            ['','','',''];
    });

    /** An Onclick event handler responsible for calculation
    *
    * @params {null}
    *
    * @returns {null}
    * 
    */
    calculate.addEventListener('click', () => {
        let totalWatts = 0;
        let solarEnergyNeeded = 0;
        let newArray = array.map(elem => elem.energy);
        for (let kd = 0; kd < array.length; kd++) {
            totalWatts += newArray[kd];
        }
        solarEnergyNeeded = (totalWatts) / 1000;
        watts_display.innerHTML = `${solarEnergyNeeded}kW per day`;
    });

    /**Handles removing elements from the ArrayList 
    *
    */
    document.querySelector('body').addEventListener('click', (event) => {
        if (!event.target) { return; }

        if (event.target.matches('.remove')) {
            if (display.hasChildNodes()) {
                var children = display.childNodes;
                for (let k = 0; k < children.length; k++) {
                    children[k].setAttribute('id', k);
                }
            }
            let init = array.length;
            let index = event.target.parentNode.id;
            array.splice(index, 1);
            display.removeChild(display.childNodes[index]);
        }
    });
});
