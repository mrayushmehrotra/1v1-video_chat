"use client"
import React from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

export default function roomPage({params}){
    const roomId = params.id
    const myMeeting = async (element)=>{
        const appID = 890409462;
        const serverSecret = '54cf083f176efdb6b10e4224b84ed2dc';
        const kitToken  =
         ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,
            roomId,
            Date.now().toString(),
            "Main User"
            );

            const zc = ZegoUIKitPrebuilt.create(kitToken)
            zc.joinRoom({
                container:element,
                sharedLinks: [{
                        name:"copy link",
                        url: `${window.location.href}`
                }],
                
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton:true,
            })
    }

    return(
        <>
        <div>
        <div ref={myMeeting} />
        </div>
        </>
    )
}