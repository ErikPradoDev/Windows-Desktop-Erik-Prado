import React from "react";
import '../styles/components/startMenu.sass';
import '../styles/components/startMenu.css';
import Mail from '../img/mail.png'
import Txt from '../img/txt.png'

export default function StartMenu(){
    return(
        <div id="startMenu">
        <div id="fPart">
            <section id="search">
                <input type="search" name="" id="" placeholder="Type here to search" />
                <svg className="svgAbsolute" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_190_206)">
<path d="M16.2131 10.5601C11.5098 10.5601 7.6798 14.3901 7.6798 19.0934C7.6798 21.1367 8.39647 23.0101 9.5998 24.4801L2.7998 31.2801L4.02647 32.5067L10.8265 25.7067C12.2965 26.9101 14.1698 27.6267 16.2131 27.6267C20.9165 27.6267 24.7465 23.7967 24.7465 19.0934C24.7465 14.3901 20.9165 10.5601 16.2131 10.5601ZM16.2131 12.2667C19.9931 12.2667 23.0398 15.3134 23.0398 19.0934C23.0398 22.8734 19.9931 25.9201 16.2131 25.9201C12.4331 25.9201 9.38647 22.8734 9.38647 19.0934C9.38647 15.3134 12.4331 12.2667 16.2131 12.2667Z" fill="#0084FF"/>
</g>
<defs>
<clipPath id="clip0_190_206">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

            </section>
            <section id="pinned">
                <div className="lineTitle">
                    <p> Pinned </p>
                    <button> All apps <span>&gt;</span></button>
                </div>
                <div id="lineIcons">
                <a href="https://search.brave.com/" target="_blank">
    <div class="cardIconSize">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#ff651f" d="M41,13l1,4l-4.09,16.35c-0.59,2.35-2.01,4.41-4.01,5.79l-8.19,5.68c-0.51,0.36-1.11,0.53-1.71,0.53	c-0.6,0-1.2-0.17-1.71-0.53l-8.19-5.68c-2-1.38-3.42-3.44-4.01-5.79L6,17l1-4l-1-2l3.25-3.25c1.05-1.05,2.6-1.44,4.02-0.99	c0.04,0.01,0.07,0.02,0.1,0.03L14,7l4-4h12l4,4l0.65-0.22c0.83-0.28,1.7-0.27,2.5,0c0.58,0.19,1.13,0.51,1.58,0.95	c0.01,0.01,0.01,0.01,0.02,0.02L42,11L41,13z"></path><path fill="#f4592b" d="M38.73,7.73L33,11l-9,2l-9-3l-2.07-2.07c-0.56-0.56-1.41-0.74-2.15-0.44L8.67,8.33l0.58-0.58	c1.05-1.05,2.6-1.44,4.02-0.99c0.04,0.01,0.07,0.02,0.1,0.03L14,7l4-4h12l4,4l0.65-0.22c0.83-0.28,1.7-0.27,2.5,0	C37.73,6.97,38.28,7.29,38.73,7.73z"></path><path fill="#fff" d="M32.51,23.49c-0.3,0.3-0.38,0.77-0.19,1.15l0.34,0.68c0.22,0.45,0.34,0.94,0.34,1.44	c0,0.8-0.29,1.57-0.83,2.16l-0.66,0.74c-0.32,0.21-0.72,0.23-1.04,0.05l-5.23-2.88c-0.59-0.4-0.6-1.27-0.01-1.66l3.91-2.66	c0.48-0.28,0.63-0.89,0.35-1.37l-1.9-3.16C27.28,17.46,27.45,17.24,28,17l6-3h-5l-3,0.75c-0.55,0.14-0.87,0.7-0.72,1.24l1.46,5.09	c0.14,0.51-0.14,1.05-0.65,1.22l-1.47,0.49c-0.21,0.07-0.41,0.11-0.62,0.11c-0.21,0-0.42-0.04-0.63-0.11l-1.46-0.49	c-0.51-0.17-0.79-0.71-0.65-1.22l1.46-5.09c0.15-0.54-0.17-1.1-0.72-1.24L19,14h-5l6,3c0.55,0.24,0.72,0.46,0.41,0.98l-1.9,3.16	c-0.28,0.48-0.13,1.09,0.35,1.37l3.91,2.66c0.59,0.39,0.58,1.26-0.01,1.66l-5.23,2.88c-0.32,0.18-0.72,0.16-1.04-0.05l-0.66-0.74	C15.29,28.33,15,27.56,15,26.76c0-0.5,0.12-0.99,0.34-1.44l0.34-0.68c0.19-0.38,0.11-0.85-0.19-1.15l-4.09-4.83	c-0.83-0.99-0.94-2.41-0.26-3.51l3.4-5.54c0.27-0.36,0.75-0.49,1.17-0.33l2.62,1.05c0.48,0.19,0.99,0.29,1.49,0.29	c0.61,0,1.23-0.14,1.79-0.42c0.75-0.38,1.57-0.57,2.39-0.57s1.64,0.19,2.39,0.57c1.03,0.51,2.22,0.56,3.28,0.13l2.62-1.05	c0.42-0.16,0.9-0.03,1.17,0.33l3.4,5.54c0.68,1.1,0.57,2.52-0.26,3.51L32.51,23.49z"></path><path fill="#fff" d="M29.51,32.49l-4.8,3.8c-0.19,0.19-0.45,0.29-0.71,0.29s-0.52-0.1-0.71-0.29l-4.8-3.8	c-0.24-0.24-0.17-0.65,0.13-0.8l4.93-2.47c0.14-0.07,0.29-0.1,0.45-0.1s0.31,0.03,0.45,0.1l4.93,2.47	C29.68,31.84,29.75,32.25,29.51,32.49z"></path><path fill="#ed4d01" d="M41,13l1,4l-4.09,16.35c-0.59,2.35-2.01,4.41-4.01,5.79l-8.19,5.68c-0.51,0.36-1.11,0.53-1.71,0.53	V10.36L25,12h7v-2l5.15-3.22c0.59,0.19,1.15,0.52,1.6,0.97L42,11L41,13z"></path><path fill="#f5f5f5" d="M32.51,23.49c-0.3,0.3-0.38,0.77-0.19,1.15l0.34,0.68c0.22,0.45,0.34,0.94,0.34,1.44	c0,0.8-0.29,1.57-0.83,2.16l-0.66,0.74c-0.32,0.21-0.72,0.23-1.04,0.05l-5.23-2.88c-0.59-0.4-0.6-1.27-0.01-1.66l3.91-2.66	c0.48-0.28,0.63-0.89,0.35-1.37l-1.9-3.16C27.28,17.46,27.45,17.24,28,17l6-3h-5l-3,0.75c-0.55,0.14-0.87,0.7-0.72,1.24l1.46,5.09	c0.14,0.51-0.14,1.05-0.65,1.22l-1.47,0.49c-0.21,0.07-0.41,0.11-0.62,0.11V9.63c0.82,0,1.64,0.19,2.39,0.57	c1.03,0.51,2.22,0.56,3.28,0.13l2.62-1.05c0.42-0.16,0.9-0.03,1.17,0.33l3.4,5.54c0.68,1.1,0.57,2.52-0.26,3.51L32.51,23.49z"></path><path fill="#f5f5f5" d="M29.51,32.49l-4.8,3.8c-0.19,0.19-0.45,0.29-0.71,0.29v-7.46c0.16,0,0.31,0.03,0.45,0.1l4.93,2.47	C29.68,31.84,29.75,32.25,29.51,32.49z"></path>
                </svg>
            <p class="textCenter"> Brave </p>
    </div>
    </a>
    <a href="https://www.chess.com/member/lelrikpc" target="_blank">
    <div class="cardIconSize">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <linearGradient id="UpcASOqyHrPhCm1EGzxHba_5l29cBQpcOxR_gr1" x1="12.014" x2="30.756" y1="23.537" y2="42.279" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#25b03b"></stop><stop offset=".288" stop-color="#22a637"></stop><stop offset=".774" stop-color="#188c2b"></stop><stop offset="1" stop-color="#137d25"></stop></linearGradient><path fill="url(#UpcASOqyHrPhCm1EGzxHba_5l29cBQpcOxR_gr1)" d="M28.001,19h-8.002c0,16.944-10,9.713-10,23c0,0,0.546,2,14.001,2c13.455,0,14.001-2,14.001-2 C38.001,28.713,28.001,35.944,28.001,19z"></path><linearGradient id="UpcASOqyHrPhCm1EGzxHbb_5l29cBQpcOxR_gr2" x1="14.65" x2="31.973" y1="4.694" y2="22.017" gradientUnits="userSpaceOnUse"><stop offset=".425" stop-color="#25b03b"></stop><stop offset=".632" stop-color="#20a135"></stop><stop offset="1" stop-color="#137d25"></stop></linearGradient><path fill="url(#UpcASOqyHrPhCm1EGzxHbb_5l29cBQpcOxR_gr2)" d="M28.289,15.524 C29.936,14.243,31,12.248,31,10c0-3.866-3.134-7-7-7s-7,3.134-7,7c0,2.248,1.064,4.243,2.711,5.524 c-1.229,0.826-2.459,1.652-3.689,2.478c0.03,0.428,0.113,0.997,0.332,1.634c0.197,0.573,0.446,1.032,0.663,1.371l6.984-0.01 l6.981,0.01c0.217-0.339,0.466-0.798,0.663-1.371c0.219-0.637,0.302-1.206,0.332-1.634C30.748,17.176,29.519,16.35,28.289,15.524z"></path><path fill="#4ddb63" d="M24.683,4.727c0.372,0.973-0.526,2.556-2.006,3.536c-1.48,0.979-2.982,0.984-3.354,0.011 s0.526-2.556,2.006-3.536S24.31,3.753,24.683,4.727z"></path>
                </svg>
            <p class="textCenter"> Chess.com </p>
    </div>
    </a>

    <a href="https://github.com/ErikPradoDev" target="_blank">
    <div class="cardIconSize">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <linearGradient id="rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1" x1="4" x2="44" y1="23.508" y2="23.508" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c4c4c"></stop><stop offset="1" stop-color="#343434"></stop></linearGradient><path fill="url(#rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"></path><path d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z" opacity=".05"></path><path d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z" opacity=".07"></path><path fill="#fff" d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"></path>
                </svg>
            <p class="textCenter"> GitHub </p>
    </div>
    </a>
    <a href="https://www.linkedin.com/in/erik-prado-085402269/" target="_blank">
    <div class="cardIconSize">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                </svg>
            <p class="textCenter"> LinkedIn </p>
    </div>
    </a>
    <a href="mailto:erikpcdev@gmail.com">
    <div class="cardIconSize">
    <img className="imgSize" width='35px' height='35px' src={Mail} alt="Mail" />
            <p class="textCenter"> Mail </p>
    </div>
    </a>
                </div>
                <div id="lineIcons">
                <div class="cardIconSize">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <linearGradient id="sYkP-pvQRBi-D-7I2ZY-za_eGEJAMsRjpTN_gr1" x1="10" x2="39" y1="42.114" y2="42.114" gradientUnits="userSpaceOnUse"><stop offset=".462" stop-color="#c4c4c4"></stop><stop offset=".546" stop-color="#cdcdcd"></stop><stop offset=".635" stop-color="#808991"></stop></linearGradient><path fill="url(#sYkP-pvQRBi-D-7I2ZY-za_eGEJAMsRjpTN_gr1)" d="M39,39.64v1.416c0,0.422-0.266,0.799-0.663,0.942L27.97,45.703	c-0.629,0.225-1.314,0.233-1.949,0.024l-15.334-5.051C10.277,40.541,10,40.158,10,39.727V38.35l17,5.6L39,39.64z"></path><linearGradient id="sYkP-pvQRBi-D-7I2ZY-zb_eGEJAMsRjpTN_gr2" x1="6" x2="43.7" y1="24.32" y2="24.32" gradientUnits="userSpaceOnUse"><stop offset=".529" stop-color="#e6e6e6" stop-opacity=".7"></stop><stop offset=".577" stop-color="#b5b5b5" stop-opacity=".7"></stop></linearGradient><polygon fill="url(#sYkP-pvQRBi-D-7I2ZY-zb_eGEJAMsRjpTN_gr2)" points="27,16 6,9 10,38.35 22.18,34.22 27,35.77 39,39.64 43.7,10.4"></polygon><linearGradient id="sYkP-pvQRBi-D-7I2ZY-zc_eGEJAMsRjpTN_gr3" x1="6" x2="43.7" y1="9.645" y2="9.645" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#b5b5b5" stop-opacity=".6"></stop><stop offset=".471" stop-color="#e6e6e6" stop-opacity=".5"></stop></linearGradient><polygon fill="url(#sYkP-pvQRBi-D-7I2ZY-zc_eGEJAMsRjpTN_gr3)" points="43.7,10.4 27,16 6,9 22.18,3.29"></polygon><linearGradient id="sYkP-pvQRBi-D-7I2ZY-zd_eGEJAMsRjpTN_gr4" x1="10" x2="39" y1="39.085" y2="39.085" gradientUnits="userSpaceOnUse"><stop offset=".55" stop-color="#d5d8dc"></stop><stop offset=".615" stop-color="#bcbcbc"></stop></linearGradient><polygon fill="url(#sYkP-pvQRBi-D-7I2ZY-zd_eGEJAMsRjpTN_gr4)" points="39,39.64 27,43.95 10,38.35 22.18,34.22 27,35.77"></polygon><path fill="#0471c7" d="M21.666,25.711l-2.557,0.73l2.018,4.169l1.106,0.402c0.367,0.126,0.596-0.027,0.876-0.397	c0.25-0.415,0.358-1.082,0.013-1.921l-0.025-0.077L21.666,25.711"></path><path fill="#0471c7" d="M14.88,19.089c-0.571-0.208-1.234-0.217-1.602,0.271l-0.031,0.049l-1.123,1.976l2.771,2.669	l1.68-2.721l-0.709-1.447c-0.238-0.453-0.523-0.62-0.705-0.694l-0.228-0.083C14.916,19.103,14.898,19.096,14.88,19.089"></path><path fill="#0471c7" d="M16.752,29.054l-3.911-1.423l-0.465,0.814L12.3,28.614c-0.077,0.262,0.004,0.587,0.216,1.065	l-0.147-0.303c0.242,0.679,0.855,1.606,1.771,2.041l0.064,0.031l2.559,0.931L16.752,29.054"></path><path fill="#1594de" d="M18.708,28.559l-1.338,2.366l1.689,3.437l-0.061-1.192l1.795,0.653	c0.025,0.012,0.05,0.022,0.075,0.031c0.182,0.066,0.344,0.042,0.454-0.224l1.796-3.029c-0.003,0.004-0.007,0.008-0.01,0.013	c-0.28,0.37-0.509,0.523-0.876,0.397l-1.106-0.402l-2.344-0.853L18.708,28.559"></path><path fill="#1594de" d="M15.11,19.172c-0.038-0.014-0.069-0.023-0.091-0.032l0.144,0.052	C15.143,19.185,15.126,19.178,15.11,19.172 M18.86,20.533c-0.033-0.012-0.067-0.023-0.104-0.032l-3.593-1.308	c0.182,0.075,0.467,0.242,0.705,0.694l0.709,1.447l1.217,2.484l-0.895,0.263l3.049,1.095l1.332-2.345l-0.909,0.25l-0.998-2.031	C19.279,20.826,19.143,20.636,18.86,20.533"></path><path fill="#1594de" d="M13.135,23.285l-3.029-1.102l0.978,0.952l-0.797,1.386c-0.1,0.152-0.136,0.343,0.081,0.739	l2.001,4.117l0.147,0.303c-0.212-0.478-0.293-0.803-0.216-1.065c0.013-0.044,0.03-0.086,0.052-0.127l0.024-0.042l0.465-0.814	l1.035-1.812l0.984,0.939L13.135,23.285"></path><path fill="#d5d8dc" d="M22.185,3.818l19.932,6.585L27,15.473L7.541,8.987L22.185,3.818 M22.18,3.29L6,9l21,7l16.7-5.6	L22.18,3.29L22.18,3.29z"></path>
                </svg>
            <p class="textCenter"> Portfolio </p>
    </div>
    <div class="cardIconSize">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <linearGradient id="L4rKfs~Qrm~k0Pk8MRsoza_s5NUIabJrb4C_gr1" x1="32.012" x2="15.881" y1="32.012" y2="15.881" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset=".242" stop-color="#f2f2f2"></stop><stop offset="1" stop-color="#ccc"></stop></linearGradient><circle cx="24" cy="24" r="11.5" fill="url(#L4rKfs~Qrm~k0Pk8MRsoza_s5NUIabJrb4C_gr1)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozb_s5NUIabJrb4C_gr2" x1="17.45" x2="28.94" y1="17.45" y2="28.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"></stop><stop offset=".363" stop-color="#0e5fa4"></stop><stop offset=".78" stop-color="#135796"></stop><stop offset="1" stop-color="#16528c"></stop></linearGradient><circle cx="24" cy="24" r="7" fill="url(#L4rKfs~Qrm~k0Pk8MRsozb_s5NUIabJrb4C_gr2)"></circle><linearGradient id="L4rKfs~Qrm~k0Pk8MRsozc_s5NUIabJrb4C_gr3" x1="5.326" x2="38.082" y1="5.344" y2="38.099" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset=".331" stop-color="#848c94"></stop><stop offset=".669" stop-color="#78828b"></stop><stop offset="1" stop-color="#64717c"></stop></linearGradient><path fill="url(#L4rKfs~Qrm~k0Pk8MRsozc_s5NUIabJrb4C_gr3)" d="M43.407,19.243c-2.389-0.029-4.702-1.274-5.983-3.493c-1.233-2.136-1.208-4.649-0.162-6.693 c-2.125-1.887-4.642-3.339-7.43-4.188C28.577,6.756,26.435,8,24,8s-4.577-1.244-5.831-3.131c-2.788,0.849-5.305,2.301-7.43,4.188 c1.046,2.044,1.071,4.557-0.162,6.693c-1.281,2.219-3.594,3.464-5.983,3.493C4.22,20.77,4,22.358,4,24 c0,1.284,0.133,2.535,0.364,3.752c2.469-0.051,4.891,1.208,6.213,3.498c1.368,2.37,1.187,5.204-0.22,7.345 c2.082,1.947,4.573,3.456,7.34,4.375C18.827,40.624,21.221,39,24,39s5.173,1.624,6.303,3.971c2.767-0.919,5.258-2.428,7.34-4.375 c-1.407-2.141-1.588-4.975-0.22-7.345c1.322-2.29,3.743-3.549,6.213-3.498C43.867,26.535,44,25.284,44,24 C44,22.358,43.78,20.77,43.407,19.243z M24,34.5c-5.799,0-10.5-4.701-10.5-10.5c0-5.799,4.701-10.5,10.5-10.5S34.5,18.201,34.5,24 C34.5,29.799,29.799,34.5,24,34.5z"></path>
                </svg>
            <p class="textCenter"> Settings </p>
    </div>
    <div class="cardIconSize">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#29b6f6"></stop><stop offset="1" stop-color="#13b2f6"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stop-color="#0076bb"></stop><stop offset=".257" stop-color="#0069b0"></stop><stop offset=".28" stop-color="#0069b0"></stop><stop offset=".424" stop-color="#0069b0"></stop><stop offset=".491" stop-color="#0072b7"></stop><stop offset=".577" stop-color="#0076bb"></stop><stop offset=".795" stop-color="#0076bb"></stop><stop offset="1" stop-color="#006eb9"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                </svg>
            <p class="textCenter"> Visual Studio Code </p>
    </div>  

    <div class="cardIconSize noHouver"> </div>
    <div class="cardIconSize noHouver"> </div>
                </div>
            </section>
            <section id="recommended">
            <div className="lineTitle">
                    <p> Recommended </p>
                    <button> More <span>&gt;</span></button>
                </div>
            <div className="lineMore">
                <div className="itemSizeMore">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 0C7.54688 0 6.5625 0.984375 6.5625 2.1875V32.8125C6.5625 34.0156 7.54688 35 8.75 35H30.625C31.8281 35 32.8125 34.0156 32.8125 32.8125V8.75L24.0625 0H8.75Z" fill="#E2E5E7"/>
<path d="M26.25 8.75H32.8125L24.0625 0V6.5625C24.0625 7.76562 25.0469 8.75 26.25 8.75Z" fill="#B0B7BD"/>
<path d="M32.8125 15.3125L26.25 8.75H32.8125V15.3125Z" fill="#CAD1D8"/>
<path d="M28.4375 28.4375C28.4375 29.0391 27.9453 29.5312 27.3438 29.5312H3.28125C2.67969 29.5312 2.1875 29.0391 2.1875 28.4375V17.5C2.1875 16.8984 2.67969 16.4062 3.28125 16.4062H27.3438C27.9453 16.4062 28.4375 16.8984 28.4375 17.5V28.4375Z" fill="#F15642"/>
<path d="M6.95508 20.7233C6.95508 20.4345 7.18258 20.1195 7.54898 20.1195H9.56914C10.7066 20.1195 11.7304 20.8808 11.7304 22.3398C11.7304 23.7223 10.7066 24.4923 9.56914 24.4923H8.10898V25.6473C8.10898 26.0323 7.86398 26.25 7.54898 26.25C7.26023 26.25 6.95508 26.0323 6.95508 25.6473V20.7233ZM8.10898 21.2209V23.3997H9.56914C10.1554 23.3997 10.6191 22.8823 10.6191 22.3398C10.6191 21.7284 10.1554 21.2209 9.56914 21.2209H8.10898Z" fill="white"/>
<path d="M13.4431 26.25C13.1544 26.25 12.8394 26.0925 12.8394 25.7086V20.7407C12.8394 20.4268 13.1544 20.1982 13.4431 20.1982H15.4458C19.4423 20.1982 19.3548 26.25 15.5245 26.25H13.4431ZM13.9944 21.2657V25.1836H15.4458C17.8072 25.1836 17.9122 21.2657 15.4458 21.2657H13.9944Z" fill="white"/>
<path d="M20.7725 21.3357V22.7259H23.0026C23.3176 22.7259 23.6326 23.0409 23.6326 23.346C23.6326 23.6348 23.3176 23.8711 23.0026 23.8711H20.7725V25.7075C20.7725 26.0137 20.5548 26.2489 20.2486 26.2489C19.8636 26.2489 19.6284 26.0137 19.6284 25.7075V20.7396C19.6284 20.4257 19.8647 20.1971 20.2486 20.1971H23.3187C23.7037 20.1971 23.9312 20.4257 23.9312 20.7396C23.9312 21.0196 23.7037 21.3346 23.3187 21.3346H20.7725V21.3357Z" fill="white"/>
<path d="M27.3438 29.5312H6.5625V30.625H27.3438C27.9453 30.625 28.4375 30.1328 28.4375 29.5312V28.4375C28.4375 29.0391 27.9453 29.5312 27.3438 29.5312Z" fill="#CAD1D8"/>
</svg>
            <p> Erik Prado Resume. <br /> <span>Yesterday</span></p>
                </div>
                <div className="itemSizeMore">
                <img src={Txt} alt="" />
            <p> Thanks for viewing!  <br /> <span>Yesterday</span></p>
                </div>

                
            </div>
            </section>
            </div>
            <div id="sPart">
                <div id="photoInfo">
                    <div id="photoSize">
                    </div>
                    <p> Erik Prado </p>
                </div>
                <div id="power">
                <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5265 5.6266C20.1322 5.23217 19.4927 5.23202 19.0983 5.62635C18.7039 6.02069 18.7038 6.6601 19.0981 7.05453C20.86 8.81698 21.83 11.16 21.8296 13.6521C21.8292 16.1441 20.8584 18.4869 19.0959 20.2488C17.2771 22.0671 14.8888 22.9761 12.4999 22.9759C10.1104 22.9757 7.72046 22.066 5.90171 20.2466C2.26587 16.6096 2.26587 10.6916 5.90171 7.05453C6.29605 6.6601 6.2959 6.02069 5.90146 5.62635C5.50703 5.23202 4.86758 5.23217 4.47329 5.6266C2.33042 7.77006 1.15039 10.6197 1.15039 13.6506C1.15039 16.6814 2.33052 19.531 4.47329 21.6745C6.61655 23.8185 9.4665 24.9995 12.498 25C12.4988 25 12.4992 25 12.5 25C15.5307 24.9999 18.3804 23.8199 20.5239 21.6771C22.6679 19.5339 23.8489 16.684 23.8494 13.6524C23.8499 10.6208 22.6698 7.77059 20.5265 5.6266Z" fill="white"/>
<path d="M12.5055 0C11.9478 0 11.4956 0.452148 11.4956 1.00986V12.4983C11.4956 13.0561 11.9478 13.5082 12.5055 13.5082C13.0632 13.5082 13.5153 13.0561 13.5153 12.4983V1.00986C13.5153 0.452148 13.0632 0 12.5055 0Z" fill="white"/>
</svg>
                </div>
            </div>
        </div>
    )
}