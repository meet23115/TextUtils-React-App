import React, { useState } from 'react'

export default function About(props) {

    return (
        <div className='container' style={{padding:0}}>
            <h1 className='my-3' style={{color: props.mode==="light" ? "#000000" : "#ffffff"}}>About Us</h1>
            <div className="accordion mb-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#464648", color: props.mode==="light" ? "#000000" : "#ffffff"}}>
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#5a5a5a", color: props.mode==="light" ? "#000000" : "#ffffff"}}>
                            TextUtils gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#464648", color: props.mode==="light" ? "#000000" : "#ffffff"}}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#5a5a5a", color: props.mode==="light" ? "#000000" : "#ffffff"}}>
                            TextUtils is free chcracter counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word / character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#464648", color: props.mode==="light" ? "#000000" : "#ffffff"}}>
                            <strong>Browser compitable</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==="light" ? "#ffffff" : "#5a5a5a", color: props.mode==="light" ? "#000000" : "#ffffff"}}>
                        This word counter works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
