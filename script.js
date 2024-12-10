// Get DOM elements
const qg1 = document.getElementById("qg");
const qo1 = document.getElementById("qo");
const qw1 = document.getElementById("qw");
const po1 = document.getElementById("po");
const to1 = document.getElementById("to");
const sg1 = document.getElementById("sg");
const sgo1 = document.getElementById("sgo");
const sgw1 = document.getElementById("sgw");
const dm1 = document.getElementById("dm");
const z1 = document.getElementById("z");
const m1 = document.getElementById("m");
const tr1 = document.getElementById("tr");
const cdi = 0.34
const calculateBtn = document.getElementById("calculate-btn");
const resultDisplay = document.getElementById("result");

// Add click event listener to the button
calculateBtn.addEventListener("click", () => {
    // Parse input values as numbers
    const qg = parseFloat(qg1.value);
    const qo = parseFloat(qo1.value);
    const qw = parseFloat(qw1.value);
    const po = parseFloat(po1.value) || 1;
    const to = parseFloat(to1.value) || 1;
    const sg = parseFloat(sg1.value);
    const sgo = parseFloat(sgo1.value);
    const sgw = parseFloat(sgw1.value);
    const dm = parseFloat(dm1.value);
    const z = parseFloat(z1.value) || 1;
    const m = parseFloat(m1.value);
    const tr = parseFloat(tr1.value);
    // Check if inputs are valid numbers
    // if (isNaN(number1) || isNaN(number2)) {
    //     resultDisplay.textContent = "Invalid input. Please enter valid numbers.";
    //     return;
    // }

    //шаг 1
    const pl = 62.4 * (141.5/(131.5 + sgo))

    // шаг 2
    console.log({po, to, sg, z, dm})
    const pg = 2.7 * ((sg * po)/(to * z))
    console.log(pg)

    // шаг 3
    console.log({pl, pg, cdi})
    const vt1 = 0.0119 * Math.pow(((pl - pg) / pg) * (dm / cdi), 0.5);

    // шаг 4
    const re1 = 0.0049 * ((pg*dm*vt1)/m)

    // шаг 5
    const cd1 = (24/re1) + (3/(Math.pow(re1, 0.5))) + 0.34

    // шаг 6
    const vt2 = 0.0119 * Math.pow(((pl - pg) / pg) * (dm / cd1), 0.5);

    const re2 = 0.0049 * ((pg*dm*vt2)/m)

    const cd2 = (24/re2) + (3/(Math.pow(re2, 0.5))) + 0.34

     // шаг 7
     const vt3 = 0.0119 * Math.pow(((pl - pg) / pg) * (dm / cd2), 0.5);

     const re3 = 0.0049 * ((pg*dm*vt3)/m)
 
     const cd3 = (24/re3) + (3/(Math.pow(re3, 0.5))) + 0.34
 
      // шаг 8
    const vt4 = 0.0119 * Math.pow(((pl - pg) / pg) * (dm / cd3), 0.5);

    const re4 = 0.0049 * ((pg*dm*vt4)/m)

    const cd4 = (24/re4) + (3/(Math.pow(re4, 0.5))) + 0.34

    // шаг 9
    const vt5 = 0.0119 * Math.pow(((pl - pg) / pg) * (dm / cd4), 0.5);

    const re5 = 0.0049 * ((pg*dm*vt5)/m)

    const cd5 = (24/re5) + (3/(Math.pow(re5, 0.5))) + 0.34

    // шаг 10
    const vt6 = 0.0119 * Math.pow(((pl - pg) / pg) * (dm / cd5), 0.5);

    const re6 = 0.0049 * ((pg*dm*vt6)/m)

    const cd6 = (24/re6) + (3/(Math.pow(re6, 0.5))) + 0.34

    // шаг 11
    const d = 5040 * (((to+460)*z*qg)/po) * Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5)


    const s1 = (((to+460)*z*qg)/po)
    const s2 = Math.pow(((pg/(pl-pg))*(cd6/dm)), 0.5)

    console.log({s1, s2})

    //шаг 12 считаем  все h
    var rt3 = 3
    var dt3 = 24
    const h324 = (rt3*(qo+qw))/(0.12*Math.pow(dt3, 2))
    document.getElementById("h324").innerText = h324.toFixed(2);
    var dt3 = 30  
    const h330 = (rt3*(qo+qw))/(0.12*Math.pow(dt3,2))
    document.getElementById("h330").innerText = h330.toFixed(2);
    var dt3 = 36
    const h336 = (rt3*(qo+qw))/(0.12*Math.pow(dt3,2))
    document.getElementById("h336").innerText = h336.toFixed(2);
    var dt3 = 42
    const h342 = (rt3*(qo+qw))/(0.12*Math.pow(dt3,2))
    document.getElementById("h342").innerText = h342.toFixed(2);
    var dt3 = 48
    const h348 = (rt3*(qo+qw))/(0.12*Math.pow(dt3,2))
    document.getElementById("h348").innerText = h348.toFixed(2);

    const l324 = (h324 + 76)/12
    document.getElementById("l324").innerText = l324.toFixed(2);
    const l330 = (h330 +76)/12
    document.getElementById("l330").innerText = l330.toFixed(2);
    const l336 = (h336+76)/12
    document.getElementById("l336").innerText = l336.toFixed(2);
    const l342 = (h342+76)/12
    document.getElementById("l342").innerText = l342.toFixed(2);
    const l348 = (h348 +76)/12
    document.getElementById("l348").innerText = l348.toFixed(2);

    const s324 = (12*l324)/24
    document.getElementById("s324").innerText = s324.toFixed(2);
    const s330 = (12*l330)/30
    document.getElementById("s330").innerText = s330.toFixed(2);
    const s336 = (12*l336)/36
    document.getElementById("s336").innerText = s336.toFixed(2);
    const s342 = (12*l342)/42
    document.getElementById("s342").innerText = s342.toFixed(2);
    const s348 = (12*l348)/48
    document.getElementById("s348").innerText = s348.toFixed(2);
    
  

    var rt2 = 2
    var dt2 = 24
    const h224 = (rt2*(qo+qw))/(0.12*Math.pow(dt2,2))
    document.getElementById("h224").innerText = h224.toFixed(2);
    dt2 = 30
    const h230 = (rt2*(qo+qw))/(0.12*Math.pow(dt2,2))
    document.getElementById("h230").innerText = h230.toFixed(2);
    dt2 = 36
    const h236 = (rt2*(qo+qw))/(0.12*Math.pow(dt2,2))
    document.getElementById("h236").innerText = h236.toFixed(2);
    dt2 = 42
    const h242 = (rt2*(qo+qw))/(0.12*Math.pow(dt2,2))
    document.getElementById("h242").innerText = h242.toFixed(2);

    const l224 = (h224 + 76)/12
    document.getElementById("l224").innerText = l224.toFixed(2);
    const l230 = (h230 +76)/12
    document.getElementById("l230").innerText = l230.toFixed(2);
    const l236 = (h236+76)/12
    document.getElementById("l236").innerText = l236.toFixed(2);
    const l242 = (h242+76)/12
    document.getElementById("l242").innerText = l242.toFixed(2);


    const s224 = (12*l224)/24
    document.getElementById("s224").innerText = s224.toFixed(2);
    const s230 = (12*l230)/30
    document.getElementById("s230").innerText = s230.toFixed(2);
    const s236 = (12*l236)/36
    document.getElementById("s236").innerText = s236.toFixed(2);
    const s242 = (12*l242)/42
    document.getElementById("s242").innerText = s242.toFixed(2);
   
    

    rt1 = 1
    dt1 = 24
    const h124 = (rt1*(qo+qw))/(0.12*Math.pow(dt1,2))
    document.getElementById("h124").innerText = h124.toFixed(2);
    dt1 = 30
    const h130 = (rt1*(qo+qw))/(0.12*Math.pow(dt1,2))
    document.getElementById("h130").innerText = h130.toFixed(2);
    dt1 = 36
    const h136 = (rt1*(qo+qw))/(0.12*Math.pow(dt1,2))
    document.getElementById("h136").innerText = h136.toFixed(2);

    const l124 = (h124 + 76)/12
    document.getElementById("l124").innerText = l124.toFixed(2);
    const l130 = (h130 +76)/12
    document.getElementById("l130").innerText = l130.toFixed(2);
    const l136 = (h136+76)/12
    document.getElementById("l136").innerText = l136.toFixed(2);
  

    const s124 = (12*l124)/24
    document.getElementById("s124").innerText = s124.toFixed(2);
    const s130 = (12*l130)/30
    document.getElementById("s130").innerText = s130.toFixed(2);
    const s136 = (12*l136)/36
    document.getElementById("s136").innerText = s136.toFixed(2);
 
  //  const sresult = [];

  //  sresult.push(s324, s330, s336, s342, s348, s224, s230, s236, s242, s124, s130, s136);

  //  const filteredNumbers = sresult.filter(num => {
  //   console.log("Checking number:", num);
  //   return num < 4;
  //   });

  //  const resultDiv = document.getElementById("result");
  //  resultDiv.textContent = `${filteredNumbers.join(", ")}`;

    
      
   


    // Display the result
    resultDisplay.textContent = d;
});
