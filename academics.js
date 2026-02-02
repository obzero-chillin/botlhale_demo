const academicSelect = document.querySelector('#academicSelect');
const topic = document.querySelector('#topic'); // e.g. <h2 id="topic"></h2>
const description = document.querySelector('#acDescription');
const menuButton = document.querySelector("#menuButton");

function toggleMenu(){
    
    const menu = document.querySelector(".navItems");

    menu.classList.toggle("open")
    
   
};
academicSelect.addEventListener("change", () => {
    if (academicSelect.value === "IGCSE") {
        topic.textContent = "IGCSE";
        description.innerHTML = `
            The IGCSE (International General Certificate of Secondary Education) is a globally 
            recognized qualification designed for students aged 14–16. It provides a strong 
            academic foundation that encourages critical thinking, problem-solving, and 
            independent learning.<br><br>

            Offered across a wide range of subjects, the IGCSE curriculum allows students to 
            explore their interests while developing essential knowledge and skills.<br><br>

            Our IGCSE programme follows internationally benchmarked standards and prepares 
            students for further studies such as A Levels, IB Diploma, or other advanced 
            pre-university pathways. Assessment methods include written examinations, coursework, 
            and practical work, ensuring a balanced evaluation of student performance.
        `;
    }else if(academicSelect.value === "A-Levels"){
        topic.textContent = "A-Levels";
        description.innerHTML = `

            The Cambridge International A Levels are internationally respected qualifications 
            designed for students aged 16\–19 who wish to pursue in-depth academic study. 
            They promote independent thinking, advanced subject knowledge, and analytical skills that 
            prepare students for the demands of higher education.<br/><br/>

Our Cambridge A Level programme offers a wide range of subjects, allowing students to specialize in 
areas aligned with their interests and career aspirations. The curriculum is academically rigorous and 
assessed through a combination of examinations and coursework, depending on the subject.<br/><br/>
 Recognized by leading universities worldwide, Cambridge A Levels equip students with the confidence, academic maturity, 
and global perspective needed to succeed at university and beyond.

        
        
        
        `
    }
});

