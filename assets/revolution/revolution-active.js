
var revapi4,
    tpj;    
(function() {            
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad)
        else
    onLoad();
    function onLoad() {                
        if (tpj===undefined) {
            tpj = jQuery;
            if("off" == "on") tpj.noConflict();        
        }

        // Slider No

        if(tpj("#rev_slider_6_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_6_1");
                }else{
                    revapi6 = tpj("#rev_slider_6_1").show().revolution({
                        sliderType:"standard",
                        sliderLayout:"fullscreen",
                        dottedOverlay:"none",
                        delay:9000,
                        navigation: {
                            keyboardNavigation:"off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
                            onHoverStop:"off",
                            touch:{
                                touchenabled:"on",
                                touchOnDesktop:"off",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: false
                            }
                            ,
                            arrows: {
                                style:"uranus",
                                enable:true,
                                hide_onmobile:true,
                                hide_under:767,
                                hide_onleave:false,
                                tmp:'',
                                left: {
                                    h_align:"left",
                                    v_align:"center",
                                    h_offset:20,
                                    v_offset:0
                                },
                                right: {
                                    h_align:"right",
                                    v_align:"center",
                                    h_offset:20,
                                    v_offset:0
                                }
                            }
                            ,
                            bullets: {
                                enable:true,
                                hide_onmobile:false,
                                style:"hermes",
                                hide_onleave:false,
                                direction:"horizontal",
                                h_align:"center",
                                v_align:"bottom",
                                h_offset:0,
                                v_offset:20,
                                space:5,
                                tmp:''
                            }
                        },
                        responsiveLevels:[1240,1024,778,480],
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:[1200,1024,778,480],
                        gridheight:[800,768,960,720],
                        lazyType:"smart",
                        parallax: {
                            type:"scroll",
                            origo:"slidercenter",
                            speed:1000,
                          speedbg:0,
                          speedls:0,
                            levels:[5,10,15,20,25,30,35,40,45,46,47,-60,-70,200,-120,55],
                            disable_onmobile:"on"
                        },
                        shadow:0,
                        spinner:"off",
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,
                        shuffle:"off",
                        autoHeight:"off",
                        fullScreenAutoWidth:"off",
                        fullScreenAlignForce:"off",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "60px",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }
                    });
        }; /* END OF revapi call */

        if(tpj("#rev_slider_2_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_2_1");
                }else{
                    revapi2 = tpj("#rev_slider_2_1").show().revolution({
                        sliderType:"standard",
                        sliderLayout:"fullscreen",
                        dottedOverlay:"none",
                        delay:20000,
                        navigation: {
                            onHoverStop:"off",
                        },
                        responsiveLevels:[1240,1024,778,480],
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:[1240,1024,778,480],
                        gridheight:[868,768,960,720],
                        lazyType:"single",
                        parallax: {
                            type:"mouse",
                            origo:"slidercenter",
                            speed:1000,
                          speedbg:0,
                          speedls:0,
                            levels:[1,2,3,4,5,6,7,8,9,10,47,48,49,50,51,55],
                        },
                        shadow:0,
                        spinner:"off",
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,
                        shuffle:"off",
                        autoHeight:"off",
                        fullScreenAutoWidth:"off",
                        fullScreenAlignForce:"off",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "60px",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"on",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }
                    });
        }; /* END OF revapi call */

        if(tpj("#rev_slider_1_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_1_1");
            }else{
                revapi1 = tpj("#rev_slider_1_1").show().revolution({
                    sliderType:"standard",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    navigation: {
                        onHoverStop:"off",
                    },
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1170,1024,768,480],
                    gridheight:[868,768,960,720],
                    lazyType:"none",
                    shadow:0,
                    spinner:"spinner0",
                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,
                    shuffle:"off",
                    autoHeight:"on",
                    fullScreenAutoWidth:"off",
                    fullScreenAlignForce:"off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    disableProgressBar:"on",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        nextSlideOnWindowFocus:"off",
                        disableFocusListener:false,
                    }
                });
            }; /* END OF revapi call */

            if(tpj("#rev_slider_5_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_5_1");
                }else{
                    revapi5 = tpj("#rev_slider_5_1").show().revolution({
                        sliderType:"standard",
                        sliderLayout:"fullscreen",
                        dottedOverlay:"none",
                        delay:9000,
                        navigation: {
                            keyboardNavigation:"off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
                            onHoverStop:"on",
                            bullets: {
                                enable:true,
                                hide_onmobile:true,
                                hide_under:768,
                                style:"custom-3",
                                hide_onleave:false,
                                direction:"horizontal",
                                    container:"layergrid",
                                h_align:"right",
                                v_align:"bottom",
                                h_offset:0,
                                v_offset:100,
                                space:25,
                                tmp:'{{param1}}'
                            }
                        },
                        responsiveLevels:[1240,1024,778,480],
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:[1240,1024,768,480],
                        gridheight:[868,768,960,720],
                        lazyType:"none",
                        parallax: {
                            type:"mouse",
                            origo:"enterpoint",
                            speed:400,
                          speedbg:0,
                          speedls:0,
                            levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                        },
                        shadow:0,
                        spinner:"spinner0",
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,
                        shuffle:"off",
                        autoHeight:"off",
                        fullScreenAutoWidth:"off",
                        fullScreenAlignForce:"off",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            allowHTML5AutoPlayOnAndroid: false,
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }
                    });
            }; /* END OF revapi call */

            if(tpj("#rev_slider_5_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_5_1");
                }else{
                    revapi5 = tpj("#rev_slider_5_1").show().revolution({
                        sliderType:"standard",
                        sliderLayout:"fullscreen",
                        dottedOverlay:"none",
                        delay:9000,
                        navigation: {
                            keyboardNavigation:"off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
                            onHoverStop:"on",
                            bullets: {
                                enable:true,
                                hide_onmobile:true,
                                hide_under:768,
                                style:"custom-3",
                                hide_onleave:false,
                                direction:"horizontal",
                                    container:"layergrid",
                                h_align:"right",
                                v_align:"bottom",
                                h_offset:0,
                                v_offset:100,
                                space:25,
                                tmp:'{{param1}}'
                            }
                        },
                        responsiveLevels:[1240,1024,778,480],
                        visibilityLevels:[1240,1024,778,480],
                        gridwidth:[1240,1024,768,480],
                        gridheight:[868,768,960,720],
                        lazyType:"none",
                        parallax: {
                            type:"mouse",
                            origo:"enterpoint",
                            speed:400,
                          speedbg:0,
                          speedls:0,
                            levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                        },
                        shadow:0,
                        spinner:"none",
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,
                        shuffle:"off",
                        autoHeight:"off",
                        fullScreenAutoWidth:"off",
                        fullScreenAlignForce:"off",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            allowHTML5AutoPlayOnAndroid: false,
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }
                    });
            }; /* END OF revapi call */

            if(tpj("#rev_slider_4_1").revolution == undefined){
                    revslider_showDoubleJqueryError("#rev_slider_4_1");
                }else{
                    revapi4 = tpj("#rev_slider_4_1").show().revolution({
                        sliderType:"standard",
                        sliderLayout:"fullwidth",
                        dottedOverlay:"none",
                        delay:9000,
                        navigation: {
                            keyboardNavigation:"off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                             mouseScrollReverse:"default",
                            onHoverStop:"off",
                            arrows: {
                                style:"hermes-3",
                                enable:true,
                                hide_onmobile:true,
                                hide_under:576,
                                hide_onleave:true,
                                hide_delay:200,
                                hide_delay_mobile:1200,
                                tmp:'<div class="tp-arr-allwrapper">    <div class="tp-arr-imgholder"></div></div>',
                                left: {
                                    h_align:"left",
                                    v_align:"center",
                                    h_offset:20,
                                    v_offset:0
                                },
                                right: {
                                    h_align:"right",
                                    v_align:"center",
                                    h_offset:20,
                                    v_offset:0
                                }
                            }
                        },
                        responsiveLevels:[1240,1240,778,480],
                        visibilityLevels:[1240,1240,778,480],
                        gridwidth:[1200,1200,768,576],
                        gridheight:[868,868,500,480],
                        lazyType:"none",
                        shadow:0,
                        spinner:"spinner0",
                        stopLoop:"off",
                        stopAfterLoops:-1,
                        stopAtSlide:-1,
                        shuffle:"off",
                        autoHeight:"off",
                        disableProgressBar:"on",
                        hideThumbsOnMobile:"off",
                        hideSliderAtLimit:0,
                        hideCaptionAtLimit:0,
                        hideAllCaptionAtLilmit:0,
                        debugMode:false,
                        fallbacks: {
                            simplifyAll:"off",
                            nextSlideOnWindowFocus:"off",
                            disableFocusListener:false,
                        }
                    });
    }; /* END OF revapi call */



    }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */