"use client"
import React from "react";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

export default function roomPage({params}){
    const roomId = params.id
    const myMeeting = async (element)=>{
        const appID = process.env.appID;
        const serverSecret = process.env.serverSecret;
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