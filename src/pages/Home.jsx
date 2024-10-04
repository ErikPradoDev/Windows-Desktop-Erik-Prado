import React from 'react';
import { Link } from 'react-router-dom';
import { useState} from 'react';

import '../styles/components/home.sass';
import '../styles/components/home.css';



export default function Home(){
    let time = new Date().toLocaleTimeString();
    let [ctime, setCtime ] = useState(time);

    let UpdateTime=()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    
    
    let data = new Date()
    
    const months =[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    let month = months[data.getMonth()]

    const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let week = daysWeek[data.getDay()];


    let day = data.getDate();



    let cDate = `${week}, ${day} ${month}`

    setInterval(UpdateTime, 1000);


    const [show, setShow] = useState(false);
    const onShowClick =() => {
    if(show == false) {
        setShow(true);
    } else setShow(false);
    };



    return(
        <>
        <div id="lookScreenSize" className="wallpaperLookScreen" onClick={onShowClick}>
            <div id='infoSizeContainer'>
            <svg width="25" height="25" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8173 17.0704C12.0929 17.0704 13.1269 16.0364 13.1269 14.7609C13.1269 13.4854 12.0929 12.4514 10.8173 12.4514C9.54182 12.4514 8.50781 13.4854 8.50781 14.7609C8.50781 16.0364 9.54182 17.0704 10.8173 17.0704Z" fill="white"/>
                        <path d="M10.817 8.60205C8.83229 8.60205 6.95774 9.56746 5.80264 11.1845C5.47308 11.6458 5.57995 12.2869 6.0412 12.6164C6.22204 12.7456 6.43048 12.8078 6.63698 12.8078C6.95724 12.8078 7.27277 12.6583 7.47303 12.3779C8.24369 11.299 9.49375 10.655 10.8169 10.655C12.1402 10.655 13.3902 11.299 14.1608 12.3778C14.4902 12.839 15.1313 12.946 15.5927 12.6165C16.054 12.287 16.1608 11.6459 15.8313 11.1846C14.6763 9.5674 12.8018 8.60205 10.817 8.60205Z" fill="white"/>
                        <path d="M10.8174 4.75293C7.98222 4.75293 5.26849 5.96346 3.37184 8.07412C2.99297 8.49579 3.02759 9.14478 3.44932 9.52371C3.64541 9.69993 3.89064 9.7867 4.13504 9.7867C4.41618 9.78665 4.6962 9.67188 4.89886 9.44629C6.40672 7.76827 8.56397 6.80587 10.8174 6.80587C13.0709 6.80587 15.2282 7.76827 16.7361 9.44623C17.1151 9.86791 17.7641 9.90253 18.1857 9.52365C18.6074 9.14473 18.642 8.49574 18.2631 8.07412C16.3663 5.96341 13.6525 4.75293 10.8174 4.75293Z" fill="white"/>
                        <path d="M20.7061 5.05459C18.0785 2.37782 14.5666 0.903687 10.8174 0.903687C7.06834 0.903687 3.55646 2.37782 0.928726 5.0547C0.531597 5.45929 0.537608 6.10911 0.94214 6.50624C1.14196 6.70238 1.40161 6.80023 1.66115 6.80018C1.92698 6.80018 2.19275 6.69749 2.39368 6.49283C4.6323 4.21241 7.62387 2.95657 10.8174 2.95657C14.0111 2.95657 17.0026 4.21241 19.241 6.49271C19.6382 6.8973 20.2881 6.90326 20.6926 6.50618C21.0971 6.10906 21.1032 5.45918 20.7061 5.05459Z" fill="white"/>
                        </svg>

                        <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5361 14.01C12.3268 13.2218 12.9538 12.285 13.3811 11.2536C13.8085 10.2222 14.0277 9.11643 14.0261 7.99999C14.0277 6.88355 13.8085 5.77782 13.3811 4.7464C12.9538 3.71498 12.3268 2.77822 11.5361 1.98999L10.8281 2.69699C11.5255 3.39271 12.0785 4.21932 12.4556 5.12936C12.8326 6.0394 13.0261 7.01494 13.0251 7.99999C13.0251 10.071 12.1851 11.946 10.8281 13.303L11.5361 14.01Z" fill="#fff"/>
                                <path d="M10.1211 12.596C10.7255 11.9931 11.2049 11.2767 11.5317 10.488C11.8584 9.69925 12.0261 8.85373 12.0251 7.99999C12.0261 7.14626 11.8584 6.30073 11.5317 5.512C11.2049 4.72327 10.7255 4.00688 10.1211 3.40399L9.41406 4.11099C9.92568 4.62104 10.3314 5.22721 10.6079 5.89464C10.8843 6.56206 11.0261 7.27757 11.0251 7.99999C11.0264 8.72251 10.8848 9.43817 10.6085 10.1058C10.3322 10.7734 9.92662 11.3797 9.41506 11.89L10.1211 12.596Z" fill="#fff"/>
                                <path d="M8.707 11.182C9.12486 10.7641 9.45633 10.268 9.68247 9.72208C9.90861 9.17611 10.025 8.59095 10.025 8C10.025 7.40905 9.90861 6.82388 9.68247 6.27791C9.45633 5.73194 9.12486 5.23586 8.707 4.818L8 5.525C8.325 5.85003 8.58279 6.23589 8.75866 6.66055C8.93453 7.08521 9.02503 7.54036 9.025 8C9.02503 8.45964 8.93453 8.91478 8.75866 9.33944C8.58279 9.7641 8.325 10.15 8 10.475L8.707 11.182ZM6.717 3.55C6.80171 3.59081 6.8732 3.65467 6.92326 3.73427C6.97332 3.81387 6.99991 3.90597 7 4V12C6.99987 12.0941 6.97319 12.1862 6.92303 12.2658C6.87288 12.3454 6.80128 12.4093 6.71647 12.45C6.63166 12.4907 6.53708 12.5067 6.4436 12.4961C6.35011 12.4855 6.26152 12.4487 6.188 12.39L3.825 10.5H1.5C1.36739 10.5 1.24021 10.4473 1.14645 10.3536C1.05268 10.2598 1 10.1326 1 10V6C1 5.86739 1.05268 5.74021 1.14645 5.64644C1.24021 5.55268 1.36739 5.5 1.5 5.5H3.825L6.188 3.61C6.26157 3.55118 6.35026 3.51435 6.44385 3.50374C6.53744 3.49312 6.63212 3.50916 6.717 3.55Z" fill="#FFF"/>
                                </svg>  

            </div>
            <div id="time">
                <p className="fontSize80px">{ctime}</p>
                <p className="fontSize30px">{cDate}</p>
            </div>

            <div id='photoCredit'>
                <div id='photoIconCredit'>
                <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_206_187)">
<path d="M15 12C15 12.2652 14.8946 12.5196 14.7071 12.7071C14.5196 12.8946 14.2652 13 14 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V6C1 5.73478 1.10536 5.48043 1.29289 5.29289C1.48043 5.10536 1.73478 5 2 5H3.172C3.96724 4.99956 4.72977 4.6834 5.292 4.121L6.122 3.293C6.309 3.10594 6.5625 3.00059 6.827 3H9.171C9.43619 3.00006 9.69051 3.10545 9.878 3.293L10.706 4.121C10.9846 4.39971 11.3154 4.6208 11.6795 4.77162C12.0436 4.92244 12.4339 5.00005 12.828 5H14C14.2652 5 14.5196 5.10536 14.7071 5.29289C14.8946 5.48043 15 5.73478 15 6V12ZM2 4C1.46957 4 0.960859 4.21071 0.585786 4.58579C0.210714 4.96086 0 5.46957 0 6L0 12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H14C14.5304 14 15.0391 13.7893 15.4142 13.4142C15.7893 13.0391 16 12.5304 16 12V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H12.828C12.2976 3.99989 11.789 3.7891 11.414 3.414L10.586 2.586C10.211 2.2109 9.70239 2.00011 9.172 2H6.828C6.29761 2.00011 5.78899 2.2109 5.414 2.586L4.586 3.414C4.21101 3.7891 3.70239 3.99989 3.172 4H2Z" fill="white"/>
<path d="M8 11C7.33696 11 6.70107 10.7366 6.23223 10.2678C5.76339 9.79893 5.5 9.16304 5.5 8.5C5.5 7.83696 5.76339 7.20107 6.23223 6.73223C6.70107 6.26339 7.33696 6 8 6C8.66304 6 9.29893 6.26339 9.76777 6.73223C10.2366 7.20107 10.5 7.83696 10.5 8.5C10.5 9.16304 10.2366 9.79893 9.76777 10.2678C9.29893 10.7366 8.66304 11 8 11ZM8 12C8.92826 12 9.8185 11.6313 10.4749 10.9749C11.1313 10.3185 11.5 9.42826 11.5 8.5C11.5 7.57174 11.1313 6.6815 10.4749 6.02513C9.8185 5.36875 8.92826 5 8 5C7.07174 5 6.1815 5.36875 5.52513 6.02513C4.86875 6.6815 4.5 7.57174 4.5 8.5C4.5 9.42826 4.86875 10.3185 5.52513 10.9749C6.1815 11.6313 7.07174 12 8 12ZM3 6.5C3 6.63261 2.94732 6.75979 2.85355 6.85355C2.75979 6.94732 2.63261 7 2.5 7C2.36739 7 2.24021 6.94732 2.14645 6.85355C2.05268 6.75979 2 6.63261 2 6.5C2 6.36739 2.05268 6.24021 2.14645 6.14645C2.24021 6.05268 2.36739 6 2.5 6C2.63261 6 2.75979 6.05268 2.85355 6.14645C2.94732 6.24021 3 6.36739 3 6.5Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_206_187">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

                </div>
                <p> This image is made available for free, designed by Freepik. </p>
            </div>

            
            {show && 
                        <div id="lookScreenBlur" >
                            <div className="margin"> 
                                <div id="photoSize" className=" photoPicture"> </div>
                                <h1 className="txtCenter"> Erik Prado</h1>
                                <Link to='/windows'> <button className="marginAuto"> Enter </button> </Link>
                            </div>
                        </div>
            }
        </div>
        </>
    )
}