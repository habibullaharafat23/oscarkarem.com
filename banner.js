@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

:root{
    /* font sizes */
    --cookieHeadlineFontSize: 15px;
    --cookieHeadlineFontWeight: 700;

    --cookieDescriptionFontSize: 13px;
    --cookieDescriptionFontWeight: 500;
    --cookieDescriptionLineHeight: 22px;
    --buttonFontSize: 14px;

    --cookieTotalFontSize: 11px;

    --bannerFont: "Aria", sans-serif;

    --cookieHeadlineColor: rgb(20, 20, 20);
    --cookieDescriptionColor: rgb(4, 5, 9);


    --bannerAccentColor: rgb(36, 36, 36);
    --bannerColorWhite: rgb(255, 255, 255);


    --mainCookieBgColor: rgb(242, 242, 242);
    --InsideBorderColor: rgb(217, 217, 217);

    --noCookieFontSize: 12px;

    --cookieValueWeight: 400;

    --cookieTotalColor: white;

    --normalButtonColor: rgb(20, 20, 20);
    --activeButtonHoveColor: white;
}


/* optional */
.bannerHeadlineLogo img {
    background: white;
    border-radius: 5px;
}

.cookieValue {
    font-weight: var(--cookieValueWeight);
    color: var(--cookieDescriptionColor);
}

.rotate{
    transform: rotate(180deg);
}


/* for banner global headlines */
.cookieHeadline{
    font-size: var(--cookieHeadlineFontSize) !important;
    color: var(--cookieHeadlineColor) !important;
    font-family: var(--bannerFont) !important;
    font-weight: var(--cookieHeadlineFontWeight) !important;
    display: block !important;
}

/* for banner global descriptions */
.cookieDescription{
    font-size: var(--cookieDescriptionFontSize) !important;
    color: var(--cookieDescriptionColor) !important;
    font-family: var(--bannerFont);
    font-weight: var(--cookieDescriptionFontWeight) !important;
    line-height: var(--cookieDescriptionLineHeight) !important;
}

.mainCookieDescription{
    font-size: var(--cookieDescriptionFontSize) !important;
    color: var(--cookieDescriptionColor) !important;
    font-family: var(--bannerFont);
    font-weight: var(--cookieDescriptionFontWeight) !important;
    line-height: var(--cookieDescriptionLineHeight) !important;
}

/* main banner box */
.cookieBannerWrapper{
    width: 700px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    border-radius: 10px;
    background: var(--bannerColorWhite);
    animation: opacity 0.5s;
    display: none;
    z-index: 99999;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}


.smallBanner {
    display: none;
    grid-template-columns: 2.5fr 1fr;
    column-gap: 20px;
    width: 815px;
    position: fixed;
    padding: 25px;
    bottom: 20px;
    left: 20px;
    box-shadow: rgba(36, 36, 36, 0.15) 0px 0px 10px 0px;
    font-family: var(--bannerFont);
    font-size: 14px;
    line-height: 22px;
    background: var(--bannerColorWhite) !important;
    color: var(--cookieHeadlineColor) !important;
    z-index: 111;
}

.smallbanernotics a{
    color: var(--cookieHeadlineColor);
}

.smallbannerbuttons{
    display: flex;
    flex-direction: column;
    row-gap: 7px;
}

.smallbannerbuttons button {
    flex-grow: 1;
    cursor: pointer;
    border: 1px solid rgba(36, 36, 36, 0.3)  ;
    outline: none;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    background: white !important;
    font-weight: 600;
    color: black !important;
}

.smallbannerbuttons .accept{
    background: black !important;
    color: white !important;
}

.cross svg {
    width: 18px;
}

/* banner logo */
.bannerHeadlineLogo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(217, 217, 217);
}

.bannerHeadlineLogo svg{
    cursor: pointer;
}

/* banner nav */
.bannerSectionHeadlineWrapper{
    display: none;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid var(--InsideBorderColor);
}

.bannerSectionHeadlineWrapper div{
    width: 100%;
    text-align: center;
    border: var(--InsideBorderColor);
    padding: 20px 0px;
    cursor: pointer;
    display: flex !important;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
}

/* activating border bottom on the nav click */
.activeHeadlineBorder{
    border-bottom: 2px solid var(--bannerAccentColor) !important;
}

/* middle section banner content */
.bannerContent{
    padding: 10px 0px;
    border: var(--textBorder);
    display: none;
}

.cookieInfoSection{
    overflow-y: scroll;
    height: 30vh;
    border-top: 1px solid #e9e9e9;
    padding-top: 15px;
}

/* handle content section hide and show */
.bannerContentActive{
    display: flex;
}

.bannerContentInactive{
    display: none;
}


/* banner bottom buttons */
.bannerBottomSectionWrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 20px;
    padding-top: 25px;
/*     box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */
    border-top: 1px solid var(--InsideBorderColor);
}

.bannerBottomSectionWrapper button{
    width: 100%;
    font-size: var(--buttonFontSize);
    font-family: var(--bannerFont);
    padding: 15px 0px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    background: var(--bannerColorWhite);
    transition: background 0.3s, color 0.3s;
    border: 1px solid var(--bannerAccentColor);
    color: var(--normalButtonColor);
}

.bannerBottomSectionWrapper .active{
    background: var(--bannerAccentColor);
    color: var(--activeButtonHoveColor);
}

.bannerBottomSectionWrapper .active:hover{
    background: var(--bannerAccentColor);
    color: var(--activeButtonHoveColor);
    opacity: 0.9;
}

.bannerBottomSectionWrapper button:hover{
    background: var(--bannerAccentColor);
    color: var(--activeButtonHoveColor);
}

.visibleFlex{
    display: flex;
}


.cookieSectionWrapper{
    display: flex;
    flex-direction: column;
    margin-top: -20px;
    padding: 0px 10px;
}

.cookieCategoryWrapper{
    border-bottom: 1px solid var(--InsideBorderColor);
    padding-bottom: 20px;
    padding-top: 20px;
}

.cookieCategoryTitle{
    display: flex;
    justify-content: space-between;
    row-gap: 20px;
    margin-bottom: 10px;
    cursor: pointer;
}

.cookieCategoryTitleLeft{
    display: flex;
    align-items: center;
    column-gap: 8px;
    width: 50%;
}

.arrowDown #SVGRepo_iconCarrier path{
    fill: var(--cookieHeadlineColor);
}

.cookietotal{
    background: var(--bannerAccentColor);
    color: var(--cookieTotalColor) !important;
    border-radius: 50%;
    font-size: var(--cookieTotalFontSize) !important;
    height: 18px;
    width: 18px;
    display: flex !important;
    align-items: center;
    justify-content: center;
}


.allCookieDetails{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.displayNone{
    display: none !important;
}

.displayBlock{
    display: block;
}

.displayFlex{
    display: flex;
}

.allCookieWrapperTitle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
}

.allCookiesWrapper{
    padding: 20px;
    border: 1px solid var(--InsideBorderColor);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    animation: opacity 0.5s ;
}

@keyframes opacity {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

.allCookieTitleLeft{
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    align-items: center;
    width: 50%;
}

.cookieProviderLearnMore{
    display: flex;
    column-gap: 10px;
    align-items: center;
}

.cookieProviderLearnMore a{
    text-decoration: underline;
    color: var(--bannerAccentColor) !important;
}

.cookieProviderLearnMore a:hover{
    text-decoration: none;
}

.cookieProviderLearnMore svg *{
    fill: var(--cookieHeadlineColor);
    stroke: var(--cookieHeadlineColor)
}


.mainCookiesDetails{
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
}

.mainCookieWrapper{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;
    border-radius: 10px;
    font-family: var(--bannerFont);
    background-color: var(--mainCookieBgColor);
}

.bannerhr{
    border-top: 1px solid var(--InsideBorderColor);
}


.allCookiesOuter {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 15px;
}

/* toggle */
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 5px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: var(--bannerAccentColor);
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
/*     -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px); */
    transform: translateX(26px);
    left: -3px;
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }


/* width */
::-webkit-scrollbar {
    width: 3px;
}
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--bannerColorWhite); 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--bannerAccentColor);
    border-radius: 10px;
  }

.miniCookieIcon{
    display: none;
    position: fixed;
    bottom: 10px;
    left: 10px;
    background-color: var(--bannerColorWhite);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    /* animation: fromBottom 0.5s; */
    animation: opacity 0.5s;
    z-index: 99999;
}

@keyframes fromBottom {
    from{
        bottom: -100px;
    }to{
        bottom: 10px;
    }
}

.miniCookieIcon svg{
    fill: var(--bannerAccentColor);
    width: 50px;
    border: 2px solid var(--bannerAccentColor);
    border-radius: 50%;
    cursor: pointer;
}

.NoCookieWarning{
    padding: 20px;
    border-radius: 10px;
    font-family: var(--bannerFont);
    background-color: var(--mainCookieBgColor);
    font-size: var(--noCookieFontSize);
}


.NoCookieWarning span{
    color: var(--cookieHeadlineColor) !important;
    font-family: var(--bannerFont) !important;
    font-weight: var(--cookieHeadlineFontWeight) !important;
    display: block !important;
}

.bannerLoader {
    position: fixed;
    width: 50px;
    height: 50px;
    border: 5px solid var(--mainCookieBgColor);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-bottom-color: var(--bannerAccentColor);
    border-radius: 50%;
    z-index: 10;
    display: none;
    animation: loader 1s linear infinite;
    transform-origin: center; /* Ensures rotation is centered */
}

.darkModeWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.darkModeWrapper svg{
    fill: var(--cookieHeadlineColor);
}

div#dark svg {
    width: 28px;
    margin-right: -5px;
}

@keyframes loader {
    from {
        transform: translate(-50%, -50%) rotate(0deg); /* Maintain initial position */
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg); /* Maintain initial position */
    }
}

.blur{
    filter: blur(1px);
}

/* medias */
/* medias */
@media only screen and (max-width: 900px) {
    .cookieBannerWrapper{
        width: 90%;
        border: 1px solid #a7a7a7;
    }
}

@media only screen and (max-width: 600px) {
    .bannerBottomSectionWrapper{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
}

@media only screen and (max-width: 500px) {

    .NoCookieWarning{
        padding: 15px;
    }

    :root{
        --cookieHeadlineFontSize: 12px;
        --cookieDescriptionFontSize: 10px;
        --cookieTotalFontSize: 10px;
        --noCookieFontSize: 13px;
        --buttonFontSize: 10px;
        --noCookieFontSize: 11px;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 25px;
    }

    input:checked + .slider:before {
        transform: translateX(26px);
        left: -9px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 5px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
      }
      
}

@media only screen and (max-width: 760px) {
    .smallBanner {
        display: none;
        width: 90%;
    }
}

@media only screen and (max-width: 580px) {
    .smallBanner {
        display: none;
        grid-template-columns: 1fr;
        /* left: 10px; */
        /* right: 10px; */
        row-gap: 10px;
        position: fixed;
        left: 1%;
    }

    .smallbannerbuttons button{
        padding: 10px;
    }
    
}
