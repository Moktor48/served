

const calBuild = () => {
    const nD = new Date();
    nD.setDate(1);
    const dayOfWeek = nD.getDay(); 
    const lastDay = new Date();
    let y = lastDay.getMonth();
    y++;
    lastDay.setMonth(y);
    lastDay.setDate(0);
    let z = lastDay.getDate();
    let x = dayOfWeek + z;
    a = 0;
    for (let i = dayOfWeek; i < x; i++) {
        a++
        document.getElementById(i).innerHTML = a;
    };
};

