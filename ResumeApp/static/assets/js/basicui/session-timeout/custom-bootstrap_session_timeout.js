var SessionTimeout=function() {
    var e=function() {
        $.sessionTimeout( {
            title:"Session Timeout Notification", 
            message:"Your session is about to expire.", 
            keepAliveUrl:"", 
            redirUrl:"auth_login_3.html", 
            logoutUrl:"auth_login_3.html", 
            warnAfter:1000, 
            redirAfter:15000, 
            ignoreUserActivity:!0, 
            countdownMessage:"Redirecting in {timer}.", 
            countdownBar: !0
        }
        )
    };
    return {
        init:function() {
            e()
        }
    }
}
();
jQuery(document).ready(function() {
    SessionTimeout.init()
}
);