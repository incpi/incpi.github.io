function init_id() {
    document.body.innerHTML = `<nav class="flex"></nav>
    <div id="loader">
    </div>
    <div id="c-c">
        <section id="index" class="flex fdc" style="display: flex;"></section>
        <section id="home" class="flex fdc" style="display: flex;"></section>
        <section id="contact" class="flex"></section>
        <section id="about" class="flex fdc"></section>
        <section id="tool" class="flex fdc" style="display: flex;"></section>
    </div>
    <footer id="footer"></footer>`
}
function loader() {
    document.querySelector('#loader').innerHTML = `<div class="flex jcc">
    <svg id="B1" viewBox="0 0 142.4 308.4" xmlns="http://www.w3.org/2000/svg">
        <path d="M 71.2,154.2 142.4,30.9 124.6,0 H 89 L 0,154.2 89,308.4 h 35.6 l 17.8,-30.8 z" />
    </svg>
    <svg id="B2" viewBox="0 0 356.1 555" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M 338.3,555.1 356.1,524.3 213.7,277.5 356.1,30.8 338.3,0 H 17.8 L 0,30.8 l 89,154 h 35.6 L 142.4,154 106.8,92.4 124.6,61.6 h 106.8 l 17.8,30.8 -106.8,185 106.8,185 -17.8,30.8 H 124.6 L 106.8,462.4 142.4,400.8 124.6,370 H 89 L 0,524.2 17.8,555 Z" />
    </svg>
    <svg id="B3" viewBox="0 0 142.4 308.2" xmlns="http://www.w3.org/2000/svg">
        <path d="M 53.4,0 H 17.8 L 0,30.8 71.2,154.1 0,277.4 17.8,308.2 h 35.6 l 89,-154.2 z" />
    </svg>
</div>
<p>OmkaR</p><br><span> .... STILL IN DEVELOPMENT .... </span>
<div id="consentc" style="display: none;color:var(--dred)">This website uses <b>local storage & simillar</b>
    technologies, which are a way of storing data on your device without
    sending it to a server. This allows us to improve your browsing experience by remembering your
    preferences and showing you relevant recommendations based on your interests. Your data is safe and
    secure, as it is only stored in your browser and not accessible to us or anyone else. No cookies are
    added in this release, which means we do not collect any information about your online activity or
    behavior. <br> <button id="btn">I Agree</button>
</div>
<div id="btnhome">
    <div class="color"></div>
</div>
`
}
function nav_gen() {
    const navdata = `
    <div class="flex left2" onclick='show("all")'>
            <svg viewBox="0 0 661 575" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 490.7,565.1 508.5,534.3 366.1,287.5 508.5,40.8 490.7,10 170.2,10 l -17.8,30.8 89,154 35.6,-0 17.8,-30.8 -35.6,-61.6 17.8,-30.8 h 106.8 l 17.8,30.8 -106.8,185 106.8,185 -17.8,30.8 H 277.0 l -17.8,-30.8 35.6,-61.6 -17.8,-30.8 -35.600,-0 -89,154.2 17.8,30.8 z" />
                <path d="m 561.9,133.3 h -35.6 l -17.8,30.8 71.2,123.3 -71.2,123.3 17.8,30.8 h 35.6 l 89,-154.2 z" />
                <path d="M 81.2,287.5 152.4,164.2 134.6,133.3 H 99 L 10,287.5 99,441.7 h 35.6 l 17.8,-30.8 z" />
            </svg>
            <span id="_home">OmkaR</span>
        </div>
        <div class="flex jsb end">
            <div id="h_nav">
                <span></span>
                <a  onclick='show("index","_index_link")' class="links  active" id="_index_link">Home</a>
                <a  onclick='show("home","_home_link")' class="links  active" id="_home_link">Tool</a>
                <a  onclick='show("contact","_contact")' class="links" id="_contact">Contact</a>
                <a  onclick='show("about","_abt_link")' class="links" id="_abt_link">About</a>
                <a  onclick='show("tool","_tool_link")' class="links" id="_tool_link">settings</a>
                <span></span>
            </div>
            <button title="Dark/Light Mode" type="button" class="act" id="dark_link">
                <svg id="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z" />
                </svg>
                <svg id="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
            </button>
        </div>
        <div class="flex end" id="end">
            <button id="open" type="button" title="menu_open" onclick='openNav("open","close","0%")' class="act id3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
            </button>
            <button id="close" type="button" title="menu_close" onclick='openNav("close","open","100%")'
                class="act id3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
            </button>
        </div>
    `
    document.querySelector('nav').innerHTML = navdata
}

function index_gen() {
    indexdata =        `
    <div class="flex fdc" style="margin:2%">
        <h1 style="font-size: 2.5rem;margin: 0;font-family:var(--fontdec)">Projects</h1>${project.map((e)=>
            `<div class="container content">
            <div class="phead"><a href=${e.link} class="btn">${e.name}</a></div>
            <p style="display: block;">${e.content}</p>
            </div>`
        ).join("")}
    </div>`
    document.querySelector('#index').innerHTML = indexdata
}
function home_gen() {
    homedata = `
    <input id="path" type="search" placeholder="Enter your Xpath" class="toolbutton">
            <div class="perline">
                <button class="toolbutton" onclick="xmlall()">Submit</button>
                <input style="display: none;" accept="svg,xml/*,.xml,.body" type="file" name="myfile" id="myfile">
                <label id="myfile_btn" for="myfile">Upload File</label>
                <button class="toolbutton" id="Pretify_btn" onclick="premAll();">Pretty All</button>
            </div>
            <div class="perline">
                <span id="xinput" style="color: var(--dgreen);">X-Path Valid</span>
                <span id="Time" style="color: var(--dgreen);">File Valid</span>
                <span id="xmlput" style="color: var(--dgreen);">XML Valid</span>
            </div>
            <div class="perline">
                <span class="label">Input</span>
                <span class="label clock">Time</span>
                <span class="label">Output</span>
            </div>
            <span style="display: none;">Note: <i style="color:var(--dred)">Output tags will be in.
                    <strong>Lower Case </strong>
                    due in web-app.</i></span>
            <div class="editor">
                <textarea class="scroll" data-role="none" id="input" placeholder="Enter your XML data here"
                    style="width: 100%;"></textarea>
                <textarea disabled="" class="scroll" id="output" style="width: 100%"></textarea>
            </div>`
    document.querySelector('#home').innerHTML = homedata
}
// function Project_gen() {
//     Projectdata = `<div id="clcode" class="flex">
//                         Filter :
//                         <span class="active Cube" id="Cube" onclick="time('Cube')">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" />
//                             </svg>
//                             <p>Cube</p>
//                         </span>
//                         <span class="active Code" id="Code" onclick="time('Code')">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
//                                 <path
//                                     d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
//                             </svg>
//                             <p>Code</p>
//                         </span>
//                         <span class="active Mech" id="Mech" onclick="time('Mech')">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
//                                 <path
//                                     d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
//                             </svg>
//                             <p>Mech</p>
//                         </span>
//                         <div onclick="expand('.content.card','0')" class="expand" atr="e">
//                             Expand All
//                         </div>
//                         </div>
//                         <div class="timeline" id="time1">
//                         <div class="container left">
//                             <div class=" card content Cube">
//                                 <div class="phead" onclick="expand('.content.card',0)">
//                                     <div>2021-22</div>
//                                     <div>Material</div>
//                                     <div>Cube</div>
//                                 </div>
//                                 <p>To learn about more realistic renders, started making procedural materials which can be
//                                     edited easily. also learned about UV-maps,textures.</p>
//                             </div>
//                         </div>
//                         <div class="container right">
//                             <div class=" card content Code">
//                                 <div class="phead" onclick="expand('.content.card',1)">
//                                     <div>2021-22</div>
//                                     <div>Discord YT bot</div>
//                                     <div>Code</div>
//                                 </div>
//                                 <p>To explore more, in python programming i started making discord bot.This bot can use scraping
//                                     as well as offical API depening upon laws.
//                                     I made using 2 different versions (1st: discord 2.0 python lib, 2nd: nextcord python lib).
//                                     This project can not use RDBMS. we had to go with NO-SQL DB only.
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="container left">
//                             <div class=" card content Mech">
//                                 <div class="phead" onclick="expand('.content.card',2)">
//                                     <div>2020-22</div>
//                                     <div>Virtual Study</div>
//                                     <div>Mech</div>
//                                 </div>
//                                 <p> At this time i know most of modeling stuff (as Mech. engineer). To upskill my knowledege i
//                                     started doing virtual testing in SolidWorks for motion and FEA study due to COVID-19.</p>
//                             </div>
//                         </div>
//                         <div class="container right">
//                             <div class=" card content  Cube">
//                                 <div class="phead" onclick="expand('.content.card',3)">
//                                     <div>2019-20</div>
//                                     <div>3d 1st project</div>
//                                     <div>Cube</div>
//                                 </div>
//                                 <p>This is my 1st project in blender. which i explored as my flow simulation software. but
//                                     shortly after 1st simulation. learned 3d blender basic modeling started with lowpoly and
//                                     then midpoly mesh Creation</p>
//                             </div>
//                         </div>
//                         <div class="container left">
//                             <div class=" card content Code">
//                                 <div class="phead" onclick="expand('.content.card',4)">
//                                     <div>2018-21</div>
//                                     <div>Variable engine</div>
//                                     <div>Mech</div>
//                                 </div>
//                                 <p>Analysis project, what mathematical challenges as well as mechanical challenages faced while
//                                     developing. which gives complete report based on fact that we achived.</p>
//                             </div>
//                         </div>
//                         <div class="container right">
//                             <div class=" card content Mech">
//                                 <div class="phead" onclick="expand('.content.card',5)">
//                                     <div>2017</div>
//                                     <div>First Project</div>
//                                     <div>Mech</div>
//                                 </div>
//                                 <p>
//                                     Started Mechanical, First Project i started.<wbr>
//                                     start learning about Mechanical Softwares such as SW,Creo,Fusion 360 etc.
//                                 </p>
//                             </div>
//                         </div>
//                         </div>`;
//     document.querySelector('#Project').innerHTML = Projectdata
// }
function contact_gen() {
    contactdata = `${
        contacts.map(e=>`
        <a href=${e.link}>${e.svg}<p>${e.title}</p></a>
        `).join("")
    }`;
document.querySelector('#contact').innerHTML = contactdata
}

function about_gen() {
    aboutdata = `
<span>
                <p>My name is Omkar and I am a mechanical engineer with a full-time consulting role in the IT sector.
                </p>
                <p>I have participated in several design process projects where I performed analysis and used various 3D
                    programs to enhance my skills and knowledge in this field.</p>
                <p> I have a high level of proficiency in 3D software and C programming, as well as other coding
                    languages
                    that I have learned during the Covid-19 pandemic, such as Python, Groovy, JS, HTML, CSS and some
                    RDBMS.</p>
                <p>I am passionate about exploring new technologies and applying them to solve real-world problems.</p>
            </span>
            <div id="list">
                <h1>Skills</h1>
                <span onclick="expand('.slist','0')" class="expand" atr="e">
                    Expand All
                </span><br>
                <div>
                    <div class="slist" onclick="expand('.slist',0)">
                        <div class="list">IT</div>
                        <ul>
                            <li>Coding Languages
                                <ul>
                                    <li>Python</li>
                                    <li>Groovy</li>
                                    <li>HTML, CSS, JS</li>
                                    <li>SQL</li>
                                </ul>
                            </li>
                            <li>SAP Cloud platform Integration (CPI)</li>
                            <li>SAP Process Orchestration (PO)</li>
                            <li>Microsoft                                <ul>
                                    <li>MS Excel</li>
                                    <li>MS SharePoint</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="slist" onclick="expand('.slist',1)">
                        <div class="list">3D Creation</div>
                        <ul>
                            <li>Blender
                                <ul>
                                    <li>Hard-Surf modeling</li>
                                    <li>Material Creation (procedural)</li>
                                    <li>Rigging</li>
                                    <li>Texturing</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="slist" onclick="expand('.slist',2)">
                        <div class="list">Mechanical</div>
                        <ul>
                            <li>Solid works</li>
                            <li>Creo</li>
                            <li>Autodesk fusion 360</li>
                            <li>MATLAB,sci-lab</li>
                        </ul>
                    </div>
                    <div class="slist" onclick="expand('.slist',3)">
                        <div class="list"> FEA </div>
                        <ul>
                            <li>Motion study in SolidWorks</li>
                            <li>Different study
                                <ul>
                                    <li>SolidWorks</li>
                                    <li>Autodesk fusion 360</li>
                                    <li>Ansys</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="slist" onclick="expand('.slist',4)">
                        <div class="list">Hobbies Softwares</div>
                        <ul>
                            <li>Figma</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe PhotoShop</li>
                        </ul>
                    </div>
                </div>
            </div>`; document.querySelector('#about').innerHTML = aboutdata
}
function tool_gen() {
    tooldata = `
<div class="perline editor">
                <label for="dark">Color</label>
                <input class="input-color-picker" type="color" data-id="dark" id="dark" value="#0a1e32">
                <label for="mdark">Hover Color</label>
                <input class="input-color-picker" type="color" data-id="mdark" id="mdark" value="#195a82">
                <label for="light">Background</label>
                <input class="input-color-picker" type="color" data-id="light" id="light" value="#fafafa">
                <label for="mlight">Hover Backgound</label>
                <input class="input-color-picker" type="color" data-id="mlight" id="mlight" value="#7dc8e6">
                <label for="dred">Error Color</label>
                <input class="input-color-picker" type="color" data-id="dred" id="dred" value="#ff0000">
                <label for="dgreen">Valid Color</label>
                <input class="input-color-picker" type="color" data-id="dgreen" id="dgreen" value="#78ff78">
            </div>
            <button style="margin-block:20px ;" class="toolbutton" onclick="resetSave()" type="submit">Reset</button>`;

    document.querySelector('#tool').innerHTML = tooldata
}
function Footer() {
    footer = `<div class="flex jcc">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z" />
            </svg> Copyright : <a href="https://incpi.github.io">incpi.github.io</a>
        </div>`
    document.querySelector('#footer').innerHTML = footer
}
function init() {
    init_id(); loader(); nav_gen(); index_gen(); home_gen(); contact_gen(); about_gen(); tool_gen(); Footer();
}
init()