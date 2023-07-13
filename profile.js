@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&family=Rubik&family=Ysabeau+SC:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati&family=Raleway&family=Rubik&family=Ysabeau+SC:wght@300&display=swap');


@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }

 }

 @keyframes bounce {
	0%, 20%, 50%, 80%, 100%{transform: translateY(0);}
	40%{
		transform: translateY(-15px)
	}
	60%{
		transform: translateY(30px)
	}
 }

 @keyframes slideOutFromLeft {
	0%{
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-100%);
	}
	
 }

@keyframes slideInFromRight{
	0% {
		transform: translateX(200%);
	}
	100%{
		transform: translateX(0%);
	}
}

@keyframes slideOutFromRight {
	0%{
		transform: translateX(0%);
	}
	100% {
		transform: translateX(200%);
	}
	
 }

@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}


@keyframes fadeOut {
   0% {opacity: 1;}
   100% {opacity: 0;} 
} 

@keyframes fadeIn {
   0% {opacity: 0;}
   100% {opacity: 1;} 
} 

@keyframes slideInFromBottom {
	0%{
		transform: translateY(100%)
	} 100% {
		transform: translateY(0%);
	}
}

@keyframes slideOutFromBottom{
	0%{
		transform: translateY(0%)
	} 100% {
		transform: translateY(100%);
	}
	
}
	
body{
	display: flex;
	width: 100vw;
	margin: 0;
	background-color: #868B8E;
	overflow-y: hidden;
}

#nav-bar{
	padding: 1%;
	position: fixed;
	width: 100vw;
	height:auto;
	margin: 0;
	z-index:2;
}

#nav-menu-button{
	font-size: 2vw;
	z-index: 2;
}

#nav-title{
	width: 30%;
	height:inherit;
	font-family: "Bebas Neue", sans-serif;
	color: white;
	margin-left: 5%;
	letter-spacing: 5px;
}

#nav-menu-button:hover{
	cursor:pointer;
	color:black !important;
	transition: .4s ease-in;

}

#nav-title{
	font-size: 2vw; 
	z-index: -1 !important;
}

#code-icons, #engineer-icons, #space-icons, #math-icons, #about-icons, #contact-icons{
	font-size: 2vw;
	margin-left:3%;
	padding: 1%;
	z-index:2 !important;
}

#code-icons:hover, #engineer-icons:hover, #space-icons:hover, #math-icons:hover, #about-icons:hover, #contact-icons:hover{
	background-color: white;
	border-radius: 50%;
	transition: .4s ease-in;
}

hr{
	border-width: 3px;
	z-index: -1 !important;
}


#nav-menu-block{ 
	position: absolute;
	background-color: whitesmoke;
	width: fit-content;
	height: 100vh;
	overflow-x:hidden !important;
	padding: 1.5%;
	font-family: "Bebas Neue", sans-serif;
	z-index: 5;
}

.nav-menu-options{
	color:black;
	min-width: 20vw;
	height: auto;
	margin-bottom: 2%;
	border-bottom: 2px black solid;
	letter-spacing: 5px;
	padding: 1%;

}

.nav-menu-options:hover{
	padding:2%;
	background-color: black;
	color:white;
	transition: .4s ease-in-out;
	cursor: pointer;
}

#nav-menu-close-button{
	position: relative;
	top:0;
	font-size: 200%;
	color: #E7D2CC;
	margin-left: 90%;
	margin-top: 5%
}

#nav-menu-close-button:hover{
	color:black;
	padding: 1%;
	transition: .4s ease-in;
	cursor: pointer;
}

#main-box{
	width: fit-content;
	height: fit-content;
	position: absolute;
	left:0;
	right:0;
	top: 0;
	bottom:0;
	margin:auto;
	z-index: -1;
}

#main-title{
	display: inline-block;
	color: #E7D2CC;
	font-size: 10vw;
	font-family: "Bebas Neue", sans-serif;
	width: fit-content;
	height: fit-content;
	letter-spacing: 8px;
	position: absolute;
	margin-left: -10%;

}

#main-profile-picture{
	display: inline-block;
	background-color: #B9B7BD;
	width: 30vw;
	height: 30vw;
	box-shadow: 20px 20px #EEEDE7;
}


#code-box, #space-box, #math-box, #engineer-box, #about-box, #contact-box{
	background-color: #E2DED0;
	color: #4E4F50;
	font-size: 110%;
	width: 100vw;
	z-index: 4;
	height: fit-content;
	position:absolute;
	bottom: 0;
	display: none;
}


#code-box_arrow, #math-box_arrow, #space-box_arrow, #engineer-box_arrow, #about-box_arrow, #contact-box_arrow{
	color:black;
	font-size: 2vw;
	position: absolute;
	top: 0;
	left: 50%;
	margin-top: 2%;
}

#code-box_arrow:hover, #math-box_arrow:hover, #space-box_arrow:hover, #engineer-box_arrow:hover, #about-box_arrow:hover, #contact-box_arrow:hover{
	font-size: 2.5vw;
	transition: .4s ease-in;
}

#contact-box_form{
	width: 100%;
	height: 40vh;
	font-family: "Bebas Neue", sans-serif;
}

.contact-box_form_name_email, #contact-box_form_message{
	background-color: #B0C9B8;
	padding: 5%;
	margin: 3%;
	border:none;
	height: auto;
	width: 50vw;
	box-shadow: 3px 3px black;
	color: black;
	font-family: "Bebas Neue", sans-serif;
	letter-spacing: 3px;
}

#submit_contact-box_form{
	background-color: #B0C9B8;
	color:black;
	width: fit-content;
	height: 5vh;
	margin: 3%;
	padding-left: 3%;
	padding-right: 3%;
	padding-top: 1%;
	padding-bottom: 1%;
	border:none;
	font-family: "Bebas Neue", sans-serif;
	letter-spacing:5px;
	font-size: 110%;
	box-shadow: 3px 3px black;
}

.contact-box_form_name_email:hover, #contact-box_form_message:hover,  #submit_contact-box_form:hover{
	box-shadow:none;
	transition: .4s ease-in;
}

#resume_page, #links_page, #projects_page, #research_page{
	position: absolute;
	top:0;
	width: 100vw;
	height: 100vh;
	background-color: #647C90;
	z-index: 1;
	display: none;
}

::placeholder{
	color:black;
	letter-spacing: 3px;
}

#projects_page{
	overflow-y: scroll !important;
	overflow-x: hidden;
}

.icon-box{
	font-size: 10vw !important;
	position:relative;
	left: 0;
	top: 45%;
	margin-left: 5%;
}

.icon_text_box{
	margin-left: 5%;
	margin-top: auto;
	margin-bottom: auto;
	padding: 2%;
	border-left: 6px #686361 double;
	font-family: "Bebas Neue", sans-serif;
	letter-spacing: 3.5px;
	font-size: auto;
	display:flow-root;
}


#about{
	font-size: 120%;
}

#resume_frame{
	border: 3px solid black;
	position: absolute;
	left: 0;
	right: 0;
	top: 0; 
	bottom: 0;
	margin: auto;
	width: 60vw;
	height:60vh;
}

#project_details_nanobot_ai, #project_details_python, #project_details_non_profit{
	position: relative;
	top: 12%;
	height: fit-content;
	width: 100vw;
	background-color: #F0D7D9;
	box-shadow: black 10px 10px;
	opacity: .7;
	padding: 1.5%;
	margin-top: 3%;
}

#project_details_python{
	top:16% !important;
}

#project_details_non_profit{
	top: 20% !important;
}


#nanobot-ai-icon, #wordle-icon, #non-profit-icon{
	color: #647C90;
	font-size: 7vw !important;
	display: inline-block;
	
}

#project_text{
	display:inline-block;
	font-family: "Bebas Neue", sans-serif;
	letter-spacing: 3.5px;
	font-size: 105%;
}


#project_hr, #project_hr_2{
	position: relative;
	top: 4%;
	color: slategray;
	box-shadow: none;
	border: solid 3px;
	margin-top: 3%;
	margin-bottom: 3%;
}

#wordle-icon{
	top: 8% !important;
}

#project_hr_2{
	top: 13% !important;
}

#non-profit-icon{
	top: 20% !important;
}

#close_project_arrow{
	position: absolute;
	right: 10%;
	top: 35%; 
	bottom: 0;
	margin: auto 0 auto 0;
	font-size: 3vw !important;
}

#close_project_arrow:hover{
	color: burlywood;
	transform: translateX(30%);
	transition: .4s ease-in;
}

#project_link{
	color:black;
}

#project_link:hover{
	color: #8F8F8C;
	transition: .4s ease-in;
}

#research_text_box{
	position: relative;
	display:inline-block;
	right: 0;
	left: 10%; 
	top:20%;
	bottom:0;
	margin:auto;
	width: 23vw;
	height: fit-content;
	background-color: #FFF9E1;
	padding: 1.5%;
	font-family: "Bebas Neue", sans-serif;
	letter-spacing:6px;
	box-shadow: 10px 10px black;
}

#research_i_frame{
	border: 2px black solid;
	height:40vh;
	width:40vw;
	position: relative;
	left: 20%; 
	right:0;
	top:10%;
	bottom:0;
	margin:auto;

	display: inline-block;
}

#research_link{
	color:black;
}

#research_link:hover{
	color: #8F8F8C;
	transition: .4s ease-in;
}

:{
	background-color: none;
}

::-webkit-scrollbar-track{
	background-color:#4E4F50;
}

@media (max-width: 950px && max-height: 670px){

}
