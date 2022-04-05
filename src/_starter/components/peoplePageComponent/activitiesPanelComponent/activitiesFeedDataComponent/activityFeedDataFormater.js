import React from "react";
// Common Components
import { default as Voicemail } from "../../../../shared/Icons/Voicemail";
import { default as Badge } from "../../../../shared/Icons/Badge";
import { default as PaperPlane } from "../../../../shared/Icons/PaperPlane";
import { default as PhoneIcon } from "../../../../shared/Icons/Phone";
import { default as Reply } from "../../../../shared/Icons/Reply";
import { default as Rocket } from "../../../../shared/Icons/Rocket";

export const FormatFeedData = (data) => {

    const voicemail = () => {
        return {
            id: data.id,
            Icon: Voicemail,
            mainSubject: "Voicemail Recieved " + data.dynamic_data.voicemail_duration,
            userSubject: "to " + data.dynamic_data.user_name,
            date: data.occurred_at,
            bgColor: "greenLightest",
            color: "greenDark"
        }
    }
    const success = () => {
        return { 
            id: data.id,
            Icon: Badge,
            mainSubject: "Marked as Success",
            userSubject: data.dynamic_data.user_name,
            date: data.occurred_at,
            bgColor: "indigoLightest",
            color: "indigoDark" 
        }
    }
    const sent_email = () => {
        return { 
            id: data.id,
            Icon: PaperPlane,
            mainSubject: data.static_data.subject,
            userSubject: data.dynamic_data.user_name + " | " + data.dynamic_data.counts.views + data.dynamic_data.counts.clicks + data.dynamic_data.counts.replies,
            date: data.occurred_at,
            bgColor: "indigoLightest",
            color: "indigoDark" }
    }
    const call  = () => {
        return { 
            id: data.id,
            Icon: PhoneIcon,
            mainSubject: data.static_data.sentiment,
            userSubject: data.dynamic_data.user_name + " with " + data.dynamic_data.phone_number,
            date: data.occurred_at,
            bgColor: "greenLightest",
            color: "greenDark"
        }
    }
    const email_reply  = () => {
        return { 
            id: data.id,
            Icon: Reply,
            mainSubject: "RE: " + data.static_data.in_reply_to_subject + " " + data.static_data.body, 
            userSubject: data.dynamic_data.user_name + " | " + data.dynamic_data.counts.views + data.dynamic_data.counts.clicks + data.dynamic_data.counts.replies,
            date: data.occurred_at, 
            bgColor: "blueLightest",
            color: "blueDark" }
    }
    const added_to_cadence = () => {
        return { 
            id: data.id,
            Icon: Rocket,
            mainSubject: "Added to Cadence " + data.dynamic_data.cadence_name,
            userSubject: ()=> ("Added by " + data.static_data.instigator.action_caller_name + " | Assigned to " + data.dynamic_data.user_name),
            date: data.occurred_at,
            bgColor: "tealLightest",
            color: "tealDark"
        }
    }
    
    const activityTypes = {voicemail, success, sent_email, call, email_reply, added_to_cadence};
    if (data && data.type) return activityTypes[data.type]();
    return null;
}