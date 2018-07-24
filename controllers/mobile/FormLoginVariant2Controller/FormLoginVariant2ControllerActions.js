define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for CopyTextArea0g16416c8be3c46 **/
    AS_TextArea_g77680f645704dac95854a09f5e458f0: function AS_TextArea_g77680f645704dac95854a09f5e458f0(eventobject) {
        var self = this;

        function STYLE_ACTION____gb303224623a484caaff810620c6fbc7_Callback() {}
        function STYLE_ACTION____ee6ba4f7880e4b20af80c2a6a1de3324_Callback() {}
        if ((self.view.CopyTextArea0g16416c8be3c46.text == 111111)) {
            self.view.CopyLabel0c62b34aa333741.text = "not '111111' password";
            self.view.CopyLabel0c62b34aa333741.isVisible = true;
            self.view.CopyTextArea0g16416c8be3c46.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.3
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": STYLE_ACTION____ee6ba4f7880e4b20af80c2a6a1de3324_Callback
            });
        } else {
            self.view.CopyTextArea0g16416c8be3c46.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "07e00000",
                    "opacity": 0.3
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": STYLE_ACTION____gb303224623a484caaff810620c6fbc7_Callback
            });
        }
    },
    /** onClick defined for Button0f7f81d401c2c4d **/
    AS_Button_b40b74ecb6b245e7a908280d4bd413a9: function AS_Button_b40b74ecb6b245e7a908280d4bd413a9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("FormLogOut");
        ntf.navigate();
    },
    /** onTouchMove defined for FlexContainer0e8bc44cec82048 **/
    AS_FlexContainer_fb59c7fee7d44c46be3a41951c9c725d: function AS_FlexContainer_fb59c7fee7d44c46be3a41951c9c725d(eventobject, x, y) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.opacity = "0";
    },
    /** onTouchEnd defined for FlexContainer0e8bc44cec82048 **/
    AS_FlexContainer_j3cb5e0be91a4086ba3c5f6b427cacef: function AS_FlexContainer_j3cb5e0be91a4086ba3c5f6b427cacef(eventobject, x, y) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.opacity = "0.5";
    },
    /** onTouchMove defined for CopyFlexContainerErrCustom0i801c4f174a14a **/
    AS_FlexContainer_d7c32aadb2e74f6b99130b94101779cd: function AS_FlexContainer_d7c32aadb2e74f6b99130b94101779cd(eventobject, x, y) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.opacity = "0";
    },
    /** onTouchEnd defined for CopyFlexContainerErrCustom0i801c4f174a14a **/
    AS_FlexContainer_be783ea1898a41f5ac171a52e20af23c: function AS_FlexContainer_be783ea1898a41f5ac171a52e20af23c(eventobject, x, y) {
        var self = this;
        self.view.FlexContainer0e8bc44cec82048.opacity = "0.5";
    },
    /** onTextChange defined for TextArea0g8c4581680c241 **/
    AS_TextArea_be59f936f9154a09ba8870656f856bf0: function AS_TextArea_be59f936f9154a09ba8870656f856bf0(eventobject) {
        var self = this;

        function STYLE_ACTION____a2664221972040ef927633470fc9cef3_Callback() {}
        function STYLE_ACTION____bc4343eaf999488ab8336ff8577f8b3e_Callback() {}
        if ((self.view.TextArea0g8c4581680c241.text == 'some_mail@gmail.com')) {
            self.view.CopyLabel0c62b34aa333741.text = "email not 'some_mail@gmail.com'";
            self.view.TextArea0g8c4581680c241.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.35
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": STYLE_ACTION____bc4343eaf999488ab8336ff8577f8b3e_Callback
            });
            self.view.CopyFlexContainerErrCustom0i801c4f174a14a.isVisible = true;
        } else {
            self.view.TextArea0g8c4581680c241.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "backgroundColor": "ff000000",
                    "opacity": 0.35
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": STYLE_ACTION____a2664221972040ef927633470fc9cef3_Callback
            });
        }
    }
});